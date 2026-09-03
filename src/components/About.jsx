import ScrollReveal from './ScrollReveal';
import coffeeArt from '../assets/coffee_art.jpeg';
import { FiCoffee, FiMusic, FiBookOpen, FiHeart, FiStar } from 'react-icons/fi';

const VALUES = [
  { icon: <FiCoffee />, title: 'Artisan Coffee', desc: 'Freshly brewed, every cup a masterpiece' },
  { icon: <FiMusic />, title: 'Live Music', desc: 'Soulful tunes that set the perfect mood' },
  { icon: <FiBookOpen />, title: 'Art & Books', desc: 'Creative corner for the curious mind' },
  { icon: <FiHeart />, title: 'Community', desc: 'A space where connections are made' },
  { icon: <FiStar />, title: 'Experiences', desc: 'More than dining — it\'s a vibe' },
];

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-col">
            <ScrollReveal animation="fadeInLeft" duration={1}>
              <div className="about__image-wrapper">
                <img src={coffeeArt} alt="Artisan latte art at NoFiltr" className="about__image" loading="lazy" />
                <div className="about__image-frame" />
                {/* Steam animation overlay */}
                <div className="about__steam-group">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="about__steam-wisp"
                      style={{
                        left: `${25 + i * 15}%`,
                        animationDelay: `${i * 0.6}s`,
                        animationDuration: `${2.5 + Math.random() * 1.5}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="about__badge">
                  <span className="about__badge-text">Est. 2024</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="about__text-col">
            <ScrollReveal animation="fadeInRight" delay={0.2}>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Where Every Sip<br />Tells a Story</h2>
              <div className="about__divider" />
            </ScrollReveal>

            <ScrollReveal animation="fadeInRight" delay={0.4}>
              <p className="about__description">
                NoFiltr Art Cafe is a creative café where <strong>food, coffee, art, music, and good company</strong> come together. 
                From freshly brewed coffee and handcrafted mocktails to delicious burgers, sandwiches, and wraps — 
                there's something for every mood.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeInRight" delay={0.5}>
              <p className="about__description">
                Beyond the menu, NoFiltr is a space to <em>create, connect, and unwind</em> — with live music, 
                board games, books, and art-inspired experiences adding to the vibe.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeInUp" delay={0.6}>
              <p className="about__quote">
                "A café made for experiences, not just meals."
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Value Cards */}
        <div className="about__values">
          {VALUES.map((val, i) => (
            <ScrollReveal key={i} animation="fadeInUp" delay={i * 0.12} className="about__value-card">
              <div className="about__value-icon">{val.icon}</div>
              <h3 className="about__value-title">{val.title}</h3>
              <p className="about__value-desc">{val.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
