import React, { useState } from 'react';

const links = [
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Toolkit', '#toolkit'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Caleb Monteiro, home">CM<span>.</span></a>
        <button className="menu-toggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <div className={`nav-links ${open ? 'nav-open' : ''}`}>
          {links.map(([label, href], index) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span> {label}</a>)}
          <a className="nav-github" href="https://github.com/calebmonteiro" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </nav>
    </header>
  );
}
