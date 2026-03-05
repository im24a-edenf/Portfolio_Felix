import React, { useRef, useState, useEffect } from 'react';
import { SKILL_DATA } from '../constants';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface TechSkill {
  name: string;
  level?: number;
  isTag?: boolean;
}

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive Check
  useEffect(() => {
    const checkMobile = () => {
      // 768px is standard tablet/mobile breakpoint
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initialize
    checkMobile();
    
    // Listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // SCROLL HOOKS (Always called, but effect applied conditionally)
  // Target ref is the container. On desktop, this is tall (300vh). On mobile, it's auto.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // DESKTOP TRANSFORMS (Horizontal Slide-In based on scroll)
  const x1 = useTransform(scrollYProgress, [0.1, 0.25], ["50%", "0%"]);
  const o1 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  const x2 = useTransform(scrollYProgress, [0.2, 0.35], ["50%", "0%"]);
  const o2 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

  const x3 = useTransform(scrollYProgress, [0.3, 0.45], ["50%", "0%"]);
  const o3 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);

  const x4 = useTransform(scrollYProgress, [0.4, 0.55], ["50%", "0%"]);
  const o4 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  const x5 = useTransform(scrollYProgress, [0.5, 0.65], ["50%", "0%"]);
  const o5 = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);

  // MOBILE ANIMATION VARIANTS (Refined Slide-Up)
  const mobileVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50 // Start 50px down
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1], // Smooth settling easing
        delay: i * 0.15 // Stagger based on index passed via custom
      } 
    })
  };

  // Helper to switch animation props based on device
  const getMotionProps = (desktopStyle: any, index: number) => {
    if (isMobile) {
      return {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" }, // Trigger when 50px into viewport
        custom: index % 2, // Stagger pairs (0, 0.15, 0, 0.15...) so scrolling feels responsive but grouped
        variants: mobileVariants
      };
    }
    return {
      style: desktopStyle
    };
  };

  return (
    <section 
      ref={containerRef} 
      id="skills" 
      // Layout Switching: Mobile = Auto height, Desktop = 300vh for scroll distance
      className={`relative z-10 ${isMobile ? "py-24 px-6 h-auto" : "h-[300vh]"}`}
    >
      
      {/* 
        CONTAINER LOGIC:
        Mobile: Standard flow, simple column.
        Desktop: Sticky viewport, fills screen, centered content.
      */}
      <div className={isMobile 
        ? "w-full flex flex-col gap-10 max-w-lg mx-auto" 
        : "sticky top-0 h-screen w-full overflow-hidden flex flex-col pt-[110px] pb-8 px-4 md:px-8"
      }>
        
        {/* Header Section */}
        <div className={isMobile ? "" : "shrink-0 mb-4 max-w-6xl mx-auto w-full"}>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px bg-maroon w-8 md:w-12"></div>
            <h2 className="text-xs md:text-xs font-bold uppercase tracking-widest text-maroon">02. Skills</h2>
          </div>
          <h3 className="text-3xl md:text-3xl font-bold text-white">Werkzeugkasten</h3>
        </div>

        {/* 
          GRID / STACK LOGIC:
          Mobile: Vertical stack (flex-col)
          Desktop: 12-column Grid (compact)
        */}
        <div className={isMobile
          ? "flex flex-col gap-6"
          : "flex-grow min-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 pb-2 max-w-6xl mx-auto w-full"
        }>

          {/* CARD 1: FRONTEND */}
          <motion.div 
            {...getMotionProps({ x: x1, opacity: o1 }, 0)}
            className="lg:col-span-7 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-xl p-6 md:p-4 hover:border-maroon/30 transition-colors shadow-lg flex flex-col justify-center"
          >
            <h4 className="text-xl md:text-base font-bold text-white mb-4 md:mb-3">
              {SKILL_DATA.frontend.title}
            </h4>
            <div className="space-y-3 md:space-y-2">
              {(SKILL_DATA.frontend.skills as TechSkill[]).map((skill) => (
                <ProgressBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* CARD 2: BACKEND */}
          <motion.div 
            {...getMotionProps({ x: x2, opacity: o2 }, 1)}
            className="lg:col-span-5 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-xl p-6 md:p-4 hover:border-maroon/30 transition-colors shadow-lg flex flex-col justify-center"
          >
            <h4 className="text-xl md:text-base font-bold text-white mb-4 md:mb-3">
              {SKILL_DATA.backend.title}
            </h4>
            <div className="space-y-3 md:space-y-2">
              {(SKILL_DATA.backend.skills as TechSkill[]).map((skill) => (
                <ProgressBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* CARD 3: DATABASE */}
          <motion.div 
            {...getMotionProps({ x: x3, opacity: o3 }, 2)}
            className="lg:col-span-4 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-xl p-6 md:p-4 hover:border-maroon/30 transition-colors shadow-lg flex flex-col justify-center"
          >
            <h4 className="text-xl md:text-sm font-bold text-white mb-4 md:mb-3">
              {SKILL_DATA.database.title}
            </h4>
            <div className="space-y-3 md:space-y-2">
              {(SKILL_DATA.database.skills as TechSkill[]).map((skill) => (
                <ProgressBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* CARD 4: TOOLS */}
          <motion.div 
            {...getMotionProps({ x: x4, opacity: o4 }, 3)}
            className="lg:col-span-5 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-xl p-6 md:p-4 hover:border-maroon/30 transition-colors shadow-lg flex flex-col justify-center"
          >
            <h4 className="text-xl md:text-sm font-bold text-white mb-4 md:mb-3">
              {SKILL_DATA.tools.title}
            </h4>
            <div className="space-y-3 md:space-y-2">
              {(SKILL_DATA.tools.skills as TechSkill[]).filter(s => !s.isTag).map((skill) => (
                 <ProgressBar key={skill.name} skill={skill} />
              ))}
              
              {/* Pills */}
              <div className="flex flex-wrap gap-2 md:gap-1.5 pt-2 md:pt-1">
                {(SKILL_DATA.tools.skills as TechSkill[]).filter(s => s.isTag).map((skill) => (
                  <span key={skill.name} className="px-3 py-1 md:px-2 md:py-0.5 bg-navy-dark border border-white/10 rounded-full text-sm md:text-[10px] font-medium text-gray-300">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 5: SOFT SKILLS */}
          <motion.div 
            {...getMotionProps({ x: x5, opacity: o5 }, 4)}
            className="lg:col-span-3 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-xl p-6 md:p-4 hover:border-maroon/30 transition-colors shadow-lg flex flex-col justify-center"
          >
            <h4 className="text-xl md:text-sm font-bold text-white mb-4 md:mb-3">
              {SKILL_DATA.soft.title}
            </h4>
            <ul className="space-y-3 md:space-y-2">
              {(SKILL_DATA.soft.skills as string[]).map((skill) => (
                <li key={skill} className="flex items-start gap-3 md:gap-2 group">
                  <CheckCircle2 size={18} className="text-maroon mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                  <span className="text-gray-300 text-base md:text-xs font-medium leading-snug">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Responsive Progress Bar Component
const ProgressBar: React.FC<{ skill: TechSkill }> = ({ skill }) => {
  return (
    <div className="group w-full">
      <div className="flex justify-between items-center text-sm md:text-xs mb-1.5 md:mb-1">
        <span className="text-gray-300 font-medium group-hover:text-white transition-colors truncate pr-2">{skill.name}</span>
        <span className="text-maroon font-bold text-xs md:text-[10px]">{skill.level}%</span>
      </div>
      <div className="h-2 md:h-1.5 w-full bg-navy-dark rounded-full overflow-hidden border border-white/5">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="h-full bg-maroon rounded-full relative"
        >
          <div className="absolute inset-0 bg-white/10"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;