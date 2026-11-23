import React, { useState } from 'react';

const experiences = [
  {
    "id": "cenovus",
    "period": "MAY – AUGUST 2026",
    "org": "Cenovus Energy",
    "role": "Market Operations Data Analyst Intern",
    "place": "Columbus, Ohio",
    "context": "Commercial teams needed a shared view of sales, demand forecasts, inventory, and realized margins. Information spread across separate tools made it harder to spot volume drift and understand how market movements reached contract pricing.",
    "work": "I deployed a Databricks commercial platform joining 150K+ transactions with demand forecasts. I migrated netback calculations from a local environment into Databricks and backtested the logic against historical accounting transactions. I also linked customer lifting timestamps with daily netback margins and analyzed 200+ days of market data, identifying an 11-day pricing transmission lag to inform contract renegotiations.",
    "learned": "Rebuilding the netbacks dataset became the foundation for several commercial tools. The work taught me to validate calculations against historical records, account for timing differences in time-series analysis, and explain what a finding means for a commercial decision. Documentation and usable interfaces were essential to making the data accessible.",
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
    "context": "Engineers needed faster access to past troubleshooting knowledge, while manufacturing teams needed consistent inspections and timely visibility into equipment performance.",
    "work": "I built an AI knowledge base in Palantir AIP / Foundry, transforming hundreds of technical documents into a structured ontology and chat interface. My resume reports an 82% reduction in engineering troubleshooting time. I also integrated database-driven alerts with cloud messaging, reducing operator wait time by 8%, and rolled out 10+ apps and dashboards for global 5S inspections.",
    "learned": "This role took me from writing individual scripts to connecting data sources, models, and interfaces into complete workflows. I gained experience collaborating with DBAs and engineers, moving reports into JMP Live, and teaching JMP and SQL. Reusable queries, clear documentation, and training helped other people work independently with the tools.",
    "tags": [
      "Palantir AIP / Foundry",
      "SQL",
      "JMP Live",
      "Power Apps",
      "Power BI",
      "Automation"
    ],
    "metric": "82%",
    "metricNote": "reduction in troubleshooting time, as reported in my resume"
  },
  {
    "id": "solar",
    "period": "JANUARY – MAY 2025",
    "org": "First Solar",
    "role": "Module Engineering Intern",
    "place": "Perrysburg, Ohio",
    "context": "Manufacturing teams needed a clearer view of equipment performance, alarms, and throughput so they could investigate problems and respond on the floor.",
    "work": "I built interactive JMP dashboards for tool performance, alarm trends, and throughput monitoring, contributing to a reported 20% reduction in downtime. My work also included JMP scripts for shift performance, yield, and scrap analysis, along with Power Apps for inspections and improved data entry.",
    "learned": "I developed skills in JMP, SQL, and SAS while learning how investigation and collaboration shape manufacturing solutions. Working across inspections, reporting, and fault analysis helped me connect the data on a dashboard to the process it represents.",
    "tags": [
      "JMP",
      "SQL",
      "SAS",
      "Power Apps",
      "Manufacturing analytics"
    ],
    "metric": "20%",
    "metricNote": "reported reduction in downtime"
  },
  {
    "id": "helpdesk",
    "period": "AUGUST 2024 – PRESENT",
    "org": "University of Toledo",
    "role": "IT Help Desk Technician 1",
    "place": "Engineering College Computing Department",
    "context": "Engineering students and staff rely on working labs and computing resources for daily academic work. Technical issues can interrupt that work across hardware, software, and network access.",
    "work": "I provide Tier-1 technical support for 300+ engineering users, resolving hardware, software, and network issues. The role centers on maintaining lab availability and helping users get back to their work.",
    "learned": "This work gives me practical experience diagnosing problems across several layers of a computing environment. It also requires translating a user’s description of an issue into clear troubleshooting steps and an understandable resolution.",
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
    "work": "I directed RocketHacks 2025, leading finance, operations, and logistics for an event with more than 200 participants. The role combines event planning with the practical coordination needed to deliver the participant experience.",
    "learned": "Leading finance, operations, and logistics gives me a broader view of how decisions depend on each other. It is an opportunity to practice planning, communicating responsibilities, and coordinating work toward a shared deadline.",
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
