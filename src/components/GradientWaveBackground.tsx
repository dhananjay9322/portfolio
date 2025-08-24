import React, { useEffect, useRef, useState } from 'react';

interface GradientWaveBackgroundProps {
  /** Number of wave layers (default: 3) */
  layerCount?: number;
  /** Animation speed in seconds per cycle (default: 8) */
  speed?: number;
  /** Base opacity for wave layers (default: 0.3) */
  opacity?: number;
  /** Enable hover interactivity (default: true) */
  enableHover?: boolean;
  /** Enable mouse movement tracking (default: true) */
  enableMouseTracking?: boolean;
  /** Custom color palette */
  colors?: {
    cyan: string;
    pink: string;
    purple: string;
  };
  /** Z-index for the background (default: -10) */
  zIndex?: number;
  /** Additional CSS classes */
  className?: string;
}

const GradientWaveBackground: React.FC<GradientWaveBackgroundProps> = ({
  layerCount = 3,
  speed = 8,
  opacity = 0.3,
  enableHover = true,
  enableMouseTracking = true,
  colors = {
    cyan: '#00f0ff',
    pink: '#ff00ff',
    purple: '#6a00ff'
  },
  zIndex = -10,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking effect for subtle interactivity
  useEffect(() => {
    if (!enableMouseTracking) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableMouseTracking]);

  // Generate wave layers with different properties
  const generateWaveLayers = () => {
    const layers = [];
    
    for (let i = 0; i < layerCount; i++) {
      const layerSpeed = speed * (1 + i * 0.3); // Each layer moves at different speed
      const layerOpacity = opacity * (1 - i * 0.2); // Decreasing opacity for depth
      const amplitude = 60 + i * 25; // Increasing amplitude for each layer
      
      layers.push({
        id: i,
        speed: layerSpeed,
        opacity: layerOpacity,
        amplitude,
        delay: i * 1.5 // Staggered animation start
      });
    }
    
    return layers;
  };

  const waveLayers = generateWaveLayers();

  // Calculate dynamic properties based on mouse position and hover state
  const getDynamicSpeed = (baseSpeed: number) => {
    if (!enableHover || !isHovered) return baseSpeed;
    return baseSpeed * (0.7 + mousePosition.x * 0.6); // Speed varies with mouse X position
  };

  const getDynamicOpacity = (baseOpacity: number) => {
    if (!enableHover || !isHovered) return baseOpacity;
    return baseOpacity * (1 + mousePosition.y * 0.4); // Opacity varies with mouse Y position
  };

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(0, 240, 255, 0.08) 0%, 
            rgba(255, 0, 255, 0.04) 30%, 
            rgba(106, 0, 255, 0.02) 60%, 
            transparent 100%)`,
          filter: 'blur(1px)'
        }}
      />

      {/* Animated wave layers */}
      {waveLayers.map((layer) => (
        <div
          key={layer.id}
          className="absolute inset-0 wave-layer"
          style={{
            opacity: getDynamicOpacity(layer.opacity),
            transform: `translateZ(0)`,
            willChange: 'transform, opacity'
          }}
        >
          <svg
            className="w-full h-full wave-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              filter: `drop-shadow(0 0 15px ${colors.cyan}30)`
            }}
          >
            <defs>
              <linearGradient
                id={`wave-gradient-${layer.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={colors.cyan} stopOpacity="0.8" />
                <stop offset="50%" stopColor={colors.pink} stopOpacity="0.6" />
                <stop offset="100%" stopColor={colors.purple} stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            <path
              d={`M 0,50 Q 25,${50 - layer.amplitude / 2} 50,50 T 100,50 L 100,100 L 0,100 Z`}
              fill={`url(#wave-gradient-${layer.id})`}
              className={`wave-path-${layer.id}`}
              style={{
                animationDuration: `${getDynamicSpeed(layer.speed)}s`,
                animationDelay: `${layer.delay}s`,
                transformOrigin: 'center bottom'
              }}
            />
          </svg>
        </div>
      ))}

      {/* Additional glow effects */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${colors.cyan}15 0%, transparent 50%),
                       radial-gradient(circle at 70% 80%, ${colors.pink}12 0%, transparent 50%),
                       radial-gradient(circle at 50% 50%, ${colors.purple}08 0%, transparent 70%)`,
          filter: 'blur(3px)',
          opacity: isHovered ? 0.7 : 0.4,
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        ${waveLayers.map((layer) => `
          .wave-path-${layer.id} {
            animation: wave-animation-${layer.id} ${layer.speed}s ease-in-out infinite;
            animation-delay: ${layer.delay}s;
          }
          
          @keyframes wave-animation-${layer.id} {
            0% {
              transform: translateX(-100%) scaleY(1);
            }
            25% {
              transform: translateX(-50%) scaleY(1.1);
            }
            50% {
              transform: translateX(0%) scaleY(1);
            }
            75% {
              transform: translateX(50%) scaleY(1.1);
            }
            100% {
              transform: translateX(100%) scaleY(1);
            }
          }
        `).join('')}

        /* Hardware acceleration and performance optimizations */
        .wave-layer {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .wave-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateZ(0);
        }

        /* Smooth transitions for hover effects */
        .wave-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Prevent layout shifts and improve performance */
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default GradientWaveBackground;
