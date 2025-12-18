// components/FAQ.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalContactForm from './Modalcontactform';

const FAQ = () => {
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const faqData = [
    {
      category: "Product Details",
      items: [
        {
          id: "product1",
          question: "What steel thickness do you use for your doors?",
          answer: "We use 14-gauge (2mm) steel for our standard doors and 12-gauge (2.5mm) steel for our premium heavy-duty doors. Both provide exceptional strength and security while maintaining elegant proportions."
        },
        {
          id: "product2",
          question: "Do your steel doors come with thermal breaks for energy efficiency?",
          answer: "Yes! All our exterior steel doors include thermal breaks and polyurethane foam core insulation. This prevents thermal transfer, reduces energy costs by up to 30%, and eliminates condensation issues in extreme temperatures."
        },
        {
          id: "product3",
          question: "What finish options are available for the steel?",
          answer: "We offer three professional-grade finishes: 1) Powder-coated (most durable, 30+ color options), 2) Patina finish (antique look with protective clear coat), and 3) Blacksmith's patina (hand-applied, unique variations). All finishes include UV protection and anti-corrosion treatment."
        },
        {
          id: "product4",
          question: "Can I customize the design or add glass panels?",
          answer: "Absolutely! We offer complete customization including: custom scrollwork, monograms, glass inserts (tempered, double-paned), sidelights, transoms, and hardware selection. Our design team will create CAD drawings for your approval before fabrication."
        }
      ]
    },
    {
      category: "Installation & Shipping",
      items: [
        {
          id: "install1",
          question: "How are the doors shipped and what's the delivery time?",
          answer: "Doors are professionally crated on custom pallets with foam protection. Standard shipping takes 2-4 weeks nationwide via freight carriers. We provide white-glove delivery service that includes curbside delivery and placement at your entry point."
        },
        {
          id: "install2",
          question: "Do I need professional installation or can I install it myself?",
          answer: "While our pre-hung units are designed for straightforward installation, we strongly recommend professional installation. We provide detailed installation guides and video tutorials, and can connect you with certified installers in your area. Improper installation voids the warranty."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#112218] font-display text-white">
      {/* Font imports */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Spline+Sans:wght@300..700&display=swap" 
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
          
          @keyframes sweep {
            0%    {opacity: 0; transform: translateY(-10px)}
            100%  {opacity: 1; transform: translateY(0)}
          }
          
          .animate-sweep {
            animation: sweep 0.3s ease-in-out;
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
                className="text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors px-3 py-2"
              >
                About
              </Link>
              <Link 
                to="/faq" 
                onClick={() => handleNavClick('/faq')}
                className="text-sm font-medium leading-normal text-[#2bee79] hover:text-green-400 transition-colors px-3 py-2"
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
                  className="block px-4 py-3 text-white text-sm font-medium leading-normal hover:text-[#2bee79] transition-colors border-t border-[#234832]"
                >
                  About
                </Link>
                <Link 
                  to="/faq" 
                  onClick={() => handleNavClick('/faq')}
                  className="block px-4 py-3 text-[#2bee79] text-sm font-medium leading-normal hover:text-green-400 transition-colors border-t border-[#234832]"
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
              <div>
                <div 
                  className="relative flex min-h-[350px] sm:min-h-[400px] flex-col gap-4 sm:gap-6 overflow-hidden bg-cover bg-center bg-no-repeat rounded-xl items-start justify-center px-4 pb-6 sm:pb-10 sm:px-8 lg:px-10 shadow-2xl shadow-black/50 animate-fade-in-up"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(17, 34, 24, 0.8), rgba(17, 34, 24, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_YLrJPKtGP3k9uHxj-Ghx-w0OjRp-AJCBSiiAPbFKE4sZlhP_7d32JuygRDQGQe0Fe2Rf9hX6xVHaVSg0gQW0U1Egm56ri-z5EAkQWSN0QQj0HX_xI7JvJu5oNI9g1urJErSYi_iNOq77pkFl5_BYvnDFNh8a-hzVyJkCQwk4zPjGKUCu2B996k3gNmEQq3NPsJBJL7Cn6RsDN_UzpsB9MjrPtncvNxbQhyMiR-cpTwoxLxjRPQrpRkRAgOfWQegZzsrrlFYXRg4")'
                  }}
                >
                  <div className="flex flex-col gap-3 sm:gap-4 text-left max-w-2xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2bee79]/10 border border-[#2bee79]/20 w-fit">
                      <span className="material-symbols-outlined text-[#2bee79] text-sm">help</span>
                      <span className="text-[#2bee79] text-xs font-bold uppercase tracking-wider">Help Center</span>
                    </div>
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                      Frequently Asked Questions
                    </h1>
                    <h2 className="text-[#92c9a8] text-sm sm:text-base font-normal leading-relaxed max-w-lg">
                      Find answers to common questions about our custom steel doors, installation process, warranty, and care instructions.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <main className="flex flex-col py-6 sm:py-8 pb-16 sm:pb-20">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="px-4 sm:px-6 lg:px-10 xl:px-20 flex flex-1 justify-center pt-4 sm:pt-8">
              <div className="flex flex-col max-w-[960px] flex-1">
                <div className="flex items-center gap-3 sm:gap-4 px-4 pb-3 sm:pb-4 pt-2 sm:pt-4">
                  <div className="h-6 sm:h-8 w-1 bg-[#2bee79] rounded-full"></div>
                  <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em]">
                    {section.category}
                  </h2>
                </div>
                <div className="flex flex-col p-4 gap-3 sm:gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={item.id} 
                      className={`flex flex-col rounded-xl sm:rounded-2xl border transition-all duration-300 bg-[#193324] px-4 sm:px-6 py-2 ${
                        openItems[item.id] 
                          ? 'border-[#2bee79]/30 shadow-lg' 
                          : 'border-[#326747] hover:border-[#2bee79]/50'
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="flex cursor-pointer items-center justify-between gap-4 sm:gap-6 py-3 sm:py-4 list-none w-full text-left"
                      >
                        <p className={`text-white text-sm sm:text-base font-medium leading-normal transition-colors ${
                          openItems[item.id] ? 'text-[#2bee79]' : 'group-hover:text-[#2bee79]'
                        }`}>
                          {item.question}
                        </p>
                        <div className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300 ${
                          openItems[item.id] 
                            ? 'bg-[#2bee79] text-[#112218] rotate-180' 
                            : 'bg-[#112218] text-[#92c9a8]'
                        }`}>
                          <span className="material-symbols-outlined text-lg sm:text-xl transition-transform duration-300">
                            expand_more
                          </span>
                        </div>
                      </button>
                      
                      {openItems[item.id] && (
                        <div className="pb-3 sm:pb-4 pt-1 animate-sweep">
                          <p className="text-[#92c9a8] text-sm sm:text-base font-normal leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="px-4 sm:px-6 lg:px-10 xl:px-20 flex flex-1 justify-center mt-8 sm:mt-12">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[#193324] border border-[#326747] p-6 sm:p-8 md:p-12 text-center relative overflow-hidden group">
                {/* Decorative gradient blob */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-full bg-[#2bee79]/5 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
                  <div className="p-2 sm:p-3 bg-[#112218] rounded-full border border-[#326747] shadow-lg">
                    <span className="material-symbols-outlined text-[#2bee79] text-2xl sm:text-3xl">support_agent</span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Still have questions?</h3>
                    <p className="text-[#92c9a8] text-sm sm:text-base max-w-lg mx-auto">
                      Our design specialists are ready to help you with specific measurements, custom quotes, or any other inquiries.
                    </p>
                  </div>
                  <button 
                    onClick={openModal}
                    className="flex min-w-[140px] sm:min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 sm:h-12 px-6 sm:px-8 bg-[#2bee79] hover:bg-[#20d869] text-[#112218] text-sm sm:text-base font-bold transition-all transform hover:scale-105 shadow-lg shadow-[#2bee79]/20"
                  >
                    Contact Support
                  </button>
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
                                     <span>1624 S San Marcos

<br/>San Antonio, TX  78207</span>
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
      </div>

      {/* Modal Contact Form */}
      <ModalContactForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FAQ;