import React, { useState, useEffect } from "react";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone, FiMessageSquare } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
import "./ContactUs.css";
import ctaBackground from '../Assets/Home/CTA.jpg';
     

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn5L4jafECLmIwGppVlLM0kzxNX9G5n1M",
  authDomain: "mkraft-fa9f1.firebaseapp.com",
  projectId: "mkraft-fa9f1",
  storageBucket: "mkraft-fa9f1.firebasestorage.app",
  messagingSenderId: "1063476511327",
  appId: "1:1063476511327:web:1b47acc7cf52114e58d1ea",
  measurementId: "G-YDNC4S51RE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactUs = ({ isDarkMode = false }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";

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
    if (!formData.message) tempErrors.message = "Message is required";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        await addDoc(collection(db, "contacts"), {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        });

        setIsLoading(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } catch (error) {
        console.error("Error adding document: ", error);
        setIsLoading(false);
        setErrors({ submit: "Failed to submit. Please try again." });
      }
    }
  };

  const contactItems = [
    {
      Icon: FiPhone,
      title: "PHONE",
      value: "+91-9611058522",
    },
    {
      Icon: IoMailOutline,
      title: "EMAIL",
      value: "consult@multiplierskraft.com",
    },
    {
      Icon: FiMessageSquare,
      title: "WHATSAPP",
      value: "+91-9611058522",
    },
    {
      Icon: SlLocationPin,
      title: "ADDRESS",
      value: "Bangalore, India",
    },
  ];

  return (
    <section className="contact-section" theme={isDarkMode ? 'dark' : 'light'}>
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="contact-title tracking-tight">
          Contact Us
        </h1>
      </motion.div>

      {/* Main Contact Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="contact-card"
        >
          <div className="grid md:grid-cols-5">
            {/* Left Panel - Contact Info */}
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl m-2 md:m-3">
              {/* Gradient Background */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(214.44deg, #9DD9D2 18.78%, #155DFC 80.47%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                }}
              />

              {/* Decorative Circles */}
              <div className="absolute bottom-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full bg-white/10" />
              <div className="absolute bottom-[30px] right-[30px] w-[120px] h-[120px] rounded-full bg-white/10" />

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full min-h-[480px]">
                <div>
                  <h2 className="text-2xl md:text-[26px] font-bold text-white mb-2">
                    Contact Information
                  </h2>
                  <p className="text-white/70 text-sm mb-10 md:mb-14">
                    Say something to start a live chat!
                  </p>

                  <div className="space-y-8">
                    {contactItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                          <item.Icon
                            size={18}
                            className="text-white"
                          />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-0.5">
                            {item.title}
                          </p>
                          <p className="text-white text-sm group-hover:text-yellow-300 transition-colors duration-300">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 mt-10">
                  <motion.a
                    href="https://www.instagram.com/multiplierskraft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors duration-300"
                  >
                    <FaInstagram size={16} className="text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/multiplierskraft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors duration-300"
                  >
                    <FaLinkedin size={16} className="text-white" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="md:col-span-3 p-8 md:p-10 lg:p-12">
              <form className="space-y-7" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div>
                  <label className="contact-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="contact-input"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone Row */}
                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <label className="contact-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="contact-input"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="contact-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      maxLength="10"
                      className="contact-input"
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="contact-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows={4}
                    className="contact-input resize-none"
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {errors.submit && (
                  <p className="text-red-500 text-sm">{errors.submit}</p>
                )}

                {/* Submit Button */}
                <div className="flex justify-end pt-2">
                  <motion.button
                    type="submit"
                    className="contact-submit-btn"
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
                        Send Message <FaArrowRight size={12} />
                      </>
                    )}
                  </motion.button>
                </div>

                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-semibold text-sm bg-green-50 border border-green-200 p-3 rounded-lg text-center"
                  >
                    ✓ Submitted Successfully!
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .mk-cta {
          max-width: 1536px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .mk-cta__box {
          background: url(${ctaBackground});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 20px;
          text-align: center;
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
        }

        .mk-cta__box::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .mk-cta__title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 36px;
          position: relative;
          letter-spacing: -0.5px;
        }

        .mk-cta__buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .mk-cta__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 8px;
          padding: 14px 32px;
          font-family: 'Sora', sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 0.2px;
          text-decoration: none;
        }

        .mk-cta__btn-primary {
          background: #ffffff;
          color: #000000;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
        }

        .mk-cta__btn-primary:hover {
          transform: scale(1.05);
        }

        .mk-cta__btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .mk-cta__btn-secondary:hover {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          border-color: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 1024px) {
          .mk-cta {
            padding: 0 1.5rem;
          }
          .mk-cta__box {
            padding: 60px 32px;
          }
        }

        @media (max-width: 768px) {
          .mk-cta {
            padding: 0 1rem;
          }
          .mk-cta__box {
            padding: 48px 24px;
          }
          .mk-cta__buttons {
            flex-direction: column;
            gap: 16px;
            width: 100%;
          }
          .mk-cta__btn {
            font-size: 15px;
            padding: 12px 28px;
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 480px) {
          .mk-cta__box {
            padding: 40px 20px;
          }
          .mk-cta__btn {
            font-size: 14px;
            padding: 12px 24px;
          }
        }
      `}</style>

      <section className="mk-cta">
        <div className="mk-cta__box">
          <h2 className="mk-cta__title">
           Ready to Multiply Your Potential?
          </h2>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;