import React from 'react';
import logo from "../Assets/logo192.png";
import mileLogo from "../Assets/MileLogo.png";

const Preloader = () => {
  return (
    <>
      <style>
        {`
          .loader {
            width: 60px;
            padding: 4px;
            aspect-ratio: 1;
            border-radius: 50%;
            background: #E9B00F;
            --_m: 
              conic-gradient(#0000 10%, #000),
              linear-gradient(#000 0 0) content-box;
            -webkit-mask: var(--_m);
            mask: var(--_m);
            -webkit-mask-composite: source-out;
            mask-composite: subtract;
            animation: spinMasked 1s infinite linear;
          }

          @keyframes spinMasked {
            to { transform: rotate(1turn); }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .blink {
            animation: blink 1s infinite;
          }
        `}
      </style>

      <div className="fixed inset-0 bg-[#0C1437] z-[9999] flex items-center justify-center">
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Rotating gradient rings */}
          <div className="absolute w-full h-full rounded-full animate-spin z-0">
            <div className="w-full h-full p-[1px] bg-gradient-to-br from-[#0C1437] to-[#FFFFFF] rounded-full">
              <div className="w-full h-full bg-gradient-to-tl from-[#0C1437] to-[#B1B5BB] rounded-full p-[3px]" />
            </div>
          </div>

          {/* Static Image */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img
              src={mileLogo}
              alt="MILE Logo"
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
