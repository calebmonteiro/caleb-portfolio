import React, { useState } from 'react';

const groups = [
  {
    "name": "Data engineering",
    "intro": "Connecting source data to reliable analysis and operational tools.",
    "skills": [
      [
        "Python",
        "Resume"
      ],
      [
        "SQL",
        "Work"
      ],
      [
        "PySpark",
        "Resume"
      ],
      [
        "Databricks",
        "Work"
      ],
      [
        "Palantir AIP / Foundry",
        "Work"
      ],
      [
        "ETL / ELT",
        "Resume"
      ],
      [
        "SSMS",
        "Resume"
      ],
      [
        "GitLab",
        "Resume"
      ]
    ]
  },
  {
    "name": "Analytics & ML",
    "intro": "Using statistical and time-series analysis to understand operational decisions.",
    "skills": [
      [
        "JMP",
        "Work"
      ],
      [
        "Statistical analysis",
        "Resume"
      ],
      [
        "Predictive modeling",
        "Project"
      ],
      [
        "Time-series analysis",
        "Work + project"
      ],
      [
        "Power BI",
        "Work"
      ],
      [
        "Data modeling",
        "Work"
      ]
    ]
  },
  {
    "name": "Software",
    "intro": "Building usable interfaces and automation around data workflows.",
    "skills": [
      [
        "React",
        "Resume"
      ],
      [
        "Flask",
        "Resume"
      ],
      [
        "Streamlit",
        "Work"
      ],
      [
        "REST APIs",
        "Resume"
      ],
      [
        "Java",
        "Resume"
      ],
      [
        "C++",
        "Resume"
      ],
      [
        "Power Apps",
        "Work"
      ],
      [
        "Power Automate",
        "Work"
      ]
    ]
  },
  {
    "name": "Systems & people",
    "intro": "Supporting users, explaining tools, and coordinating delivery.",
    "skills": [
      [
        "Technical support",
        "Work"
      ],
      [
        "Troubleshooting",
        "Work"
      ],
      [
        "JMP / SQL training",
        "Work"
      ],
      [
        "Team leadership",
        "Leadership"
      ],
      [
        "Technical documentation",
        "Work"
      ],
      [
        "Event operations",
        "Leadership"
      ]
    ]
  }
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
      <p className="skill-legend"><span>Work</span> professional experience <i /> <span>Project</span> personal or team project <i /> <span>Resume</span> listed skill; application context not specified</p>
    </section>
  );
}
