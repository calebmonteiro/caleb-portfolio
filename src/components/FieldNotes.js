import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const notes = [
  {
    title: 'Build a foundation you can reuse.',
    from: 'CENOVUS · DATA ENGINEERING',
    text: 'Moving the netbacks calculations into Databricks gave several projects a shared starting point. Backtesting against accounting records was part of the work—not something to leave until the end.',
    takeaway: 'A reliable dataset can be the most useful thing you build.',
    sketch: 'foundation',
  },
  {
    title: 'The timing can change the answer.',
    from: 'CENOVUS · MARKET ANALYTICS',
    text: 'Comparing market movements with same-day margins showed almost no relationship. Looking across time revealed an 11-day lag. I had to understand how pricing moved through the business to make sense of the numbers.',
    takeaway: 'Before trusting a result, understand the process behind it.',
    sketch: 'timing',
  },
  {
    title: 'Make it easy to use without you.',
    from: 'FIRST SOLAR · ENABLEMENT',
    text: 'I moved manual scripts into browser-based JMP Live reports and led JMP and SQL training. Building the tool was only part of the job. Helping people use it confidently mattered just as much.',
    takeaway: 'Documentation and teaching are part of the deliverable.',
    sketch: 'handoff',
  },
];

function Sketch({ type }) {
  return (
    <svg className="note-sketch" viewBox="0 0 240 100" aria-hidden="true" focusable="false">
      {type === 'foundation' ? <>
        <path d="M30 80H210M120 80V42M45 42H195M45 42V25M195 42V25" />
        <rect x="25" y="8" width="40" height="18" rx="3" /><rect x="100" y="8" width="40" height="18" rx="3" /><rect x="175" y="8" width="40" height="18" rx="3" />
        <path d="M120 26V42" /><rect className="sketch-fill" x="80" y="65" width="80" height="25" rx="3" />
      </> : type === 'timing' ? <>
        <path className="sketch-muted" d="M10 82H230M10 12V82" />
        <path d="M15 67C45 67 45 20 70 20S100 67 125 67S160 20 185 20" />
        <path className="sketch-delayed" d="M50 77C80 77 80 30 105 30S135 77 160 77S195 30 220 30" />
      </> : <>
        <rect x="12" y="22" width="62" height="50" rx="4" /><path d="M24 36H60M24 46H54M24 56H46M84 47H151M141 37L151 47L141 57" />
        <rect x="163" y="16" width="65" height="60" rx="4" /><path d="M163 29H228M176 43H215M176 53H205M176 63H210" />
      </>}
    </svg>
  );
}

export default function FieldNotes() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const note = notes[active];
  return (
    <section className="section-wrap field-notes" id="field-notes" aria-labelledby="notes-title">
      <div className="notes-heading">
        <p className="eyebrow">FIELD NOTES / FROM THE CO-OPS</p>
        <h2 id="notes-title">A few things that <em>stayed with me.</em></h2>
        <p>The tools changed between roles. These lessons came with me.</p>
        <div className="note-selectors" role="group" aria-label="Choose a field note">
          {notes.map((item, index) => <button key={item.title} aria-pressed={active === index} aria-label={`Field note ${index + 2}: ${item.title}`} onClick={() => setActive(index)}>0{index + 2}</button>)}
        </div>
      </div>
      <motion.article className="field-note-card" key={note.title}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }} aria-live="polite">
        <div className="field-note-top"><span className="note-index">NOTE / 0{active + 2}</span><span className="note-caption">{note.from}</span></div>
        <Sketch type={note.sketch} />
        <h3>{note.title}</h3>
        <p>{note.text}</p>
        <div className="note-takeaway"><span>TAKING THIS FORWARD</span><p>{note.takeaway}</p></div>
      </motion.article>
    </section>
  );
}
