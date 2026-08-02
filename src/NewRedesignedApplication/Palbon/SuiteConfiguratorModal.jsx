import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  Send,
  Search,
  SlidersHorizontal,
  Layers,
  Sparkles
} from "lucide-react";

// ============================================================================
// OFFICIAL PALBON MODULAR SUITE CATALOGUE (40 CONNECTED MODULES)
// Two Capability Lines: ERP (20 Modules) & HRMS Nucleus (20 Modules)
// ============================================================================
const MODULES_DATA = [
  // ==========================================
  // ERP — RUN THE BUSINESS END TO END (20 Modules)
  // ==========================================
  
  // 1. FINANCE & CONTROL
  {
    id: "financial-accounting-gl",
    category: "erp",
    subCategory: "Finance & Control",
    categoryLabel: "ERP • Finance & Control",
    title: "Financial Accounting & General Ledger",
    desc: "Your single, real-time book of record. Multi-entity, multi-currency accounting that closes faster and always ties out.",
    killNote: "Kills: month-end closing chaos.",
    defaultSelected: true
  },
  {
    id: "accounts-payable",
    category: "erp",
    subCategory: "Finance & Control",
    categoryLabel: "ERP • Finance & Control",
    title: "Accounts Payable",
    desc: "Turn invoices into on-time, controlled payments. Approvals, three-way matching and vendor ageing without the chase.",
    killNote: "Kills: manual invoice chasing.",
    defaultSelected: true
  },
  {
    id: "accounts-receivable",
    category: "erp",
    subCategory: "Finance & Control",
    categoryLabel: "ERP • Finance & Control",
    title: "Accounts Receivable",
    desc: "Get paid sooner. Automated invoicing, collections and ageing so cash stops sitting in your customers' accounts.",
    killNote: "Kills: delayed collections.",
    defaultSelected: true
  },
  {
    id: "cash-bank-treasury",
    category: "erp",
    subCategory: "Finance & Control",
    categoryLabel: "ERP • Finance & Control",
    title: "Cash, Bank & Treasury",
    desc: "See every rupee across every account in one view, with bank reconciliation and cash-position visibility on demand.",
    killNote: "Kills: bank statement blindspots.",
    defaultSelected: false
  },
  {
    id: "fixed-asset-management",
    category: "erp",
    subCategory: "Finance & Control",
    categoryLabel: "ERP • Finance & Control",
    title: "Fixed Asset Management",
    desc: "Track, depreciate and dispose of every asset with a full audit trail — no more spreadsheet registers.",
    killNote: "Kills: spreadsheet asset registers.",
    defaultSelected: false
  },
  {
    id: "budgeting-financial-planning",
    category: "erp",
    subCategory: "Finance & Control",
    categoryLabel: "ERP • Finance & Control",
    title: "Budgeting & Financial Planning",
    desc: "Plan, allocate and monitor budgets against actuals, with variance alerts before overspend becomes a surprise.",
    killNote: "Kills: budget variance surprises.",
    defaultSelected: false
  },
  {
    id: "tax-gst-einvoicing",
    category: "erp",
    subCategory: "Finance & Control",
    categoryLabel: "ERP • Finance & Control",
    title: "Tax, GST & e-Invoicing",
    desc: "Stay compliant by design. GST-ready invoicing, e-invoice and e-way bill generation, and clean filings.",
    killNote: "Kills: GST compliance stress.",
    defaultSelected: true
  },

  // 2. PROCURE TO PAY & INVENTORY
  {
    id: "procurement-purchasing",
    category: "erp",
    subCategory: "Procure & Inventory",
    categoryLabel: "ERP • Procure to Pay",
    title: "Procurement & Purchasing",
    desc: "Requisition to purchase order to receipt, with approval workflows that control spend without slowing it down.",
    killNote: "Kills: rogue purchase spending.",
    defaultSelected: true
  },
  {
    id: "inventory-management",
    category: "erp",
    subCategory: "Procure & Inventory",
    categoryLabel: "ERP • Inventory Engine",
    title: "Inventory Management",
    desc: "Know exactly what you hold, where, and what it's worth — across locations, in real time, with reorder automation.",
    killNote: "Kills: stockout & deadstock surprises.",
    defaultSelected: true
  },
  {
    id: "warehouse-management",
    category: "erp",
    subCategory: "Procure & Inventory",
    categoryLabel: "ERP • Warehouse Mesh",
    title: "Warehouse Management",
    desc: "Optimise put-away, picking and dispatch so goods move faster and stock counts stay accurate.",
    killNote: "Kills: mispicked orders.",
    defaultSelected: false
  },
  {
    id: "vendor-supplier-management",
    category: "erp",
    subCategory: "Procure & Inventory",
    categoryLabel: "ERP • Vendor Portal",
    title: "Vendor & Supplier Management",
    desc: "One place for supplier records, performance and pricing, with a self-service portal that cuts back-and-forth.",
    killNote: "Kills: email vendor back-and-forth.",
    defaultSelected: false
  },

  // 3. ORDER TO CASH & SALES
  {
    id: "sales-order-management",
    category: "erp",
    subCategory: "Order & Sales",
    categoryLabel: "ERP • Sales & Fulfillment",
    title: "Sales & Order Management",
    desc: "Capture, price and fulfil orders in one flow, with live visibility from quote to delivery.",
    killNote: "Kills: order fulfillment delays.",
    defaultSelected: true
  },
  {
    id: "billing-invoicing",
    category: "erp",
    subCategory: "Order & Sales",
    categoryLabel: "ERP • Billing Engine",
    title: "Billing & Invoicing",
    desc: "Accurate, automated billing for one-off, recurring or usage-based models — no manual reconciliation.",
    killNote: "Kills: manual billing errors.",
    defaultSelected: true
  },
  {
    id: "crm-pipeline",
    category: "erp",
    subCategory: "Order & Sales",
    categoryLabel: "ERP • CRM & Sales",
    title: "CRM & Pipeline",
    desc: "Manage leads, opportunities and accounts alongside operational data, so sales and delivery share one view.",
    killNote: "Kills: sales & operations disconnect.",
    defaultSelected: true
  },

  // 4. OPERATIONS & DELIVERY
  {
    id: "manufacturing-production-planning",
    category: "erp",
    subCategory: "Operations & Delivery",
    categoryLabel: "ERP • Manufacturing",
    title: "Manufacturing & Production Planning",
    desc: "Plan capacity, material and schedules with MRP that keeps production and demand in step.",
    killNote: "Kills: shop floor bottlenecks.",
    defaultSelected: false
  },
  {
    id: "quality-management",
    category: "erp",
    subCategory: "Operations & Delivery",
    categoryLabel: "ERP • Quality Control",
    title: "Quality Management",
    desc: "Build quality checks into every stage, with inspections, non-conformance tracking and traceability.",
    killNote: "Kills: product defect rejections.",
    defaultSelected: false
  },
  {
    id: "project-management-costing",
    category: "erp",
    subCategory: "Operations & Delivery",
    categoryLabel: "ERP • Projects & Costing",
    title: "Project Management & Costing",
    desc: "Run projects to plan and to margin, with time, cost and resource tracking against every deliverable.",
    killNote: "Kills: project cost overruns.",
    defaultSelected: false
  },
  {
    id: "asset-maintenance-eam",
    category: "erp",
    subCategory: "Operations & Delivery",
    categoryLabel: "ERP • Asset Maintenance",
    title: "Asset Maintenance (EAM)",
    desc: "Keep equipment running with preventive and breakdown maintenance scheduling that reduces costly downtime.",
    killNote: "Kills: unplanned machine downtime.",
    defaultSelected: false
  },
  {
    id: "supply-chain-demand-planning",
    category: "erp",
    subCategory: "Operations & Delivery",
    categoryLabel: "ERP • Supply Chain",
    title: "Supply Chain & Demand Planning",
    desc: "Forecast demand and orchestrate supply so you hold less stock and miss fewer orders.",
    killNote: "Kills: inaccurate demand forecasts.",
    defaultSelected: false
  },
  {
    id: "reporting-dashboards-bi",
    category: "erp",
    subCategory: "Operations & Delivery",
    categoryLabel: "ERP • Intelligence BI",
    title: "Reporting, Dashboards & BI",
    desc: "Turn operational data into decisions with role-based dashboards, drill-downs and self-serve analytics.",
    killNote: "Kills: stale Excel reports.",
    defaultSelected: true
  },

  // ==========================================
  // HRMS — RUN THE WORKFORCE END TO END (NUCLEUS - 20 Modules)
  // ==========================================

  // 1. HR FOUNDATION
  {
    id: "core-hr-employee-records",
    category: "hrms",
    subCategory: "HR Foundation",
    categoryLabel: "HRMS • Nucleus Foundation",
    title: "Core HR & Employee Records",
    desc: "One trusted source for every employee's data, documents and history — accessible, secure and always current.",
    killNote: "Kills: scattered employee files.",
    defaultSelected: true
  },
  {
    id: "org-position-management",
    category: "hrms",
    subCategory: "HR Foundation",
    categoryLabel: "HRMS • Nucleus Foundation",
    title: "Organisation & Position Management",
    desc: "Model your structure, roles and reporting lines, and see the org come to life as it changes.",
    killNote: "Kills: outdated org charts.",
    defaultSelected: true
  },

  // 2. HIRE TO ONBOARD
  {
    id: "recruitment-applicant-tracking",
    category: "hrms",
    subCategory: "Hire to Onboard",
    categoryLabel: "HRMS • Talent Acquisition",
    title: "Recruitment & Applicant Tracking",
    desc: "Run the whole hiring funnel — requisition to offer — with pipelines, scorecards and collaborative shortlisting.",
    killNote: "Kills: lost candidate emails.",
    defaultSelected: true
  },
  {
    id: "onboarding-preboarding",
    category: "hrms",
    subCategory: "Hire to Onboard",
    categoryLabel: "HRMS • Talent Acquisition",
    title: "Onboarding & Pre-boarding",
    desc: "Turn a new hire into a productive one from day zero, with digital joining, document collection and checklists.",
    killNote: "Kills: Day 1 joining friction.",
    defaultSelected: true
  },

  // 3. PAY & COMPLIANCE
  {
    id: "payroll-management",
    category: "hrms",
    subCategory: "Pay & Compliance",
    categoryLabel: "HRMS • Payroll Engine",
    title: "Payroll Management",
    desc: "Accurate, on-time payroll every cycle, with automated calculations, payslips and direct disbursement.",
    killNote: "Kills: payroll processing crunch.",
    defaultSelected: true
  },
  {
    id: "statutory-compliance",
    category: "hrms",
    subCategory: "Pay & Compliance",
    categoryLabel: "HRMS • Compliance",
    title: "Statutory Compliance",
    desc: "Stay effortlessly compliant with PF, ESI, PT, TDS and gratuity handled and filed as part of the run.",
    killNote: "Kills: compliance penalty risks.",
    defaultSelected: true
  },
  {
    id: "compensation-management",
    category: "hrms",
    subCategory: "Pay & Compliance",
    categoryLabel: "HRMS • Compensation",
    title: "Compensation Management",
    desc: "Design and administer pay structures, revisions and increment cycles with fairness and full visibility.",
    killNote: "Kills: pay revision confusion.",
    defaultSelected: false
  },
  {
    id: "benefits-administration",
    category: "hrms",
    subCategory: "Pay & Compliance",
    categoryLabel: "HRMS • Benefits",
    title: "Benefits Administration",
    desc: "Manage insurance, perks and flexible benefits, with employee enrolment and clear cost tracking.",
    killNote: "Kills: benefit claim paperwork.",
    defaultSelected: false
  },

  // 4. TIME & SCHEDULING
  {
    id: "time-attendance",
    category: "hrms",
    subCategory: "Time & Scheduling",
    categoryLabel: "HRMS • Attendance",
    title: "Time & Attendance",
    desc: "Capture attendance from any source — biometric, mobile or web — and feed it straight into payroll.",
    killNote: "Kills: manual attendance tracking.",
    defaultSelected: true
  },
  {
    id: "leave-management",
    category: "hrms",
    subCategory: "Time & Scheduling",
    categoryLabel: "HRMS • Leave Engine",
    title: "Leave Management",
    desc: "Configurable leave policies, balances and approvals that employees and managers can self-serve in seconds.",
    killNote: "Kills: leave balance disputes.",
    defaultSelected: true
  },
  {
    id: "shift-roster-scheduling",
    category: "hrms",
    subCategory: "Time & Scheduling",
    categoryLabel: "HRMS • Rostering",
    title: "Shift & Roster Scheduling",
    desc: "Plan shifts and rosters that match demand, with coverage visibility and clash-free scheduling.",
    killNote: "Kills: shift overlap conflicts.",
    defaultSelected: false
  },

  // 5. PERFORM & GROW
  {
    id: "performance-management",
    category: "hrms",
    subCategory: "Perform & Grow",
    categoryLabel: "HRMS • Performance",
    title: "Performance Management",
    desc: "Set goals, run reviews and OKRs, and give continuous feedback that connects effort to outcomes.",
    killNote: "Kills: annual review bias.",
    defaultSelected: true
  },
  {
    id: "learning-development",
    category: "hrms",
    subCategory: "Perform & Grow",
    categoryLabel: "HRMS • L&D Engine",
    title: "Learning & Development",
    desc: "Deliver, track and certify learning in one place, closing skill gaps and building bench strength.",
    killNote: "Kills: unmonitored skill gaps.",
    defaultSelected: false
  },
  {
    id: "succession-talent-management",
    category: "hrms",
    subCategory: "Perform & Grow",
    categoryLabel: "HRMS • Succession",
    title: "Succession & Talent Management",
    desc: "Identify high-potential talent and plan successors so critical roles are never left exposed.",
    killNote: "Kills: leadership vacancy gaps.",
    defaultSelected: false
  },

  // 6. EXPERIENCE & SERVICE
  {
    id: "employee-manager-self-service",
    category: "hrms",
    subCategory: "Experience & Service",
    categoryLabel: "HRMS • Self-Service Portal",
    title: "Employee & Manager Self-Service",
    desc: "Put HR in every employee's hands — requests, approvals and information without a single email.",
    killNote: "Kills: routine HR ticket overhead.",
    defaultSelected: true
  },
  {
    id: "expense-travel-reimbursement",
    category: "hrms",
    subCategory: "Experience & Service",
    categoryLabel: "HRMS • Expenses",
    title: "Expense, Travel & Reimbursement",
    desc: "Submit, approve and settle expenses and travel on mobile, with policy checks built in.",
    killNote: "Kills: lost travel receipts.",
    defaultSelected: false
  },
  {
    id: "hr-helpdesk-case-management",
    category: "hrms",
    subCategory: "Experience & Service",
    categoryLabel: "HRMS • Helpdesk",
    title: "HR Helpdesk & Case Management",
    desc: "Route, track and resolve people queries with SLAs, so nothing falls through the cracks.",
    killNote: "Kills: forgotten employee requests.",
    defaultSelected: false
  },
  {
    id: "engagement-pulse-surveys",
    category: "hrms",
    subCategory: "Experience & Service",
    categoryLabel: "HRMS • Engagement",
    title: "Engagement & Pulse Surveys",
    desc: "Listen continuously with pulse surveys and sentiment insights that turn feedback into action.",
    killNote: "Kills: silent employee attrition.",
    defaultSelected: false
  },

  // 7. OFFBOARD & ANALYSE
  {
    id: "offboarding-ff-settlement",
    category: "hrms",
    subCategory: "Offboard & Analyse",
    categoryLabel: "HRMS • Offboarding",
    title: "Offboarding & Full-and-Final Settlement",
    desc: "Exit employees cleanly with clearances, knowledge transfer and accurate F&F settlement.",
    killNote: "Kills: delayed exit clearance.",
    defaultSelected: false
  },
  {
    id: "workforce-analytics-dashboards",
    category: "hrms",
    subCategory: "Offboard & Analyse",
    categoryLabel: "HRMS • Workforce Analytics",
    title: "Workforce Analytics & Dashboards",
    desc: "See attrition, cost, headcount and productivity at a glance, with insights leaders can act on.",
    killNote: "Kills: gut-feel HR decisions.",
    defaultSelected: true
  }
];

