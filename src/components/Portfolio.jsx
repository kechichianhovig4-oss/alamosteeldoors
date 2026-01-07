// components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalContactForm from './Modalcontactform';

const Portfolio = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('steel-doors');
  
  // Simplified categories with just two options
  const categories = [
    {
      id: 'steel-doors',
      name: 'Custom Steel Doors',
      shortName: 'Steel Doors',
      description: 'Handcrafted custom steel doors with modern and traditional designs'
    },
    {
      id: 'pivot-doors',
      name: 'Pivot Steel Doors',
      shortName: 'Pivot Doors',
      description: 'Contemporary single-pivot entry doors with clean geometric designs'
    }
  ];

  // City names for labeling the images (near Saint Hedwig)
  const installationCities = [
    'Saint Hedwig',
    'Adkins',
    'Elmendorf',
    'Converse',
    'Live Oak',
    'Universal City',
    'Schertz',
    'Cibolo',
    'Marion',
    'Seguin',
    'New Braunfels',
    'Boerne'
  ];

  // Content data for each category - just images with city labels
  const categoryContent = {
    'steel-doors': [
      {
        image: 'https://i.imgur.com/LAWwv8Q.jpeg',
        city: installationCities[0]
      },
      {
        image: 'https://i.imgur.com/6eNlUJA.jpeg',
        city: installationCities[1]
      },
      {
        image: 'https://i.imgur.com/ocozxCm.jpeg',
        city: installationCities[2]
      },
      {
        image: 'https://i.imgur.com/yKHwflR.jpeg',
        city: installationCities[3]
      },
      {
        image: 'https://i.imgur.com/JdC3bTX.jpeg',
        city: installationCities[4]
      },
      {
        image: 'https://i.imgur.com/EB4Lgt2.jpeg',
        city: installationCities[5]
      },
      {
        image: 'https://i.imgur.com/6JQscpb.jpeg',
        city: installationCities[6]
      },
      {
        image: 'https://i.imgur.com/kDU62jT.jpeg',
        city: installationCities[7]
      },
      {
        image: 'https://i.imgur.com/Wi59jkz.jpeg',
        city: installationCities[8]
      },
      {
        image: 'https://i.imgur.com/4XBrMgj.jpeg',
        city: installationCities[9]
      },
      {
        image: 'https://i.imgur.com/E0ncbFg.jpeg',
        city: installationCities[10]
      },
      {
        image: 'https://i.imgur.com/z1IXf0i.jpeg',
        city: installationCities[11]
      },
      {
        image: 'https://i.imgur.com/4Fswmeh.jpeg',
        city: installationCities[0]
      },
      {
        image: 'https://i.imgur.com/vptWVuf.jpeg',
        city: installationCities[1]
      }
    ],
    'pivot-doors': [
      {
        image: 'https://i.imgur.com/C4fD2Zm.jpeg',
        city: installationCities[5]
      }
    ]
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  // Select first category by default
  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0].id);
    }
  }, []);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const currentContent = categoryContent[selectedCategory] || [];

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
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1c3226;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #2bee79;
            border-radius: 3px;
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .animate-slideIn {
            animation: slideIn 0.3s ease-out;
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
          {/* Portfolio Section Header */}
          <section className="w-full py-8 sm:py-12 max-w-[1280px] mx-auto px-4 sm:px-6 bg-[#112218]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
              <div>
                <span className="text-[#2bee79] font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 block">Our Portfolio</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">Popular Collections</h2>
              </div>
              <div className="text-gray-300 font-medium">
                Browse our custom steel doors collection
              </div>
            </div>
          </section>
          
          {/* Two Panel Layout */}
          <section className="py-4 sm:py-8 px-4 sm:px-6 lg:px-8 bg-[#112218]">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
                {/* Left Panel - Categories */}
                <div className="w-full lg:w-1/4">
                  <div className="bg-[#1c3226] rounded-xl sm:rounded-2xl p-4 sm:p-6 sticky top-24">
                    <h2 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2bee79]">category</span>
                      Door Types
                    </h2>
                    
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                            selectedCategory === category.id
                              ? 'bg-[#2bee79] text-[#112218] shadow-lg'
                              : 'bg-[#234832] text-gray-300 hover:bg-[#2a523b] hover:text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                                selectedCategory === category.id
                                  ? 'bg-[#112218] text-[#2bee79]'
                                  : 'bg-[#2bee79] text-[#112218]'
                              }`}>
                                <span className="material-symbols-outlined text-sm">
                                  {category.id === 'steel-doors' ? 'door_front' : 'pivot_table_chart'}
                                </span>
                              </div>
                              <div>
                                <h3 className="font-bold text-sm sm:text-base">{category.shortName}</h3>
                                <p className="text-xs opacity-75 mt-1 hidden sm:block">
                                  {category.description}
                                </p>
                              </div>
                            </div>
                            {selectedCategory === category.id && (
                              <span className="material-symbols-outlined text-lg">chevron_right</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    {/* Mobile Category Indicator */}
                    <div className="mt-6 pt-4 border-t border-[#234832] sm:hidden">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Currently viewing:</span>
                        <span className="text-[#2bee79] font-bold">
                          {currentCategory?.shortName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Panel - Content */}
                <div className="w-full lg:w-3/4 animate-slideIn">
                  <div className="bg-[#1c3226] rounded-xl sm:rounded-2xl overflow-hidden">
                    {/* Category Header */}
                    <div className="bg-gradient-to-r from-[#234832] to-[#1c3226] p-4 sm:p-6 border-b border-[#234832]">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-3 h-3 rounded-full bg-[#2bee79]"></span>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#2bee79]">
                              {currentCategory?.shortName}
                            </span>
                          </div>
                          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
                            {currentCategory?.name}
                          </h2>
                          <p className="text-gray-400 mt-2 max-w-3xl">
                            {currentCategory?.description}
                          </p>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                          
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Grid - Larger Images like Screenshot */}
                    <div className="p-4 sm:p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                        {currentContent.map((item, index) => (
                          <div 
                            key={index} 
                            className="group relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-[#193324] block"
                          >
                            <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                              <div 
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.image})` }}
                              ></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent/10"></div>
                            <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8 w-full">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-[#2bee79] text-sm">location_on</span>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">
                                  
                                </h3>
                              </div>
                              <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                {selectedCategory === 'steel-doors' 
                                  ? 'Custom steel door with handcrafted details and durable construction'
                                  : 'Contemporary pivot door with clean geometric design and smooth operation'}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Empty State */}
                      {currentContent.length === 0 && (
                        <div className="text-center py-12">
                          <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">search_off</span>
                          <h3 className="text-xl font-bold text-gray-400 mb-2">No images available</h3>
                          <p className="text-gray-500">Please select a different category.</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Request Quote Button (at bottom instead of on each image) */}
                  <div className="mt-6 text-center">
                    <button 
                      onClick={openModal}
                      className="inline-flex items-center justify-center gap-2 bg-[#2bee79] hover:bg-[#25cc68] text-[#112218] font-bold py-3 px-6 sm:px-8 rounded-full transition-colors text-sm sm:text-base"
                    >
                      <span className="material-symbols-outlined">request_quote</span>
                      Request Custom Quote for {currentCategory?.shortName}
                    </button>
                  </div>
                </div>
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
                  <div className="flex size-7 sm:size-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-base sm:text-lg">door_front</span>
                  </div>
                  <Link to="/" className="text-base sm:text-lg font-bold">Alamo Steel Doors</Link>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  Hand-forged steel doors that define luxury and security. Elevate your entrance today.
                </p>
              </div>

              {/* Portfolio Links */}
              <div></div>

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
                    <span>1624 S San Marcos<br/>San Antonio, TX 78207</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm sm:text-base">call</span>
                    (210) 596-8796
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