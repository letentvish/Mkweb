import React from "react";
import { Users, Search, Cpu, Target } from "lucide-react";

export default function WhyMKraft() {

  const differentiators = [
    {
      badge: "Bespoke",
      title: "Designed around your business",
      description: "Every engagement begins with understanding your organization, not adapting you to a predefined program.",
      icon: <Users className="w-6 h-6 text-[#0284c7]" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKtKGK-9WlJCDOBVEx-DSxVFIs5XuB6y-1a2tRw8ymdvq0AOw_t42NnlSKHvixW8rex39eSJTbrHTVjUdbxkF2R3m5RRcL36e93Bo-nPkWaXiLOUm3bPzLoxg11VeDrnX88MEYSGJKOwMJ3JTBFBO_a4gFBodGn0UK7GWI6cXXnCKpHK_p2XQDT0ApulrA9OQYBJtFgTfWzI_XL78b8Ctez0FSXW78Dd85lMGEWzbSgqHSVGhkJ9jc",
      fallbackImage: "/media__1785045152450.png"
    },
    {
      badge: "Research-Backed",
      title: "Evidence before intervention",
      description: "We diagnose before we design, using proven assessments and data to build targeted capability solutions.",
      icon: <Search className="w-6 h-6 text-[#0284c7]" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9fKA2ze8w1aXrc1jmzDjdRZiBRR-VmdELh0Lo37O0nmr5WGze3S6EqX7RWcJaLEjD7m6jfuX-ahfBTx4UKA_YBsQSoQSv0UW9_EW6CZDFjWOBF4gEEF_KLMKnZgbcBEqlJxQHeGoE7p68LFGxoV578gx6HlZMqC1UTvmiL7GvvwPpZsLBmcNNJshsTz5XphavyAzt7LZTCbayQcTDyQiw0a0D34Daoa78DbCwOrpfWU4t5qwiAa6m",
      fallbackImage: "/media__1785045321185.png"
    },
    {
      badge: "Technology-Enabled",
      title: "Capability reinforced by technology",
      description: "Our consulting is strengthened by digital platforms that sustain learning and track progress long after implementation.",
      icon: <Cpu className="w-6 h-6 text-[#0284c7]" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm13ZeRUgA6DMaOjzSUju_WEmLZ6K34vPLDw8YXSvDWaUDcd1kyUfDkcC3gKTY5u6no4fQsxcC9zwNBZqwOrDqfriSlzLE5sPR1_UDF6LLEPlVTQN-mSQ_LpC-qyaL6vcsuB5TIy_nPZfJqrt0z7mbb7QXPnOKxkhdjoRI5r6HItrHQXLCIr3BPv1k5aqlUAZROyQLPBSm_NWOVs3rCDpYCtc4cv7ZUMF5FQBzU98nb9UCnqIG6Qid",
      fallbackImage: "/cta_3d_cube_stack_1785046334407.png"
    },
    {
      badge: "Outcome-Focused",
      title: "Measured by business performance",
      description: "Success is not measured by attendance. It is measured by improved leadership, stronger teams, and better organizational outcomes.",
      icon: <Target className="w-6 h-6 text-[#0284c7]" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQFnA8Mp6X-6Vfr7UWERDch4eY-msMQB3F6ODfbYTqkZyl6Y6WAr8dPc30sMa_p64pMHIPZH-RVlNspDr-3mX5YkPwqQBa6I9E9vVRlGEmWdD0L_1JzvH__ABot2Ak6WvMddYahQOxHkBG2sjiZbsaMDPnxfcMCgW-wYwPStiWztose-JQL9gxyTdJ5RRFGYvYfKXKZ2qjAJVm2OWyTHwj4qU3RXx8Kt2wYYVGfaIwQH2M3l6xnbbY",
      fallbackImage: "/cta_3d_barchart_1785046320601.png"
    }
  ];

  return (
    <section className="bg-[#f7f9fb] min-h-screen py-24 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-700 relative overflow-hidden border-b border-slate-200" id="why-mkraft">
      
      {/* Background Radial Gradient Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 100% 0%, rgba(2, 132, 199, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(2, 132, 199, 0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 text-[#0284c7] text-sm font-semibold tracking-wide uppercase mb-6 border border-blue-100 font-poppins">
            Differentiators
          </div>
          
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-[#01182f] mb-6 tracking-tight">
            Why <span className="text-[#0284c7]">MKraft</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Most consulting hands you a deck. <br className="hidden sm:inline" />
            We hand you difference that outlives the engagement.
          </p>
        </header>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 text-left">
          {differentiators.map((card, idx) => (
            <article 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300 group overflow-hidden"
            >
              <div>
                {/* Top Icon Circle */}
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#0284c7] group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Sub-tag Badge */}
                <div className="text-sm font-semibold text-[#0284c7] uppercase tracking-wider mb-3 font-poppins">
                  {card.badge}
                </div>

                <h3 className="text-2xl font-poppins font-bold text-[#01182f] mb-4 leading-tight">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed font-normal mb-6">
                  {card.description}
                </p>
              </div>

              {/* Bottom Flush Image Container (Without Margins) */}
              <div className="-mx-6 -mb-6 sm:-mx-8 sm:-mb-8 w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] h-44 sm:h-48 overflow-hidden bg-sky-50/50 border-t border-sky-100/60 mt-auto">
                <img 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100" 
                  src={card.image}
                  onError={(e) => { e.target.src = card.fallbackImage; }}
                />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
