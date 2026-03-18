import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Search, Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const products = [
  // Primary Breakdown
  { name: "ProDog", sub: "End Dogger", category: "Primary Breakdown" },
  { name: "ProCanter", sub: "Four-Sided Canter", category: "Primary Breakdown" },
  
  // Secondary Breakdown
  { name: "ProCenter", sub: "Centering Table", category: "Secondary Breakdown" },
  { name: "Dynamic Linebar", sub: "Resaw System", category: "Secondary Breakdown" },
  { name: "Precision Scan Belt", sub: "Scanning Conveyor", category: "Secondary Breakdown" },
  { name: "ProSaw", sub: "Curve Profiling Gang", category: "Secondary Breakdown" },
  
  // Intermediate Processing
  { name: "Cant Outfeed Sweep", sub: "Material Handling", category: "Intermediate Processing" },
  { name: "Slat Table", sub: "Slat Transfer Table", category: "Intermediate Processing" },
  { name: "ProQ", sub: "Infeed Queuing Deck", category: "Intermediate Processing" },
  
  // Support Systems
  { name: "ProLube", sub: "Saw Lubrication System", category: "Support Systems" },
  { name: "Hydraulic Power Units", sub: "Smart Hydraulics", category: "Support Systems" },
  { name: "ProOiler", sub: "Lube Farm", category: "Support Systems" },

  // Automation and Controls
  { name: "Motion Control", sub: "High Speed Servo", category: "Automation and Controls" },
  { name: "Force Control", sub: "Adaptive Feedback", category: "Automation and Controls" },
  { name: "System Upgrades", sub: "Retrofit Kits", category: "Automation and Controls" },

  // Electrical
  { name: "Panel Design & Build", sub: "Custom Fabrication", category: "Electrical" },
  { name: "Power Management System", sub: "Energy Efficiency", category: "Electrical" },

  // Technology Systems
  { name: "Cant Classifier", sub: "Cant Grading System", category: "Technology Systems" },
  { name: "Species Detection", sub: "Sorting System", category: "Technology Systems" },
  { name: "Cant Dealer", sub: "Cant Singulation", category: "Technology Systems" },
  { name: "Lumber Backlog Control", sub: "Flow Optimization", category: "Technology Systems" }
];

const categories = [...new Set(products.map(p => p.category))];

const getImage = (name: string) => {
  const productImages: Record<string, string> = {
    "ProDog": "/Products/ProDog/ProDog.png",
    "ProCanter": "/Products/ProCanter/ProCanter.png",
    "ProCenter": "/Products/ProCenter/ProCenter.png",
    "Dynamic Linebar": "/Products/Dynamic-linebar/Dynamic-linebar.png",
    "Precision Scan Belt": "/Products/Precision-scanbelt/Precision-scanbelt.png",
    "ProSaw": "/Products/ProSaw/ProSaw.png",
    "Cant Outfeed Sweep": "/Products/Cant-outfeed-sweep/Cant-outfeed-sweep.png",
    "ProQ": "/Products/ProQ/ProQ.png",
    "Slat Table": "/Products/Slat-table/Slat-table.png",
    "ProLube": "/Products/ProLube/Prolube.png",
    "Hydraulic Power Units": "/Products/HPU/HPU.png",
    "ProOiler": "/Products/ProOiler/ProOiler.png",
    "Motion Control": "/Products/Motion-control/Motion-control.png",
    "Force Control": "/Products/Force-control/Force-control.png",
    "System Upgrades": "/Products/System-upgrades/System-upgrades.png",
    "Panel Design & Build": "/Products/Panel-design/Panel-design.png",
    "Power Management System": "/Products/Power-management-system/PMS.png",
    "Species Detection": "/Products/Species-detection/Species-detection-camera.png",
    "Cant Classifier": "/Products/Cant-classifier/cant-grading.png",
    "Cant Dealer": "/Products/Cant-dealer/Cant-Dealer-device.png",
    "Lumber Backlog Control": "/Products/Lumber-backlog-control/Lumber-backlog-control-UI.png"
  };

  if (productImages[name]) {
    return productImages[name];
  }

  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return `https://images.unsplash.com/photo-${hash % 2 === 0 ? '1581092160562-40aa08e78837' : '1504917595217-d4dc5ebe6122'}?q=80&w=800&auto=format&fit=crop`;
};

const getCategoryStyle = (category: string) => {
  const isPalette1 = ["Secondary Breakdown", "Support Systems", "Electrical"].includes(category);
  
  if (isPalette1) {
    return {
      bg: 'bg-[#0a0a0a] relative overflow-hidden',
      isPalette1: true,
      text: 'text-white',
      subText: 'text-gray-300',
      cardBg: 'bg-[#EBEDEF]',
      cardText: 'text-[#1a1a1a]',
      cardSubText: 'text-[#333333]',
      cardBorder: 'border-black/10',
      cardHoverBorder: 'group-hover:border-rpm-maroon',
      btnBg: 'bg-[#540214]',
      btnText: 'text-white',
      btnHover: 'hover:bg-[#450f1a]',
      arrowColor: 'text-white',
      imgBlend: 'mix-blend-multiply',
      accentLine: 'border-[#450f1a] border-b-4'
    };
  } else {
    return {
      bg: 'bg-[#EBEDEF] relative overflow-hidden',
      isPalette1: false,
      text: 'text-[#1a1a1a]',
      subText: 'text-gray-600',
      cardBg: 'bg-[#1a1a1a]',
      cardText: 'text-white',
      cardSubText: 'text-[#ebedef]',
      cardBorder: 'border-white/10',
      cardHoverBorder: 'group-hover:border-rpm-maroon',
      btnBg: 'bg-[#540214]',
      btnText: 'text-white',
      btnHover: 'hover:bg-[#450f1a]',
      arrowColor: 'text-white',
      imgBlend: 'mix-blend-normal opacity-90',
      accentLine: 'border-[#450f1a] border-b-4'
    };
  }
};

