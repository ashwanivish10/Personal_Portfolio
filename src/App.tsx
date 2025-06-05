// import { useEffect } from 'react';
// import { useTheme } from './context/ThemeContext';
// import Header from './components/layout/Header';
// import Hero from './components/sections/Hero';
// import About from './components/sections/About';
// import Projects from './components/sections/Projects';
// import Skills from './components/sections/Skills';
// import Contact from './components/sections/Contact';
// import Footer from './components/layout/Footer';

// function App() {
//   const { theme } = useTheme();

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//   }, [theme]);

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-background to-background-secondary transition-colors duration-500">
//       <Header />
//       <main>
//         <Hero />
//         <About />
//         <Projects />
//         <Skills />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader'; // make sure path is correct


function App() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate load
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="min-h-screen w-full bg-gradient-to-b from-background to-background-secondary transition-colors duration-500">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
      
    </>

  );
}

export default App;
