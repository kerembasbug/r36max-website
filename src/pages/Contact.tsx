import './Contact.css';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission - integrate with your backend
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'support@r36max.com',
            link: 'mailto:support@r36max.com',
        },
        {
            icon: '💬',
            title: 'Live Chat',
            value: 'Available 24/7',
            link: '#',
        },
        {
            icon: '📱',
            title: 'Social Media',
            value: '@r36max',
            link: '#',
        },
    ];

    const faq = [
        {
            question: 'How long does shipping take?',
            answer: 'Standard shipping takes 7-14 business days. Express shipping is available for faster delivery.',
        },
        {
            question: 'What is the warranty period?',
            answer: 'All R36 Max consoles come with a 1-year manufacturer warranty covering defects in materials and workmanship.',
        },
        {
            question: 'Can I add more games?',
            answer: 'Yes! The R36 Max supports expandable storage via TF card, allowing you to add thousands more games.',
        },
        {
            question: 'Is there a return policy?',
            answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, return the product for a full refund.',
        },
    ];

    return (
        <main className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">Get in Touch</span>
                        <h1>Contact <span className="text-gradient">Us</span></h1>
                        <p className="section-subtitle">
                            Have questions about R36 Max? We're here to help!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="section contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">
                        {contactInfo.map((info, index) => (
                            <a key={index} href={info.link} className="contact-info-card card">
                                <span className="contact-icon">{info.icon}</span>
                                <h3>{info.title}</h3>
                                <p>{info.value}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section contact-form-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="form-wrapper">
                            <h2>Send Us a Message</h2>
                            <p>Fill out the form below and we'll get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="order">Order Inquiry</option>
                                        <option value="product">Product Question</option>
                                        <option value="warranty">Warranty/Returns</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="faq-wrapper">
                            <h2>Frequently Asked Questions</h2>
                            <div className="faq-list">
                                {faq.map((item, index) => (
                                    <div key={index} className="faq-item card">
                                        <h3>{item.question}</h3>
                                        <p>{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="section map-section">
                <div className="container">
                    <div className="map-placeholder glass">
                        <span className="big-icon">🗺️</span>
                        <p>Map Placeholder<br />(Integrate Google Maps or similar)</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
