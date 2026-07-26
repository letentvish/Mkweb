import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const FloatingCard = ({ children, style, className = "" }) => (
  <div className={`floating-card ${className}`} style={style}>
    {children}
  </div>
);

const HeroSection = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`hero-section ${isVisible ? "hero-visible" : ""}`}>
      <style>{`
        .hero-section {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          background: linear-gradient(180deg, #032E43 0%, #05495F 50%, #032E43 100%);
          padding: 60px 48px 80px;
          width: 100%;
          overflow: hidden;
          min-height: 520px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          box-sizing: border-box;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -120px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 112, 243, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 200, 180, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-left {
          flex: 1;
          max-width: 540px;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          border: 1px solid #00D4FF;
          border-radius: 30px;
          color: #00D4FF;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-visible .hero-badge {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-title {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.18;
          color: #e8eaf0;
          margin: 0 0 24px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
        }

        .hero-visible .hero-title {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-title .highlight {
          background: #0065CC;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(200, 210, 230, 0.7);
          margin: 0 0 36px;
          max-width: 460px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
        }

        .hero-visible .hero-desc {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
        }

        .hero-visible .hero-buttons {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary {
          padding: 14px 32px;
          background: #FCDE53;
          color: #271526;
          border: none;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .btn-primary:hover {
          background: #FCDE53;
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(245, 197, 24, 0.3);
        }

        .btn-secondary {
          padding: 14px 28px;
          background: transparent;
          color: #e8eaf0;
          border: 1px solid rgba(232, 234, 240, 0.25);
          border-radius: 30px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
        }

        .btn-secondary:hover {
          border-color: rgba(232, 234, 240, 0.5);
          background: rgba(255, 255, 255, 0.04);
        }

        .btn-arrow {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .btn-secondary:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* ─── Floating Cards ─── */
        .hero-right {
          position: relative;
          width: 450px;
          min-height: 500px;
          flex-shrink: 0;
        }

        .floating-card {
          position: absolute;
          border-radius: 14px;
          padding: 16px 18px;
          backdrop-filter: blur(12px);
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }

        .hero-visible .floating-card {
          opacity: 1;
          transform: translateY(0);
        }

        .floating-card:hover {
          z-index: 100 !important;
          transform: translateY(-20px) scale(1.05) !important;
          transition-delay: 0s !important;
        }

        /* Quarter circle arrangement - cards appear line by line along arc */
        .card-evaluation {
          background: rgba(17, 25, 60, 0.85);
          border: 1px solid rgba(0, 180, 240, 0.15);
          top: 20px;
          left: 180px;
          width: 220px;
          transform: rotate(-5deg) translateY(40px);
          transition-delay: 0.2s;
        }

        .hero-visible .card-evaluation {
          transform: rotate(-5deg) translateY(0);
          transition-delay: 0s;
        }

        .card-eval-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .card-eval-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #1a2460, #2a3a80);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-eval-icon svg {
          width: 18px;
          height: 18px;
        }

        .card-eval-label {
          font-size: 14px;
          font-weight: 600;
          color: #e8eaf0;
        }

        .card-eval-sub {
          font-size: 11px;
          color: rgba(200, 210, 230, 0.5);
        }

        .pass-rate-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .pass-rate-label {
          font-size: 12px;
          color: rgba(200, 210, 230, 0.6);
        }

        .pass-rate-value {
          font-size: 13px;
          font-weight: 600;
          color: #3ddc84;
        }

        .pass-rate-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 14px;
        }

        .pass-rate-fill {
          width: 94%;
          height: 100%;
          background: linear-gradient(90deg, #00b4f0, #3ddc84);
          border-radius: 4px;
          transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s;
        }

        .card-eval-stats {
          display: flex;
          gap: 8px;
        }

        .eval-stat {
          flex: 1;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          padding: 10px 8px;
          text-align: center;
        }

        .eval-stat-icon {
          color: rgba(200, 210, 230, 0.4);
          font-size: 14px;
          margin-bottom: 4px;
        }

        .eval-stat-value {
          font-size: 12px;
          font-weight: 600;
          color: #e8eaf0;
        }

        /* Assessment Card */
        .card-assessment {
          background: rgba(17, 25, 60, 0.85);
          border: 1px solid rgba(0, 180, 240, 0.12);
          top: 80px;
          left: 80px;
          width: 200px;
          transform: rotate(-10deg) translateY(40px);
          transition-delay: 0.4s;
        }

        .hero-visible .card-assessment {
          transform: rotate(-10deg) translateY(0);
          transition-delay: 0s;
        }

        .card-assess-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .card-assess-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-assess-label {
          font-size: 13px;
          font-weight: 600;
          color: #e8eaf0;
        }

        .card-assess-sub {
          font-size: 10px;
          color: rgba(200, 210, 230, 0.5);
        }

        .assess-stats {
          display: flex;
          gap: 8px;
        }

        .assess-stat {
          flex: 1;
          border-radius: 10px;
          padding: 10px 8px;
          text-align: center;
        }

        .assess-stat.progress {
          background: rgba(0, 180, 240, 0.12);
        }

        .assess-stat.completed {
          background: rgba(238, 90, 36, 0.12);
        }

        .assess-stat-label {
          font-size: 10px;
          color: rgba(200, 210, 230, 0.5);
          margin-bottom: 4px;
        }

        .assess-stat-value {
          font-size: 20px;
          font-weight: 700;
          color: #e8eaf0;
        }

        /* Competency Card */
        .card-competency {
          background: rgba(17, 25, 60, 0.85);
          border: 1px solid rgba(180, 100, 255, 0.15);
          top: 160px;
          left: 20px;
          width: 190px;
          transform: rotate(-15deg) translateY(40px);
          transition-delay: 0.6s;
        }

        .hero-visible .card-competency {
          transform: rotate(-15deg) translateY(0);
          transition-delay: 0s;
        }

        .comp-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .comp-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, #9b59b6, #8e44ad);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: white;
        }

        .comp-label {
          font-size: 13px;
          font-weight: 600;
          color: #e8eaf0;
        }

        .comp-sub {
          font-size: 10px;
          color: rgba(200, 210, 230, 0.5);
        }

        .comp-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .comp-row-label {
          font-size: 12px;
          color: rgba(200, 210, 230, 0.7);
        }

        .comp-row-value {
          font-size: 12px;
          font-weight: 600;
          color: #3ddc84;
        }

        .comp-row-value.physics {
          color: #ffa726;
        }

        /* Verification Card */
        .card-verification {
          background: rgba(17, 25, 60, 0.85);
          border: 1px solid rgba(0, 220, 170, 0.15);
          top: 260px;
          left: 0px;
          width: 200px;
          transform: rotate(-20deg) translateY(40px);
          transition-delay: 0.8s;
        }

        .hero-visible .card-verification {
          transform: rotate(-20deg) translateY(0);
          transition-delay: 0s;
        }

        .verif-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .verif-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e74c3c, #c0392b);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
        }

        .verif-label {
          font-size: 13px;
          font-weight: 600;
          color: #e8eaf0;
        }

        .verif-sub {
          font-size: 10px;
          color: rgba(200, 210, 230, 0.5);
        }

        .verif-tag {
          display: block;
          width: 100%;
          padding: 8px 0;
          border-radius: 8px;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .verif-tag.face {
          background: rgba(0, 200, 120, 0.15);
          color: #3ddc84;
        }

        .verif-tag.id {
          background: rgba(0, 200, 120, 0.15);
          color: #3ddc84;
        }

        /* Review Card */
        .card-review {
          background: rgba(17, 25, 60, 0.85);
          border: 1px solid rgba(0, 180, 240, 0.12);
          top: 360px;
          left: 30px;
          width: 200px;
          transform: rotate(-25deg) translateY(40px);
          transition-delay: 1s;
        }

        .hero-visible .card-review {
          transform: rotate(-25deg) translateY(0);
          transition-delay: 0s;
        }

        .review-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .review-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00c9a7, #00b894);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
        }

        .review-label {
          font-size: 13px;
          font-weight: 600;
          color: #e8eaf0;
        }

        .review-sub {
          font-size: 10px;
          color: rgba(200, 210, 230, 0.5);
        }

        .review-person {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .review-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .review-name {
          font-size: 12px;
          font-weight: 600;
          color: #e8eaf0;
        }

        .review-stars {
          color: #f5c518;
          font-size: 12px;
          letter-spacing: 2px;
        }

        /* Dashboard mini card */
        .card-dashboard {
          background: rgba(17, 25, 60, 0.85);
          border: 1px solid rgba(0, 180, 240, 0.12);
          top: 440px;
          left: 100px;
          width: 170px;
          border-radius: 12px;
          padding: 14px;
          transform: rotate(-30deg) translateY(40px);
          transition-delay: 1.2s;
        }

        .hero-visible .card-dashboard {
          transform: rotate(-30deg) translateY(0);
          transition-delay: 0s;
        }

        .dash-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dash-logo-icon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dash-logo-text {
          font-size: 13px;
          font-weight: 700;
          color: #e8eaf0;
        }

        .dash-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 4px;
          border-radius: 8px;
          font-size: 12px;
          color: rgba(200, 210, 230, 0.7);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .dash-item:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .dash-item.active {
          background: rgba(0, 180, 240, 0.12);
          color: #00b4f0;
          font-weight: 600;
        }

        .dash-item-icon {
          font-size: 14px;
          opacity: 0.6;
        }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .hero-section {
            flex-direction: column;
            padding: 40px 28px 50px;
            min-height: auto;
          }
          .hero-left {
            max-width: 100%;
          }
          .hero-title {
            font-size: 32px;
          }
          .hero-right {
            width: 100%;
            min-height: 250px;
            margin-top: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 20px 0;
          }
          .floating-card {
            position: relative !important;
            transform: scale(0.95) translateY(0) !important;
            margin: 0 -30px;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            flex-shrink: 0;
          }
          .hero-visible .floating-card {
            transform: scale(0.95) translateY(0) !important;
          }
          .card-evaluation {
            z-index: 6;
          }
          .card-assessment {
            z-index: 5;
          }
          .card-competency {
            z-index: 4;
          }
          .card-verification {
            z-index: 3;
          }
          .card-review {
            z-index: 2;
          }
          .card-dashboard {
            z-index: 1;
          }
          .floating-card:hover {
            transform: scale(1.1) translateY(-10px) !important;
            z-index: 100 !important;
            transition-delay: 0s !important;
          }
        }

        @media (max-width: 600px) {
          .hero-section {
            padding: 32px 20px 40px;
          }
          .hero-title {
            font-size: 26px;
          }
          .hero-desc {
            font-size: 14px;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          .btn-primary, .btn-secondary {
            justify-content: center;
            text-align: center;
            width: auto;
          }
          .hero-right {
            min-height: 220px;
            padding: 15px 0;
          }
          .floating-card {
            transform: scale(0.85) translateY(0) !important;
            margin: 0 -35px;
          }
          .hero-visible .floating-card {
            transform: scale(0.85) translateY(0) !important;
          }
          .floating-card:hover {
            transform: scale(1.0) translateY(-15px) !important;
            z-index: 100 !important;
            transition-delay: 0s !important;
          }
        }

        @media (max-width: 400px) {
          .hero-section {
            padding: 24px 16px 32px;
          }
          .hero-title {
            font-size: 22px;
          }
          .hero-badge {
            font-size: 11px;
            padding: 6px 14px;
          }
          .hero-desc {
            font-size: 13px;
          }
          .btn-primary, .btn-secondary {
            font-size: 13px;
            padding: 12px 24px;
            width: auto;
          }
          .hero-right {
            min-height: 200px;
            padding: 10px 0;
          }
          .floating-card {
            transform: scale(0.7) translateY(0) !important;
            margin: 0 -40px;
          }
          .hero-visible .floating-card {
            transform: scale(0.7) translateY(0) !important;
          }
          .floating-card:hover {
            transform: scale(0.85) translateY(-15px) !important;
            z-index: 100 !important;
            transition-delay: 0s !important;
          }
        }
      `}</style>

      <div className="hero-left">
        <span className="hero-badge">CaRVE Psychometric Assessment</span>
        <h1 className="hero-title">
          Understand How People{" "}
          <span className="highlight">Think, Behave, and Work</span>
        </h1>
        <p className="hero-desc">
          CaRVE is a psychometric assessment that reveals behavioural patterns,
          working styles, and communication preferences — helping individuals
          and teams perform better together.
        </p>
        <div className="hero-buttons">
          {/* <button className="btn-primary" onClick={() => navigate('/contact')}>
            Get Started
          </button> */}
          <button className="btn-secondary" onClick={() => navigate('/contact')}>
            Sign up for Free Assessment <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      <div className="hero-right">
        {/* Evaluation Card */}
        <FloatingCard className="card-evaluation">
          <div className="card-eval-header">
            <div className="card-eval-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#00b4f0" strokeWidth="2">
                <path d="M3 12h4l3-9 4 18 3-9h4" />
              </svg>
            </div>
            <div>
              <div className="card-eval-label">Evaluation</div>
              <div className="card-eval-sub">Outcome Metrics</div>
            </div>
          </div>
          <div className="pass-rate-row">
            <span className="pass-rate-label">Pass Rate</span>
            <span className="pass-rate-value">94%</span>
          </div>
          <div className="pass-rate-bar">
            <div className="pass-rate-fill" />
          </div>
          <div className="card-eval-stats">
            <div className="eval-stat">
              <div className="eval-stat-icon">↗</div>
              <div className="eval-stat-value">+12%</div>
            </div>
            <div className="eval-stat">
              <div className="eval-stat-icon">👥</div>
              <div className="eval-stat-value">1,247</div>
            </div>
            <div className="eval-stat">
              <div className="eval-stat-icon">⏱</div>
              <div className="eval-stat-value">45m</div>
            </div>
          </div>
        </FloatingCard>

        {/* Assessment Card */}
        <FloatingCard className="card-assessment">
          <div className="card-assess-header">
            <div className="card-assess-icon">⊙</div>
            <div>
              <div className="card-assess-label">Assessment</div>
              <div className="card-assess-sub">Active Tests</div>
            </div>
          </div>
          <div className="assess-stats">
            <div className="assess-stat progress">
              <div className="assess-stat-label">In Progress</div>
              <div className="assess-stat-value">24</div>
            </div>
            <div className="assess-stat completed">
              <div className="assess-stat-label">Completed</div>
              <div className="assess-stat-value">156</div>
            </div>
          </div>
        </FloatingCard>

        {/* Competency Card */}
        <FloatingCard className="card-competency">
          <div className="comp-header">
            <div className="comp-icon">◈</div>
            <div>
              <div className="comp-label">Competency</div>
              <div className="comp-sub">Skill Mastery</div>
            </div>
          </div>
          <div className="comp-row">
            <span className="comp-row-label">Mathematics</span>
            <span className="comp-row-value">92%</span>
          </div>
          <div className="comp-row">
            <span className="comp-row-label">Physics</span>
            <span className="comp-row-value physics">88%</span>
          </div>
        </FloatingCard>

        {/* Verification Card */}
        <FloatingCard className="card-verification">
          <div className="verif-header">
            <div className="verif-icon">✓</div>
            <div>
              <div className="verif-label">Verification</div>
              <div className="verif-sub">Identity Check</div>
            </div>
          </div>
          {/* <span className="verif-tag face">Face Recognition</span> */}
          <span className="verif-tag id">ID Verified</span>
        </FloatingCard>

        {/* Review Card */}
        <FloatingCard className="card-review">
          <div className="review-header">
            <div className="review-icon">◉</div>
            <div>
              <div className="review-label">Review</div>
              <div className="review-sub">Performance Analysis</div>
            </div>
          </div>
          <div className="review-person">
            <div className="review-avatar" />
            <div>
              <div className="review-name">Sarah Johnson</div>
              <div className="review-stars">★★★★☆</div>
            </div>
          </div>
        </FloatingCard>

        {/* Dashboard Mini Card */}
        <FloatingCard className="card-dashboard">
          <div className="dash-logo">
            <div className="dash-logo-icon">
              <span style={{ color: "white", fontSize: 10, fontWeight: 700 }}>C</span>
            </div>
            <span className="dash-logo-text">CaRVE</span>
          </div>
          <div className="dash-item active">
            <span className="dash-item-icon">📊</span> Dashboard
          </div>
          <div className="dash-item">
            <span className="dash-item-icon">📝</span> Assessments
          </div>
          <div className="dash-item">
            <span className="dash-item-icon">👤</span> Students
          </div>
          <div className="dash-item">
            <span className="dash-item-icon">📈</span> Performance
          </div>
          <div className="dash-item">
            <span className="dash-item-icon">⚙</span> Settings
          </div>
        </FloatingCard>
      </div>
    </section>
  );
};

export default HeroSection;