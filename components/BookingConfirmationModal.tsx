import React, { useEffect } from 'react';
import { IconX, IconPhone, IconLock, IconArrowRight } from '../icons';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-[500px] border border-gray-200">
          
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-900 transition-colors p-1"
            >
              <IconX />
            </button>
          </div>

          <div className="px-6 py-8 md:px-10 md:py-10 flex flex-col items-center">
            
            {/* Title */}
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Confirm Your Booking</h2>

            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-red-500/20">
              <div className="transform scale-125">
                <IconPhone />
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-gray-600 mb-8 max-w-sm leading-relaxed">
              We need your mobile number to confirm your <span className="text-red-600 font-bold">TurboElite Service</span> booking.
            </p>

            {/* Input Field */}
            <div className="w-full mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Mobile Number</label>
              <div className="relative flex rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-600 font-medium">+91</span>
                  <div className="h-4 w-px bg-gray-300 ml-2"></div>
                </div>
                <input
                  type="tel"
                  className="block w-full rounded-lg border border-gray-300 bg-white pl-14 pr-12 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-lg transition-all"
                  placeholder="Enter 10-digit mobile number"
                />
              </div>
            </div>

            {/* Continue Button */}
            <button className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:shadow-lg text-white font-bold py-3.5 px-4 rounded-lg shadow flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] text-lg">
              Continue <IconArrowRight />
            </button>
          </div>

          {/* Footer - Privacy Note */}
          <div className="bg-gray-50 px-6 py-4 flex items-center justify-center gap-2 border-t border-gray-200">
            <div className="text-gray-500">
              <IconLock />
            </div>
            <p className="text-[11px] text-gray-600 text-center leading-tight">
              Your privacy is protected. We use your number only for<br/> booking confirmations and support.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationModal;