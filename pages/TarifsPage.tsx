
import React from 'react';
import { Page } from '../App';

interface TarifsPageProps {
  onNavigate: (page: Page) => void;
}

const TarifsPage: React.FC<TarifsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-16 bg-white border-b border-black/5 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">Tarifs & Engagement</h1>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
            Des options flexibles et transparentes, conçues pour être accessibles aux ONG, entreprises et particuliers.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            <PlanCard 
              name="Support Particulier"
              target="Étudiants & Individus"
              price="Accessibilité Prioritaire"
              features={["Diagnostic technique gratuit", "Maintenance logicielle", "Aide aux services en ligne", "Support WhatsApp Pro"]}
              note="Tarification solidaire."
            />
            <PlanCard 
              name="Expertise Business"
              target="PME & Boutiques locales"
              price="Forfait Adapté"
              features={["Gestion de stock Excel", "Sécurisation réseau WiFi", "Facturation simplifiée", "Maintenance préventive"]}
              highlight
            />
            <PlanCard 
              name="Mission Stratégique"
              target="ONG & Grandes Structures"
              price="Sur Devis"
              features={["Architecture Web Cloud", "Collecte Kobo Ecosystem", "Formation du personnel", "Rapports d'activités pro"]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            <div className="bg-black p-10 rounded-3xl text-white relative overflow-hidden">
               <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-[var(--brutal-accent)]">Accompagnement Inclus</h3>
               <p className="text-sm text-white/60 mb-10 font-medium">Chaque intervention majeure inclut un support post-livraison pour garantir votre sérénité.</p>
               <ul className="space-y-4">
                 <li className="flex items-center text-[9px] font-black uppercase tracking-widest"><span className="w-2 h-2 bg-[var(--brutal-accent)] mr-4 rounded-full"></span> 30 jours de suivi technique</li>
                 <li className="flex items-center text-[9px] font-black uppercase tracking-widest"><span className="w-2 h-2 bg-[var(--brutal-accent)] mr-4 rounded-full"></span> Documentation simplifiée</li>
                 <li className="flex items-center text-[9px] font-black uppercase tracking-widest"><span className="w-2 h-2 bg-[var(--brutal-accent)] mr-4 rounded-full"></span> Hotline d'urgence prioritaires</li>
               </ul>
            </div>
            
            <div className="bg-[var(--brutal-accent)] p-10 rounded-3xl text-black">
               <h3 className="text-xl font-black mb-6 uppercase tracking-tight">Première Étape Gratuite</h3>
               <p className="text-black/70 mb-10 text-sm font-medium">J'offre une consultation de 30 minutes pour analyser vos besoins sans aucun engagement.</p>
               <button 
                onClick={() => onNavigate('contact')}
                className="w-full py-4 bg-black text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all"
               >
                 Réserver mon créneau
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PlanCard: React.FC<{name: string, target: string, price: string, features: string[], highlight?: boolean, note?: string}> = ({name, target, price, features, highlight, note}) => (
  <div className={`p-8 rounded-3xl transition-all flex flex-col h-full border border-black/5 ${highlight ? 'bg-black text-white shadow-2xl md:scale-105 z-10' : 'bg-slate-50/50 text-black'}`}>
    <div className="mb-8">
      <h3 className="text-xl font-black mb-1 uppercase tracking-tight">{name}</h3>
      <p className={`text-[8px] font-black uppercase tracking-[0.3em] ${highlight ? 'text-[var(--brutal-accent)]' : 'text-slate-400'}`}>{target}</p>
    </div>
    
    <div className="mb-8">
      <div className={`text-sm font-black tracking-tight uppercase ${highlight ? 'text-white' : 'text-black'}`}>{price}</div>
    </div>

    <ul className="space-y-4 mb-8 flex-grow">
      {features.map(f => (
        <li key={f} className="flex items-center text-[9px] font-bold uppercase tracking-widest">
          <span className={`w-1.5 h-1.5 mr-3 rounded-full ${highlight ? 'bg-[var(--brutal-accent)]' : 'bg-black'}`}></span> {f}
        </li>
      ))}
    </ul>

    {note && <p className="text-[8px] text-slate-400 italic mb-6 font-black uppercase tracking-widest">{note}</p>}

    <button className={`w-full py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${highlight ? 'bg-[var(--brutal-accent)] text-black hover:bg-white' : 'bg-white text-black border border-black/10 hover:bg-black hover:text-white'}`}>
      Demander un devis
    </button>
  </div>
);

export default TarifsPage;