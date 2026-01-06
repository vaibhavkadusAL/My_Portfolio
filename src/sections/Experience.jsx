import { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
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

    const experience = {
        company: 'Alphaseam Enterprises Pvt. Ltd',
        position: 'Jr. Software Developer',
        duration: 'November 2023 – Present',
        location: 'Pune',
        responsibilities: [
            'Designed and developed full-stack application modules using Core Java, Spring Boot, Angular/React, MySQL, and REST architecture',
            'Built and integrated RESTful APIs, enabling seamless communication between backend microservices and modern front-end frameworks',
            'Improved application performance by implementing code optimization, SQL query tuning, exception handling, and scalable API design',
            'Participated in Agile/Scrum development workflow, including sprint planning, requirement analysis, daily standups, and retrospective meetings',
            'Collaborated with cross-functional teams to deliver high-quality, production-ready features within project deadlines',
            'Utilized Git, GitHub, Postman for version control, API testing, and efficient deployment workflows',
            'Ensured code maintainability by following clean coding principles, modular architecture, and reusable component development',
            'Integrated third-party services and APIs, enhancing functionality and delivering robust business solutions'
        ],
        technologies: [
            'Java', 'Spring Boot', 'Angular', 'React', 'MySQL', 'REST APIs',
            'Git', 'GitHub', 'Postman', 'Agile/Scrum'
        ]
    };

    return (
        <section id="experience" className="experience-section section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">Work Experience</h2>

                <div className="experience-content">
                    <div className="experience-timeline">
                        <div className="timeline-line"></div>

                        <div className="experience-card card animate-on-scroll">
                            <div className="experience-header">
                                <div className="experience-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                                    </svg>
                                </div>

                                <div className="experience-title-section">
                                    <h3 className="experience-position">{experience.position}</h3>
                                    <h4 className="experience-company gradient-text">{experience.company}</h4>
                                    <div className="experience-meta">
                                        <span className="experience-duration">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                                            </svg>
                                            {experience.duration}
                                        </span>
                                        <span className="experience-location">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                            {experience.location}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="experience-body">
                                <h5 className="experience-section-title">Key Responsibilities</h5>
                                <ul className="experience-responsibilities">
                                    {experience.responsibilities.map((responsibility, index) => (
                                        <li key={index} className="responsibility-item">
                                            <span className="responsibility-bullet">▹</span>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="experience-technologies">
                                    <h5 className="experience-section-title">Technologies Used</h5>
                                    <div className="tech-tags">
                                        {experience.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience-summary animate-on-scroll">
                        <div className="summary-card card">
                            <h4 className="summary-title">Professional Summary</h4>
                            <p className="summary-text">
                                As a Jr. Software Developer at Alphaseam Enterprises, I've gained extensive hands-on
                                experience in building scalable full-stack applications. My role involves working with
                                cutting-edge technologies and collaborating with cross-functional teams to deliver
                                high-quality solutions.
                            </p>
                            <div className="summary-stats">
                                <div className="summary-stat">
                                    <span className="stat-number gradient-text">1+</span>
                                    <span className="stat-label">Years</span>
                                </div>
                                <div className="summary-stat">
                                    <span className="stat-number gradient-text">10+</span>
                                    <span className="stat-label">Technologies</span>
                                </div>
                                <div className="summary-stat">
                                    <span className="stat-number gradient-text">100%</span>
                                    <span className="stat-label">Dedication</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
