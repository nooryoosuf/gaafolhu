import { getAllModels, getModelBySlug } from '../../../lib/models';
import { notFound } from 'next/navigation';
import Gallery from '../../../components/Gallery';
import { SOCIALS } from '../../../lib/site';

export function generateStaticParams() {
  return getAllModels().map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }) {
  const m = getModelBySlug(params.slug);
  if (!m) return { title: 'Not found — Gaafolhu' };
  return {
    title: `${m.title} — Gaafolhu`,
    description: m.description,
  };
}

export default function ModelPage({ params }) {
  const all = getAllModels();
  const idx = all.findIndex((x) => x.slug === params.slug);
  const m = idx >= 0 ? all[idx] : null;
  if (!m) return notFound();

  const prev = all[(idx - 1 + all.length) % all.length];
  const next = all[(idx + 1) % all.length];
  const fb = (SOCIALS.find((s) => s.label === 'Facebook') || SOCIALS[0]).href;
  const images = m.images && m.images.length ? m.images : [m.image];
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <article className="pd">
      <div className="wrap">
        <div className="pd-top">
          <a className="back" href="/">← Index</a>
          <span className="pd-idx">N° {m.id} — {pad(idx + 1)} / {pad(all.length)}</span>
        </div>

        <header className="pd-head">
          <p className="eyebrow">{m.category} · {m.location}</p>
          <h1 className="pd-title">{m.title}</h1>
          <p className="pd-lede">{m.description}</p>
        </header>

        <div className="pd-main">
          <div className="pd-gallery">
            <Gallery images={images} title={m.title} />
          </div>

          <aside className="pd-side">
            <div className="spec">
              <div className="spec-row"><span>Scale</span><span>{m.scale}</span></div>
              <div className="spec-row"><span>Material</span><span>{m.material}</span></div>
              <div className="spec-row"><span>Dimensions</span><span>{m.dimensions}</span></div>
              <div className="spec-row"><span>Year</span><span>{m.year}</span></div>
              <div className="spec-row"><span>Location</span><span>{m.location}</span></div>
              <div className="spec-row"><span>Status</span><span>{m.sold ? 'Sold' : m.price ? 'Available' : 'Archive — not for sale'}</span></div>
              {m.price ? <div className="spec-row"><span>Price</span><span className={m.sold ? 'price-sold' : ''}>{m.price}</span></div> : null}
            </div>

            {m.priceNote ? <p className="pd-note">{m.priceNote}</p> : null}

            <div className="pd-actions">
              <a className="btn btn-primary" href={fb} target="_blank" rel="noreferrer">
                {m.sold ? 'Commission a similar piece ↗' : m.price ? 'Enquire ↗' : 'Ask about this study ↗'}
              </a>
              <a className="btn btn-ghost" href="/works">All work</a>
            </div>
          </aside>
        </div>

        <nav className="pd-nav" aria-label="More models">
          <a className="pd-prev" href={`/models/${prev.slug}`}>
            <span className="k">← Previous</span>
            <span className="t">{prev.title}</span>
          </a>
          <a className="pd-next" href={`/models/${next.slug}`}>
            <span className="k">Next →</span>
            <span className="t">{next.title}</span>
          </a>
        </nav>
      </div>
    </article>
  );
}
