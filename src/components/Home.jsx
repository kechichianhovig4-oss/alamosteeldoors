// components/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalContactForm from './Modalcontactform';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
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
      
      {/* Inline Tailwind v4 Theme Configuration */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import "tailwindcss";
          
          @theme {
            --color-primary: #2bee79;
            --color-background-light: #f6f8f7;
            --color-background-dark: #112218;
            --color-surface-dark: #193324;
            --color-surface-light: #ffffff;
            
            --font-display: "Spline Sans", "sans-serif";
            
            --radius-default: 1rem;
            --radius-lg: 2rem;
            --radius-xl: 3rem;
            --radius-full: 9999px;
            
            --background-image-gradient-radial: radial-gradient(var(--tw-gradient-stops));
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out;
          }
        `
      }} />
      
      <div className="dark min-h-screen">
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 antialiased overflow-x-hidden">
          <div className="relative flex w-full flex-col">
            {/* Header - Responsive */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-[#234832] px-4 sm:px-6 lg:px-10 py-3 sm:py-4 bg-background-light dark:bg-[#112218] z-50 sticky top-0">
              <div className="flex items-center gap-2 sm:gap-4 text-gray-900 dark:text-white">
                <div className="w-5 h-5 sm:size-6 text-primary">
                  <svg className="fill-current w-full h-full" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
                  </svg>
                </div>
                <Link to="/" className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
                  Alamo Steel Doors
                </Link>
              </div>
              <div className="flex flex-1 justify-end gap-4 sm:gap-8 items-center">
                {/* Mobile menu button */}
                <button 
                  onClick={toggleMobileMenu}
                  className="md:hidden flex items-center justify-center size-8 text-gray-900 dark:text-white"
                >
                  <span className="material-symbols-outlined text-xl">
                    {isMobileMenuOpen ? 'close' : 'menu'}
                  </span>
                </button>
                
                {/* Desktop Navigation with React Router Links */}
                <div className="hidden md:flex items-center gap-6 lg:gap-9">
                  <Link 
                    to="/" 
                    className="text-sm font-medium leading-normal text-primary hover:text-green-400 transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/Portfolio" 
                    className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                  >
                    Portfolio
                  </Link>
                  <Link 
                    to="/About" 
                    className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link 
                    to="/faq" 
                    className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link 
                    to="/help-center" 
                    className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                  >
                    Help Center
                  </Link>
                  <Link 
                    to="/Contact" 
                    className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </div>
                <div className="hidden md:block">
                  <button 
                    onClick={openModal}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 sm:h-10 px-4 sm:px-6 bg-primary text-[#112218] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-400 transition-all hover:shadow-[0_0_15px_rgba(43,238,121,0.5)]"
                  >
                    <span className="truncate">Get a Quote</span>
                  </button>
                </div>
              </div>
            </header>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-background-light dark:bg-[#112218] border-b border-solid border-gray-200 dark:border-[#234832] px-4 py-3`}>
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className="text-sm font-medium leading-normal py-2 text-primary hover:text-green-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/Portfolio" 
                  className="text-sm font-medium leading-normal py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link 
                  to="/About" 
                  className="text-sm font-medium leading-normal py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/faq" 
                  className="text-sm font-medium leading-normal py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/help-center" 
                  className="text-sm font-medium leading-normal py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Help Center
                </Link>
                <Link 
                  to="/Contact" 
                  className="text-sm font-medium leading-normal py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-2">
                  <button 
                    onClick={() => {
                      openModal();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-[#112218] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-400 transition-all"
                  >
                    <span className="truncate">Get a Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex flex-col items-center justify-center w-full">
            {/* Hero Section */}
            <div className="relative w-full overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center">
              <div className="absolute inset-0 z-0" style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXWlwQW3v97XyBfrD2uOm4ZsNUTXtGpOam_pqVgNUj0vcwfaKu_Ow_gPz5qYISO5ozEKUHLs0LmAeXNES_7JvPz8CFNw8ffMNw3hYS3rb7AuJQKn4EIHEyoOqApa2pmwMaRPHj-XJlNaHVVSuirqqt9IlTaBpAGvCXnvc1lVsklhTca4BP8QayVSS59NWKQG3qa5PMRHjFMQCTEYTo6sKFAJ1eM6X5R32RpyFM5EN_VdpTTwrTPq0NVvotWexdL59YdoSig2NlL30")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3
              }}></div>
              
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background-dark/70 to-background-dark"></div>
              <div className="absolute inset-0 z-0 bg-gradient-radial from-primary/10 to-transparent opacity-40"></div>
              
              <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-4 sm:mb-6 animate-fade-in-up">
                  <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Handcrafted Perfection</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-[-0.033em] mb-4 sm:mb-6 text-white px-2">
                  Make a Grand <br className="hidden sm:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Entrance.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-6 sm:mb-10 px-4">
                  Elevate your home's aesthetic and security with our custom-designed steel doors. 
                  Merging timeless elegance with modern durability.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                  <Link 
                    to="/Portfolio"
                    className="flex w-full sm:w-auto min-w-[140px] sm:min-w-[160px] h-12 sm:h-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-6 sm:px-8 text-[#112218] text-base font-bold tracking-[0.015em] hover:bg-green-400 transition-all hover:shadow-[0_0_25px_rgba(43,238,121,0.6)] hover:-translate-y-1"
                  >
                    Explore Our Designs
                  </Link>
                  <button 
                    onClick={openModal}
                    className="flex w-full sm:w-auto min-w-[140px] sm:min-w-[160px] h-12 sm:h-14 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-gray-600 px-6 sm:px-8 text-white text-base font-bold tracking-[0.015em] hover:border-primary hover:text-primary transition-all hover:-translate-y-1 bg-white/10 backdrop-blur-sm"
                  >
                    Get a Free Quote
                  </button>
                </div>
              </div>
              
              <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">keyboard_arrow_down</span>
              </div>
            </div>

            {/* Features Section */}
            <div className="w-full bg-[#152a1e] py-16 sm:py-24 border-y border-[#1e3a2b]">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">Why Choose Alamo Steel?</h2>
                  <div className="h-1 w-16 sm:w-20 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {[
                    {
                      icon: 'verified_user',
                      title: 'Unmatched Security',
                      desc: 'Heavy-duty 12-gauge steel construction ensures maximum protection for your home and family.'
                    },
                    {
                      icon: 'design_services',
                      title: 'Custom Design',
                      desc: 'From modern pivot doors to classic scrolls, we bring your unique vision to life.'
                    },
                    {
                      icon: 'energy_savings_leaf',
                      title: 'Energy Efficient',
                      desc: 'Thermal breaks and dual-pane tempered glass keep your home insulated and comfortable.'
                    },
                    {
                      icon: 'build',
                      title: 'Easy Installation',
                      desc: 'Pre-hung units with integrated thresholds make installation straightforward and precise.'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="group p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-[#112218] border border-[#234832] hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="size-10 sm:size-12 lg:size-14 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-[#112218] transition-colors">
                        <span className="material-symbols-outlined text-2xl sm:text-3xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* REST OF YOUR CODE CONTINUES HERE... */}

            {/* Features Section */}
            <div className="w-full bg-[#152a1e] py-16 sm:py-24 border-y border-[#1e3a2b]">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">Why Choose Alamo Steel?</h2>
                  <div className="h-1 w-16 sm:w-20 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {[
                    {
                      icon: 'verified_user',
                      title: 'Unmatched Security',
                      desc: 'Heavy-duty 12-gauge steel construction ensures maximum protection for your home and family.'
                    },
                    {
                      icon: 'design_services',
                      title: 'Custom Design',
                      desc: 'From modern pivot doors to classic scrolls, we bring your unique vision to life.'
                    },
                    {
                      icon: 'energy_savings_leaf',
                      title: 'Energy Efficient',
                      desc: 'Thermal breaks and dual-pane tempered glass keep your home insulated and comfortable.'
                    },
                    {
                      icon: 'build',
                      title: 'Easy Installation',
                      desc: 'Pre-hung units with integrated thresholds make installation straightforward and precise.'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="group p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-[#112218] border border-[#234832] hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="size-10 sm:size-12 lg:size-14 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-[#112218] transition-colors">
                        <span className="material-symbols-outlined text-2xl sm:text-3xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Portfolio Section */}
            <div className="w-full py-16 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
                <div>
                  <span className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 block">Our Portfolio</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">Popular Collections</h2>
                </div>
                <Link 
                  to="/Portfolio" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-primary transition-colors font-medium"
                >
                  View Full Gallery 
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    title: 'Modern Pivot',
                    desc: 'Statement pieces with clean lines and contemporary flair.',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJVyk4AWhRTcRn1k9o2i-0r_oPyLhQ7kX6XjAj1o8mM55EBBW4u95IA9PVMR_RJ6KwGFJydw6ugoseJ68z0xhvY4fRB3WExgRzWvhF4p6Zod5dJ3Nz9WTCjznN2ixzqA7Nb8DTUygT_mZ4YxF1ZEVPqXlfgQ1oGAcauB-ilWynlHFWt_KQVP6S14BKlLJb7BMsyH6YrE3k2o5NPQvidSgh9AzN92sVVMLpzg76UFwg-wKQ3epm_57hmZ4BcNAdEnKmdLQ8YOiscZU'
                  },
                  {
                    title: 'Traditional Double',
                    desc: 'Classic wrought steel scrollwork for a majestic entrance.',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSe3ZxsetUv7aQQRlNpzmLMwngkUE7-mLaN49AVSgYoVhqHl_LWD0xMAZO2gNfZhNow6c5qt2b-kMgdy-y1NIwA1Mb4aQ_tpp7B12Oe_JF-1uAniph8F3P83A3TtgZnBF9WN0UuqKYw2UIohJAOt5pQ84rfTevoIBnTmmKSbdF1Ooh1EsrelqNkIibqBAvSlbJiwTQ89tYLs2rZ0IqNwFVOnyaLA4YuJzyDyAJAKhKDlLYsrNQcwDgy2bnAkgBFkLpaheKQ8kYKG4'
                  },
                  {
                    title: 'Custom Gates',
                    desc: 'Secure your perimeter with style and custom sizing.',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdwEXPNxryFSOxPuZUUVTlXPKQmlMPFajoNoRbL0SMc6VL72k14r3WttcDi45vFnfZIUVZgRdp3tFX7r4e4VxB-K6QKtOfgzALkSFuNBlGmGGySH9UmPr9vJSRdGhXdSy8ee6swpyq3wYNjYnz_A3fze5BJJYYJnZjbm-aYzkC6T3ctOotKXuKuaLhJTo4ywC-XT6oEXAbUQVz5kUHL4aMERpTHHM83rR0tnTrhzp6JdWEpG6OpjNSdpj-Yao0RnONKnTHVw7WCl4'
                  }
                ].map((item, index) => (
                  <Link 
                    key={index} 
                    to="/Portfolio" 
                    className="group relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-[#193324] block"
                  >
                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                      <img 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                        src={item.image}
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent/10"></div>
                    <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8 w-full">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                        {item.desc}
                      </p>
                      
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="w-full bg-[#0c1610] py-16 sm:py-24 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#234832] to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-8 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">Trusted by Homeowners</h2>
                  <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
                    See what our customers have to say about their experience with Alamo Steel Doors.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {[
                    {
                      name: 'James Davidson',
                      location: 'Austin, TX',
                      initials: 'JD',
                      quote: '"Absolutely transformed the look of our house. The team was professional, and the door quality is incredible. Highly recommend!"'
                    },
                    {
                      name: 'Sarah Lopez',
                      location: 'San Antonio, TX',
                      initials: 'SL',
                      quote: '"The custom design process was seamless. They understood exactly what we wanted for our pivot door. It\'s the talk of the neighborhood."'
                    },
                    {
                      name: 'Michael Ross',
                      location: 'Dallas, TX',
                      initials: 'MR',
                      quote: '"Heavy, solid, and secure. I feel much safer, and the curb appeal is unmatched. Great installation crew as well."'
                    }
                  ].map((testimonial, index) => (
                    <div key={index} className="bg-[#112218] p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-[#234832]">
                      <div className="flex text-amber-400 mb-3 sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 sm:mb-6 italic text-sm sm:text-base">{testimonial.quote}</p>
                      <div className="flex items-center gap-3">
                        <div className="size-8 sm:size-10 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white">
                          {testimonial.initials}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white">{testimonial.name}</h4>
                          <p className="text-xs text-gray-400">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="w-full relative py-12 sm:py-16 lg:py-20 bg-[#112218] overflow-hidden">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                <img 
                  alt="Background texture" 
                  className="w-full h-full object-cover grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAruL7MmCXTuYOtvTKKJ0lZPL54B_Dvk-Q6tTJHI6M63M8_zVhS00DvaInR2sSYoUlo8JApQiuxTewnXSQAgSofWpjCNCsOQxUfVWoyoZqR3uNYCV-0101c3hNIzIHNcMt9_AXqHBxpADoKOjEkOR0OigUccdPlMrRa28yYJ67plTNVkK0d_98g4Ft0KtG5JUQq1mvlFWMkDyhXEMkneMxtwqLutoHxkgWj0Qgy9gEhpSGWJjIEF1uZrItQznr3yEMZmt7SRylTWIo"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#112218] to-transparent"></div>
              
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">Ready to Transform Your Home?</h2>
                  <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8">
                    Get in touch with our design specialists today for a consultation and free quote on your dream steel door.
                  </p>
                  <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                    {['Free CAD Drawings', 'Nationwide Shipping', 'Lifetime Warranty'].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm sm:text-base">check_circle</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-0">
                  <button 
                    onClick={openModal}
                    className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-10 text-[#112218] text-sm sm:text-base lg:text-lg font-bold leading-normal tracking-[0.015em] transition-all hover:bg-green-400 hover:shadow-[0_0_20px_rgba(43,238,121,0.6)] active:scale-[0.99]"
                  >
                    <span className="truncate relative z-10 mr-2">Start Your Project</span>
                    <span className="material-symbols-outlined font-bold relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Footer with React Router Links */}
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
          {/* Social icons would go here */}
        </div>
      </div>

      {/* Portfolio Links */}
      <div>
        {/* Note: This section is intentionally left empty to match Portfolio component */}
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
      </div>

      {/* Modal Contact Form */}
      <ModalContactForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Home;