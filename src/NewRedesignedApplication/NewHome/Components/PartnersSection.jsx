import React from 'react';
import './PartnersSection.css';


const PartnersSection = () => {
  const partners = [
    { name: 'NeoLink' },
    { name: 'Endurance'},
    { name: 'Dr. Reddy\'s' },
    { name: 'Bosch'},
    { name: 'Hindustan Petroleum' },
    { name: 'Merck'},
    { name: 'Narayana Healthcare'},
    { name: 'Panasonic' },
    { name: 'Cotiviti'},
  ];

  return (
    <section className="home-partner-section">
      <div className="home-partner-title">
       Our Trusted Partners
      </div>
      <div className="home-partner-carousel-wrapper">
        <div className="home-partner-carousel">
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <div key={`first-${index}`} className="home-partner-logo">
              <span className="home-partner-name">{partner.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div key={`second-${index}`} className="home-partner-logo">
              <span className="home-partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
