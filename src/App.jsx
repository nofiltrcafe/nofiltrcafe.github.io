import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import logo from './assets/logo.jpeg';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>NoFiltr Art Cafe — Good Food. Great Vibes. Live Art.</title>
        <meta name="description" content="NoFiltr Art Cafe is a creative café where food, coffee, art, music, and good company come together. Good food. Great vibes. Live art. Real moments." />
        <meta property="og:title" content="NoFiltr Art Cafe — Good Food. Great Vibes. Live Art." />
        <meta property="og:description" content="A creative café where food, coffee, art, music, and good company come together. Freshly brewed coffee, handcrafted mocktails, delicious burgers, live music, and art experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/src/assets/logo.jpeg" />
        <link rel="canonical" href="https://nofiltr.cafe" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            "name": "NoFiltr Art Cafe",
            "description": "A creative café where food, coffee, art, music, and good company come together.",
            "servesCuisine": ["Coffee", "Burgers", "Sandwiches", "Wraps", "Mocktails", "Desserts"],
            "hasMenu": true,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Art Street, Creative District",
              "addressLocality": "Your City"
            }
          }
        `}</script>
      </Helmet>

      {/* Preloader */}
      <div className={`preloader ${!loading ? 'hidden' : ''}`}>
        <img src={logo} alt="NoFiltr" className="preloader-logo" />
        <p className="preloader-text">Brewing something special...</p>
      </div>

      <ParticleCanvas />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
