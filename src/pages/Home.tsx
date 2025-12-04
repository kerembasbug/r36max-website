import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        {
            icon: '🎮',
            title: '21,000+ Games',
            description: 'Pre-loaded with over 21,000 classic games from 30+ emulators including NES, SNES, PS1, N64, and more.'
        },
        {
            icon: '📺',
            title: '4.0" IPS Display',
            description: '720x720 HD resolution with tempered glass screen for crystal-clear graphics and wide viewing angles.'
        },
        {
            icon: '🔋',
            title: '6 Hours Playtime',
            description: '4000mAh battery provides up to 6 hours of continuous gaming. Full charge in just 2 hours.'
        },
        {
            icon: '🐧',
            title: 'Linux OS',
            description: 'Open-source Linux gaming system for smooth, responsive gameplay and easy customization.'
        }
    ];

    const specs = [
        { label: 'Display', value: '4.0" IPS 720x720' },
        { label: 'Battery', value: '4000mAh' },
        { label: 'Games', value: '21,000+' },
        { label: 'Emulators', value: '30+' },
        { label: 'Playtime', value: '6 Hours' },
        { label: 'Storage', value: '64GB/128GB' },
    ];

    return (
        <main className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text animate-fade-in-up">
                            <span className="badge">🔥 Best Seller 2024</span>
                            <h1>
                                R36 Max <span className="text-gradient">Retro Gaming</span> Console
                            </h1>
                            <p className="hero-description">
                                Experience nostalgia with the ultimate handheld gaming console.
                                21,000+ games, 4.0" IPS screen, 6 hours of gameplay.
                                Your childhood favorites, anywhere you go.
                            </p>
                            <div className="hero-cta">
                                <a
                                    href="https://www.amazon.com/s?k=r36+max+handheld+game+console"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg"
                                >
                                    Buy on Amazon
                                </a>
                                <a
                                    href="https://r36shandheld.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary btn-lg"
                                >
                                    Official Store
                                </a>
                            </div>
                            <div className="hero-stats">
                                {specs.slice(0, 3).map((spec, index) => (
                                    <div key={index} className="stat">
                                        <span className="stat-value">{spec.value}</span>
                                        <span className="stat-label">{spec.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="hero-image animate-fade-in delay-200">
                            <div className="hero-image-wrapper animate-float">
                                {/* Replace with actual product image */}
                                <div className="product-image-placeholder">
                                    <img
                                        src="/images/r36-max-hero.png"
                                        alt="R36 Max Retro Gaming Console"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.innerHTML = '<div class="placeholder-text">🎮<br/>Product Image<br/>(Replace with r36-max-hero.png)</div>';
                                        }}
                                    />
                                </div>
                                <div className="hero-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="section video-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">See It In Action</h2>
                        <p className="section-subtitle">
                            Watch the R36 Max in action and discover why gamers love it
                        </p>
                    </div>
                    <div className="video-wrapper">
                        <div className="video-container">
                            {/* Replace with actual video */}
                            <div className="video-placeholder">
                                <div className="play-button">▶</div>
                                <p>Product Video<br />(Replace with actual video)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose R36 Max?</h2>
                        <p className="section-subtitle">
                            The most powerful and feature-rich retro gaming console on the market
                        </p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card card animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specs Overview */}
            <section className="section specs-section">
                <div className="container">
                    <div className="specs-content">
                        <div className="specs-text">
                            <span className="badge">Technical Specs</span>
                            <h2>Built for <span className="text-gradient">Serious Gamers</span></h2>
                            <p>
                                The R36 Max combines powerful hardware with elegant design.
                                From the stunning IPS display to the ergonomic controls,
                                every detail is crafted for the ultimate gaming experience.
                            </p>
                            <Link to="/features" className="btn btn-outline">
                                View All Features →
                            </Link>
                        </div>
                        <div className="specs-grid">
                            {specs.map((spec, index) => (
                                <div key={index} className="spec-item glass">
                                    <span className="spec-value">{spec.value}</span>
                                    <span className="spec-label">{spec.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What Gamers Say</h2>
                        <p className="section-subtitle">
                            Join thousands of satisfied retro gaming enthusiasts
                        </p>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>"The R36 Max is incredible! The screen quality is amazing and it plays all my childhood favorites perfectly. Best purchase I've made this year."</p>
                            <div className="testimonial-author">
                                <span className="author-name">Alex M.</span>
                                <span className="author-title">Verified Buyer</span>
                            </div>
                        </div>
                        <div className="testimonial-card card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>"Battery life is outstanding! I took it on a 10-hour flight and it lasted the whole time. The Linux system is super smooth."</p>
                            <div className="testimonial-author">
                                <span className="author-name">Sarah K.</span>
                                <span className="author-title">Verified Buyer</span>
                            </div>
                        </div>
                        <div className="testimonial-card card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>"21,000 games out of the box! I've been playing for weeks and still discovering new classics. The carrying case is a nice bonus too."</p>
                            <div className="testimonial-author">
                                <span className="author-name">Mike R.</span>
                                <span className="author-title">Verified Buyer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content glass">
                        <h2>Ready to <span className="text-gradient-orange">Start Gaming</span>?</h2>
                        <p>Get your R36 Max today and relive the golden age of gaming</p>
                        <div className="cta-buttons">
                            <a
                                href="https://www.amazon.com/s?k=r36+max+handheld+game+console"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                🛒 Buy on Amazon
                            </a>
                            <a
                                href="https://r36shandheld.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary btn-lg"
                            >
                                🏪 Official Store
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
