import { useRef, useEffect, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, once]);

  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getInitialTransform(animation),
    transition: `opacity ${duration}s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s, transform ${duration}s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} className={className} style={animationStyles}>
      {children}
    </div>
  );
}

function getInitialTransform(animation) {
  switch (animation) {
    case 'fadeInUp': return 'translateY(50px)';
    case 'fadeInDown': return 'translateY(-50px)';
    case 'fadeInLeft': return 'translateX(-50px)';
    case 'fadeInRight': return 'translateX(50px)';
    case 'scaleIn': return 'scale(0.85)';
    case 'tiltIn': return 'perspective(1000px) rotateX(10deg) translateY(30px)';
    default: return 'translateY(50px)';
  }
}
