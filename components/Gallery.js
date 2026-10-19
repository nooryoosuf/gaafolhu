'use client';
import { useCallback, useEffect, useState } from 'react';

export default function Gallery({ images, title }) {
  const [open, setOpen] = useState(null); // index or null

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, step]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <button className="g-main" onClick={() => setOpen(0)} aria-label={`${title} — open fullscreen gallery`}>
        <img src={images[0]} alt={title} />
        <span className="g-zoom-hint">⤢ Click to zoom · {images.length} photos</span>
      </button>
      {images.length > 1 && (
        <div className="g-thumbs">
          {images.slice(1).map((src, i) => (
            <button key={i} onClick={() => setOpen(i + 1)} aria-label={`${title} photo ${i + 2} — open fullscreen`}>
              <img src={src} alt={`${title} detail ${i + 2}`} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {open !== null && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={`${title} gallery`}>
          <button className="lb-bg" onClick={close} aria-label="Close gallery" tabIndex={-1} />
          <div className="lb-top">
            <span className="lb-count">{open + 1} / {images.length}</span>
            <button className="lb-x" onClick={close} aria-label="Close (Esc)">✕</button>
          </div>
          <button className="lb-arrow lb-prev" onClick={() => step(-1)} aria-label="Previous photo">←</button>
          <img className="lb-img" src={images[open]} alt={`${title} — photo ${open + 1}`} />
          <button className="lb-arrow lb-next" onClick={() => step(1)} aria-label="Next photo">→</button>
          <div className="lb-strip">
            {images.map((src, i) => (
              <button key={i} className={i === open ? 'on' : ''} onClick={() => setOpen(i)} aria-label={`Go to photo ${i + 1}`}>
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
