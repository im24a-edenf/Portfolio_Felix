import React from 'react';
import { HERO_CONTENT } from '../constants';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 max-w-7xl mx-auto z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-4 border border-maroon/50 rounded-full bg-maroon/10">
              <span className="text-maroon-glow text-xs uppercase tracking-widest font-semibold">Open to Work</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              {HERO_CONTENT.headline}
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            {HERO_CONTENT.subHeadline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#contact" 
              className="group flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-200"
            >
              Kontakt aufnehmen
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/5 transition-all">
              <Download size={18} />
              Lebenslauf
            </button>
          </motion.div>
        </div>

        {/* Visual Placeholder for Portrait - using CSS shape for abstraction instead of image to fit "Abstract" theme, or place for image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex justify-center items-center relative"
        >
          {/* Decorative Circle behind image */}
          <div className="absolute w-80 h-80 rounded-full border border-white/5 animate-pulse-slow"></div>
          <div className="absolute w-96 h-96 rounded-full border border-maroon/20"></div>
          
          {/* Image Container */}
          <div className="w-64 h-80 bg-navy-light rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
             {/* Placeholder for real image */}
             <img 
               src="https://picsum.photos/400/500?grayscale" 
               alt="Felix Eden" 
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;