import React, { useState } from 'react';

const experiences = [
  {
    "id": "cenovus",
    "period": "MAY – AUGUST 2026",
    "org": "Cenovus Energy",
    "role": "Market Operations Data Analyst Intern",
    "place": "Columbus, Ohio",
    "context": "Sales, forecasts, and margins lived across separate tools. Commercial teams needed one place to see what was changing and act on it.",
    "work": "I built a Databricks platform joining 150K+ transactions with demand forecasts, migrated and backtested netback calculations, and analyzed customer lifting patterns. A time-series study across 200+ days revealed an 11-day pricing lag that helped inform contract discussions.",
    "learned": "The netbacks dataset ended up supporting several of my projects. That stuck with me: investing in a reliable foundation makes the next problem easier. I also learned to ask, “What decision will someone make with this?” before building another dashboard.",
    "tags": [
      "Databricks",
      "SQL",
      "Time-series analysis",
      "Data modeling",
      "Git"
    ],
    "metric": "150K+",
    "metricNote": "transactions joined with demand forecasts"
  },
  {
    "id": "solar-data",
    "period": "JUNE – DECEMBER 2025",
    "org": "First Solar",
    "role": "Manufacturing Data Engineering Intern",
    "place": "Perrysburg, Ohio",
    "context": "Engineers were digging through old documents to troubleshoot familiar problems. On the floor, teams needed simpler inspections and earlier equipment alerts.",
    "work": "I turned hundreds of technical documents into an AI knowledge base in Palantir AIP / Foundry, cutting engineering troubleshooting time by 82%. I also built automated alerts that reduced operator wait time by 8%, and delivered 10+ apps and dashboards for global 5S inspections.",
    "learned": "I started out learning JMP and SQL, then found myself teaching them to engineers. Explaining a workflow to someone else made me think much harder about clarity, reusable scripts, and documentation.",
    "tags": [
      "Palantir AIP / Foundry",
      "SQL",
      "JMP Live",
      "Power Apps",
      "Power BI",
      "Automation"
    ],
    "metric": "82%",
    "metricNote": "less time spent troubleshooting"
  },
  {
    "id": "solar",
    "period": "JANUARY – MAY 2025",
    "org": "First Solar",
    "role": "Module Engineering Intern",
    "place": "Perrysburg, Ohio",
    "context": "Manufacturing teams needed to see equipment problems quickly, with enough context to investigate what was happening.",
    "work": "I built JMP dashboards for tool performance, alarm trends, and throughput, helping reduce downtime by 20%. I also automated shift, yield, and scrap reporting and developed Power Apps for inspections and data entry.",
    "learned": "This was where I started connecting code to the manufacturing floor. A chart became much more useful once I understood the equipment, the process, and the question an operator was trying to answer.",
    "tags": [
      "JMP",
      "SQL",
      "SAS",
      "Power Apps",
      "Manufacturing analytics"
    ],
    "metric": "20%",
    "metricNote": "reduction in downtime"
  },
  {
    "id": "helpdesk",
    "period": "AUGUST 2024 – PRESENT",
    "org": "University of Toledo",
    "role": "IT Help Desk Technician 1",
    "place": "Engineering College Computing Department",
    "context": "When a lab computer or network connection fails, someone’s work stops. My job is to help them get moving again.",
    "work": "I provide Tier-1 support for 300+ engineering users, resolving hardware, software, and network issues and keeping lab resources available.",
    "learned": "Troubleshooting starts with listening. I’ve learned to turn a description like “it’s not working” into a specific problem, then explain the fix without making it more complicated than it needs to be.",
    "tags": [
      "Technical support",
      "Hardware",
      "Software",
      "Network troubleshooting"
    ],
    "metric": "300+",
    "metricNote": "engineering users supported"
  },
  {
    "id": "rocket",
    "period": "JANUARY 2025 – PRESENT",
    "org": "RocketHacks",
    "role": "President",
    "place": "University of Toledo",
    "context": "RocketHacks brings students together to build, collaborate, and explore technology through a nationwide hackathon.",
    "work": "I directed RocketHacks 2025, leading finance, operations, and logistics for more than 200 participants.",
    "learned": "Coordinating an event means keeping track of how one decision affects the next. It gives me practice making responsibilities clear and helping people work toward the same deadline.",
    "tags": [
      "Leadership",
      "Finance",
      "Operations",
      "Logistics"
    ],
    "metric": "200+",
    "metricNote": "participants at RocketHacks 2025"
  }
];

export default function Experience() {
  const [active, setActive] = useState(experiences[0].id);
  const selected = experiences.find((item) => item.id === active);
  return (
    <section className="section-wrap section-block" id="experience">
      <div className="section-heading"><div><p className="eyebrow">01 / EXPERIENCE</p><h2>What the work <em>taught me.</em></h2></div><p className="section-deck">From manufacturing floors to commercial data teams: what I built, why it mattered, and what I learned along the way.</p></div>
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
