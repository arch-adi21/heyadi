import React, { useRef, useEffect } from 'react';

const LogoLoader = () => {
  const pathRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const text = textRef.current;
    const animationDuration = 2000; // milliseconds

    const totalLength = path.getTotalLength();

    // Create animation
    const animate = () => {
      let progress = Date.now() % animationDuration / animationDuration;
      progress = Math.sin(progress * Math.PI) / 2 + 0.5;
      const offset = totalLength * progress;
      text.setAttribute('stroke-dashoffset', offset);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <div className="loader-container">
      <svg viewBox="0 0 100 100">
        <defs>
          <path id="circlePath" d="M50,50m-40,0a40,40 0 1,1 80,0a40,40 0 1,1 -80,0" ref={pathRef} />
        </defs>
        <text textAnchor="middle" dominantBaseline="central" x="50" y="50" ref={textRef}>
          <textPath href="#circlePath" fill="white">Aditya Siddharth Jyoti</textPath>
        </text>
      </svg>
    </div>
  );
};

export default LogoLoader;
