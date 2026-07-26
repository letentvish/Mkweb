import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiUsers, HiBookOpen, HiChartBar, HiAcademicCap } from "react-icons/hi2";
import heroImage from "../../Assets/datanix/HeroImage.jpg";

const miniBarData = {
  activeLearners: [3,5,4,6,5,7,4,8,6,9,7,8,6,9,8,10,9,11,10,12],
  coursesCompleted: [4,6,3,5,7,4,6,8,5,7,9,6,8,10,7,9,11,8,10,12],
  completionRate: [5,7,6,8,7,9,8,10,9,11,10,12,11,10,12,11,13,12,14,13],
  certifications: [3,4,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,14],
};

const completionTrendData = [
  { month: "Jan", enrolled: 120, completed: 80 },
  { month: "Feb", enrolled: 180, completed: 130 },
  { month: "Mar", enrolled: 250, completed: 200 },
  { month: "Apr", enrolled: 300, completed: 260 },
  { month: "May", enrolled: 340, completed: 290 },
  { month: "Jun", enrolled: 380, completed: 330 },
];

const skillsData = [
  { label: "Communication", value: 0.85 },
  { label: "Technical", value: 0.7 },
  { label: "Leadership", value: 0.6 },
  { label: "Problem Solving", value: 0.75 },
  { label: "Creativity", value: 0.65 },
  { label: "Analytics", value: 0.8 },
];

function MiniBarChart({ data, color }) {
  const max = Math.max(...data);
  return (
    <div className="d-nix-mini-bar-chart">
      {data.map((val, i) => (
        <div
          key={i}
          className="d-nix-mini-bar"
          style={{
            height: `${(val / max) * 100}%`,
            backgroundColor: color,
            opacity: 0.5 + (i / data.length) * 0.5,
          }}
        />
      ))}
    </div>
  );
}

function AreaChart() {
  const width = 500;
  const height = 280;
  const padding = { top: 20, right: 20, bottom: 40, left: 40 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = 400;
  const yTicks = [0, 100, 200, 300, 400];
  const getX = (i) => padding.left + (i / (completionTrendData.length - 1)) * chartW;
  const getY = (val) => padding.top + chartH - (val / maxVal) * chartH;
  const enrolledPoints = completionTrendData.map((d, i) => `${getX(i)},${getY(d.enrolled)}`);
  const completedPoints = completionTrendData.map((d, i) => `${getX(i)},${getY(d.completed)}`);
  const makeAreaPath = (points) => {
    const top = points.join(" L");
    const bottomRight = `${getX(completionTrendData.length - 1)},${getY(0)}`;
    const bottomLeft = `${getX(0)},${getY(0)}`;
    return `M${top} L${bottomRight} L${bottomLeft} Z`;
  };
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="d-nix-area-chart-svg">
      <defs>
        <linearGradient id="d-nix-enrolledGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="d-nix-completedGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {yTicks.map((tick) => (
        <g key={tick}>
          <line x1={padding.left} y1={getY(tick)} x2={width - padding.right} y2={getY(tick)} stroke="#334155" strokeWidth="0.5" />
          <text x={padding.left - 8} y={getY(tick) + 4} className="d-nix-chart-label" textAnchor="end">{tick}</text>
        </g>
      ))}
      {completionTrendData.map((d, i) => (
        <text key={d.month} x={getX(i)} y={height - 8} className="d-nix-chart-label" textAnchor="middle">{d.month}</text>
      ))}
      <path d={makeAreaPath(enrolledPoints)} fill="url(#d-nix-enrolledGrad)" />
      <polyline points={enrolledPoints.join(" ")} fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
      <path d={makeAreaPath(completedPoints)} fill="url(#d-nix-completedGrad)" />
      <polyline points={completedPoints.join(" ")} fill="none" stroke="#22d3ee" strokeWidth="2.5" />
    </svg>
  );
}

