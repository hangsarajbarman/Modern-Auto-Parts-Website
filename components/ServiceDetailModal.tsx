import React, { useEffect } from 'react';
import { ServiceCategory, ServiceItem } from '../types';
import { IconX, IconCheck } from '../icons';

interface ServiceDetailModalProps {
  category: ServiceCategory | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: ServiceItem) => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ category, isOpen, onClose, onAddToCart }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 transition-opacity backdrop-blur-sm" onClick={onClose}></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl border border-gray-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-rose-600 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-b border-red-700 flex justify-between items-start sticky top-0 z-10">
            <div>
              <h3 className="text-2xl font-serif font-bold leading-6 text-white" id="modal-title">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-red-100">
                Select a package that suits your needs.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="rounded-full p-1 hover:bg-white/20 transition-colors text-white hover:text-white"
            >
              <IconX />
            </button>
          </div>

          {/* Body */}
          <div className="bg-gray-50 px-4 py-6 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col hover:border-red-400 hover:shadow-lg transition-all">
                  {item.recommended && (
                    <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 text-center uppercase tracking-wider">
                      Recommended
                    </div>
                  )}
                  <div className="p-5 flex-1">
                    <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>
                    <div className="mt-2 flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-red-600">₹{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Time: {item.timeRequired}</p>
                    
                    <div className="mt-4 space-y-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                          <span className="text-green-500 mt-0.5"><IconCheck /></span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <button 
                      onClick={() => onAddToCart(item)}
                      className="w-full rounded-lg bg-gradient-to-r from-red-600 to-rose-600 text-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all active:scale-95"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;