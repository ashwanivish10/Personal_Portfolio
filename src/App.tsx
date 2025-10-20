import { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader';
import ReflectBackground from './components/ui/reflect-background';
import { Chatbot } from './components/chatbot';
import { GitHubStats } from './components/GitHubStats';

/**
 * AppContent Component
 * Yeh component aapke app ka poora layout aur logic rakhta hai.
 * Yeh ThemeProvider ke andar rehta hai, isliye yeh 'useTheme' hook ka istemal kar sakta hai.
 */
function AppContent() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  // Theme change → set data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Loader for 1.5 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative min-h-screen w-full bg-gradient-to-b from-background to-background-secondary transition-colors duration-500">
          {/* Background for theme5 */}
          {theme === 'theme5' && (
            <ReflectBackground className="absolute inset-0 z-[-1]" />
          )}

          {/* App Content */}
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>

           {/* Add the new GitHub section */}
      <section id="github" className="py-20 bg-background-secondary">
        <GitHubStats /> 
      </section>

          <Footer />
           {/* <Chatbot /> */}
        </div>
        
      )}
    </>
  );
}

/**
 * Main App Component
 * Wraps the app in ThemeProvider for theme access everywhere
 */
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;