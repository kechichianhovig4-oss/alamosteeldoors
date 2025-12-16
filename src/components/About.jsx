// components/AboutUs.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalContactForm from './Modalcontactform';

const About = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#112218] font-display text-white">
      {/* Font imports */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        rel="stylesheet"
      />
      
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #112218;
          }
          ::-webkit-scrollbar-thumb {
            background: #2bee79;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #23c563;
          }
          
          /* Animations */
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out;
          }
        `
      }} />
      
      <div className="relative flex min-h-screen w-full flex-col bg-[#112218]">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#112218]/90 backdrop-blur-sm border-b border-[#234832]">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-4 text-white">
              <div className="w-5 h-5 sm:size-6 text-[#2bee79]">
                <svg className="fill-current w-full h-full" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
                </svg>
              </div>
              <Link 
                to="/" 
                onClick={() => handleNavClick('/')}
                className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]"
              >
                Alamo Steel Doors
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link 
                to="/" 
                onClick={() => handleNavClick('/')}
                className="text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors px-3 py-2"
              >
                Home
              </Link>
              <Link 
                to="/Portfolio" 
                onClick={() => handleNavClick('/Portfolio')}
                className="text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors px-3 py-2"
              >
                Portfolio
              </Link>
              <Link 
                to="/About" 
                onClick={() => handleNavClick('/About')}
                className="text-sm font-medium leading-normal text-[#2bee79] hover:text-green-400 transition-colors px-3 py-2"
              >
                About
              </Link>
              <Link 
                to="/faq" 
                onClick={() => handleNavClick('/faq')}
                className="text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors px-3 py-2"
              >
                FAQ
              </Link>
              <Link 
                to="/Contact" 
                onClick={() => handleNavClick('/Contact')}
                className="text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors px-3 py-2"
              >
                Contact
              </Link>
              
              {/* Get a Quote Button */}
              <button 
                onClick={openModal}
                className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-[#2bee79] text-[#112218] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-400 transition-all hover:shadow-[0_0_15px_rgba(43,238,121,0.5)] ml-2"
              >
                Get a Quote
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center size-10 text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#112218] border-t border-[#234832] shadow-lg">
              <div className="px-4 py-4 space-y-1">
                <Link 
                  to="/" 
                  onClick={() => handleNavClick('/')}
                  className="block px-4 py-3 text-white text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/Portfolio" 
                  onClick={() => handleNavClick('/Portfolio')}
                  className="block px-4 py-3 text-white text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors border-t border-[#234832]"
                >
                  Portfolio
                </Link>
                <Link 
                  to="/About" 
                  onClick={() => handleNavClick('/About')}
                  className="block px-4 py-3 text-[#2bee79] text-sm font-medium leading-normal hover:text-green-400 transition-colors border-t border-[#234832]"
                >
                  About
                </Link>
                <Link 
                  to="/faq" 
                  onClick={() => handleNavClick('/faq')}
                  className="block px-4 py-3 text-white text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors border-t border-[#234832]"
                >
                  FAQ
                </Link>
                <Link 
                  to="/Contact" 
                  onClick={() => handleNavClick('/Contact')}
                  className="block px-4 py-3 text-white text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors border-t border-[#234832]"
                >
                  Contact
                </Link>
                <div className="pt-4 border-t border-[#234832]">
                  <button 
                    onClick={() => {
                      openModal();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-4 bg-[#2bee79] text-[#112218] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-400 transition-all hover:shadow-[0_0_15px_rgba(43,238,121,0.5)]"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <div className="px-4 sm:px-6 lg:px-10 xl:px-20 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1 w-full">
            <div>
              <div 
                className="relative flex min-h-[400px] sm:min-h-[480px] flex-col gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat items-center justify-center p-6 sm:p-8 text-center"
                style={{
                  backgroundImage: 'linear-gradient(rgba(16, 34, 23, 0.7) 0%, rgba(16, 34, 23, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRSCIELF6WPhTiu-Z8xfK26UenkIZl2k9JE0B0hqI6p2odR8FC9TYjIW_3Epdt3IRbFk90y3Eq3i10kQZAWeOwaf8D-3MOp9AL2PfHo-LBpJs-gE-a8Iz7bYUR1bsU9c1n6qjtujyiXWys9--i5Lelj2cnWb0Z5H5Ft86QHAbZMGDc5yQCY_Iay8HOEWRQIsW_iGhS_jI7-9tPUrILmy5CqoN9yzN6K0TdC2hwFkAxtNV54dOUipo_cEq0EgNBI2MrR5jv-l9jB28")'
                }}
              >
                <div className="flex flex-col gap-4 max-w-2xl z-10">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] animate-fade-in-up">
                    Forging Entrances,<br/> <span className="text-[#2bee79]">Defining Homes</span>
                  </h1>
                  <h2 className="text-gray-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                    We don't just build doors; we craft the first impression of your sanctuary. Experience the perfect fusion of art, security, and hand-forged craftsmanship.
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 z-10 mt-4">
                  <Link 
                    to="/Portfolio"
                    onClick={() => handleNavClick('/Portfolio')}
                    className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 sm:h-12 px-5 sm:px-6 bg-[#2bee79] text-[#112218] text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform"
                  >
                    <span className="truncate">Our Catalog</span>
                  </Link>
                  <button 
                    onClick={openModal}
                    className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 sm:h-12 px-5 sm:px-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors"
                  >
                    <span className="truncate">Contact Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header: Legacy */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full max-w-[960px] px-4 sm:px-6 lg:px-10 xl:px-20">
            <div className="flex items-center gap-4 pt-10 pb-4">
              <div className="h-px bg-[#2bee79]/30 flex-1"></div>
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] text-center">Our Legacy</h2>
              <div className="h-px bg-[#2bee79]/30 flex-1"></div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col items-center pb-12">
          <div className="flex flex-col w-full max-w-[960px] px-4 sm:px-6 lg:px-10 xl:px-20">
            <div className="grid grid-cols-[32px_1fr] sm:grid-cols-[40px_1fr] gap-x-4 sm:gap-x-6 px-4">
              {/* Item 1 */}
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-[#2bee79] bg-[#2bee79]/10 rounded-full p-1">
                  <span className="material-symbols-outlined text-lg sm:text-xl">history_edu</span>
                </div>
                <div className="w-[2px] bg-gradient-to-b from-[#2bee79]/50 to-transparent h-full grow min-h-[60px]"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-8">
                <p className="text-white text-lg sm:text-xl font-bold leading-normal">Founded in 2005</p>
                <p className="text-[#92c9a8] text-sm sm:text-base font-normal leading-normal mt-1">
                  Starting with a single forge and a passion for old-world metallurgy, we began crafting bespoke gates for local estates.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[2px] bg-gradient-to-b from-transparent via-[#2bee79]/50 to-[#2bee79]/50 h-full min-h-[20px]"></div>
                <div className="text-[#2bee79] bg-[#2bee79]/10 rounded-full p-1">
                  <span className="material-symbols-outlined text-lg sm:text-xl">factory</span>
                </div>
                <div className="w-[2px] bg-gradient-to-b from-[#2bee79]/50 to-transparent h-full grow min-h-[60px]"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-8">
                <p className="text-white text-lg sm:text-xl font-bold leading-normal">Expanded Workshop</p>
                <p className="text-[#92c9a8] text-sm sm:text-base font-normal leading-normal mt-1">
                  Demand grew rapidly. We moved to a 50,000 sq. ft. facility, allowing us to handle large-scale commercial projects without sacrificing detail.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[2px] bg-gradient-to-b from-transparent via-[#2bee79]/50 to-[#2bee79]/50 h-full min-h-[20px]"></div>
                <div className="text-[#2bee79] bg-[#2bee79]/10 rounded-full p-1">
                  <span className="material-symbols-outlined text-lg sm:text-xl">award_star</span>
                </div>
                <div className="w-[2px] bg-gradient-to-b from-[#2bee79]/50 to-transparent h-full grow min-h-[60px]"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-8">
                <p className="text-white text-lg sm:text-xl font-bold leading-normal">National Recognition</p>
                <p className="text-[#92c9a8] text-sm sm:text-base font-normal leading-normal mt-1">
                  Featured in "Modern Home" and "Architectural Digest" for our innovative pivot door mechanisms.
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[2px] bg-gradient-to-b from-transparent via-[#2bee79]/50 to-[#2bee79]/50 h-full min-h-[20px]"></div>
                <div className="text-[#2bee79] bg-[#2bee79]/10 rounded-full p-1">
                  <span className="material-symbols-outlined text-lg sm:text-xl">lightbulb</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-lg sm:text-xl font-bold leading-normal">Modern Innovation</p>
                <p className="text-[#92c9a8] text-sm sm:text-base font-normal leading-normal mt-1">
                  Today, we integrate thermal breaking technology and smart locks into traditional steel designs, marrying history with the future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Process (Split Screen) */}
        <div className="bg-[#1c2e24] py-12 sm:py-16 md:py-24">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full max-w-[1100px] px-4 sm:px-6 lg:px-10 gap-12 sm:gap-16 md:gap-24">
              <div className="flex flex-col gap-2 text-center mb-4">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">The Art of Steel</h2>
                <p className="text-gray-400 text-sm sm:text-base">From sketch to structure, perfection takes time.</p>
              </div>

              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16">
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl aspect-[4/3] group">
                    <img 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                      alt="Blueprint sketches of ornate door designs on a table"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK2mwg857rEyGeCR3Mf6pWRjp4kn2gxWIk1eGYdNEs--eWVSugOJWQQfj-bIV_6tmE-7H1H7Wt7lYsCBs_YLyklG6wv7Vkfv83CCxQVhdvzFR7SWB6jLjgHdyQ6ilBHXgO09A8kUCkiA9pFU6Ader5LmeFDAv9GS2I16eJoXVjHV1INCatPi1PcHraBX_a7K4fFmwoG8FR79extcka3zQDqhVSp1qVZ1Cv6plJ2V547ihVRA11ZfpEMsD0USsn50Rf8utXEnbapyg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <span className="bg-[#2bee79] text-[#112218] text-xs font-bold px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider">Step 01</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-white text-xl sm:text-2xl font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#2bee79]">design_services</span>
                    Custom Design
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Every project begins with a conversation. We work closely with homeowners and architects to draft detailed CAD drawings, ensuring every scroll and bar fits the architectural integrity of the home.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 md:gap-16">
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl aspect-[4/3] group">
                    <img 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                      alt="Close up of sparks flying while welding steel"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0nrhOP4pMeFD_evowDDzyCiGnhnasNg1qLfe5ghHR20_f1b9TvNkY1a5ffbbH-GwLkU8M6tYC_N6KojHu7NlIzal_5h-sWkx3oBmZit3y_TFYU1_Y3_FLdSbx-NXx-C-3sw9_bcJO1oq4HnSg7z5Piq-RUknlCb49AGP57dv1UR-GxLXiog3Fbjiqz4XQio6T0rsR1gVS4zFvMR8TLw-GRHE7LE9_aag87N_TKYQ1uEzEZfVDJNkzmmCUcfA6eqVjx9olY31XaUw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
                      <span className="bg-[#2bee79] text-[#112218] text-xs font-bold px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider">Step 02</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4 text-left md:text-right">
                  <h3 className="text-white text-xl sm:text-2xl font-bold flex items-center gap-3 md:flex-row-reverse">
                    <span className="material-symbols-outlined text-[#2bee79]">handyman</span>
                    Hand Forging
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Our master metalsmiths heat, hammer, and weld raw steel into intricate shapes. This isn't mass production; it's art. Each weld is inspected, ground smooth, and prepared for our 7-stage finishing process.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16">
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl aspect-[4/3] group">
                    <img 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                      alt="A modern home entrance with a large sleek black steel door installed"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2MTvV1FJw_6w4e4HNEiUMaRR4DdL-xPgpyt9ovAaPFdjCUWgGURr5_-mYiDx-jEV3Py1ampZJaSkAwJ_GV0jY9_2GSqr2mzgDjpwiTbjLAgHlfOCsYnaBfRH3kY797HATBzzsWH0on2BonsD9pIbwpZx6CN7m_umglLpgFIlkcvFZ9j07MNdi2IUk3672zGG913VzcvRNSYEpoTMhYcNjtXfcPK0HxXyIwlHSoUBvP_ou6x7kNO-k92DVuk6nA0YnFqkWHehuHLI"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <span className="bg-[#2bee79] text-[#112218] text-xs font-bold px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider">Step 03</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-white text-xl sm:text-2xl font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#2bee79]">door_sliding</span>
                    Installation & Finish
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    We treat the installation with as much care as the fabrication. Our team ensures a weather-tight fit, smooth operation, and leaves your entryway cleaner than when we arrived.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="flex flex-col items-center py-12 sm:py-16 md:py-20 bg-[#112218]">
          <div className="flex flex-col w-full max-w-[960px] px-4 sm:px-6 lg:px-10">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center mb-8 sm:mb-12">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Value 1 */}
              <div className="bg-[#1c2e24] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-[#2bee79]/50 transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#112218] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#2bee79] group-hover:text-[#112218] transition-colors text-[#2bee79]">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <h3 className="text-white text-base sm:text-lg font-bold mb-2">Security</h3>
                <p className="text-xs sm:text-sm text-gray-400">Heavy-gauge steel and premium locking mechanisms keep your family safe.</p>
              </div>

              {/* Value 2 */}
              <div className="bg-[#1c2e24] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-[#2bee79]/50 transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#112218] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#2bee79] group-hover:text-[#112218] transition-colors text-[#2bee79]">
                  <span className="material-symbols-outlined">hand_bones</span>
                </div>
                <h3 className="text-white text-base sm:text-lg font-bold mb-2">Handmade</h3>
                <p className="text-xs sm:text-sm text-gray-400">No automated assembly lines. Real hands shaping real metal.</p>
              </div>

              {/* Value 3 */}
              <div className="bg-[#1c2e24] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-[#2bee79]/50 transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#112218] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#2bee79] group-hover:text-[#112218] transition-colors text-[#2bee79]">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <h3 className="text-white text-base sm:text-lg font-bold mb-2">Lifetime Warranty</h3>
                <p className="text-xs sm:text-sm text-gray-400">We stand behind our structure and finish for the life of the home.</p>
              </div>

              {/* Value 4 */}
              <div className="bg-[#1c2e24] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-[#2bee79]/50 transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#112218] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#2bee79] group-hover:text-[#112218] transition-colors text-[#2bee79]">
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <h3 className="text-white text-base sm:text-lg font-bold mb-2">Efficiency</h3>
                <p className="text-xs sm:text-sm text-gray-400">Thermal breaks and foam insulation ensure beauty doesn't cost energy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="relative w-full py-12 sm:py-16 md:py-20 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'linear-gradient(rgba(16, 34, 23, 0.9), rgba(16, 34, 23, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG1LYRHQE2ayoZ31y7C0c_V2Ib91dNz2IAyAspx12k6ZsrP6XmKoxDqOPxpZOk588hheDcTilV7gkKj0DQbIHIDWcFSZQZFq8PQtmugoP9Afw1NUqyZZFsqYGoGNHtVjlbo2DXAX7LRna6sd_MHheTuYsN6ZYQr5ojBrjAHf4DWUWvWdn8mbqUyUKVSOVmm5pLu4MRLXkI3b_59T2KNDhUdbGmKSrFAEJmwBI8XBBFDvqwu4gcrzR1xnlVH9iUeKg7sGVj1nsn4N4")'
          }}
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full max-w-[800px] px-4 sm:px-6 text-center">
              <span className="material-symbols-outlined text-[#2bee79] text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 opacity-50">format_quote</span>
              <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-light italic leading-normal mb-6 sm:mb-8">
                "The door completely changed the curb appeal of our house. It's heavy, solid, and operates incredibly smoothly. The installation team was professional and meticulous."
              </h2>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-600">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Portrait of a smiling man"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxp8XVYyWuCra2jwms5TUHeOJ8JYJ3GiUlBXMKmtD8mljKgyptoP9yqH31C8HoputXBYS5Mv_dGwbtzx1kxOvcKrURn34ajCZrPeZ23XpStePrKg7MwTJYCzulvkrrET1jpMXFgtNekEibESWMtmShewLlAHfAvn_mhJHxnrp3PHYF3REtPbFuCdUSrW6Aj9E8RVRI5Qm94-YoWy1FpQ1Iz3jgevWKo17lSxW8uC_wJh8xSnpQ6-wl_i5d2s8bPAC84WLxIndNoQc"
                    loading="lazy"
                  />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm sm:text-base">Michael R.</p>
                  <p className="text-[#2bee79] text-xs sm:text-sm">Austin, TX</p>
                </div>
              </div>
              <div className="flex gap-2 justify-center mt-8 sm:mt-10">
                <div className="h-1.5 w-1.5 rounded-full bg-[#2bee79]"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
         <footer className="bg-black text-white py-8 sm:py-12 border-t border-[#234832]">
                             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                                 {/* Brand */}
                                 <div className="col-span-1 md:col-span-1">
                                   <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                     <div className="flex size-7 sm:size-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                                       <span className="material-symbols-outlined text-base sm:text-lg">door_front</span>
                                     </div>
                                     <Link to="/" className="text-base sm:text-lg font-bold">Alamo Steel Doors</Link>
                                   </div>
                                   <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                                     Hand-forged steel doors that define luxury and security. Elevate your entrance today.
                                   </p>
                                   <div className="flex gap-3 sm:gap-4">
                                     
                                      
                                   
                                   </div>
                                 </div>
               
                                 {/* Portfolio Links */}
                                 <div>
                                   
                                 </div>
               
                                 {/* Company Links */}
                                 <div>
                                   <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
                                   <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                 <li><Link to="/About" className="hover:text-primary transition-colors">About Us</Link></li>
                 <li><Link to="/Contact" className="hover:text-primary transition-colors">Contact</Link></li>
                 <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
               </ul>
                                 </div>
               
                                 {/* Contact Info */}
                                 <div>
                                   <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
                                   <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                                     <li className="flex items-start gap-2">
                                       <span className="material-symbols-outlined text-primary text-sm sm:text-base mt-0.5">location_on</span>
                                       <span>123 Forge Avenue,<br/>Austin, TX 78701</span>
                                     </li>
                                     <li className="flex items-center gap-2">
                                       <span className="material-symbols-outlined text-primary text-sm sm:text-base">call</span>
                                       (555) 123-4567
                                     </li>
                                     <li className="flex items-center gap-2">
                                       <span className="material-symbols-outlined text-primary text-sm sm:text-base">mail</span>
                                       hello@alamosteeldoors.com
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                               
                               {/* Footer Bottom */}
                               <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                                 <p className="text-gray-500 text-xs sm:text-sm">© 2025 Alamo Steel Doors. All rights reserved.</p>
                                 <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                                   <a className="hover:text-white" href="#">Privacy Policy</a>
                                   <a className="hover:text-white" href="#">Terms of Service</a>
                                 </div>
                               </div>
                             </div>
                           </footer>
      </div>

      {/* Modal Contact Form */}
      <ModalContactForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default About;