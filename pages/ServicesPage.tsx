
import React from 'react';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 bg-white border-b border-black/5 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">
            {t.services.title}
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
            {t.services.desc}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* IT Section */}
          <div className="mb-20">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10">
              {t.services.infra.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 perspective-1000">
              <ServiceDetailedBox 
                title={t.services.infra.os.t}
                desc={t.services.infra.os.d}
                icon="💻"
                points={["Multi-boot Windows/Linux", "Optimisation du démarrage", "Mises à jour de sécurité", "Gestion des pilotes"]}
              />
              <ServiceDetailedBox 
                title={t.services.infra.maintenance.t}
                desc={t.services.infra.maintenance.d}
                icon="🔧"
                points={["Pâte thermique haute performance", "Upgrade SSD & RAM", "Nettoyage des ventilateurs", "Vérification batterie"]}
              />
              <ServiceDetailedBox 
                title={t.services.infra.data.t}
                desc={t.services.infra.data.d}
                icon="📂"
                points={["Récupération de données", "Sauvegardes chiffrées", "Désinfection antivirus", "Stockage Cloud sécurisé"]}
              />
            </div>
          </div>

          {/* Web Section */}
          <div>
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10">
              {t.services.web.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 perspective-1000">
              <div className="p-8 border border-black/5 bg-slate-50/50 rounded-3xl group hover:bg-black transition-all duration-500 hover-leverage">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform origin-left">🌐</div>
                <h3 className="text-sm font-black mb-3 uppercase tracking-tight group-hover:text-white">{t.services.web.apps.t}</h3>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-8 group-hover:text-white/60">{t.services.web.apps.d}</p>
                <ul className="space-y-3 text-[9px] font-bold text-black uppercase tracking-widest group-hover:text-white/40">
                   <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white mr-3"></span> Sites vitrines légers</li>
                   <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white mr-3"></span> Systèmes de gestion de stock</li>
                   <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white mr-3"></span> Portails de présentation ONG</li>
                   <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black group-hover:bg-white mr-3"></span> Applications de facturation</li>
                </ul>
              </div>

              <div className="p-8 border border-black/5 bg-black text-white rounded-3xl relative overflow-hidden group hover-leverage">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform origin-left">⚡</div>
                <h3 className="text-sm font-black mb-3 uppercase tracking-tight text-[var(--brutal-accent)]">{t.services.web.stack.t}</h3>
                <p className="text-[11px] text-white/60 font-medium leading-relaxed mb-10">{t.services.web.stack.d}</p>
                <div className="flex flex-wrap gap-2">
                  {["Laravel 11", "Next.js 15", "Vue 3", "Tailwind CSS", "MySQL", "PostgreSQL", "JavaScript (ES6+)"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 text-[8px] font-black uppercase tracking-widest rounded-full border border-white/10 group-hover:bg-[var(--brutal-accent)] group-hover:text-black transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 text-center px-4">
        <button 
          onClick={() => onNavigate('contact')}
          className="px-10 py-4 bg-black text-white rounded-full font-black hover:bg-[var(--brutal-accent)] hover:text-black transition-all uppercase tracking-widest text-[10px]"
        >
          {t.contact.title}
        </button>
      </section>
    </div>
  );
};

const ServiceDetailedBox: React.FC<{title: string, desc: string, icon: string, points: string[]}> = ({title, desc, icon, points}) => (
  <div className="p-8 border border-black/5 bg-slate-50/50 rounded-3xl hover:bg-white hover:shadow-xl transition-all flex flex-col group hover-leverage">
    <div className="text-3xl mb-6 group-hover:scale-110 transition-transform origin-left">{icon}</div>
    <h3 className="text-sm font-black mb-3 uppercase tracking-tight text-black">{title}</h3>
    <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-8">{desc}</p>
    <div className="mt-auto space-y-2">
      {points.map(p => (
        <div key={p} className="text-[9px] font-bold uppercase tracking-widest text-slate-400 flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-200 mr-3 group-hover:bg-black transition-colors"></span> {p}
        </div>
      ))}
    </div>
  </div>
);

export default ServicesPage;