function RadarChart() {
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const levels = 4;
  const maxR = 90;
  const angleSlice = (Math.PI * 2) / skillsData.length;
  const getPoint = (value, i) => {
    const angle = angleSlice * i - Math.PI / 2;
    return { x: cx + Math.cos(angle) * maxR * value, y: cy + Math.sin(angle) * maxR * value };
  };
  const gridLevels = Array.from({ length: levels }, (_, l) => {
    const r = ((l + 1) / levels) * maxR;
    return skillsData.map((_, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
    }).join(" ");
  });
  const dataPoints = skillsData.map((d, i) => getPoint(d.value, i));
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="d-nix-radar-chart-svg">
      {gridLevels.map((points, i) => (
        <polygon key={i} points={points} fill="none" stroke="#334155" strokeWidth="0.5" />
      ))}
      {skillsData.map((_, i) => {
        const angle = angleSlice * i - Math.PI / 2;
        return <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(angle) * maxR} y2={cy + Math.sin(angle) * maxR} stroke="#334155" strokeWidth="0.5" />;
      })}
      <polygon points={dataPath} fill="rgba(168, 85, 247, 0.3)" stroke="#a855f7" strokeWidth="2" />
      {skillsData.map((d, i) => {
        const angle = angleSlice * i - Math.PI / 2;
        const labelR = maxR + 18;
        return (
          <text key={i} x={cx + Math.cos(angle) * labelR} y={cy + Math.sin(angle) * labelR} className="d-nix-radar-label" textAnchor="middle" dominantBaseline="middle">{d.label}</text>
        );
      })}
    </svg>
  );
}

function StatCard({ title, value, change, changeLabel, icon: Icon, color, barData }) {
  return (
    <div className="d-nix-stat-card">
      <div className="d-nix-stat-card-header">
        <span className="d-nix-stat-card-title">{title}</span>
        <span className="d-nix-stat-card-icon" style={{ backgroundColor: color + "22", color }}>
          <Icon />
        </span>
      </div>
      <div className="d-nix-stat-card-value">{value}</div>
      <div className="d-nix-stat-card-change">
        <span className="d-nix-stat-change-positive">{change}</span>
        <span className="d-nix-stat-change-label">{changeLabel}</span>
      </div>
      <MiniBarChart data={barData} color={color} />
    </div>
  );
}

function GlowCurve({ side, color, id }) {
  const isLeft = side === "left";
  return (
    <svg
      className={`d-nix-glow-curve d-nix-glow-curve-${id}`}
      viewBox="0 0 200 700"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={`d-nix-glow-${id}`} x="-500%" y="-200%" width="1000%" height="600%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="70" result="blur2" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="120" result="blur3" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="180" result="blur4" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="250" result="blur5" />
          <feMerge>
            <feMergeNode in="blur5" />
            <feMergeNode in="blur4" />
            <feMergeNode in="blur3" />
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
          </feMerge>
        </filter>
      </defs>
      <path
        d={
          isLeft
            ? "M 130,0 C 50,120 140,220 60,350 C -10,480 120,560 70,700"
            : "M 70,0 C 150,120 60,220 140,350 C 210,480 80,560 130,700"
        }
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        filter={`url(#d-nix-glow-${id})`}
        opacity="0.4"
      />
    </svg>
  );
}

