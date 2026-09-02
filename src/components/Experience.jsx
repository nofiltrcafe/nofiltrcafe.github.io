import ScrollReveal from './ScrollReveal';
import liveMusic from '../assets/live_music.png';
import boardGames from '../assets/board_games.png';
import coffeeArt from '../assets/coffee_art.png';
import { FiMusic, FiGrid, FiBookOpen } from 'react-icons/fi';

const EXPERIENCES = [
  {
    title: 'Live Music Nights',
    desc: 'Soulful acoustic sessions every weekend. Feel the music, live the moment.',
    image: liveMusic,
    icon: <FiMusic />,
    span: 'large',
  },
  {
    title: 'Board Games',
    desc: 'Classic and modern games for groups. Challenge your friends over coffee.',
    image: boardGames,
    icon: <FiGrid />,
    span: 'medium',
  },
  {
    title: 'Books Corner',
    desc: 'Curl up with a great book and a warm cup. Time slows down here.',
    image: coffeeArt,
    icon: <FiBookOpen />,
    span: 'medium',
  },
];

export default function Experience() {
  return (
    <section className="experience section-padding" id="experience">
      {/* Ambient background shapes */}
      <div className="experience__bg-shapes">
        <div className="experience__shape experience__shape--1" />
        <div className="experience__shape experience__shape--2" />
        <div className="experience__shape experience__shape--3" />
      </div>

      <div className="container">
        <ScrollReveal animation="fadeInUp">
          <div className="experience__header">
            <span className="section-label">Beyond The Menu</span>
            <h2 className="section-title">The NoFiltr Experience</h2>
            <p className="section-subtitle">
              More than a café — it's a world of creativity, connection, and unforgettable moments.
            </p>
          </div>
        </ScrollReveal>

        <div className="experience__grid">
          {EXPERIENCES.map((exp, i) => (
            <ScrollReveal
              key={i}
              animation="scaleIn"
              delay={i * 0.1}
              className={`experience__card experience__card--${exp.span}`}
            >
              <div className="experience__card-inner">
                <img src={exp.image} alt={exp.title} className="experience__card-image" loading="lazy" />
                <div className="experience__card-overlay" />
                <div className="experience__card-content">
                  <div className="experience__card-icon">{exp.icon}</div>
                  <h3 className="experience__card-title">{exp.title}</h3>
                  <p className="experience__card-desc">{exp.desc}</p>
                </div>
                <div className="experience__card-border" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
