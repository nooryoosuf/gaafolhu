'use client';
import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const ITEMS = [
  {
    quote: 'The Kalhuvakaru study sits in my office and people touch it before they greet me. The joinery is that convincing.',
    name: 'Ahmed N.',
    role: 'Private collector — Malé',
  },
  {
    quote: 'He walked our guesthouse twice, measured everything, and the model found details we had stopped seeing. Guests photograph it daily.',
    name: 'Mariyam S.',
    role: 'Guesthouse host — Fulhadhoo',
  },
  {
    quote: 'The dome, the minaret, the stone banding — all read exactly. It is the clearest record of the building I have seen.',
    name: 'Ibrahim R.',
    role: 'Interior stylist — Hulhumalé',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const n = ITEMS.length;

  const go = (d) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    const onMobile = window.matchMedia('(max-width: 960px)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!onMobile || paused || reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);

  const card = (t) => (
    <div className="quote-card">
      <span className="qm" aria-hidden="true">"</span>
      <blockquote className="qt">{t.quote}</blockquote>
      <div className="quote-foot">
        <span className="qn">{t.name}</span>
        <span className="qr">{t.role}</span>
      </div>
    </div>
  );

  return (
    <>
      <div className="testi-grid">
        {ITEMS.map((t, idx) => (
          <Reveal key={t.name} delay={idx * 90} className="quote-card">
            <span className="qm" aria-hidden="true">"</span>
            <blockquote className="qt">{t.quote}</blockquote>
            <div className="quote-foot">
              <span className="qn">{t.name}</span>
              <span className="qr">{t.role}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <div
        className="testi-mobile"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          key={i}
          className="testi-slide"
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          }}
        >
          {card(ITEMS[i])}
        </div>

        <div className="testi-nav">
          <button onClick={() => go(-1)} aria-label="Previous testimonial">←</button>
          <div className="testi-dots" role="tablist" aria-label="Testimonials">
            {ITEMS.map((t, idx) => (
              <button
                key={t.name}
                role="tab"
                aria-selected={idx === i}
                aria-label={`Show testimonial ${idx + 1}`}
                className={idx === i ? 'on' : ''}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next testimonial">→</button>
        </div>
      </div>
    </>
  );
}
