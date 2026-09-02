import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { FiX } from 'react-icons/fi';
import heroBg from '../assets/hero_bg.png';
import coffeeArt from '../assets/coffee_art.png';
import burgerPlate from '../assets/burger_plate.png';
import mocktailDrink from '../assets/mocktail_drink.png';
import liveMusic from '../assets/live_music.png';
import cafeExterior from '../assets/cafe_exterior.png';
import dessertPlate from '../assets/dessert_plate.png';

const GALLERY_IMAGES = [
  { src: heroBg, alt: 'Cozy café interior', category: 'ambiance' },
  { src: coffeeArt, alt: 'Artisan latte art', category: 'coffee' },
  { src: burgerPlate, alt: 'Gourmet burger plate', category: 'food' },
  { src: mocktailDrink, alt: 'Handcrafted mocktail', category: 'drinks' },
  { src: liveMusic, alt: 'Live music night', category: 'events' },
  { src: cafeExterior, alt: 'NoFiltr café exterior', category: 'ambiance' },
  { src: dessertPlate, alt: 'Artisanal dessert', category: 'food' },
];

const FILTERS = ['All', 'Ambiance', 'Coffee', 'Food', 'Drinks', 'Events'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === filter.toLowerCase());

  return (
    <section className="gallery section-padding" id="gallery">
      <div className="container">
        <ScrollReveal animation="fadeInUp">
          <div className="gallery__header">
            <span className="section-label">Moments at NoFiltr</span>
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">A glimpse into the NoFiltr world.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeInUp" delay={0.2}>
          <div className="gallery__filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`gallery__filter ${filter === f ? 'gallery__filter--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="gallery__grid">
          {filtered.map((img, i) => (
            <ScrollReveal key={`${filter}-${i}`} animation="scaleIn" delay={i * 0.08} className="gallery__item">
              <div className="gallery__item-inner" onClick={() => setLightbox(img)}>
                <img src={img.src} alt={img.alt} className="gallery__item-image" loading="lazy" />
                <div className="gallery__item-overlay">
                  <span className="gallery__item-caption">{img.alt}</span>
                  <span className="gallery__item-category">{img.category}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery__lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="gallery__lightbox-close" onClick={() => setLightbox(null)} aria-label="Close lightbox">
              <FiX size={28} />
            </button>
            <img src={lightbox.src} alt={lightbox.alt} className="gallery__lightbox-image" />
            <p className="gallery__lightbox-caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
