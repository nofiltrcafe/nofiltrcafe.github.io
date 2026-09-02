import logo from '../assets/logo.jpeg';
import { FiInstagram, FiTwitter, FiFacebook, FiHeart, FiCoffee } from 'react-icons/fi';

const FOOTER_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Menu', id: 'menu' },
  { label: 'Visit Us', id: 'contact' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      {/* Floating Coffee Beans */}
      <div className="footer__beans">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="footer__bean"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              fontSize: `${10 + Math.random() * 14}px`,
            }}
          >
            ☕
          </div>
        ))}
      </div>

      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={logo} alt="NoFiltr Art Cafe" className="footer__logo" />
            <p className="footer__tagline">A café made for experiences,<br />not just meals.</p>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-list">
              {FOOTER_LINKS.map(link => (
                <li key={link.id}>
                  <button className="footer__nav-link" onClick={() => scrollTo(link.id)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__connect">
            <h4 className="footer__nav-title">Connect</h4>
            <div className="footer__social-links">
              <a href="https://www.instagram.com/nofiltr.artcafe/" className="footer__social" aria-label="Instagram"><FiInstagram /></a>
              <a href="https://www.facebook.com/61592082712484/?locale=ta_IN" className="footer__social" aria-label="Facebook"><FiFacebook /></a>
            </div>
            <p className="footer__email">absolutelynofiltr@gmail.com</p>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} nofiltr ( Art Cafe) . All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <FiCoffee className="footer__icon footer__icon--coffee" /> &{' '}
            <FiHeart className="footer__icon footer__icon--heart" />
          </p>
        </div>
      </div>
    </footer>
  );
}
