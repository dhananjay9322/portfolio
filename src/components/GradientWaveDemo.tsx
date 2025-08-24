import React, { useState } from 'react';
import GradientWaveBackground from './GradientWaveBackground';

const GradientWaveDemo: React.FC = () => {
  const [config, setConfig] = useState({
    layerCount: 4,
    speed: 10,
    opacity: 0.25,
    enableHover: true,
    enableMouseTracking: true,
    colors: {
      cyan: '#00f0ff',
      pink: '#ff00ff',
      purple: '#6a00ff'
    }
  });

  const presetConfigs = [
    {
      name: 'Default Neon',
      config: {
        layerCount: 4,
        speed: 10,
        opacity: 0.25,
        enableHover: true,
        enableMouseTracking: true,
        colors: { cyan: '#00f0ff', pink: '#ff00ff', purple: '#6a00ff' }
      }
    },
    {
      name: 'Ocean Waves',
      config: {
        layerCount: 3,
        speed: 15,
        opacity: 0.3,
        enableHover: true,
        enableMouseTracking: true,
        colors: { cyan: '#00d4ff', pink: '#0099cc', purple: '#0066cc' }
      }
    },
    {
      name: 'Sunset Glow',
      config: {
        layerCount: 5,
        speed: 8,
        opacity: 0.35,
        enableHover: true,
        enableMouseTracking: true,
        colors: { cyan: '#ff6b35', pink: '#f7931e', purple: '#ff0080' }
      }
    },
    {
      name: 'Minimal Tech',
      config: {
        layerCount: 2,
        speed: 12,
        opacity: 0.15,
        enableHover: false,
        enableMouseTracking: false,
        colors: { cyan: '#00ff88', pink: '#00ccff', purple: '#0066ff' }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Gradient Wave Background */}
      <GradientWaveBackground 
        layerCount={config.layerCount}
        speed={config.speed}
        opacity={config.opacity}
        enableHover={config.enableHover}
        enableMouseTracking={config.enableMouseTracking}
        colors={config.colors}
        zIndex={-10}
      />

      {/* Demo Content */}
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Gradient Wave Background Demo
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              High-performance animated gradient wave background with neon colors, 
              smooth 60fps animations, and interactive hover effects.
            </p>
          </div>

          {/* Preset Configurations */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Preset Configurations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {presetConfigs.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => setConfig(preset.config)}
                  className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="font-semibold text-cyan-400 mb-2">{preset.name}</h3>
                  <div className="text-sm text-gray-400">
                    <p>Layers: {preset.config.layerCount}</p>
                    <p>Speed: {preset.config.speed}s</p>
                    <p>Opacity: {preset.config.opacity}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Controls */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Custom Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Layer Count */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Layer Count: {config.layerCount}
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={config.layerCount}
                  onChange={(e) => setConfig({...config, layerCount: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Speed */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Speed: {config.speed}s
                </label>
                <input
                  type="range"
                  min="5"
                  max="20"
                  value={config.speed}
                  onChange={(e) => setConfig({...config, speed: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Opacity */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Opacity: {config.opacity}
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="0.5"
                  step="0.05"
                  value={config.opacity}
                  onChange={(e) => setConfig({...config, opacity: parseFloat(e.target.value)})}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Color Controls */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cyan Color
                </label>
                <input
                  type="color"
                  value={config.colors.cyan}
                  onChange={(e) => setConfig({
                    ...config, 
                    colors: {...config.colors, cyan: e.target.value}
                  })}
                  className="w-full h-10 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pink Color
                </label>
                <input
                  type="color"
                  value={config.colors.pink}
                  onChange={(e) => setConfig({
                    ...config, 
                    colors: {...config.colors, pink: e.target.value}
                  })}
                  className="w-full h-10 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Purple Color
                </label>
                <input
                  type="color"
                  value={config.colors.purple}
                  onChange={(e) => setConfig({
                    ...config, 
                    colors: {...config.colors, purple: e.target.value}
                  })}
                  className="w-full h-10 rounded-lg cursor-pointer"
                />
              </div>

              {/* Toggle Controls */}
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={config.enableHover}
                    onChange={(e) => setConfig({...config, enableHover: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-300">Hover Effects</span>
                </label>
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={config.enableMouseTracking}
                    onChange={(e) => setConfig({...config, enableMouseTracking: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-300">Mouse Tracking</span>
                </label>
              </div>
            </div>
          </div>

          {/* Features Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Performance</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 60fps smooth animations</li>
                <li>• Hardware acceleration</li>
                <li>• Memory leak prevention</li>
                <li>• Responsive design</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-pink-400 mb-3">Visual Effects</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Multiple wave layers</li>
                <li>• Neon gradient colors</li>
                <li>• Soft glow effects</li>
                <li>• Dynamic opacity</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Interactivity</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Hover speed changes</li>
                <li>• Mouse position tracking</li>
                <li>• Dynamic color shifts</li>
                <li>• Smooth transitions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for slider styling */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #00f0ff, #ff00ff);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #00f0ff, #ff00ff);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default GradientWaveDemo;
