
import React from 'react';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-24 border-t-4 border-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--brutal-accent)]/5 blur-[150px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-[var(--brutal-accent)] flex items-center justify-center text-black font-black mr-4 brutal-border text-2xl transform -rotate-6">A</div>
              <span className="text-3xl font-black text-white italic uppercase tracking-tighter font-display">Alexis Mupole</span>
            </div>
            <p className="text-base leading-relaxed mb-10 font-bold text-slate-400 max-w-xs">
              Digital Engineering & IT Strategic Consulting. <br/>
              Expertise technique certifiée pour des architectures numériques performantes et durables.
            </p>
            <div className="flex space-x-6">
              <SocialIcon icon="LinkedIn" />
              <SocialIcon icon="GitHub" />
              <SocialIcon icon="Twitter" />
            </div>
          </div>

          <div>
            <h4 className="text-[var(--brutal-accent)] font-black mb-8 uppercase tracking-[0.3em] text-[11px] font-display">Navigation</h4>
            <ul className="text-sm space-y-4 font-black uppercase tracking-widest">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[var(--brutal-accent)] transition-colors">{t.nav.home}</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-[var(--brutal-accent)] transition-colors">{t.nav.services}</button></li>
              <li><button onClick={() => onNavigate('projects')} className="hover:text-[var(--brutal-accent)] transition-colors">{t.nav.projects}</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-[var(--brutal-accent)] transition-colors">{t.nav.expertise}</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-[var(--brutal-accent)] transition-colors">{t.nav.pricing}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--brutal-accent)] font-black mb-8 uppercase tracking-[0.3em] text-[11px] font-display">Engagements</h4>
            <ul className="text-sm space-y-4 font-black uppercase tracking-widest">
              <li className="flex items-center"><span className="w-2 h-2 bg-[var(--brutal-accent)] mr-4"></span> Intégrité technique</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[var(--brutal-accent)] mr-4"></span> Efficience opérationnelle</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[var(--brutal-accent)] mr-4"></span> Support de haut niveau</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[var(--brutal-accent)] mr-4"></span> Excellence académique</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--brutal-accent)] font-black mb-8 uppercase tracking-[0.3em] text-[11px] font-display">Direct Contact</h4>
            <ul className="text-sm space-y-4 font-black uppercase tracking-widest">
              <li className="text-[var(--brutal-accent)] hover:text-white transition-colors cursor-pointer underline decoration-[var(--brutal-accent)]/30 underline-offset-8">alexismupole@gmail.com</li>
              <li className="text-slate-300">+256 768 949 392</li>
              <li className="text-slate-500 italic lowercase tracking-normal">Available via WhatsApp Pro</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
          <p>© {currentYear} ALEXIS MUPOLE UWIZEYE. DESIGNED FOR PERFORMANCE.</p>
          <div className="flex space-x-10 mt-8 md:mt-0">
             <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Support</button>
             <a href="#" className="hover:text-white transition-colors">Legal</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{icon: string}> = ({icon}) => (
  <a href="#" className="w-12 h-12 bg-white/5 brutal-border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[var(--brutal-accent)] hover:text-black hover:border-black transition-all duration-300 hover:-translate-y-1">
    <span className="text-xs font-black uppercase">{icon[0]}</span>
  </a>
);

export default Footer;