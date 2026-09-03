import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { FiMapPin, FiClock, FiPhone, FiMail, FiInstagram, FiTwitter, FiFacebook, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <ScrollReveal animation="fadeInUp">
          <div className="contact__header">
            <span className="section-label">Come Say Hi</span>
            <h2 className="section-title">Visit Us</h2>
            <p className="section-subtitle">We'd love to see you. Drop by for a coffee, stay for the vibes.</p>
          </div>
        </ScrollReveal>

        <div className="contact__grid">
          <ScrollReveal animation="fadeInLeft" delay={0.2} className="contact__info">
            <div className="contact__info-card">
              <div className="contact__info-item">
                <div className="contact__info-icon"><FiMapPin /></div>
                <div>
                  <h4 className="contact__info-label">Location</h4>
                  <p className="contact__info-text">S. No. 21, D. No 6-287/20, Athri Emerald, Near Sarvajna Circle, Taluk Office Road<br />Karkala - 574104</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon"><FiClock /></div>
                <div>
                  <h4 className="contact__info-label">Hours</h4>
                  <p className="contact__info-text">
                    Tue – Fri: 11:00 AM – 10:30 PM<br />
                    Sat – Sun: 10:30 AM – 11:00 AM
                  </p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon"><FiPhone /></div>
                <div>
                  <h4 className="contact__info-label">Phone</h4>
                  <p className="contact__info-text">+91 94485 15977</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon"><FiMail /></div>
                <div>
                  <h4 className="contact__info-label">Email</h4>
                  <p className="contact__info-text">absolutelynofiltr@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact__socials">
              <a href="https://www.instagram.com/nofiltr.artcafe/" className="contact__social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
              <a href="https://www.facebook.com/61592082712484/?locale=ta_IN" className="contact__social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FiFacebook />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeInRight" delay={0.3} className="contact__map-col">
            {/* Map placeholder with styled overlay */}
            <div className="contact__map">
              <iframe
                title="NoFiltr Art Cafe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.005628299748!2d74.97729347512727!3d13.22496308711412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb5700007479b9%3A0x111d929d5d5504f7!2snofilt%C5%95%20(Art%20Cafe)!5e0!3m2!1sen!2sin!4v1788353733969!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
