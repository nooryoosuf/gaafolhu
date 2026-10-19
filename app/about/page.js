import { getAllModels } from '../../lib/models';
import Reveal from '../../components/Reveal';
import FaqList from '../../components/FaqList';
import { CONTACT } from '../../lib/site';

export const metadata = {
  title: 'About — Gaafolhu',
  description: 'Gaafolhu is a miniature studio in Malé building studies of Maldivian vernacular — houses, dhonis, coral mosques and island dioramas.'
};

export default function AboutPage() {
  const models = getAllModels();

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">Who we are</p>
          <h1 className="pd-title">About.</h1>
          <p className="pd-lede">
            A miniature studio in Malé. Most model-making looks like toys —
            ours is meant to look like evidence.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap about-grid">
          <div className="about-copy">
            <Reveal as="p" className="body-lg">
              Every study starts with a survey: a house measured, a hull traced, a street
              walked. What comes back is a model that answers questions — about structure,
              proportion and the quiet logic of building on a reef.
            </Reveal>
            <Reveal delay={80} as="p" className="small">
              The subjects are chosen from the islands themselves: the coral-stone mosques
              that predate every modern building, the timber houses of the old wards, the
              working boats, and the atolls read as one system of reef, lagoon and settlement.
            </Reveal>
            <Reveal delay={140} as="p" className="small">
              Everything is measured, cut and finished by hand, and documented as it goes on
              Facebook. Priced pieces are available; the rest stays in the archive.
            </Reveal>
          </div>

          <Reveal className="collage" delay={120}>
            <figure className="c1"><img src="/studio/me.jpg" alt="The maker — holding the Black Pearl" loading="lazy" /></figure>
            <figure className="c2"><img src={models[2].image} alt={models[2].title} loading="lazy" /></figure>
            <figure className="c3"><img src={models[4].image} alt={models[4].title} loading="lazy" /></figure>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-grid">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="h-section">Questions,<br />answered plainly.</h2>
            <p className="small" style={{ marginTop: 22 }}>
              Anything else — <a href={CONTACT} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>message us on Facebook ↗</a>
            </p>
          </Reveal>
          <Reveal delay={100}>
            <FaqList />
          </Reveal>
        </div>
      </section>
    </>
  );
}
