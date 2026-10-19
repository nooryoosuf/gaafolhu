'use client';
import { useState } from 'react';
import { getAllModels, getCategories } from '../../lib/models';
import Reveal from '../../components/Reveal';
import Marquee from '../../components/Marquee';

const MATERIALS = [
  'Basswood', 'Coral stone', 'Coconut timber', 'Card', 'Resin',
  'Plaster', 'Foam', 'Acrylic', 'Sand', 'Cadjan thatch',
];

export function WorksPage() {
  const models = getAllModels();
  const cats = getCategories();
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? models : models.filter((m) => m.category === cat);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">The archive</p>
          <h1 className="pd-title">
            Work.
            <span className="page-count">{models.length} studies</span>
          </h1>
        </div>
      </section>

      <section className="section-tight" id="collection">
        <div className="wrap">
          <div className="coll-head">
            <Reveal className="pills">
              {cats.map((c) => (
                <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>
                  {c}
                </button>
              ))}
            </Reveal>
            <span className="page-note">{filtered.length} shown</span>
          </div>

          <div className="cards">
            {filtered.map((item, idx) => (
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
                    {item.price ? <div><span className="k">Price</span><span className="v">{item.price}</span></div> : null}
                  </span>
                  <span className="card-explore">Explore<span className="arw">→</span></span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
}
