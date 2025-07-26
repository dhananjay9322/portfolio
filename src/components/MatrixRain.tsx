import React, { useRef, useEffect, useState } from 'react';

interface MatrixRainProps {
  className?: string;
  theme?: 'dark' | 'light';
  intensity?: 'low' | 'medium' | 'high';
  speed?: number;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  className = '',
  theme = 'dark',
  intensity = 'medium',
  speed = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const intensityMap = {
      low: 0.02,
      medium: 0.05,
      high: 0.08
    };

    const draw = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      // Semi-transparent background for trail effect
      ctx.fillStyle = theme === 'dark' 
        ? 'rgba(0, 0, 0, 0.05)' 
        : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Color gradient based on position
        const opacity = Math.max(0.1, 1 - (drops[i] / canvas.height) * 2);
        
        if (theme === 'dark') {
          ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
        } else {
          ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
        }

        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop when it goes off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speed * intensityMap[intensity];
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme, intensity, speed, isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.3 }}
    />
  );
};

export default MatrixRain;