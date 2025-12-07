import React from 'react';
import { IconCar } from '../icons';
import { CarModel, NavOption } from '../types';
import logoImage from '../assets/logo.jpeg';

interface HeaderProps {
  onNavigate: (page: NavOption) => void;
  onBookNow: () => void;
  activeNav: NavOption;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onBookNow, activeNav }) => {
  const navButtonClasses = (key: NavOption, inactiveClass = 'text-gray-600 hover:text-gray-900') =>
    `font-medium text-sm transition-colors ${activeNav === key ? 'text-red-600' : inactiveClass}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer gap-3" onClick={() => onNavigate('home')}>
          <img 
            src={logoImage} 
            alt="Modern Auto Parts logo" 
            className="w-12 h-12 rounded-2xl border border-red-200 shadow-sm object-cover bg-white"
            loading="lazy"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-serif font-bold tracking-tight text-gray-900">
              Modern Auto <span className="text-rose-600">Parts</span>
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">TurboElite</span>
          </div>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => onNavigate('home')} className={navButtonClasses('home', 'text-gray-900 hover:text-red-600')}>Home</button>
          <button onClick={() => onNavigate('services')} className={navButtonClasses('services')}>Services</button>
          <button onClick={() => onNavigate('express')} className={navButtonClasses('express')}>TurboElite Schedule</button>
          <button onClick={() => onNavigate('contact')} className={navButtonClasses('contact')}>Contact Us</button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Book Now Button */}
          <button 
            onClick={onBookNow}
            className="px-5 py-2 bg-gradient-to-r from-red-600 to-rose-600 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all transform active:scale-95"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;