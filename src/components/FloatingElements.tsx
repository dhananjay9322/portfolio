import React, { useEffect, useRef } from 'react';

const FloatingElements: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Stars array
    const stars: Array<{ x: number; y: number; size: number; opacity: number; speed: number }> = [];
    
    // Create stars
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1
      });
    }

    // Ripple effects
    const ripples: Array<{ x: number; y: number; radius: number; opacity: number }> = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Floating animation
        star.y -= star.speed;
        if (star.y < -star.size) {
          star.y = canvas.height + star.size;
          star.x = Math.random() * canvas.width;
        }
      });

      // Draw and animate ripples
      ripples.forEach((ripple, index) => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ripple.radius += 3;
        ripple.opacity -= 0.02;

        if (ripple.opacity <= 0) {
          ripples.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle clicks for ripple effect
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripples.push({
        x,
        y,
        radius: 0,
        opacity: 1
      });
    };

    canvas.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: '#1c1c1c' }}
      />
      {/* Orange pulsing sidebar */}
      <div className="fixed left-0 top-0 w-1 h-full bg-orange-500 z-10">
        <div className="w-full h-full bg-orange-500 animate-pulse opacity-70"></div>
      </div>
    </>
  );
};

export default FloatingElements;