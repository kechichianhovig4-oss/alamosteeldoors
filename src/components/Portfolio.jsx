// components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalContactForm from './Modalcontactform';

const Portfolio = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('category1');
  
  // Categories data structure
  const categories = [
    {
      id: 'category1',
      name: 'Modern Pivot Doors',
      shortName: 'Pivot Doors',
      description: 'Contemporary single-pivot entry doors with clean geometric designs'
    },
    {
      id: 'category2',
      name: 'Modern Iron Entry Doors',
      shortName: 'Iron Entry Doors',
      description: '4-lite design steel doors with minimalist aesthetics'
    },
    {
      id: 'category3',
      name: 'Ornate Wrought Iron Doors',
      shortName: 'Wrought Iron Doors',
      description: 'Intricate scrollwork and Mediterranean-inspired designs'
    },
    {
      id: 'category4',
      name: 'Steel-Framed Glass Doors',
      shortName: 'Glass Doors',
      description: 'Crittall-style slim-profile steel and glass constructions'
    },
    {
      id: 'category5',
      name: 'Architectural Elements',
      shortName: 'Architectural',
      description: 'Laser-cut panels, pergolas, and decorative features'
    }
  ];

  // Content data for each category - USING OPTIMIZED IMAGE LINKS
  const categoryContent = {
    category1: [
      {
        title: 'Modern Iron Pivot Door',
        image: 'https://i.imgur.com/aQjsY82.jpeg?maxwidth=800&shape=thumb&fidelity=high',
        features: [
          'Architectural Style: Modern/Contemporary with geometric "ladder" style crossbars',
          'Construction: Heavy 12-to-14 gauge wrought iron/steel with matte black finish',
          'Glass: Large clear sections of double-paned, tempered Low-E glass',
          'Hardware: Pivot hinge system for smooth operation',
          'Insulation: Thermal break with foam insulation'
        ],
        uses: [
          'Main entry door for contemporary luxury homes',
          'High-security statement entrance',
          'Focal architectural element'
        ]
      }
    ],
    category2: [
      {
        title: 'Modern Iron "4-Lite" Entry Door',
        image: 'https://i.imgur.com/S49OC3Z.jpeg?maxwidth=800&shape=thumb&fidelity=high',
        features: [
          'Design: Four horizontal glass panels with minimalist grid pattern',
          'Material: 12-gauge or 14-gauge steel with matte black finish',
          'Glass: Clear Low-E tempered glass for natural light',
          'Function: Operable glass panels for ventilation',
          'Insulation: Polyurethane foam injection for thermal efficiency'
        ],
        uses: [
          'Primary entryway for modern residential architecture',
          'Minimalist, high-security look with abundant natural light'
        ]
      },
      {
        title: 'Modern Iron Entry Door with "Lite" Design',
        image: 'https://i.imgur.com/fTvBHcU.jpeg?maxwidth=800&shape=thumb&fidelity=high',
        features: [
          'Pattern: 4-Lite horizontal grid balancing minimalist and structural elements',
          'Material: Hand-forged 12-gauge or 14-gauge steel',
          'Finish: UV and rust-resistant Architectural Black powder coating',
          'Windows: Swing-open panels for ventilation and cleaning',
          'Hardware: Designed for long vertical pull handles (48" to 72")'
        ],
        uses: [
          'Contemporary home main entry door',
          'Blend of modern aesthetics, high security, and functional features'
        ]
      }
    ],
    category3: [
      {
        title: 'Ornate Wrought Iron Entry Door',
        image: 'https://i.imgur.com/Vs3fxuW.jpeg?maxwidth=800&shape=thumb&fidelity=high',
        features: [
          'Material: Heavy-duty forged iron or steel with powder-coated finish',
          'Style: Mediterranean, Tuscan, or Spanish Colonial with intricate scrollwork',
          'Glass: Dual-pane panel behind decorative ironwork',
          'Hardware: Antique Brass or Oil-Rubbed Bronze handleset',
          'Security: Robust iron construction with high physical security'
        ],
        uses: [
          'Grand entrance for villas and estates with Mediterranean architecture',
          'Secure yet ornate front door with scrollwork'
        ]
      },
      {
        title: 'Pair of High-End Wrought Iron & Steel Doors',
        image: 'https://i.imgur.com/XWimiHw.jpeg?maxwidth=800&shape=thumb&fidelity=high',
        features: [
          'Styles: Mediterranean scrollwork & modern geometric designs',
          'Finish: Durable, rust-resistant sandblast matte black powder coat',
          'Hardware: Oil-Rubbed Bronze for Mediterranean, minimalist lever for modern',
          'Function: Mediterranean style includes operable glass behind ironwork',
          'Construction: High-grade materials for security and longevity'
        ],
        uses: [
          'Mediterranean Style: Main entry for traditional luxury homes',
          'Modern Style: Entry door for contemporary residences'
        ]
      },
      {
        title: 'Wrought Iron & Glass French Doors',
        image: 'https://i.imgur.com/TSkFbT4.jpeg?maxwidth=800&shape=thumb&fidelity=high',
        features: [
          'Materials: Wrought iron scrollwork over frosted privacy glass',
          'Finish: Rich reddish-brown wood grain finish mimicking mahogany',
          'Style: Mediterranean or Tuscan-style double French doors',
          'Panels: Often feature independently operable glass panels',
          'Durability: Superior weather resistance with wood aesthetic'
        ],
        uses: [
          'Grand main entryway statement',
          'Secure patio or terrace access in luxury homes',
          'Security with natural light and ornate design'
        ]
      }
    ],
    category4: [
      {
        title: 'Modern Steel-Framed "Crittall-Style" Glass Door',
        image: 'https://i.imgur.com/xA177EI.jpeg?maxwidth=800&shape=thumb&fidelity=high',
        features: [
          'Ultra-Slim Sightlines: Steel/aluminum frames as slim as 22mm',
          'Grid Aesthetic: Thin horizontal and vertical bars (muntins)',
          'Finish: Durable matte black powder coating',
          'Hardware: Long tubular pull handles or minimalist lever-lock',
          'Performance: Double-glazed tempered glass with thermal breaks'
        ],
        uses: [
          'Interior room dividers in modern lofts',
          'Exterior patio doors or main entries',
          'Commercial storefronts or office partitions'
        ]
      }
    ],
    category5: [
      {
        title: 'CNC Laser-Cut Decorative Panels',
        image: 'https://i.imgur.com/aEawKL6.jpeg?maxwidth=800&shape=thumb&fidelity=high',
        features: [
          'Patterns: Geometric, abstract, or nature-inspired designs',
          'Materials: Aluminum or stainless steel with powder coating',
          'Lighting: Create dynamic "light and shadow" patterns',
          'Function: Privacy screens with 100% ventilation',
          'Durability: Rust-proof, weather-resistant, low maintenance'
        ],
        uses: [
          'Balcony railings and privacy screens',
          'Decorative exterior feature walls',
          'Interior architectural accents with backlighting'
        ]
      },
      {
        title: 'Modern Slatted Pergolas & Roof Systems',
        image: 'https://i.imgur.com/TSTPtRM.jpeg?maxwidth=800&shape=thumb&fidelity=high',
        features: [
          'Materials: Dark metal frames with warm wood slats',
          'Lighting: Built-in LED strips or festoon lights',
          'Design: Sleek profiles with cantilevered options',
          'Function: Adjustable shade with partial UV blocking',
          'Weather: Motorized tilting or retractable slats available'
        ],
        uses: [
          'Cover for outdoor kitchens and dining areas',
          'Permanent shade over patios and poolside areas',
          'Defining "outdoor room" spaces'
        ]
      },
      {
        title: 'Architectural Laser-Cut Metal Panels',
        image: 'https://i.imgur.com/TykkxFm.jpeg?maxwidth=800&shape=thumb&fidelity=high',
        features: [
          'Precision: CNC technology for intricate designs',
          'Dynamic Effects: Creates shifting patterns with sunlight',
          'Finishes: Matte black, charcoal, or metallic tones',
          'Integration: Seamlessly incorporated into larger structures',
          'Climate Control: Reduces heat gain by blocking UV rays'
        ],
        uses: [
          'Screens for balconies, patios, and pool enclosures',
          'Integrated ceilings in modern pergolas',
          'Architectural feature walls with lighting effects'
        ]
      }
    ]
  };

  // Background images
  const backgroundImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDcgtErFOcB399kokg6F0Wvcfi0R6ybcvvn_TKw6zyNNzBkO3LWQv8iABMCSHZCCqzUXeRGpyYRxepr0YHFqHems1iot3ARGlq5MHtx2pPgMEGkRbEepf9A0_n_wDCyJoOZPBTYIUb6x04pSdUHHkEkrVo2W8iIUjdPf1MbE9JXScRmGhlCB01qbkPaOKYdOd7mMmIjjBjMcd8F8j-kafgc0FnTRqThCVnp7VGwmZsa_gRwTAIglOZ9E7lC1p3qxCaocBlO2LPavao',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB-oi8kmCklIfpv8rt2eqBcu40zLqI3KNLPW2dFbFt0ucCLOHujKTUFe_PjNYWmnoKUKs6wPb19ITUokvw_Bg4QQJlw_thaK7wlmf9XoeWndEBsmKTyLftlDMpkVXwAQOadNutoK608oVKzwnbFNgE-l_nIxQDFC6KmJeQ5r7vfeAaS1fue7Zu9E2n1mIDklatc1xVSt15swMnPDDeFsf67A_4ChbXYTz_MJTxHx-L73rQkR6AH_Hx2rJ9aj6g_G8CpbLG363wihHs'
  ];

  // Collect ALL image URLs for aggressive preloading
  const allImageUrls = [...backgroundImages];
  Object.values(categoryContent).forEach(category => {
    category.forEach(item => {
      allImageUrls.push(item.image);
    });
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  // AGGRESSIVE PRELOADING - Start immediately
  useEffect(() => {
    // Preload ALL images in background as soon as component mounts
    allImageUrls.forEach(url => {
      // Create invisible image elements to force browser to cache them
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
      
      // Also preload via Image object
      const img = new Image();
      img.src = url;
    });
    
    // Set selected category
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0].id);
    }
  }, []);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const currentContent = categoryContent[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-[#112218] font-display text-gray-100">
      {/* Font Imports */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;700&display=swap" 
        rel="stylesheet" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        rel="stylesheet"
      />
      
      {/* AGGRESSIVE PRELOADING IN HTML HEAD */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Preload critical images using CSS */
          ${allImageUrls.map((url, index) => `
            body::after {
              content: url("${url}");
              position: absolute;
              width: 0;
              height: 0;
              overflow: hidden;
              z-index: -1;
            }
          `).join('')}
          
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
          
          /* Force images to show immediately with no transition */
          .instant-image {
            opacity: 1 !important;
            transition: none !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
          }
          
          /* Hide any loading states */
          .image-loading {
            display: none;
          }
        `
      }} />
      
      {/* HIDDEN PRELOAD IMAGES */}
      <div style={{ display: 'none' }}>
        {allImageUrls.map((url, index) => (
          <img 
            key={`preload-${index}`}
            src={url}
            alt=""
            loading="eager"
            decoding="sync"
            crossOrigin="anonymous"
          />
        ))}
      </div>
      
      <div className="relative flex min-h-screen w-full flex-col bg-[#112218]">
        {/* Header - Always visible immediately */}
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

        {/* Main Content - Shows immediately */}
        <main className="flex-1 bg-[#112218]">
          {/* Hero Section */}
          <section className="relative">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[350px] relative overflow-hidden">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat instant-image"
                style={{
                  backgroundImage: `linear-gradient(rgba(16, 34, 23, 0.7) 0%, rgba(16, 34, 23, 0.9) 100%), url("${backgroundImages[0]}")`
                }}
              ></div>
              
              <div className="relative z-10 flex flex-col gap-4 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit mx-auto">
                  <span className="w-2 h-2 rounded-full bg-[#2bee79] animate-pulse"></span>
                  <span className="text-xs font-medium text-white tracking-wide uppercase">Product Catalog</span>
                </div>
                
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] px-2">
                  Our Collection
                </h1>
                
                <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto px-4">
                  Explore our range of handcrafted steel doors and architectural elements. Select a category to view detailed specifications and applications.
                </p>
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
                      Categories
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
                                  {category.id === 'category1' ? 'pivot_table_chart' :
                                   category.id === 'category2' ? 'door_front' :
                                   category.id === 'category3' ? 'architecture' :
                                   category.id === 'category4' ? 'window' : 'grid_view'}
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
                          <span className="text-xs text-gray-400">{currentContent.length} items</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Grid */}
                    <div className="p-4 sm:p-6 custom-scrollbar" style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto' }}>
                      <div className="space-y-6 sm:space-y-8">
                        {currentContent.map((item, index) => (
                          <div key={index} className="bg-[#112218] rounded-xl sm:rounded-2xl overflow-hidden">
                            <div className="flex flex-col lg:flex-row">
                              {/* Image - Shows immediately */}
                              <div className="w-full lg:w-2/5">
                                <div 
                                  className="h-48 sm:h-64 lg:h-full w-full instant-image"
                                  style={{ 
                                    backgroundImage: `url(${item.image})`
                                  }}
                                ></div>
                              </div>
                              
                              {/* Content */}
                              <div className="w-full lg:w-3/5 p-4 sm:p-6">
                                <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
                                  <span className="material-symbols-outlined text-[#2bee79]">door_front</span>
                                  {item.title}
                                </h3>
                                
                                {/* Key Features */}
                                <div className="mb-4 sm:mb-6">
                                  <h4 className="text-[#2bee79] font-bold mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">featured_seasonal_and_gifts</span>
                                    Key Design Features
                                  </h4>
                                  <ul className="space-y-2">
                                    {item.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-[#2bee79] mt-1">•</span>
                                        <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                {/* Common Uses */}
                                {item.uses && item.uses.length > 0 && (
                                  <div>
                                    <h4 className="text-[#2bee79] font-bold mb-2 flex items-center gap-2">
                                      <span className="material-symbols-outlined text-lg">location_on</span>
                                      Common Uses
                                    </h4>
                                    <ul className="space-y-2">
                                      {item.uses.map((use, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          <span className="text-[#2bee79] mt-1">•</span>
                                          <span className="text-gray-300 text-sm sm:text-base">{use}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                
                                {/* View Details Button */}
                                <div className="mt-6 pt-4 border-t border-[#234832]">
                                  <button 
                                    onClick={openModal}
                                    className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#2bee79] hover:bg-[#25cc68] text-[#112218] font-bold py-2 px-4 sm:px-6 rounded-full transition-colors"
                                  >
                                    <span className="material-symbols-outlined">request_quote</span>
                                    Request Custom Quote
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Empty State */}
                      {currentContent.length === 0 && (
                        <div className="text-center py-12">
                          <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">search_off</span>
                          <h3 className="text-xl font-bold text-gray-400 mb-2">No content available</h3>
                          <p className="text-gray-500">Please select a different category.</p>
                        </div>
                      )}
                    </div>
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
                    className="aspect-video w-full rounded-xl sm:rounded-2xl bg-center bg-cover bg-no-repeat shadow-2xl overflow-hidden instant-image"
                    style={{
                      backgroundImage: `url("${backgroundImages[1]}")`
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