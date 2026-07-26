import httpClient from "../utils/httpClient";

/**
 * Send email verification code
 */
export const sendEmailVerification = async (email) => {
  try {
    const response = await httpClient.post('/events/verify-email/send', { email });

    return {
      success: response.success || true,
      data: response.data || null,
      message: response.message || 'Verification code sent',
      error: response.error
    };
  } catch (error) {
    console.error('sendEmailVerification error:', error);
    return {
      success: false,
      data: null,
      error: { message: error.message || 'Failed to send verification code' }
    };
  }
};

/**
 * Confirm email verification with OTP code
 */
export const confirmEmailVerification = async (email, code) => {
  try {
    const response = await httpClient.post('/events/verify-email/confirm', { email, code });

    return {
      success: response.success || true,
      data: response.data || null,
      message: response.message || 'Email verified successfully',
      error: response.error
    };
  } catch (error) {
    console.error('confirmEmailVerification error:', error);
    return {
      success: false,
      data: null,
      error: { message: error.message || 'Failed to verify email' }
    };
  }
};

/**
 * Register for Masterclass (1-hour session)
 */
export const registerForMasterclass = async (registrationData) => {
  try {
    const response = await httpClient.post('/events/masterclass/register', registrationData);

    return {
      success: response.success || true,
      data: response.data || response.registration || null,
      message: response.message || 'Registration successful',
      error: response.error
    };
  } catch (error) {
    console.error('registerForMasterclass error:', error);
    return {
      success: false,
      data: null,
      error: { message: error.message || 'Failed to register for masterclass' }
    };
  }
};

/**
 * Register for Workshop (2-day session)
 */
export const registerForWorkshop = async (registrationData) => {
  try {
    const response = await httpClient.post('/events/workshop/register', registrationData);

    return {
      success: response.success || true,
      data: response.data || response.registration || null,
      message: response.message || 'Registration successful',
      error: response.error
    };
  } catch (error) {
    console.error('registerForWorkshop error:', error);
    return {
      success: false,
      data: null,
      error: { message: error.message || 'Failed to register for workshop' }
    };
  }
};

/**
 * Get event details
 */
export const getEventDetails = async (eventType) => {
  try {
    const response = await httpClient.get(`/events/${eventType}`);

    return {
      success: response.success || true,
      data: response.data || response.event || null,
      error: response.error
    };
  } catch (error) {
    console.error('getEventDetails error:', error);
    return {
      success: false,
      data: null,
      error: { message: error.message || 'Failed to fetch event details' }
    };
  }
};

/**
 * Check if email is already verified (from any previous registration)
 */
export const checkEmailVerified = async (email) => {
  try {
    const response = await httpClient.get('/events/check-verified', {
      params: { email }
    });

    return {
      success: response.success || true,
      data: response.data || { isVerified: false },
      error: response.error
    };
  } catch (error) {
    console.error('checkEmailVerified error:', error);
    return {
      success: false,
      data: { isVerified: false },
      error: { message: error.message || 'Failed to check email verification' }
    };
  }
};

/**
 * Check if email is already registered for an event
 */
export const checkEmailRegistration = async (email, eventType) => {
  try {
    const response = await httpClient.get(`/events/${eventType}/check-email`, {
      params: { email }
    });

    return {
      success: response.success || true,
      data: response.data || { isRegistered: response.isRegistered || false },
      error: response.error
    };
  } catch (error) {
    console.error('checkEmailRegistration error:', error);
    return {
      success: false,
      data: { isRegistered: false },
      error: { message: error.message || 'Failed to check email registration' }
    };
  }
};

/**
 * Check registration status (whether email has completed payment for an event)
 * @param {string} email - Email address
 * @param {string} eventType - Event type (masterclass/workshop)
 * @returns {Promise<Object>} - Registration status (isRegistered, hasCompletedPayment)
 */
export const checkRegistrationStatus = async (email, eventType) => {
  try {
    const response = await httpClient.get('/events/check-registration', {
      params: { email, event_type: eventType }
    });

    return {
      success: response.success || true,
      data: response.data || {
        isRegistered: false,
        hasCompletedPayment: false,
        registration: null
      },
      error: response.error
    };
  } catch (error) {
    console.error('checkRegistrationStatus error:', error);
    return {
      success: false,
      data: {
        isRegistered: false,
        hasCompletedPayment: false,
        registration: null
      },
      error: { message: error.message || 'Failed to check registration status' }
    };
  }
};

/**
 * Get all registrations (for admin use)
 */
export const getAllRegistrations = async (eventType) => {
  try {
    const response = await httpClient.get(`/events/${eventType}/registrations`);

    return {
      success: response.success || true,
      data: response.data || response.registrations || [],
      error: response.error
    };
  } catch (error) {
    console.error('getAllRegistrations error:', error);
    return {
      success: false,
      data: [],
      error: { message: error.message || 'Failed to fetch registrations' }
    };
  }
};

/**
 * Create Razorpay payment order
 * @param {Object} orderData - Order creation data (registration_id, amount, currency)
 * @returns {Promise<Object>} - Payment order details
 */
export const createPaymentOrder = async (orderData) => {
  try {
    const response = await httpClient.post('/payments/create-order', orderData);

    return {
      success: response.success || true,
      data: response.data || null,
      message: response.message || 'Payment order created successfully',
      error: response.error
    };
  } catch (error) {
    console.error('createPaymentOrder error:', error);
    return {
      success: false,
      data: null,
      error: { message: error.message || 'Failed to create payment order' }
    };
  }
};

/**
 * Verify payment callback
 * @param {Object} paymentData - Payment verification data (razorpay_order_id, razorpay_payment_id, razorpay_signature)
 * @returns {Promise<Object>} - Payment verification result
 */
export const verifyPayment = async (paymentData) => {
  try {
    const response = await httpClient.post('/payments/verify', paymentData);

    return {
      success: response.success || true,
      data: response.data || null,
      message: response.message || 'Payment verified successfully',
      error: response.error
    };
  } catch (error) {
    console.error('verifyPayment error:', error);
    return {
      success: false,
      data: null,
      error: { message: error.message || 'Failed to verify payment' }
    };
  }
};

/**
 * Get payment status by registration ID
 * @param {number} registrationId - Event registration ID
 * @returns {Promise<Object>} - Payment status details
 */
export const getPaymentStatus = async (registrationId) => {
  try {
    const response = await httpClient.get(`/payments/registration/${registrationId}`);

    return {
      success: response.success || true,
      data: response.data || null,
      error: response.error
    };
  } catch (error) {
    console.error('getPaymentStatus error:', error);
    return {
      success: false,
      data: null,
      error: { message: error.message || 'Failed to fetch payment status' }
    };
  }
};

