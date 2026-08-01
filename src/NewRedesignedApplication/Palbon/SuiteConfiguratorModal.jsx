import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  Send
} from "lucide-react";

const MODULES_DATA = [
  // Core HR / Nucleus
  {
    id: "employee-management",
    category: "nucleus",
    categoryLabel: "Nucleus • Core HR",
    title: "Employee Management",
    desc: "One clean record per person — profiles, documents, hierarchy.",
    killNote: "Kills: the master spreadsheet.",
    defaultSelected: true
  },
  {
    id: "attendance",
    category: "nucleus",
    categoryLabel: "Nucleus • Core HR",
    title: "Attendance & Roster",
    desc: "Punch in/out, shift rotation and real-time biometric reports.",
    killNote: "Kills: the month-end reconciliation marathon.",
    defaultSelected: true
  },
  {
    id: "leave-management",
    category: "nucleus",
    categoryLabel: "Nucleus • Core HR",
    title: "Leave & Time Off",
    desc: "Requests, balances and custom policies that apply themselves.",
    killNote: "Kills: 'how many leaves do I have?' emails.",
    defaultSelected: true
  },
  {
    id: "automated-payroll",
    category: "nucleus",
    categoryLabel: "Nucleus • Core HR",
    title: "Automated Payroll",
    desc: "Salary runs, payslips and statutory compliance, automated.",
    killNote: "Kills: the three-day payroll scramble.",
    defaultSelected: true
  },

  // Operations & ERP
  {
    id: "financial-management",
    category: "erp",
    categoryLabel: "ERP • Operations",
    title: "Financial Management",
    desc: "General ledger, AP/AR, cash flow and real-time reconciliation.",
    killNote: "Kills: missing invoice panic.",
    defaultSelected: true
  },
  {
    id: "procurement",
    category: "erp",
    categoryLabel: "ERP • Operations",
    title: "Procurement & POs",
    desc: "Vendor management, approvals and automated purchase orders.",
    killNote: "Kills: unapproved rogue spending.",
    defaultSelected: false
  },
  {
    id: "inventory-tracking",
    category: "erp",
    categoryLabel: "ERP • Operations",
    title: "Inventory Tracking",
    desc: "Multi-warehouse stock visibility, batch tracking and forecasting.",
    killNote: "Kills: out-of-stock surprises.",
    defaultSelected: false
  },
  {
    id: "b2b-workflow",
    category: "erp",
    categoryLabel: "ERP • Operations",
    title: "B2B Workflow Automation",
    desc: "Custom logic triggers for inter-departmental tasks.",
    killNote: "Kills: manual email handoffs.",
    defaultSelected: false
  },

  // Magnetics & L&D
  {
    id: "continuous-upskilling",
    category: "magnetics",
    categoryLabel: "Magnetics • Development",
    title: "Continuous Upskilling",
    desc: "Personalized learning pathways tied to role requirements.",
    killNote: "Kills: static training manuals.",
    defaultSelected: false
  },
  {
    id: "skill-gap-diagnostics",
    category: "magnetics",
    categoryLabel: "Magnetics • Development",
    title: "Skill Gap Diagnostics",
    desc: "AI-driven assessments to identify organizational blind spots.",
    killNote: "Kills: annual guesswork appraisals.",
    defaultSelected: false
  },
  {
    id: "ld-analytics",
    category: "magnetics",
    categoryLabel: "Magnetics • Development",
    title: "L&D ROI Analytics",
    desc: "ROI tracking on corporate training & capability initiatives.",
    killNote: "Kills: unmeasured training budget.",
    defaultSelected: false
  },

  // Intelligence & Governance
  {
    id: "task-project-orchestration",
    category: "intelligence",
    categoryLabel: "Intelligence • Core",
    title: "Task & Project Orchestration",
    desc: "Assign, track and collaborate across teams in one pipeline.",
    killNote: "Kills: status update meetings.",
    defaultSelected: false
  },
  {
    id: "role-permission",
    category: "intelligence",
    categoryLabel: "Intelligence • Core",
    title: "Role & Granular Security",
    desc: "Granular, role-based access control and data governance.",
    killNote: "Kills: unauthorized data leaks.",
    defaultSelected: false
  },
  {
    id: "sales-crm",
    category: "intelligence",
    categoryLabel: "Intelligence • Core",
    title: "Sales & CRM Integration",
    desc: "Leads to invoices in one unified data pipeline.",
    killNote: "Kills: siloed customer data.",
    defaultSelected: true
  }
];

