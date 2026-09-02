import ScrollReveal from './ScrollReveal';
import { FiStar } from 'react-icons/fi';

const TESTIMONIALS = [
  {
    name: 'Priya M.',
    text: 'The vibe at NoFiltr is unmatched! The latte art is gorgeous and the burgers are to die for. My go-to spot for weekends.',
    rating: 5,
  },
  {
    name: 'Arjun K.',
    text: 'Live music nights here are incredible. Great sound, great people, and the mocktails are seriously good.',
    rating: 5,
  },
  {
    name: 'Sneha R.',
    text: 'I come here for the art workshops and stay for the coffee. Such a unique concept — love everything about this place!',
    rating: 5,
  },
  {
    name: 'Vikram S.',
    text: 'Best burgers in town, hands down. The atmosphere feels like you\'re hanging out at a friend\'s really cool living room.',
    rating: 5,
  },
  {
    name: 'Anita D.',
    text: 'Board game nights with friends at NoFiltr have become a tradition. The wraps are amazing and the staff is super friendly!',
    rating: 5,
  },
  {
    name: 'Rohan P.',
    text: 'A hidden gem! The cold brew is perfect, the desserts are heavenly, and the whole space inspires creativity.',
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="testimonials__stars">
      {[...Array(count)].map((_, i) => (
        <FiStar key={i} className="testimonials__star" style={{ animationDelay: `${i * 0.1}s` }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Double the items for seamless marquee
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <ScrollReveal animation="fadeInUp">
          <div className="testimonials__header">
            <span className="section-label">What People Say</span>
            <h2 className="section-title">Loved by Many</h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Row 1 */}
      <div className="testimonials__marquee-wrapper">
        <div className="testimonials__marquee">
          {doubled.map((t, i) => (
            <div key={i} className="testimonials__card">
              <Stars count={t.rating} />
              <p className="testimonials__text">"{t.text}"</p>
              <span className="testimonials__name">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
