import React, { useRef, useState, useEffect } from 'react';
import { SKILL_DATA } from '../constants';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { CheckCircle2, Database, GitBranch, Monitor, Bot, RefreshCw } from 'lucide-react';
import { ProficiencyLevel, TechSkill } from '../types';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiPython, SiNodedotjs, SiGit, SiJetbrains } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [clickedNav, setClickedNav] = useState(false); // NEW: State to force visibility

  // Responsive Check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // NEW: Listen for Nav clicks to trigger animations immediately
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#skills') {
        setClickedNav(true);

        // Return to scroll-based control once the user moves
        const handleScrollOnce = () => {
          setClickedNav(false);
          window.removeEventListener('scroll', handleScrollOnce);
        };

        setTimeout(() => {
          window.addEventListener('scroll', handleScrollOnce);
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check on mount in case they refresh while on #skills
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // DESKTOP TRANSFORMS
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

  const mobileVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.15 }
    })
  };

  const getMotionProps = (desktopStyle: any, index: number) => {
    if (isMobile) {
      return {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        custom: index % 2,
        variants: mobileVariants
      };
    }
    return {
      style: {
        ...desktopStyle,
        // Override with 1 / 0% if nav was clicked, otherwise use scroll transform
        opacity: clickedNav ? 1 : desktopStyle.opacity,
        x: clickedNav ? "0%" : desktopStyle.x,
        transition: clickedNav ? "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)" : "none"
      }
    };
  };

  return (
      <section
          ref={containerRef}
          id="skills"
          className={`relative z-10 scroll-mt-20 ${isMobile ? "py-24 px-6 h-auto" : "h-[300vh]"}`}
      >
        <div className={isMobile
            ? "w-full flex flex-col gap-10 max-w-lg mx-auto"
            : "sticky top-0 h-screen w-full overflow-hidden flex flex-col pt-[110px] pb-8 px-4 md:px-8"
        }>
          <div className={isMobile ? "" : "shrink-0 mb-4 max-w-6xl 2xl:max-w-7xl min-[1920px]:max-w-[1500px] mx-auto w-full"}>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px bg-maroon w-8 md:w-12"></div>
              <h2 className="text-xs md:text-xs font-bold uppercase tracking-widest text-maroon">02. Skills</h2>
            </div>
            <h3 className="text-3xl md:text-3xl font-bold text-white">Werkzeugkasten</h3>
          </div>

          <div className={isMobile
              ? "flex flex-col gap-6"
              : "flex-grow min-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 pb-2 max-w-6xl 2xl:max-w-7xl min-[1920px]:max-w-[1500px] mx-auto w-full"
          }>
            <motion.div {...getMotionProps({ x: x1, opacity: o1 }, 0)} className="lg:col-span-7 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-xl p-6 md:p-4 hover:border-maroon/30 transition-colors shadow-lg flex flex-col justify-center">
              <h4 className="text-xl md:text-base min-[1920px]:text-2xl font-bold text-white mb-4 md:mb-3">{SKILL_DATA.frontend.title}</h4>
              <SkillTagGroup skills={SKILL_DATA.frontend.skills as TechSkill[]} />
            </motion.div>

            <motion.div {...getMotionProps({ x: x2, opacity: o2 }, 1)} className="lg:col-span-5 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-xl p-6 md:p-4 hover:border-maroon/30 transition-colors shadow-lg flex flex-col justify-center">
              <h4 className="text-xl md:text-base min-[1920px]:text-2xl font-bold text-white mb-4 md:mb-3">{SKILL_DATA.backend.title}</h4>
              <SkillTagGroup skills={SKILL_DATA.backend.skills as TechSkill[]} />
            </motion.div>

            <motion.div {...getMotionProps({ x: x3, opacity: o3 }, 2)} className="lg:col-span-4 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-xl p-6 md:p-4 hover:border-maroon/30 transition-colors shadow-lg flex flex-col justify-center">
              <h4 className="text-xl md:text-sm min-[1920px]:text-2xl font-bold text-white mb-4 md:mb-3">{SKILL_DATA.database.title}</h4>
              <SkillTagGroup skills={SKILL_DATA.database.skills as TechSkill[]} />
            </motion.div>

            <motion.div {...getMotionProps({ x: x4, opacity: o4 }, 3)} className="lg:col-span-5 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-xl p-6 md:p-4 hover:border-maroon/30 transition-colors shadow-lg flex flex-col justify-center">
              <h4 className="text-xl md:text-sm min-[1920px]:text-2xl font-bold text-white mb-4 md:mb-3">{SKILL_DATA.tools.title}</h4>
              <SkillTagGroup skills={SKILL_DATA.tools.skills as TechSkill[]} />
            </motion.div>

            <motion.div {...getMotionProps({ x: x5, opacity: o5 }, 4)} className="lg:col-span-3 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-xl p-6 md:p-4 hover:border-maroon/30 transition-colors shadow-lg flex flex-col justify-center">
              <h4 className="text-xl md:text-sm min-[1920px]:text-2xl font-bold text-white mb-4 md:mb-3">{SKILL_DATA.soft.title}</h4>
              <ul className="space-y-3 md:space-y-2">
                {(SKILL_DATA.soft.skills as string[]).map((skill) => (
                    <li key={skill} className="flex items-start gap-3 md:gap-2 group">
                      <CheckCircle2 size={18} className="text-maroon mt-0.5 shrink-0 group-hover:text-white transition-colors min-[1920px]:w-6 min-[1920px]:h-6" />
                      <span className="text-gray-300 text-base md:text-xs min-[1920px]:text-xl font-medium leading-snug">{skill}</span>
                    </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

const skillIcons: Record<string, React.ReactNode> = {
  'HTML5':               <SiHtml5 />,
  'CSS3':                <SiCss />,
  'JavaScript (ES6+)':  <SiJavascript />,
  'React':               <SiReact />,
  'Next.js':             <SiNextdotjs />,
  'Python':              <SiPython />,
  'Java':                <FaJava />,
  'Node.js':             <SiNodedotjs />,
  'SQL':                 <Database size={12} />,
  'Data Modelling':      <GitBranch size={12} />,
  'Scrum':               <RefreshCw size={12} />,
  'Responsive Design':   <Monitor size={12} />,
  'AI-Assisted Coding':  <Bot size={12} />,
  'JetBrains Tools':     <SiJetbrains />,
  'Git / GitHub':        <SiGit />,
};

const proficiencyStyles: Record<ProficiencyLevel, string> = {
  Expert: 'bg-maroon text-white border-maroon',
  Proficient: 'bg-transparent text-slate-200 border-maroon/50',
  Familiar: 'bg-transparent text-gray-400 border-white/10',
};

const SkillTagGroup: React.FC<{ skills: TechSkill[] }> = ({ skills }) => {
  const tagged = skills.filter(s => s.isTag);
  const levelled = skills.filter(s => !s.isTag);

  const groups: ProficiencyLevel[] = ['Expert', 'Proficient', 'Familiar'];

  return (
    <div className="space-y-3">
      {groups.map(level => {
        const group = levelled.filter(s => s.proficiency === level);
        if (group.length === 0) return null;
        return (
          <div key={level} className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] min-[1920px]:text-base uppercase tracking-widest text-gray-500 w-full">{level}</span>
            {group.map(skill => (
              <span key={skill.name} className={`flex items-center gap-1.5 px-3 min-[1920px]:px-5 py-1 min-[1920px]:py-2 min-[1920px]:gap-3 rounded-full text-xs min-[1920px]:text-[17px] font-medium border ${proficiencyStyles[level]}`}>
                {skillIcons[skill.name] && <span className="text-[12px] min-[1920px]:text-xl leading-none flex items-center justify-center">{skillIcons[skill.name]}</span>}
                {skill.name}
              </span>
            ))}
          </div>
        );
      })}
      {tagged.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {tagged.map(skill => (
            <span key={skill.name} className="flex items-center gap-1.5 px-3 min-[1920px]:px-5 py-1 min-[1920px]:py-2 min-[1920px]:gap-3 bg-navy-dark border border-white/10 rounded-full text-xs min-[1920px]:text-[17px] font-medium text-gray-300">
              {skillIcons[skill.name] && <span className="text-[12px] min-[1920px]:text-xl leading-none flex items-center justify-center">{skillIcons[skill.name]}</span>}
              {skill.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;