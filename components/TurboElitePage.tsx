import React from 'react';
import { 
  IconAlertCircle, IconChevronDown, IconChevronRight, IconPhone, 
  IconShieldCheck, IconCheckCircle 
} from '../icons';
import { CarModel } from '../types';

interface TurboElitePageProps {
  selectedCar: CarModel | null;
  onSelectVehicle: () => void;
}

const TurboElitePage: React.FC<TurboElitePageProps> = ({ selectedCar, onSelectVehicle }) => {
  return (
    <div className="bg-white min-h-screen pb-20 text-gray-900">

      {/* Warning Banner */}
      {!selectedCar && (
        <div className="bg-yellow-50 border-b border-yellow-200">
           <div className="container mx-auto px-4 md:px-8 py-3 flex items-start sm:items-center gap-3">
              <div className="text-yellow-600 mt-0.5 sm:mt-0"><IconAlertCircle /></div>
              <div className="flex-1 sm:flex sm:items-center sm:justify-between">
                 <div>
                    <h4 className="font-bold text-yellow-800 text-sm">Vehicle Selection Required</h4>
                    <p className="text-xs text-yellow-700">Please select your car to see pricing and continue with booking</p>
                 </div>
                 <button 
                   onClick={onSelectVehicle}
                   className="mt-2 sm:mt-0 bg-yellow-500 text-white text-xs font-bold px-4 py-2 rounded shadow hover:bg-yellow-600 transition-colors"
                 >
                   Select Car
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 space-y-8">

        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-red-500">TurboElite</p>
          <h3 className="font-bold text-2xl text-gray-900">Car Service Details</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Service Details Card */}
            <div className="border border-red-200 rounded-lg p-5 bg-white shadow-md relative overflow-hidden">
               {/* Decorative Line Top */}
               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-rose-400"></div>
               
               <div className="flex justify-between items-start mb-1">
                  <div>
                    <h2 className="font-bold text-gray-900 text-lg">TurboElite Service</h2>
                    <p className="text-sm text-gray-600 mt-1">Complete Car Service in just 90 minutes</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 line-through">₹0</div>
                    <div className="text-2xl font-bold text-red-600">₹0</div>
                  </div>
               </div>
               
               <div className="text-right mt-2">
                 <span className="text-green-600 text-xs font-bold">Website discount: ₹0 OFF</span>
               </div>
            </div>

            {/* Coupon Section */}
            <div className="border border-gray-200 rounded-lg px-5 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors bg-white">
               <span className="text-gray-700 font-medium">Have a coupon code?</span>
               <IconChevronDown />
            </div>

            {/* Stepper */}
            <div className="flex items-center gap-3 py-2">
               <div className="flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">1</div>
                 <span className="text-sm text-gray-900 font-medium">Enter Mobile Number</span>
               </div>
               <span className="text-gray-400"><IconChevronRight /></span>
               <div className="flex items-center gap-2 opacity-50">
                 <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs font-bold">2</div>
                 <span className="text-sm text-gray-500">Select Date & Time</span>
               </div>
            </div>

            {/* Mobile Number Input Section (Left) */}
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900">Enter Mobile Number</h4>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                   <IconPhone />
                </div>
                <input 
                  type="tel" 
                  placeholder="Enter 10-digit mobile number" 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all placeholder:text-gray-500"
                />
              </div>

              {/* Next Button */}
              <button className="w-full bg-gray-200 text-gray-500 font-bold py-4 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed">
                 Next: Select Your Slot <IconChevronRight />
              </button>

              {/* Trust Marker */}
              <div className="flex items-center justify-center gap-2 text-gray-600 text-xs mt-2">
                 <IconShieldCheck />
                 <span>Your number is safe with us</span>
              </div>
            </div>

            {/* Additional Trust Indicators */}
            <div className="space-y-2 pt-4">
               <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500"><IconCheckCircle /></span>
                  <span>Book your slot in under 2 minutes</span>
               </div>
               <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500"><IconCheckCircle /></span>
                  <span>No advance payment required</span>
               </div>
            </div>

             {/* Service Inclusions */}
             <div className="pt-6">
                <h3 className="font-bold text-gray-900 mb-4">Service Inclusions</h3>
                {/* Placeholder content for inclusions */}
                <div className="flex gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <p className="text-sm text-gray-600">Complete General Service</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <p className="text-sm text-gray-600">Eco-friendly Car Wash</p>
                </div>
             </div>

          </div>

          {/* Right Column (1/3) */}
          <div className="space-y-8">
            
            {/* Right Side Mobile Input Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hidden lg:block">
               <h3 className="font-bold text-gray-900 mb-4">Enter Mobile Number</h3>
               <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <IconPhone />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Enter 10-digit mobile number" 
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 text-sm placeholder:text-gray-500"
                    />
                  </div>
                  <button className="w-full bg-gray-200 text-gray-500 font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm cursor-not-allowed">
                    Next: Select Your Slot <IconChevronRight />
                  </button>
                  <div className="flex items-center justify-center gap-2 text-gray-600 text-[10px] mt-2">
                    <IconShieldCheck />
                    <span>Your number is safe with us • No payment required now</span>
                  </div>
               </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
               <h3 className="font-bold text-gray-900 mb-6">Price Summary</h3>
               
               <div className="space-y-4">
                  <div className="flex justify-between text-gray-600 text-sm">
                     <span>Original Price</span>
                     <span>₹0</span>
                  </div>
                  <div className="flex justify-between text-green-600 text-sm">
                     <span>Website Discount</span>
                     <span>-₹0</span>
                  </div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between font-bold text-lg text-red-600">
                     <span>Final Price</span>
                     <span>₹0</span>
                  </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TurboElitePage;

