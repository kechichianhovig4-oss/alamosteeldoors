// components/Portfolio.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalContactForm from './Modalcontactform';

const Portfolio = () => {
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
    <div className="min-h-screen bg-[#112218] font-display text-gray-100">
      {/* Font imports */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;700&display=swap" 
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
          
          /* Custom hover effects */
          .hover-zoom {
            transition: transform 0.3s ease-in-out;
          }
          .group:hover .hover-zoom {
            transform: scale(1.05);
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #102217;
          }
          ::-webkit-scrollbar-thumb {
            background: #2bee79;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #23c563;
          }
          
          /* Hide scrollbar for filter buttons */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
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
                className="text-sm font-medium leading-normal text-[#2bee79] hover:text-green-400 transition-colors px-3 py-2"
              >
                Portfolio
              </Link>
              <Link 
                to="/About" 
                onClick={() => handleNavClick('/About')}
                className="text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors px-3 py-2"
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
                  className="block px-4 py-3 text-[#2bee79] text-sm font-medium leading-normal hover:text-green-400 transition-colors border-t border-[#234832]"
                >
                  Portfolio
                </Link>
                <Link 
                  to="/About" 
                  onClick={() => handleNavClick('/About')}
                  className="block px-4 py-3 text-white text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors border-t border-[#234832]"
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

        {/* Main Content */}
        <main className="flex-1 bg-[#112218]">
          {/* Hero Section */}
          <section className="relative">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] relative overflow-hidden">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'linear-gradient(rgba(16, 34, 23, 0.7) 0%, rgba(16, 34, 23, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcgtErFOcB399kokg6F0Wvcfi0R6ybcvvn_TKw6zyNNzBkO3LWQv8iABMCSHZCCqzUXeRGpyYRxepr0YHFqHems1iot3ARGlq5MHtx2pPgMEGkRbEepf9A0_n_wDCyJoOZPBTYIUb6x04pSdUHHkEkrVo2W8iIUjdPf1MbE9JXScRmGhlCB01qbkPaOKYdOd7mMmIjjBjMcd8F8j-kafgc0FnTRqThCVnp7VGwmZsa_gRwTAIglOZ9E7lC1p3qxCaocBlO2LPavao")'
                }}
              ></div>
              
              <div className="relative z-10 flex flex-col gap-4 sm:gap-6 text-center max-w-4xl mx-auto animate-fade-in-up">
                <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit mx-auto">
                  <span className="w-2 h-2 rounded-full bg-[#2bee79] animate-pulse"></span>
                  <span className="text-xs font-medium text-white tracking-wide uppercase">Portfolio Gallery</span>
                </div>
                
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-[-0.033em] px-2">
                  Masterpieces in Steel
                </h1>
                
                <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto px-4">
                  Explore our curated portfolio of custom hand-forged steel doors. From grand entrances to intimate wine cellars, every piece tells a story of craftsmanship.
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button 
                    onClick={openModal}
                    className="flex h-11 sm:h-12 items-center justify-center rounded-full bg-[#2bee79] px-6 sm:px-8 text-[#112218] text-sm sm:text-base font-bold transition hover:bg-[#25cc68]"
                  >
                    Start Your Project
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Portfolio Section Title */}
          <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#112218]">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-3 sm:mb-4">
                  Featured Projects
                </h2>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                  Discover our handcrafted steel doors that combine timeless elegance with modern durability
                </p>
              </div>
            </div>
          </section>
          
          {/* Gallery Grid */}
          <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#112218]">
            <div className="mx-auto max-w-7xl">
              {/* Masonry-like Layout using Columns */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                {/* Gallery Items */}
                {[
                  {
                    category: "Classical",
                    title: "The Kensington Estate",
                    location: "Austin, TX",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8r1yusdY4YwDlroyolGlbWpNMUzVZnKi3yvR0y4lEpuyk0Cw0IFVPf6qHezWm0TOb27tPz5O8DBiZuu5DU6opccymevUriC1qAtg7zkfvYVykSyDBNQJLenFhPGymJLe56YXwFR6PrLbeLlhLfBUZ34POGTt9D8eJTAdYv-g4jUK28I3C1u8aSyNspNxHW3b9XovXT_jX48fFOITEZYnd9mCZCxe-et-2LtxWdpRF0mmkgIXZt5Sz6NPiGPzaqjbKaPQ6z9-Gxl0",
                    aspect: "aspect-[3/4]"
                  },
                  {
                    category: "Modern",
                    title: "Minimalist Pivot",
                    location: "Los Angeles, CA",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7JC1YL0LtLC17EbVgFyQNiD-PIkz91GFWJ34yFgCTaXyEnrP4fYTWTJM84mLCI5k6Smt-pnWM8GHLUQxwmu-ew8-LozpXmzUsCx_7FvN0rxPSYn1QBa8BBTSdNfQw1cRsTztkvpXuJ7SIyJcQS38NR3i32NqOnBXJB_V581Y_2cqZV6SwkT5yxHMRuMb5umAMNBBnpm7ZUh_bSezD9kWdAyx7O3Niq38rvqISQZ3ODaFMrjXKEcDAVjquTN0ebLq6HB4n0-h_oaA",
                    aspect: "aspect-[4/3]"
                  },
                  {
                    category: "Interior",
                    title: "Vintage Wine Cellar",
                    location: "Napa Valley, CA",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRHoSiWrygeoagbOxObGhlcklN1UmKkeETX6qOddR6NNWXvMVe8apSNVtIbAzdF_mUEMAwadP_CMjqgjAFtAzNNT-2sO0LaA32y4XibTbrZw5DyfOj42ExAO4FtYbIU_AH3PQEl7PfT2UQ5zG3iH5sbRXSs8S-6UGKlhNBhVt6uc6Ev8WpsRkf__zRhOwIywlMlE8KxRl2DVp2fL8WFFMWPT9om2wpaZn_nAgiTIN4XdNIn7iNeuF6r_S4ZKOyup2Rvfy3nP-kk2I",
                    aspect: "aspect-[3/5]"
                  },
                  {
                    category: "Gates",
                    title: "Modern Farmhouse Entry",
                    location: "Dallas, TX",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVZKWt3C_5a_0mTkSSDyi9iwLw4flMpQOzeYR6htn80wQ_UZXnAro2TTUQlsBLs6cZ3z0FurJYcdOPHTJG2edtzePUgpFVxt4SG-DRViPgN9nt8ubkRY8SkrhNW3ezohoBtJA1k6ATmjs3MRePE_lssu-cF8wmKr_0ZX2dhYH2Ds4LvvgyW2P8ExhLfv_VezPFCWESnnD_ClaKJJtSdeK9Ys0LKUtxwJ0Zdf7iYfiDQweuXRdXCJeAgXlrC7Tsp0a9O-fbP-NQtvk",
                    aspect: "aspect-square"
                  },
                  {
                    category: "Traditional",
                    title: "Grand Archway",
                    location: "Chicago, IL",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-3Fuqkuuc54YcCVl9AIvb6oAhKGSp8G_6WecQ_-qp_pzI6zH7OJSnCnZJWI_KK3bvWeUqO8DPdf3vGc09Ehy9ZuykOnIfIeP4ck5oP6j4r8S23Kf5gbviwAbSuNyzpGp7_n0VuaThF4FdLMQZC3oPved33NIhqzBYmKDA0feODi7yQlNxFEhrh36gCvAo86-4KmDES20qMj8G1OiXNTLm-wtyZoPkNPj46xTllAwullsjXK5xpBrmbSrmr0BH_v8pgWFq4dsNNKY",
                    aspect: "aspect-[3/4]"
                  },
                  {
                    category: "Ornate",
                    title: "French Quarter Style",
                    location: "New Orleans, LA",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW3x5MKy8laWt7wTKjaHRGSds_Jk8GUO6Bd8vJ8EWQN3teDxW1H3kqSAnANhyfTpD-dZMMVBbGU2egnzulC9LCq9-UpwK1yCSn85rNOt7VvDtiB__REkRZCprixzeoh82V_muSia45XkQOIgErfhccChyyYZvQwNksSIu81kLlTaKQcImKJp7GvFL1IPd0ky5M_08oLo59sEVZM4mL6ZA6-aAdB3BNUOmF2Uj0KYIIpNid0Upk0cHKRH_YWPTTx0D9tDj0BsbZNbw",
                    aspect: "aspect-[4/5]"
                  }
                ].map((item, index) => (
                  <div key={index} className="break-inside-avoid group relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#1c3226] cursor-pointer">
                    <div className={`relative w-full overflow-hidden ${item.aspect}`}>
                      <div 
                        className="w-full h-full bg-center bg-cover transition-transform duration-700 hover-zoom"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      <button className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md p-1.5 sm:p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                        <span className="material-symbols-outlined text-lg sm:text-xl">open_in_full</span>
                      </button>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[#2bee79] text-xs font-bold uppercase tracking-wider mb-1">{item.category}</p>
                          <h3 className="text-white text-lg sm:text-xl font-bold leading-tight">{item.title}</h3>
                          <p className="text-gray-400 text-xs sm:text-sm mt-1 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px] sm:text-[14px]">location_on</span>
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Craftsmanship Interstitial */}
          <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#112218]">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
                <div className="w-full lg:w-1/2 relative">
                  <div 
                    className="aspect-video w-full rounded-xl sm:rounded-2xl bg-center bg-cover shadow-2xl overflow-hidden"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-oi8kmCklIfpv8rt2eqBcu40zLqI3KNLPW2dFbFt0ucCLOHujKTUFe_PjNYWmnoKUKs6wPb19ITUokvw_Bg4QQJlw_thaK7wlmf9XoeWndEBsmKTyLftlDMpkVXwAQOadNutoK608oVKzwnbFNgE-l_nIxQDFC6KmJeQ5r7vfeAaS1fue7Zu9E2n1mIDklatc1xVSt15swMnPDDeFsf67A_4ChbXYTz_MJTxHx-L73rQkR6AH_Hx2rJ9aj6g_G8CpbLG363wihHs")'
                    }}
                  ></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 hidden md:flex h-24 sm:h-28 md:h-32 w-24 sm:w-28 md:w-32 items-center justify-center rounded-full bg-[#2bee79] p-3 sm:p-4 text-center shadow-lg">
                    <p className="text-xs font-black uppercase leading-tight text-[#112218]">
                      Lifetime<br/>Warranty<br/>On Welds
                    </p>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 text-left">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="h-px w-6 sm:w-8 bg-[#2bee79]"></span>
                    <span className="text-[#2bee79] text-xs sm:text-sm font-bold uppercase tracking-widest">Uncompromising Quality</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                    Every weld is a testament to our art.
                  </h2>
                  
                  <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                    We don't just build doors; we forge first impressions. Our master craftsmen spend dozens of hours on a single piece, ensuring that every scroll, hinge, and lock is perfectly integrated.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button 
                      onClick={openModal}
                      className="bg-[#1c3226] text-white hover:bg-[#234832] transition-colors rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-lg">menu_book</span>
                     Download Catalog
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-8 sm:py-12 border-t border-[#234832]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Brand */}
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="flex size-7 sm:size-8 items-center justify-center rounded-full bg-[#2bee79]/20 text-[#2bee79]">
                    <span className="material-symbols-outlined text-base sm:text-lg">door_front</span>
                  </div>
                  <Link 
                    to="/" 
                    onClick={() => handleNavClick('/')}
                    className="text-base sm:text-lg font-bold"
                  >
                    Alamo Steel Doors
                  </Link>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  Hand-forged steel doors that define luxury and security. Elevate your entrance today.
                </p>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <li><Link to="/About" onClick={() => handleNavClick('/About')} className="hover:text-[#2bee79] transition-colors">About Us</Link></li>
                  <li><Link to="/Contact" onClick={() => handleNavClick('/Contact')} className="hover:text-[#2bee79] transition-colors">Contact</Link></li>
                  <li><Link to="/faq" onClick={() => handleNavClick('/faq')} className="hover:text-[#2bee79] transition-colors">FAQ</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#2bee79] text-sm sm:text-base mt-0.5">location_on</span>
                    <span>123 Forge Avenue,<br/>Austin, TX 78701</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2bee79] text-sm sm:text-base">call</span>
                    (555) 123-4567
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2bee79] text-sm sm:text-base">mail</span>
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

        {/* Sticky FAB (Mobile Only) */}
        <button 
          onClick={openModal}
          className="fixed bottom-6 right-6 z-50 flex md:hidden size-12 sm:size-14 items-center justify-center rounded-full bg-[#2bee79] text-[#112218] shadow-2xl hover:scale-110 transition-transform"
        >
          <span className="material-symbols-outlined text-xl sm:text-2xl">edit_note</span>
        </button>
      </div>

      {/* Modal Contact Form */}
      <ModalContactForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Portfolio;