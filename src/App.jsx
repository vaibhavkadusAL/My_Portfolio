import { useEffect } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Freelance from './sections/Freelance';
import './App.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Scroll to section based on URL path on initial load
    const path = location.pathname.substring(1); // remove leading '/'
    if (path) {
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          const offset = 70; // navbar height
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app">
      <SEO />
      <Navbar />
      <main className="main-content">
        <Home />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Freelance />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
