import { useEffect, useRef } from 'react';
import profileImage from '../assets/DSC08014.JPG';
import './Home.css';

const Home = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 70;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="home-section section">
            <div className="home-container container">
                <div className="home-content" ref={titleRef}>
                    <div className="home-greeting">
                        <span className="home-wave">👋</span>
                        <span className="home-greeting-text">Hello, I'm</span>
                    </div>

                    <h1 className="home-title">
                        Vaibhav Kadus
                    </h1>

                    <div className="home-subtitle">
                        <span className="typing-text">Full-Stack Java Developer</span>
                    </div>

                    <p className="home-description">
                        Dynamic Full-Stack Developer specializing in scalable backend systems, REST API development,
                        cloud integration, and modern front-end frameworks. Passionate about delivering clean,
                        maintainable, and production-ready solutions.
                    </p>

                    <div className="home-stats">
                        <div className="home-stat">
                            <span className="home-stat-number gradient-text">1+</span>
                            <span className="home-stat-label">Years Experience</span>
                        </div>
                        <div className="home-stat">
                            <span className="home-stat-number gradient-text">3+</span>
                            <span className="home-stat-label">Projects Completed</span>
                        </div>
                        <div className="home-stat">
                            <span className="home-stat-number gradient-text">10+</span>
                            <span className="home-stat-label">Technologies</span>
                        </div>
                    </div>

                    <div className="home-cta">
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('projects')}
                        >
                            View My Work
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={() => scrollToSection('about')}
                        >
                            About Me
                        </button>
                    </div>

                    <div className="home-contact-info">
                        <a href="mailto:vaibhavkadus3131@gmail.com" className="home-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                            </svg>
                            <span>vaibhavkadus3131@gmail.com</span>
                        </a>
                        <a href="tel:+919146747054" className="home-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                            </svg>
                            <span>+91 9146747054</span>
                        </a>
                        <span className="home-contact-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                            </svg>
                            <span>Pune, India</span>
                        </span>
                    </div>
                </div>

                <div className="home-visual">
                    <div className="home-avatar">
                        <div className="avatar-circle">
                            <img src={profileImage} alt="Vaibhav Kadus" className="avatar-image" />
                        </div>
                        <div className="avatar-ring"></div>
                        <div className="avatar-ring-2"></div>
                    </div>

                    <div className="floating-elements">
                        <div className="floating-element" style={{ top: '10%', left: '10%' }}>
                            <span className="tech-icon">☕</span>
                        </div>
                        <div className="floating-element" style={{ top: '20%', right: '15%' }}>
                            <span className="tech-icon">⚛️</span>
                        </div>
                        <div className="floating-element" style={{ bottom: '25%', left: '5%' }}>
                            <span className="tech-icon">🚀</span>
                        </div>
                        <div className="floating-element" style={{ bottom: '15%', right: '10%' }}>
                            <span className="tech-icon">💻</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span className="scroll-text">Scroll Down</span>
            </div>
        </section >
    );
};

export default Home;
