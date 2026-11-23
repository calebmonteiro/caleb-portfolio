import React, { useState } from 'react';

const experiences = [
  {
    id: 'cenovus', period: 'SUMMER 2026', org: 'Cenovus Energy', role: 'Market Operations Data Analyst Intern', place: 'Columbus, Ohio',
    context: 'Market operations depends on information that is timely, traceable, and understandable. I joined a team working where data engineering meets operational decision-making.',
    work: 'My toolkit included Databricks, PySpark, Palantir Foundry / AIP, SQL Server Management Studio, JMP, and GitLab. The role gave me exposure to ETL and ELT workflows and to how data products fit into real operational processes.',
    learned: 'I learned to think beyond a successful query: where the data came from, how it changes, who depends on it, and what makes a result useful to someone outside the engineering team.',
    tags: ['Databricks', 'PySpark', 'Palantir Foundry', 'SQL', 'GitLab'],
    metric: 'Data workflows', metricNote: 'ETL / ELT in a market operations setting'
  },
  {
    id: 'solar', period: 'SPRING 2025', org: 'First Solar', role: 'Module Engineering Intern', place: 'Perrysburg, Ohio',
    context: 'Manufacturing teams work with large volumes of production information. My internship focused on reducing friction between production data, engineering analysis, and the people using that information day to day.',
    work: 'I used JMP scripts for data mining, built documentation in PGT1, and worked on Excel tracking for production volumes of 10,000+ modules per day. I also explored practical ways to make information easier for operators and engineers to use.',
    learned: 'The experience taught me that analysis only matters when its assumptions are clear and its output fits the workflow. I became more attentive to documentation, validation, and the difference between a useful tool and an impressive demo.',
    tags: ['JMP', 'Excel', 'Data mining', 'Process documentation'],
    metric: '10,000+', metricNote: 'modules represented in daily tracking workflows'
  },
  {
    id: 'rocket', period: '2026', org: 'RocketHacks', role: 'President · previously Director', place: 'University of Toledo',
    context: 'I help lead a student team creating more technology opportunities in Toledo and the Midwest. RocketHacks grew from a first large-scale campus hackathon into a community effort spanning students, sponsors, university partners, and volunteers.',
    work: 'As Director, I helped organize RocketHacks 2025, which brought 200+ participants to Savage Arena. As President, I work with an organizer team of around 40 students on planning, partnerships, event design, and the systems that help volunteers coordinate.',
    learned: 'Leading a technical event is a systems problem: the attendee experience depends on hundreds of small handoffs. I learned to make ownership explicit, communicate decisions earlier, and treat feedback as input for the next iteration.',
    tags: ['Team leadership', 'Operations', 'Partnerships', 'Community'],
    metric: '200+', metricNote: 'participants at RocketHacks 2025'
  },
  {
    id: 'helpdesk', period: '2024–2025', org: 'University of Toledo', role: 'Engineering College IT Help Desk Technician', place: 'Toledo, Ohio',
    context: 'I supported the computing environment used by students, faculty, and staff in the College of Engineering. The work ranged from account access to classroom and desktop issues.',
    work: 'I supported 30+ desktop deployments and helped manage more than 100 Active Directory and Microsoft 365 accounts, alongside day-to-day troubleshooting and ticket resolution.',
    learned: 'Support work strengthened my diagnostic habits. I learned to ask better questions, isolate variables, explain technical steps clearly, and document fixes so the next person can move faster.',
    tags: ['Windows', 'Active Directory', 'Microsoft 365', 'Troubleshooting'],
    metric: '30+', metricNote: 'desktop deployments supported'
  },
  {
    id: 'orientation', period: 'SUMMER 2024', org: 'University of Toledo', role: 'Orientation Leader', place: 'Toledo, Ohio',
    context: 'The first days on campus can shape how students see their place in a university. I helped incoming students navigate the transition and find the people and resources they needed.',
    work: 'I led orientation activities for 200+ students and collaborated with a group of peer leaders to answer questions, share campus resources, and keep sessions moving.',
    learned: 'I became more comfortable speaking to groups and learned to meet people where they are. Clear explanations and small moments of reassurance can make a complicated system feel navigable.',
    tags: ['Facilitation', 'Communication', 'Peer leadership'],
    metric: '200+', metricNote: 'students welcomed through orientation'
  },
];

export default function Experience() {
  const [active, setActive] = useState(experiences[0].id);
  const selected = experiences.find((item) => item.id === active);
  return (
    <section className="section-wrap section-block" id="experience">
      <div className="section-heading"><div><p className="eyebrow">01 / EXPERIENCE</p><h2>What the work <em>taught me.</em></h2></div><p className="section-deck">Roles are more than titles. Here’s the problem context, the work I touched, and the lessons I carry forward.</p></div>
      <div className="experience-layout">
        <div className="experience-list" role="tablist" aria-label="Experience">
          {experiences.map((item) => <button key={item.id} role="tab" aria-selected={active === item.id} className={`experience-tab ${active === item.id ? 'active' : ''}`} onClick={() => setActive(item.id)}><span className="tab-period">{item.period}</span><span className="tab-org">{item.org}</span><span className="tab-role">{item.role}</span><span className="tab-arrow">↗</span></button>)}
        </div>
        <article className="experience-detail" role="tabpanel" key={selected.id}>
          <div className="detail-top"><div><p className="eyebrow">{selected.period} · {selected.place}</p><h3>{selected.role}</h3><p className="detail-org">{selected.org}</p></div><div className="detail-stat"><strong>{selected.metric}</strong><span>{selected.metricNote}</span></div></div>
          <div className="story-grid">
            <div><span className="story-label">THE CONTEXT</span><p>{selected.context}</p></div>
            <div><span className="story-label">WHAT I DID</span><p>{selected.work}</p></div>
            <div className="learning-note"><span className="story-label">WHAT I LEARNED</span><p>{selected.learned}</p></div>
          </div>
          <ul className="tag-list">{selected.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </article>
      </div>
    </section>
  );
}
