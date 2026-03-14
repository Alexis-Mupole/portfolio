
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import SolutionsAfriquePage from './pages/SolutionsAfriquePage';
import TarifsPage from './pages/TarifsPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import { LanguageProvider } from './src/context/LanguageContext';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4 text-center">
          <div>
            <h1 className="text-2xl font-black mb-4 uppercase tracking-tighter">Something went wrong</h1>
            <p className="text-slate-500 mb-6 font-medium">Please try refreshing the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-black text-white font-bold uppercase tracking-widest text-[10px] rounded-full"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export type Page = 'home' | 'services' | 'solutions' | 'projects' | 'pricing' | 'contact';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'solutions':
        return <SolutionsAfriquePage onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage />;
      case 'pricing':
        return <TarifsPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
