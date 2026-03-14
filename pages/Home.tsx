import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Clock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { lang } = useTranslation();

  return (
    <div className="bg-white">
      <Hero onNavigate={onNavigate} />
      
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              {lang === 'en' ? 'Why Choose Me' : lang === 'fr' ? 'Pourquoi Me Choisir' : 'Kwa Nini Kunichague'}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {lang === 'en' ? 'Delivering Excellence in Every Project' : lang === 'fr' ? 'Livrer l\'Excellence dans Chaque Projet' : 'Kutoa Excellence katika Kila Mradi'}
            </h3>
            <p className="text-slate-600 text-lg">
              {lang === 'en' ? 'I combine technical expertise with business acumen to deliver solutions that drive real results.' : lang === 'fr' ? 'Je combine expertise technique et sens des affaires pour deliver des solutions qui génèrent de vrais résultats.' : 'NingCombine ujuzi wa kiufundi na ujuzi wa biashara kutoa suluthizo zinazonga Matokeo halisi.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-amber-500" size={28} />}
              title="Fast Delivery"
              description="Quick turnaround times without compromising on quality. Your project stays on schedule."
            />
            <FeatureCard 
              icon={<Shield className="text-blue-600" size={28} />}
              title="Secure Solutions"
              description="Enterprise-grade security practices built into every line of code I write."
            />
            <FeatureCard 
              icon={<Globe className="text-green-600" size={28} />}
              title="Global Standards"
              description="World-class development practices aligned with international technology standards."
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Empowering African Businesses with Technology
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                With over 5 years of experience in digital engineering, I help businesses transform their operations through innovative technology solutions. From cloud architecture to AI integration, I bring world-class expertise to every project.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <StatCard number="50+" label="Projects Completed" />
                <StatCard number="5+" label="Years Experience" />
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                Get in Touch <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-6">What I Offer</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="text-slate-700">Custom Web Application Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="text-slate-700">Cloud Architecture & Migration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="text-slate-700">AI & Machine Learning Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="text-slate-700">Technical Consulting & Strategy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="text-slate-700">API Development & Integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects limit={6} />

      <section className="py-12 bg-slate-50 text-center">
        <button 
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-900 hover:text-white transition-all"
        >
          {lang === 'en' ? 'View All Projects' : lang === 'fr' ? 'Voir Tous les Projets' : 'Tazama Miradi Yote'} <ArrowRight size={18} />
        </button>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve your technology goals. 
            Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Clock size={18} />
              Schedule a Call
            </button>
            <button 
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
            >
              View My Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode; title: string; description: string}> = ({icon, title, description}) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const StatCard: React.FC<{number: string; label: string}> = ({number, label}) => (
  <div className="bg-slate-50 p-4 rounded-xl">
    <div className="text-3xl font-bold text-blue-600">{number}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

export default Home;
