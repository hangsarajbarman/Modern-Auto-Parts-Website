import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Car, User, CheckCircle, X, ChevronRight } from 'lucide-react';
import { CAR_BRANDS, CAR_MODELS } from '../data';
import { CarModel } from '../types';

interface FormData {
  name: string;
  phone: string;
  email: string;
  carModel: string;
  notes: string;
}

interface ServiceType {
  id: string;
  name: string;
  duration: string;
  description: string;
}

export default function CarServiceScheduler() {
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    carModel: '',
    notes: ''
  });
  const [isBooked, setIsBooked] = useState(false);

  const serviceTypes: ServiceType[] = [
    { 
      id: 'periodic', 
      name: 'Periodic Service', 
      duration: '2-3 hours',
      description: 'Regular Maintenance and Servicing'
    },
    { 
      id: 'pickup', 
      name: 'Pick Up & Drop', 
      duration: '30-45 min',
      description: 'Hassle-free car pickup and drop service'
    },
    { 
      id: 'denting', 
      name: 'Denting & Painting', 
      duration: '1-2 days',
      description: 'Expert Dent Removal and Painting Services'
    },
    { 
      id: 'ac', 
      name: 'AC Service', 
      duration: '2-3 hours',
      description: 'Professional Car AC Repair and Maintenance'
    },
    { 
      id: 'spa', 
      name: 'Car Spa & Cleaning', 
      duration: '1-2 hours',
      description: 'Professional Car Cleaning Services'
    },
    { 
      id: 'detailing', 
      name: 'Car Detailing', 
      duration: '3-4 hours',
      description: 'Professional Car Detailing Services'
    },
    { 
      id: 'battery', 
      name: 'Battery Service', 
      duration: '30-60 min',
      description: 'Battery Check, Repair and Replacement'
    },
    { 
      id: 'windshield', 
      name: 'Windshield Service', 
      duration: '1-2 hours',
      description: 'Windshield Repair and Replacement'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleSubmit = () => {
    if (selectedDate && selectedSlot && serviceType && formData.name && formData.phone) {
      setIsBooked(true);
      setTimeout(() => {
        setIsBooked(false);
        resetForm();
      }, 5000);
    }
  };

  const resetForm = () => {
    setSelectedDate('');
    setSelectedSlot('');
    setServiceType('');
    setFormData({ name: '', phone: '', email: '', carModel: '', notes: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVehicleSelect = () => {
    if (selectedBrand && selectedModel && selectedFuelTypes.length > 0) {
      // Create a custom car object with multiple fuel types
      const fuelTypeStr = selectedFuelTypes.join(' + ');
      const manualCar: CarModel = {
        id: 'selected-' + Date.now(),
        brand: selectedBrand,
        model: selectedModel,
        fuelType: fuelTypeStr as any // Multiple fuel types combined
      };
      setSelectedCar(manualCar);
      setShowVehicleModal(false);
    }
  };

  const getAvailableModels = () => {
    if (!selectedBrand) return [];
    const models = CAR_MODELS.filter(c => c.brand === selectedBrand);
    return [...new Set(models.map(c => c.model))];
  };

  const getAvailableFuelTypes = () => {
    if (!selectedBrand || !selectedModel) return [];
    const fuelTypes = CAR_MODELS.filter(c => c.brand === selectedBrand && c.model === selectedModel)
      .map(c => c.fuelType);
    const uniqueFuelTypes = [...new Set(fuelTypes)];
    // Always include CNG as an option
    if (!uniqueFuelTypes.includes('CNG')) {
      uniqueFuelTypes.push('CNG');
    }
    return uniqueFuelTypes;
  };

  const toggleFuelType = (fuelType: string) => {
    setSelectedFuelTypes(prev => {
      if (prev.includes(fuelType)) {
        // If already selected, remove it
        return prev.filter(f => f !== fuelType);
      } else {
        // If not selected, check if we already have 2 selections
        if (prev.length >= 2) {
          // Don't allow more than 2 selections
          return prev;
        }
        return [...prev, fuelType];
      }
    });
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showVehicleModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVehicleModal]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Car className="w-10 h-10 text-red-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Car Service Booking</h1>
            </div>
            <button
              onClick={() => setShowVehicleModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              <Car className="w-5 h-5" />
              {selectedCar ? 'Change Car' : 'Select Car'}
            </button>
          </div>
          <p className="text-gray-600 ml-13">Schedule your car service appointment online</p>
          {selectedCar && (
            <div className="mt-4 ml-13 bg-green-50 border border-green-200 rounded-xl p-3 inline-block">
              <p className="text-green-800 font-medium">
                Selected: {selectedCar.brand} {selectedCar.model} ({selectedCar.fuelType})
              </p>
            </div>
          )}
        </div>

        {/* Vehicle Selection Modal */}
        {showVehicleModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Select Your Vehicle</h2>
                <button
                  onClick={() => setShowVehicleModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Manual Entry Option */}
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">✎</span>
                    Enter Vehicle Details Manually
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Car Brand *</label>
                        <input
                          type="text"
                          value={selectedBrand}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                          placeholder="e.g., Maruti, Honda, Hyundai"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Car Model *</label>
                        <input
                          type="text"
                          value={selectedModel}
                          onChange={(e) => setSelectedModel(e.target.value)}
                          placeholder="e.g., Swift, City, i20"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type * (Select up to 2)</label>
                      <div className="flex flex-wrap gap-2">
                        {['Petrol', 'Diesel', 'CNG'].map((fuelType) => (
                          <button
                            key={fuelType}
                            type="button"
                            onClick={() => toggleFuelType(fuelType)}
                            className={`px-4 py-2 border-2 rounded-lg font-medium transition-all ${
                              selectedFuelTypes.includes(fuelType)
                                ? 'border-red-600 bg-red-50 text-red-600'
                                : 'border-gray-200 text-gray-700 hover:border-red-300'
                            }`}
                          >
                            {fuelType}
                            {selectedFuelTypes.includes(fuelType) && ' ✓'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {selectedBrand && selectedModel && selectedFuelTypes.length > 0 && (
                    <button
                      onClick={() => {
                        const fuelTypeStr = selectedFuelTypes.join(' + ');
                        const manualCar: CarModel = {
                          id: 'manual-' + Date.now(),
                          brand: selectedBrand,
                          model: selectedModel,
                          fuelType: fuelTypeStr as any
                        };
                        setSelectedCar(manualCar);
                        setShowVehicleModal(false);
                      }}
                      className="w-full mt-4 bg-gradient-to-r from-red-600 to-rose-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      Confirm Manual Entry
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">OR SELECT FROM LIST</span>
                  </div>
                </div>

                {/* Step 1: Select Brand */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
                    Select Brand
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {CAR_BRANDS.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => {
                          setSelectedBrand(brand);
                          setSelectedModel('');
                          setSelectedFuelTypes([]);
                        }}
                        className={`p-3 border-2 rounded-xl font-medium transition-all ${
                          selectedBrand === brand
                            ? 'border-red-600 bg-red-50 text-red-600'
                            : 'border-gray-200 text-gray-700 hover:border-red-300'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Model */}
                {selectedBrand && CAR_BRANDS.includes(selectedBrand) && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
                      Select Model
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {getAvailableModels().map((model) => (
                        <button
                          key={model}
                          onClick={() => {
                            setSelectedModel(model);
                            setSelectedFuelTypes([]);
                          }}
                          className={`p-3 border-2 rounded-xl font-medium transition-all text-left ${
                            selectedModel === model
                              ? 'border-red-600 bg-red-50 text-red-600'
                              : 'border-gray-200 text-gray-700 hover:border-red-300'
                          }`}
                        >
                          {model}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Select Fuel Type */}
                {selectedModel && CAR_BRANDS.includes(selectedBrand) && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
                      Select Fuel Type
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">You can select up to 2 fuel types</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {getAvailableFuelTypes().map((fuelType) => (
                        <button
                          key={fuelType}
                          onClick={() => toggleFuelType(fuelType)}
                          className={`p-4 border-2 rounded-xl font-medium transition-all relative ${
                            selectedFuelTypes.includes(fuelType)
                              ? 'border-red-600 bg-red-50 text-red-600'
                              : 'border-gray-200 text-gray-700 hover:border-red-300'
                          }`}
                        >
                          {fuelType}
                          {selectedFuelTypes.includes(fuelType) && (
                            <span className="absolute top-2 right-2 text-red-600">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Confirm Button */}
                {selectedBrand && selectedModel && selectedFuelTypes.length > 0 && CAR_BRANDS.includes(selectedBrand) && (
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={handleVehicleSelect}
                      className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      Confirm Vehicle Selection
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {isBooked ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200 max-w-2xl mx-auto">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-1">Service: {serviceTypes.find(s => s.id === serviceType)?.name}</p>
            <p className="text-gray-600 mb-1">Date: {selectedDate}</p>
            <p className="text-gray-600">Time: {selectedSlot}</p>
            <p className="text-gray-500 mt-4">We'll send you a confirmation email shortly.</p>
          </div>
        ) : !selectedCar ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-200">
            <Car className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Vehicle First</h2>
            <p className="text-gray-600 mb-6">Please select your car to continue with the booking</p>
            <button
              onClick={() => setShowVehicleModal(true)}
              className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <Car className="w-5 h-5" />
              Select Your Car
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
            {/* Service Type Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Car className="w-6 h-6 text-red-600" />
                Select Service Type
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceTypes.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setServiceType(service.id)}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      serviceType === service.id
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 text-lg">{service.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    <p className="text-xs text-red-600 mt-2 font-medium">⏱ {service.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-red-600" />
                Select Date
              </h2>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                required
              />
            </div>

            {/* Time Slot Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-red-600" />
                Select Time Slot
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-3 border-2 rounded-xl font-medium transition-all ${
                      selectedSlot === slot
                        ? 'border-red-600 bg-red-600 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-red-300 hover:bg-red-50'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Details */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-red-600" />
                Your Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Car Model</label>
                  <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    placeholder="e.g., Honda City 2020"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
                  placeholder="Any specific issues or requirements..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all transform active:scale-95"
            >
              Confirm Booking
            </button>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Important Information:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Please arrive 10 minutes before your scheduled time</li>
            <li>• Bring your vehicle registration and insurance documents</li>
            <li>• Free pickup and drop service available within 5km</li>
            <li>• For cancellations, please call us 24 hours in advance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

