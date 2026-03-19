import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronRight, CheckCircle2, Zap, Settings, ArrowRight, Activity, Layers, ShieldCheck, Crosshair, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProSaw() {
  const [activeTab, setActiveTab] = useState(0);

  const specs = [
    {
      title: "Structural Integrity",
      items: [
        "Minimal footprint that typically fits into the existing Gang Infeed Module",
        "Close coupling of Infeed and Mid-feed Press Rolls provides superior cant stability",
        "3\" Thomson Roller Roundway bearings for slew",
        "3\" Ball screws for both slew and skew axes",
        "25\" diameter four point contact bearing for skew pivot"
      ]
    },
    {
      title: "Electrical & Control",
      items: [
        "On-board I/O Enclosure with all devices factory pre-wired and functionally tested",
        "Ethernet valve technology allows for factory tested axis pre-wiring to remain in-place during shipping",
        "Motor cable management improved with limited motor movement",
        "Single J-box location on frame simplifies on-site electrical installation",
        "All electric slew and skew axes for virtually zero following error"
      ]
    },
    {
      title: "Maintenance & Accessibility",
      items: [
        "Built-in service lights for routine inspections and knife changes",
        "Top mounted linear guideways are easy to maintain",
        "No support structure below Sawbox eliminates areas for debris to build up",
        "Arbor motors mounted flat on top of Sawbox for easy motor service and replacement",
        "Easily adjustable tensioners on poly chain belts"
      ]
    },
    {
      title: "Sawing Mechanics",
      items: [
        "Single tensioner pulley per belt",
        "All six outfeed rolls driven by single 140 roller chain and drivelines",
        "Super short, rigid saw guide design greatly improves accuracy",
        "On-the-fly top to bottom saw mismatch adjustments",
        "Designed without chip heads in Sawbox, allowing feed rolls to be close to saws"
      ]
    }
  ];

  const CopyLinkButton = ({ url }: { url: string }) => (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-[#540214] text-white px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-2 backdrop-blur-sm transition-colors duration-300 opacity-0 group-hover:opacity-100"
      title="Open video in new tab"
    >
      <ExternalLink className="w-3 h-3" />
      Copy Link
    </a>
  );

  return (
    <div className="min-h-screen bg-[#333333] text-white font-sans selection:bg-[#540214] selection:text-white">
      
      {/* Immersive Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#222222]">
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
            src="/Products/ProSaw/ProSaw.png" 
            alt="ProSaw" 
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

        <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-12 pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#540214]/20 border border-[#540214]/50 text-[#FFB6C1] text-sm font-bold tracking-[0.2em] uppercase mb-6 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FFC0CB] animate-pulse"></span>
              Secondary Breakdown
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-widest leading-[0.9] mb-8 drop-shadow-2xl">
              Pro<span className="text-[#540214]">Saw</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              Curve Profiling Gang.
            </h2>
            <p className="text-xl md:text-2xl text-[#8C9291] font-light mb-12 max-w-2xl leading-relaxed">
              The most rigid, advanced, and highest performing curving canter profiling system and curve sawing gang on the market for processing up to 12 inch cants.
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

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative z-20"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/TuMPCC68qPc?autoplay=1&mute=1&loop=1&playlist=TuMPCC68qPc&start=8&controls=1&showinfo=0&rel=0" 
                title="ProSaw Product Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              {/* Cinematic Overlay */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_80px_rgba(0,0,0,0.8)] z-10"></div>
              <CopyLinkButton url="https://youtu.be/TuMPCC68qPc" />
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
                450
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">FPM Speed</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Running today on 12 inch Douglas Fir cants</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                200<span className="text-3xl text-[#450f1a]">FT</span>
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Curve Radius</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Curve sawing on all cant thicknesses</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                0.130<span className="text-3xl text-[#450f1a]">"</span>
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Kerf</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Utilizing 19" saws for maximum recovery</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Split-Screen Feature Highlights */}
      <div className="w-full">
        
        {/* Feature 1: The ProFormer System */}
        <section className="py-24 px-6 md:px-16 bg-[#333333] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#222222] to-[#333333] opacity-80"></div>
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            />
          </div>
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-3/5 flex flex-col gap-8"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <CopyLinkButton url="https://youtu.be/Q5Yy_T-u4qU" />
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/Q5Yy_T-u4qU?rel=0&autoplay=1&mute=1&loop=1&playlist=Q5Yy_T-u4qU&start=28" 
                    title="ProFormer" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <CopyLinkButton url="https://youtu.be/QlTBRHUoK3Y" />
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/QlTBRHUoK3Y?rel=0&autoplay=1&mute=1&loop=1&playlist=QlTBRHUoK3Y" 
                    title="Double Canter Head Design" 
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
                  ProFormer <span className="text-[#540214]">Module</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  The most rigid, advanced curving canter profiling system on the market. Counter-rotating dual-head canters equalize cutting forces, while vertically slewed sideboard solutions outpace competitor pocket profilers.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Activity className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Equalized Forces</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Counter rotating dual-head canters equalize cutting forces on the center of the cant.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Crosshair className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Double Canter Head Design</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Does not influence cant path. Canter sets vertically to center of cant thickness.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 2: The ProScission Gang */}
        <section className="py-24 px-6 md:px-16 bg-white relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-multiply"></div>
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-3/5 flex flex-col gap-8"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)] border border-black/10 group">
                  <CopyLinkButton url="https://www.youtube.com/watch?v=t7-f0O41fVs" />
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/t7-f0O41fVs?rel=0&autoplay=1&mute=1&loop=1&playlist=t7-f0O41fVs&start=26" 
                    title="ProScission" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)] border border-black/10 group">
                  <CopyLinkButton url="https://youtu.be/qHRsMonJQpA" />
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/qHRsMonJQpA?rel=0&autoplay=1&mute=1&loop=1&playlist=qHRsMonJQpA" 
                    title="All Electric Curve Sawing" 
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
                className="w-full lg:w-2/5"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#222222] mb-6 uppercase tracking-wide">
                  ProScission <span className="text-[#540214]">Module</span>
                </h3>
                <p className="text-[#333333] text-lg mb-8 font-light leading-relaxed">
                  The most accurate curve sawing gang available. Features all-electric actuation, a massive 25-inch skew bearing, and overhead arbor motors for extraordinary balance and control.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Zap className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-[#222222] font-bold text-lg mb-1">All Electric Actuation</h4>
                      <p className="text-[#333333] font-light">All electric slew and skew axes provide virtually zero following error for unmatched accuracy.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Settings className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-[#222222] font-bold text-lg mb-1">Overhead Balance</h4>
                      <p className="text-[#333333] font-light">Overhead mounting of the arbor motors on the sawbox provides extraordinary balance and control.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 3: Precision Profiling & Power */}
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
                  <CopyLinkButton url="https://youtu.be/4XrYxsKG1nY" />
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/4XrYxsKG1nY?rel=0&autoplay=1&mute=1&loop=1&playlist=4XrYxsKG1nY" 
                    title="Curve Profiling" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <CopyLinkButton url="https://youtu.be/SSbV7YkOFkg" />
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/SSbV7YkOFkg?rel=0&autoplay=1&mute=1&loop=1&playlist=SSbV7YkOFkg" 
                    title="Single 800 HP Motor per Arbor" 
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
                  Precision <span className="text-black font-bold">Profiling & Power</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  Achieve +/- 6 degrees of skew with independent profiler heads accurately following a 200' curve radius. Powered by a single 800 HP motor per arbor, belted directly with Polychain to eliminate jackshafts.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Layers className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Independent Profiling</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Profilers pivot independently of Canter to accurately follow curve path.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Zap className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Direct Polychain Power</h4>
                      <p className="text-[#EBEDEF]/80 font-light">No Jackshafts. Motors belted with Polychain directly to the arbors, keeping inertia low.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 4: HOTT Technology & Safety */}
        <section className="py-24 px-6 md:px-16 bg-[#333333] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#450f1a] to-[#333333] opacity-80"></div>
          </div>
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-3/5 flex flex-col gap-8"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <CopyLinkButton url="https://youtu.be/OF1h2hjuZbg" />
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/OF1h2hjuZbg?rel=0&autoplay=1&mute=1&loop=1&playlist=OF1h2hjuZbg" 
                    title="HOTT Technology" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <CopyLinkButton url="https://youtu.be/6hpKX6wKWTs" />
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/6hpKX6wKWTs?rel=0&autoplay=1&mute=1&loop=1&playlist=6hpKX6wKWTs" 
                    title="Automatic Locking Arbor Door" 
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
                className="w-full lg:w-2/5"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                  HOTT <span className="text-[#540214]">Technology</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  Hanging-Over-The-Top (HOTT) design minimizes footprint, keeps moving parts out of debris zones, and provides direct paths for waste. The automatic locking arbor door uses a fail-safe, no-tools pull-stud design for rapid, secure access.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <ShieldCheck className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Fail-Safe Arbor Door</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Door will not open until arbors are completely stopped. No tools required for the pull-stud design.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Settings className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Reduced Maintenance</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Plumbing, cables, and moving parts are located out of the main debris area.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

      </div>

      {/* Interactive Technical Specifications */}
      <section id="specs" className="py-24 px-6 md:px-16 bg-gradient-to-b from-black to-[#333333] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-widest">
              Technical <span className="text-[#540214]">Specifications</span>
            </h2>
            <div className="w-24 h-2 bg-[#540214] mx-auto rounded-full"></div>
            <p className="text-[#8C9291] mt-6 max-w-2xl mx-auto font-light">
              Explore the underlying engineering and structural details that make the ProSaw the industry leader in curve profiling.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tabs */}
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {specs.map((spec, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between group ${
                    activeTab === idx 
                      ? 'bg-[#540214] text-white shadow-lg scale-105 z-10' 
                      : 'bg-white/5 text-[#8C9291] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {spec.title}
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeTab === idx ? 'rotate-90 text-[#FFB6C1]' : 'text-[#8C9291] group-hover:text-white group-hover:translate-x-1'}`} />
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#ebedef] rounded-3xl p-8 md:p-12 border border-black/5 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#450f1a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[#333333] mb-8 uppercase tracking-wide flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    {specs[activeTab].title}
                  </h3>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                    {specs[activeTab].items.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-6 h-6 text-[#450f1a] flex-shrink-0 mt-0.5" />
                        <span className="text-[#333333] font-light leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
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
            Ready to Upgrade Your <span className="font-bold text-[#540214]">Sawing Gang?</span>
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            Contact our team today to discuss how the ProSaw can transform your secondary breakdown process.
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
