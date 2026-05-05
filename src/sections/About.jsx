import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const highlights = [
        {
            icon: '💼',
            title: 'Professional Experience',
            description: '3+ years as Software Developer at Alphaseam Enterprises'
        },
        {
            icon: '🎯',
            title: 'Specialization',
            description: 'Full-Stack Development with Java, Spring Boot, and React'
        },
        {
            icon: '🚀',
            title: 'Focus Areas',
            description: 'REST APIs, Microservices, Cloud Integration, and Performance Optimization'
        },
        {
            icon: '🏆',
            title: 'Achievements',
            description: 'International Cycling Expedition & NCC "C" Certificate'
        }
    ];

    return (
        <section id="about" className="about-section section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">About Me</h2>

                <div className="about-content">
                    <div className="about-text animate-on-scroll">
                        <div className="about-intro">
                            <h3 className="about-subtitle gradient-text">Who I Am</h3>
                            <p className="about-description">
                                I'm a <strong>Full-Stack Java Developer</strong> with <strong>3+ years of professional experience</strong> (Nov 2022 – Present),
                                specializing in scalable backend systems, REST API development, and modern front-end frameworks.
                                I am currently open to <strong>freelance and part-time opportunities</strong> where I help
                                businesses turn ideas into powerful digital solutions.
                            </p>
                            <p className="about-description">
                                Skilled in <strong>Core Java, Spring Boot, Microservices, MySQL, Angular/React</strong>, and
                                software development best practices. I have a strong understanding of API integrations, SDLC,
                                debugging, unit testing, and performance optimization.
                            </p>
                            <p className="about-description">
                                I'm adept at delivering clean, maintainable, and production-ready solutions aligned with
                                business requirements. My passion lies in building scalable web applications and delivering
                                innovative solutions that make a real impact.
                            </p>
                        </div>

                        <div className="about-personal">
                            <h3 className="about-subtitle gradient-text">Beyond Code</h3>
                            <p className="about-description">
                                When I'm not coding, I enjoy pushing my limits through cycling and outdoor adventures.
                                I've completed an <strong>International Cycling Expedition from India to Bangladesh</strong>,
                                which taught me perseverance, teamwork, and the importance of setting ambitious goals.
                            </p>
                            <p className="about-description">
                                My <strong>NCC "C" Certificate</strong> reflects my commitment to leadership, discipline,
                                and service—qualities that I bring to every project I work on.
                            </p>
                        </div>

                        <div className="about-languages">
                            <h4 className="about-languages-title">Languages</h4>
                            <div className="language-tags">
                                <span className="language-tag">English</span>
                                <span className="language-tag">Hindi</span>
                                <span className="language-tag">Marathi</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-highlights">
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="highlight-card card animate-on-scroll"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="highlight-icon">{highlight.icon}</div>
                                <h4 className="highlight-title">{highlight.title}</h4>
                                <p className="highlight-description">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
