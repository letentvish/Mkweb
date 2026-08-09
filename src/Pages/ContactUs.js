import React, { useState, useEffect } from "react";
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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

const ContactUs = () => {
  const navigate = useNavigate();

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
          timestamp: new Date().toISOString(),
        });

        setIsLoading(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 4000);
      } catch (error) {
        console.error("Error submitting contact form: ", error);
        setIsLoading(false);
        setErrors({ submit: "Failed to submit. Please try again." });
      }
    }
  };

  const contactItems = [
    {
      icon: Phone,
      title: "PHONE",
      value: "+91-9611058522",
      link: "tel:+919611058522",
    },
    {
      icon: Mail,
      title: "EMAIL",
      value: "consult@multiplierskraft.com",
      link: "mailto:consult@multiplierskraft.com",
    },
    {
      icon: MessageSquare,
      title: "WHATSAPP",
      value: "+91-9611058522",
      link: "https://wa.me/919611058522",
    },
    {
      icon: MapPin,
      title: "HEADQUARTERS",
      value: "Bangalore, Karnataka, India",
      link: null,
    },
  ];

  return (
    <div className="bg-[#f7f9fb] min-h-screen pt-28 pb-24 font-sans antialiased text-slate-800 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40 z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-[#0284c7] text-xs font-mono font-extrabold tracking-widest uppercase font-poppins shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-tight">
            Let's Build Something <span className="text-[#0284c7]">Extraordinary</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Have questions about the PALBON Suite, Corporate Consulting, or Academic MILE Platform? 
            Our executive team is here to assist you.
          </p>
        </motion.div>

        {/* Main Contact Card Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl shadow-sky-100/60 border border-sky-100/80 overflow-hidden mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Executive Panel - Navy Background */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#01182F] via-[#022a4f] to-[#01182F] text-white p-8 sm:p-10 lg:p-12 relative flex flex-col justify-between overflow-hidden">
              
              {/* Decorative Geometric Glows */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-sky-500/20 blur-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-8">
                <div>
                  <span className="text-xs font-mono font-extrabold text-sky-400 uppercase tracking-widest block mb-2 font-poppins">
                    DIRECT REACH
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white tracking-tight">
                    Contact Information
                  </h2>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    Fill out the form or reach out directly via phone or email.
                  </p>
                </div>

                {/* Contact Items List */}
                <div className="space-y-6 pt-2">
                  {contactItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#0284c7] group-hover:border-sky-400 transition-all duration-300 shadow-md">
                          <IconComponent className="w-5 h-5 text-sky-300 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono font-extrabold text-slate-400 uppercase tracking-wider mb-0.5">
                            {item.title}
                          </p>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-white font-medium text-sm sm:text-base hover:text-sky-300 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium text-sm sm:text-base">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="relative z-10 pt-10 border-t border-white/10 mt-10">
                <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 font-poppins">
                  FOLLOW OUR JOURNEY
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/multiplierskraft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-[#0284c7] hover:border-sky-400 flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/multiplierskraft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-400 flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-[#0284c7] hover:border-sky-400 flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-red-600 hover:border-red-400 flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110"
                  >
                    <FaYoutube size={18} />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h3 className="text-2xl font-poppins font-bold text-[#01182F] tracking-tight">
                    Send Us a Message
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    We typically respond within 24 business hours.
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2 font-poppins">
                    Full Name <span className="text-[#0284c7]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all font-normal placeholder:text-slate-400"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2 font-poppins">
                      Work Email <span className="text-[#0284c7]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all font-normal placeholder:text-slate-400"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2 font-poppins">
                      Phone Number <span className="text-[#0284c7]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit phone number"
                      maxLength="10"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all font-normal placeholder:text-slate-400"
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2 font-poppins">
                    How can we help you? <span className="text-[#0284c7]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your organization's goals or inquiries..."
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all font-normal placeholder:text-slate-400 resize-none"
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>
                  )}
                </div>

                {errors.submit && (
                  <p className="text-red-500 text-sm font-medium">{errors.submit}</p>
                )}

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto px-8 py-4 bg-[#0284c7] hover:bg-sky-700 text-white font-poppins font-semibold text-base rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-sm font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Thank you! Your message has been sent successfully. Our team will contact you shortly.</span>
                  </motion.div>
                )}
              </form>
            </div>

          </div>
        </motion.div>

        {/* Bottom Executive CTA Box */}
        <div className="bg-gradient-to-r from-[#01182F] via-[#022a4f] to-[#01182F] rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono font-extrabold text-sky-400 uppercase tracking-widest font-poppins">
              READY TO SCALE YOUR CAPABILITY?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight leading-tight">
              Ready to Multiply Your Potential?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
              Book a strategy consultation or request a personalized walkthrough of our PALBON enterprise platform.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => navigate("/corporate-consulting")}
                className="px-8 py-3.5 bg-white text-[#01182F] hover:bg-slate-100 font-poppins font-semibold text-sm sm:text-base rounded-full transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                Book Strategy Session
              </button>
              <button
                onClick={() => navigate("/palbon")}
                className="px-8 py-3.5 bg-transparent border border-white/30 text-white hover:bg-white/10 font-poppins font-semibold text-sm sm:text-base rounded-full transition-all duration-200 shadow-md hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Explore PALBON Suite</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;