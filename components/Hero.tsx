import React from 'react';
import { Page } from '../App';
import { MessageCircle, Mail, Linkedin, Twitter, ArrowRight, MapPin, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../images/alex.jpeg';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-50 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-full mb-6">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Available for Projects
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Alexis <span className="text-blue-600">Mupole</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium mt-2">
                Digital Engineering Consultant & Full-Stack Developer
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 max-w-xl">
              <p className="text-lg text-slate-700 leading-relaxed">
                I engineer solutions that bridge the gap between <span className="text-slate-900 font-semibold">complex technology</span> and human accessibility. 
                My mission is to empower African businesses with world-class digital infrastructure.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-sm font-medium">Kinshasa, DR Congo</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                <Calendar size={16} className="text-blue-600" />
                <span className="text-sm font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                <Award size={16} className="text-blue-600" />
                <span className="text-sm font-medium">Cloud & AI Specialist</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all shadow-lg shadow-slate-200/50 border border-slate-200 hover:-translate-y-0.5"
              >
                Hire Me
                <MessageCircle size={18} />
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              <a 
                href="https://linkedin.com/in/alexismupole" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-md border border-slate-200 hover:border-blue-600"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-md border border-slate-200 hover:border-slate-900"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:alexismupole@gmail.com"
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-600 hover:bg-red-500 hover:text-white transition-all shadow-md border border-slate-200 hover:border-red-500"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-amber-500 rounded-[2.5rem] blur-2xl opacity-20" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={profileImage} 
                  alt="Alexis Mupole - Digital Engineering Consultant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Award className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Certified</p>
                    <p className="text-sm font-bold text-slate-900">Cloud Engineer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>

      <div className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-slate-400 text-sm font-medium mb-6">TECHNOLOGIES I WORK WITH</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'AWS', 'Python', 'PostgreSQL', 'Docker'].map((tech) => (
              <span key={tech} className="text-slate-500 font-semibold text-sm hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
