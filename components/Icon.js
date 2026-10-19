export default function Icon({ name, size = 15 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (name === 'facebook') {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.5c0-.8.2-1.3 1.3-1.3h1.5V5.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.7v2H8.2V14h2.3v7h3z" />
      </svg>
    );
  }
  if (name === 'instagram') {
    return (
      <svg {...common}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === 'tiktok') {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M16.5 3c.3 2 1.5 3.4 3.5 3.7v2.5c-1.3.1-2.5-.2-3.5-.9v5.6c0 3-2.4 5.5-5.5 5.5S5.5 17 5.5 13.9c0-3 2.2-5.4 5.2-5.5v2.6c-1.5.1-2.6 1.3-2.6 2.9 0 1.6 1.3 3 2.9 3s2.9-1.4 2.9-3V3h2.6z" />
      </svg>
    );
  }
  return null;
}
