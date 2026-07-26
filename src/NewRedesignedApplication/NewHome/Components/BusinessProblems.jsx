import React from 'react';
import { motion } from 'framer-motion';
import businessProblemImg from '../../../Assets/Home/businessProblem.jpg';
import workforceIcon from '../../../Assets/NewHome/BuisnessIcons/Workforce.svg';
import adoptionIcon from '../../../Assets/NewHome/BuisnessIcons/Adoption.svg';
import metricesIcon from '../../../Assets/NewHome/BuisnessIcons/Metrices.svg';
import scalabilityIcon from '../../../Assets/NewHome/BuisnessIcons/Scalability.svg';
import talentIcon from '../../../Assets/NewHome/BuisnessIcons/Talent.svg';
import fragmentedIcon from '../../../Assets/NewHome/BuisnessIcons/Fragmanted.svg';

const BusinessProblems = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const problems = [
    {
      title: 'Workforce Skill Gaps',
      description: 'Bridge critical competency gaps with targeted learning pathways and dynamic capability mapping.',
      icon: workforceIcon
    },
    {
      title: 'Low Learning Adoption',
      description: 'Drive active engagement through personalized, highly relevant context-aware learning modules.',
      icon: adoptionIcon
    },
    {
      title: 'Inconsistent Performance Metrics',
      description: 'Establish standardized measurement frameworks, enterprise KPIs, and clear outcome tracking.',
      icon: metricesIcon
    },
    {
      title: 'Scalability Challenges',
      description: 'Deploy enterprise-ready infrastructure that scales across multi-thousand employee organizations.',
      icon: scalabilityIcon
    },
    {
      title: 'Limited Talent Insights',
      description: 'Gain actionable intelligence and predictive workforce analytics on capability readiness.',
      icon: talentIcon
    },
    {
      title: 'Fragmented Systems',
      description: 'Unify disparate HR and learning ecosystems into a seamless, automated platform.',
      icon: fragmentedIcon
    }
  ];

  return (
    <section className="w-full py-[120px] bg-surface border-b border-outline-variant/60">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="label-md mb-2">CHALLENGES & DIAGNOSTICS</p>
          <h2 className="headline-lg text-on-surface mb-4">
            Business Problems We Solve
          </h2>
          <p className="body-lg text-on-surface-variant">
            Targeting structural inefficiencies and organizational bottlenecks with engineered capability solutions.
          </p>
        </div>

        {/* Hero Banner Banner Graphic */}
        <div className="w-full mb-12 rounded-2xl overflow-hidden border border-outline-variant/60 shadow-lg max-h-[360px]">
          <img
            src={businessProblemImg}
            alt="Business Problems We Solve"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 6-Card Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="nexus-card p-6 flex flex-col justify-between hover:border-secondary transition-colors duration-200"
              variants={cardVariants}
            >
              <div>
                {/* 48px Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-surface-container-low p-2.5 flex items-center justify-center mb-5">
                  <img
                    src={problem.icon}
                    alt={problem.title}
                    className="w-full h-full object-contain filter brightness-90 contrast-125"
                  />
                </div>

                <h3 className="headline-sm text-on-surface mb-2">
                  {problem.title}
                </h3>

                <p className="body-md text-on-surface-variant">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessProblems;