export default function Products() {
  const location = useLocation();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle incoming categories from routing state
  useEffect(() => {
    if (location.state?.categories) {
      setActiveFilters(location.state.categories);
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  const toggleFilter = (category: string) => {
    setActiveFilters(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const visibleProducts = products.filter(p => {
    const matchesCategory = activeFilters.length === 0 || activeFilters.includes(p.category);
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedProducts = categories.reduce((acc, cat) => {
    const catProducts = visibleProducts.filter(p => p.category === cat);
    if (catProducts.length > 0) {
      acc[cat] = catProducts;
    }
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="min-h-screen bg-rpm-black text-white font-sans flex flex-col selection:bg-rpm-maroon selection:text-white">
      
      {/* Hero & Filter Section */}
      <section className="relative pt-24 pb-8 px-6 overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-rpm-maroon blur-[180px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-rpm-maroon blur-[150px]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 bg-[#ebedef] text-sm md:text-base font-sans font-bold tracking-[0.2em] text-rpm-black uppercase mb-6 backdrop-blur-md rounded-full shadow-2xl">
              <Layers className="w-4 h-4 text-rpm-maroon" />
              Equipment Catalog
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-widest drop-shadow-2xl mb-6">
              Product <span className="text-rpm-maroon">Finder</span>
            </h1>
            <div className="w-20 h-1 bg-rpm-maroon mx-auto rounded-full mb-8"></div>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search equipment by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#540214] border border-white/10 rounded-full py-4 pl-14 pr-6 text-[#EBEDEF] placeholder:text-[#EBEDEF]/70 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all backdrop-blur-md font-light text-lg shadow-2xl"
              />
              <Search className="w-6 h-6 text-white/40 absolute left-5 top-1/2 transform -translate-y-1/2" />
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-2xl"
          >
            <h3 className="text-sm font-sans font-bold text-white/50 uppercase tracking-[0.2em] mb-6 text-center">
              Process Area
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => {
                const isActive = activeFilters.includes(cat);
                return (
                  <motion.button
                    key={cat}
                    onClick={() => toggleFilter(cat)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
                      isActive 
                        ? 'bg-rpm-maroon border-rpm-maroon text-white shadow-[0_0_20px_rgba(84,2,20,0.6)]' 
                        : 'bg-transparent border-white/10 text-white/60 hover:bg-[#540214] hover:border-[#540214] hover:text-white hover:shadow-[0_0_15px_rgba(84,2,20,0.5)]'
                    }`}
                  >
                    {cat}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid Section */}
      <div className="flex-1 w-full flex flex-col relative z-10">
        <AnimatePresence mode="popLayout">
          {Object.entries(groupedProducts).map(([category, prods]) => {
            const style = getCategoryStyle(category);
            return (
              <motion.section 
                layout
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`w-full py-20 px-6 md:px-16 ${style.bg} transition-colors duration-500`}
              >
                {style.isPalette1 && (
                  <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.6, 0.4]
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-rpm-maroon blur-[180px]"
                    />
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-rpm-maroon blur-[150px]"
                    />
                  </div>
                )}
                <div className="max-w-7xl mx-auto relative z-10">
                  <h2 className={`text-3xl md:text-4xl font-display font-bold ${style.text} mb-12 pb-4 uppercase tracking-widest ${style.accentLine}`}>
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {prods.map((p) => (
                      <motion.div
                        layout
                        key={p.name}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className={`${style.cardBg} rounded-2xl overflow-hidden flex flex-col group shadow-xl border ${style.cardBorder} ${style.cardHoverBorder} transition-all duration-300 relative`}
                      >
                        <div className="h-80 w-full relative overflow-hidden z-10 rounded-t-2xl bg-[#0a0a0a]">
                          {/* Carbon Fibre Pattern Overlay */}
                          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
                          
                          {/* Subtle Maroon Glow */}
                          <div className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-rpm-maroon/10 blur-[80px] rounded-full"></div>
                          
                          <img 
                            src={getImage(p.name)} 
                            alt={p.name} 
                            className={`w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out relative z-10 p-4`}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        
                        <div className="p-8 flex flex-col flex-grow relative z-10">
                          <h3 className={`text-2xl font-display font-bold ${style.cardText} mb-2 tracking-wide`}>
                            {p.name}
                          </h3>
                          <p className={`text-sm ${style.cardSubText} mb-8 flex-grow font-light leading-relaxed`}>
                            {p.sub}
                          </p>
                          
                          <Link 
                            to={`/products/${p.name.toLowerCase().replace(/\s+/g, '-')}`} 
                            className={`inline-flex items-center justify-center gap-2 w-full py-3 px-6 ${style.btnBg} ${style.btnText} text-xs font-bold uppercase tracking-widest rounded-xl ${style.btnHover} transition-all duration-300 shadow-md group-hover:shadow-lg`}
                          >
                            <span>View Details</span>
                            <ChevronRight className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${style.arrowColor}`} />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            );
          })}
        </AnimatePresence>
        
        {visibleProducts.length === 0 && (
          <section className="w-full py-32 px-6 bg-[#333333]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center max-w-7xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6">
                <Search className="w-8 h-8 text-white/30" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">No equipment found</h3>
              <p className="text-white/50 text-lg mb-8 max-w-md mx-auto font-light">
                We couldn't find any products matching your current filters and search query.
              </p>
              <button 
                onClick={() => { setActiveFilters([]); setSearchQuery(''); }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-rpm-maroon text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-rpm-black transition-all duration-300"
              >
                Clear All Filters
              </button>
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
}
