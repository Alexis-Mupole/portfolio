import React from 'react';
import { useTranslation } from '../src/context/LanguageContext';
import { 
  Code, Cloud, Database, Shield, Smartphone, 
  Brain, ArrowRight, CheckCircle, Zap 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: 'home' | 'services' | 'solutions' | 'projects' | 'pricing' | 'contact') => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { lang } = useTranslation();

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
  };

  const processData = {
    en: [
      { title: "Discovery", description: "Understanding your requirements and goals" },
      { title: "Development", description: "Building your solution with best practices" },
      { title: "Deployment", description: "Launching and monitoring your project" },
      { title: "Support", description: "Ongoing maintenance and improvements" }
    ],
    fr: [
      { title: "Découverte", description: "Comprendre vos exigences et objectifs" },
      { title: "Développement", description: "Construire votre solution avec les meilleures pratiques" },
      { title: "Déploiement", description: "Lancer et surveiller votre projet" },
      { title: "Support", description: "Maintenance continue et améliorations" }
    ],
    sw: [
      { title: "Utambuzi", description: "Kuelewa mahitaji yako na malengo yako" },
      { title: "Uendelezaji", description: "Kujenga suluhisho lako na desturi bora" },
      { title: "Usakinishaji", description: "Kuzindua na kufuatilia mradi wako" },
      { title: "Usaidizi", description: "Matengenezo yaendeleo na uboreshaji" }
    ]
  };

  const whyChooseData = {
    en: [
      "5+ years of industry experience",
      "Fast turnaround times",
      "Clean, maintainable code",
      "Post-launch support included",
      "Transparent pricing"
    ],
    fr: [
      "Plus de 5 ans d'expérience",
      "Délais rapides",
      "Code propre et maintenable",
      "Support post-lancement inclus",
      "Tarification transparente"
    ],
    sw: [
      "Miaka 5+ ya uzoefu wa tasnia",
      "Muda wa haraka wa kujibu",
      "Code safi na ya kudumisha",
      "Usaidizi baada ya kuzindua umejumuishwa",
      "Bei wazi"
    ]
  };

  const servicesData = [
    {
      icon: <Code size={32} />,
      title: lang === 'en' ? 'Web Development' : lang === 'fr' ? 'Développement Web' : 'Uendelezaji wa Wavuti',
      description: lang === 'en' ? 'Custom web applications built with modern frameworks. From responsive websites to complex enterprise solutions.' : lang === 'fr' ? 'Applications web personnalisées construites avec des frameworks modernes.' : 'Programu za wavuti za kibinafsi zilizojengwa kwa viFramework vya kisasa.',
      features: lang === 'en' ? ['Full-Stack Development', 'Progressive Web Apps', 'API Development', 'CMS Integration'] : lang === 'fr' ? ['Développement Full-Stack', 'Applications Web Progressives', 'Développement d\'API', 'Intégration CMS'] : ['Uendelezaji wa Full-Stack', 'Programu za Wavuti za Progress', 'Uendelezaji wa API', 'Muunganisho wa CMS'],
      color: 'blue'
    },
    {
      icon: <Cloud size={32} />,
      title: lang === 'en' ? 'Cloud Solutions' : lang === 'fr' ? 'Solutions Cloud' : 'Suluhisho za Wingu',
      description: lang === 'en' ? 'Scalable cloud infrastructure design and deployment. AWS, Azure, and custom cloud architectures.' : lang === 'fr' ? 'Conception et déploiement d\'infrastructure cloud évolutive.' : 'Muundo wa msingi wa wingu wenye kukua na usakinishaji.',
      features: lang === 'en' ? ['Cloud Migration', 'Infrastructure as Code', 'Serverless Architecture', 'Cloud Security'] : lang === 'fr' ? ['Migration Cloud', 'Infrastructure en tant que Code', 'Architecture Serverless', 'Sécurité Cloud'] : ['Uhamiaji wa Wingu', 'Msingi wa Kama Kanuni', 'Muundo usio na Seva', 'Usalama wa Wingu'],
      color: 'sky'
    },
    {
      icon: <Brain size={32} />,
      title: lang === 'en' ? 'AI & Machine Learning' : lang === 'fr' ? 'IA et Apprentissage Automatique' : 'AI na Kujifunza kwa Mashine',
      description: lang === 'en' ? 'Intelligent solutions powered by artificial intelligence. Smart automation and data-driven insights.' : lang === 'fr' ? 'Solutions intelligentes alimentées par l\'intelligence artificielle.' : 'Suluhisho za kigeuzi zinazoungwa mkono na akili bandia.',
      features: lang === 'en' ? ['AI Integration', 'Data Analytics', 'Process Automation', 'Custom AI Solutions'] : lang === 'fr' ? ['Intégration IA', 'Analyse de Données', 'Automatisation des Processus', 'Solutions IA Personnalisées'] : ['Muunganisho wa AI', 'Uchambuzi wa Data', 'Otomatiki ya Mchakato', 'Suluhisho za AI za Kibinafsi'],
      color: 'purple'
    },
    {
      icon: <Shield size={32} />,
      title: lang === 'en' ? 'Cybersecurity' : lang === 'fr' ? 'Cybersécurité' : 'Usalama wa Mtandao',
      description: lang === 'en' ? 'Protect your digital assets with enterprise-grade security practices and protocols.' : lang === 'fr' ? 'Protégez vos actifs numériques avec des pratiques de sécurité de niveau entreprise.' : 'Kinga mali yako ya kidijitali na miongozo ya usalama.',
      features: lang === 'en' ? ['Security Audits', 'Vulnerability Assessment', 'Data Encryption', 'Compliance'] : lang === 'fr' ? ['Audits de Sécurité', 'Évaluation des Vulnérabilités', 'Chiffrement des Données', 'Conformité'] : ['Ukaguzi wa Usalama', 'Tathmini ya Madhaifu', 'Usimbaji wa Data', 'Utii'],
      color: 'green'
    },
    {
      icon: <Database size={32} />,
      title: lang === 'en' ? 'Data Engineering' : lang === 'fr' ? 'Ingénierie des Données' : 'Uhandisi wa Data',
      description: lang === 'en' ? 'Build robust data pipelines and storage solutions. Transform raw data into actionable insights.' : lang === 'fr' ? 'Construisez des pipelines de données robustes et des solutions de stockage.' : 'Jenga mifereji imara ya data na suluhisho za hifadhi.',
      features: lang === 'en' ? ['Database Design', 'Data Migration', 'ETL Pipelines', 'Business Intelligence'] : lang === 'fr' ? ['Conception de Base de Données', 'Migration de Données', 'Pipelines ETL', 'Intelligence d\'Affaires'] : ['Ubuni wa Hifadhi ya Data', 'Uhamiaji wa Data', 'Mifereji ya ETL', 'Akili ya Biashara'],
      color: 'amber'
    },
    {
      icon: <Smartphone size={32} />,
      title: lang === 'en' ? 'Mobile Development' : lang === 'fr' ? 'Développement Mobile' : 'Uendelezaji wa Simu',
      description: lang === 'en' ? 'Native and cross-platform mobile applications that deliver exceptional user experiences.' : lang === 'fr' ? 'Applications mobiles natives et multiplateformes qui offrent des expériences utilisateur exceptionnelles.' : 'Programu za simu za asili na za vipengele mbalimbali zitoa matumizi bora.',
      features: lang === 'en' ? ['iOS Development', 'Android Development', 'React Native', 'App Store Optimization'] : lang === 'fr' ? ['Développement iOS', 'Développement Android', 'React Native', 'Optimisation App Store'] : ['Uendelezaji wa iOS', 'Uendelezaji wa Android', 'React Native', 'Uboreshaji wa Duka la Programu'],
      color: 'rose'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-32 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {lang === 'en' ? 'Services' : lang === 'fr' ? 'Services' : 'Huduma'}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {lang === 'en' ? 'Comprehensive digital solutions tailored to your business needs. From concept to deployment, I deliver excellence in every project.' : lang === 'fr' ? 'Solutions numériques complètes adaptées à vos besoins métier. Du concept au déploiement, je livre l\'excellence dans chaque projet.' : 'Suluhisho za kipekee za kidijitali zilizo kwa mahitaji ya biashara yako. Kutoka dhana hadi kutekeleza, ninatoa Excellence katika kila mradi.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                {...service}
                colors={colorClasses[service.color]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
                {lang === 'en' ? 'Process' : lang === 'fr' ? 'Processus' : 'Mchakato'}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {lang === 'en' ? 'How I Work' : lang === 'fr' ? 'Comment je travaille' : 'Namna ninavyofanya kazi'}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {lang === 'en' ? 'I follow a structured approach to ensure every project meets the highest standards of quality and delivers real value to your business.' : lang === 'fr' ? 'Je suis une approche structurée pour m\'assurer que chaque projet répond aux normes les plus élevées de qualité et offre une réelle valeur à votre entreprise.' : 'Nafuatilia mkono wa muundo ili kuhakikisha kila mradi unakidhi viwango vya juu vya ubora na kutoa thamani halisi kwa biashara yako.'}
              </p>
              <div className="space-y-4">
                {processData[lang].map((step, i) => (
                  <ProcessStep key={i} number={`0${i + 1}`} title={step.title} description={step.description} />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-6">
                  {lang === 'en' ? 'Why Choose My Services?' : lang === 'fr' ? 'Pourquoi choisir mes services?' : 'Kwa nini kuchagua huduma zangu?'}
                </h4>
                <ul className="space-y-4">
                  {whyChooseData[lang].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 shrink-0" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'en' ? 'Ready to Start Your Project?' : lang === 'fr' ? 'Prêt à démarrer votre projet?' : 'Uko tayari kuanza mradi wako?'}
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            {lang === 'en' ? 'Let\'s discuss how I can help bring your vision to life.' : lang === 'fr' ? 'Discutons de la façon dont je peux vous aider à réaliser votre vision.' : 'Tujadili jinsi ninavyoweza kusaidia kufanikisha maono yako.'}
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            {lang === 'en' ? 'Get in Touch' : lang === 'fr' ? 'Me contacter' : 'Wasiliana Nami'} <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  colors: { bg: string; text: string; border: string };
}> = ({ icon, title, description, features, colors }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 ${colors.text}`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
          <Zap size={14} className={colors.text} />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep: React.FC<{number: string; title: string; description: string}> = ({ number, title, description }) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>
);

export default ServicesPage;
