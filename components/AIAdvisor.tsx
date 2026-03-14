
import React, { useState } from 'react';
import { getDigitalAdvice } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);
    try {
      const advice = await getDigitalAdvice(query);
      setResponse(advice);
    } catch {
      setResponse("Une erreur est survenue lors de la consultation.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase italic tracking-tighter font-display text-[var(--brutal-accent)]">Posez-moi une question technique</h2>
          <p className="text-slate-400 font-bold text-lg leading-snug max-w-2xl mx-auto">
            Obtenez un premier avis sur votre projet digital directement via mon assistant IA entraîné sur mon expertise locale.
          </p>
        </div>

        <div className="brutal-card bg-white p-8 lg:p-12 text-black">
          <form onSubmit={handleSubmit} className="mb-10">
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: Comment sécuriser mon réseau boutique ?"
                className="flex-grow bg-[#f8f8f8] border-2 border-black px-6 py-4 text-black font-bold focus:outline-none focus:bg-[var(--brutal-accent)] transition-colors placeholder-slate-400"
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="bg-black text-white font-black px-10 py-4 brutal-card hover:bg-[var(--brutal-accent)] hover:text-black transition-all flex items-center justify-center min-w-[160px] uppercase tracking-widest text-sm disabled:opacity-50"
              >
                {isLoading ? (
                  <svg className="animate-spin h-6 w-6 text-white group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Conseiller"}
              </button>
            </div>
          </form>

          {response && (
            <div className="brutal-card bg-[#f8f8f8] p-8 border-l-8 border-[var(--brutal-accent)]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 brutal-card bg-black flex items-center justify-center text-[var(--brutal-accent)] mr-4 text-sm font-black">
                  AM
                </div>
                <span className="text-sm font-black text-black uppercase tracking-widest italic">Réponse d'Alexis (AI Advisor)</span>
              </div>
              <p className="text-slate-700 text-base leading-relaxed whitespace-pre-wrap font-bold">
                {response}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
