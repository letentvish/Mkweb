import { useState } from "react";
import "./Component3.css";
import communicationIcon from "../../Assets/Carve/Framework/Communication.svg";
import adaptabilityIcon from "../../Assets/Carve/Framework/adaptability.svg";
import responsivenessIcon from "../../Assets/Carve/Framework/responsiveness.svg";
import versatilityIcon from "../../Assets/Carve/Framework/Versatility.svg";
import executionIcon from "../../Assets/Carve/Framework/execution.svg";

const DimensionCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`dimension-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="dimension-card-icon">
        {item.icon}
      </div>
      <h3 className="dimension-card-title">
        {item.title}
      </h3>
      <p className="dimension-card-desc">
        {item.desc}
      </p>
    </div>
  );
};

const CaRVEBehaviourFramework = () => {
  const dimensions = [
    {
      icon: <img src={communicationIcon} alt="Communication" style={{ width: "24px", height: "24px" }} />,
      title: "Communication",
      desc: "How clearly and confidently an individual expresses ideas and engages with others.",
    },
    {
      icon: <img src={adaptabilityIcon} alt="Adaptability" style={{ width: "24px", height: "24px" }} />,
      title: "Adaptability",
      desc: "How a person responds to change, uncertainty, and evolving work environments.",
    },
    {
      icon: <img src={responsivenessIcon} alt="Responsiveness" style={{ width: "24px", height: "24px" }} />,
      title: "Responsiveness",
      desc: "Speed and style of decision-making and reaction to tasks and people.",
    },
    {
      icon: <img src={versatilityIcon} alt="Versatility" style={{ width: "24px", height: "24px" }} />,
      title: "Versatility",
      desc: "Ability to juggle multiple roles, priorities, and working styles.",
    },
    {
      icon: <img src={executionIcon} alt="Execution" style={{ width: "24px", height: "24px" }} />,
      title: "Execution",
      desc: "How someone approaches tasks, follows through on commitments, and delivers results.",
    },
  ];

  return (
    <div className="carve-framework-section">
      <h2 className="carve-framework-title">
        The CaRVE Behaviour Framework
      </h2>
      <p className="carve-framework-desc">
        CaRVE measures five core behavioural dimensions that influence everyday work performance.
      </p>

      <div className="carve-grid-top">
        {dimensions.slice(0, 3).map((d, i) => (
          <DimensionCard key={i} item={d} />
        ))}
      </div>

      <div className="carve-grid-bottom">
        {dimensions.slice(3).map((d, i) => (
          <DimensionCard key={i + 3} item={d} />
        ))}
      </div>
    </div>
  );
};

export default CaRVEBehaviourFramework;