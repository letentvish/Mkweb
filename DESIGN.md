# MultipliersKraft & PALBON Enterprise Design System

> **Official UI Specification & Style Guide**  
> Built for scalable enterprise application development, brand consistency, and Stitch MCP design imports.

---

## 1. Brand Identity & Design Philosophy
MultipliersKraft is an enterprise capability, advisory, and technology ecosystem powered by the PALBON Operating System. The design system balances **executive corporate authority** with **modern AI-native technological precision**.

- **Core Aesthetic**: Rich enterprise aesthetic, deep navy slate contrasts, sky blue accents, glassmorphic telemetry, and smooth micro-interactions.
- **Card Geometry**: Standardized 24px border radius (`rounded-3xl`) across all content cards, feature modules, and diagnostic panels.
- **Button System**: 100% fully rounded pill geometry (`rounded-full`) with vibrant `#0284c7` primary sky blue accents.

---

## 2. Color Palette Tokens

| Token Name | HEX Code | Class Name | Intended Usage |
| :--- | :--- | :--- | :--- |
| **Primary Navy** | `#01182F` | `bg-[#01182F]` | Main dark headers, hero backgrounds, primary text, executive cards |
| **Sky Blue Primary** | `#0284c7` | `bg-[#0284c7]` | Primary CTAs, active indicators, status badges, links, primary focus |
| **Sky Blue Hover** | `#0369a1` | `bg-[#0369a1]` | Hover states for primary buttons and interactive links |
| **Indigo Accent** | `#6366f1` | `bg-[#6366f1]` | Secondary accent, telemetry highlights, gradient clips |
| **Light Page Surface** | `#F8FAFC` | `bg-[#F8FAFC]` | Standard clean background for light content sections |
| **Dark Telemetry** | `#101328` | `bg-[#101328]` | Dark background for metrics, technical telemetry, and code blocks |
| **White Card Surface** | `#FFFFFF` | `bg-white` | Clean white surface for enterprise cards (`border border-sky-200/80`) |

---

## 3. Typography System

### Font Families
- **Headlines & Badges**: `Poppins`, sans-serif (`font-poppins font-extrabold`)
- **Body & Paragraphs**: `Inter` / System Sans, sans-serif (`font-sans font-normal`)
- **Numbers & Readouts**: `JetBrains Mono` / Monospace (`font-mono font-bold`)

### Typography Scales
- **H1 (Hero Headline)**: `text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.12]`
- **H2 (Section Heading)**: `text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.15]`
- **H3 (Card Title)**: `text-xl sm:text-2xl font-poppins font-extrabold text-[#01182F] tracking-tight`
- **Gradient Text Accent**: `bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent`
- **Lead Paragraph**: `text-slate-600 text-base sm:text-lg font-normal leading-relaxed`
- **Micro-copy & Captions**: `text-slate-500 text-xs sm:text-sm font-normal`

---

## 4. Component Specifications

### A. Section Status Badges
Every content section begins with a standardized status pill badge featuring a live pulse dot indicator:

```jsx
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
  <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
  <span>SECTION BADGE TITLE</span>
</div>
```

---

### B. Buttons & Call to Actions (CTAs)

#### 1. Primary Sky Blue Pill Button
```jsx
<button className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm">
  <span>Explore Framework</span>
</button>
```

#### 2. Secondary White Pill Button
```jsx
<button className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm">
  <span>Talk to an Expert</span>
</button>
```

#### 3. Arrow Link CTA
```jsx
<button className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer group">
  <span>Diagnose</span>
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>
```

---

### C. Enterprise Cards & Containers

#### 1. Standard Enterprise Card
- **Border Radius**: `rounded-3xl` (24px)
- **Border**: `border border-sky-200/80`
- **Shadow**: `shadow-lg shadow-sky-100/50 hover:shadow-xl hover:border-sky-300`
- **Background**: `#FFFFFF` clean surface with soft blue icon container (`w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100`).

#### 2. Ambient CTA Banner Container
```jsx
<div className="bg-gradient-to-b from-sky-50/80 via-white to-sky-50/40 border border-sky-200/80 rounded-3xl p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-lg shadow-sky-100/50">
  {/* Banner Content */}
</div>
```

#### 3. Dark Telemetry Card
```jsx
<div className="bg-[#01182F] border border-indigo-900/80 rounded-3xl p-8 shadow-2xl text-left">
  {/* Telemetry Readouts & Charts */}
</div>
```

---

## 5. Spacing, Layout & Animation Tokens

- **Max Container Width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (1280px).
- **Section Spacing**: `py-20 lg:py-28` for consistent vertical rhythm.
- **Button Micro-Interactions**: `transition-all duration-200 hover:scale-105 active:scale-95`.
- **Card Hover Elevation**: `transition-all duration-300 hover:shadow-xl hover:border-sky-300`.
- **Marquee Speed**: Smooth linear speed `50` with `pauseOnHover={true}`.
