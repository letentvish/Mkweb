import React, { useState, useEffect } from "react";
import { FaFacebookF, FaYoutube, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('theme');
      setIsDarkMode(theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme']
    });

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .newsletter-input::placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
        
        .footer-link {
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          transform: translateX(4px);
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-4px);
        }
        
        .scroll-top-btn {
          transition: all 0.3s ease;
        }
        
        .scroll-top-btn:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <footer className="bg-[#FF6200] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Newsletter Subscription Box - Left Side */}
            <div className="lg:col-span-4">
              <div 
                className="bg-white rounded-xl shadow-lg"
                style={{
                  width: '340px',
                  height: '453px',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Newsletter Form */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-black">
                    Subscribe to our newsletter
                  </h3>
                  <form onSubmit={handleSubscribe} className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.ru"
                      className="newsletter-input w-full px-4 py-3 pr-12 rounded-lg bg-gray-50 text-black border border-gray-200 focus:outline-none focus:border-[#FF6200] transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:opacity-80 transition-opacity"
                    >
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        className="text-gray-600"
                      >
                        <path 
                          d="M4 10H16M16 10L12 6M16 10L12 14" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                  <button 
                    onClick={scrollToTop}
                    className="scroll-top-btn w-12 h-12 rounded-full border-2 border-[#FF6200] flex items-center justify-center text-[#FF6200] hover:bg-[#FF6200] hover:text-white transition-all"
                  >
                    <FaArrowUp />
                  </button>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon w-12 h-12 rounded-full border-2 border-[#FF6200] flex items-center justify-center text-[#FF6200] hover:bg-[#FF6200] hover:text-white transition-all"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon w-12 h-12 rounded-full border-2 border-[#FF6200] flex items-center justify-center text-[#FF6200] hover:bg-[#FF6200] hover:text-white transition-all"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links - Right Side */}
            <div className="lg:col-span-8">
              {/* Top Navigation Links */}
              <div className="flex flex-wrap gap-3 mb-12 text-sm">
                <Link to="/blog" className="text-white hover:underline">Blog</Link>
                <span className="text-white">/</span>
                <Link to="/tutorials" className="text-white hover:underline">Tutorials</Link>
                <span className="text-white">/</span>
                <Link to="/webinar" className="text-white hover:underline">Webinar</Link>
                <span className="text-white">/</span>
                <Link to="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link>
                <span className="text-white">/</span>
                <Link to="/terms" className="text-white hover:underline">Terms & Conditions</Link>
                <span className="text-white">/</span>
                <Link to="/gdpr" className="text-white hover:underline">GDPR</Link>
                <span className="text-white">/</span>
                <Link to="/accessibility" className="text-white hover:underline">Accessibility</Link>
              </div>

              {/* Footer Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                {/* INFO Column */}
                <div>
                  <h4 className="text-white text-xs font-semibold mb-4 tracking-wide">INFO</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/about" className="footer-link text-white hover:underline text-sm">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link text-white hover:underline text-sm">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="footer-link text-white hover:underline text-sm">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to="/help" className="footer-link text-white hover:underline text-sm">
                        Help Center
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* ADDITIONAL Column */}
                <div>
                  <h4 className="text-white text-xs font-semibold mb-4 tracking-wide">ADDITIONAL</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/documentation" className="footer-link text-white hover:underline text-sm">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link to="/api" className="footer-link text-white hover:underline text-sm">
                        API Reference
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="footer-link text-white hover:underline text-sm">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/tutorials" className="footer-link text-white hover:underline text-sm">
                        Tutorials
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* ADDITIONAL Column 2 */}
                <div>
                  <h4 className="text-white text-xs font-semibold mb-4 tracking-wide">ADDITIONAL</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/integration" className="footer-link text-white hover:underline text-sm">
                        Integration
                      </Link>
                    </li>
                    <li>
                      <Link to="/integration-detail" className="footer-link text-white hover:underline text-sm">
                        Integration Detail
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="footer-link text-white hover:underline text-sm">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-white text-xs font-semibold mb-2 tracking-wide">SELECTION COMMITTEE</h4>
                  <p className="text-white text-sm">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="text-white text-xs font-semibold mb-2 tracking-wide">ADD. EDUCATION</h4>
                  <p className="text-white text-sm">+1 800-980-11-93</p>
                </div>
                <div>
                  <h4 className="text-white text-xs font-semibold mb-2 tracking-wide">EMAIL</h4>
                  <a href="mailto:hello@miles-lxp.com" className="text-white hover:underline text-sm">
                    hello@miles-lxp.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h4 className="text-white text-xs font-semibold mb-2 tracking-wide">ADDRESS</h4>
                <p className="text-white text-sm">123 Innovation Drive, San Francisco, CA 94102</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              ©2024 Mile LXP. All rights reserved.
            </p>
            
            {/* Language Selector */}
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("EN")}
                className={`px-4 py-1.5 rounded text-sm font-medium transition-all ${
                  language === "EN" 
                    ? "bg-[#0C1437] text-white" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("SE")}
                className={`px-4 py-1.5 rounded text-sm font-medium transition-all ${
                  language === "SE" 
                    ? "bg-[#0C1437] text-white" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                SE
              </button>
              <button
                onClick={() => setLanguage("DE")}
                className={`px-4 py-1.5 rounded text-sm font-medium transition-all ${
                  language === "DE" 
                    ? "bg-[#0C1437] text-white" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;