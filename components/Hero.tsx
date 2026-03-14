
import React from 'react';
import { Page } from '../App';
import { MessageCircle, Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <section className="pt-24 pb-12 bg-white overflow-hidden relative">
      {/* Decorative Floating Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--brutal-accent)]/5 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-black/5 rounded-full blur-2xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="absolute top-40 right-[15%] hidden lg:block perspective-1000">
        <div className="w-24 h-24 border-2 border-black/10 rounded-2xl animate-float preserve-3d" style={{ transform: 'rotateX(20deg) rotateY(-20deg)' }}></div>
      </div>

      {/* Marquee Header */}
      <div className="border-y-4 border-black bg-[var(--brutal-accent)] py-4 mb-12 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-12">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-2xl font-black uppercase italic tracking-tighter flex items-center gap-4">
              Available for Hire <span className="w-3 h-3 bg-black rounded-full"></span> 
              Digital Engineering Consultant <span className="w-3 h-3 bg-black rounded-full"></span>
              Fullstack Developer <span className="w-3 h-3 bg-black rounded-full"></span>
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Left Column - Main Pitch */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-black brutal-shadow-sm">
                  <img 
                    src="https://picsum.photos/seed/alexis/200/200" 
                    alt="Alexis Mupole" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Digital Engineering Consultant</h2>
                  <h1 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
                    ALEXIS MUPOLE
                  </h1>
                </div>
              </div>
              
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
                BUILDING <br />
                <span className="text-stroke">DIGITAL</span> <br />
                FUTURES.
              </h3>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-wider rounded-full">AI & Cloud</span>
                <span className="px-3 py-1 bg-white border border-black/10 text-black text-[9px] font-bold uppercase tracking-wider rounded-full">DR Congo</span>
                <span className="px-3 py-1 bg-[var(--brutal-accent)] text-black text-[9px] font-bold uppercase tracking-wider rounded-full">5+ Years Exp</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 border border-black/5 bg-slate-50/50 rounded-3xl">
              <p className="text-lg md:text-xl font-medium text-slate-600 leading-relaxed">
                I engineer solutions that bridge the gap between <span className="text-black font-bold">complex technology</span> and human accessibility. 
                My mission is to empower African businesses with world-class digital infrastructure.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-black text-white rounded-3xl group cursor-pointer hover:bg-[var(--brutal-accent)] hover:text-black transition-all" onClick={() => onNavigate('projects')}>
                <h3 className="text-2xl font-black uppercase italic mb-2">View Work</h3>
                <p className="text-[11px] font-medium opacity-70 mb-4">Explore high-impact digital solutions.</p>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </div>
              <div className="p-6 bg-[var(--brutal-accent)] text-black rounded-3xl group cursor-pointer" onClick={() => onNavigate('contact')}>
                <h3 className="text-2xl font-black uppercase italic mb-2">Hire Me</h3>
                <p className="text-[11px] font-medium text-black/60 mb-4">Let's discuss technical excellence.</p>
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Quick Contact & Stats */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div variants={itemVariants} className="p-6 border border-black/5 bg-white rounded-3xl space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-xs font-bold">alexismupole@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-xs font-bold">+243 997 306 308</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">SOCIAL</p>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="flex items-center justify-center p-4 rounded-2xl bg-black/5 hover:bg-blue-600 hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="flex items-center justify-center p-4 rounded-2xl bg-black text-white hover:bg-[var(--brutal-accent)] hover:text-black transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
