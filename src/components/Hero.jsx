import { useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import logo from '../assets/logo.jpeg';
import heroBg from '../assets/hero_bg.jpeg';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);
  const steamRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scroll = window.scrollY;
      const parallaxBg = heroRef.current.querySelector('.hero__bg');
      const content = heroRef.current.querySelector('.hero__content');
      if (parallaxBg) parallaxBg.style.transform = `translateY(${scroll * 0.4}px)`;
      if (content) content.style.transform = `translateY(${scroll * 0.15}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__bg">
        <img src={heroBg} alt="NoFiltr Art Cafe interior" loading="eager" fetchpriority="high" />
        <div className="hero__overlay" />
      </div>

      {/* Animated Steam Wisps */}
      <div className="hero__steam-container">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="hero__steam"
            style={{
              left: `${20 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className={`hero__content ${loaded ? 'hero__content--visible' : ''}`}>
        <div className="hero__logo-wrapper">
          <img src={logo} alt="NoFiltr Art Cafe" className="hero__logo" />
          <div className="hero__logo-glow" />
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">
            <span className="hero__title-word" style={{ animationDelay: '0.5s' }}>Good</span>
            <span className="hero__title-word" style={{ animationDelay: '0.65s' }}>Food.</span>
          </span>
          <span className="hero__title-line">
            <span className="hero__title-word" style={{ animationDelay: '0.8s' }}>Great</span>
            <span className="hero__title-word hero__title-word--accent" style={{ animationDelay: '0.95s' }}>Vibes.</span>
          </span>
          <span className="hero__title-line">
            <span className="hero__title-word" style={{ animationDelay: '1.1s' }}>Live</span>
            <span className="hero__title-word hero__title-word--accent" style={{ animationDelay: '1.25s' }}>Art.</span>
          </span>
        </h1>

        <p className="hero__tagline">
          A café made for experiences, not just meals.
        </p>

        <div className="hero__cta-group">
          <button className="btn-primary hero__cta" onClick={scrollToAbout}>
            Explore NoFiltr
          </button>
          <button className="btn-secondary hero__cta-secondary" onClick={() => {
            const el = document.getElementById('menu');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Menu
          </button>
        </div>
      </div>

      <button className="hero__scroll-indicator" onClick={scrollToAbout} aria-label="Scroll down">
        <span>Scroll</span>
        <FiChevronDown className="hero__scroll-icon" />
      </button>
    </section>
  );
}
