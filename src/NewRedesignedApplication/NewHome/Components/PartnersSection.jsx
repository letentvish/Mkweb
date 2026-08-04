import React from 'react';
import Marquee from 'react-fast-marquee';

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
    <section className="py-10 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-slate-500 tracking-widest uppercase font-poppins mb-6">
          OUR TRUSTED PARTNERS
        </p>

        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {partners.map((partner, index) => (
            <span 
              key={index}
              className="font-poppins font-extrabold text-slate-400 text-lg sm:text-xl tracking-wider mx-8 hover:text-slate-800 transition-colors duration-200 cursor-default"
            >
              {partner.name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default PartnersSection;
