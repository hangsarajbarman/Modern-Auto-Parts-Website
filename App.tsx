import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ServiceDetailModal from './components/ServiceDetailModal';
import TurboElitePage from './components/TurboElitePage';
import CarServiceScheduler from './components/CarServiceScheduler';
import BookingConfirmationModal from './components/BookingConfirmationModal';
import { SERVICE_CATEGORIES, CAR_BRANDS, CAR_MODELS } from './data';
import { ServiceCategory, ServiceItem, CartItem, CarModel, NavOption } from './types';
import { IconCheck, IconX, IconTrash, IconZap, IconStarFilled, IconQuote, IconStar, IconRupee, IconShieldCheck, IconClock, IconCheckCircle, IconChevronDown, IconFacebook, IconInstagram, IconTwitter, IconMail, IconMapPin, IconPhone } from './icons';
import brandLogo from './assets/logo.jpeg';

const FAQS = [
  {
    question: "What is included in the TurboElite Service?",
    answer: "Our TurboElite Service covers all essential check-ups, oil replacement, filter cleaning/replacement, fluid top-ups, and a comprehensive 40-point vehicle inspection, all completed within 90 minutes by a dedicated team of technicians."
  },
  {
    question: "Do you use genuine spare parts?",
    answer: "Yes, we use 100% genuine OEM (Original Equipment Manufacturer) and OES (Original Equipment Supplier) parts. We value transparency and will show you the parts before installation."
  },
  {
    question: "Is there a warranty on the service?",
    answer: "Absolutely! We offer a 1000km or 1-month warranty (whichever comes first) on our workmanship and the parts we replace. Your satisfaction and safety are our top priorities."
  },
  {
    question: "Do you offer free pick-up and drop?",
    answer: "Yes, we provide complimentary doorstep pick-up and drop service for all major service packages. Our drivers are background-verified and insured for your peace of mind."
  },
  {
    question: "How can I track my car service?",
    answer: "You receive real-time updates via SMS and WhatsApp at every stage of the service—from pick-up to job card creation, work in progress, and final delivery."
  }
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'express'>('home');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCarModalOpen, setIsCarModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState<NavOption>('home');
  const [tempSelectedBrand, setTempSelectedBrand] = useState<string>('');
  const [tempSelectedModel, setTempSelectedModel] = useState<string>('');
  const [tempSelectedFuelType, setTempSelectedFuelType] = useState<string>('');

  // Handlers
  const handleNavigate = (page: NavOption) => {
    setActiveNav(page);

    if (page === 'services' || page === 'contact') {
      const targetId = page === 'services' ? 'services-section' : 'contact-section';
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setCurrentView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleCategoryClick = (category: ServiceCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 200);
  };

  const handleAddToCart = (item: ServiceItem) => {
    if (!selectedCategory) return;
    
    if (cart.find(i => i.id === item.id)) {
      alert("Item already in cart!");
      return;
    }

    setCart(prev => [...prev, { ...item, categoryId: selectedCategory.id }]);
    handleCloseModal();
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  };

  const handleOpenCarModal = () => {
    setIsCarModalOpen(true);
    setTempSelectedBrand('');
    setTempSelectedModel('');
    setTempSelectedFuelType('');
  };

  const handleConfirmCarSelection = () => {
    if (tempSelectedBrand && tempSelectedModel && tempSelectedFuelType) {
      const carModel = CAR_MODELS.find(
        car => car.brand === tempSelectedBrand && 
               car.model === tempSelectedModel && 
               car.fuelType === tempSelectedFuelType
      );
      if (carModel) {
        setSelectedCar(carModel);
        setIsCarModalOpen(false);
      }
    }
  };

  const availableModels = tempSelectedBrand 
    ? [...new Set(CAR_MODELS.filter(car => car.brand === tempSelectedBrand).map(car => car.model))]
    : [];

  const availableFuelTypes = tempSelectedBrand && tempSelectedModel
    ? [...new Set(CAR_MODELS.filter(car => car.brand === tempSelectedBrand && car.model === tempSelectedModel).map(car => car.fuelType))]
    : [];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Header 
        onNavigate={handleNavigate}
        onBookNow={handleBookNow}
        activeNav={activeNav}
      />

      <div className="flex-grow">
        {currentView === 'home' && (
          <main>
            <Hero 
              onExploreClick={() => handleNavigate('services')} 
              onBookNow={handleBookNow} 
            />

            {/* Why Choose Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
              <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                    Why Choose <span className="text-red-600">Modern Auto Parts</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    We combine technology with expertise to deliver the best car care experience.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: <IconRupee />,
                      title: "Transparent Pricing",
                      desc: "Upfront pricing with no hidden charges. You pay what you see."
                    },
                    {
                      icon: <IconShieldCheck />,
                      title: "Genuine Spares",
                      desc: "We use only 100% genuine OEM/OES spare parts for your car."
                    },
                    {
                      icon: <IconCheckCircle />,
                      title: "Expert Mechanics",
                      desc: "Highly trained, background verified and experienced mechanics."
                    },
                    {
                      icon: <IconClock />,
                      title: "Timely Delivery",
                      desc: "We respect your time. Get your car serviced within promised time."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-white border border-gray-200 hover:border-red-400 hover:shadow-lg transition-all group">
                      <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services Grid Section */}
            <div id="services-section" className="relative py-16 bg-white border-t border-gray-200">
               
               <div className="container mx-auto px-4 md:px-8 mb-12">
                 <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">Our Premium Services</h2>
                 <p className="text-gray-600">Select a category to view packages</p>
               </div>

               {/* Services Grid */}
               <div className="container mx-auto px-4 md:px-8 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {SERVICE_CATEGORIES.map(category => (
                    <ServiceCard 
                      key={category.id} 
                      category={category} 
                      onClick={() => handleCategoryClick(category)} 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-gradient-to-b from-red-50 to-white relative overflow-hidden border-t border-gray-200">
              <div className="container mx-auto px-4 md:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                    Revolutionizing <span className="text-red-600">Car Care</span> in India
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Modern Auto Parts is transforming how Indians maintain their vehicles with technology, transparency, and trust.
                  </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Mission */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-400 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white mb-6 shadow-md shadow-red-500/20">
                      <IconZap />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To revolutionize car maintenance with our Modern Auto Parts TurboElite Service, creating a hyperlocal revolution that saves time, ensures quality, and transforms the traditional car service model through innovative technology and exceptional customer experience.
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-400 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white mb-6 shadow-md shadow-red-500/20">
                       <IconStar />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To become India's most trusted automotive care platform, creating a seamless ecosystem where vehicle maintenance is no longer a burden but a delightful experience for every car owner.
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-br from-red-600 to-rose-600 border border-red-700 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
                   <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
                     <IconQuote />
                   </div>
                   <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 relative z-10">
                     Experience the luxury of time. Our TurboElite Service delivers showroom perfection in record time, so you never have to <span className="font-bold">sacrifice</span> your entire day again.
                   </p>
                   <div className="flex items-center gap-4 relative z-10">
                      <div className="flex space-x-1 text-yellow-300">
                        {[1,2,3,4,5].map(i => <IconStarFilled key={i} />)} 
                      </div>
                      <span className="text-red-100 text-sm">From our happy customers</span>
                   </div>
                </div>

              </div>
            </section>

            {/* Common Car Service Questions (FAQ) Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
              <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                    Common Car Service <span className="text-red-600">Questions</span>
                  </h2>
                  <p className="text-gray-600">Everything you need to know about our services</p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4 max-w-4xl mx-auto lg:max-w-none lg:mx-0">
                  {FAQS.map((faq, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all hover:border-red-400 hover:shadow-md"
                    >
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-start p-6 text-left focus:outline-none group"
                      >
                        <span className={`text-lg font-medium transition-colors pr-4 ${openFaqIndex === index ? 'text-red-600' : 'text-gray-900'}`}>
                          {faq.question}
                        </span>
                        <span className={`flex-shrink-0 transform transition-transform duration-300 text-gray-400 group-hover:text-red-600 mt-1 ${openFaqIndex === index ? 'rotate-180 text-red-600' : ''}`}>
                          <IconChevronDown />
                        </span>
                      </button>
                      <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-200 mt-2">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact-section" className="py-20 bg-white border-t border-gray-200">
              <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-600 font-semibold mb-4">Contact</p>
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Need help? Let us talk.</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Our service advisors are on standby from 8 AM to 10 PM every day. Reach us through any channel and we will respond within minutes.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        {
                          icon: <IconPhone />,
                          title: 'Call Us',
                          desc: 'Talk to a senior service advisor instantly',
                          value: '+91 7679953929',
                          actionLabel: 'Call Now',
                          actionUrl: 'tel:+917679953929'
                        },
                        {
                          icon: <IconMail />,
                          title: 'Email Support',
                          desc: 'Get detailed quotes & service plans in your inbox',
                          value: 'hangsarajbarmancob1@gmail.com',
                          actionLabel: 'Write to us',
                          actionUrl: 'mailto:hangsarajbarmancob1@gmail.com'
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:border-red-400 hover:bg-white transition-all shadow-sm">
                          <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-red-600/30">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                          <p className="text-lg font-bold text-gray-900 mb-4">{item.value}</p>
                          <a href={item.actionUrl} className="inline-flex items-center text-red-600 font-semibold text-sm hover:gap-2 transition-all">
                            {item.actionLabel}
                            <span className="ml-2">&rarr;</span>
                          </a>
                        </div>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                            <IconMapPin />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">Service Zone</p>
                            <h4 className="text-lg font-semibold text-gray-900">West Bengal, India</h4>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          Doorstep pick-up & drop across Kolkata metropolitan area with rapid slots for Salt Lake, New Town, and Howrah.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <IconCheckCircle className="text-green-500" />
                          <span>Same-day slot confirmation</span>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                            <IconClock />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">Working Hours</p>
                            <h4 className="text-lg font-semibold text-gray-900">Mon - Sun</h4>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span>Customer Support</span>
                            <span className="font-semibold text-gray-900">08:00 - 22:00</span>
                          </li>
                          <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span>Workshop Operations</span>
                            <span className="font-semibold text-gray-900">09:00 - 20:00</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Emergency Assistance</span>
                            <span className="font-semibold text-gray-900">24x7</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl bg-gradient-to-br from-red-600 to-rose-500 text-white flex flex-col justify-between shadow-2xl">
                    <div>
                      <p className="uppercase text-xs tracking-[0.3em] text-white/80 mb-4">Priority assistance</p>
                      <h3 className="text-3xl font-serif font-semibold mb-4">Request a call back in 15 minutes.</h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-6">
                        Share your preferred time and our crew will reach out with personalized service recommendations, free inspection slots, and instant pricing.
                      </p>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3">
                          <IconCheckCircle className="text-white" />
                          <span>No booking charges or hidden fees</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <IconCheckCircle className="text-white" />
                          <span>Live photo & video updates on WhatsApp</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <IconCheckCircle className="text-white" />
                          <span>Dedicated relationship manager</span>
                        </li>
                      </ul>
                    </div>
                    <button 
                      onClick={handleBookNow}
                      className="mt-8 w-full bg-white text-red-700 font-semibold py-3 rounded-xl shadow-lg shadow-black/20 hover:bg-red-50 transition-all"
                    >
                      Request a Call Back
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </main>
        )}

        {currentView === 'express' && (
          <CarServiceScheduler />
        )}
      </div>

      {/* Footer */}
      <footer className="pt-20 pb-10 bg-gray-900 border-t border-gray-800 relative z-10 mt-auto">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                  <img 
                    src={brandLogo} 
                    alt="Modern Auto Parts logo" 
                    className="w-14 h-14 rounded-3xl border border-rose-300/40 bg-white/5 object-cover shadow-lg shadow-rose-500/30"
                    loading="lazy"
                  />
                  <div className="leading-tight">
                    <span className="text-2xl font-serif font-bold text-white block">
                      Modern Auto <span className="text-rose-400">Parts</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">TurboElite</span>
                  </div>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Your trusted partner for premium car services. Experience the best in class car maintenance with our TurboElite Service.
               </p>
               <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                    <IconFacebook />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                    <IconInstagram />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                    <IconTwitter />
                  </a>
               </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors text-sm">Home</a></li>
                <li><button onClick={() => handleNavigate('services')} className="text-gray-400 hover:text-rose-400 transition-colors text-sm">Services</button></li>
                <li><button onClick={() => handleNavigate('express')} className="text-gray-400 hover:text-rose-400 transition-colors text-sm">TurboElite Premium</button></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors text-sm">About Us</a></li>
                <li><button onClick={() => handleNavigate('contact')} className="text-gray-400 hover:text-rose-400 transition-colors text-sm">Contact</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Periodic Maintenance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Denting & Painting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Car Spa & Cleaning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AC Service & Repair</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Batteries & Tyres</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                   <div className="text-rose-400"><IconMapPin /></div>
                   <span>West Bengal, India</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                   <div className="text-rose-400"><IconPhone /></div>
                   <span>+91 7679953929</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                   <div className="text-rose-400"><IconMail /></div>
                  <span>hangsarajbarmancob1@gmail.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="pt-8 border-t border-gray-800 text-center">
             <p className="text-gray-500 text-sm">
               &copy; 2025 <span className="text-white font-serif font-bold">Modern Auto <span className="text-rose-400">Parts</span></span>. All rights reserved.
             </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ServiceDetailModal 
        category={selectedCategory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />

      <BookingConfirmationModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[70] flex justify-end">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white border-l border-gray-200 shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
            <div className="p-5 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-red-600 to-rose-600">
              <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">Your Cart <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-sans">{cart.length}</span></h3>
              <button onClick={() => setIsCartOpen(false)} className="text-white hover:text-gray-100"><IconX /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-20 text-gray-600">
                  <p>Your cart is empty</p>
                  <button onClick={() => setIsCartOpen(false)} className="mt-4 text-red-600 hover:text-red-700 font-bold text-sm transition-colors">Browse Services</button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                    <div>
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">₹{item.price}</p>
                    </div>
                    <button 
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <IconTrash />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-5 border-t border-gray-200 bg-white">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="text-2xl font-bold text-red-600">₹{subtotal}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold py-3.5 rounded-lg hover:shadow-lg transition-all">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;