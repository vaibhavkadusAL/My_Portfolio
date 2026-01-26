import { useEffect, useRef } from 'react';
import './Freelance.css';

const Freelance = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('animate-fadeInUp');
                            }, index * 100);
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

    const services = [
        {
            icon: '⚡',
            title: 'Full-Stack Development',
            description: 'Building scalable applications using Spring Boot and React.'
        },
        {
            icon: '🛠️',
            title: 'Backend Systems',
            description: 'Designing clean and secure REST APIs and microservices.'
        },
        {
            icon: '📱',
            title: 'Responsive UI',
            description: 'Developing modern, user-friendly, and mobile-first interfaces.'
        },
        {
            icon: '🔗',
            title: 'API & Payments',
            description: 'Integrating payment gateways (Razorpay) and third-party APIs.'
        },
        {
            icon: '📊',
            title: 'Admin Dashboards',
            description: 'Creating custom admin panels and business management systems.'
        },
        {
            icon: '🚀',
            title: 'Optimization',
            description: 'Improving performance, security, and scalability of existing systems.'
        }
    ];

    return (
        <section id="freelance" className="freelance-section section" ref={sectionRef}>
            <div className="container">
                <div className="freelance-header animate-on-scroll">
                    <div className="status-badge">
                        <span className="dot"></span>
                        Available for Freelance
                    </div>
                    <h2 className="section-title">Open to Web Development Projects</h2>
                </div>

                <div className="freelance-content">
                    <div className="freelance-text animate-on-scroll">
                        <p className="freelance-description">
                            I am currently open to <strong>freelance and part-time development opportunities</strong>.
                            As a Full-Stack Java Developer, I help startups, businesses, and individuals turn ideas
                            into powerful digital solutions that are scalable, secure, and easy to use.
                        </p>
                        <p className="freelance-description">
                            Whether you have a new idea, an existing project that needs improvement, or need a complex
                            system built from scratch, I take ownership of the complete development lifecycle to deliver
                            production-ready applications.
                        </p>
                        <p className="freelance-mission">
                            ✨ If you’re looking for a developer who cares about quality, clarity, and results — let’s talk.
                        </p>

                        <div className="freelance-cta-box card">
                            <h3 className="cta-box-title">🤝 Let's Build Something Together</h3>
                            <p className="cta-box-text">
                                Have an idea, a product, or an existing system that needs improvement?
                                I'm always excited to collaborate on meaningful projects and help bring ideas to life
                                with clean code and smart solutions.
                            </p>
                            <a
                                href="https://wa.me/919146747054"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-whatsapp"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.309 1.658zm6.21-4.415c1.465.866 3.001 1.327 4.594 1.328 5.205 0 9.44-4.235 9.444-9.44.002-2.521-.982-4.891-2.77-6.678s-4.155-2.772-6.67-2.772c-5.206 0-9.442 4.236-9.445 9.441-.001 1.698.441 3.352 1.282 4.805l-1.025 3.738 3.829-1.002zm11.366-8.254c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.519-.164-.738.164s-.847 1.066-1.039 1.284c-.192.219-.383.246-.71.082-.328-.164-1.386-.511-2.641-1.631-1.002-.892-1.657-2.022-1.854-2.35-.197-.328-.021-.506.143-.669.148-.147.328-.383.492-.574.164-.191.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.738-1.776-1.011-2.432-.266-.641-.538-.553-.738-.563-.191-.01-.41-.011-.629-.011s-.574.082-.871.41c-.297.328-1.148 1.12-1.148 2.732s1.175 3.169 1.339 3.388c.164.219 2.31 3.527 5.594 4.946.781.337 1.389.538 1.861.688.784.249 1.498.214 2.062.13.629-.094 1.94-.792 2.213-1.557.273-.765.273-1.421.192-1.557s-.297-.246-.625-.41z" />
                                </svg>
                                Let's Talk on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card animate-on-scroll"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h4 className="service-title">{service.title}</h4>
                                <p className="service-content">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Freelance;
