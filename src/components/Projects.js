import React, { useMemo, useState } from 'react';

const projects = [
  {
    "title": "Real-Time Truck Fuel Arbitrage",
    "type": "Data visualization",
    "label": "Commercial analytics",
    "problem": "A low terminal rack price does not guarantee a profitable delivery route once freight costs are included.",
    "approach": "Built a Streamlit tool on Databricks Apps that compares OPIS rack prices with transport tariffs across buy/sell city pairs. Added a historical audit to compare apparent opportunities with realized margins.",
    "stack": [
      "Streamlit",
      "Databricks Apps",
      "SQL",
      "OPIS pricing"
    ],
    "scale": "60+ terminal cities · 151K+ transactions in the historical audit",
    "outcome": "Identifies lowest-cost supply locations and lets users inspect route volume, total margin, and 90-day margin trends.",
    "symbol": "01"
  },
  {
    "title": "Commercial Sales & Forecast Platform",
    "type": "Data engineering",
    "label": "Cenovus Energy",
    "problem": "Commercial teams needed to see when actual customer lifting diverged from demand forecasts and signed allocations.",
    "approach": "Joined accounting transactions, monthly forecasts, and deal terms in a seven-page Databricks dashboard, refreshed through scheduled data pipelines.",
    "stack": [
      "Databricks",
      "SQL",
      "Data modeling",
      "Scheduled pipelines"
    ],
    "scale": "150K+ transactions · sales actuals, forecasts, and contract terms",
    "outcome": "Provided volume-drift inputs for refinery planning, crude acquisition, and proactive commercial contract discussions.",
    "symbol": "02"
  },
  {
    "title": "Manufacturing AI Knowledge Base",
    "type": "Machine learning",
    "label": "First Solar",
    "problem": "Useful corrective actions were buried in hundreds of technical documents, making historical troubleshooting knowledge difficult to retrieve.",
    "approach": "Built an end-to-end Palantir AIP / Foundry workflow to ingest documents, structure their contents, model entities in an ontology, and expose the knowledge through a chat interface.",
    "stack": [
      "Palantir AIP",
      "Foundry",
      "Data ontology",
      "Document ingestion"
    ],
    "scale": "Hundreds of unstructured technical documents",
    "outcome": "Reduced engineering troubleshooting time by 82%.",
    "symbol": "03"
  },
  {
    "title": "Honda Civic Telematics & Predictive Maintenance",
    "type": "Data engineering",
    "label": "Personal project",
    "problem": "Vehicle sensor streams need to be organized into useful health trends before they can support efficiency analysis and maintenance decisions.",
    "approach": "Designed an end-to-end IoT telematics pipeline that processes high-frequency OBD-II sensor streams and models vehicle health trends.",
    "stack": [
      "IoT",
      "OBD-II",
      "Time-series analysis",
      "Predictive modeling"
    ],
    "scale": "My Honda Civic · high-frequency OBD-II sensor streams",
    "outcome": "A pipeline designed to track real-time driving efficiency and model component wear.",
    "symbol": "04"
  },
  {
    "title": "AI Voice Assistant on Pi0",
    "type": "Data apps",
    "label": "Low-power voice interface",
    "problem": "An always-on voice assistant needs to handle audio input and spoken responses on low-power hardware.",
    "approach": "Integrated USB audio peripherals with Python scripts for real-time speech-to-text and text-to-speech, using the Gemini API for conversational interaction.",
    "stack": [
      "Python",
      "Raspberry Pi Zero",
      "Gemini API",
      "Speech-to-text",
      "Text-to-speech"
    ],
    "scale": "Low-power Pi0 device · USB audio input and output",
    "outcome": "Achieved conversational response latency below one second.",
    "symbol": "05"
  },
  {
    "title": "EcoNet.ai",
    "type": "Data visualization",
    "label": "Renewable energy accessibility",
    "problem": "Renewable energy planning needs a clear view of regional grid availability to identify deployment opportunities.",
    "approach": "Modeled regional grid availability data within an interactive visualization platform to support clean energy deployment strategies.",
    "stack": [
      "Data modeling",
      "Interactive visualization",
      "Grid availability analysis"
    ],
    "scale": "Regional grid availability data",
    "outcome": "Presented grid availability in a form that supports renewable energy accessibility and deployment planning.",
    "symbol": "06"
  }
];
const filters = ['All work', 'Data engineering', 'Machine learning', 'Data visualization', 'Data apps'];

export default function Projects() {
  const [filter, setFilter] = useState('All work');
  const shown = useMemo(() => filter === 'All work' ? projects : projects.filter((project) => project.type === filter), [filter]);
  return (
    <section className="section-wrap section-block projects-section" id="projects">
      <div className="section-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Questions I’ve <em>worked on.</em></h2></div><p className="section-deck">Projects across commercial analytics, manufacturing data systems, and personal engineering. A closer look at the problems I tackled and the systems I built.</p></div>
      <div className="filter-row" role="group" aria-label="Filter projects">{filters.map((option) => <button key={option} className={filter === option ? 'filter-active' : ''} onClick={() => setFilter(option)}>{option}<span>{option === 'All work' ? projects.length : projects.filter((p) => p.type === option).length}</span></button>)}</div>
      <div className="project-grid">{shown.map((project) => <article className="project-card" key={project.title}>
        <div className="project-visual">{project.image ? <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={`${project.title} project`} /> : <div className="project-art"><span className="art-grid" /><span className="art-number">{project.symbol}</span><span className="art-label">{project.label}</span></div>}<span className="project-type">{project.type}</span></div>
        <div className="project-content"><div className="project-title-row"><h3>{project.title}</h3><span className="project-symbol">↗</span></div><p className="project-problem"><b>THE QUESTION</b>{project.problem}</p><p className="project-approach"><b>THE APPROACH</b>{project.approach}</p><div className="project-facts"><div><span>SCOPE</span><p>{project.scale}</p></div><div><span>DELIVERABLE / OUTCOME</span><p>{project.outcome}</p></div></div><ul className="tag-list">{project.stack.map((tag) => <li key={tag}>{tag}</li>)}</ul><div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer">Source ↗</a>}{project.external && <a href={project.external} target="_blank" rel="noreferrer">Project page ↗</a>}</div></div>
      </article>)}</div>
    </section>
  );
}