export default function SuiteConfiguratorModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
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

  const selectAllCategory = (cat) => {
    const catModuleIds = MODULES_DATA
      .filter(m => cat === "all" || m.category === cat || m.subCategory.toLowerCase().includes(cat.toLowerCase()))
      .map(m => m.id);
    setSelectedModuleIds(prev => Array.from(new Set([...prev, ...catModuleIds])));
  };

  const clearCategorySelection = (cat) => {
    const catModuleIds = MODULES_DATA
      .filter(m => cat === "all" || m.category === cat || m.subCategory.toLowerCase().includes(cat.toLowerCase()))
      .map(m => m.id);
    setSelectedModuleIds(prev => prev.filter(id => !catModuleIds.includes(id)));
  };

  // Filter modules based on category tab & search query
  const filteredModules = MODULES_DATA.filter(m => {
    const matchesCategory = 
      selectedCategory === "all" ? true :
      selectedCategory === "erp" ? m.category === "erp" :
      selectedCategory === "hrms" ? m.category === "hrms" :
      m.subCategory.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch = searchQuery.trim() === "" ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.killNote.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const selectedModules = MODULES_DATA.filter(m => selectedModuleIds.includes(m.id));
  const erpSelectedCount = selectedModules.filter(m => m.category === "erp").length;
  const hrmsSelectedCount = selectedModules.filter(m => m.category === "hrms").length;

  const totalCount = MODULES_DATA.length;
  const selectedCount = selectedModuleIds.length;
  const remainingCount = totalCount - selectedCount;

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const categoryTabs = [
    { id: "all", label: "All 40 Modules", count: 40 },
    { id: "erp", label: "ERP Line (20)", count: 20 },
    { id: "hrms", label: "HRMS Nucleus (20)", count: 20 },
    { id: "finance", label: "Finance & Control", count: 7 },
    { id: "procure", label: "Procure & Stock", count: 4 },
    { id: "order", label: "Order & Sales", count: 3 },
    { id: "operations", label: "Operations & Delivery", count: 6 },
    { id: "pay", label: "Pay & Compliance", count: 4 },
    { id: "time", label: "Time & Scheduling", count: 3 },
    { id: "perform", label: "Perform & Grow", count: 3 },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-md overflow-y-auto font-sans select-none">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-bold tracking-wider uppercase font-poppins mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
                <span>PALBON SUITE CONFIGURATOR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#01182F] tracking-tight">
                Build Your Modular Enterprise
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5 max-w-2xl font-normal">
                Assemble your bespoke software stack from <span className="font-bold text-[#01182F]">40 specialized modules</span> across ERP and HRMS. All modules share one data core, one login, and one source of truth.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-200 cursor-pointer shadow-sm ml-4"
              aria-label="Close configuration modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="px-6 sm:px-8 py-3 bg-[#F8FAFC] border-b border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
              {categoryTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === tab.id
                      ? "bg-[#01182F] text-white shadow-md shadow-sky-950/20"
                      : "bg-white border border-slate-200 text-slate-600 hover:text-[#0284c7] hover:border-sky-200 font-semibold"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Instant Search Bar */}
            <div className="relative shrink-0 min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search 40 modules..."
                className="w-full bg-white border border-slate-200 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Main Content Area: Grid + Sticky Review Column */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-[#F8FAFC]/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
              
              {/* Left Column: Module Cards Grid */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-5">
                
                {/* Header Action Row */}
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Showing <span className="text-[#01182F] font-extrabold">{filteredModules.length}</span> of {totalCount} Modules
                  </span>
                  <div className="flex items-center gap-3 text-xs">
                    <button
                      onClick={() => selectAllCategory(selectedCategory)}
                      className="text-[#0284c7] hover:underline font-bold cursor-pointer"
                    >
                      Select All {selectedCategory !== "all" ? categoryTabs.find(t=>t.id===selectedCategory)?.label : ""}
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      onClick={() => clearCategorySelection(selectedCategory)}
                      className="text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
                    >
                      Deselect
                    </button>
                  </div>
                </div>

                {showQuoteForm ? (
                  /* Quote Form Step */
                  <div className="bg-white border border-sky-100 rounded-2xl p-6 sm:p-8 space-y-6 text-left shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <h3 className="text-xl font-extrabold text-[#01182F] font-poppins">
                          Request Your Modular Suite Quote
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 font-medium">
                          Selected: <span className="text-[#0284c7] font-bold">{selectedCount} modules</span> ({erpSelectedCount} ERP + {hrmsSelectedCount} HRMS Nucleus).
                        </p>
                      </div>
                      <button
                        onClick={() => setShowQuoteForm(false)}
                        className="text-xs text-[#0284c7] hover:text-[#0369a1] font-bold underline cursor-pointer"
                      >
                        ← Modify Modules
                      </button>
                    </div>

                    {isSubmitted ? (
                      <div className="py-8 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-extrabold text-[#01182F] font-poppins">Configuration Proposal Sent!</h4>
                        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                          We've compiled your customized setup of <span className="text-[#0284c7] font-bold">{selectedCount} modules</span>. Our enterprise solution architects will send your tailored proposal to <span className="text-slate-900 font-semibold">{formData.email || "your email"}</span> within 2 hours.
                        </p>
                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setShowQuoteForm(false);
                            onClose();
                          }}
                          className="bg-[#01182F] hover:bg-[#0284c7] text-white font-bold px-8 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-sky-950/20 mt-4"
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
                              placeholder="Sarah Jenkins"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0284c7] focus:bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Email *</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                              placeholder="sarah@company.com"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0284c7] focus:bg-white"
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
                              placeholder="Acme Global Inc."
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0284c7] focus:bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={e => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+1 (555) 019-2834"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0284c7] focus:bg-white"
                            />
                          </div>
                        </div>

                        <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-100 text-xs text-slate-600 space-y-2">
                          <p className="font-bold text-[#01182F]">Selected Modules Summary ({selectedCount} Total):</p>
                          <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                            {selectedModules.map(m => (
                              <span key={m.id} className="bg-white border border-sky-200 text-[#0284c7] font-semibold px-2 py-0.5 rounded text-[11px]">
                                {m.title}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#01182F] hover:bg-[#0284c7] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-sky-950/20 flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Configuration Quote</span>
                        </button>
                      </form>
                    )}
                  </div>
                ) : (
                  /* 40 Module Selection Grid */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 text-left">
                    {filteredModules.map((module) => {
                      const isSelected = selectedModuleIds.includes(module.id);
                      return (
                        <div
                          key={module.id}
                          onClick={() => toggleModule(module.id)}
                          className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative flex flex-col justify-between group ${
                            isSelected
                              ? "bg-sky-50/50 border-[#0284c7] shadow-md shadow-sky-500/10 ring-1 ring-[#0284c7]/30"
                              : "bg-white border-slate-200 hover:border-sky-300 hover:shadow-sm"
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
                                    ? "bg-[#0284c7] text-white font-bold scale-110 shadow-sm"
                                    : "border border-slate-300 bg-slate-50 group-hover:border-sky-400"
                                }`}
                              >
                                {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                              </div>
                            </div>

                            {/* Title & Description */}
                            <h4 className="text-base font-extrabold text-[#01182F] font-poppins mb-1.5 leading-snug group-hover:text-[#0284c7] transition-colors">
                              {module.title}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                              {module.desc}
                            </p>
                          </div>

                          {/* Impact / Kill Note */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-[#0284c7]">
                              {module.killNote}
                            </span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                              isSelected ? "bg-sky-100 text-[#0284c7] font-bold" : "bg-slate-100 text-slate-500"
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
                <div className="bg-[#01182F] text-white border border-slate-800 rounded-2xl p-6 shadow-xl text-left space-y-6 relative overflow-hidden">
                  
                  {/* Decorative Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284c7]/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Sidebar Header */}
                  <div>
                    <span className="text-[11px] font-extrabold tracking-wider uppercase text-sky-400 font-poppins block mb-1">
                      YOUR BESPOKE SUITE
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

                  {/* Capability Line Breakdown */}
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">ERP Modules</span>
                      <span className="text-base font-extrabold text-sky-300">{erpSelectedCount} / 20</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">HRMS Nucleus</span>
                      <span className="text-base font-extrabold text-sky-300">{hrmsSelectedCount} / 20</span>
                    </div>
                  </div>

                  {/* Selected Module Pills Cloud */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Active Modules ({selectedCount}):
                    </span>
                    <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1 no-scrollbar">
                      {selectedModules.map(m => (
                        <span
                          key={m.id}
                          onClick={() => toggleModule(m.id)}
                          className="bg-slate-800/80 hover:bg-rose-950/80 border border-slate-700/80 hover:border-rose-700/80 text-sky-200 hover:text-rose-200 text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer group"
                          title="Click to remove module"
                        >
                          <span>{m.title}</span>
                          <X className="w-3 h-3 text-sky-400 group-hover:text-rose-300" />
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Calculation Summary Note */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed font-normal">
                    You're choosing <span className="text-white font-bold">{selectedCount}</span> of <span className="text-white font-bold">{totalCount}</span> modules — and paying for <span className="text-sky-300 font-bold">exactly that many</span>. The other <span className="text-sky-300 font-bold">{remainingCount}</span>? Switch them on whenever your business asks for them. Same core, same data, no re-integration.
                  </div>

                  {/* CTA Button */}
                  {!showQuoteForm && (
                    <button
                      onClick={() => setShowQuoteForm(true)}
                      className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-sky-500/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
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
          <div className="lg:hidden shrink-0 bg-[#01182F] border-t border-slate-800 p-4 flex items-center justify-between z-50 text-white">
            <div>
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">YOUR CONFIGURATION</span>
              <span className="text-sm font-extrabold text-white">{selectedCount} Modules Selected</span>
            </div>
            {!showQuoteForm && (
              <button
                onClick={() => setShowQuoteForm(true)}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md flex items-center gap-1.5"
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
