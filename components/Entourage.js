export function Tree({ className = '' }) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="60" cy="52" r="34" strokeDasharray="5 4" />
      <circle cx="60" cy="52" r="22" />
      <path d="M60 86 V150 M60 110 L38 128 M60 118 L82 136 M60 96 L48 106 M60 100 L72 110" />
      <path d="M34 150 H86" />
    </svg>
  );
}

export function Figure({ className = '' }) {
  return (
    <svg viewBox="0 0 40 120" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="20" cy="14" r="8" />
      <path d="M20 24 V66 M20 34 L8 48 M20 34 L32 48 M20 66 L12 108 M20 66 L28 108" />
      <path d="M6 114 H34" />
    </svg>
  );
}

export function NorthArrow({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="30" cy="30" r="26" />
      <path d="M30 10 L36 34 L30 30 L24 34 Z" fill="currentColor" stroke="none" opacity="0.7" />
      <text x="30" y="48" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none" fontFamily="monospace">N</text>
    </svg>
  );
}

export function ScaleBar({ className = '' }) {
  return (
    <svg viewBox="0 0 200 28" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 14 H196" />
      <path d="M4 8 V20 M52 8 V20 M100 8 V20 M148 8 V20 M196 8 V20" />
      <path d="M4 20 H52 M100 20 H148" strokeWidth="4" />
      <text x="4" y="28" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">0</text>
      <text x="96" y="28" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">5m</text>
      <text x="188" y="28" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">10m</text>
    </svg>
  );
}