export default function SuiteConfiguratorModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedModuleIds, setSelectedModuleIds] = useState(() => {
    return MODULES_DATA.filter(m => m.defaultSelected).map(m => m.id);
  });
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleModule = (id) => {
    setSelectedModuleIds(prev => 
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  const filteredModules = selectedCategory === "all" 
    ? MODULES_DATA 
    : MODULES_DATA.filter(m => m.category === selectedCategory);

  const selectedModules = MODULES_DATA.filter(m => selectedModuleIds.includes(m.id));
  const totalCount = MODULES_DATA.length;
  const selectedCount = selectedModuleIds.length;
  const remainingCount = totalCount - selectedCount;

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-white border border-slate-200 rounded-3xl shadow-2xl text-slate-900 max-w-6xl w-full relative max-h-[92vh] flex flex-col overflow-hidden my-auto"
        >
          {/* Top Header Bar */}
          <div className="px-6 sm:px-8 py-5 sm:py-6 border-b border-slate-100 bg-white flex items-center justify-between shrink-0">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366f1] text-xs font-bold tracking-wider uppercase font-poppins mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
                <span>SUITE CONFIGURATOR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 tracking-tight">
                Build Your Suite
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5 max-w-xl font-normal">
                Select the modules to construct your bespoke ecosystem. Pay only for what you activate.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-200 cursor-pointer shadow-sm"
              aria-label="Close configuration modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Filter Tabs Bar */}
          <div className="px-6 sm:px-8 py-3.5 bg-[#F8FAFC] border-b border-slate-200/80 flex items-center space-x-2 sm:space-x-3 overflow-x-auto shrink-0 no-scrollbar">
            {[
              { id: "all", label: "All Modules" },
              { id: "nucleus", label: "Core HR (Nucleus)" },
              { id: "erp", label: "Operations (ERP)" },
              { id: "magnetics", label: "Development (Magnetics)" },
              { id: "intelligence", label: "Intelligence & CRM" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? "bg-[#6366f1] text-white shadow-md shadow-indigo-500/25"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-[#6366f1] hover:border-indigo-200 font-semibold"
                }`}
              >
                {tab.label}
              </button>
            ))}

            <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 shrink-0 pl-4 border-l border-slate-200">
              <span className="text-[#6366f1] font-extrabold">{selectedCount}</span> of {totalCount} Active
            </div>
          </div>

          {/* Main Content Area: Grid + Sticky Review Column */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-[#F8FAFC]/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
              
              {/* Left Column: Module Cards Grid */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                
                {showQuoteForm ? (
                  /* Quote Form Step */
                  <div className="bg-white border border-indigo-100 rounded-2xl p-6 sm:p-8 space-y-6 text-left shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 font-poppins">
                          Request Your Configuration Quote
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 font-medium">
                          Selected: <span className="text-[#6366f1] font-bold">{selectedCount} modules</span> on one data core.
                        </p>
                      </div>
                      <button
                        onClick={() => setShowQuoteForm(false)}
                        className="text-xs text-[#6366f1] hover:text-[#4f46e5] font-bold underline cursor-pointer"
                      >
                        ← Modify Modules
                      </button>
                    </div>

                    {isSubmitted ? (
                      <div className="py-8 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-extrabold text-slate-900 font-poppins">Configuration Quote Requested!</h4>
                        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                          We've compiled your customized setup of <span className="text-[#6366f1] font-bold">{selectedCount} modules</span>. Our industry expert and solutions team will reach out to you with your tailored quote at <span className="text-slate-900 font-semibold">{formData.email || "your email"}</span> within 2 hours.
                        </p>
                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setShowQuoteForm(false);
                            onClose();
                          }}
                          className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold px-8 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-indigo-500/25 mt-4"
                        >
                          Done & Close
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmitQuote} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={e => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Doe"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#6366f1] focus:bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Email *</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@company.com"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#6366f1] focus:bg-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Company Name *</label>
                            <input
                              type="text"
                              required
                              value={formData.company}
                              onChange={e => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Acme Corp"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#6366f1] focus:bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={e => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+1 (555) 000-0000"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#6366f1] focus:bg-white"
                            />
                          </div>
                        </div>

                        <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 text-xs text-slate-600 space-y-2">
                          <p className="font-bold text-slate-800">Selected Ecosystem Summary ({selectedCount} Modules):</p>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedModules.map(m => (
                              <span key={m.id} className="bg-white border border-indigo-200 text-[#6366f1] font-semibold px-2 py-0.5 rounded text-[11px]">
                                {m.title}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Configuration Quote</span>
                        </button>
                      </form>
                    )}
                  </div>
                ) : (
                  /* Module Selection Grid */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 text-left">
                    {filteredModules.map((module) => {
                      const isSelected = selectedModuleIds.includes(module.id);
                      return (
                        <div
                          key={module.id}
                          onClick={() => toggleModule(module.id)}
                          className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative flex flex-col justify-between group ${
                            isSelected
                              ? "bg-indigo-50/40 border-[#6366f1] shadow-md shadow-indigo-500/10 ring-1 ring-[#6366f1]/30"
                              : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-sm"
                          }`}
                        >
                          <div>
                            {/* Category Tag & Checkbox */}
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-poppins">
                                {module.categoryLabel}
                              </span>
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                                  isSelected
                                    ? "bg-[#6366f1] text-white font-bold scale-110 shadow-sm"
                                    : "border border-slate-300 bg-slate-50 group-hover:border-indigo-400"
                                }`}
                              >
                                {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                              </div>
                            </div>

                            {/* Title & Description */}
                            <h4 className="text-base font-extrabold text-slate-900 font-poppins mb-1.5 leading-snug group-hover:text-[#6366f1] transition-colors">
                              {module.title}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                              {module.desc}
                            </p>
                          </div>

                          {/* Impact / Kill Note */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-indigo-600">
                              {module.killNote}
                            </span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                              isSelected ? "bg-indigo-100 text-indigo-700 font-bold" : "bg-slate-100 text-slate-500"
                            }`}>
                              {isSelected ? "Included" : "Add Module"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Column: Sticky Configuration Review Panel */}
              <div className="lg:col-span-5 xl:col-span-4 sticky top-0 self-start">
                <div className="bg-[#101328] text-white border border-indigo-950/80 rounded-2xl p-6 shadow-xl text-left space-y-6 relative overflow-hidden">
                  
                  {/* Decorative Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Sidebar Header */}
                  <div>
                    <span className="text-[11px] font-extrabold tracking-wider uppercase text-indigo-400 font-poppins block mb-1">
                      YOUR CONFIGURATION
                    </span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-poppins">
                        {selectedCount}
                      </span>
                      <span className="text-xs text-slate-300 font-medium leading-tight max-w-[140px]">
                        modules on one data core
                      </span>
                    </div>
                  </div>

                  {/* Selected Module Pills Cloud */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Active Modules ({selectedCount}):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedModules.map(m => (
                        <span
                          key={m.id}
                          onClick={() => toggleModule(m.id)}
                          className="bg-indigo-950/80 hover:bg-rose-950/80 border border-indigo-800/80 hover:border-rose-700/80 text-indigo-200 hover:text-rose-200 text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer group"
                          title="Click to remove module"
                        >
                          <span>{m.title}</span>
                          <X className="w-3 h-3 text-indigo-400 group-hover:text-rose-300" />
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Calculation Summary Note */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed font-normal">
                    You're choosing <span className="text-white font-bold">{selectedCount}</span> of <span className="text-white font-bold">{totalCount}</span> modules — and paying for <span className="text-indigo-400 font-bold">exactly that many</span>. The other <span className="text-indigo-400 font-bold">{remainingCount}</span>? Switch them on whenever your business asks for them. Same core, same data, no re-implementation.
                  </div>

                  {/* CTA Button */}
                  {!showQuoteForm && (
                    <button
                      onClick={() => setShowQuoteForm(true)}
                      className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                    >
                      <span>Get my configuration quote</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Bottom Sticky Bar */}
          <div className="lg:hidden shrink-0 bg-[#101328] border-t border-indigo-900/40 p-4 flex items-center justify-between z-50 text-white">
            <div>
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">YOUR CONFIGURATION</span>
              <span className="text-sm font-extrabold text-white">{selectedCount} Modules Selected</span>
            </div>
            {!showQuoteForm && (
              <button
                onClick={() => setShowQuoteForm(true)}
                className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md flex items-center gap-1.5"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
