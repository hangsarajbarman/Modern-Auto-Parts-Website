import React from 'react';
import { ServiceCategory } from '../types';
import { getIcon } from '../icons';

interface ServiceCardProps {
  category: ServiceCategory;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ category, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-white rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 hover:border-red-400 hover:shadow-xl"
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon Container */}
      <div className="relative z-10 w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300 group-hover:bg-red-100">
        {getIcon(category.iconName)}
      </div>
      
      <h3 className="relative z-10 font-serif font-medium text-xl text-gray-900 mb-3">{category.title}</h3>
      <p className="relative z-10 text-sm text-gray-600 leading-relaxed">{category.description}</p>
      
      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ServiceCard;