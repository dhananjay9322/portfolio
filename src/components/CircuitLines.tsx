import React from 'react';
import { motion } from 'framer-motion';

interface CircuitLinesProps {
  className?: string;
  theme?: 'dark' | 'light';
  variant?: 'horizontal' | 'vertical' | 'grid';
  animated?: boolean;
}

const CircuitLines: React.FC<CircuitLinesProps> = ({
  className = '',
  theme = 'dark',
  variant = 'grid',
  animated = true
}) => {
  const strokeColor = theme === 'dark' ? '#22c55e' : '#3b82f6';
  const glowColor = theme === 'dark' ? '#22c55e' : '#3b82f6';

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.6,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  const pulseVariants = {
    pulse: {
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0"/>
            <stop offset="50%" stopColor={strokeColor} stopOpacity="0.8"/>
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* Main circuit paths */}
        <g opacity="0.4">
          {/* Horizontal lines */}
          <motion.path
            d="M0,200 L300,200 L320,180 L400,180 L420,200 L800,200"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            variants={animated ? pathVariants : {}}
            initial={animated ? "hidden" : "visible"}
            animate={animated ? "visible" : "visible"}
          />
          
          <motion.path
            d="M400,400 L600,400 L620,380 L800,380 L820,400 L1200,400"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            variants={animated ? pathVariants : {}}
            initial={animated ? "hidden" : "visible"}
            animate={animated ? "visible" : "visible"}
            transition={{ delay: 0.5 }}
          />

          <motion.path
            d="M0,600 L200,600 L220,580 L500,580 L520,600 L900,600"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            variants={animated ? pathVariants : {}}
            initial={animated ? "hidden" : "visible"}
            animate={animated ? "visible" : "visible"}
            transition={{ delay: 1 }}
          />

          {/* Vertical connections */}
          <motion.path
            d="M300,200 L300,300 L320,320 L320,400"
            stroke={strokeColor}
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            variants={animated ? pathVariants : {}}
            initial={animated ? "hidden" : "visible"}
            animate={animated ? "visible" : "visible"}
            transition={{ delay: 1.5 }}
          />

          <motion.path
            d="M600,400 L600,500 L580,520 L580,600"
            stroke={strokeColor}
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            variants={animated ? pathVariants : {}}
            initial={animated ? "hidden" : "visible"}
            animate={animated ? "visible" : "visible"}
            transition={{ delay: 2 }}
          />
        </g>

        {/* Circuit nodes */}
        <g>
          {[
            { x: 300, y: 200 },
            { x: 600, y: 400 },
            { x: 800, y: 380 },
            { x: 320, y: 400 },
            { x: 580, y: 600 }
          ].map((node, index) => (
            <motion.circle
              key={index}
              cx={node.x}
              cy={node.y}
              r="4"
              fill={strokeColor}
              filter="url(#glow)"
              variants={animated ? pulseVariants : {}}
              animate={animated ? "pulse" : ""}
              transition={{ delay: index * 0.3 }}
            />
          ))}
        </g>

        {/* Data flow indicators */}
        {animated && (
          <g>
            <motion.circle
              r="3"
              fill={glowColor}
              filter="url(#glow)"
              animate={{
                x: [0, 300, 320, 400, 420, 800],
                y: [200, 200, 180, 180, 200, 200]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2
              }}
            />
            
            <motion.circle
              r="3"
              fill={glowColor}
              filter="url(#glow)"
              animate={{
                x: [400, 600, 620, 800, 820, 1200],
                y: [400, 400, 380, 380, 400, 400]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2,
                delay: 1
              }}
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default CircuitLines;