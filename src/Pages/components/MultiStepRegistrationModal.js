import { useState, useEffect } from "react";
import useEventRegistrationStore from "../../store/eventRegistrationStore";

/**
 * Single-Page Event Registration Modal with Inline Email Verification & Payment
 *
 * Props:
 * - onClose: Function to close modal
 * - eventType: 'masterclass' or 'workshop'
 */
export default function MultiStepRegistrationModal({ onClose, eventType }) {
  const {
    payment,
    updateRegistrationForm,
    closeModal: resetAndClose,
  } = useEventRegistrationStore();

  const [showSuccess, setShowSuccess] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Initialize form with event type
  useEffect(() => {
    updateRegistrationForm('eventType', eventType);
  }, [eventType, updateRegistrationForm]);

  // Handle successful payment
  useEffect(() => {
    if (payment.isComplete) {
      setShowSuccess(true);
    }
  }, [payment.isComplete]);

  const handleClose = () => {
    resetAndClose();
    setShowSuccess(false);
    onClose();
  };

  return (
    <div className="modal-overlay open">
      <div className="modal-box">
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "none",
            background: "rgba(0,0,0,0.06)",
            cursor: "pointer",
            fontSize: "1rem",
            zIndex: 10
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ padding: "2rem 2rem 1.5rem", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.3rem 0.75rem",
            borderRadius: 100,
            marginBottom: "0.75rem",
            background: eventType === 'masterclass' ? "rgba(44,62,193,0.1)" : "rgba(201,168,76,0.1)",
            color: eventType === 'masterclass' ? "#2C3EC1" : "#A07830"
          }}>
            {eventType === 'masterclass' ? '1-Hour Masterclass' : '2-Day Workshop'}
          </span>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: "#0F1B3D" }}>
            {showSuccess ? 'You\'re All Set!' : 'Event Registration'}
          </div>
        </div>

        {/* Modal Content */}
        <div style={{ padding: "2rem" }}>
          {showSuccess ? (
            <SuccessStep eventType={eventType} onClose={handleClose} />
          ) : (
            <RegistrationForm eventType={eventType} />
          )}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Single Registration Form with Inline Email Verification & Payment
