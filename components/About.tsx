import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto z-10">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-maroon w-12"></div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-maroon">01. Profil</h2>
        </div>
        <h3 className="text-4xl font-bold text-white">
          Über <span className="text-maroon">mich</span>
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column: Main Text (Takes up ~66% width on large screens) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-lg"
        >
          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              Hallo, ich bin <span className="text-white font-medium">Felix</span>. Aktuell besuche ich das zweite Jahr der Informatikmittelschule an der Kantonsschule Hottingen. Mich fasziniert die Möglichkeit, komplexe Probleme durch logisches Denken und Code zu lösen.
            </p>
            <p>
              In der Schule und in meiner Freizeit baue ich mein Wissen in Python und Web-Technologien stetig aus. Dabei ist mir nicht nur wichtig, dass der Code funktioniert, sondern auch wie er strukturiert ist.
            </p>
            <p>
              Warum ich der richtige Praktikant für Ihr Team bin? Ich bringe eine schnelle Auffassungsgabe mit und habe große Lust, Neues zu lernen. Pünktlichkeit, Pflichtbewusstsein und offene Kommunikation sind für mich dabei keine leeren Worte, sondern die Basis für eine gute Zusammenarbeit im Team.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Feature Cards Stack (Takes up ~33% width) */}
        <div className="lg:col-span-1 flex flex-col gap-4">

          {/* Card 1: Ausbildung */}
          <HighlightCard
            icon={<GraduationCap size={28} />}
            title="Ausbildung"
            delay={0.1}
          >
            <div className="flex flex-col">
              <span>Informatikmittelschule, 2. Jahr</span>
              <span className="text-gray-400 text-sm mt-1">Kantonsschule Hottingen</span>
            </div>
          </HighlightCard>

          {/* Card 2: Fokus */}
          <HighlightCard
            icon={<Code2 size={28} />}
            title="Fokus"
            delay={0.2}
          >
            <div className="flex flex-col gap-1">
              <span>Python & SQL für Backend/Daten</span>
              <span className="text-gray-400 text-sm">Modernes Frontend mit React & Tailwind</span>
            </div>
          </HighlightCard>

          {/* Card 3: Team-Player */}
          <HighlightCard
            icon={<Users size={28} />}
            title="Team-Player"
            delay={0.3}
          >
            <div className="flex flex-col gap-1">
              <span>Pünktlich, pflichtbewusst & kommunikativ</span>
              <span className="text-gray-400 text-sm">Grundkenntnisse in Scrum & Git</span>
            </div>
          </HighlightCard>

        </div>
      </div>
    </section>
  );
};

// Reusable Highlight Card Component
const HighlightCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
}> = ({ icon, title, children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-navy-light/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-maroon/30 transition-colors shadow-lg h-full"
    >
      <div className="shrink-0 text-maroon p-3 bg-maroon/10 rounded-xl">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
        <div className="text-gray-300 text-sm leading-snug">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default About;