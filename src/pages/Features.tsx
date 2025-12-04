import './Features.css';
import { Link } from 'react-router-dom';

const Features = () => {
    const mainFeatures = [
        {
            icon: '📺',
            title: '4.0" IPS Display',
            subtitle: '720x720 HD Resolution',
            description: 'Experience crystal-clear graphics with our premium IPS panel. The tempered glass screen provides 178° wide viewing angles, true-to-life colors, and excellent durability for long-lasting use.',
            highlights: ['720x720 HD Resolution', '178° Viewing Angle', 'Tempered Glass Protection', 'Anti-glare Coating'],
        },
        {
            icon: '🎮',
            title: '21,000+ Games',
            subtitle: '30+ Emulators Supported',
            description: 'Dive into an extensive library of classic games from the golden age of gaming. From NES to PlayStation, SNES to N64, all your favorites are pre-loaded and ready to play.',
            highlights: ['PlayStation 1', 'Nintendo 64', 'Super Nintendo', 'Game Boy Advance', 'Sega Genesis', 'Arcade Games'],
        },
        {
            icon: '🐧',
            title: 'Linux OS',
            subtitle: 'Open Source Gaming System',
            description: 'Powered by an optimized Linux gaming system, the R36 Max delivers smooth, responsive gameplay with excellent stability. Easy to customize and expand with additional games.',
            highlights: ['Stable Performance', 'Fast Boot Time', 'Easy Customization', 'Regular Updates'],
        },
        {
            icon: '🔋',
            title: '4000mAh Battery',
            subtitle: '6 Hours of Gameplay',
            description: 'Play all day with the powerful 4000mAh lithium battery. Enjoy up to 6 hours of continuous gaming and recharge fully in just 2 hours via USB Type-C.',
            highlights: ['6 Hours Playtime', '2 Hours Fast Charge', 'USB Type-C', 'Low Power Mode'],
        },
    ];

    const additionalFeatures = [
        { icon: '🎵', title: 'Dual Speakers', description: 'Immersive stereo sound for enhanced gaming experience' },
        { icon: '🎧', title: '3.5mm Audio Jack', description: 'Connect your favorite headphones for private gaming' },
        { icon: '💾', title: 'TF Card Slot', description: 'Expandable storage for unlimited game collection' },
        { icon: '📱', title: 'Compact Design', description: 'Lightweight and portable at just 200g' },
        { icon: '🕹️', title: 'Dual Analog Sticks', description: 'Precise control for 3D games and racing' },
        { icon: '🔘', title: 'Hall Effect Triggers', description: 'Responsive L/R shoulder buttons for fast action' },
        { icon: '💡', title: 'LED Indicators', description: 'Battery and charging status at a glance' },
        { icon: '🌐', title: 'WiFi Support', description: 'Download games and updates wirelessly' },
    ];

    const comparisons = [
        { feature: 'Screen Size', r36max: '4.0"', others: '3.5"' },
        { feature: 'Resolution', r36max: '720x720', others: '640x480' },
        { feature: 'Battery', r36max: '4000mAh', others: '2500mAh' },
        { feature: 'Playtime', r36max: '6 Hours', others: '3-4 Hours' },
        { feature: 'Pre-loaded Games', r36max: '21,000+', others: '10,000' },
        { feature: 'OS', r36max: 'Linux', others: 'Android' },
        { feature: 'Screen Type', r36max: 'IPS', others: 'TN' },
    ];

    return (
        <main className="features-page">
            {/* Hero */}
            <section className="features-hero">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">R36 Max Features</span>
                        <h1>Built for <span className="text-gradient">Serious Gamers</span></h1>
                        <p className="section-subtitle">
                            Discover why the R36 Max is the ultimate retro handheld gaming console
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Features */}
            <section className="section main-features-section">
                <div className="container">
                    {mainFeatures.map((feature, index) => (
                        <div key={index} className={`feature-block ${index % 2 !== 0 ? 'reverse' : ''}`}>
                            <div className="feature-visual">
                                <div className="feature-image-wrapper glass">
                                    <div className="feature-image-placeholder">
                                        <span className="big-icon">{feature.icon}</span>
                                        <p>Feature Image<br />(Replace)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-content">
                                <span className="feature-icon">{feature.icon}</span>
                                <h2>{feature.title}</h2>
                                <span className="feature-subtitle">{feature.subtitle}</span>
                                <p>{feature.description}</p>
                                <ul className="feature-highlights">
                                    {feature.highlights.map((highlight, i) => (
                                        <li key={i}>✓ {highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Additional Features */}
            <section className="section additional-features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">More Features</h2>
                        <p className="section-subtitle">Everything you need for the perfect gaming experience</p>
                    </div>
                    <div className="additional-grid">
                        {additionalFeatures.map((feature, index) => (
                            <div key={index} className="additional-card card">
                                <span className="additional-icon">{feature.icon}</span>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="section comparison-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">R36 Max vs Competition</h2>
                        <p className="section-subtitle">See how R36 Max outperforms other handheld consoles</p>
                    </div>
                    <div className="comparison-table-wrapper">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th className="highlight">R36 Max</th>
                                    <th>Other Consoles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.feature}</td>
                                        <td className="highlight">{row.r36max}</td>
                                        <td className="muted">{row.others}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content glass">
                        <h2>Ready to Experience <span className="text-gradient-orange">R36 Max</span>?</h2>
                        <p>Get yours today and join thousands of happy gamers</p>
                        <div className="cta-buttons">
                            <a
                                href="https://www.amazon.com/s?k=r36+max+handheld+game+console"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                Buy on Amazon
                            </a>
                            <Link to="/r36-max-console" className="btn btn-outline btn-lg">
                                View Product Details
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Features;
