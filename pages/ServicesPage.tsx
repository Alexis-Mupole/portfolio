import React from 'react';
import { Page } from '../App';
import { 
  Code, Cloud, Database, Shield, Smartphone, 
  Brain, ArrowRight, CheckCircle, Zap 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {

  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks. From responsive websites to complex enterprise solutions.",
      features: ["Full-Stack Development", "Progressive Web Apps", "API Development", "CMS Integration"],
      color: "blue"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure design and deployment. AWS, Azure, and custom cloud architectures.",
      features: ["Cloud Migration", "Infrastructure as Code", "Serverless Architecture", "Cloud Security"],
      color: "sky"
    },
    {
      icon: <Brain size={32} />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence. Smart automation and data-driven insights.",
      features: ["AI Integration", "Data Analytics", "Process Automation", "Custom AI Solutions"],
      color: "purple"
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security practices and protocols.",
      features: ["Security Audits", "Vulnerability Assessment", "Data Encryption", "Compliance"],
      color: "green"
    },
    {
      icon: <Database size={32} />,
      title: "Data Engineering",
      description: "Build robust data pipelines and storage solutions. Transform raw data into actionable insights.",
      features: ["Database Design", "Data Migration", "ETL Pipelines", "Business Intelligence"],
      color: "amber"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"],
      color: "rose"
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-32 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Services
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. 
              From concept to deployment, I deliver excellence in every project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
              <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">Process</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                How I Work
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                I follow a structured approach to ensure every project meets the highest standards 
                of quality and delivers real value to your business.
              </p>
              <div className="space-y-4">
                <ProcessStep number="01" title="Discovery" description="Understanding your requirements and goals" />
                <ProcessStep number="02" title="Development" description="Building your solution with best practices" />
                <ProcessStep number="03" title="Deployment" description="Launching and monitoring your project" />
                <ProcessStep number="04" title="Support" description="Ongoing maintenance and improvements" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Why Choose My Services?</h4>
                <ul className="space-y-4">
                  {[
                    "5+ years of industry experience",
                    "Fast turnaround times",
                    "Clean, maintainable code",
                    "Post-launch support included",
                    "Transparent pricing"
                  ].map((item, i) => (
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
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Let's discuss how I can help bring your vision to life.
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