// ═══════════════════════════════════════════════════════════════════════
function RegistrationForm({ eventType }) {
  const {
    emailVerification,
    registrationForm,
    registration,
    payment,
    sendVerificationCode,
    verifyEmailCode,
    updateRegistrationForm,
    submitRegistration,
    createPaymentOrder,
    handlePaymentSuccess,
    handlePaymentFailure,
  } = useEventRegistrationStore();

  const [errors, setErrors] = useState({});
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [otpError, setOtpError] = useState('');
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  // Handle send verification code
  const handleSendCode = async () => {
    if (!registrationForm.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registrationForm.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
      return;
    }

    setErrors({ ...errors, email: '' });
    setIsCheckingEmail(true);

    // Check if email is already registered for this event type
    try {
      const EventService = await import('../../services/EventService');
      const checkResult = await EventService.checkEmailRegistration(
        registrationForm.email,
        eventType
      );

      if (checkResult.success && checkResult.data.isRegistered) {
        setErrors({
          ...errors,
          email: `This email is already registered for the ${eventType}. Please use a different email.`
        });
        setIsCheckingEmail(false);
        return;
      }
    } catch (error) {
      console.error('Error checking email registration:', error);
      // Continue with verification even if check fails
    }

    // Proceed with sending verification code
    const result = await sendVerificationCode(registrationForm.email);
    setIsCheckingEmail(false);

    if (result.success) {
      setShowOtpInput(true);
    } else {
      setErrors({ ...errors, email: result.error || 'Failed to send verification code' });
    }
  };

  // Handle verify OTP
  const handleVerifyOtp = async () => {
    if (otpCode.length !== 6) {
      setOtpError('Please enter the 6-digit code');
      return;
    }

    const result = await verifyEmailCode(otpCode);

    if (result.success) {
      setShowOtpInput(false);
      setOtpCode('');
      setOtpError('');
    } else {
      setOtpError(result.error || 'Invalid verification code');
    }
  };

  // Validate form
  const validate = () => {
    const e = {};
    if (!registrationForm.name.trim()) e.name = "Please enter your name";
    if (!registrationForm.email.trim()) e.email = "Please enter your email";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registrationForm.email)) e.email = "Please enter a valid email";
    if (!emailVerification.isVerified) e.email = "Please verify your email first";
    if (registrationForm.phone && !/^[6-9]\d{9}$/.test(registrationForm.phone.replace(/[\s+\-()']/g, ""))) {
      e.phone = "Please enter a valid 10-digit number";
    }
    return e;
  };

  // Load Razorpay script dynamically only when needed
  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      // Check if script already loaded
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error('Failed to load Razorpay SDK'));
      document.body.appendChild(script);
    });
  };

  // Open Razorpay checkout
  const openRazorpayCheckout = async (orderData) => {
    try {
      // Load Razorpay script first
      await loadRazorpayScript();
    } catch (error) {
      console.error('Razorpay SDK loading error:', error);
      handlePaymentFailure('Payment gateway not available. Please refresh and try again.');
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_placeholder', // Replace with your Razorpay key
      amount: orderData.amount * 100, // Amount in paise
      currency: orderData.currency || 'INR',
      name: 'MultipliersKraft',
      description: `${eventType === 'masterclass' ? 'Masterclass' : 'Workshop'} Registration`,
      order_id: orderData.orderId,
      handler: async function (response) {
        // Payment successful - verify on backend
        const result = await handlePaymentSuccess({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });

        if (!result.success) {
          alert('Payment verification failed. Please contact support.');
        }
      },
      prefill: {
        name: registrationForm.name,
        email: registrationForm.email,
        contact: registrationForm.phone || '',
      },
      theme: {
        color: '#2C3EC1',
      },
      modal: {
        ondismiss: function() {
          handlePaymentFailure('Payment cancelled by user');
        },
      },
    };

    const razorpayInstance = new window.Razorpay(options);

    razorpayInstance.on('payment.failed', function (response) {
      handlePaymentFailure(response.error.description || 'Payment failed');
    });

    razorpayInstance.open();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    // Step 1: Submit registration
    const registrationResult = await submitRegistration();

    if (!registrationResult.success) {
      return; // Error already set in store
    }

    // Step 2: Create payment order
    const orderResult = await createPaymentOrder();

    if (!orderResult.success) {
      return; // Error already set in store
    }

    // Step 3: Open Razorpay checkout
    openRazorpayCheckout(orderResult.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div style={{ marginBottom: "1.25rem" }}>
        <label style={{
          display: "block",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#4A4A6A",
          marginBottom: "0.5rem"
        }}>
          Full Name *
        </label>
        <input
          type="text"
          placeholder="Your full name"
          value={registrationForm.name}
          onChange={(e) => {
            updateRegistrationForm('name', e.target.value);
            setErrors({ ...errors, name: '' });
          }}
          style={{
            width: "100%",
            padding: "0.85rem 1rem",
            borderRadius: 8,
            border: errors.name ? "1.5px solid #EF4444" : "1.5px solid rgba(0,0,0,0.12)",
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "0.9rem",
            outline: "none",
            background: "#F8F7F4"
          }}
        />
        {errors.name && <p style={{ fontSize: "0.75rem", color: "#EF4444", marginTop: "0.3rem" }}>{errors.name}</p>}
      </div>

      {/* Email with inline verification */}
      <div style={{ marginBottom: "1.25rem" }}>
        <label style={{
          display: "block",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#4A4A6A",
          marginBottom: "0.5rem"
        }}>
          Email Address *
        </label>

        <div className="email-verify-wrapper" style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="your@email.com"
              value={registrationForm.email}
              onChange={(e) => {
                const newEmail = e.target.value;
                updateRegistrationForm('email', newEmail);
                setErrors({ ...errors, email: '' });

                // Reset verification if email changes after being verified
                if (emailVerification.isVerified && newEmail !== emailVerification.email) {
                  useEventRegistrationStore.setState({
                    emailVerification: {
                      ...useEventRegistrationStore.getState().emailVerification,
                      isVerified: false,
                      email: '',
                    }
                  });
                  setShowOtpInput(false);
                }
              }}
              disabled={emailVerification.isVerified}
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                borderRadius: 8,
                border: errors.email
                  ? "1.5px solid #EF4444"
                  : emailVerification.isVerified
                    ? "1.5px solid rgba(34,197,94,0.3)"
                    : "1.5px solid rgba(0,0,0,0.12)",
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "0.9rem",
                outline: "none",
                background: emailVerification.isVerified ? "rgba(34,197,94,0.05)" : "#F8F7F4",
                color: emailVerification.isVerified ? "#059669" : "#000",
                cursor: emailVerification.isVerified ? "not-allowed" : "text"
              }}
            />
          </div>

          {!emailVerification.isVerified && (
            <button
              type="button"
              onClick={handleSendCode}
              disabled={isCheckingEmail || emailVerification.isSendingCode || !registrationForm.email}
              style={{
                padding: "0.85rem 1.5rem",
                border: "none",
                borderRadius: 8,
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: (isCheckingEmail || emailVerification.isSendingCode || !registrationForm.email) ? "not-allowed" : "pointer",
                background: (isCheckingEmail || emailVerification.isSendingCode) ? "#9CA3AF" : "#2C3EC1",
                color: "#fff",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              {(isCheckingEmail || emailVerification.isSendingCode) && (
                <div style={{
                  width: "14px",
                  height: "14px",
                  border: "2px solid #fff",
                  borderTopColor: "transparent",
                  borderRadius: "50%",
                  animation: "spin 0.6s linear infinite"
                }} />
              )}
              {isCheckingEmail ? 'Checking...' : emailVerification.isSendingCode ? 'Sending...' : 'Verify'}
            </button>
          )}

          {emailVerification.isVerified && (
            <div style={{
              padding: "0.85rem 1rem",
              background: "rgba(34,197,94,0.1)",
              color: "#059669",
              borderRadius: 8,
              fontSize: "0.9rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.25rem"
            }}>
              ✓ Verified
            </div>
          )}
        </div>

        {errors.email && <p style={{ fontSize: "0.75rem", color: "#EF4444", marginTop: "0.3rem" }}>{errors.email}</p>}
        {emailVerification.verificationError && (
          <p style={{ fontSize: "0.75rem", color: "#EF4444", marginTop: "0.3rem" }}>
            {emailVerification.verificationError}
          </p>
        )}

        {/* OTP Input (shown after clicking Verify) */}
        {showOtpInput && !emailVerification.isVerified && (
          <div style={{ marginTop: "0.75rem", padding: "1rem", background: "rgba(44,62,193,0.05)", borderRadius: 8 }}>
            <p style={{ fontSize: "0.85rem", color: "#4A4A6A", marginBottom: "0.75rem" }}>
              Enter the 6-digit code sent to <strong>{registrationForm.email}</strong>
            </p>

            <div className="otp-confirm-wrapper" style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                placeholder="000000"
                value={otpCode}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                  setOtpCode(val);
                  setOtpError('');
                }}
                maxLength={6}
                disabled={emailVerification.isVerifying}
                style={{
                  flex: 1,
                  padding: "0.75rem",
                  borderRadius: 8,
                  border: otpError ? "1.5px solid #EF4444" : "1.5px solid rgba(0,0,0,0.12)",
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "1.1rem",
                  letterSpacing: "0.5em",
                  textAlign: "center",
                  outline: "none",
                  background: "#fff"
                }}
              />

              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={emailVerification.isVerifying || otpCode.length !== 6}
                style={{
                  padding: "0.75rem 1.5rem",
                  border: "none",
                  borderRadius: 8,
                  fontFamily: "'DM Sans',sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: (emailVerification.isVerifying || otpCode.length !== 6) ? "not-allowed" : "pointer",
                  background: (emailVerification.isVerifying || otpCode.length !== 6) ? "#9CA3AF" : "#059669",
                  color: "#fff",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                {emailVerification.isVerifying && (
                  <div style={{
                    width: "14px",
                    height: "14px",
                    border: "2px solid #fff",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 0.6s linear infinite"
                  }} />
                )}
                {emailVerification.isVerifying ? 'Verifying...' : 'Confirm'}
              </button>
            </div>

            {otpError && <p style={{ fontSize: "0.75rem", color: "#EF4444", marginTop: "0.5rem" }}>{otpError}</p>}

            <button
              type="button"
              onClick={handleSendCode}
              disabled={emailVerification.isSendingCode}
              style={{
                marginTop: "0.75rem",
                padding: "0.5rem",
                background: "none",
                border: "none",
                color: "#2C3EC1",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: emailVerification.isSendingCode ? "not-allowed" : "pointer",
                textDecoration: "underline"
              }}
            >
              {emailVerification.isSendingCode ? 'Sending...' : 'Resend Code'}
            </button>
          </div>
        )}
      </div>

      {/* Phone */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{
          display: "block",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#4A4A6A",
          marginBottom: "0.5rem"
        }}>
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          value={registrationForm.phone}
          onChange={(e) => {
            updateRegistrationForm('phone', e.target.value);
            setErrors({ ...errors, phone: '' });
          }}
          style={{
            width: "100%",
            padding: "0.85rem 1rem",
            borderRadius: 8,
            border: errors.phone ? "1.5px solid #EF4444" : "1.5px solid rgba(0,0,0,0.12)",
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "0.9rem",
            outline: "none",
            background: "#F8F7F4"
          }}
        />
        {errors.phone && <p style={{ fontSize: "0.75rem", color: "#EF4444", marginTop: "0.3rem" }}>{errors.phone}</p>}
      </div>

      {/* Registration Error */}
      {registration.error && (
        <div style={{
          padding: "0.75rem 1rem",
          background: "rgba(239,68,68,0.1)",
          border: "1px solid rgba(239,68,68,0.2)",
          borderRadius: 8,
          marginBottom: "1rem"
        }}>
          <p style={{ fontSize: "0.85rem", color: "#DC2626" }}>{registration.error}</p>
        </div>
      )}

      {/* Payment Error */}
      {payment.error && (
        <div style={{
          padding: "0.75rem 1rem",
          background: "rgba(239,68,68,0.1)",
          border: "1px solid rgba(239,68,68,0.2)",
          borderRadius: 8,
          marginBottom: "1rem"
        }}>
          <p style={{ fontSize: "0.85rem", color: "#DC2626" }}>{payment.error}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={registration.isSubmitting || payment.isProcessing || !emailVerification.isVerified}
        style={{
          width: "100%",
          padding: "1rem",
          border: "none",
          borderRadius: 8,
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          cursor: (registration.isSubmitting || payment.isProcessing || !emailVerification.isVerified) ? "not-allowed" : "pointer",
          background: (registration.isSubmitting || payment.isProcessing || !emailVerification.isVerified) ? "#9CA3AF" : "#2C3EC1",
          color: "#fff",
          marginTop: "0.5rem",
          opacity: (registration.isSubmitting || payment.isProcessing || !emailVerification.isVerified) ? 0.7 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem"
        }}
      >
        {(registration.isSubmitting || payment.isProcessing) && (
          <div style={{
            width: "16px",
            height: "16px",
            border: "2px solid #fff",
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "spin 0.6s linear infinite"
          }} />
        )}
        {registration.isSubmitting
          ? 'Saving Registration...'
          : payment.isProcessing
            ? 'Processing Payment...'
            : !emailVerification.isVerified
              ? 'Verify Email to Continue'
              : 'Proceed to Payment'
        }
      </button>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ========== MODAL RESPONSIVE STYLES ========== */

        /* Tablet (768px and below) */
        @media (max-width: 768px) {
          .modal-box {
            max-width: 90% !important;
            margin: 0 1rem !important;
          }

          /* Header padding */
          .modal-box > div:first-of-type {
            padding: 1.5rem 1.5rem 1.25rem !important;
          }

          /* Content padding */
          .modal-box > div:last-of-type {
            padding: 1.5rem !important;
          }

          /* Form inputs */
          input[type="text"],
          input[type="email"],
          input[type="tel"] {
            padding: 0.75rem 0.9rem !important;
            font-size: 0.875rem !important;
          }

          /* Labels */
          label {
            font-size: 0.75rem !important;
          }

          /* Buttons */
          button[type="button"],
          button[type="submit"] {
            padding: 0.75rem 1.25rem !important;
            font-size: 0.875rem !important;
          }
        }

        /* Mobile (480px and below) */
        @media (max-width: 480px) {
          .modal-overlay {
            padding: 0.75rem !important;
          }

          .modal-box {
            max-width: 100% !important;
            margin: 0 !important;
            border-radius: 16px !important;
          }

          /* Header */
          .modal-box > div:first-of-type {
            padding: 1.25rem 1rem 1rem !important;
          }

          /* Header title */
          .modal-box > div:first-of-type > div:last-child {
            font-size: 1.25rem !important;
          }

          /* Content area */
          .modal-box > div:last-of-type {
            padding: 1.25rem !important;
          }

          /* Close button */
          button[style*="position: absolute"] {
            top: 1rem !important;
            right: 1rem !important;
            width: 28px !important;
            height: 28px !important;
            font-size: 0.9rem !important;
          }

          /* Email verification section - stack vertically */
          .email-verify-wrapper {
            flex-direction: column !important;
            gap: 0.75rem !important;
            align-items: stretch !important;
          }

          /* Email input container when stacked - force full width */
          .email-verify-wrapper > div:first-child {
            flex: none !important;
            width: 100% !important;
          }

          /* Email input itself - force full width */
          .email-verify-wrapper input {
            width: 100% !important;
          }

          /* Verify button when stacked - full width below email */
          .email-verify-wrapper > button {
            flex: none !important;
            width: 100% !important;
            justify-content: center !important;
            padding: 0.85rem 1rem !important;
            white-space: normal !important;
          }

          /* Verified badge when stacked - full width */
          .email-verify-wrapper > div {
            flex: none !important;
            width: 100% !important;
            justify-content: center !important;
          }

          /* OTP Section - stack vertically */
          .otp-confirm-wrapper {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }

          /* OTP input when stacked */
          .otp-confirm-wrapper input {
            flex: none !important;
            width: 100% !important;
            padding: 0.85rem !important;
            letter-spacing: 0.3em !important;
          }

          /* OTP confirm button when stacked */
          .otp-confirm-wrapper button {
            flex: none !important;
            width: 100% !important;
            justify-content: center !important;
            padding: 0.85rem 1rem !important;
          }

          /* Form inputs */
          input[type="text"],
          input[type="email"],
          input[type="tel"] {
            padding: 0.75rem 0.85rem !important;
            font-size: 0.875rem !important;
          }

          /* Labels */
          label {
            font-size: 0.7rem !important;
            margin-bottom: 0.4rem !important;
          }

          /* Submit button */
          button[type="submit"] {
            padding: 0.9rem !important;
            font-size: 0.95rem !important;
          }

          /* Success screen */
          div[style*="textAlign: center"] {
            padding: 1.5rem 0 !important;
          }

          /* Success icon */
          div[style*="textAlign: center"] > div:first-child {
            width: 60px !important;
            height: 60px !important;
            font-size: 1.75rem !important;
          }

          /* Success title */
          div[style*="textAlign: center"] h3 {
            font-size: 1.25rem !important;
          }

          /* Success text */
          div[style*="textAlign: center"] p {
            font-size: 0.85rem !important;
          }

          /* Payment amount box */
          div[style*="background: rgba(34,197,94,0.05)"] {
            padding: 0.85rem !important;
          }

          div[style*="background: rgba(34,197,94,0.05)"] p:last-child {
            font-size: 1.3rem !important;
          }
        }
      `}</style>

      {!emailVerification.isVerified && (
        <p style={{
          fontSize: "0.75rem",
          color: "#8888AA",
          textAlign: "center",
          marginTop: "0.75rem",
          lineHeight: 1.5
        }}>
          🔒 Please verify your email to continue
        </p>
      )}

      {emailVerification.isVerified && (
        <p style={{
          fontSize: "0.75rem",
          color: "#8888AA",
          textAlign: "center",
          marginTop: "0.75rem",
          lineHeight: 1.5
        }}>
          💳 You'll be redirected to secure payment gateway
        </p>
      )}
    </form>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Success Screen - Shown after successful payment
// ═══════════════════════════════════════════════════════════════════════
function SuccessStep({ eventType, onClose }) {
  const { registrationForm, registration } = useEventRegistrationStore();

  return (
    <div style={{ textAlign: "center", padding: "2rem 0" }}>
      <div
        className="success-icon-anim"
        style={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          background: "rgba(34,197,94,0.1)",
          border: "2px solid #22C55E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          margin: "0 auto 1.5rem"
        }}
      >
        ✓
      </div>

      <h3 style={{
        fontFamily: "'Playfair Display',serif",
        fontSize: "1.5rem",
        fontWeight: 700,
        color: "#0F1B3D",
        marginBottom: "0.75rem"
      }}>
        Payment Successful!
      </h3>

      <p style={{
        color: "#4A4A6A",
        fontSize: "0.9rem",
        lineHeight: 1.6
      }}>
        Thank you, <strong>{registrationForm.name.split(' ')[0]}</strong>!
        <br /><br />
        Your registration for the {eventType === 'masterclass' ? 'Masterclass' : 'Workshop'} is confirmed.
        <br /><br />
        A confirmation email with payment details has been sent to <strong>{registrationForm.email}</strong>.
        <br /><br />
        We'll send you a reminder before the event.
        <br /><br />
        <strong>See you {eventType === 'masterclass' ? 'at the Masterclass' : 'at the Workshop'}! 🎉</strong>
      </p>

      {registration.data && registration.data.paymentAmount && (
        <div style={{
          marginTop: "1.5rem",
          padding: "1rem",
          background: "rgba(34,197,94,0.05)",
          borderRadius: 8,
          border: "1px solid rgba(34,197,94,0.2)"
        }}>
          <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: "0.25rem" }}>
            Amount Paid
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#059669", margin: 0 }}>
            ₹{registration.data.paymentAmount.toLocaleString('en-IN')}
          </p>
        </div>
      )}

      <button
        onClick={onClose}
        style={{
          marginTop: "2rem",
          padding: "0.75rem 2rem",
          border: "none",
          borderRadius: 8,
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 600,
          fontSize: "0.95rem",
          cursor: "pointer",
          background: "#2C3EC1",
          color: "#fff"
        }}
      >
        Close
      </button>
    </div>
  );
}
