import React from 'react';
import { Page } from '../App';
import { 
  Code, Cloud, Shield, Database, Brain, Server, 
  CheckCircle, Award, ArrowRight, Globe, MapPin 
} from 'lucide-react';

interface SolutionsAfriquePageProps {
  onNavigate: (page: Page) => void;
}

const SolutionsAfriquePage: React.FC<SolutionsAfriquePageProps> = ({ onNavigate }) => {
  const expertise = [
    {
      icon: <Code size={28} />,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      skills: ["React / Next.js", "TypeScript", "Node.js", "REST APIs"]
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud Architecture",
      description: "Scalable cloud infrastructure designed for African market conditions.",
      skills: ["AWS", "Azure", "Serverless", "DevOps"]
    },
    {
      icon: <Brain size={28} />,
      title: "AI & Automation",
      description: "Intelligent solutions to streamline your business operations.",
      skills: ["Machine Learning", "Process Automation", "Data Analytics", "AI Integration"]
    },
    {
      icon: <Shield size={28} />,
      title: "Cybersecurity",
      description: "Enterprise-grade security to protect your digital assets.",
      skills: ["Security Audits", "Data Protection", "Compliance", "Risk Assessment"]
    },
    {
      icon: <Database size={28} />,
      title: "Data Engineering",
      description: "Robust data pipelines and storage solutions for informed decisions.",
      skills: ["Database Design", "ETL Pipelines", "SQL / NoSQL", "Business Intelligence"]
    },
    {
      icon: <Server size={28} />,
      title: "System Administration",
      description: "Reliable infrastructure management and optimization.",
      skills: ["Linux/Windows", "Networking", "Virtualization", "Monitoring"]
    }
  ];

  const certifications = [
    { title: "Cisco Networking", issuer: "Cisco Academy", year: "2023" },
    { title: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { title: "Cybersecurity Fundamentals", issuer: "Udemy", year: "2022" },
    { title: "ICDL Professional", issuer: "ICDL Africa", year: "2021" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">Expertise</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology Expertise
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Bridging the gap between cutting-edge technology and practical business solutions. 
              Bringing world-class expertise to African businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={16} className="text-amber-400" />
                <span>Kinshasa, DR Congo</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe size={16} className="text-amber-400" />
                <span>Remote Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">What I Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Areas of Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, i) => (
              <ExpertiseCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">My Approach</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Professional Philosophy
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                I believe in delivering solutions that not only meet technical requirements 
                but also drive real business value. Every project is an opportunity to 
                make a meaningful impact.
              </p>
              <div className="space-y-4">
                {[
                  "Precision in every detail",
                  "Clear communication throughout",
                  "Focus on long-term solutions",
                  "Knowledge transfer included"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <CertificationCard key={i} {...cert} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a new website, cloud infrastructure, or a complete digital 
            transformation, I'm here to help bring your vision to life.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

const ExpertiseCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}> = ({ icon, title, description, skills }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span 
          key={i} 
          className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const CertificationCard: React.FC<{
  title: string;
  issuer: string;
  year: string;
}> = ({ title, issuer, year }) => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100">
    <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 shrink-0">
      <Award size={24} />
    </div>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600">{issuer} • {year}</p>
    </div>
  </div>
);

export default SolutionsAfriquePage;
