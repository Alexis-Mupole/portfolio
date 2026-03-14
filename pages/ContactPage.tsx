
import React from 'react';
import { useTranslation } from '../src/context/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <section className="pt-32 pb-16 bg-white border-b border-black/5 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">{t.contact.title}</h1>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
            {t.contact.desc}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ContactInfo icon="📧" label="Email" value="alexismupole@gmail.com" link="mailto:alexismupole@gmail.com" />
              <ContactInfo icon="📱" label="WhatsApp" value="+243 997 306 308" link="tel:+243997306308" />
              <ContactInfo icon="📍" label="Zones" value="Uganda • RDC • Remote" />
            </div>

            <div className="p-8 border border-black/5 bg-slate-50/50 rounded-3xl">
              <form className="space-y-6">
                <Input label={t.contact.form.name} placeholder="Ex: Jean Mukendi" />
                <Input label={t.contact.form.email} placeholder="jean@example.com" type="email" />
                <div className="space-y-2">
                  <label className="text-[8px] font-black uppercase tracking-widest text-slate-400">{t.contact.form.msg}</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl text-xs font-bold text-black focus:border-black focus:outline-none transition-all placeholder-slate-400"></textarea>
                </div>
                <button className="w-full py-4 bg-black text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[var(--brutal-accent)] hover:text-black transition-all">
                  {t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfo: React.FC<{icon: string, label: string, value: string, link?: string}> = ({icon, label, value, link}) => (
  <div className="flex items-center group">
    <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-xl mr-6 group-hover:bg-[var(--brutal-accent)] transition-all">
      {icon}
    </div>
    <div>
      <div className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">{label}</div>
      {link ? (
        <a href={link} className="text-sm font-black text-black hover:text-[var(--brutal-accent)] transition-colors">{value}</a>
      ) : (
        <div className="text-sm font-black text-black">{value}</div>
      )}
    </div>
  </div>
);

const Input: React.FC<{label: string, placeholder: string, type?: string}> = ({label, placeholder, type = "text"}) => (
  <div className="space-y-2">
    <label className="text-[8px] font-black uppercase tracking-widest text-slate-400">{label}</label>
    <input 
      type={type} 
      className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl text-xs font-bold text-black focus:border-black focus:outline-none transition-all placeholder-slate-400" 
      placeholder={placeholder}
    />
  </div>
);

export default ContactPage;
