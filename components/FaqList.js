'use client';
import { useState } from 'react';

const FAQ = [
  {
    q: 'Are the models for sale?',
    a: 'Some are. Pieces marked with a price are available — everything else stays in the archive. The whole collection is documented on Facebook.',
  },
  {
    q: 'What scales do you build in?',
    a: 'Most studies sit between 1:35 and 1:200, chosen to suit the subject rather than a fixed house style.',
  },
  {
    q: 'What are the models made of?',
    a: 'Basswood, card, coconut timber, coral, resin and plaster. Each material is picked to read honestly at its scale.',
  },
  {
    q: 'Do you take commissions?',
    a: 'Occasionally. If you have an island, a building or a boat in mind, start a conversation on Facebook.',
  },
  {
    q: 'Where are you based?',
    a: 'Malé, Maldives — building among the islands the work is about.',
  },
];

export default function FaqList() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {FAQ.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q} className={`faq-item${isOpen ? ' open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : idx)} aria-expanded={isOpen}>
              <span>{item.q}</span>
              <span className="faq-ic" aria-hidden="true">+</span>
            </button>
            <div className="faq-a">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
