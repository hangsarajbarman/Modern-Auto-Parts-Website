import React from 'react';
import { IconArrowRight } from '../icons';

interface HeroProps {
  onExploreClick: () => void;
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick, onBookNow }) => {
  return (
    <div className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-red-50 via-white to-white">
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Pill Label */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-3 py-1 backdrop-blur-md">
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">New</span>
            <span className="text-red-900 text-xs">Premium car detailing available</span>
            <IconArrowRight />
          </div>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Transform Your Car <br />
          <span className="italic font-light opacity-90">With Our <span className="text-gradient">Premium Service</span></span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-gray-600 text-lg mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Streamline your vehicle maintenance, boost performance, and enhance longevity with our cutting-edge service platform. Experience seamless booking and unparalleled support.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <button 
            onClick={onBookNow}
            className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all active:scale-95"
          >
            Get started
          </button>
          <button 
            onClick={onExploreClick}
            className="group flex items-center gap-2 text-gray-900 font-medium hover:text-red-600 transition-colors"
          >
            View Services 
            <span className="group-hover:translate-x-1 transition-transform"><IconArrowRight /></span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;