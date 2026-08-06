import React from "react";
import { 
  Compass, 
  Users, 
  PieChart, 
  Brain, 
  Target, 
  MessageSquare, 
  ShieldCheck, 
  Rocket 
} from "lucide-react";
import LogoDark from "../../Assets/MultipliersKraftLogoDark.png";

export default function AssessmentHubSection() {

  const planets = [
    {
      id: "360",
      name: "360°",
      size: "w-11 h-11",
      radius: 110,
      duration: "20s",
      icon: <Compass className="w-5 h-5 text-white" />,
      gradient: "from-[#0284c7] to-[#0369a1]",
      label: "360° Feedback"
    },
    {
      id: "180",
      name: "180°",
      size: "w-10 h-10",
      radius: 150,
      duration: "24s",
      icon: <Users className="w-4 h-4 text-white" />,
      gradient: "from-sky-400 to-[#0284c7]",
      label: "180° Growth"
    },
    {
      id: "psychometric",
      name: "Psychometrics",
      size: "w-12 h-12",
      radius: 190,
      duration: "28s",
      icon: <Brain className="w-5 h-5 text-white" />,
      gradient: "from-indigo-500 to-[#0284c7]",
      label: "Psychometrics"
    },
    {
      id: "culture",
      name: "Culture",
      size: "w-11 h-11",
      radius: 230,
      duration: "32s",
      icon: <PieChart className="w-5 h-5 text-white" />,
      gradient: "from-teal-500 to-[#0284c7]",
      label: "270° Perspective"
    },
    {
      id: "engagement",
      name: "Engagement",
      size: "w-10 h-10",
      radius: 270,
      duration: "36s",
      icon: <MessageSquare className="w-4 h-4 text-white" />,
      gradient: "from-blue-500 to-indigo-600",
      label: "Engagement"
    },
    {
      id: "leadership",
      name: "Leadership",
      size: "w-13 h-13",
      radius: 310,
      duration: "40s",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      gradient: "from-amber-500 to-[#0284c7]",
      label: "Leadership"
    },
    {
      id: "archetype",
      name: "Archetype",
      size: "w-12 h-12",
      radius: 350,
      duration: "44s",
      icon: <Target className="w-5 h-5 text-white" />,
      gradient: "from-purple-500 to-sky-500",
      label: "Career Archetype"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 relative overflow-hidden" id="assessment-hub">
      
      {/* Dynamic Keyframe Animations for Light Mode Assessment Galaxy */}
      <style>{`
        .galaxy-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1.5px dashed rgba(2, 132, 199, 0.28);
          box-shadow: 0 0 15px rgba(2, 132, 199, 0.04);
        }

        .galaxy-planet {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .galaxy-planet:hover {
          transform: translate(-50%, -50%) scale(1.2) !important;
          box-shadow: 0 8px 25px rgba(2, 132, 199, 0.5), inset 0 1px 4px rgba(255, 255, 255, 0.8);
          z-index: 50;
        }

        .galaxy-planet-label {
          position: absolute;
          bottom: -26px;
          white-space: nowrap;
          color: #01182F;
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 10px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(2, 132, 199, 0.3);
          padding: 2px 8px;
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          pointer-events: none;
        }

        .galaxy-core-engine {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 124px;
          height: 124px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff 0%, #e0f2fe 55%, #0284c7 100%);
          box-shadow: 0 0 35px rgba(2, 132, 199, 0.35), 0 0 70px rgba(2, 132, 199, 0.15);
          border: 4px solid #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .galaxy-core-engine::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(2, 132, 199, 0.4);
          animation: pulseCore 2.5s infinite;
        }

        @keyframes pulseCore {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.45); opacity: 0; }
        }

        /* Orbit Rotations */
        @keyframes orbitRotate1 { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes orbitRotate2 { from { transform: translate(-50%, -50%) rotate(50deg); } to { transform: translate(-50%, -50%) rotate(410deg); } }
        @keyframes orbitRotate3 { from { transform: translate(-50%, -50%) rotate(100deg); } to { transform: translate(-50%, -50%) rotate(460deg); } }
        @keyframes orbitRotate4 { from { transform: translate(-50%, -50%) rotate(150deg); } to { transform: translate(-50%, -50%) rotate(510deg); } }
        @keyframes orbitRotate5 { from { transform: translate(-50%, -50%) rotate(200deg); } to { transform: translate(-50%, -50%) rotate(560deg); } }
        @keyframes orbitRotate6 { from { transform: translate(-50%, -50%) rotate(250deg); } to { transform: translate(-50%, -50%) rotate(610deg); } }
        @keyframes orbitRotate7 { from { transform: translate(-50%, -50%) rotate(300deg); } to { transform: translate(-50%, -50%) rotate(660deg); } }

        /* Counter-rotations to keep text/icons upright */
        @keyframes upright1 { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(-360deg); } }
        @keyframes upright2 { from { transform: translate(-50%, -50%) rotate(-50deg); } to { transform: translate(-50%, -50%) rotate(-410deg); } }
        @keyframes upright3 { from { transform: translate(-50%, -50%) rotate(-100deg); } to { transform: translate(-50%, -50%) rotate(-460deg); } }
        @keyframes upright4 { from { transform: translate(-50%, -50%) rotate(-150deg); } to { transform: translate(-50%, -50%) rotate(-510deg); } }
        @keyframes upright5 { from { transform: translate(-50%, -50%) rotate(-200deg); } to { transform: translate(-50%, -50%) rotate(-560deg); } }
        @keyframes upright6 { from { transform: translate(-50%, -50%) rotate(-250deg); } to { transform: translate(-50%, -50%) rotate(-610deg); } }
        @keyframes upright7 { from { transform: translate(-50%, -50%) rotate(-300deg); } to { transform: translate(-50%, -50%) rotate(-660deg); } }

        @keyframes antiLabel1 { from { transform: translateX(-50%) rotate(0deg); } to { transform: translateX(-50%) rotate(-360deg); } }
        @keyframes antiLabel2 { from { transform: translateX(-50%) rotate(-50deg); } to { transform: translateX(-50%) rotate(-410deg); } }
        @keyframes antiLabel3 { from { transform: translateX(-50%) rotate(-100deg); } to { transform: translateX(-50%) rotate(-460deg); } }
        @keyframes antiLabel4 { from { transform: translateX(-50%) rotate(-150deg); } to { transform: translateX(-50%) rotate(-510deg); } }
        @keyframes antiLabel5 { from { transform: translateX(-50%) rotate(-200deg); } to { transform: translateX(-50%) rotate(-560deg); } }
        @keyframes antiLabel6 { from { transform: translateX(-50%) rotate(-250deg); } to { transform: translateX(-50%) rotate(-610deg); } }
        @keyframes antiLabel7 { from { transform: translateX(-50%) rotate(-300deg); } to { transform: translateX(-50%) rotate(-660deg); } }

        .planet-orbit-container {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform-origin: center;
        }
      `}</style>

      {/* Background Graphic Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="assess-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#assess-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Text & Info Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            {/* Top Accent Bar & Badge */}
            <div>
              <p className="text-xs font-poppins font-extrabold text-[#0284c7] tracking-widest uppercase mb-1">
                ASSESSMENT HUB
              </p>
              <div className="w-10 h-1 bg-[#0284c7] rounded-full my-3" />
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.08]">
              Next-Gen <br />
              <span className="text-[#0284c7]">Assessment Suite</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Deep Diagnostics, Assessments, and Coaching aren't add-ons we tack on at the end. They run as continuous threads through every stage of the engagement — so growth is measured, not assumed.
            </p>

            {/* Rocket Callout Card Container */}
            <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4 text-left">
              <div className="w-11 h-11 rounded-xl bg-sky-100 border border-sky-200 text-[#0284c7] flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                Skip the custom builds and integration delays. Access our Assessment suite of validated, plug-and-play instruments the moment you sign up.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Light Mode Assessment Galaxy Visualization Canvas */}
          <div className="lg:col-span-7 relative flex items-center justify-center py-8 lg:py-0">
            
            <div className="relative w-full max-w-[750px] aspect-square flex items-center justify-center">
              
              {/* Central Core Engine */}
              <div className="galaxy-core-engine">
                <img src={LogoDark} alt="MKraft Logo" className="h-6 w-auto object-contain mb-1" />
                <span className="font-poppins font-extrabold text-xs text-[#01182F] tracking-tight leading-none text-center">
                  Assess <br />
                  <span className="text-[10px] text-[#0284c7] font-bold">Engine</span>
                </span>
              </div>

              {/* Render 7 Concentric Orbits & Planets */}
              {planets.map((p, idx) => {
                const diameter = p.radius * 2;
                const animIndex = idx + 1;

                return (
                  <React.Fragment key={p.id}>
                    {/* Orbit Ring */}
                    <div 
                      className="galaxy-orbit" 
                      style={{ 
                        width: `${diameter}px`, 
                        height: `${diameter}px` 
                      }} 
                    />

                    {/* Planet Orbiting Container */}
                    <div 
                      className="planet-orbit-container"
                      style={{ animation: `orbitRotate${animIndex} ${p.duration} linear infinite` }}
                    >
                      {/* Planet Sphere */}
                      <div 
                        className={`galaxy-planet ${p.size} bg-gradient-to-br ${p.gradient}`}
                        style={{
                          transform: `translate(-50%, -50%) translateY(-${p.radius}px)`,
                          animation: `upright${animIndex} ${p.duration} linear infinite`
                        }}
                      >
                        {p.icon}
                        
                        {/* Upright Planet Label */}
                        <span 
                          className="galaxy-planet-label"
                          style={{ animation: `antiLabel${animIndex} ${p.duration} linear infinite` }}
                        >
                          {p.name}
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
