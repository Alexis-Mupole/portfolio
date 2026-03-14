
import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <Hero onNavigate={onNavigate} />
      
      {/* Vision (Compact) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">{t.home.vision}</h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight italic font-display">
              {t.home.visionText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title={t.home.values.analysis.t} 
              desc={t.home.values.analysis.d}
              icon="🔍"
            />
            <ValueCard 
              title={t.home.values.rigor.t} 
              desc={t.home.values.rigor.d}
              icon="🛠️"
            />
            <ValueCard 
              title={t.home.values.support.t} 
              desc={t.home.values.support.d}
              icon="🎓"
            />
          </div>
        </div>
      </section>

      {/* Pourquoi moi ? (Nouveau bloc riche) */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter font-display">{t.home.whyMe.title}</h2>
              <div className="space-y-6">
                <WhyCard title={t.home.whyMe.reason1.t} desc={t.home.whyMe.reason1.d} />
                <WhyCard title={t.home.whyMe.reason2.t} desc={t.home.whyMe.reason2.d} />
                <WhyCard title={t.home.whyMe.reason3.t} desc={t.home.whyMe.reason3.d} />
              </div>
            </div>
            <div className="flex-1 brutal-card bg-black text-white p-10 flex flex-col justify-center">
               <h3 className="text-2xl font-black mb-8 uppercase tracking-widest italic text-[var(--brutal-accent)] font-display">Mon Engagement</h3>
               <p className="text-base text-slate-400 leading-relaxed mb-8 font-medium">
                 Je m'engage à fournir des solutions qui respectent votre budget et vos délais. Pour moi, chaque ordinateur réparé ou chaque site créé est une pierre à l'édifice de votre succès.
               </p>
               <ul className="space-y-4 text-sm font-black text-slate-200 uppercase tracking-widest">
                  <li className="flex items-center"><span className="w-2 h-2 bg-[var(--brutal-accent)] mr-4"></span> Tarifs honnêtes et sans surprises</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[var(--brutal-accent)] mr-4"></span> Confidentialité totale de vos fichiers</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[var(--brutal-accent)] mr-4"></span> Support technique disponible après service</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <Projects />

      {/* Skills (Compact) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase italic font-display">{t.home.stack}</h2>
            <p className="text-slate-500 font-bold mt-2 text-sm uppercase tracking-widest">{t.home.stackDesc}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <SkillBadge label="Next.js" cat="Web" />
            <SkillBadge label="Vue.js" cat="Web" />
            <SkillBadge label="Laravel" cat="Web" />
            <SkillBadge label="PHP / SQL" cat="Backend" />
            <SkillBadge label="TypeScript" cat="Language" />
            <SkillBadge label="Tailwind CSS" cat="Design" />
            <SkillBadge label="Bootstrap" cat="Design" />
            <SkillBadge label="Windows 10/11" cat="System" />
            <SkillBadge label="Linux" cat="System" />
            <SkillBadge label="Hardware" cat="Support" />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-black text-white mx-4 mb-12 overflow-hidden relative brutal-card">
        <div className="absolute inset-0 bg-[var(--brutal-accent)]/5 blur-[100px]"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tighter italic uppercase font-display">Une question informatique ?</h2>
          <p className="text-slate-400 mb-8 text-base leading-relaxed font-medium">
            N'attendez pas que vos problèmes s'aggravent. Une maintenance préventive coûte toujours moins cher qu'une réparation urgente. Contactez-moi pour un avis gratuit.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-12 py-5 bg-[var(--brutal-accent)] text-black font-black rounded-none hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] uppercase tracking-widest text-xs"
          >
            {t.contact.title}
          </button>
        </div>
      </section>
    </div>
  );
};

const ValueCard: React.FC<{title: string, desc: string, icon: string}> = ({title, desc, icon}) => (
  <div className="brutal-card bg-white p-8 group hover:bg-[var(--brutal-accent)] transition-colors">
    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <h3 className="text-xl font-black text-black mb-3 uppercase tracking-tight font-display">{title}</h3>
    <p className="text-slate-600 font-bold text-sm leading-relaxed group-hover:text-black transition-colors">{desc}</p>
  </div>
);

const WhyCard: React.FC<{title: string, desc: string}> = ({title, desc}) => (
  <div className="flex gap-6 items-start p-6 brutal-card bg-white group hover:bg-black transition-colors">
    <div className="w-12 h-12 bg-[var(--brutal-accent)] flex items-center justify-center text-black font-black text-xl shrink-0">
      ✓
    </div>
    <div>
      <h4 className="text-lg font-black text-black uppercase mb-2 tracking-tight group-hover:text-white transition-colors font-display">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed font-bold group-hover:text-slate-400 transition-colors">{desc}</p>
    </div>
  </div>
);

const SkillBadge: React.FC<{label: string, cat: string}> = ({label, cat}) => (
  <div className="brutal-card bg-white p-6 text-center hover:bg-[var(--brutal-accent)] transition-colors group">
    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-black transition-colors">{cat}</div>
    <div className="text-sm font-black text-black uppercase tracking-tight font-display">{label}</div>
  </div>
);

export default Home;
