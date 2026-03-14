
import React from 'react';
import Projects from '../components/Projects';
import { useTranslation } from '../src/context/LanguageContext';

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="brutal-card bg-black p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brutal-accent)]/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-7xl font-black italic uppercase tracking-tighter mb-8 font-display">
              {t.projects.title}
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl font-bold leading-relaxed">
              {t.projects.desc}
            </p>
          </div>
        </div>
      </div>
      
      <Projects />
      
      {/* Additional content for the page if needed */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-8 uppercase italic tracking-tighter font-display">Vous avez un projet similaire ?</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto font-bold text-lg leading-snug">
            Chaque projet est unique. Je m'adapte à vos contraintes techniques et budgétaires pour vous offrir le meilleur résultat.
          </p>
          <button className="px-12 py-5 bg-black text-white font-black brutal-card hover:bg-[var(--brutal-accent)] hover:text-black transition-all uppercase tracking-widest text-sm">
            Demander un devis gratuit
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
