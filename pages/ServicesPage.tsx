import React from 'react';
import { useTranslation } from '../src/context/LanguageContext';
import { 
  Code, Database, Shield, Settings, Wifi, FileText,
  ArrowRight, CheckCircle, Zap 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: 'home' | 'services' | 'solutions' | 'projects' | 'pricing' | 'contact') => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { lang } = useTranslation();

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
  };

  const processData = {
    en: [
      { title: "Audit & Discovery", description: "Analyzing technical requirements and business objectives." },
      { title: "Strategic Design", description: "Architecting custom solutions based on dual IT-Business expertise." },
      { title: "Professional Setup", description: "Rigorous development and secure system installation." },
      { title: "Support & Growth", description: "Ongoing maintenance and continuous skills transfer." }
    ],
    fr: [
      { title: "Audit & Découverte", description: "Analyse des besoins techniques et des objectifs business." },
      { title: "Conception Stratégique", description: "Architecture de solutions basée sur la double expertise IT-Business." },
      { title: "Installation Pro", description: "Développement rigoureux et installation sécurisée des systèmes." },
      { title: "Support & Croissance", description: "Maintenance continue et transfert de compétences permanent." }
    ],
    sw: [
      { title: "Ukaguzi na Utambuzi", description: "Kuchambua mahitaji ya kiufundi na malengo ya biashara." },
      { title: "Ubuni wa Kimkakati", description: "Kujenga suluhisho maalum kulingana na utaalamu wa IT na Biashara." },
      { title: "Usakinishaji wa Kitaalamu", description: "Uendelezaji makini na usakinishaji salama wa mifumo." },
      { title: "Usaidizi na Ukuaji", description: "Matengenezo endelevu na uhamishaji wa ujuzi wa mara kwa mara." }
    ]
  };

  const whyChooseData = {
    en: [
      "BSc in Computer Science (USA) & Business Computing (Uganda)",
      "Regional Expert focused on Goma-Kampala axis",
      "Cisco Academy & HP IT for Business Certified",
      "Life-long Learner dedicated to digital accessibility",
      "Ethical Leadership and human-centered technology"
    ],
    fr: [
      "Licence en Computer Science (USA) & Business Computing (Ouganda)",
      "Expert régional focalisé sur l'axe Goma-Kampala",
      "Certifié Cisco Academy & HP IT for Business",
      "Engagement 'Life-long Learner' pour l'accessibilité",
      "Leadership éthique et technologie centrée sur l'humain"
    ],
    sw: [
      "Shahada ya Sayansi ya Kompyuta (USA) na Kompyuta ya Biashara (Uganda)",
      "Mtaalamu wa kikanda anayezingatia mhimili wa Goma-Kampala",
      "Aliidhinishwa na Cisco Academy na HP IT for Business",
      "Ahadi ya 'Life-long Learner' kwa upatikanaji wa kidijitali",
      "Uongozi wa kimaadili na teknolojia inayomlenga binadamu"
    ]
  };

  const servicesData = [
    {
      icon: <Code size={32} />,
      title: lang === 'en' ? 'Web & CMS Engineering' : lang === 'fr' ? 'Ingénierie Web & CMS' : 'Uhandisi wa Wavuti na CMS',
      description: lang === 'en' ? 'Development of dynamic platforms and custom Content Management Systems (CMS) designed for high performance.' : lang === 'fr' ? 'Développement de plateformes dynamiques et de systèmes de gestion de contenu (CMS) sur mesure conçus pour la performance.' : 'Uendelezaji wa majukwaa yanayobadilika na mifumo ya usimamizi wa maudhui (CMS) iliyoundwa kwa utendaji wa juu.',
      features: lang === 'en' ? ['Full-Stack Solutions', 'Custom CMS', 'Dynamic Dashboards', 'Scalable Architecture'] : lang === 'fr' ? ['Solutions Full-Stack', 'CMS Personnalisés', 'Tableaux de bord dynamiques', 'Architecture évolutive'] : ['Suluhisho za Full-Stack', 'CMS Maalum', 'Dashibodi zinazobadilika', 'Muundo unaoweza kupanuka'],
      color: 'blue'
    },
    {
      icon: <Database size={32} />,
      title: lang === 'en' ? 'Data Expertise (Kobo/ODK)' : lang === 'fr' ? 'Expertise Data (Kobo/ODK)' : 'Utaalamu wa Data (Kobo/ODK)',
      description: lang === 'en' ? 'Digitalization of surveys and mobile data collection optimized for humanitarian and research sectors.' : lang === 'fr' ? 'Digitalisation des enquêtes et collecte de données mobiles optimisée pour les secteurs humanitaires et de recherche.' : 'Uwekaji wa kidijitali wa tafiti na ukusanyaji wa data kwenye simu kwa ajili ya sekta za kibinadamu na utafiti.',
      features: lang === 'en' ? ['Kobo Collect setup', 'ODK Integration', 'Offline data capture', 'Real-time Analytics'] : lang === 'fr' ? ['Configuration Kobo Collect', 'Intégration ODK', 'Saisie hors-ligne', 'Analytique temps réel'] : ['Usanidi wa Kobo Collect', 'Muunganisho wa ODK', 'Uingizaji data nje ya mtandao', 'Uchambuzi wa wakati halisi'],
      color: 'amber'
    },
    {
      icon: <Settings size={32} />,
      title: lang === 'en' ? 'Installation & Systems' : lang === 'fr' ? 'Installation & Systèmes' : 'Usakinishaji na Mifumo',
      description: lang === 'en' ? 'Professional deployment of operating systems, hardware maintenance, and critical technical support.' : lang === 'fr' ? 'Déploiement professionnel de systèmes d\'exploitation, maintenance hardware et support technique critique.' : 'Usambazaji wa kitaalamu wa mifumo ya uendeshaji, matengenezo ya vifaa, na usaidizi muhimu wa kiufundi.',
      features: lang === 'en' ? ['OS Deployment', 'Hardware Maintenance', 'System Optimization', 'Troubleshooting'] : lang === 'fr' ? ['Déploiement d\'OS', 'Maintenance Hardware', 'Optimisation Système', 'Dépannage'] : ['Usambazaji wa OS', 'Matengenezo ya Vifaa', 'Uboreshaji wa Mfumo', 'Utatuzi wa matatizo'],
      color: 'sky'
    },
    {
      icon: <Wifi size={32} />,
      title: lang === 'en' ? 'Infrastructure & Networks' : lang === 'fr' ? 'Infrastructure & Réseaux' : 'Miundombinu na Mitandao',
      description: lang === 'en' ? 'Configuration and maintenance of local network infrastructures using Cisco standards.' : lang === 'fr' ? 'Configuration et maintenance d\'infrastructures réseaux locaux selon les standards Cisco.' : 'Usanidi na matengenezo ya miundombinu ya mtandao wa ndani kwa kutumia viwango vya Cisco.',
      features: lang === 'en' ? ['Cisco Networking', 'WiFi Optimization', 'LAN/WAN Setup', 'Network Security'] : lang === 'fr' ? ['Réseaux Cisco', 'Optimisation WiFi', 'Installation LAN/WAN', 'Sécurisation réseau'] : ['Mitandao ya Cisco', 'Uboreshaji wa WiFi', 'Usanidi wa LAN/WAN', 'Usalama wa Mtandao'],
      color: 'indigo'
    },
    {
      icon: <Shield size={32} />,
      title: lang === 'en' ? 'Cybersecurity & Awareness' : lang === 'fr' ? 'Cybersécurité & Audit' : 'Usalama wa Mtandao na Ukaguzi',
      description: lang === 'en' ? 'Vulnerability assessment, data protection, and Digital Awareness training for users.' : lang === 'fr' ? 'Évaluation des vulnérabilités, protection des données et formation à la sensibilisation numérique.' : 'Tathmini ya udhaifu, ulinzi wa data, na mafunzo ya uelewa wa kidijitali kwa watumiaji.',
      features: lang === 'en' ? ['Security Audits', 'Data Protection', 'Digital Awareness', 'Malware Removal'] : lang === 'fr' ? ['Audits de sécurité', 'Protection des données', 'Sensibilisation numérique', 'Nettoyage Malware'] : ['Ukaguzi wa Usalama', 'Ulinzi wa Data', 'Uelewa wa Kidijitali', 'Kuondoa Malware'],
      color: 'green'
    },
    {
      icon: <FileText size={32} />,
      title: lang === 'en' ? 'Advanced Office (365)' : lang === 'fr' ? 'Bureautique Avancée (MS 365)' : 'Otomatiki ya Ofisi (MS 365)',
      description: lang === 'en' ? 'Advanced Excel automation, business reporting, and data modeling for efficient workflows.' : lang === 'fr' ? 'Automatisation Excel avancée, reporting business et modélisation de données pour des flux efficaces.' : 'Otomatiki ya Excel, ripoti za biashara, na uundaji wa data kwa ajili ya mtiririko bora wa kazi.',
      features: lang === 'en' ? ['Excel Automation', 'Business Intelligence', 'Data Modeling', 'Workflow efficiency'] : lang === 'fr' ? ['Automatisation Excel', 'Business Intelligence', 'Modélisation de données', 'Efficacité des flux'] : ['Otomatiki ya Excel', 'Akili ya Biashara', 'Uundaji wa Data', 'Ufanisi wa mtiririko'],
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
