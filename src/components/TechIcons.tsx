import React from 'react';
import { motion } from 'framer-motion';

interface TechIconsProps {
  className?: string;
  theme?: 'dark' | 'light';
  icons?: string[];
  animated?: boolean;
}

const TechIcons: React.FC<TechIconsProps> = ({
  className = '',
  theme = 'dark',
  icons = ['docker', 'kubernetes', 'aws', 'jenkins', 'terraform'],
  animated = true
}) => {
  const iconColor = theme === 'dark' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(59, 130, 246, 0.3)';

  const iconPaths = {
    docker: "M13.5 3H12v1.5h1.5V3zm-1.5 1.5H10.5V6H12V4.5zm1.5 0V6H15V4.5h-1.5zM12 6H10.5v1.5H12V6zm1.5 0v1.5H15V6h-1.5zM12 7.5H10.5V9H12V7.5zm1.5 0V9H15V7.5h-1.5zM9 4.5H7.5V6H9V4.5zm0 1.5H7.5v1.5H9V6zm0 1.5H7.5V9H9V7.5z",
    kubernetes: "M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z",
    aws: "M6.5 14.5L12 11L17.5 14.5L12 18L6.5 14.5ZM12 2L6.5 5.5L12 9L17.5 5.5L12 2Z",
    jenkins: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    terraform: "M8 2L16 6V10L8 6V2ZM8 10L16 14V18L8 14V10ZM2 6L8 9V13L2 10V6Z",
    github: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      opacity: 0.6,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="relative w-full h-full"
        variants={containerVariants}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      >
        {icons.map((icon, index) => (
          <motion.div
            key={icon}
            className="absolute"
            style={{
              left: `${15 + (index * 18)}%`,
              top: `${20 + (index % 2) * 40}%`,
            }}
            variants={iconVariants}
            animate={animated ? ["visible", "float"] : "visible"}
            custom={index}
          >
            <motion.svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill={iconColor}
              variants={animated ? floatVariants : {}}
              animate={animated ? "float" : ""}
              transition={{ delay: index * 0.5 }}
            >
              <path d={iconPaths[icon as keyof typeof iconPaths] || iconPaths.docker} />
            </motion.svg>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechIcons;