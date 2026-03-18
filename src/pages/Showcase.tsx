import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Copy, Check, Quote, ArrowRight, Film, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const showcaseVideos = [
  {
    title: "Steely Lumber Testimonial",
    videoId: "znrDbW5S49M",
    link: "https://youtu.be/znrDbW5S49M",
    description: "Chris Demilliano from Steely Lumber Company, Huntsville TX shares his experience with RPM's ProSaw.",
    quote: "I would absolutely recommend RPM, [their] products have a certain level of machine work that is above and beyond most of the machine centers that I've seen in the field, and their quality really shows once the machine gets on site.",
    author: "Chris Demilliano, Steely Lumber Company"
  },
  {
    title: "Shuqualak Lumber Testimonial",
    videoId: "a8KlEj5tlfA",
    link: "https://youtu.be/a8KlEj5tlfA",
    description: "Charlie Thomas from Shuqualak Lumber Company, Shuqualak MS shares his experience with RPM's ProSaw.",
    quote: "You will not regret investing your money with RPM. You're going to see increased production, increased recovery, and fewer employees. It's been a real pleasure working with them and I would highly recommend RPM to anybody that wants to make a lot of money in this lumber business.",
    author: "Charlie Thomas, Shuqualak Lumber Company"
  },
  {
    title: "ProSaw 12 Promotion",
    videoId: "TuMPCC68qPc",
    link: "https://youtu.be/TuMPCC68qPc",
    description: "ProSaw 12 installed at Sierra Pacific Industries in Burlington, WA. Watch the precision and speed of our advanced primary breakdown technology.",
    quote: null,
    author: null
  },
  {
    title: "RPM Prodog System",
    videoId: "5oGhA4bucXo",
    link: "https://youtu.be/5oGhA4bucXo",
    description: "Wood World presents how the RPM ProDog system is a revolutionary CNC machine for logs, using advanced scanning and servo technology to deliver unmatched cut accuracy and precision—no matter the log's shape.",
    quote: null,
    author: null
  }
];

const getSectionStyle = (index: number) => {
  const styles = [
    { 
      bg: 'bg-[#111111]', // Deep dark gray, almost black
      text: 'text-white', 
      subText: 'text-gray-300', 
      accent: 'text-rpm-maroon', 
      border: 'border-white/5', 
      quoteIcon: 'text-rpm-maroon', 
      btnBg: 'bg-rpm-maroon', 
      btnText: 'text-white', 
      btnHover: 'hover:bg-white hover:text-rpm-black',
      numberColor: 'text-white/[0.02]'
    },
    { 
      bg: 'bg-[#f8f9fa]', // Very light gray, almost white
      text: 'text-rpm-black', 
      subText: 'text-gray-600', 
      accent: 'text-rpm-maroon', 
      border: 'border-black/5', 
      quoteIcon: 'text-rpm-maroon', 
      btnBg: 'bg-rpm-black', 
      btnText: 'text-white', 
      btnHover: 'hover:bg-rpm-maroon hover:text-white',
      numberColor: 'text-black/[0.03]'
    },
    { 
      bg: 'bg-[#2a010a]', // Very dark maroon
      text: 'text-white', 
      subText: 'text-white/80', 
      accent: 'text-white', 
      border: 'border-white/10', 
      quoteIcon: 'text-white/30', 
      btnBg: 'bg-white', 
      btnText: 'text-rpm-black', 
      btnHover: 'hover:bg-rpm-black hover:text-white',
      numberColor: 'text-white/[0.03]'
    },
    { 
      bg: 'bg-[#e0e3e6]', // Slightly darker off-white/silver
      text: 'text-rpm-black', 
      subText: 'text-gray-700', 
      accent: 'text-rpm-maroon', 
      border: 'border-black/10', 
      quoteIcon: 'text-rpm-maroon', 
      btnBg: 'bg-rpm-maroon', 
      btnText: 'text-white', 
      btnHover: 'hover:bg-rpm-black hover:text-white',
      numberColor: 'text-black/[0.04]'
    },
  ];
  return styles[index % styles.length];
};

