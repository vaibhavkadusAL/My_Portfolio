import { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('animate-fadeInUp');
                            }, index * 50);
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

    const skillCategories = [
        {
            title: 'Languages',
            icon: '💻',
            skills: [
                { name: 'Core Java', level: 90 },
                { name: 'Advanced Java', level: 85 },
                { name: 'Java 8+', level: 85 },
                { name: 'JavaScript (ES6+)', level: 80 },
                { name: 'TypeScript', level: 75 }
            ]
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: [
                { name: 'Spring Boot', level: 90 },
                { name: 'Spring MVC', level: 85 },
                { name: 'Spring Data JPA', level: 85 },
                { name: 'REST APIs', level: 90 },
                { name: 'Microservices', level: 70 }
            ]
        },
        {
            title: 'Frontend',
            icon: '🎨',
            skills: [
                { name: 'React', level: 85 },
                { name: 'Angular', level: 80 },
                { name: 'HTML5', level: 95 },
                { name: 'CSS3', level: 90 },
                { name: 'Bootstrap', level: 85 }
            ]
        },
        {
            title: 'Database',
            icon: '🗄️',
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 75 },
                { name: 'JDBC', level: 80 },
                { name: 'Query Optimization', level: 75 },
                { name: 'Redis', level: 70 }
            ]
        },
        {
            title: 'Tools & Cloud',
            icon: '🛠️',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'GitHub', level: 90 },
                { name: 'Postman', level: 95 },
                { name: 'Maven', level: 85 },
                { name: 'AWS', level: 70 }
            ]
        },
        {
            title: 'Concepts',
            icon: '🧠',
            skills: [
                { name: 'OOP', level: 90 },
                { name: 'SDLC', level: 85 },
                { name: 'MVC Architecture', level: 85 },
                { name: 'API Security', level: 80 },
                { name: 'Data Structures', level: 75 }
            ]
        }
    ];

    const softSkills = [
        'Problem-Solving',
        'Communication',
        'Teamwork',
        'Time Management',
        'Adaptability',
        'Leadership',
        'Critical Thinking',
        'Agile/Scrum'
    ];

    return (
        <section id="skills" className="skills-section section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">Skills & Expertise</h2>

                <div className="skills-content">
                    <div className="technical-skills">
                        <h3 className="skills-subtitle gradient-text animate-on-scroll">Technical Skills</h3>

                        <div className="skills-grid">
                            {skillCategories.map((category, categoryIndex) => (
                                <div
                                    key={categoryIndex}
                                    className="skill-category card animate-on-scroll"
                                    style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                                >
                                    <div className="category-header">
                                        <span className="category-icon">{category.icon}</span>
                                        <h4 className="category-title">{category.title}</h4>
                                    </div>

                                    <div className="skills-list">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex} className="skill-item">
                                                <div className="skill-info">
                                                    <span className="skill-name">{skill.name}</span>
                                                    <span className="skill-level">{skill.level}%</span>
                                                </div>
                                                <div className="skill-bar">
                                                    <div
                                                        className="skill-progress"
                                                        style={{
                                                            width: `${skill.level}%`,
                                                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="soft-skills-section">
                        <h3 className="skills-subtitle gradient-text animate-on-scroll">Soft Skills</h3>

                        <div className="soft-skills-grid animate-on-scroll">
                            {softSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="soft-skill-tag"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-summary card animate-on-scroll">
                        <div className="summary-icon">💡</div>
                        <h4 className="summary-title">Continuous Learning</h4>
                        <p className="summary-text">
                            I'm passionate about staying up-to-date with the latest technologies and best practices
                            in software development. Always eager to learn new skills and take on challenging projects
                            that push me to grow as a developer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
