import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ChevronDown, Linkedin, Phone } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-rpm-black text-[#ebedef] font-sans flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#111] border-b border-[#333] h-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 group flex items-center gap-3">
            <img src="/Logo-footer.png" alt="RPM Logo" className="h-20 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center space-x-8 h-full">
            <div className="relative group h-full flex items-center">
              <button className="flex items-center text-white hover:text-[#ebedef] uppercase tracking-wide text-sm font-bold border-b-4 border-transparent group-hover:border-rpm-maroon h-full transition-all">
                <ChevronDown className="w-5 h-5 mr-2" />
                Company
              </button>
              <div className="dropdown-menu hidden group-hover:block absolute top-20 left-0 w-56 bg-rpm-black border border-[#333] shadow-2xl">
                <Link to="/about" className="block px-6 py-4 text-sm uppercase tracking-wider hover:bg-rpm-maroon transition-colors border-b border-[#333]">About RPM</Link>
                <Link to="/service-support" className="block px-6 py-4 text-sm uppercase tracking-wider hover:bg-rpm-maroon transition-colors border-b border-[#333]">Service & Support</Link>
                <a href="https://www.paycomonline.net/v4/ats/web.php/portal/CD309BBB65DAB94586988DC202424883/career-page" target="_blank" rel="noreferrer" className="block px-6 py-4 text-sm uppercase tracking-wider hover:bg-rpm-maroon transition-colors">Careers</a>
              </div>
            </div>

            <Link to="/products" className="relative flex items-center justify-center h-10 px-6 mx-2 group overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <svg className="w-[160%] h-[220%] text-[#540214] group-hover:text-[#450f1a] transition-all duration-500 group-hover:rotate-90 drop-shadow-lg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  <path d="M50,2 L55,12 L66,6 L65,18 L77,14 L73,26 L86,24 L79,35 L92,38 L81,46 L94,52 L81,58 L92,66 L79,70 L86,80 L73,78 L77,89 L65,84 L66,96 L55,90 L50,100 L45,90 L34,96 L35,84 L23,89 L27,78 L14,80 L21,70 L8,66 L19,58 L6,52 L19,46 L8,38 L21,35 L14,25 L27,26 L23,14 L35,18 L34,6 L45,12 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute inset-x-0 inset-y-0 bg-[#222222] rounded-full z-0 group-hover:bg-[#333333] transition-colors border-2 border-[#540214]"></div>
              <span className="relative z-10 text-white uppercase tracking-wide text-sm font-bold" style={{ fontFamily: '"Copperplate Gothic", "Copperplate", sans-serif' }}>Products</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/contact" className="px-6 py-2 border border-rpm-silver hover:bg-rpm-maroon hover:border-rpm-maroon text-xs uppercase font-bold tracking-widest transition-all">
                Contact Us
              </Link>
              <Link to="/showcase" className="px-6 py-2 border border-rpm-silver bg-rpm-black hover:bg-rpm-maroon hover:border-rpm-maroon text-xs uppercase font-bold tracking-widest transition-all">
                Showcase
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#111] border-t border-[#333] text-white relative overflow-hidden">
        {/* Industrial Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-rpm-maroon/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center group gap-3">
              <img src="/Logo-footer.png" alt="RPM Logo" className="h-24 w-auto object-contain" />
            </Link>
            <p className="text-rpm-silver text-xs leading-relaxed border-l-2 border-rpm-maroon pl-3">
              Engineered for precision. Built for the toughest environments.
            </p>
          </div>

          {/* Column 2: Links & Socials */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-[#ebedef]">
              <li><Link to="/about" className="hover:text-rpm-maroon transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-rpm-maroon rounded-full"></span>About RPM</Link></li>
              <li><Link to="/products" className="hover:text-rpm-maroon transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-rpm-maroon rounded-full"></span>Products</Link></li>
              <li><Link to="/service-support" className="hover:text-rpm-maroon transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-rpm-maroon rounded-full"></span>Service & Support</Link></li>
              <li><Link to="/contact" className="hover:text-rpm-maroon transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-rpm-maroon rounded-full"></span>Contact Us</Link></li>
              <li>
                <a 
                  href="https://www.paycomonline.net/v4/ats/web.php/portal/CD309BBB65DAB94586988DC202424883/career-page" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-block mt-2 px-4 py-1.5 bg-rpm-maroon text-white hover:bg-[#7a031d] transition-colors border border-rpm-maroon text-[10px]"
                >
                  Careers
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-2 pt-3 border-t border-[#333]">
              <a href="https://www.linkedin.com/company/real-performance-machinery/" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-2 rounded-md bg-[#1a1a1a] border border-[#333] hover:border-[#0077b5] transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(0,119,181,0.2)] hover:-translate-y-0.5">
                <span className="text-xs text-[#ebedef] group-hover:text-white transition-colors duration-300">Follow us</span>
                <div className="bg-[#0077b5] w-6 h-6 rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Linkedin size={12} className="text-white" fill="currentColor" />
                </div>
              </a>
              <a href="https://www.youtube.com/@RealPerformanceMachinery-oe6ww/videos" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-2 rounded-md bg-[#1a1a1a] border border-[#333] hover:border-[#FF0000] transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:-translate-y-0.5">
                <span className="text-xs text-[#ebedef] group-hover:text-white transition-colors duration-300">Watch our equipment</span>
                <div className="w-6 h-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-[#FF0000]" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Locations */}
          <div className="md:col-span-5 bg-[#ebedef] p-4 rounded-lg shadow-inner">
            <h4 className="text-[#1a1a1a] uppercase font-display font-bold tracking-widest mb-3 text-sm flex items-center gap-2">
              <span className="w-6 h-1 bg-rpm-maroon"></span>
              RPM Locations
            </h4>
            
            <div className="space-y-2">
              {/* Location 1 */}
              <div className="bg-white p-2.5 border border-gray-300 relative group hover:border-rpm-maroon transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:shadow-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-rpm-maroon transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out"></div>
                <h5 className="text-[#1a1a1a] text-[10px] font-bold uppercase tracking-wider mb-0.5 transition-colors duration-300">Corporate Headquarters and Manufacturing Operations</h5>
                <p className="text-[#333] text-xs mb-1.5 leading-relaxed transition-colors duration-300">
                  709 Powerhouse Rd, Independence, VA 24348
                </p>
                <a href="tel:+18447762244" className="flex items-center gap-1.5 text-rpm-maroon font-display tracking-wider transition-colors duration-300 group-hover:text-[#1a1a1a]">
                  <Phone size={12} className="group-hover:animate-pulse" />
                  <span className="text-xs">+1 (844) 776-2244</span>
                </a>
              </div>

              {/* Location 2 */}
              <div className="bg-white p-2.5 border border-gray-300 relative group hover:border-rpm-maroon transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:shadow-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-rpm-maroon transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out"></div>
                <h5 className="text-[#1a1a1a] text-[10px] font-bold uppercase tracking-wider mb-0.5 transition-colors duration-300">Electrical and Controls Engineering</h5>
                <p className="text-[#333] text-xs mb-1.5 leading-relaxed transition-colors duration-300">
                  506 Granville Ave, PO Box 471, Enderby, BC, V0E 1V0, Canada
                </p>
                <a href="tel:+12502947771" className="flex items-center gap-1.5 text-rpm-maroon font-display tracking-wider transition-colors duration-300 group-hover:text-[#1a1a1a]">
                  <Phone size={12} className="group-hover:animate-pulse" />
                  <span className="text-xs">+1 (250) 294-7771</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="bg-[#0a0a0a] border-t border-[#222] py-3 text-center text-[10px] text-[#666] uppercase tracking-widest relative z-10">
          <p>&copy; 2026 RPM Machinery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
