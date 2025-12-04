import './Product.css';

const Product = () => {
    const specs = [
        { label: 'Screen Size', value: '4.0 inches' },
        { label: 'Resolution', value: '720 x 720 HD' },
        { label: 'Screen Type', value: 'IPS Tempered Glass' },
        { label: 'CPU', value: 'Quad-Core Processor' },
        { label: 'RAM', value: '1GB DDR3' },
        { label: 'Storage', value: '64GB / 128GB TF Card' },
        { label: 'Battery', value: '4000mAh Li-ion' },
        { label: 'Playtime', value: 'Up to 6 hours' },
        { label: 'Charging', value: 'USB Type-C, 2 hours' },
        { label: 'OS', value: 'Linux Open Source' },
        { label: 'Emulators', value: '30+ Supported' },
        { label: 'Games', value: '21,000+ Pre-loaded' },
        { label: 'Audio', value: 'Stereo Speakers + 3.5mm Jack' },
        { label: 'Controls', value: 'D-Pad, Dual Analog, ABXY, L/R Triggers' },
        { label: 'Dimensions', value: '141 x 72 x 18mm' },
        { label: 'Weight', value: '200g' },
    ];

    const emulators = [
        'PlayStation 1 (PS1)', 'Nintendo 64 (N64)', 'Super Nintendo (SNES)',
        'Nintendo Entertainment System (NES)', 'Game Boy Advance (GBA)',
        'Game Boy Color (GBC)', 'Game Boy (GB)', 'Sega Genesis/Mega Drive',
        'Sega Master System', 'Sega Game Gear', 'Neo Geo', 'Arcade (MAME)',
        'Atari 2600', 'Atari 7800', 'PC Engine/TurboGrafx-16', 'WonderSwan',
        'CPS1/CPS2/CPS3', 'Final Burn Alpha', 'PICO-8', 'ScummVM'
    ];

    const packageContents = [
        { icon: '🎮', name: 'R36 Max Console' },
        { icon: '💾', name: '64GB TF Card (Pre-loaded)' },
        { icon: '🔌', name: 'USB Type-C Cable' },
        { icon: '🎒', name: 'Carrying Case' },
        { icon: '📖', name: 'User Manual' },
    ];

    const gallery = [
        { id: 1, label: 'Front View' },
        { id: 2, label: 'Back View' },
        { id: 3, label: 'Side View' },
        { id: 4, label: 'With Case' },
        { id: 5, label: 'Screen Detail' },
        { id: 6, label: 'Controls' },
    ];

    return (
        <main className="product-page">
            {/* Hero */}
            <section className="product-hero">
                <div className="container">
                    <div className="product-hero-content">
                        <div className="product-gallery">
                            <div className="main-image">
                                <div className="image-placeholder">
                                    <img
                                        src="/images/r36-max-main.png"
                                        alt="R36 Max Handheld Game Console"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.innerHTML = '<div class="placeholder-text">🎮<br/>Main Product Image<br/>(r36-max-main.png)</div>';
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="thumbnail-grid">
                                {gallery.map((item) => (
                                    <div key={item.id} className="thumbnail">
                                        <div className="image-placeholder small">
                                            <span>{item.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="product-info">
                            <span className="badge">🔥 Hot Seller</span>
                            <h1>R36 Max Handheld Game Console</h1>
                            <p className="product-tagline">
                                The Ultimate Retro Gaming Experience - 4.0" IPS Screen, 21,000+ Games, 6 Hours Playtime
                            </p>

                            <div className="price-section">
                                <span className="price">$69.99</span>
                                <span className="original-price">$99.99</span>
                                <span className="discount">30% OFF</span>
                            </div>

                            <ul className="product-highlights">
                                <li>✅ 4.0" IPS HD Display (720x720)</li>
                                <li>✅ 21,000+ Pre-loaded Games</li>
                                <li>✅ 30+ Emulators Supported</li>
                                <li>✅ 4000mAh Battery (6 Hours)</li>
                                <li>✅ Linux Open Source System</li>
                                <li>✅ Carrying Case Included</li>
                            </ul>

                            <div className="color-options">
                                <span className="label">Colors Available:</span>
                                <div className="colors">
                                    <span className="color black active" title="Black"></span>
                                    <span className="color purple" title="Purple"></span>
                                    <span className="color gray" title="Gray"></span>
                                    <span className="color white" title="White"></span>
                                </div>
                            </div>

                            <div className="storage-options">
                                <span className="label">Storage:</span>
                                <div className="options">
                                    <button className="option active">64GB</button>
                                    <button className="option">128GB</button>
                                </div>
                            </div>

                            <div className="buy-buttons">
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
                </div>
            </section>

            {/* Product Video */}
            <section className="section product-video-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Product Overview</h2>
                        <p className="section-subtitle">Watch the R36 Max game console in action</p>
                    </div>
                    <div className="video-wrapper">
                        <div className="video-container">
                            <div className="video-placeholder">
                                <div className="play-button">▶</div>
                                <p>Product Review Video<br />(Replace with YouTube embed)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Package Contents */}
            <section className="section package-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What's In The Box</h2>
                        <p className="section-subtitle">Everything you need to start gaming immediately</p>
                    </div>
                    <div className="package-grid">
                        {packageContents.map((item, index) => (
                            <div key={index} className="package-item card">
                                <span className="package-icon">{item.icon}</span>
                                <span className="package-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Specs */}
            <section className="section specs-full-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Technical Specifications</h2>
                        <p className="section-subtitle">Detailed specifications for R36 Max game console</p>
                    </div>
                    <div className="specs-table-wrapper">
                        <table className="specs-table">
                            <tbody>
                                {specs.map((spec, index) => (
                                    <tr key={index}>
                                        <td className="spec-label">{spec.label}</td>
                                        <td className="spec-value">{spec.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Supported Emulators */}
            <section className="section emulators-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Supported Emulators</h2>
                        <p className="section-subtitle">Play games from 30+ classic gaming platforms</p>
                    </div>
                    <div className="emulators-grid">
                        {emulators.map((emulator, index) => (
                            <div key={index} className="emulator-tag">
                                {emulator}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content glass">
                        <h2>Get Your <span className="text-gradient">R36 Max</span> Today</h2>
                        <p>Free shipping worldwide • 30-day money-back guarantee</p>
                        <div className="cta-buttons">
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
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Product;
