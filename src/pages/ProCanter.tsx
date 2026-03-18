import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronRight, CheckCircle2, Zap, Settings, ArrowRight, PlayCircle, Maximize2, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProCanter() {
  const [activeTab, setActiveTab] = useState(0);

  const specs = [
    {
      title: "Canter Module",
      items: [
        "Counter rotating top and bottom heads equalize chipping forces",
        "Each head is directly coupled to motor with driveline",
        "Canter Heads set vertically to block thickness to equalize chipping forces",
        "Maintenance mode for easy access for knife changes and maintenance"
      ]
    },
    {
      title: "Profiler Module",
      items: [
        "Top and bottom profiler heads independently adjust for different sideboard widths",
        "Vertically slewed side boards solutions are achievable",
        "Side rolls independently driven by 7.5HP motor through worm gearbox",
        "Moves out to a maintenance position to allow easy access"
      ]
    },
    {
      title: "Double Arbor Quad Sawbox",
      items: [
        "Two movable saw boxes instead of conventional fixed arbor moving guides",
        "More rigid arbor and guide design to achieve higher sawing speeds",
        "Single motor for each side of the machine",
        "Top arbor offset automatically adjusted to eliminate saw mismatch",
        "Arbors can be configured as a twin or quad",
        "24” Diameter Saws with a .150” Kerf sawing Southern Yellow Pine"
      ]
    },
    {
      title: "Spline Remover",
      items: [
        "Uses same shaft and bearings as Spline Chipper and Top Head",
        "Adjustable to allow fine tuning of final bottom face of cant",
        "Drive line driven to keep motor away from debris and easy to access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#333333] text-white font-sans selection:bg-[#540214] selection:text-white">
      
      {/* Immersive Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#222222]">
        <div className="fixed top-24 left-4 z-50">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#540214] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#450f1a] transition-all duration-300 shadow-[0_0_30px_rgba(84,2,20,0.4)] hover:shadow-[0_0_40px_rgba(84,2,20,0.6)] hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>
        {/* Background Video/Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#222222] z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#222222] via-[#222222]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-transparent to-transparent z-10"></div>
          <img 
            src="/Products/ProCanter/ProCanter.png" 
            alt="ProCanter" 
            className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[90%] lg:w-[60%] h-auto object-contain opacity-60 z-0 drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-[#540214] blur-[180px]"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#540214] blur-[150px]"
            />
          </div>
</div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#540214]/20 border border-[#540214]/50 text-[#FFB6C1] text-sm font-bold tracking-[0.2em] uppercase mb-6 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FFC0CB] animate-pulse"></span>
              Primary Breakdown
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-widest leading-[0.9] mb-8 drop-shadow-2xl">
              Pro<span className="text-[#540214]">Canter</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              Compact Primary Breakdown Solution.
            </h2>
            <p className="text-xl md:text-2xl text-[#8C9291] font-light mb-12 max-w-2xl leading-relaxed">
              A compact primary breakdown solution with double profiling that fits in the same footprint as a standard chip-n-saw line. With 16 driven rolls—twice as many as existing systems—we deliver superior control, improved quality, and optimized mill flow.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#540214] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#450f1a] transition-all duration-300 shadow-[0_0_30px_rgba(84,2,20,0.4)] hover:shadow-[0_0_40px_rgba(84,2,20,0.6)] hover:-translate-y-1"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#specs" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#7F7F7F] text-[#EBEDEF] text-sm font-bold uppercase tracking-widest rounded-full hover:border-[#EBEDEF] hover:bg-white/5 transition-all duration-300"
              >
                View Specs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metric Callout Banners */}
      <section className="py-12 bg-[#EBEDEF] relative z-30 -mt-8 mx-6 md:mx-16 rounded-3xl shadow-2xl border border-black/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-black/10">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                16
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Driven Rolls</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Twice as many as existing systems for superior control</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Zero
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Downstream Moves</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Fits the exact footprint of a standard chip-n-saw line</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                100<span className="text-3xl text-[#450f1a]">%</span>
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">HOTT Technology</div>
              <p className="text-[#333333] text-sm mt-3 font-light">All critical components located above cutting tools and debris</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Split-Screen Feature Highlights */}
      <div className="w-full">
        
        {/* Feature 1: Splined Head and Spiked Press Rolls */}
        <section className="py-24 px-6 md:px-16 bg-[#333333] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#222222] to-[#333333] opacity-80"></div>
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/xIiRM8ZZlfQ?rel=0&autoplay=1&mute=1&loop=1&playlist=xIiRM8ZZlfQ" 
                    title="ProCanter Splined Head" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                  Splined Head & <span className="text-[#540214]">Press Rolls</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  Engineered for absolute stability. The chip head is direct-driven, while dual spiked press rolls eliminate surging during chipping.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Maximize2 className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Eliminate Surging</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Two Spiked Press Rolls are driven by a shared 20HP motor through a Worm Gearbox.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Activity className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Hydraulic Precision</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Hydraulically controlled for exact force and position management.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 2: Top Head Module */}
        <section className="py-24 px-6 md:px-16 bg-white relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 flex flex-col gap-6"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10">
                  <img 
                    src="/Products/ProCanter/ProCanter-TopHead-Module.jpg" 
                    alt="ProCanter Top Head Module Detail" 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/10 group">
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/3mbEAy_wKIY?rel=0&autoplay=1&mute=1&loop=1&playlist=3mbEAy_wKIY" 
                    title="ProCanter Top Head Module" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#222222] mb-6 uppercase tracking-wide">
                  Top Head <span className="text-[#540214]">Module</span>
                </h3>
                <p className="text-[#333333] text-lg mb-8 font-light leading-relaxed">
                  Built for speed and durability. The driveline-driven top head reduces moving mass and set time, mounted on linear bearings for rigid, precise positioning.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Activity className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-[#222222] font-bold text-lg mb-1">Reduced Moving Mass</h4>
                      <p className="text-[#333333] font-light">Driveline driven to minimize set time and maximize efficiency.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Settings className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-[#222222] font-bold text-lg mb-1">Rugged Durability</h4>
                      <p className="text-[#333333] font-light">Carriage constructed from 4" and 2" steel plate for extreme longevity.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 3: Side Board Dispatch */}
        <section className="py-24 px-6 md:px-16 bg-[#450f1a] relative">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-3/5 flex flex-col gap-8"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/vP27U3CeLxY?rel=0&autoplay=1&mute=1&loop=1&playlist=vP27U3CeLxY" 
                    title="ProCanter Side Board Dispatch 1" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/wQbqMrA7bXI?rel=0&autoplay=1&mute=1&loop=1&playlist=wQbqMrA7bXI" 
                    title="ProCanter Side Board Dispatch 2" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-2/5"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                  Side Board <span className="text-[#7F7F7F]">Dispatch</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  Seamlessly handle side boards with high-speed dispatch capabilities. Designed to keep your mill flowing without bottlenecks.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Layers className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Optimized Flow</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Reduces edger loading by profiling directly on the ProCanter.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Zap className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">High-Speed Handling</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Ensures side boards are dispatched quickly and efficiently.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

      </div>

      {/* Interactive Technical Specifications */}
      <section id="specs" className="py-32 px-6 md:px-16 bg-black border-t border-black/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-6">
              Technical <span className="text-[#540214]">Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-[#540214] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
            <div className="w-full lg:w-1/4 flex flex-col gap-4">
              {specs.map((spec, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-left px-8 py-6 rounded-2xl transition-all duration-300 border ${
                    activeTab === index 
                      ? 'bg-[#450f1a] border-[#540214] shadow-[0_0_30px_rgba(84,2,20,0.3)] text-white' 
                      : 'bg-[#333333] border-transparent hover:bg-[#222222] text-[#EBEDEF]'
                  }`}
                >
                  <h3 className="text-xl font-bold uppercase tracking-wider">
                    {spec.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-black/5 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center"
                >
                  <div className="w-full lg:w-2/5">
                    <h3 className="text-3xl font-display font-bold text-[#222222] mb-8 border-b border-black/10 pb-6">
                      {specs[activeTab].title}
                    </h3>
                    <ul className="flex flex-col gap-6">
                      {specs[activeTab].items.map((item, idx) => (
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          key={idx} 
                          className="flex items-start gap-4 group"
                        >
                          <div className="mt-1 w-6 h-6 rounded-full bg-[#540214]/10 flex items-center justify-center flex-shrink-0 border border-[#540214]/30 group-hover:bg-[#540214] transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-[#540214] group-hover:text-white" />
                          </div>
                          <span className="text-[#333333] text-lg font-light leading-relaxed group-hover:text-[#222222] transition-colors">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-3/5 h-full min-h-[500px] lg:min-h-[650px] rounded-2xl overflow-hidden relative shadow-2xl border border-white/5 bg-[#0a0a0a]">
                    {/* Premium Background Elements */}
                    <div className="absolute inset-0 z-0 opacity-40">
                      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#540214] blur-[120px]"
                      />
                    </div>
                    <img 
                      src={
                        activeTab === 0 ? "/Products/ProCanter/ProCanter-module.png" :
                        activeTab === 1 ? "/Products/ProCanter/ProCanter-Profiler-Module.png" :
                        activeTab === 2 ? "/Products/ProCanter/ProCanter-Double-Arbor-Quad-Sawbox.png" :
                        "/Products/ProCanter/ProCanter-Spliner-Remover.png"
                      }
                      alt={specs[activeTab].title}
                      className="absolute inset-0 w-full h-full object-contain p-4 z-10"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Focus CTA */}
      <section className="py-16 px-6 md:px-16 relative overflow-hidden bg-[#0a0a0a]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-[#540214] blur-[180px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#540214] blur-[150px]"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-6 drop-shadow-lg">
            Ready to maximize <span className="font-bold text-[#540214]">Quality</span> and <span className="font-bold text-[#540214]">Mill Flow?</span>
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            Connect with our sales team to discuss the return on investment and how the ProCanter can transform your primary breakdown process.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#450f1a] text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#540214] hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Contact us to learn more
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
