import { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
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

    const education = [
        {
            degree: 'Bachelor of Business Administration in Computer Application (BBA-CA)',
            institution: 'Savitribai Phule Pune University',
            year: '2022',
            percentage: '73.48%',
            icon: '🎓'
        },
        {
            degree: 'Higher Secondary Certificate (HSC) - Science',
            institution: 'Maharashtra State Board',
            year: '2019',
            percentage: '63%',
            icon: '📚'
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            institution: 'Maharashtra State Board',
            year: '2017',
            percentage: '75%',
            icon: '📖'
        }
    ];

    const certifications = [
        {
            title: 'AI Tools Workshop',
            issuer: 'Professional Training',
            date: 'October 2024',
            icon: '🤖'
        },
        {
            title: 'Java Programming Internship',
            issuer: 'CodeAlpha',
            date: '2023',
            icon: '☕'
        },
        {
            title: 'NCC "C" Certificate',
            issuer: 'National Cadet Corps',
            date: 'Leadership & Discipline',
            icon: '🏅'
        }
    ];

    return (
        <section id="education" className="education-section section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">Education & Certifications</h2>

                <div className="education-content">
                    <div className="education-column">
                        <h3 className="column-title gradient-text animate-on-scroll">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                            </svg>
                            Academic Background
                        </h3>

                        <div className="education-list">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="education-card card animate-on-scroll"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="education-icon">{edu.icon}</div>
                                    <div className="education-details">
                                        <h4 className="education-degree">{edu.degree}</h4>
                                        <p className="education-institution">{edu.institution}</p>
                                        <div className="education-meta">
                                            <span className="education-year">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                                                </svg>
                                                {edu.year}
                                            </span>
                                            <span className="education-percentage">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                </svg>
                                                {edu.percentage}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="education-column">
                        <h3 className="column-title gradient-text animate-on-scroll">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.55 3.94 4.24.25-3.29 2.69 1.08 4.12z" />
                            </svg>
                            Training & Certifications
                        </h3>

                        <div className="certification-list">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="certification-card card animate-on-scroll"
                                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                                >
                                    <div className="certification-icon">{cert.icon}</div>
                                    <div className="certification-details">
                                        <h4 className="certification-title">{cert.title}</h4>
                                        <p className="certification-issuer">{cert.issuer}</p>
                                        <span className="certification-date">{cert.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="achievements-card card animate-on-scroll">
                            <h4 className="achievements-title">
                                <span className="achievements-icon">🏆</span>
                                Notable Achievements
                            </h4>
                            <ul className="achievements-list">
                                <li className="achievement-item">
                                    <span className="achievement-bullet">▹</span>
                                    <span>Completed International Cycling Expedition (India to Bangladesh)</span>
                                </li>
                                <li className="achievement-item">
                                    <span className="achievement-bullet">▹</span>
                                    <span>NCC "C" Certificate highlighting leadership and discipline</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
