import React, { useState } from 'react';

const groups = [
  { name: 'Data engineering', intro: 'Working with data from extraction through analysis and delivery.', skills: [['Python', 'Project + work'], ['SQL', 'Project + work'], ['PySpark', 'Work'], ['Databricks', 'Work'], ['Palantir Foundry / AIP', 'Work'], ['ETL / ELT', 'Work'], ['PostgreSQL', 'Project'], ['GitLab', 'Work']] },
  { name: 'Analytics & ML', intro: 'Finding patterns, testing ideas, and communicating what data can support.', skills: [['JMP', 'Work'], ['Pandas', 'Project'], ['Machine learning', 'Project'], ['Natural language processing', 'Project'], ['Statistics', 'Coursework'], ['Data visualization', 'Project']] },
  { name: 'Software', intro: 'Building interfaces and services that make data workflows easier to use.', skills: [['React', 'Project'], ['Flask', 'Project'], ['Streamlit', 'Project'], ['REST APIs', 'Project'], ['Java', 'Coursework'], ['C++', 'Coursework'], ['Git', 'Work + project']] },
  { name: 'Systems & people', intro: 'The operational context, debugging, and communication around technical work.', skills: [['Windows / Microsoft 365', 'Work'], ['Active Directory', 'Work'], ['Technical support', 'Work'], ['Team leadership', 'Leadership'], ['Technical documentation', 'Work'], ['Facilitation', 'Leadership']] },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const group = groups[active];
  return (
    <section className="section-wrap section-block toolkit-section" id="toolkit">
      <div className="section-heading"><div><p className="eyebrow">03 / TOOLKIT</p><h2>Tools, with <em>context.</em></h2></div><p className="section-deck">A skill is most useful when it’s tied to where and how I’ve applied it. Select an area to see the context behind the tools.</p></div>
      <div className="skills-panel">
        <div className="skill-tabs" role="tablist" aria-label="Skill categories">{groups.map((item, index) => <button key={item.name} className={active === index ? 'active' : ''} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><span>0{index + 1}</span>{item.name}</button>)}</div>
        <div className="skill-detail" role="tabpanel" key={group.name}><div><p className="eyebrow">{group.name.toUpperCase()}</p><h3>{group.intro}</h3></div><div className="skill-matrix">{group.skills.map(([name, context]) => <div className="skill-cell" key={name}><span className="skill-check">↗</span><strong>{name}</strong><small>{context}</small></div>)}</div></div>
      </div>
      <p className="skill-legend"><span>Work</span> professional experience <i /> <span>Project</span> personal or team project <i /> <span>Coursework</span> academic use</p>
    </section>
  );
}
