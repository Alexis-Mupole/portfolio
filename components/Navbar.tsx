
import React, { useState } from 'react';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { Language } from '../translations';
import { LayoutGrid, Scan, Layers, Box, HelpCircle, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useTranslation();

  const links: { name: string; id: Page; icon: React.ReactNode }[] = [
    { name: 'HOME', id: 'home', icon: <LayoutGrid size={14} /> },
    { name: 'SERVICES', id: 'services', icon: <Scan size={14} /> },
    { name: 'EXPERTISE', id: 'solutions', icon: <Layers size={14} /> },
    { name: 'PROJECTS', id: 'projects', icon: <Box size={14} /> },
    { name: 'CONTACT', id: 'contact', icon: <HelpCircle size={14} /> },
  ];

  const handleNav = (id: Page) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 py-3">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Left Branding */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <User size={16} className="text-white" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-black uppercase tracking-tighter">ALEXIS MUPOLE</span>
              <span className="text-[8px] font-medium opacity-50 uppercase tracking-widest">Consultant</span>
            </div>
          </button>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center bg-black/5 p-1 rounded-full border border-black/5">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-1.5 rounded-full flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all ${
                  currentPage === link.id 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-black/40 hover:text-black hover:bg-white/50'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center bg-black/5 p-0.5 rounded-lg border border-black/5">
              {(['fr', 'en', 'sw'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-[8px] font-black uppercase rounded-md transition-all ${
                    lang === l ? 'bg-white text-black shadow-sm' : 'text-black/40 hover:text-black'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 p-4 space-y-2 shadow-xl"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`flex items-center gap-3 w-full p-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  currentPage === link.id ? 'bg-black text-white' : 'bg-black/5 text-black'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </button>
            ))}
            <div className="flex justify-center gap-1 pt-2">
              {(['fr', 'en', 'sw'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex-1 py-2 rounded-lg font-black uppercase text-[9px] border border-black/5 ${
                    lang === l ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                >
                  {l === 'fr' ? 'FR' : l === 'en' ? 'EN' : 'SW'}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
