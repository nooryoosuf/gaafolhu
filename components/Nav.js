'use client';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <a className="link" href="/works">Work</a>
        <a className="link" href="/about">About</a>
        <ThemeToggle />
        <button
          className={`menu-btn${open ? ' on' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <a href="/works" onClick={() => setOpen(false)}>Work <span className="mm-n">→</span></a>
        <a href="/about" onClick={() => setOpen(false)}>About <span className="mm-n">→</span></a>
        <a href="/#contact" onClick={() => setOpen(false)}>Contact <span className="mm-n">→</span></a>
      </div>
    </>
  );
}
