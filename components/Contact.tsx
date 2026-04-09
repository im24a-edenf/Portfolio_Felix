import React from 'react';
import { CONTACT_CONTENT, PERSONAL_INFO } from '../constants';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-navy-dark pt-24 pb-12 px-6 z-10">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full pointer-events-none">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-10 block" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" fill="#020617" />
        </svg>
      </div>
      <div className="max-w-4xl 2xl:max-w-5xl min-[1920px]:max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px bg-maroon w-12"></div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-maroon">04. Kontakt</h2>
          <div className="h-px bg-maroon w-12"></div>
        </div>
        <h2 className="text-4xl md:text-5xl min-[1920px]:text-6xl font-bold text-white mb-6">
          {CONTACT_CONTENT.title}
        </h2>
        <p className="text-gray-400 text-lg min-[1920px]:text-xl mb-12 max-w-2xl min-[1920px]:max-w-4xl mx-auto">
          {CONTACT_CONTENT.text}
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 min-[1920px]:gap-10 mb-16 min-[1920px]:mb-24">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-16 h-16 min-[1920px]:w-24 min-[1920px]:h-24 rounded-full bg-navy-light border border-white/5 flex items-center justify-center text-white hover:bg-maroon hover:border-maroon transition-all group"
            aria-label="Email"
          >
            <Mail className="group-hover:scale-110 transition-transform min-[1920px]:w-10 min-[1920px]:h-10" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 min-[1920px]:w-24 min-[1920px]:h-24 rounded-full bg-navy-light border border-white/5 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all group"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="group-hover:scale-110 transition-transform min-[1920px]:w-10 min-[1920px]:h-10" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 min-[1920px]:w-24 min-[1920px]:h-24 rounded-full bg-navy-light border border-white/5 flex items-center justify-center text-white hover:bg-black hover:border-white transition-all group"
            aria-label="GitHub"
          >
            <FaGithub className="group-hover:scale-110 transition-transform min-[1920px]:w-10 min-[1920px]:h-10" />
          </a>
          <a
            href="/Felix_Lebenslauf.pdf"
            download
            className="w-16 h-16 min-[1920px]:w-24 min-[1920px]:h-24 rounded-full bg-navy-light border border-white/5 flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-all group"
            aria-label="Lebenslauf herunterladen"
          >
            <FileText className="group-hover:scale-110 transition-transform min-[1920px]:w-10 min-[1920px]:h-10" />
          </a>
        </div>

        <div className="text-gray-600 text-sm font-mono border-t border-white/5 pt-8">
          <p>{CONTACT_CONTENT.footer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;