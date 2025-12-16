// components/Contact.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalContactForm from './Modalcontactform';

const Contact = () => {
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
          
          @keyframes ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          .animate-ping {
            animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `
      }} />
      
      <div className="relative flex w-full flex-col bg-[#112218]">
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
                className="text-sm font-medium leading-normal text-[#2bee79] hover:text-green-400 transition-colors px-3 py-2"
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
                  className="block px-4 py-3 text-[#2bee79] text-sm font-medium leading-normal hover:text-green-400 transition-colors border-t border-[#234832]"
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

        {/* Main Content Wrapper */}
        <main className="flex flex-col items-center justify-center w-full">
          {/* Hero / Intro Section */}
          <div className="relative w-full overflow-hidden">
            {/* Background with texture overlay */}
            <div 
              className="absolute inset-0 z-0 opacity-40"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXWlwQW3v97XyBfrD2uOm4ZsNUTXtGpOam_pqVgNUj0vcwfaKu_Ow_gPz5qYISO5ozEKUHLs0LmAeXNES_7JvPz8CFNw8ffMNw3hYS3rb7AuJQKn4EIHEyoOqApa2pmwMaRPHj-XJlNaHVVSuirqqt9IlTaBpAGvCXnvc1lVsklhTca4BP8QayVSS59NWKQG3qa5PMRHjFMQCTEYTo6sKFAJ1eM6X5R32RpyFM5EN_VdpTTwrTPq0NVvotWexdL59YdoSig2NlL30")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            {/* Radial Gradient for spotlight effect */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#112218]"></div>
            <div className="absolute inset-0 z-0 bg-gradient-radial from-[#2bee79]/5 to-transparent opacity-50"></div>
            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 text-center animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-3 sm:mb-4 px-2">
                Let's Build Your <span className="text-[#2bee79]">Entrance.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light px-4">
                Have a custom design in mind? Whether it's a grand double entry or a sleek modern pivot door, contact us for a free quote on your dream steel door.
              </p>
            </div>
          </div>

          {/* Split Content Section: Contact Info & Form */}
          <div className="w-full max-w-[1280px] px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
            {/* Left Column: Contact Details & Map */}
            <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 order-2 lg:order-1">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg border border-[#234832] bg-[#193324] hover:border-[#2bee79]/50 transition-colors">
                  <div className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-[#2bee79]/20 text-[#2bee79] group-hover:bg-[#2bee79] group-hover:text-[#112218] transition-colors">
                    <span className="material-symbols-outlined text-lg sm:text-xl">call</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Phone</p>
                    <h3 className="text-base sm:text-lg font-bold">(555) 123-4567</h3>
                  </div>
                </div>
                <div className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg border border-[#234832] bg-[#193324] hover:border-[#2bee79]/50 transition-colors">
                  <div className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-[#2bee79]/20 text-[#2bee79] group-hover:bg-[#2bee79] group-hover:text-[#112218] transition-colors">
                    <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email</p>
                    <h3 className="text-base sm:text-lg font-bold">sales@alamosteeldoors.com</h3>
                  </div>
                </div>
                <div className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg border border-[#234832] bg-[#193324] hover:border-[#2bee79]/50 transition-colors">
                  <div className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-[#2bee79]/20 text-[#2bee79] group-hover:bg-[#2bee79] group-hover:text-[#112218] transition-colors">
                    <span className="material-symbols-outlined text-lg sm:text-xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Showroom</p>
                    <h3 className="text-base sm:text-lg font-bold">123 Forge Avenue, Austin, TX</h3>
                  </div>
                </div>
              </div>

              {/* Map Integration (Visual Placeholder) */}
              <div className="relative w-full h-[250px] sm:h-[300px] rounded-lg overflow-hidden border border-[#234832] group">
                <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                <img 
                  alt="Map of Austin Texas location" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAruL7MmCXTuYOtvTKKJ0lZPL54B_Dvk-Q6tTJHI6M63M8_zVhS00DvaInR2sSYoUlo8JApQiuxTewnXSQAgSofWpjCNCsOQxUfVWoyoZqR3uNYCV-0101c3hNIzIHNcMt9_AXqHBxpADoKOjEkOR0OigUccdPlMrRa28yYJ67plTNVkK0d_98g4Ft0KtG5JUQq1mvlFWMkDyhXEMkneMxtwqLutoHxkgWj0Qgy9gEhpSGWJjIEF1uZrItQznr3yEMZmt7SRylTWIo"
                  loading="lazy"
                />
                {/* Custom Map Pin Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative flex h-6 w-6 sm:h-8 sm:w-8">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2bee79] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 sm:h-8 sm:w-8 bg-[#2bee79] border-3 sm:border-4 border-[#112218]"></span>
                  </div>
                  <div className="mt-1 sm:mt-2 bg-[#112218] px-2 sm:px-3 py-1 rounded-full border border-[#2bee79]/30 shadow-lg">
                    <span className="text-xs font-bold text-white">We are here</span>
                  </div>
                </div>
              </div>

              {/* Trust Bar */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 sm:pt-4 text-gray-400 text-xs sm:text-sm">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="material-symbols-outlined text-[#2bee79] text-[18px] sm:text-[20px]">verified</span>
                  <span>Free Quotes</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="material-symbols-outlined text-[#2bee79] text-[18px] sm:text-[20px]">schedule</span>
                  <span>24h Response</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="material-symbols-outlined text-[#2bee79] text-[18px] sm:text-[20px]">security</span>
                  <span>Lifetime Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-[#1c3024] rounded-lg border border-[#2b503a] p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mr-8 sm:-mr-16 -mt-8 sm:-mt-16 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#2bee79]/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send us a message</h2>
                  <form className="flex flex-col gap-4 sm:gap-6">
                    {/* Name & Email Row */}
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                      <label className="flex flex-col flex-1 gap-1 sm:gap-2">
                        <span className="text-sm font-medium text-gray-300 ml-1">Your Name</span>
                        <input 
                          className="w-full rounded-full bg-[#112218] border border-[#326747] text-white px-4 sm:px-5 py-2.5 sm:py-3 focus:ring-2 focus:ring-[#2bee79] focus:border-transparent outline-none transition-all placeholder:text-[#5c856e]" 
                          placeholder="John Doe" 
                          type="text"
                        />
                      </label>
                      <label className="flex flex-col flex-1 gap-1 sm:gap-2">
                        <span className="text-sm font-medium text-gray-300 ml-1">Email Address</span>
                        <input 
                          className="w-full rounded-full bg-[#112218] border border-[#326747] text-white px-4 sm:px-5 py-2.5 sm:py-3 focus:ring-2 focus:ring-[#2bee79] focus:border-transparent outline-none transition-all placeholder:text-[#5c856e]" 
                          placeholder="john@example.com" 
                          type="email"
                        />
                      </label>
                    </div>

                    {/* Phone & Type Row */}
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                      <label className="flex flex-col flex-1 gap-1 sm:gap-2">
                        <span className="text-sm font-medium text-gray-300 ml-1">Phone Number</span>
                        <input 
                          className="w-full rounded-full bg-[#112218] border border-[#326747] text-white px-4 sm:px-5 py-2.5 sm:py-3 focus:ring-2 focus:ring-[#2bee79] focus:border-transparent outline-none transition-all placeholder:text-[#5c856e]" 
                          placeholder="(555) 000-0000" 
                          type="tel"
                        />
                      </label>
                      <label className="flex flex-col flex-1 gap-1 sm:gap-2">
                        <span className="text-sm font-medium text-gray-300 ml-1">Project Type</span>
                        <div className="relative">
                          <select className="w-full appearance-none rounded-full bg-[#112218] border border-[#326747] text-white px-4 sm:px-5 py-2.5 sm:py-3 pr-8 sm:pr-10 focus:ring-2 focus:ring-[#2bee79] focus:border-transparent outline-none transition-all text-sm sm:text-base">
                            <option>Single Steel Door</option>
                            <option>Double Steel Door</option>
                            <option>Pivot Door</option>
                            <option>French Door</option>
                            <option>Custom Railing/Gate</option>
                            <option>Other</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 sm:px-4 text-gray-500">
                            <span className="material-symbols-outlined text-lg sm:text-xl">expand_more</span>
                          </div>
                        </div>
                      </label>
                    </div>

                    {/* Message */}
                    <label className="flex flex-col gap-1 sm:gap-2">
                      <span className="text-sm font-medium text-gray-300 ml-1">Message Details</span>
                      <textarea 
                        className="w-full rounded-[2rem] bg-[#112218] border border-[#326747] text-white px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-[#2bee79] focus:border-transparent outline-none transition-all placeholder:text-[#5c856e] resize-none" 
                        placeholder="Tell us about your project, dimensions, or style preferences..." 
                        rows="4"
                      ></textarea>
                    </label>

                    {/* Submit Button */}
                    <div className="pt-1 sm:pt-2">
                      <button 
                        className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#2bee79] h-12 sm:h-14 px-6 sm:px-8 text-[#112218] text-sm sm:text-base font-bold leading-normal tracking-[0.015em] transition-all hover:bg-green-400 hover:shadow-[0_0_20px_rgba(43,238,121,0.6)] active:scale-[0.99]" 
                        type="button"
                      >
                        <span className="truncate relative z-10">Start Your Project</span>
                        <div className="absolute right-4 sm:right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ease-out z-10">
                          <span className="material-symbols-outlined font-bold">arrow_forward</span>
                        </div>
                      </button>
                      <p className="text-center text-xs text-gray-400 mt-3 sm:mt-4">
                        By submitting this form, you agree to our privacy policy.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
      </div>

      {/* Modal Contact Form */}
      <ModalContactForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Contact;