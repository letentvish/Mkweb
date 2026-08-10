import React from "react";
import Marquee from "react-fast-marquee";
import { Compass, Users, ArrowRight, BarChart2, PieChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./GalleryShowcase.css";

export default function GalleryShowcase() {
  const navigate = useNavigate();

  const row1Photos = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
  ];

  const row2Photos = [
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="cc-gallery-section" id="gallery-showcase">
      {/* Background Dot Pattern */}
      <div className="cc-gallery-dot-pattern" />

      <div className="cc-gallery-container">
        
        {/* Top Header Section (2-Column Grid Layout matching Screenshot) */}
        <div className="cc-gallery-header-grid">
          
          {/* Left Column: Pill Badge & Headline */}
          <div>
            <div className="cc-gallery-pill">
              <span className="cc-gallery-pill-dot" />
              <span>READY TO TRANSFORM YOUR ENTERPRISE?</span>
            </div>

            <h2 className="cc-gallery-headline">
              Build capability that <br />
              <span className="cc-gallery-headline-accent">outlives</span> the <br />
              engagement.
            </h2>
          </div>

          {/* Right Column: Paragraph Intro & Dual Action Buttons */}
          <div>
            <p className="cc-gallery-intro-text">
              Talk to our senior advisory partners and map out a customized corporate consulting engagement tailored for your organizational strategy.
            </p>

            <div className="cc-gallery-btn-group">
              <button
                onClick={() => navigate("/contact")}
                className="cc-gallery-btn-primary"
              >
                <Compass className="w-4 h-4" />
                <span>Book Strategy Session</span>
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="cc-gallery-btn-secondary"
              >
                <Users className="w-4 h-4" />
                <span>Talk to an Expert</span>
              </button>
            </div>
          </div>

        </div>

        {/* 2-Row Infinite Marquee Carousel matching Screenshot */}
        <div className="cc-gallery-marquee-container">
          
          {/* ROW 1 MARQUEE */}
          <Marquee 
            speed={30} 
            gradient={true} 
            gradientColor="#01182F" 
            gradientWidth={80}
            pauseOnHover={true}
          >
            {/* Photo 1 */}
            <div className="cc-gallery-card-photo">
              <img src={row1Photos[0]} alt="Workshop session 1" />
            </div>

            {/* Document File UI Card */}
            <div className="cc-gallery-card-ui-doc">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-800 font-bold">
                  <BarChart2 className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-[#1E293B] text-white p-3 rounded-xl shadow-lg border border-slate-700">
                <h4 className="font-poppins font-bold text-sm text-white">Document File</h4>
                <p className="text-[11px] text-slate-400 font-mono">456 GB | 1056 Items</p>
              </div>
              <div className="flex items-end justify-around h-10 pt-1">
                <div className="w-3.5 bg-slate-800 rounded-t h-6" />
                <div className="w-3.5 bg-slate-800 rounded-t h-10" />
                <div className="w-3.5 bg-slate-800 rounded-t h-4" />
                <div className="w-3.5 bg-slate-800 rounded-t h-8" />
              </div>
            </div>

            {/* Analytics UI Circle Card */}
            <div className="cc-gallery-card-ui-chart">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>80%</span>
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
                  <PieChart className="w-3.5 h-3.5" />
                </div>
                <span>40%</span>
              </div>
              <div className="bg-slate-200/80 rounded-xl p-3 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-slate-400/40" />
                <div className="h-2.5 w-3/4 bg-slate-800 rounded" />
              </div>
            </div>

            {/* Photo 2 */}
            <div className="cc-gallery-card-photo">
              <img src={row1Photos[1]} alt="Executive strategy session" />
            </div>

            {/* Photo 3 */}
            <div className="cc-gallery-card-photo">
              <img src={row1Photos[2]} alt="Leadership team meeting" />
            </div>
          </Marquee>

          {/* ROW 2 MARQUEE (Reverse direction) */}
          <Marquee 
            speed={30} 
            direction="right"
            gradient={true} 
            gradientColor="#01182F" 
            gradientWidth={80}
            pauseOnHover={true}
          >
            {/* Photo 1 */}
            <div className="cc-gallery-card-photo">
              <img src={row2Photos[0]} alt="Corporate training lab" />
            </div>

            {/* Document File UI Card */}
            <div className="cc-gallery-card-ui-doc">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-800 font-bold">
                  <BarChart2 className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-[#1E293B] text-white p-3 rounded-xl shadow-lg border border-slate-700">
                <h4 className="font-poppins font-bold text-sm text-white">Document File</h4>
                <p className="text-[11px] text-slate-400 font-mono">456 GB | 1056 Items</p>
              </div>
              <div className="flex items-end justify-around h-10 pt-1">
                <div className="w-3.5 bg-slate-800 rounded-t h-6" />
                <div className="w-3.5 bg-slate-800 rounded-t h-10" />
                <div className="w-3.5 bg-slate-800 rounded-t h-4" />
                <div className="w-3.5 bg-slate-800 rounded-t h-8" />
              </div>
            </div>

            {/* Photo 2 */}
            <div className="cc-gallery-card-photo">
              <img src={row2Photos[1]} alt="Team collaboration" />
            </div>

            {/* Photo 3 */}
            <div className="cc-gallery-card-photo">
              <img src={row2Photos[2]} alt="Organizational capability workshop" />
            </div>

            {/* Photo 4 */}
            <div className="cc-gallery-card-photo">
              <img src={row2Photos[3]} alt="Executive advisory lab" />
            </div>
          </Marquee>

        </div>

        {/* Bottom Executive Banner CTA Box matching Screenshot */}
        <div className="cc-gallery-bottom-banner">
          <div>
            <h3 className="cc-gallery-bottom-title">
              Engineered for Sustainable Impact
            </h3>
            <p className="cc-gallery-bottom-desc">
              Diagnosing root causes, aligning leadership vision, and embedding continuous capability across your enterprise.
            </p>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="cc-gallery-bottom-btn"
          >
            <span>Explore Corporate Engagements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
