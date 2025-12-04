import './Blog.css';
import { Link } from 'react-router-dom';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    image?: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'r36-max-complete-review',
        title: 'R36 Max Complete Review: The Ultimate Retro Gaming Handheld',
        excerpt: 'An in-depth look at the R36 Max handheld game console. We cover everything from display quality to battery life in this comprehensive review.',
        date: 'December 1, 2024',
        category: 'Reviews',
        readTime: '8 min read',
    },
    {
        slug: 'best-retro-gaming-console-2024',
        title: 'Best Retro Gaming Console 2024: Why R36 Max Leads the Pack',
        excerpt: 'Comparing the top retro gaming consoles of 2024. See how the R36 Max stacks up against the competition.',
        date: 'November 28, 2024',
        category: 'Comparisons',
        readTime: '6 min read',
    },
    {
        slug: 'handheld-gaming-guide',
        title: 'Complete Guide to Handheld Gaming: Everything You Need to Know',
        excerpt: 'New to handheld gaming? This guide covers everything from choosing the right console to setting up emulators.',
        date: 'November 25, 2024',
        category: 'Guides',
        readTime: '10 min read',
    },
    {
        slug: 'retro-games-nostalgia',
        title: '50 Retro Games That Define Gaming Nostalgia',
        excerpt: 'Take a trip down memory lane with our list of the most nostalgic retro games, all available on the R36 Max.',
        date: 'November 20, 2024',
        category: 'Gaming',
        readTime: '12 min read',
    },
    {
        slug: 'emulator-setup-guide',
        title: 'R36 Max Emulator Setup Guide: Add Your Own Games',
        excerpt: 'Learn how to add more games to your R36 Max console. Step-by-step guide for beginners.',
        date: 'November 15, 2024',
        category: 'Tutorials',
        readTime: '7 min read',
    },
];

const Blog = () => {
    const categories = ['All', 'Reviews', 'Comparisons', 'Guides', 'Gaming', 'Tutorials'];

    return (
        <main className="blog-page">
            {/* Hero */}
            <section className="blog-hero">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">R36 Max Blog</span>
                        <h1>Gaming <span className="text-gradient">News & Tips</span></h1>
                        <p className="section-subtitle">
                            Reviews, guides, and the latest news about R36 Max and retro gaming
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="categories-section">
                <div className="container">
                    <div className="categories">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className={`category-btn ${cat === 'All' ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="section featured-section">
                <div className="container">
                    <Link to={`/blog/${blogPosts[0].slug}`} className="featured-post card">
                        <div className="featured-image">
                            <div className="image-placeholder">
                                <span className="big-icon">📰</span>
                                <p>Featured Image</p>
                            </div>
                        </div>
                        <div className="featured-content">
                            <span className="post-category">{blogPosts[0].category}</span>
                            <h2>{blogPosts[0].title}</h2>
                            <p>{blogPosts[0].excerpt}</p>
                            <div className="post-meta">
                                <span>{blogPosts[0].date}</span>
                                <span>•</span>
                                <span>{blogPosts[0].readTime}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section blog-grid-section">
                <div className="container">
                    <h2 className="section-title">Latest Articles</h2>
                    <div className="blog-grid">
                        {blogPosts.slice(1).map((post, index) => (
                            <Link key={index} to={`/blog/${post.slug}`} className="blog-card card">
                                <div className="blog-card-image">
                                    <div className="image-placeholder small">
                                        <span className="icon">📝</span>
                                    </div>
                                </div>
                                <div className="blog-card-content">
                                    <span className="post-category">{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="post-meta">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section newsletter-section">
                <div className="container">
                    <div className="newsletter-content glass">
                        <h2>Stay Updated</h2>
                        <p>Subscribe to our newsletter for the latest R36 Max news and gaming tips</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
