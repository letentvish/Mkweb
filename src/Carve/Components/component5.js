import "./Component4.css";

const EnergyCard = ({ item, isReverse }) => {
  if (isReverse) {
    // Reverse card: Title → Description → Dotted area
    return (
      <div className="energy-card reverse">
        <div className="energy-card-title-section">
          <h3 className="energy-card-title">
            {item.title}
          </h3>
        </div>
        <div className="energy-card-desc-section">
          <p className="energy-card-desc">
            {item.desc}
          </p>
        </div>
        <div className="energy-card-header">
          <div className="energy-card-icon">
            {item.icon}
          </div>
        </div>
      </div>
    );
  }

  // Normal card: Dotted area → Title → Description
  return (
    <div className="energy-card">
      <div className="energy-card-header">
        <div className="energy-card-icon">
          {item.icon}
        </div>
      </div>
      <div className="energy-card-title-section">
        <h3 className="energy-card-title">
          {item.title}
        </h3>
      </div>
      <div className="energy-card-desc-section">
        <p className="energy-card-desc">
          {item.desc}
        </p>
      </div>
    </div>
  );
};


const EnergyStatesSection = () => {
    const states = [
        {
        icon: (
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>

        ),
        title: "Mobile",
        desc: "Dynamic, action-oriented, and driven by a sense of purpose and urgency",
        },
        {
        icon: (
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>

        ),
        title: "Stable",
        desc: "Reliability, persistence, and determination through steady progress",
        },
        {
        icon: (
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>

        ),
        title: "Dual",
        desc: "Adaptable, flexible, and versatile across different situations",
        },
    ];    
// Normal card: Dotted area → Title → Description
    return (
        /* Energy States Section */
        <div>
            <h2 className="carve-energy-title">
            Energy States
        </h2>
        <p className="carve-energy-desc">
            Understanding the three fundamental energy states that drive behavior and performance
        </p>

        <div className="energy-grid">
            {states.map((s, i) => (
            <EnergyCard key={i} item={s} isReverse={i === 1} />
            ))}
        </div>
        </div>
        );
    };

export default EnergyStatesSection;