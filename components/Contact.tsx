import React from 'react';
import { CONTACT_CONTENT, PERSONAL_INFO } from '../constants';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-navy-dark border-t border-white/5 pt-24 pb-12 px-6 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px bg-maroon w-12"></div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-maroon">04. Kontakt</h2>
          <div className="h-px bg-maroon w-12"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {CONTACT_CONTENT.title}
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          {CONTACT_CONTENT.text}
        </p>

        <div className="flex justify-center gap-6 mb-16">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-16 h-16 rounded-full bg-navy-light border border-white/5 flex items-center justify-center text-white hover:bg-maroon hover:border-maroon transition-all group"
            aria-label="Email"
          >
            <Mail className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            className="w-16 h-16 rounded-full bg-navy-light border border-white/5 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all group"
            aria-label="LinkedIn"
          >
            <Linkedin className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            className="w-16 h-16 rounded-full bg-navy-light border border-white/5 flex items-center justify-center text-white hover:bg-black hover:border-white transition-all group"
            aria-label="GitHub"
          >
            <Github className="group-hover:scale-110 transition-transform" />
          </a>
          <button
            className="w-16 h-16 rounded-full bg-navy-light border border-white/5 flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-all group"
            aria-label="Resume"
          >
            <FileText className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="text-gray-600 text-sm font-mono border-t border-white/5 pt-8">
          <p>{CONTACT_CONTENT.footer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;