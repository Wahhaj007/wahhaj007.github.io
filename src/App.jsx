import React, { useEffect, useMemo, useState } from "react";
import { Mail, Phone, Github, Linkedin, Download, Moon, Sun, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const DATA = {
  name: "Wahhaj Malik",
  title: "Software Engineer — Backend • Data • APIs",
  location: "San Francisco Bay Area",
  phone: "(209) 362-9233",
  email: "wahhaj.malik@gmail.com",
  links: {
    github: "https://github.com/wahhaj007",
    linkedin: "https://linkedin.com/in/wahhajmalik",
    resume: "/WahhajMalik_resume.pdf",
  },
  summary:
    "Engineer focused on reliable backends, data pipelines, and clean APIs. I enjoy building systems that scale, instrument well, and are pleasant for other engineers to work with.",
  skills: {
    Languages: ["Java (3 yrs)", "Python (5 yrs)", "C/C++ (5 yrs)", "JavaScript (2 yrs)", "SQL", "Bash", "GraphQL", "HTML/CSS"],
    "Back-End": ["Spring Boot", "Node.js", "Express", "Django", "Apollo Federation", "Maven"],
    "Front-End": ["React", "HTML", "CSS"],
    Data: ["Kafka", "Elasticsearch", "Cosmos DB", "MongoDB", "Prometheus"],
    "Data Science": ["NumPy", "Pandas", "Scikit-learn"],
    DevOps: ["Git", "GitHub Actions", "Kubernetes", "Docker", "Jenkins", "Terraform", "Concord", "Cron"],
    Tools: ["AWS", "CLI", "Splunk", "Kibana", "Grafana", "Figma", "Postman", "Linux"],
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Walmart Global Tech",
      location: "Sunnyvale, CA",
      period: "May 2024 – Present",
      bullets: [
        "Designed and implemented a Spring Boot certificate‑management service backed by Cosmos DB, caching CNs and expiry dates for thousands of certs and automating renewals—eliminating 100% of manual work.",
        "Modernized the Remote Fuel Manager UI in React, introducing Redux state management and live price widgets for real‑time visibility into dispenser status.",
        "Instrumented a GCP BigQuery pipeline streaming dispenser heartbeat/error logs to a REST‑backed dashboard to surface anomalies like UI freezes.",
        "Created a TypeScript GraphQL subgraph exposing real‑time fuel prices and station‑hours data, engineered for >1,000 TPS.",
        "Replaced legacy SFTP workflows with a Spring Boot REST client against a supplier pricing API, decommissioning an on‑prem server and cutting infra cost by ~20%.",
      ],
    },
    {
      role: "Software Engineer",
      company: "MHMA",
      location: "Tracy, CA",
      period: "Jul 2021 – Jun 2022",
      bullets: [
        "Developed a React/Node web app for user registration and payments, with secure transactional endpoints on MongoDB.",
        "Integrated PayPal and Stripe with adherence to payment standards.",
        "Worked in Agile with JIRA, adding unit/integration tests to maintain quality.",
      ],
    },
  ],
  projects: [
    {
      name: "SEC Filings Analytics Platform",
      stack: ["Spring Boot", "Java", "Jackson", "REST", "SEC‑API", "OpenAI", "Docker"],
      detail: [
        "Aggregates and normalizes insider‑trading (Form 4) and institutional (13F) filings into a unified JSON API for compliance queries.",
        "Processes daily filing batches (flatten, validate, compute time‑series) to power real‑time dashboards (e.g., monthly sell volumes, top traders).",
        "Adds an LLM‑powered insights endpoint for natural‑language trend analysis by sector and entity.",
        "Containerized with Docker Compose alongside PostgreSQL for standardized local dev.",
      ],
      href: undefined,
    },
    {
      name: "EmergenSee — Cooperative Perception for Emergency Vehicles",
      stack: ["YOLOv5", "Python", "V2V Simulation"],
      detail: [
        "Trained and integrated a YOLOv5 model (1,000 image dataset) to ~85% detection accuracy.",
        "Designed cooperative perception algorithms for V2V communications prioritizing emergency vehicles in a simulated traffic environment.",
      ],
      href: undefined,
    },
  ],
  education: {
    school: "University of California, Davis",
    degree: "B.S. Electrical and Computer Engineering",
    when: "Mar 2024",
    where: "Davis, CA",
  },
};

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35 }}
      className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs leading-5 dark:border-neutral-700">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border p-5 sm:p-6 shadow-sm dark:border-neutral-800 ${className}`}>{children}</div>
);

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const variants = useMemo(() => ({ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }), []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b dark:border-neutral-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            <a href="#top" className="font-semibold">{DATA.name}</a>
            <nav className="hidden md:flex gap-6 text-sm">
              {[
                ["About", "about"],
                ["Experience", "experience"],
                ["Projects", "projects"],
                ["Skills", "skills"],
                ["Education", "education"],
                ["Contact", "contact"],
              ].map(([label, hash]) => (
                <a key={hash} href={`#${hash}`} className="hover:opacity-70">{label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href={DATA.links.resume}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-black hover:text-white dark:border-neutral-800 dark:hover:bg-white dark:hover:text-black"
              >
                <Download size={16} /> Resume
              </a>
              <button
                aria-label="Toggle theme"
                onClick={() => setDark((v) => !v)}
                className="inline-flex items-center justify-center rounded-xl border p-2 hover:bg-black hover:text-white dark:border-neutral-800 dark:hover:bg-white dark:hover:text-black"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <a id="top" />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <section id="about" className="scroll-mt-24 py-14">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight"
              >
                {DATA.name}
              </motion.h1>
              <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">{DATA.title}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-neutral-700 dark:text-neutral-300">{DATA.summary}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-1"><MapPin size={16} /> {DATA.location}</span>
                <a href={`tel:${DATA.phone.replace(/[^\d]/g, "")}`} className="inline-flex items-center gap-1 hover:opacity-70"><Phone size={16} /> {DATA.phone}</a>
                <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-1 hover:opacity-70"><Mail size={16} /> {DATA.email}</a>
                <a href={DATA.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:opacity-70"><Github size={16} /> GitHub</a>
                <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:opacity-70"><Linkedin size={16} /> LinkedIn</a>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={`mailto:${DATA.email}`}
                  className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-black hover:text-white dark:border-neutral-800 dark:hover:bg-white dark:hover:text-black"
                >
                  Contact Me
                </a>
                <a
                  href={DATA.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 hover:bg-black hover:text-white dark:border-neutral-800 dark:hover:bg-white dark:hover:text-black"
                >
                  <Download size={16} /> View Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section id="experience" title="Experience">
          <div className="grid gap-5">
            {DATA.experience.map((job) => (
              <Card key={job.company}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role} · {job.company}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{job.location} • {job.period}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  {job.bullets.map((b, i) => (
                    <motion.li key={i} variants={variants} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.25, delay: i * 0.02 }} className="pl-2">
                      • {b}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-5 md:grid-cols-2">
            {DATA.projects.map((p) => (
              <Card key={p.name}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                    </div>
                  </div>
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:opacity-70">
                      <ExternalLink size={16} /> Link
                    </a>
                  )}
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  {p.detail.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(DATA.skills).map(([k, v]) => (
              <Card key={k}>
                <h4 className="font-medium mb-3">{k}</h4>
                <div className="flex flex-wrap gap-2">
                  {v.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <Card>
            <h3 className="text-lg font-semibold">{DATA.education.school}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{DATA.education.where}</p>
            <p className="mt-2">{DATA.education.degree} — {DATA.education.when}</p>
          </Card>
        </Section>

        <Section id="contact" title="Contact">
          <Card>
            <div className="flex flex-wrap gap-4 items-center text-sm">
              <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-black hover:text-white dark:border-neutral-800 dark:hover:bg-white dark:hover:text-black">
                <Mail size={16} /> {DATA.email}
              </a>
              <a href={`tel:${DATA.phone.replace(/[^\d]/g, "")}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-black hover:text-white dark:border-neutral-800 dark:hover:bg-white dark:hover:text-black">
                <Phone size={16} /> {DATA.phone}
              </a>
              <a href={DATA.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-black hover:text-white dark:border-neutral-800 dark:hover:bg-white dark:hover:text-black">
                <Github size={16} /> GitHub
              </a>
              <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-black hover:text-white dark:border-neutral-800 dark:hover:bg-white dark:hover:text-black">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={DATA.links.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-black hover:text-white dark:border-neutral-800 dark:hover:bg-white dark:hover:text-black">
                <Download size={16} /> Resume (PDF)
              </a>
            </div>
          </Card>
        </Section>

        <footer className="py-12 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} {DATA.name}. Built with React. Toggle dark/light in the header.</p>
        </footer>
      </main>
    </div>
  );
}
