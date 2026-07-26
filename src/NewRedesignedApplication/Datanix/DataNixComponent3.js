import { useState, useEffect } from "react";
import dataDrivenImage from "../../Assets/datanix/dataDriven.jpg";

export default function DatanixCulture() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

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

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .culture-section {
    width: 100%;
    min-height: 100vh;
    background: ${isDarkMode ? '#0B1B3D' : '#fafaf8'};
    font-family: 'DM Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0 0 0;
  }

  .culture-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .culture-heading {
    font-family: 'Playfair Display', serif;
    font-size: 44px;
    font-weight: 700;
    color: ${isDarkMode ? '#ffffff' : '#271526'};
    text-align: center;
    line-height: 1.2;
    margin-bottom: 60px;
    letter-spacing: -0.5px;
  }

  .culture-content {
    display: flex;
    gap: 50px;
    align-items: center;
  }

  .culture-accordion-side {
    flex: 1;
    min-width: 0;
  }

  .culture-dashboard-side {
    flex: 1.1;
    min-width: 0;
  }

  /* Accordion */
  .accordion-item {
    border-bottom: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#e5e5ea'};
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .accordion-item:hover {
    background: ${isDarkMode ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'};
    border-left: 3px solid ${isDarkMode ? '#60a5fa' : '#9DD9D2'};
    padding-left: 8px;
  }

  .accordion-item:first-child {
    border-top: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#e5e5ea'};
  }

  .accordion-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 4px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: ${isDarkMode ? '#e0e0e0' : '#626262'};
    text-align: left;
    transition: all 0.3s ease;
  }

  .accordion-trigger:hover {
    color: ${isDarkMode ? '#ffffff' : '#000000'};
    padding-left: 8px;
  }

  .accordion-chevron {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${isDarkMode ? '#e0e0e0' : '#626262'};
  }

  .accordion-chevron-open {
    transform: rotate(180deg);
  }

  .accordion-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0 4px;
  }

  .accordion-body-open {
    max-height: 200px;
    padding: 0 4px 20px;
  }

  .accordion-body-text {
    font-size: 14px;
    color: ${isDarkMode ? '#cbd5e1' : '#7a7a8c'};
    line-height: 1.7;
  }

  /* Dashboard */
  .dashboard-frame {
    background: ${isDarkMode ? '#1a2332' : '#063147'};
    border-radius: 16px;
    padding: 24px;
    box-shadow: ${isDarkMode
      ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)'
      : '0 20px 60px rgba(15, 32, 39, 0.3), 0 0 0 1px rgba(255,255,255,0.08)'};
    position: relative;
    overflow: hidden;
  }

  .dashboard-frame::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 17px;
    background: linear-gradient(135deg, rgba(255,255,255,${isDarkMode ? '0.1' : '0.15'}) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,${isDarkMode ? '0.08' : '0.1'}) 100%);
    z-index: 0;
    pointer-events: none;
  }

  .dashboard-inner {
    position: relative;
    z-index: 1;
    border: 3px solid ${isDarkMode ? 'rgba(255,255,255,0.15)' : 'white'};
    border-radius: 20px;
    background: ${isDarkMode ? '#0f1729' : '#0D1435'};
    padding: 1rem;
  }

  /* Top row: area chart + radar */
  .dashboard-top-row {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }

  .dashboard-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 16px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .dashboard-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  .dashboard-card-large {
    flex: 2;
  }

  .dashboard-card-small {
    flex: 1;
  }

  .dashboard-card-title {
    font-size: 11px;
    font-weight: 700;
    color: #e0e0e0;
    margin-bottom: 2px;
    letter-spacing: 0.3px;
  }

  .dashboard-card-subtitle {
    font-size: 9px;
    color: #7a8a9a;
    margin-bottom: 12px;
  }

  /* Bottom row: 3 cards */
  .dashboard-bottom-row {
    display: flex;
    gap: 16px;
  }

  .dashboard-bottom-card {
    flex: 1;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 14px;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .dashboard-bottom-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  /* Chart legend */
  .chart-legend {
    display: flex;
    gap: 12px;
    margin-top: 8px;
    flex-wrap: wrap;
  }

  .chart-legend-item {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 8px;
    color: #7a8a9a;
  }

  .chart-legend-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* SVG charts */
  .chart-area {
    width: 100%;
    height: auto;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .culture-heading {
      font-size: 36px;
    }

    .datanix-section {
      min-height: 80%;
    }

    .culture-content {
      gap: 30px;
    }

    .culture-section {
      min-height: 60vh;
      }
  }

  @media (max-width: 900px) {
    .culture-content {
      flex-direction: column;
      gap: 40px;
    }

    .culture-accordion-side {
      width: 100%;
    }

    .culture-dashboard-side {
      width: 100%;
    }

    .culture-section {
      min-height: 50vh;
      }
  }

  @media (max-width: 768px) {
    .culture-section {
      padding: 0 0;
    }

    .culture-container {
      padding: 0 24px;
    }

    .culture-heading {
      font-size: 30px;
      margin-bottom: 40px;
    }

    .dashboard-frame {
      padding: 18px;
    }
  }

  @media (max-width: 480px) {
    .culture-container {
      padding: 0 18px;
    }

    .culture-heading {
      font-size: 26px;
      margin-bottom: 32px;
    }

    .accordion-trigger {
      font-size: 16px;
      padding: 18px 2px;
    }

    .dashboard-frame {
      padding: 14px;
      border-radius: 12px;
    }

    .dashboard-top-row,
    .dashboard-bottom-row {
      gap: 10px;
    }

    .dashboard-card {
      padding: 10px;
    }

    .dashboard-bottom-card {
      padding: 10px;
    }

    .dashboard-card-title {
      font-size: 9px;
    }

    .dashboard-card-subtitle {
      font-size: 7px;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 350px) {
    .culture-container {
      padding: 0 14px;
    }

    .culture-heading {
      font-size: 22px;
    }

    .accordion-trigger {
      font-size: 14px;
      padding: 16px 0;
    }

    .dashboard-frame {
      padding: 10px;
    }

    .dashboard-bottom-row {
      flex-direction: column;
      gap: 8px;
    }

    .dashboard-top-row {
      flex-direction: column;
      gap: 8px;
    }
  }
`;

const accordionItems = [
  {
    title: "Uncover Insights with AI",
    body: "Turn your data into visuals with advanced data-analysis tools, AI capabilities, and a user-friendly report-creation tool.",
  },
  {
    title: "Bring all your data together",
    body: "Create datasets from any source and add them to the OneLake data hub to create a source of truth for your data.",
  },
  {
    title: "Turns insights into impact",
    body: "Help users make better decisions by infusing insights into the apps they use every day, like those in Microsoft 365.",
  },
  {
    title: "Empower entire data team",
    body: "Reshape how your organization accesses, manages, and acts on data by activating Microsoft Fabric in your Power BI experience.",
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      className={`accordion-chevron ${open ? "accordion-chevron-open" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="5 8 10 13 15 8" />
    </svg>
  );
}

function AreaChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const enrolled = [60, 120, 180, 140, 200, 220];
  const completed = [30, 60, 100, 80, 130, 160];
  const maxVal = 250;
  const w = 280;
  const h = 100;
  const px = 30;
  const py = 10;

  const toX = (i) => px + (i / (months.length - 1)) * (w - px * 2);
  const toY = (v) => h - py - (v / maxVal) * (h - py * 2);

  const enrolledPath = enrolled.map((v, i) => `${i === 0 ? "M" : "L"}${toX(i)},${toY(v)}`).join(" ");
  const completedPath = completed.map((v, i) => `${i === 0 ? "M" : "L"}${toX(i)},${toY(v)}`).join(" ");

  const enrolledAreaPath = `${enrolledPath} L${toX(5)},${h - py} L${toX(0)},${h - py} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h + 20}`} className="chart-area">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c5cfc" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7c5cfc" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[0, 50, 100, 150, 200].map((v) => (
        <g key={v}>
          <line x1={px} y1={toY(v)} x2={w - px} y2={toY(v)} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <text x={px - 4} y={toY(v) + 3} fill="#5a6a7a" fontSize="6" textAnchor="end">{v}</text>
        </g>
      ))}
      {months.map((m, i) => (
        <text key={m} x={toX(i)} y={h + 6} fill="#5a6a7a" fontSize="6" textAnchor="middle">{m}</text>
      ))}
      <path d={enrolledAreaPath} fill="url(#areaGrad)" />
      <path d={enrolledPath} fill="none" stroke="#7c5cfc" strokeWidth="2" strokeLinejoin="round" />
      <path d={completedPath} fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 3" />
      {enrolled.map((v, i) => (
        <circle key={`e${i}`} cx={toX(i)} cy={toY(v)} r="2.5" fill="#7c5cfc" />
      ))}
      {completed.map((v, i) => (
        <circle key={`c${i}`} cx={toX(i)} cy={toY(v)} r="2.5" fill="#00d4aa" />
      ))}
    </svg>
  );
}

function RadarChart() {
  const labels = ["Technical", "Creativity", "Leadership", "ProblemSolving", "Teamwork"];
  const values = [0.9, 0.6, 0.75, 0.85, 0.7];
  const cx = 60, cy = 55, r = 40;
  const angleStep = (2 * Math.PI) / labels.length;

  const getPoint = (i, scale) => {
    const angle = -Math.PI / 2 + i * angleStep;
    return [cx + Math.cos(angle) * r * scale, cy + Math.sin(angle) * r * scale];
  };

  const dataPoints = values.map((v, i) => getPoint(i, v));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ") + " Z";

  return (
    <svg viewBox="0 0 120 115" className="chart-area">
      {[0.25, 0.5, 0.75, 1].map((s) => (
        <polygon
          key={s}
          points={labels.map((_, i) => getPoint(i, s).join(",")).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
        />
      ))}
      {labels.map((_, i) => {
        const [x, y] = getPoint(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />;
      })}
      <polygon points={dataPath.replace(/[MLZ]/g, "").trim()} fill="rgba(180, 100, 220, 0.25)" stroke="#b464dc" strokeWidth="1.5" />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="2" fill="#b464dc" />
      ))}
      {labels.map((label, i) => {
        const [x, y] = getPoint(i, 1.28);
        return (
          <text key={label} x={x} y={y} fill="#7a8a9a" fontSize="5" textAnchor="middle" dominantBaseline="middle">
            {label}
          </text>
        );
      })}
    </svg>
  );
}

function LineChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const series = {
    engineering: { data: [40, 60, 55, 80, 70, 120], color: "#00d4aa" },
    sales: { data: [30, 45, 80, 60, 90, 85], color: "#f472b6" },
    marketing: { data: [20, 50, 40, 45, 55, 60], color: "#60a5fa" },
    hr: { data: [50, 35, 60, 50, 65, 55], color: "#fbbf24" },
  };
  const maxVal = 140;
  const w = 160, h = 80, px = 22, py = 8;

  const toX = (i) => px + (i / (months.length - 1)) * (w - px * 2);
  const toY = (v) => h - py - (v / maxVal) * (h - py * 2);

  return (
    <svg viewBox={`0 0 ${w} ${h + 14}`} className="chart-area">
      {[0, 50, 100].map((v) => (
        <g key={v}>
          <line x1={px} y1={toY(v)} x2={w - px} y2={toY(v)} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <text x={px - 3} y={toY(v) + 2} fill="#5a6a7a" fontSize="5" textAnchor="end">{v}</text>
        </g>
      ))}
      {months.map((m, i) => (
        <text key={m} x={toX(i)} y={h + 4} fill="#5a6a7a" fontSize="5" textAnchor="middle">{m}</text>
      ))}
      {Object.entries(series).map(([key, { data, color }]) => {
        const path = data.map((v, i) => `${i === 0 ? "M" : "L"}${toX(i)},${toY(v)}`).join(" ");
        return (
          <g key={key}>
            <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
            {data.map((v, i) => (
              <circle key={i} cx={toX(i)} cy={toY(v)} r="2" fill={color} />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function PieChart() {
  const slices = [
    { label: "Design 18%", pct: 18, color: "#00d4aa" },
    { label: "Development", pct: 35, color: "#60a5fa" },
    { label: "Marketing 12%", pct: 12, color: "#f472b6" },
    { label: "Data Science", pct: 20, color: "#fbbf24" },
    { label: "Misc 15%", pct: 15, color: "#a78bfa" },
  ];

  const cx = 50, cy = 45, r = 30;
  let cumAngle = -90;
  const paths = slices.map((s) => {
    const startAngle = cumAngle;
    const sweep = (s.pct / 100) * 360;
    cumAngle += sweep;
    const endAngle = startAngle + sweep;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    const largeArc = sweep > 180 ? 1 : 0;
    return { ...s, d: `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc} 1 ${x2},${y2} Z` };
  });

  return (
    <svg viewBox="0 0 100 90" className="chart-area">
      {paths.map((s, i) => (
        <path key={i} d={s.d} fill={s.color} stroke="#0f2027" strokeWidth="1" />
      ))}
    </svg>
  );
}

function BarChart() {
  const weeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
  const values = [60, 80, 45, 90, 70, 100, 55, 85];
  const maxVal = 110;
  const w = 120, h = 70, px = 18, py = 8;
  const barW = 7;

  const toX = (i) => px + (i / (weeks.length - 1)) * (w - px * 2);
  const toY = (v) => h - py - (v / maxVal) * (h - py * 2);

  return (
    <svg viewBox={`0 0 ${w} ${h + 14}`} className="chart-area">
      {[0, 50, 100].map((v) => (
        <g key={v}>
          <line x1={px} y1={toY(v)} x2={w - px} y2={toY(v)} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <text x={px - 3} y={toY(v) + 2} fill="#5a6a7a" fontSize="5" textAnchor="end">{v}</text>
        </g>
      ))}
      {weeks.map((wk, i) => (
        <text key={wk} x={toX(i)} y={h + 4} fill="#5a6a7a" fontSize="4.5" textAnchor="middle">{wk}</text>
      ))}
      {values.map((v, i) => (
        <rect
          key={i}
          x={toX(i) - barW / 2}
          y={toY(v)}
          width={barW}
          height={h - py - toY(v)}
          rx="1.5"
          fill={`rgba(124, 92, 252, ${0.5 + (v / maxVal) * 0.5})`}
        />
      ))}
    </svg>
  );
}

  return (
    <>
      <style>{styles}</style>
      <section className="culture-section">
        <div className="culture-container">
          <h2 className="culture-heading">
            Create a data-driven culture with<br />DATANIX for all
          </h2>

          <div className="culture-content">
            {/* Left: Accordion */}
            <div className="culture-accordion-side">
              {accordionItems.map((item, i) => (
                <div className="accordion-item" key={i}>
                  <button className="accordion-trigger" onClick={() => toggle(i)}>
                    <span>{item.title}</span>
                    <ChevronIcon open={openIndex === i} />
                  </button>
                  <div className={`accordion-body ${openIndex === i ? "accordion-body-open" : ""}`}>
                    <p className="accordion-body-text">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="culture-dashboard-side">
              <div style={{
                background: "#063147",
                padding: "24px",
                borderRadius: "0",
                boxShadow: "none",
              }}>
                <img
                  src={dataDrivenImage}
                  alt="Data-driven culture dashboard"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}