export default function DataNixComponent1() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const navigate = useNavigate();

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap');

        .d-nix-landing-root {
          background: ${isDarkMode ? '#0B1B3D' : '#ffffff'};
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow-x: hidden;
          font-family: Roboto;
        }

        .d-nix-glow-section {
          position: relative;
          overflow: hidden;
        }

        .d-nix-glow-curve {
          position: absolute;
          top: -10%;
          height: 120%;
          width: 200px;
          pointer-events: none;
          z-index: 0;
        }

        .d-nix-glow-curve-hero-l {
          left: 10px;
          transform: rotate(-2deg);
        }

        .d-nix-glow-curve-hero-r {
          right: 10px;
          transform: rotate(2deg);
        }

        .d-nix-glow-curve-dash-l {
          left: 10px;
          transform: rotate(-3deg);
        }

        .d-nix-glow-curve-dash-r {
          right: 10px;
          transform: rotate(3deg);
        }

        .d-nix-hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 1;
          padding: 80px 24px 40px;
        }

        .d-nix-hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: ${isDarkMode ? '#ffffff' : '#161C2D'};
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1.15;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          animation: d-nix-fadeUp 0.8s ease forwards;
          position: relative;
          z-index: 1;
        }

        .d-nix-hero-dot {
          display: inline-block;
          width: 16px;
          height: 13px;
          font-weight: 700;
          border-radius: 50%;
          background: ${isDarkMode ? '#ffffff' : '#161C2D'};
          margin: 0 16px;
          vertical-align: middle;
          position: relative;
          top: -2px;
        }

        .d-nix-hero-subtitle {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          font-family: Roboto;
          color: ${isDarkMode ? '#cbd5e1' : '#161C2D'};
          font-weight: 400;
          max-width: 520px;
          line-height: 1.7;
          margin-bottom: 36px;
          opacity: 0;
          transform: translateY(20px);
          animation: d-nix-fadeUp 0.8s ease 0.15s forwards;
          position: relative;
          z-index: 1;
        }

        .d-nix-hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          transform: translateY(20px);
          animation: d-nix-fadeUp 0.8s ease 0.3s forwards;
          position: relative;
          z-index: 1;
        }

        .d-nix-btn-primary {
          padding: 0.6rem 2.5rem;
          background: #FCDE53;
          color: #271526;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.6s ease 0.3s;
          box-shadow: 0 4px 16px rgba(252, 222, 83, 0.3);
        }

        .d-nix-btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #0066ff;
          border-radius: 50px;
          transform: translate(100%, 100%);
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }

        .d-nix-btn-primary:hover {
          background: #546881;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 102, 255, 0.4);
        }

        .d-nix-btn-primary:hover::before {
          transform: translate(0, 0);
        }

        .d-nix-btn-secondary {
           padding: 0.6rem 2.5rem;
          background: transparent;
          color: ${isDarkMode ? '#ffffff' : '#271526'};
          border: 1.5px solid #FCDE53;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          overflow: visible;
          transform-origin: left center;
          transition: padding-right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
                      transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .d-nix-btn-secondary:hover {
          padding-right: 2.5rem;
          transform: scaleX(1.01);
        }

        .d-nix-btn-text {
          display: inline-block;
        }

        .d-nix-btn-arrow {
          font-size: 1.1rem;
          display: inline-block;
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .d-nix-btn-secondary:hover .d-nix-btn-arrow {
          transform: translateX(15px);
        }

        .d-nix-dashboard-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
          animation: d-nix-fadeUp 1s ease 0.5s forwards;
          position: relative;
          z-index: 1;
          padding: 30px 24px 40px;
        }

        .d-nix-dashboard-container {
          background: ${isDarkMode ? '#1a2332' : '#0f172a'};
          border-radius: 16px;
          padding: 28px;
          max-width: 880px;
          width: 100%;
          margin: 0 auto;
          box-shadow: ${isDarkMode
            ? '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08) inset'
            : '0 25px 80px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'};
          position: relative;
          z-index: 1;
        }

        .d-nix-dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .d-nix-dashboard-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #f1f5f9;
        }

        .d-nix-dashboard-subtitle {
          font-size: 0.78rem;
          color: #64748b;
          margin-top: 4px;
        }

        .d-nix-dashboard-controls {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .d-nix-control-select {
          background: ${isDarkMode ? '#0f1729' : '#1e293b'};
          color: #94a3b8;
          border: 1px solid ${isDarkMode ? '#1e293b' : '#334155'};
          border-radius: 8px;
          padding: 6px 14px;
          font-size: 0.75rem;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
        }

        .d-nix-control-btn {
          background: ${isDarkMode ? '#0f1729' : '#1e293b'};
          color: #94a3b8;
          border: 1px solid ${isDarkMode ? '#1e293b' : '#334155'};
          border-radius: 8px;
          padding: 6px 14px;
          font-size: 0.75rem;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .d-nix-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }

        .d-nix-stat-card {
          background: ${isDarkMode ? '#0f1729' : '#1e293b'};
          border-radius: 12px;
          padding: 16px;
          border: 1px solid ${isDarkMode ? '#1e293b' : '#334155'};
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }

        .d-nix-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
          border-color: ${isDarkMode ? '#334155' : '#475569'};
        }

        .d-nix-stat-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .d-nix-stat-card-title {
          font-size: 0.72rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .d-nix-stat-card-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }

        .d-nix-stat-card-icon svg {
          width: 16px;
          height: 16px;
        }

        .d-nix-stat-card-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f1f5f9;
          line-height: 1.1;
        }

        .d-nix-stat-card-change {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .d-nix-stat-change-positive {
          color: #34d399;
          font-size: 0.72rem;
          font-weight: 600;
        }

        .d-nix-stat-change-label {
          color: #64748b;
          font-size: 0.68rem;
        }

        .d-nix-mini-bar-chart {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 32px;
          margin-top: 4px;
        }

        .d-nix-mini-bar {
          flex: 1;
          border-radius: 2px;
          min-width: 2px;
          transition: height 0.3s ease;
        }

        .d-nix-charts-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 14px;
        }

        .d-nix-chart-panel {
          background: ${isDarkMode ? '#0f1729' : '#1e293b'};
          border-radius: 12px;
          padding: 20px;
          border: 1px solid ${isDarkMode ? '#1e293b' : '#334155'};
        }

        .d-nix-chart-panel-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 2px;
        }

        .d-nix-chart-panel-subtitle {
          font-size: 0.72rem;
          color: #64748b;
          margin-bottom: 16px;
        }

        .d-nix-area-chart-svg {
          width: 100%;
          height: auto;
        }

        .d-nix-chart-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          fill: #64748b;
        }

        .d-nix-chart-legend {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 10px;
        }

        .d-nix-legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          color: #94a3b8;
        }

        .d-nix-legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .d-nix-radar-chart-svg {
          width: 100%;
          max-width: 240px;
          display: block;
          margin: 0 auto;
        }

        .d-nix-radar-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 8px;
          fill: #94a3b8;
        }

        @keyframes d-nix-fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .d-nix-hero-section { padding: 60px 20px 25px; }
          .d-nix-dashboard-wrapper { padding: 25px 20px 60px; }
          .d-nix-hero-dot { width: 6px; height: 6px; margin: 0 10px; }
          .d-nix-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .d-nix-charts-grid { grid-template-columns: 1fr; }
          .d-nix-dashboard-container { padding: 20px; }
          .d-nix-dashboard-controls { width: 100%; justify-content: flex-end; }
          .d-nix-glow-curve { width: 130px; }
        }

        @media (max-width: 480px) {
          .d-nix-hero-section { padding: 48px 16px 20px; }
          .d-nix-dashboard-wrapper { padding: 20px 12px 50px; }
          .d-nix-hero-title { font-size: 1.75rem; }
          .d-nix-hero-dot { width: 5px; height: 5px; margin: 0 8px; }
          .d-nix-hero-subtitle { font-size: 0.85rem; }
          .d-nix-hero-buttons { flex-direction: column; width: 100%; align-items: stretch; }
          .d-nix-btn-primary, .d-nix-btn-secondary { justify-content: center; padding: 12px 24px; }
          .d-nix-stats-grid { grid-template-columns: 1fr; }
          .d-nix-dashboard-container { padding: 14px; border-radius: 12px; }
          .d-nix-stat-card-value { font-size: 1.25rem; }
          .d-nix-chart-panel { padding: 14px; }
          .d-nix-glow-curve { width: 90px; }
        }

        @media (max-width: 380px) {
          .d-nix-hero-title { font-size: 1.5rem; }
          .d-nix-hero-dot { margin: 0 6px; }
          .d-nix-dashboard-container { padding: 10px; }
          .d-nix-stat-card { padding: 12px; }
          .d-nix-dashboard-header { flex-direction: column; }
          .d-nix-dashboard-controls { justify-content: flex-start; }
          .d-nix-glow-curve { width: 60px; }
        }
      `}</style>

      <div className="d-nix-landing-root">
        {/* Hero Section with BLUE glow curves */}
        <div className="d-nix-glow-section">
          <GlowCurve side="left" color="#047EFF" id="hero-l" />
          <GlowCurve side="right" color="#047EFF" id="hero-r" />

          <div className="d-nix-hero-section">
            <h1 className="d-nix-hero-title">
              Analyze<span className="d-nix-hero-dot" />Visualize<span className="d-nix-hero-dot" />Optimize
            </h1>
            <p className="d-nix-hero-subtitle">
              We share common trends and strategies for improving your rental income
              and making sure you stay in high demand.
            </p>
          </div>
        </div>

        {/* Dashboard Section with PURPLE glow curves */}
        <div className="d-nix-glow-section">
          <GlowCurve side="left" color="#BE0AFF" id="dash-l" />
          <GlowCurve side="right" color="#BE0AFF" id="dash-r" />

          <div className="d-nix-dashboard-wrapper">
            <img
              src={heroImage}
              alt="Learning Analytics Dashboard"
              style={{
                width: "100%",
                maxWidth: "880px",
                height: "auto",
                borderRadius: "16px",
                boxShadow: isDarkMode
                  ? "0 25px 80px rgba(0, 0, 0, 0.5)"
                  : "0 25px 80px rgba(15, 23, 42, 0.3)",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
