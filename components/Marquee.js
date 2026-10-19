export default function Marquee({ children, speed = 42, className = '', label }) {
  return (
    <div
      className={`marquee${className ? ' ' + className : ''}`}
      style={{ '--speed': `${speed}s` }}
      aria-label={label}
    >
      <div className="marquee-track">
        <div className="marquee-seg">{children}</div>
        <div className="marquee-seg" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
