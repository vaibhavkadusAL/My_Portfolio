import { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('animate-fadeInUp');
                            }, index * 150);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: 'GreenDharti',
            subtitle: 'E-Waste Recycling & Sustainability Platform',
            description: 'A comprehensive platform for e-waste management with secure payment integration, admin module for user management, and service approval workflows. Built with modern technologies to promote environmental sustainability.',
            technologies: ['Java', 'Spring Boot', 'MySQL', 'Angular', 'React', 'REST APIs', 'Razorpay'],
            features: [
                'Razorpay Payment Integration with secure transaction handling',
                'Complete Admin Module for user and service management',
                'REST APIs for payment workflows and operations',
                'Optimized MySQL database queries for performance',
                'Authentication, authorization, and input validation'
            ],
            link: 'https://greendharti.com/',
            icon: '🌱',
            color: 'green'
        },
        {
            title: 'Sai Rural Development Trust',
            subtitle: 'NGO Website Platform',
            description: 'A modern, responsive website for an NGO featuring a complete frontend built with React and a Spring Boot backend for contact form management. Focused on user experience and seamless data handling.',
            technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Spring Boot', 'REST API'],
            features: [
                'Entire Frontend developed using React with reusable components',
                'Spring Boot Backend for contact form management',
                'Form validation and error handling',
                'REST APIs for admin data access',
                'Frontend-backend integration using Axios'
            ],
            link: 'https://www.sairuraldevelopmenttrust.com/',
            icon: '🤝',
            color: 'blue'
        },
        {
            title: 'Multi-Chatbot WhatsApp Bridge',
            subtitle: 'Enterprise Communication Platform',
            description: 'A scalable platform that routes WhatsApp messages to appropriate business chatbots. Handles 1000+ concurrent sessions with secure authentication and comprehensive message logging.',
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'REST APIs', 'JWT', '360Dialog', 'Twilio'],
            features: [
                'Core message routing engine for chatbot mapping',
                'Webhook handling and outbound messaging',
                'Business Management APIs for client onboarding',
                'Session management using Redis',
                'Message logging with analytics support',
                'High scalability with JWT/API key authentication'
            ],
            link: null,
            icon: '💬',
            color: 'purple'
        }
    ];

    return (
        <section id="projects" className="projects-section section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">Featured Projects</h2>

                <div className="projects-intro animate-on-scroll">
                    <p className="projects-description">
                        Here are some of the real-world projects I have worked on, ranging from full-stack web
                        applications to backend-heavy platforms with complex integrations. These projects
                        represent hands-on experience with live systems used by real users and businesses.
                    </p>
                    <p className="projects-description">
                        Each project reflects my ability to understand requirements, design scalable solutions,
                        and deliver production-ready applications using modern technologies. My experience
                        includes working on admin panels, payment workflows, database optimization, and smooth
                        frontend-backend communication.
                    </p>
                    <p className="projects-description">
                        These projects highlight my approach to clean architecture, performance optimization,
                        and building systems that are reliable, maintainable, and future-ready.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card card animate-on-scroll project-${project.color}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="project-header">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-title-section">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-subtitle">{project.subtitle}</p>
                                </div>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-features">
                                <h4 className="features-title">Key Features</h4>
                                <ul className="features-list">
                                    {project.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="feature-item">
                                            <span className="feature-bullet">▹</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-technologies">
                                <h4 className="tech-title">Technologies</h4>
                                <div className="tech-stack">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {project.link && (
                                <div className="project-footer">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link btn btn-primary"
                                    >
                                        <span>View Project</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="projects-cta animate-on-scroll">
                    <div className="cta-card card">
                        <h3 className="cta-title">Want to see more?</h3>
                        <p className="cta-description">
                            I'm always working on new projects and exploring new technologies.
                            Feel free to reach out to discuss potential collaborations or to learn more about my work.
                        </p>
                        <div className="cta-buttons">
                            <a href="https://github.com/vaibhavkadus" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>View GitHub</span>
                            </a>
                            <a href="mailto:vaibhavkadus3131@gmail.com" className="btn btn-outline">
                                <span>Get in Touch</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
