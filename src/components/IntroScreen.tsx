import React, { useEffect, useRef, useState } from 'react';

const line1 = 'Initializing JARVIS Protocol...';
const line2 = 'Access Granted. Welcome to my portfolio.';
const typeSpeed = 38;
const line2Delay = 2000;
const totalDuration = 4700;

const IntroScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [typeIndex, setTypeIndex] = useState(0);
  const [showLine2, setShowLine2] = useState(false);
  const [visible, setVisible] = useState(true);
  const [typingDone, setTypingDone] = useState(false);
  const [speechActive, setSpeechActive] = useState(false);
  const speechUtterance = useRef<SpeechSynthesisUtterance | null>(null);
  const autoHideTimeout = useRef<NodeJS.Timeout | null>(null);
  const typeTimeout = useRef<NodeJS.Timeout | null>(null);
  const line2Timeout = useRef<NodeJS.Timeout | null>(null);

  // Prevent body scroll while intro is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (typeIndex < line1.length) {
      typeTimeout.current = setTimeout(() => setTypeIndex(typeIndex + 1), typeSpeed);
    } else {
      setTypingDone(true);
      line2Timeout.current = setTimeout(() => setShowLine2(true), line2Delay);
    }
    return () => {
      if (typeTimeout.current) clearTimeout(typeTimeout.current);
      if (line2Timeout.current) clearTimeout(line2Timeout.current);
    };
  }, [typeIndex]);

  // Speech synthesis
  useEffect(() => {
    if (showLine2) {
      if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        let voices = synth.getVoices();
        const speak = () => {
          voices = synth.getVoices();
          let voice = voices.find(v =>
            v.lang.startsWith('en') &&
            (v.name.toLowerCase().includes('robot') ||
              v.name.toLowerCase().includes('zira') ||
              v.name.toLowerCase().includes('fred') ||
              v.name.toLowerCase().includes('google') ||
              v.name.toLowerCase().includes('samantha') ||
              v.name.toLowerCase().includes('daniel')
            )
          ) || voices.find(v => v.lang.startsWith('en'));
          if (!voice) return;
          speechUtterance.current = new window.SpeechSynthesisUtterance(line2);
          speechUtterance.current.voice = voice;
          speechUtterance.current.rate = 1.01;
          speechUtterance.current.pitch = 0.92;
          speechUtterance.current.volume = 1;
          setSpeechActive(true);
          synth.speak(speechUtterance.current);
          speechUtterance.current.onend = () => setSpeechActive(false);
        };
        if (!voices.length) {
          window.speechSynthesis.onvoiceschanged = speak;
        } else {
          speak();
        }
      }
    }
    // Cleanup
    return () => {
      if (speechActive && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        setSpeechActive(false);
      }
    };
    // eslint-disable-next-line
  }, [showLine2]);

  // Auto-hide after totalDuration
  useEffect(() => {
    autoHideTimeout.current = setTimeout(() => handleHide(), totalDuration);
    return () => {
      if (autoHideTimeout.current) clearTimeout(autoHideTimeout.current);
    };
    // eslint-disable-next-line
  }, []);

  // Hide and remove intro overlay
  const handleHide = () => {
    if (speechActive && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeechActive(false);
    }
    setVisible(false);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 700);
  };

  // Accessibility: allow Esc key to skip
  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleHide();
    };
    window.addEventListener('keydown', escHandler);
    return () => window.removeEventListener('keydown', escHandler);
    // eslint-disable-next-line
  }, []);

  if (!visible) return null;

  return (
    <div id="intro-screen" className={visible ? '' : 'fade-out'} tabIndex={-1}>
      <div className="intro-hud">
        {/* Rotating Neon Circles */}
        <div className="hud-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
        {/* Flickering Dots/Grid */}
        <div className="hud-dots"></div>
        {/* Scanning Line */}
        <div className="hud-scan"></div>
        {/* Centered Animated Text */}
        <div className="intro-text">
          <div id="intro-line1" className="typewriter">
            <span id="typewriter-text">{line1.slice(0, typeIndex)}</span>
            <span id="typewriter-cursor">|</span>
          </div>
          <div
            id="intro-line2"
            className="fade-in"
            style={{ opacity: showLine2 ? 1 : 0 }}
          >
            {showLine2 ? line2 : ''}
          </div>
        </div>
      </div>
      {/* Skip Button */}
      <button id="skip-intro-btn" aria-label="Skip Intro" onClick={handleHide} tabIndex={0}>
        Skip Intro
      </button>
      {/* Inline CSS for the intro screen only */}
      <style>{`
      #intro-screen {
        position: fixed;
        z-index: 99999;
        inset: 0;
        width: 100vw;
        height: 100vh;
        background: #0d0d0d;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: opacity 0.7s cubic-bezier(.4,0,.2,1);
        font-family: 'Inter', 'Segoe UI', 'Roboto', Arial, sans-serif;
      }
      .intro-hud {
        position: relative;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .intro-text {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90vw;
        max-width: 600px;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 3;
      }
      #intro-line1, #intro-line2 {
        color: #00eaff;
        text-shadow: 0 0 8px #00eaff, 0 0 24px #ff003c;
        font-weight: 700;
        font-size: clamp(1.2rem, 4vw, 2.5rem);
        letter-spacing: 0.04em;
        margin-bottom: 1.2vh;
        line-height: 1.2;
        white-space: pre;
      }
      #intro-line2 {
        color: #ff003c;
        text-shadow: 0 0 8px #ff003c, 0 0 24px #00eaff;
        opacity: 0;
        font-size: clamp(1.1rem, 3vw, 2rem);
        font-weight: 600;
        margin-top: 1.2vh;
        transition: opacity 0.7s cubic-bezier(.4,0,.2,1);
      }
      .typewriter {
        display: inline-block;
      }
      #typewriter-cursor {
        display: inline-block;
        color: #00eaff;
        font-weight: 900;
        font-size: 1em;
        margin-left: 2px;
        animation: blink-cursor 0.7s steps(1) infinite;
      }
      @keyframes blink-cursor {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }
      .hud-circles {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        pointer-events: none;
      }
      .circle {
        position: absolute;
        border-radius: 50%;
        border: 2.5px solid #00eaff;
        box-shadow: 0 0 32px 4px #00eaff88, 0 0 8px 2px #ff003c55 inset;
        opacity: 0.7;
        animation: rotate-circle 6s linear infinite;
        will-change: transform;
      }
      .circle-1 {
        width: 32vw; height: 32vw; min-width: 180px; min-height: 180px; max-width: 420px; max-height: 420px;
        border-color: #00eaff;
        animation-duration: 7s;
      }
      .circle-2 {
        width: 22vw; height: 22vw; min-width: 120px; min-height: 120px; max-width: 300px; max-height: 300px;
        border-color: #ff003c;
        animation-direction: reverse;
        animation-duration: 5.5s;
        opacity: 0.5;
      }
      .circle-3 {
        width: 12vw; height: 12vw; min-width: 60px; min-height: 60px; max-width: 160px; max-height: 160px;
        border-color: #00eaff;
        border-style: dashed;
        animation-duration: 3.5s;
        opacity: 0.4;
      }
      @keyframes rotate-circle {
        0% { transform: translate(-50%, -50%) rotate(0deg);}
        100% { transform: translate(-50%, -50%) rotate(360deg);}
      }
      .hud-dots {
        position: absolute;
        top: 10vh;
        left: 50%;
        transform: translateX(-50%);
        width: 60vw;
        max-width: 420px;
        height: 32px;
        display: flex;
        justify-content: space-between;
        z-index: 2;
        pointer-events: none;
      }
      .hud-dots::before, .hud-dots::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
          to right,
          #00eaff 0 2px,
          transparent 2px 12px
        );
        opacity: 0.12;
        animation: flicker-dots 1.2s infinite steps(2, end);
      }
      .hud-dots::after {
        background: repeating-linear-gradient(
          to right,
          #ff003c 0 2px,
          transparent 2px 12px
        );
        opacity: 0.09;
        animation-delay: 0.6s;
      }
      @keyframes flicker-dots {
        0%, 100% { opacity: 0.12; }
        50% { opacity: 0.22; }
      }
      .hud-scan {
        position: absolute;
        left: 50%;
        top: 20vh;
        width: 60vw;
        max-width: 420px;
        height: 3px;
        background: linear-gradient(90deg, #00eaff 0%, #ff003c 100%);
        box-shadow: 0 0 16px 2px #00eaff88, 0 0 8px 2px #ff003c55;
        opacity: 0.7;
        transform: translateX(-50%);
        z-index: 2;
        animation: scan-move 2.2s cubic-bezier(.4,0,.2,1) infinite;
      }
      @keyframes scan-move {
        0% { top: 20vh; opacity: 0.7;}
        40% { opacity: 1;}
        50% { top: 70vh; opacity: 0.8;}
        60% { opacity: 1;}
        100% { top: 20vh; opacity: 0.7;}
      }
      #skip-intro-btn {
        position: fixed;
        right: 4vw;
        bottom: 3vh;
        z-index: 100;
        background: rgba(13,13,13,0.85);
        color: #00eaff;
        border: 1.5px solid #00eaff;
        border-radius: 6px;
        padding: 0.7em 1.4em;
        font-size: clamp(1rem, 2vw, 1.2rem);
        font-weight: 600;
        letter-spacing: 0.04em;
        box-shadow: 0 0 12px #00eaff44;
        cursor: pointer;
        transition: background 0.2s, color 0.2s, border 0.2s, opacity 0.3s;
        opacity: 0.85;
      }
      #skip-intro-btn:hover, #skip-intro-btn:focus {
        background: #00eaff;
        color: #0d0d0d;
        border-color: #ff003c;
        opacity: 1;
        outline: none;
      }
      #intro-screen.fade-out {
        opacity: 0;
        pointer-events: none;
      }
      @media (max-width: 600px) {
        .intro-text {
          max-width: 98vw;
        }
        .hud-circles .circle-1, .hud-circles .circle-2, .hud-circles .circle-3 {
          min-width: 80px; min-height: 80px;
          max-width: 90vw; max-height: 90vw;
        }
        .hud-dots, .hud-scan {
          max-width: 98vw;
          width: 98vw;
        }
        #skip-intro-btn {
          right: 2vw;
          bottom: 2vh;
          padding: 0.6em 1.1em;
          font-size: 1rem;
        }
      }
      `}</style>
    </div>
  );
};

export default IntroScreen; 