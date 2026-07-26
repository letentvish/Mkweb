import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";
import "./Component7.css";

const faqs = [
  {
    id: 1,
    question: "What is a Learning Management System (LMS)?",
    answer:
      "A Learning Management System is a software application that helps organizations create, deliver, and manage educational content and training programs. It provides tools for course creation, student enrollment, progress tracking, and reporting.",
  },
  {
    id: 2,
    question: "How long does implementation take?",
    answer:
      "Implementation timelines vary based on the size and complexity of your organization. Typically, a standard deployment takes between 2–6 weeks, including data migration, configuration, and user onboarding. Our dedicated implementation team will work closely with you to ensure a smooth rollout.",
  },
  {
    id: 3,
    question: "Can I integrate with existing systems?",
    answer:
      "Yes. Our platform supports integrations with leading HR systems, CRMs, SSO providers, and third-party tools via REST APIs and pre-built connectors. We support SCIM provisioning, SAML 2.0, and OAuth 2.0 out of the box.",
  },
  {
    id: 4,
    question: "Is there a mobile app?",
    answer:
      "Absolutely. We offer fully native iOS and Android applications, allowing learners to access courses, complete assignments, and track progress on the go — even offline. The mobile experience mirrors the desktop platform with an optimized touch interface.",
  },
  {
    id: 5,
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 technical support via live chat, email, and phone. Enterprise customers are assigned a dedicated Customer Success Manager. We also offer an extensive knowledge base, onboarding webinars, and a community forum for peer learning.",
  },
  {
    id: 6,
    question: "How is data security handled?",
    answer:
      "Security is foundational to our platform. We are SOC 2 Type II certified, GDPR compliant, and host all data on AWS with AES-256 encryption at rest and TLS 1.3 in transit. Regular penetration testing, role-based access controls, and audit logs are standard across all plans.",
  },
];


function useIntersection(ref) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return isVisible;
}

function FAQItem({ faq, index, isOpen, onToggle, isDarkMode }) {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <div
      ref={ref}
      className={`faq-item ${isOpen ? "is-open" : ""} ${isDarkMode ? "dark" : "light"}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <button className="faq-question-btn" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.question}</span>
        <ChevronIcon isOpen={isOpen} isDarkMode={isDarkMode} />
      </button>

      <div className="faq-answer-wrapper">
        <div className="faq-answer-content">
          <p className="faq-answer-text">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ isOpen, isDarkMode }) {
  const color = isDarkMode 
    ? (isOpen ? "#2B8DF8" : "#DDDDDD") 
    : (isOpen ? "#5069d4" : "#8a93a8");

  return (
    <span className="chevron-container" style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg className="chevron-svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M2.5 4.5L6.5 8.5L10.5 4.5" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function FAQPage() {
  const isDarkMode = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className={`faq-main ${isDarkMode ? "dark" : "light"}`}>
      <section className="faq-section">
        <div className="faq-hero">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">Everything you need to know about our platform.</p>
        </div>

        <div className="faq-list" role="list">
          {faqs.map((faq, i) => (
            <div key={faq.id} role="listitem">
              <FAQItem
                faq={faq}
                index={i}
                isDarkMode={isDarkMode}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}