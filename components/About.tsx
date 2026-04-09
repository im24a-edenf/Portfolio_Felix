import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 pt-24 pb-48 w-full">

      {/* Full-bleed blurred background — solid over content, fades to transparent at screen edges */}
      <div style={{
        position: 'absolute',
        inset: 0,
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
        pointerEvents: 'none',
      }} />

      {/* Content — max-width constrained */}
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px bg-maroon w-12"></div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-maroon">01. Profil</h2>
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '42px',
              fontWeight: 500,
              lineHeight: 1.1,
              color: '#f1f5f9',
            }}>
              Über <em style={{ color: 'var(--color-maroon)', fontStyle: 'italic' }}>mich</em>
            </h3>
          </div>

          {/* Three-column grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1px 2fr',
            gap: '4rem',
            alignItems: 'start',
            fontFamily: "'DM Sans', sans-serif",
          }}>

            {/* Left — bio text */}
            <div>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#94a3b8', margin: 0 }}>
                Hallo, ich bin <span style={{ color: '#f1f5f9', fontWeight: 500 }}>Felix</span>. Aktuell besuche ich das zweite Jahr der Informatikmittelschule an der Kantonsschule Hottingen. Mich fasziniert die Möglichkeit, komplexe Probleme durch logisches Denken und Code zu lösen.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#94a3b8', marginTop: '1.25rem' }}>
                In der Schule und in meiner Freizeit baue ich mein Wissen in Python und Web-Technologien stetig aus. Dabei ist mir nicht nur wichtig, dass der Code funktioniert, sondern auch wie er strukturiert ist.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#94a3b8', marginTop: '1.25rem' }}>
                Warum ich der richtige Praktikant für Ihr Team bin? Ich bringe eine schnelle Auffassungsgabe mit und habe große Lust, Neues zu lernen. Pünktlichkeit, Pflichtbewusstsein und offene Kommunikation sind für mich dabei keine leeren Worte, sondern die Basis für eine gute Zusammenarbeit im Team.
              </p>
            </div>

            {/* Middle — vertical divider */}
            <div style={{
              width: '1px',
              backgroundColor: 'rgba(225, 29, 72, 0.3)',
              alignSelf: 'stretch',
            }} />

            {/* Right — info groups */}
            <div style={{ paddingTop: '0.25rem' }}>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#64748b', marginBottom: '6px' }}>Ausbildung</p>
                <p style={{ fontSize: '15px', fontWeight: 500, color: '#f1f5f9', lineHeight: 1.5, margin: 0 }}>Informatikmittelschule, 2. Jahr</p>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Kantonsschule Hottingen</p>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(225, 29, 72, 0.3)', marginBottom: '2rem' }} />

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#64748b', marginBottom: '6px' }}>Fokus</p>
                <p style={{ fontSize: '15px', fontWeight: 500, color: '#f1f5f9', lineHeight: 1.5, margin: 0 }}>Python & SQL für Backend/Daten</p>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Modernes Frontend mit React & Tailwind</p>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(225, 29, 72, 0.3)', marginBottom: '2rem' }} />

              <div>
                <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#64748b', marginBottom: '6px' }}>Team-Player</p>
                <p style={{ fontSize: '15px', fontWeight: 500, color: '#f1f5f9', lineHeight: 1.5, margin: 0 }}>Pünktlich, pflichtbewusst & kommunikativ</p>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Grundkenntnisse in Scrum & Git</p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
