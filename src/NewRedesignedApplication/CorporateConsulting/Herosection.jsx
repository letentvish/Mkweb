import React from "react";
import { Users, Zap, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CorporateHero = () => {
  const navigate = useNavigate();

  const heroBgImage = "https://lh3.googleusercontent.com/aida/AP1WRLuM_VjiKISRwK7zGvTPtJcgrtR4TRez_HCXDdZxXAbOQyvFp6PTMvdzdQlXz4jVj7LY2hVPV_AxEtlUSFgUIDS1db1NIPuD3eVyTIc4m1J89mgAIq7Q5OvkHunlSBOTjtCeqCm0a1zX67C0R0Ttvr7A0ijqmPvh7PJiQZo4de6bJk_ISJvWi38gP0OS25uQTxVM4ZL4Z9CjgYMlCFxHC9x_dl1ga5CRXcLrX51OTV3kzv3IpguB5Ebtmdw";

  return (
    <section className="relative min-h-screen pt-24 pb-32 bg-[#f7f9fb] overflow-hidden">
      
      {/* Background Image with Linear Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-40"
        style={{ backgroundImage: `url('${heroBgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f9fb]/70 via-[#f7f9fb]/90 to-[#f7f9fb] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl pt-4">
        
        {/* Top Content Area: 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
          
          {/* Left Column: Line Accent & Headline */}
          <div className="max-w-xl text-left">
            <div className="w-16 h-0.5 bg-[#0284c7] mb-8" />
            <h1 className="font-poppins font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-[#01182F]">
              Build organizations that <span className="text-[#0284c7]">perform</span>
            </h1>
          </div>

          {/* Right Column: Paragraph Intro & CTAs */}
          <div className="max-w-lg lg:ml-auto text-left">
            <p className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed font-normal">
              Bespoke leadership, culture, and change consulting — diagnosed at the root, measured at every step, and coached until it holds. This is capability that stays long after we leave the room.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-[#0284c7] hover:bg-sky-700 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-sky-500/25 hover:scale-105 active:scale-95"
              >
                Explore
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#0284c7] bg-white border border-[#0284c7] hover:bg-slate-50 rounded-full transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
              >
                Talk to an Expert
              </button>
            </div>
          </div>

        </div>

        {/* Features Grid: 3 Staggered Aspect Ratio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Feature Card 1 */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] flex flex-col justify-end shadow-xl border border-slate-200/60 transition-all duration-500">
            <img 
              alt="Leadership team meeting" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLvmEgpdlUJJVs7nEQGhdVX7Ha_UPMhD2Mp5_B9AkshwDXzeZ6SZNm4DMV9oPvAZaQ5EQgFM75NZjJFqJPWqeOtVZVpYcQ6FVBERfxd7uHfZEhDvjCeTUvIFnD7G0oxh2dLYv4MoPp-l5u1oKq4royqecCbI4mYCdWXdkzFpYcQODhjbqMk5eZFJyMci-o6IHmn1bfPzyFCG_8ByXgYLK6UD3zzIF0fmGkppZ0fWreZgyOkZSAtURW0gxnk"
              onError={(e) => { e.target.src = "/pillar_consulting.png"; }}
            />
            {/* Card Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#01182F] via-[#01182F]/60 to-transparent" />
            
            <div className="relative p-8 z-10 text-white">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-md border border-white/20">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl mb-3 text-white">Leadership that multiplies</h3>
              <p className="text-slate-200 text-sm leading-relaxed font-normal">Build leaders who create leaders and strengthen every layer.</p>
            </div>
          </div>

          {/* Feature Card 2 (Staggered Downward with md:translate-y-8) */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] flex flex-col justify-end shadow-xl border border-slate-200/60 transition-all duration-500 md:translate-y-8">
            <img 
              alt="Modern skyscraper" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLtdu6iZBFWrMrIvQbGDrJsn-LpYL7aBAthhiQsFOXYhltnuWQaEty64Je1HnWzjcy5Oun5XSTgbmUBx3r05MwnpwcWyrwANSyte73wnTAniJWt7qbQZnqPvlRIhadrQfLhZq7BgFMU_E8yTtcW-Kje8-g-tiNGGQZqnl2G9-77D_G5W8ihNw5037hg7yUKcXfAAjxeCMp7N-UuGQF-Zb2GpnzO_XecMGh7muYaSoQrOXvYZPZcW1DvdRGI"
              onError={(e) => { e.target.src = "/pillar_academic.png"; }}
            />
            {/* Card Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#01182F] via-[#01182F]/60 to-transparent" />
            
            <div className="relative p-8 z-10 text-white">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-md border border-white/20">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl mb-3 text-white">Transformation that lasts</h3>
              <p className="text-slate-200 text-sm leading-relaxed font-normal">Redesign organizations and drive change that delivers sustainable impact.</p>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] flex flex-col justify-end shadow-xl border border-slate-200/60 transition-all duration-500">
            <img 
              alt="Data analytics dashboard" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLsV3WGXuOVlH6lYuDkAVorIiv9sTjh0TLNJ7nANVdgMH4t6d4FvVUiQl-nhYptsASFvFyVK2QgeUviO2cFcM-LpumiS0gMRPO84XeD_xIf2TkFq3muLH6BksX6M2q9_a3Cncai8wwtw7u1ja_lti2rkBLfKo_zkKLjM_o7VLQJ1I4APik2yY_U9wUT83oP-Y95RTWjv02xxmeyJ-G52RzrbfEwup7-fCeOWmSMonqNBoDVReB_UulwspS8"
              onError={(e) => { e.target.src = "/pillar_technology.png"; }}
            />
            {/* Card Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#01182F] via-[#01182F]/60 to-transparent" />
            
            <div className="relative p-8 z-10 text-white">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-md border border-white/20">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl mb-3 text-white">Outcomes you can measure</h3>
              <p className="text-slate-200 text-sm leading-relaxed font-normal">Develop capabilities that move the needle on what matters most.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CorporateHero;