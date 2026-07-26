import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import "./RaiseRequest.css";
import requestImage from "../Assets/NewHome/RaiseRequest/requestImage.jpg";

const RaiseRequest = ({ isDarkMode = false }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.companyName) tempErrors.companyName = "Company name is required";

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", companyName: "" });

        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      }, 1000);
    }
  };

  return (
    <section className="raise-request-section" theme={isDarkMode ? "dark" : "light"}>
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="raise-request-title">Learn more About us</h1>
      </motion.div>

      {/* Main Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="raise-request-card"
        >
          <div className="grid md:grid-cols-5">
            {/* Left Panel - Image */}
            <div className="md:col-span-2 m-2 md:m-3">
              <img
                src={requestImage}
                alt="Contact"
                className="raise-request-image"
              />
            </div>

            {/* Right Panel - Form / Success State */}
            <div className="md:col-span-3 p-8 md:p-10 lg:p-12">
              {isSubmitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="raise-request-success"
                >
                  <div className="raise-request-success-icon">
                    <FaCheck size={36} className="text-white" />
                  </div>
                  <h2 className="raise-request-success-title">
                    Request Raised Successfully!
                  </h2>
                  <div className="raise-request-success-checkbox">
                    <div className="raise-request-checkbox-checked">
                      <FaCheck size={12} className="text-white" />
                    </div>
                    <span className="raise-request-checkbox-text">
                      We'll get back to you shortly
                    </span>
                  </div>
                </motion.div>
              ) : (
                /* Form */
                <form className="space-y-7" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div>
                    <label className="raise-request-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="raise-request-input"
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="raise-request-label">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="raise-request-input"
                      required
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid sm:grid-cols-2 gap-7">
                    <div>
                      <label className="raise-request-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="raise-request-input"
                        required
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="raise-request-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        maxLength="10"
                        className="raise-request-input"
                        required
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {errors.submit && (
                    <p className="text-red-500 text-sm">{errors.submit}</p>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <motion.button
                      type="submit"
                      className="raise-request-submit-btn"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            />
                          </svg>
                          Submitting...
                        </div>
                      ) : (
                        <>
                          Submit <FaArrowRight size={12} />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RaiseRequest;