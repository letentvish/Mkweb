import { useState, useEffect } from "react";
import { FaFacebookF, FaYoutube, FaArrowUp, FaLinkedinIn } from "react-icons/fa";

const CorporateFooter = () => {
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
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2563eb] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 mb-8">
          
          {/* Left: Newsletter & Social */}
          <div>
            <div className="bg-white/10 rounded-2xl p-6 mb-6 w-340px h-453px">
              <h3 className="font-bold text-lg mb-4">
                Subscribe to our newsletter
              </h3>

              <form onSubmit={handleSubscribe}>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.ru"
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-white text-gray-900 focus:outline-none text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 transition"
                  >
                    →
                  </button>
                </div>
              </form>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <button 
                onClick={scrollToTop}
                title="Scroll to Top"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition border border-white/20"
              >
                <FaArrowUp className="text-base" />
              </button>
              
              <a href="https://www.linkedin.com/company/multiplierskraft" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition border border-white/20">
                <FaLinkedinIn className="text-base" />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition border border-white/20">
                <FaFacebookF className="text-base" />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition border border-white/20">
                <FaYoutube className="text-base" />
              </a>
            </div>
          </div>

          {/* Right: All Links */}
          <div>
            {/* Top Navigation Links */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm mb-10 pb-8 border-b border-white/20">
              {[
                "Blog",
                "Tutorials",
                "Webinar",
                "Privacy Policy",
                "Terms & Conditions",
                "GDPR",
                "Accessibility",
              ].map((link, i) => (
                <span key={link} className="flex items-center gap-3">
                  <a href="#" className="hover:underline transition">
                    {link}
                  </a>
                  {i < 6 && <span className="text-white/40">/</span>}
                </span>
              ))}
            </div>

            {/* Three Column Links */}
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-4 text-white/60">
                  INFO
                </h4>
                <ul className="space-y-3">
                  {["About Us", "Courses", "Pricing", "Help Center"].map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm hover:underline transition">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-4 text-white/60">
                  ADDITIONAL
                </h4>
                <ul className="space-y-3">
                  {["Documentation", "API Reference", "Blog", "Tutorials"].map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm hover:underline transition">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-4 text-white/60">
                  ADDITIONAL
                </h4>
                <ul className="space-y-3">
                  {["Integration", "Integration Detail", "Sign Up"].map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm hover:underline transition">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-white/60">
                  SELECTION COMMITTEE
                </h4>
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>

              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-white/60">
                  ADD. EDUCATION
                </h4>
                <p className="text-sm">+1 801 989-11-93</p>
              </div>

              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-white/60">
                  EMAIL
                </h4>
                <a href="mailto:hello@miles-lxp.com" className="text-sm hover:underline">
                  hello@miles-lxp.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-white/60">
                ADDRESS
              </h4>
              <p className="text-sm">
                123 Innovation Drive, San Francisco, CA 94102
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            ©2024 Mile LXP. All rights reserved.
          </p>

          <div className="flex bg-white/10 rounded-lg overflow-hidden">
            {["EN", "SE", "DE"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-5 py-2 text-sm font-medium transition-all ${
                  language === lang
                    ? "bg-black/40"
                    : "hover:bg-white/10"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CorporateFooter;