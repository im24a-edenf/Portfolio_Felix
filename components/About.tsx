import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 pt-24 pb-48 w-full">

      {/* Full-bleed blurred background — solid over content, fades to transparent at screen edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          background: 'rgba(15, 23, 42, 0.6)',
          maskImage: [
            'linear-gradient(to right,  transparent 0px, black 100px, black calc(100% - 100px), transparent 100%)',
            'linear-gradient(to bottom, transparent 0px, black 160px, black calc(100% - 160px), transparent 100%)',
          ].join(', '),
          WebkitMaskImage: [
            'linear-gradient(to right,  transparent 0px, black 100px, black calc(100% - 100px), transparent 100%)',
            'linear-gradient(to bottom, transparent 0px, black 160px, black calc(100% - 160px), transparent 100%)',
          ].join(', '),
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl 2xl:max-w-[1600px] min-[1920px]:max-w-[1800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px bg-maroon w-12" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-maroon">01. Profil</h2>
            </div>
            <h3
              className="text-3xl md:text-[42px] min-[1920px]:text-6xl font-medium leading-tight text-slate-100"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Über <em style={{ color: 'var(--color-maroon)' }}>mich</em>
            </h3>
          </div>

          {/* Three-column grid — stacks on mobile */}
          <div
            className="grid grid-cols-1 md:grid-cols-[3fr_1px_2fr] gap-10 md:gap-16 items-start"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {/* Left — bio text */}
            <div className="space-y-5 text-[15px] 2xl:text-base min-[1920px]:text-[18px] leading-[1.8] text-slate-400">
              <p>
                Hallo, ich bin <span className="text-slate-100 font-medium">Felix</span>. Aktuell besuche ich das zweite Jahr der Informatikmittelschule an der Kantonsschule Hottingen. Mich fasziniert die Möglichkeit, komplexe Probleme durch logisches Denken und Code zu lösen.
              </p>
              <p>
                In der Schule und in meiner Freizeit baue ich mein Wissen in Python und Web-Technologien stetig aus. Dabei ist mir nicht nur wichtig, dass der Code funktioniert, sondern auch wie er strukturiert ist.
              </p>
              <p>
                Warum ich der richtige Praktikant für Ihr Team bin? Ich bringe eine schnelle Auffassungsgabe mit und habe große Lust, Neues zu lernen. Pünktlichkeit, Pflichtbewusstsein und offene Kommunikation sind für mich dabei keine leeren Worte, sondern die Basis für eine gute Zusammenarbeit im Team.
              </p>
            </div>

            {/* Vertical divider — hidden on mobile */}
            <div className="hidden md:block self-stretch" style={{ width: '1px', backgroundColor: 'rgba(225, 29, 72, 0.3)' }} />

            {/* Right — info groups */}
            <div className="pt-1 space-y-8">
              <div>
                <p className="text-[11px] tracking-[2px] uppercase text-slate-500 mb-1.5">Ausbildung</p>
                <p className="text-[15px] font-medium text-slate-100 leading-snug">Informatikmittelschule, 2. Jahr</p>
                <p className="text-[13px] text-slate-500">Kantonsschule Hottingen</p>
              </div>
              <div className="h-px" style={{ backgroundColor: 'rgba(225, 29, 72, 0.3)' }} />
              <div>
                <p className="text-[11px] tracking-[2px] uppercase text-slate-500 mb-1.5">Fokus</p>
                <p className="text-[15px] font-medium text-slate-100 leading-snug">Python & SQL für Backend/Daten</p>
                <p className="text-[13px] text-slate-500">Modernes Frontend mit React & Tailwind</p>
              </div>
              <div className="h-px" style={{ backgroundColor: 'rgba(225, 29, 72, 0.3)' }} />
              <div>
                <p className="text-[11px] tracking-[2px] uppercase text-slate-500 mb-1.5">Team-Player</p>
                <p className="text-[15px] font-medium text-slate-100 leading-snug">Pünktlich, pflichtbewusst & kommunikativ</p>
                <p className="text-[13px] text-slate-500">Grundkenntnisse in Scrum & Git</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
