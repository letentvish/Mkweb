import { create } from 'zustand';

const useEventRegistrationStore = create((set, get) => ({
  // ============================================
  // State
  // ============================================

  // Email verification state
  emailVerification: {
    email: '',
    isVerified: false,
    isVerifying: false,
    isSendingCode: false,
    verificationError: null,
    expiresAt: null,
  },

  // Registration form state
  registrationForm: {
    name: '',
    email: '',
    phone: '',
    venue: '',
    eventType: '', // 'masterclass' or 'workshop'
  },

  // Registration process state
  registration: {
    isSubmitting: false,
    isComplete: false,
    error: null,
    data: null,
  },

  // Payment process state
  payment: {
    isProcessing: false,
    orderId: null,
    error: null,
    isComplete: false,
    paymentData: null,
  },

  // Modal/UI state
  showModal: false,
  currentStep: 'email', // 'email' | 'verify' | 'form' | 'payment' | 'success'

  // ============================================
  // Email Verification Actions
  // ============================================

  /**
   * Send verification code to email
   * CHECKS IF EMAIL ALREADY HAS COMPLETED REGISTRATION FIRST
   */
  sendVerificationCode: async (email) => {
    const { registrationForm } = get();
    const eventType = registrationForm.eventType;

    set((state) => ({
      emailVerification: {
        ...state.emailVerification,
        email,
        isSendingCode: true,
        verificationError: null,
      },
      registrationForm: {
        ...state.registrationForm,
        email, // Sync email to registration form
      },
    }));

    try {
      const EventService = await import('../services/EventService');

      // Step 1: Check if email already has completed registration (payment + registration both completed)
      const statusCheck = await EventService.checkRegistrationStatus(email, eventType);

      if (statusCheck.success && statusCheck.data.hasCompletedPayment) {
        throw new Error(
          'You are already registered for this event. Please check your email for confirmation details.'
        );
      }

      // Step 2: Send verification code (user can proceed even if they have pending registrations)
      const response = await EventService.sendEmailVerification(email);

      if (response.success) {
        set((state) => ({
          emailVerification: {
            ...state.emailVerification,
            isSendingCode: false,
            expiresAt: response.data.expiresAt,
          },
          currentStep: 'verify',
        }));
        return { success: true };
      } else {
        throw new Error(response.error?.message || 'Failed to send verification code');
      }
    } catch (error) {
      set((state) => ({
        emailVerification: {
          ...state.emailVerification,
          isSendingCode: false,
          verificationError: error.message,
        },
      }));
      return { success: false, error: error.message };
    }
  },

  /**
   * Verify email with OTP code
   */
  verifyEmailCode: async (code) => {
    const { emailVerification, registrationForm } = get();
    const emailToVerify = registrationForm.email || emailVerification.email;

    set((state) => ({
      emailVerification: {
        ...state.emailVerification,
        isVerifying: true,
        verificationError: null,
      },
    }));

    try {
      const EventService = await import('../services/EventService');
      const response = await EventService.confirmEmailVerification(
        emailToVerify,
        code
      );

      if (response.success) {
        set((state) => ({
          emailVerification: {
            ...state.emailVerification,
            isVerified: true,
            isVerifying: false,
            email: emailToVerify,
          },
          registrationForm: {
            ...state.registrationForm,
            email: emailToVerify,
          },
          currentStep: 'form',
        }));
        return { success: true };
      } else {
        throw new Error(response.error?.message || 'Invalid verification code');
      }
    } catch (error) {
      set((state) => ({
        emailVerification: {
          ...state.emailVerification,
          isVerifying: false,
          verificationError: error.message,
        },
      }));
      return { success: false, error: error.message };
    }
  },

  /**
   * Resend verification code
   */
  resendVerificationCode: async () => {
    const { emailVerification } = get();
    return get().sendVerificationCode(emailVerification.email);
  },

  // ============================================
  // Registration Actions
  // ============================================

  /**
   * Update registration form fields
   */
  updateRegistrationForm: (field, value) => {
    set((state) => ({
      registrationForm: {
        ...state.registrationForm,
        [field]: value,
      },
    }));
  },

  /**
   * Submit registration
   */
  submitRegistration: async () => {
    const { registrationForm } = get();

    set((state) => ({
      registration: {
        ...state.registration,
        isSubmitting: true,
        error: null,
      },
    }));

    try {
      const EventService = await import('../services/EventService');

      const registrationMethod = registrationForm.eventType === 'masterclass'
        ? EventService.registerForMasterclass
        : EventService.registerForWorkshop;

      const response = await registrationMethod({
        name: registrationForm.name,
        email: registrationForm.email,
        phone: registrationForm.phone || null,
        venue: 'Bangalore', // Hardcoded venue
      });

      if (response.success) {
        set((state) => ({
          registration: {
            isSubmitting: false,
            isComplete: true,
            error: null,
            data: response.data,
          },
          currentStep: 'success',
        }));
        return { success: true, data: response.data };
      } else {
        throw new Error(response.error?.message || 'Registration failed');
      }
    } catch (error) {
      set((state) => ({
        registration: {
          ...state.registration,
          isSubmitting: false,
          error: error.message,
        },
      }));
      return { success: false, error: error.message };
    }
  },

  // ============================================
  // Payment Actions
  // ============================================

  /**
   * Create Razorpay payment order
   */
  createPaymentOrder: async () => {
    const { registration } = get();

    if (!registration.data || !registration.data.id) {
      return { success: false, error: 'Registration data not found' };
    }

    set((state) => ({
      payment: {
        ...state.payment,
        isProcessing: true,
        error: null,
      },
    }));

    try {
      const EventService = await import('../services/EventService');

      const response = await EventService.createPaymentOrder({
        registration_id: registration.data.id,
        amount: registration.data.paymentAmount,
        currency: 'INR',
      });

      if (response.success) {
        set((state) => ({
          payment: {
            ...state.payment,
            isProcessing: false,
            orderId: response.data.orderId,
          },
          currentStep: 'payment',
        }));
        return { success: true, data: response.data };
      } else {
        throw new Error(response.error?.message || 'Failed to create payment order');
      }
    } catch (error) {
      set((state) => ({
        payment: {
          ...state.payment,
          isProcessing: false,
          error: error.message,
        },
      }));
      return { success: false, error: error.message };
    }
  },

  /**
   * Handle successful payment
   */
  handlePaymentSuccess: async (paymentData) => {
    set((state) => ({
      payment: {
        ...state.payment,
        isProcessing: true,
        error: null,
      },
    }));

    try {
      const EventService = await import('../services/EventService');

      const response = await EventService.verifyPayment(paymentData);

      if (response.success) {
        set((state) => ({
          payment: {
            ...state.payment,
            isProcessing: false,
            isComplete: true,
            paymentData: response.data,
          },
          currentStep: 'success',
        }));
        return { success: true, data: response.data };
      } else {
        throw new Error(response.error?.message || 'Payment verification failed');
      }
    } catch (error) {
      set((state) => ({
        payment: {
          ...state.payment,
          isProcessing: false,
          error: error.message,
        },
      }));
      return { success: false, error: error.message };
    }
  },

  /**
   * Handle failed payment
   */
  handlePaymentFailure: (error) => {
    set((state) => ({
      payment: {
        ...state.payment,
        isProcessing: false,
        error: error || 'Payment failed',
      },
    }));
  },

  /**
   * Reset payment state
   */
  resetPayment: () => {
    set((state) => ({
      payment: {
        isProcessing: false,
        orderId: null,
        error: null,
        isComplete: false,
        paymentData: null,
      },
    }));
  },

  // ============================================
  // Modal/UI Actions
  // ============================================

  /**
   * Open registration modal for specific event
   */
  openModal: (eventType) => {
    set((state) => ({
      showModal: true,
      registrationForm: {
        ...state.registrationForm,
        eventType,
      },
      currentStep: 'email',
    }));
  },

  /**
   * Close modal and reset state
   */
  closeModal: () => {
    set({
      showModal: false,
      currentStep: 'email',
      emailVerification: {
        email: '',
        isVerified: false,
        isVerifying: false,
        isSendingCode: false,
        verificationError: null,
        expiresAt: null,
      },
      registrationForm: {
        name: '',
        email: '',
        phone: '',
        venue: '',
        eventType: '',
      },
      registration: {
        isSubmitting: false,
        isComplete: false,
        error: null,
        data: null,
      },
      payment: {
        isProcessing: false,
        orderId: null,
        error: null,
        isComplete: false,
        paymentData: null,
      },
    });
  },

  /**
   * Go back to previous step
   */
  goBackStep: () => {
    const { currentStep } = get();

    if (currentStep === 'verify') {
      set({ currentStep: 'email' });
    } else if (currentStep === 'form') {
      set({ currentStep: 'verify' });
    }
  },

  /**
   * Reset store to initial state
   */
  resetStore: () => {
    set({
      emailVerification: {
        email: '',
        isVerified: false,
        isVerifying: false,
        isSendingCode: false,
        verificationError: null,
        expiresAt: null,
      },
      registrationForm: {
        name: '',
        email: '',
        phone: '',
        venue: '',
        eventType: '',
      },
      registration: {
        isSubmitting: false,
        isComplete: false,
        error: null,
        data: null,
      },
      payment: {
        isProcessing: false,
        orderId: null,
        error: null,
        isComplete: false,
        paymentData: null,
      },
      showModal: false,
      currentStep: 'email',
    });
  },
}));

export default useEventRegistrationStore;
