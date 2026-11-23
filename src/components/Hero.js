import React from 'react';

export default function Hero() {
  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> DATA ENGINEERING · APPLIED ML · ANALYTICS</p>
        <h1>Turning messy data<br />into <em>useful decisions.</em></h1>
        <p className="hero-intro">I’m Caleb Monteiro, a Computer Science & Engineering student at the University of Toledo. I work across data systems and software, with a focus on making technical work useful to the people who rely on it.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore selected work <span>↓</span></a>
          <a className="text-link" href="mailto:iamcalebmonteiro@gmail.com">Start a conversation ↗</a>
        </div>
        <div className="social-row">
          <a href="https://github.com/calebmonteiro" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/calebmonteiro" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <span>Toledo, Ohio · University of Toledo</span>
        </div>
      </div>
      <aside className="hero-note" aria-label="Portfolio focus">
        <span className="note-index">FIELD NOTES / 01</span>
        <div className="data-mark"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
        <p>Engineering is more than making data move. It’s understanding the people, decisions, and constraints around it.</p>
        <span className="note-caption">A working portfolio · 2026</span>
      </aside>
      <a className="scroll-hint" href="#experience">SCROLL TO EXPLORE <span>↓</span></a>
    </section>
  );
}
