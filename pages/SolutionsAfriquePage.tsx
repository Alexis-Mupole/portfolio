
import React from 'react';

const SolutionsAfriquePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <section className="pt-32 pb-20 bg-black text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--brutal-accent)]/5 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[var(--brutal-accent)] font-black tracking-[0.4em] uppercase text-xs mb-8 block">Ingénierie & Savoir-faire</span>
          <h1 className="text-5xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic font-display">Expertise Technologique</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed font-bold">
            Architecturer des systèmes robustes au croisement de la rigueur académique et des réalités opérationnelles.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            <ExpertiseBlock 
              title="Génie Systèmes" 
              desc="Cisco Networking Elite" 
              items={["Maintenance curative L3", "Ingénierie de secours", "Audit infra réseau", "Asset Lifecycle Mgmt"]} 
              icon="🔧"
            />
            <ExpertiseBlock 
              title="Engineering Web" 
              desc="Modern Stack Development" 
              items={["React / TypeScript Ecosystem", "Headless Architectures", "SEO & Performance Core", "Cloud-native Scaling"]} 
              icon="🌐"
            />
            <ExpertiseBlock 
              title="Défense Cyber" 
              desc="Threat Management" 
              items={["Analyse de vulnérabilités", "UICT Compliance", "Data Privacy Protocols", "Endpoint Hardening"]} 
              icon="🛡️"
            />
            <ExpertiseBlock 
              title="Data Engineering" 
              desc="Pipelines & Governance" 
              items={["Relational SQL Modeling", "Kobo Ecosystem Deployment", "Workflow Automation", "Intelligence Business"]} 
              icon="📊"
            />
            <ExpertiseBlock 
              title="Architecture Cloud" 
              desc="Hosted Ecosystems" 
              items={["Azure / AWS Provisioning", "Microsoft 365 Enterprise", "Sync & Backup Strategy", "Edge Computing Ops"]} 
              icon="☁️"
            />
            <ExpertiseBlock 
              title="Elite ICDL" 
              desc="Advanced Productivity" 
              items={["Complex Financial Excel", "Technical Document Design", "Process Optimization", "Bespoke Automation"]} 
              icon="📂"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-black mb-12 tracking-tighter uppercase italic font-display">Philosophie de Service</h2>
              <div className="space-y-8">
                <AssetRow label="Diagnostic analytique de précision" />
                <AssetRow label="Rigueur d'exécution absolue" />
                <AssetRow label="Transparence & Éthique professionnelle" />
                <AssetRow label="Culture du transfert de compétences" />
              </div>
            </div>
            <div className="relative p-12 bg-black text-white brutal-card">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brutal-accent)]/10 rounded-full -mr-32 -mt-32 blur-[100px]"></div>
               <h3 className="text-3xl font-black mb-12 text-[var(--brutal-accent)] uppercase tracking-widest italic font-display">Certifications Actives</h3>
               <div className="space-y-8">
                 <CertEntry title="Cisco Networking Academy" desc="Maintenance & Systèmes Réseaux" dark />
                 <CertEntry title="HP Enterprise IT" desc="Technologie pour la performance business" dark />
                 <CertEntry title="Udemy Analytics Elite" desc="Cybersécurité & Fondations Cyber" dark />
                 <CertEntry title="ICDL Certified Professional" desc="Standard Global de Productivité" dark />
               </div>
            </div>
          </div>

          <div className="relative h-[40rem] brutal-card overflow-hidden group mb-24">
            <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" alt="Excellence Excellence" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-12 text-center">
               <div className="max-w-3xl">
                  <h3 className="text-4xl lg:text-6xl font-black text-white mb-12 italic leading-tight font-display">
                    "Bâtir des outils de précision pour libérer votre potentiel."
                  </h3>
                  <div className="h-3 w-48 bg-[var(--brutal-accent)] mx-auto"></div>
                  <p className="text-slate-500 mt-12 text-sm uppercase tracking-[0.5em] font-black">Alexis Mupole Uwizeye</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ExpertiseBlock: React.FC<{title: string, desc: string, items: string[], icon: string}> = ({title, desc, items, icon}) => (
  <div className="brutal-card bg-white p-10 hover:bg-[var(--brutal-accent)] group transition-all duration-300 hover:-translate-y-2">
    <div className="flex justify-between items-start mb-8">
      <div className="text-5xl group-hover:scale-110 transition-transform">{icon}</div>
      <div className="text-[10px] text-black font-black uppercase tracking-widest bg-white border-2 border-black px-3 py-1 group-hover:bg-black group-hover:text-white transition-colors">{desc}</div>
    </div>
    <h3 className="text-3xl font-black text-black mb-6 uppercase tracking-tighter italic font-display">{title}</h3>
    <ul className="space-y-4">
      {items.map(i => (
        <li key={i} className="text-sm text-slate-600 font-bold flex items-center group-hover:text-black transition-colors">
          <span className="w-2 h-2 bg-black mr-4 rounded-full"></span> 
          {i}
        </li>
      ))}
    </ul>
  </div>
);

const AssetRow: React.FC<{label: string}> = ({label}) => (
  <div className="flex items-center p-8 brutal-card bg-white hover:bg-[var(--brutal-accent)] transition-all group">
    <div className="w-14 h-14 brutal-card bg-black flex items-center justify-center mr-8 text-[var(--brutal-accent)] font-black group-hover:bg-white group-hover:text-black transition-all transform group-hover:rotate-6">
      ✓
    </div>
    <span className="font-black text-black text-base uppercase tracking-tight">{label}</span>
  </div>
);

const CertEntry: React.FC<{title: string, desc: string, dark?: boolean}> = ({title, desc, dark}) => (
  <div className={`border-l-8 border-black pl-10 py-6 ${dark ? 'bg-white/5' : 'bg-white/50'} brutal-card group hover:bg-[var(--brutal-accent)] hover:border-white transition-all duration-300`}>
    <h4 className={`font-black text-xl uppercase tracking-tighter font-display group-hover:text-black transition-colors ${dark ? 'text-white' : 'text-black'}`}>{title}</h4>
    <p className={`text-sm font-bold mt-2 group-hover:text-black/70 transition-colors ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
  </div>
);

export default SolutionsAfriquePage;