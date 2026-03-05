import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-maroon w-12"></div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-maroon">03. Projekte</h2>
        </div>
        <h3 className="text-3xl font-bold text-white">Ausgewählte Arbeiten</h3>
        <p className="text-gray-400 mt-2 text-sm">Bereich wächst stetig mit meiner Ausbildung.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={index}
            className="group relative bg-navy-light/20 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-maroon/40 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="absolute top-8 right-8 text-maroon opacity-50">
               {project.status === 'Completed' ? <ExternalLink size={24} /> : <div className="text-xs border border-maroon px-2 py-1 rounded">WIP</div>}
            </div>

            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-maroon-glow transition-colors">{project.title}</h4>
            <p className="text-gray-400 mb-6 leading-relaxed min-h-[80px]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map(tech => (
                <span key={tech} className="text-xs font-mono text-gray-300 bg-navy-dark px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <a 
              href={project.link} 
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                project.status === 'Completed' ? 'text-white hover:text-maroon' : 'text-gray-500 cursor-not-allowed'
              }`}
            >
              {project.status === 'Completed' && <Github size={16} />}
              {project.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;