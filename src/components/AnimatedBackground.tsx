import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'footer' | 'minimal';
  speed?: number;
  theme?: 'dark' | 'light';
  className?: string;
  enableParticles?: boolean;
  enableGrid?: boolean;
  enableScanlines?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'hero',
  speed = 1,
  theme = 'dark',
  className = '',
  enableParticles = true,
  enableGrid = true,
  enableScanlines = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Visibility API for performance
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return null;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return { ctx, canvas, cleanup: () => window.removeEventListener('resize', resizeCanvas) };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvasData = initCanvas();
    if (!canvasData) return;

    const { ctx, canvas, cleanup } = canvasData;
    let time = 0;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      type: 'dot' | 'line' | 'glow';
    }> = [];

    // Initialize particles based on variant
    const particleCount = variant === 'hero' ? 50 : variant === 'minimal' ? 20 : 35;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5 * speed,
        vy: (Math.random() - 0.5) * 0.5 * speed,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        type: Math.random() > 0.7 ? 'glow' : Math.random() > 0.5 ? 'line' : 'dot'
      });
    }

    // Grid lines
    const drawGrid = () => {
      if (!enableGrid) return;
      
      const gridSize = 50;
      const opacity = theme === 'dark' ? 0.1 : 0.05;
      
      ctx.strokeStyle = theme === 'dark' 
        ? `rgba(34, 197, 94, ${opacity})` 
        : `rgba(59, 130, 246, ${opacity})`;
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Scanlines effect
    const drawScanlines = () => {
      if (!enableScanlines || variant === 'minimal') return;
      
      const scanlineY = (time * 0.5 * speed) % (canvas.height + 100);
      const gradient = ctx.createLinearGradient(0, scanlineY - 50, 0, scanlineY + 50);
      
      if (theme === 'dark') {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.2)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanlineY - 50, canvas.width, 100);
    };

    // Draw particles
    const drawParticles = () => {
      if (!enableParticles) return;
      
      particles.forEach(particle => {
        ctx.save();
        
        if (particle.type === 'glow') {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          
          if (theme === 'dark') {
            gradient.addColorStop(0, `rgba(34, 197, 94, ${particle.opacity})`);
            gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
          } else {
            gradient.addColorStop(0, `rgba(59, 130, 246, ${particle.opacity})`);
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
          }
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'line') {
          ctx.strokeStyle = theme === 'dark' 
            ? `rgba(0, 255, 255, ${particle.opacity})` 
            : `rgba(139, 92, 246, ${particle.opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size, particle.y);
          ctx.lineTo(particle.x + particle.size, particle.y);
          ctx.stroke();
        } else {
          ctx.fillStyle = theme === 'dark' 
            ? `rgba(255, 255, 255, ${particle.opacity})` 
            : `rgba(75, 85, 99, ${particle.opacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
        
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    // Connection lines between nearby particles
    const drawConnections = () => {
      if (variant === 'minimal' || !enableParticles) return;
      
      const maxDistance = 100;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2;
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(34, 197, 94, ${opacity})` 
              : `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[j].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Main animation loop
    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGrid();
      drawParticles();
      drawConnections();
      drawScanlines();
      
      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      cleanup();
    };
  }, [variant, speed, theme, isVisible, prefersReducedMotion, enableParticles, enableGrid, enableScanlines, initCanvas]);

  // Fallback for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div className={`w-full h-full opacity-20 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100'
        }`} />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'transparent',
          willChange: 'auto'
        }}
      />
      
      {/* Additional SVG overlay for complex shapes */}
      {variant === 'hero' && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: theme === 'dark' ? 0.1 : 0.05 }}
        >
          <defs>
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10,10 L90,10 L90,90 L10,90 Z M30,30 L70,30 M50,10 L50,50"
                stroke={theme === 'dark' ? '#22c55e' : '#3b82f6'}
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      )}
      
      {/* Floating tech icons */}
      {variant === 'hero' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 ${
                theme === 'dark' ? 'text-cyan-400/20' : 'text-blue-500/20'
              }`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                {i % 3 === 0 && (
                  // Docker icon
                  <path d="M13.5 3H12v1.5h1.5V3zm-1.5 1.5H10.5V6H12V4.5zm1.5 0V6H15V4.5h-1.5zM12 6H10.5v1.5H12V6zm1.5 0v1.5H15V6h-1.5zM12 7.5H10.5V9H12V7.5zm1.5 0V9H15V7.5h-1.5zM9 4.5H7.5V6H9V4.5zm0 1.5H7.5v1.5H9V6zm0 1.5H7.5V9H9V7.5z"/>
                )}
                {i % 3 === 1 && (
                  // Cloud icon
                  <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                )}
                {i % 3 === 2 && (
                  // Server icon
                  <path d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 9h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM4 17h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/>
                )}
              </svg>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedBackground;