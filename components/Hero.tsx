import React from 'react';
import { HERO_CONTENT, PERSONAL_INFO } from '../constants';
import { ArrowDown, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 max-w-7xl 2xl:max-w-[1600px] min-[1920px]:max-w-[1800px] mx-auto z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* Text Content */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl 2xl:text-7xl min-[1920px]:text-[80px] font-bold leading-tight text-white"
          >
            {HERO_CONTENT.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg 2xl:text-xl min-[1920px]:text-2xl text-gray-400 max-w-xl min-[1920px]:max-w-3xl leading-relaxed"
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
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="/Felix_Lebenslauf.pdf"
              download
              className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/5 transition-all"
            >
              <Download size={18} />
              Lebenslauf
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex justify-center items-center relative"
        >
          {/* Glow behind portrait */}
          <div className="absolute w-72 h-72 rounded-full bg-maroon/10 blur-3xl"></div>
          {/* Decorative rings */}
          <div className="absolute w-80 h-80 rounded-full border border-white/5 animate-pulse-slow"></div>
          <div className="absolute w-96 h-96 rounded-full border border-maroon/20"></div>

          {/* Image Container */}
          <div className="w-64 h-80 2xl:w-72 2xl:h-96 min-[1920px]:w-80 min-[1920px]:h-[28rem] bg-navy-light rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <img
              src="/ProfilePic.jpg"
              alt="Felix Eden"
              width={256}
              height={320}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            {/* Name label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-semibold text-sm">{PERSONAL_INFO.name}</p>
              <p className="text-gray-400 text-xs">Software Developer</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-maroon" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;