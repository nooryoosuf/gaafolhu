import './globals.css';
import Nav from '../components/Nav';
import Icon from '../components/Icon';
import { SOCIALS, CONTACT } from '../lib/site';

export const metadata = {
  title: 'Gaafolhu — Miniature Studies',
  description:
    'Gaafolhu builds miniature studies of Maldivian vernacular — houses, dhonis, coral mosques and island dioramas. Built by hand, drawn to scale.'
};

const themeInit = `(function(){try{var s=localStorage.getItem('gaafolhu-theme');var t=s||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <div className="ambient" aria-hidden="true">
          <span className="g1" />
          <span className="g2" />
        </div>

        <header className="topbar">
          <div className="topbar-in">
            <a href="/" className="brand">GAAFOLHU<span className="sup">®</span></a>
            <Nav />
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer" id="contact">
          <div className="wrap">
            <div className="foot-grid">
              <div className="col">
                <p className="brand">GAAFOLHU<span className="sup">®</span></p>
                <p className="small">
                  Miniature studies of Maldivian vernacular. Houses, boats, mosques
                  and islands — measured, built and kept as evidence.
                </p>
              </div>
              <div className="col">
                <p className="label">Explore</p>
                <a href="/works">Collection</a>
                <a href="/about">About</a>
                <a href="/#contact">Contact</a>
              </div>
              <div className="col">
                <p className="label">Studio</p>
                <a href="/works">Materials</a>
                <a href={CONTACT} target="_blank" rel="noreferrer">Commission</a>
                <a href="/#contact">Enquiries</a>
              </div>
              <div className="col">
                <p className="label">Follow</p>
                <div className="socials">
                  {SOCIALS.map((s) => (
                    <a className="social" key={s.label} href={s.href} target="_blank" rel="noreferrer">
                      <span className="ic"><Icon name={s.icon} /></span>
                      <span className="s-label">{s.label}</span>
                      <span className="s-handle">{s.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <p className="foot-word" aria-hidden="true">GAAFOLHU</p>

            <div className="colophon">
              <span>© 2026 Gaafolhu</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
