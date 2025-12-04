import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    const timeline = [
        {
            year: '2020',
            title: 'The Beginning',
            description: 'Started as a passion project to bring retro gaming to modern audiences.',
        },
        {
            year: '2022',
            title: 'R36 Series Launch',
            description: 'Introduced the R36 series, combining powerful hardware with portable design.',
        },
        {
            year: '2023',
            title: 'R36 Max Development',
            description: 'Developed the R36 Max with enhanced features based on community feedback.',
        },
        {
            year: '2024',
            title: 'Global Success',
            description: 'R36 Max becomes a bestseller with over 100,000 units sold worldwide.',
        },
    ];

    const values = [
        {
            icon: '🎯',
            title: 'Quality First',
            description: 'We never compromise on build quality. Every R36 Max is crafted with premium materials.',
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'Constantly improving our products with cutting-edge technology and user feedback.',
        },
        {
            icon: '🌍',
            title: 'Community',
            description: 'Built by gamers, for gamers. Our community drives every decision we make.',
        },
        {
            icon: '🤝',
            title: 'Support',
            description: 'Dedicated customer support team ready to help with any questions or issues.',
        },
    ];

    const team = [
        { name: 'Alex Chen', role: 'Founder & CEO', emoji: '👨‍💼' },
        { name: 'Sarah Kim', role: 'Product Designer', emoji: '👩‍🎨' },
        { name: 'Mike Johnson', role: 'Lead Engineer', emoji: '👨‍💻' },
        { name: 'Lisa Wang', role: 'Community Manager', emoji: '👩‍💻' },
    ];

    return (
        <main className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">About Us</span>
                        <h1>Our <span className="text-gradient">Mission</span></h1>
                        <p className="section-subtitle">
                            Bringing the golden age of gaming to a new generation through premium handheld consoles
                        </p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2>Our Story</h2>
                            <p>
                                R36 Max was born from a simple idea: everyone deserves to experience the magic of
                                classic gaming, wherever they go. We grew up with NES, SNES, and PlayStation,
                                and we wanted to share that joy with the world.
                            </p>
                            <p>
                                Our team of passionate gamers and engineers came together to create the ultimate
                                handheld retro gaming console. After years of development and countless prototypes,
                                the R36 Max was born – a device that combines the nostalgia of classic gaming with
                                modern technology and premium build quality.
                            </p>
                            <p>
                                Today, R36 Max has become the go-to choice for retro gaming enthusiasts worldwide.
                                With over 21,000 pre-loaded games, a stunning 4.0" IPS display, and 6 hours of
                                battery life, we've created something truly special.
                            </p>
                        </div>
                        <div className="story-image">
                            <div className="image-placeholder glass">
                                <span className="big-icon">🎮</span>
                                <p>Team Photo<br />(Replace)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section timeline-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Journey</h2>
                        <p className="section-subtitle">From passion project to global gaming brand</p>
                    </div>
                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-year">{item.year}</div>
                                <div className="timeline-content card">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section values-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Values</h2>
                        <p className="section-subtitle">The principles that guide everything we do</p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card card">
                                <span className="value-icon">{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section team-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Meet the Team</h2>
                        <p className="section-subtitle">The people behind R36 Max</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-card card">
                                <div className="team-avatar">{member.emoji}</div>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content glass">
                        <h2>Join the <span className="text-gradient">R36 Max</span> Family</h2>
                        <p>Experience the difference quality makes</p>
                        <div className="cta-buttons">
                            <a
                                href="https://www.amazon.com/s?k=r36+max+handheld+game+console"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                Get Your R36 Max
                            </a>
                            <Link to="/contact" className="btn btn-outline btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