const VideoFeature: React.FC<{ video: any, index: number }> = ({ video, index }) => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const isEven = index % 2 === 0;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const style = getSectionStyle(index);

  const handleCopy = () => {
    navigator.clipboard.writeText(video.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={`relative w-full overflow-hidden ${style.bg} py-12 lg:py-16 transition-colors duration-500`} ref={containerRef}>
      {/* Background large number */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] lg:text-[20rem] font-display font-bold ${style.numberColor} pointer-events-none z-0 select-none transition-colors duration-500`}>
        0{index + 1}
      </div>

      <motion.div 
        style={{ opacity }}
        className={`relative max-w-7xl mx-auto px-6 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center z-10`}
      >
        {/* Video Side */}
        <div className="w-full lg:w-3/5 relative group">
          <motion.div 
            style={{ y }}
            className={`absolute -inset-4 ${style.bg === 'bg-[#2a010a]' ? 'bg-black/30' : 'bg-rpm-maroon/20'} blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}
          />
          
          <div className="relative aspect-video rounded-xl p-[2px] bg-gradient-to-br from-white/20 via-transparent to-black/50 group-hover:from-rpm-maroon/50 group-hover:to-rpm-maroon/20 transition-all duration-500 shadow-2xl">
            <div className="w-full h-full rounded-lg overflow-hidden bg-black relative">
              {!isPlaying ? (
                <div 
                  className="absolute inset-0 cursor-pointer group/play"
                  onClick={() => setIsPlaying(true)}
                >
                  <img 
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
                    alt={video.title}
                    className="w-full h-full object-cover opacity-70 group-hover/play:opacity-100 group-hover/play:scale-105 transition-all duration-700 grayscale group-hover/play:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/play:opacity-60 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-rpm-maroon/90 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(69,15,26,0.8)] transform group-hover/play:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
          
          {/* Floating Action Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCopy}
            className={`absolute -bottom-5 -right-5 lg:-bottom-6 lg:-right-6 ${style.btnBg} ${style.btnText} ${style.btnHover} p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-20 group/btn border border-white/10`}
            title="Copy video link"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={`text-3xl lg:text-4xl font-display font-bold ${style.text} mb-4 uppercase tracking-widest leading-tight drop-shadow-sm`}>
              {video.title}
            </h2>
            
            <div className={`w-12 h-1 ${style.bg === 'bg-[#2a010a]' ? 'bg-white/50' : 'bg-rpm-maroon'} mb-6`}></div>
            
            <p className={`text-base lg:text-lg ${style.subText} font-light mb-6 leading-relaxed`}>
              {video.description}
            </p>

            {video.quote && (
              <div className="relative mt-4 pl-6 md:pl-8">
                <Quote className={`absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 ${style.quoteIcon} opacity-40 -translate-x-2 -translate-y-2`} />
                <p className={`text-lg md:text-xl ${style.text} font-serif italic leading-relaxed mb-4 relative z-10`}>
                  "{video.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-[1px] ${style.bg === 'bg-[#2a010a]' ? 'bg-white/50' : 'bg-rpm-maroon'}`}></div>
                  <p className={`text-xs font-sans font-bold ${video.title === "Steely Lumber Testimonial" ? "text-[#ebedef]" : style.accent} uppercase tracking-widest`}>
                    {video.author}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Showcase = () => {
  return (
    <div className="min-h-screen bg-rpm-black overflow-hidden selection:bg-rpm-maroon selection:text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-[#0a0a0a]">
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

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 bg-[#ebedef] text-sm md:text-base font-sans font-bold tracking-[0.2em] text-rpm-black uppercase mb-6 backdrop-blur-md rounded-full shadow-2xl">
              <Film className="w-4 h-4 text-rpm-maroon" />
              RPM equipment in action
            </div>
            
            <div className="flex items-center gap-4 md:gap-6 mb-6">
              <img src="https://www.rpmachinery.com/images/rpm-logo-edits-centered-textbox_embedMask_Transparent_300dpi.png" alt="RPM Logo" className="h-16 md:h-24 w-auto object-contain" />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-widest drop-shadow-2xl">
                RPM <span className="text-rpm-maroon">Showcase</span>
              </h1>
            </div>
            
            <div className="w-20 h-1 bg-rpm-maroon mb-6 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-[#ebedef] font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              See our machinery in action and hear from our customers how our advanced sawmill technology is transforming operations across the industry.
            </p>
          </motion.div>
        </div>
        
      </section>

      {/* Videos Section */}
      <div className="relative z-10">
        {showcaseVideos.map((video, index) => (
          <VideoFeature key={video.videoId} video={video} index={index} />
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-16 px-6 relative z-10 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay grayscale object-cover"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-rpm-maroon to-[#3a010e] border border-white/10 p-10 lg:p-16 text-center relative shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6 uppercase tracking-widest leading-tight drop-shadow-lg">
              Ready to upgrade your operation?
            </h2>
            <p className="text-lg text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss how RPM can bring unmatched precision and efficiency to your facility.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 bg-white text-rpm-black px-8 py-4 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-rpm-black hover:text-white transition-all duration-300 shadow-xl group border border-transparent hover:border-white/20 rounded-full"
            >
              Contact Us <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
