
import React from 'react';
import { useTranslation } from '../src/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projectList = [
    { id: 'stock', icon: '📊', color: 'bg-black text-white' },
    { id: 'showcase', icon: '🌐', color: 'bg-black text-white' },
    { id: 'maintenance', icon: '💻', color: 'bg-black text-white' },
    { id: 'network', icon: '🔌', color: 'bg-black text-white' },
  ];

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">
            {t.projects.title}
          </h2>
          <p className="text-4xl md:text-5xl font-black text-black tracking-tighter max-w-2xl leading-none uppercase">
            {t.projects.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectList.map((project, index) => (
            <div 
              key={project.id}
              className="group relative p-8 border border-black/5 bg-slate-50/50 rounded-3xl hover:bg-black transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-black text-slate-400 group-hover:text-white/40 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <ArrowUpRight size={14} className="text-black group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="text-2xl mb-4 group-hover:scale-110 transition-transform origin-left duration-500">
                    {project.icon}
                  </div>
                  <h3 className="text-sm font-black text-black mb-2 uppercase tracking-tight group-hover:text-white transition-colors">
                    {t.projects.items[project.id].t}
                  </h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed group-hover:text-white/60 transition-colors">
                    {t.projects.items[project.id].d}
                  </p>
                </div>
              </div>

              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
