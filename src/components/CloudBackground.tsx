import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import MatrixRain from './MatrixRain';
import CircuitLines from './CircuitLines';
import TechIcons from './TechIcons';

interface CloudBackgroundProps {
  variant?: 'hero' | 'section' | 'footer' | 'minimal';
  enableMatrix?: boolean;
  enableCircuits?: boolean;
  enableTechIcons?: boolean;
}

const CloudBackground: React.FC<CloudBackgroundProps> = ({
  variant = 'hero',
  enableMatrix = false,
  enableCircuits = true,
  enableTechIcons = true
}) => {
  return (
    <div className="fixed inset-0 -z-10">
      <AnimatedBackground 
        variant={variant}
        speed={0.5}
        theme="dark"
        enableParticles={true}
        enableGrid={true}
        enableScanlines={variant === 'hero'}
      />
      
      {enableMatrix && (
        <MatrixRain 
          intensity="low"
          speed={0.3}
          theme="dark"
        />
      )}
      
      {enableCircuits && (
        <CircuitLines 
          variant="grid"
          animated={true}
          theme="dark"
        />
      )}
      
      {enableTechIcons && variant === 'hero' && (
        <TechIcons 
          icons={['docker', 'kubernetes', 'aws', 'jenkins', 'github']}
          animated={true}
          theme="dark"
        />
      )}
    </div>
  );
};

export default CloudBackground;