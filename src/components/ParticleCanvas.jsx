import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.size = Math.random() * 6 + 2;
        this.speedY = -(Math.random() * 0.8 + 0.2);
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.type = Math.random() > 0.5 ? 'bean' : 'dot';
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3;
        this.rotation += this.rotationSpeed;
        if (this.y < -20) this.reset();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;

        if (this.type === 'bean') {
          // Coffee bean shape
          ctx.fillStyle = '#8B5E3C';
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size, this.size * 1.4, 0, 0, Math.PI * 2);
          ctx.fill();
          // Bean line
          ctx.strokeStyle = '#5D4037';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(0, -this.size * 1.2);
          ctx.quadraticCurveTo(this.size * 0.3, 0, 0, this.size * 1.2);
          ctx.stroke();
        } else {
          // Small dot/sparkle
          ctx.fillStyle = '#D4A574';
          ctx.beginPath();
          ctx.arc(0, 0, this.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Create particles
    const particleCount = Math.min(Math.floor(canvas.width / 40), 35);
    for (let i = 0; i < particleCount; i++) {
      const p = new Particle();
      p.y = Math.random() * canvas.height; // Spread initial particles
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.4,
      }}
    />
  );
}
