import "./Component4.css";

const HowCaRVEWorks = () => {
  const steps = [
    {
      num: 1,
      title: "Take the Assessment",
      desc: "Participants complete a short, research-based questionnaire designed to reveal behavioural tendencies.",
    },
    {
      num: 2,
      title: "Behaviour Analysis",
      desc: "Responses are analysed using CaRVE's psychometric scoring model.",
    },
    {
      num: 3,
      title: "CaRVE Profile Generated",
      desc: "Each participant receives a clear behavioural profile with visual insights.",
    },
    {
      num: 4,
      title: "Apply the Insights",
      desc: "Use results for learning, coaching, team alignment, or hiring decisions.",
    },
  ];

  return (
    <div className="carve-how-works-section">
      {/* How CaRVE Works Section */}
      <h2 className="carve-how-works-title">
        How the CaRVE Assessment Works?
      </h2>
      <p className="carve-how-works-desc">
        Simple, science-backed, and ready to use in minutes.
      </p>

      {/* Desktop timeline */}
      <div className="carve-timeline-desktop">
        <div className="carve-timeline-container">
          <div className="carve-connector-line" />
          {steps.map((step, i) => (
            <div key={i} className="carve-timeline-step">
              <div className="carve-step-bubble">
                {step.num}
              </div>
              <h3 className="carve-step-title">
                {step.title}
              </h3>
              <p className="carve-step-desc">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="carve-timeline-mobile">
        <div className="carve-timeline-mobile-container">
          <div className="carve-vertical-line" />
          {steps.map((step, i) => (
            <div key={i} className="carve-mobile-step">
              <div className="carve-mobile-bubble">
                {step.num}
              </div>
              <div>
                <h3 className="carve-mobile-step-title">
                  {step.title}
                </h3>
                <p className="carve-mobile-step-desc">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default HowCaRVEWorks;
