'use client';
import { getAllModels } from '../lib/models';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import Testimonials from '../components/Testimonials';
const STATS = [
  '1:35 — 1:200 scale',
  'Basswood & coral',
  'Hand-built in Malé',
  'Documented since 2022',
  'Island vernacular',
];

const MATERIALS = [
  'Basswood', 'Coral stone', 'Coconut timber', 'Card', 'Resin',
  'Plaster', 'Foam', 'Acrylic', 'Sand', 'Cadjan thatch',
];

export default function Home() {
  const models = getAllModels();

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Miniature studies — Malé, Maldives</p>
          </Reveal>
          <Reveal delay={80} as="h1" className="h-display">
            Small models,
            <br />
            quiet details.
          </Reveal>
          <Reveal delay={170} as="p" className="lede">
            Gaafolhu builds miniature studies of Maldivian vernacular — houses, dhonis,
            coral mosques and island dioramas. Built by hand, drawn to scale, kept as evidence.
          </Reveal>
          <Reveal delay={260} className="hero-cta">
            <a className="btn btn-primary" href="/works">View the works<span className="dot-mark" /></a>
            <a className="btn btn-ghost" href="/about">About the studio</a>
          </Reveal>
        </div>

        <div className="hero-stats">
          <Marquee speed={44} className="marquee-band" label="Studio facts">
            {STATS.map((s) => (
              <span className="marquee-item" key={s}>
                {s}
                <span className="sep">/</span>
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ---------- SELECTED STUDIES ---------- */}
      <section className="section-tight">
        <div className="wrap">
          <div className="coll-head">
            <Reveal>
              <p className="eyebrow">Selected work</p>
              <h2 className="h-section">Four studies.</h2>
            </Reveal>
            <Reveal delay={80} className="hero-cta" style={{ marginTop: 0 }}>
              <a className="btn btn-ghost" href="/works">All works →</a>
            </Reveal>
          </div>

          <div className="cards">
            {models.slice(0, 4).map((item, idx) => (
              <Reveal key={item.slug} as="a" delay={(idx % 2) * 90} className="card" href={`/models/${item.slug}`}>
                <span className="card-img">
                  <span className="card-num">N° {item.id}</span>
                  {item.sold ? <span className="card-sold">Sold</span> : null}
                  <img src={item.image} alt={item.title} loading="lazy" />
                </span>
                <span className="card-body">
                  <span className="t">{item.title}</span>
                  <span className="card-meta">
                    <div><span className="k">Scale</span><span className="v">{item.scale}</span></div>
                    <div><span className="k">Material</span><span className="v">{item.material}</span></div>
                    <div><span className="k">Year</span><span className="v">{item.year}</span></div>
                    <div><span className="k">Price</span><span className="v">{item.price}</span></div>
                  </span>
                  <span className="card-explore">Explore<span className="arw">→</span></span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="section" id="studio">
        <div className="wrap about-grid">
          <div className="about-copy">
            <Reveal as="p" className="eyebrow">Who we are</Reveal>
            <Reveal delay={80} as="p" className="body-lg">
              Most miniature work looks like a toy. Ours is meant to look like evidence —
              a record of how an island is actually put together.
            </Reveal>
            <Reveal delay={160} as="p" className="small">
              Every study starts with a survey — a house measured, a hull traced, a street
              walked — and ends as a model that answers questions about structure, proportion
              and the quiet logic of building on a reef.
            </Reveal>
            <Reveal delay={240} className="hero-cta">
              <a className="btn btn-ghost" href="/about">More about the studio</a>
            </Reveal>
          </div>

          <Reveal className="collage" delay={120}>
            <figure className="c1"><img src="/studio/me.jpg" alt="The maker — holding the Black Pearl" loading="lazy" /></figure>
            <figure className="c2"><img src={models[2].image} alt={models[2].title} loading="lazy" /></figure>
            <figure className="c3"><img src={models[4].image} alt={models[4].title} loading="lazy" /></figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- FILMSTRIP ---------- */}
      <section className="film">
        <div className="film-track" style={{ '--speed': '72s' }}>
          {[...models, ...models].map((it, idx) => (
            <a
              className="film-card"
              key={`${it.slug}-${idx}`}
              href={`/models/${it.slug}`}
              aria-hidden={idx >= models.length}
              tabIndex={idx >= models.length ? -1 : 0}
            >
              <img src={it.image} alt={it.title} loading="lazy" />
              <span className="fc-meta">
                <strong>{it.title}</strong>
                <span>{it.scale}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- ALL WORKS ---------- */}
      <section className="section-tight" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal className="hero-cta" style={{ marginTop: 0 }}>
            <a className="btn btn-ghost" href="/works">All works — {models.length} studies →</a>
          </Reveal>
        </div>
      </section>

      {/* ---------- MATERIALS BAND ---------- */}
      <section className="section-tight">
        <Marquee speed={50} className="marquee-band" label="Materials">
          {MATERIALS.map((m) => (
            <span className="marquee-item" key={m}>
              {m}
              <span className="sep">·</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Testimonials</p>
            <h2 className="h-section">Words from<br />the owners.</h2>
          </Reveal>
          <div style={{ marginTop: 'clamp(28px, 4vw, 48px)' }}>
            <Testimonials />
          </div>
        </div>
      </section>

    </>
  );
}
