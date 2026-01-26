import { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app">
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

export default App;
