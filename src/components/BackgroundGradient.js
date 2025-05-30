import React, { useEffect, useState } from 'react';

const BackgroundGradient = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-300"
      style={{
        background: `
          radial-gradient(circle at ${10 + scrollProgress * 80}% ${20 + scrollProgress * 60}%, 
            rgba(100, 255, 218, 0.15) 0%,
            rgba(10, 25, 47, 0) 50%),
          radial-gradient(circle at ${90 - scrollProgress * 80}% ${80 - scrollProgress * 60}%, 
            rgba(100, 255, 218, 0.1) 0%,
            rgba(10, 25, 47, 0) 50%)
        `,
        backgroundColor: 'var(--bg-primary)'
      }}
    />
  );
};

export default BackgroundGradient; 