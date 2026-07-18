// ─────────────────────────────────────────────────────────────
// Single source of content for the portfolio. Edit here to polish.
// Everything is honest and traceable to the CV master — no inflation.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Bryan Romero Chinchilla',
  role: 'Software Engineer',
  tagline: 'Backend & integrations, end-to-end.',
  location: 'San José, Costa Rica',
  yearsExp: '6+',
  available: true,
  availableLabel: 'Available for new work',
  email: 'bryan.romero.chinchilla@gmail.com',
  phone: '+506 8861-5958',
  github: 'https://github.com/bryancio506',
  githubLabel: 'github.com/bryancio506',
  linkedin: 'https://www.linkedin.com/in/bryan-romerochinchilla',
  linkedinLabel: 'in/bryan-romerochinchilla',
  whatsapp: 'https://wa.me/50688615958',
  calendly: 'https://calendly.com/r0ch1bryan/call-meeting-1',
  cv: 'Bryan_Romero_Chinchilla_CV.pdf',
  photo: '/images/bryan_romero.png',
  heroBg: '/images/automata.jpg',
  english: 'English B2+',
};

export const heroIntro =
  'I build the APIs, integrations, and systems behind operational software. I started in manufacturing — owning a plant-wide system end-to-end as the sole developer — and have since focused on connecting enterprise and legacy systems, keeping high-availability services healthy, and automating the manual work in between.';

// Recognizable brands, shown as a monochrome logo wall.
export const companies: { name: string; logo: string }[] = [
  { name: 'Intel', logo: '/images/logos/intel.svg' },
  { name: 'Unilever', logo: '/images/logos/unilever.svg' },
  { name: 'Accenture', logo: '/images/logos/accenture.svg' },
  { name: 'Bridgestone', logo: '/images/logos/bridgestone.svg' },
];

// ── EXPERIENCE (accordion / dropdowns with bullets) ────────────
export type Job = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
  tags: string[];
  logo?: string; // path to a logo image; falls back to `abbr` monogram
  abbr?: string; // short monogram when there's no logo
};

export const experience: Job[] = [
  // ── STM Computadores hidden from Experience for now (not official yet).
  //    Still shown under "Selected works" as a freelance project. Re-enable when ready.
  // {
  //   company: 'STM Computadores',
  //   abbr: 'STM',
  //   role: 'Software Engineer — M365 Solutions',
  //   period: '2026 – Present',
  //   location: 'Freelance · Costa Rica',
  //   summary: 'Building a managed Microsoft 365 / Power Platform solution and its Python integrations.',
  //   bullets: [
  //     'Built an internal time-tracking solution on Microsoft 365 (Power Apps, SharePoint, Power Automate), now in production for the technician team.',
  //     'Automated the weekly hours reporting the team used to assemble by hand.',
  //     'Added an AI Builder GPT prompt that cleans up technicians’ work notes.',
  //     'Wrote a Python connector against the Microsoft Graph API (MSAL, Entra ID app registration).',
  //   ],
  //   tags: ['Power Apps', 'Power Automate', 'AI Builder', 'Python', 'MS Graph'],
  // },
  {
    company: 'Accenture · OnProcess',
    logo: '/images/logos/accenture.svg',
    role: 'Product Management Senior Analyst',
    period: '2025 – 2026',
    location: 'Heredia, Costa Rica',
    summary: 'Maintained and integrated the microservices behind a multi-carrier package-tracking platform.',
    bullets: [
      'Maintained and integrated Python microservices (FastAPI) for a multi-carrier (UPS/DHL/FedEx) tracking platform on Azure AKS, backed by Cosmos DB.',
      'Led incident triage and diagnosed message-processing failures with KQL log analytics against Azure Service Bus.',
      'Built monitoring and a reprocessing pipeline that cut stuck records from ~30–40% to ~10–15%.',
    ],
    tags: ['Python', 'FastAPI', 'Azure', 'Cosmos DB', 'KQL'],
  },
  {
    company: 'Bridgestone',
    logo: '/images/logos/bridgestone.svg',
    role: 'IT Sr. Specialist — Manufacturing Apps',
    period: '2024 – 2025',
    location: 'Belén, Heredia, Costa Rica',
    summary: 'Kept plant-critical enterprise apps and legacy databases healthy and fast.',
    bullets: [
      'Developed, maintained, and optimized plant-critical enterprise apps and internal APIs (Python, C#/.NET, Node.js).',
      'Maintained a legacy Oracle system writing stored procedures and views in PL/SQL, plus T-SQL on SQL Server.',
      'Rebuilt a KPI report from a ~2-hour query to a few seconds with a Redis caching layer.',
      'Built Power BI and Tableau dashboards for supervisors.',
    ],
    tags: ['C#/.NET', 'SQL Server', 'Oracle · PL/SQL', 'Redis', 'Power BI'],
  },
  {
    company: 'Freelance · Navigator',
    abbr: 'Nav',
    role: 'Software Engineer',
    period: '2023 – 2024',
    location: 'Costa Rica',
    summary: 'Built and supported a self-service billing portal end-to-end.',
    bullets: [
      'Built, deployed, and supported a self-service billing portal (Node.js/Express) end-to-end.',
      'Integrated a legacy SOAP system and the Evertec payment gateway via webhooks.',
      'Deployed on DigitalOcean behind Nginx, with CI/CD via GitHub Actions.',
    ],
    tags: ['Node.js', 'Express', 'SOAP', 'Evertec', 'Nginx', 'GitHub Actions'],
  },
  {
    company: 'Intel',
    logo: '/images/logos/intel.svg',
    role: 'Software Engineer II',
    period: '2022 – 2023',
    location: 'Outsourced · Costa Rica',
    summary: 'Automated lab setup and tooling for a team of technicians across Windows and Linux.',
    bullets: [
      'Built a cross-platform Python/PyQt installer wizard that cut lab setup time ~87% (1–2 h to 15–20 min) for 20–30 technicians.',
      'Supported technician teams by installing and configuring software across servers, NUCs, and lab hardware.',
      'Automated tooling deployment (Python, Bash, PowerShell) on RHEL and Windows Server.',
    ],
    tags: ['Python', 'PyQt', 'Bash', 'PowerShell', 'RHEL'],
  },
  {
    company: 'Cecropia Solutions',
    logo: '/images/cecropia-logo.png',
    role: 'Software Developer',
    period: '2021 – 2022',
    location: 'Costa Rica',
    summary: 'Built CI/CD, data pipelines, and event-driven infrastructure.',
    bullets: [
      'Built CI/CD pipelines from scratch (Jenkins, SonarQube) for Flask and C#/.NET projects; wrote tests with pytest.',
      'Built a PySpark pipeline on Azure Databricks merging multiple Salesforce sources into a unified dataset.',
      'Designed an MQTT (Mosquitto) event-driven broker with Prometheus/Grafana dashboards for a SCADA system.',
    ],
    tags: ['Jenkins', 'PySpark', 'Databricks', 'MQTT', 'Docker'],
  },
  {
    company: 'Unilever',
    logo: '/images/logos/unilever.svg',
    role: 'Full-Stack Engineer',
    period: '2019 – 2021',
    location: 'Belén, Heredia, Costa Rica',
    summary: 'Sole developer of a plant-wide manufacturing execution system, from scratch.',
    bullets: [
      'As the sole developer, ran the full SDLC to build a Go-based plant-wide system, meeting FDA/Quality traceability.',
      'Digitized paper processes across roughly 18 production lines.',
      'Built Python/Flask microservices and REST APIs for operational reporting.',
      'Built real-time KPI dashboards (Power BI, Chart.js, D3.js) for OEE and giveaway.',
    ],
    tags: ['Go', 'Python', 'Flask', 'SQL Server', 'Power BI', 'D3.js'],
  },
  {
    company: 'Etiprés',
    logo: '/images/etipres.png',
    role: 'Computer Technician (field assistant)',
    period: '2015 – 2016',
    location: 'Heredia, Costa Rica',
    summary: 'First role out of technical high school — hardware, cameras, and cabling on site.',
    bullets: [
      'Maintained and configured computer equipment on client sites and in-shop.',
      'Installed security cameras (PTZ/DVR) and mapped networks with structured cabling.',
    ],
    tags: ['Hardware', 'Networking', 'PTZ/DVR'],
  },
];

// ── SELECTED WORKS (projects with images + links) ──────────────
export type Project = {
  title: string;
  context: string;
  year: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  image?: string;
  video?: string; // autoplaying muted loop preview (takes priority over image)
  poster?: string; // still frame shown before/while the video loads
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    title: 'Caseta Inteligente',
    context: 'Computer-vision access control',
    year: '2025–26',
    role: 'Personal project · client STM Computadores',
    description:
      'Counts vehicles entering and leaving a campus checkpoint, reads the plate via OCR, and logs entry/exit times — replacing a handwritten guard logbook.',
    highlights: [
      'Real-time vehicle counting with YOLO detection',
      'Automatic plate reading (ANPR / OCR)',
      'Flask control panel with a searchable entry/exit log',
    ],
    stack: ['Python', 'YOLO / Ultralytics', 'OpenCV', 'easyocr', 'Flask', 'SQLAlchemy'],
    video: '/projects/caseta.mp4',
    poster: '/projects/caseta_poster.jpg',
  },
  {
    title: 'M365 Time-Tracking Solution',
    context: 'Microsoft 365 / Power Platform',
    year: '2026',
    role: 'Freelance · STM Computadores',
    description:
      'A managed Power Platform solution for a technician team: a Power Apps canvas app over SharePoint lists, orchestrated by Power Automate, with an AI Builder prompt that cleans up work notes, plus a Python connector to Microsoft Graph.',
    highlights: [
      'Automated the weekly hours reporting they used to assemble by hand',
      'AI Builder GPT prompt that tidies technicians’ work notes',
      'Python / MSAL connector against Microsoft Graph',
    ],
    stack: ['Power Apps', 'Power Automate', 'SharePoint', 'AI Builder', 'MS Graph'],
  },
  {
    title: 'ASADA Santa Elena',
    context: 'Self-service water-billing portal',
    year: '2023–24',
    role: 'Freelance · via SANDS agency',
    description:
      'An end-to-end portal where residents look up and pay their water bills. Integrates a legacy SOAP system for account data and the Evertec payment gateway through webhooks for payment events.',
    highlights: [
      'Legacy SOAP integration + Evertec payment webhooks',
      'Deployed on DigitalOcean behind Nginx',
      'CI/CD via GitHub Actions',
    ],
    stack: ['Node.js', 'Express', 'SOAP', 'Evertec', 'Nginx'],
    image: '/projects/aguapuracr.png',
    link: { href: 'https://www.aguapuracr.com/', label: 'aguapuracr.com' },
  },
  {
    title: 'WeArtPlay',
    context: 'Music-school website revamp',
    year: '2022',
    role: 'Freelance',
    description:
      'A graphic and performance revamp of the WeArtPlay music academy website — refactoring and optimizing the WordPress build.',
    highlights: [
      'Refactored and optimized an existing WordPress site',
      'Custom plugins and front-end tweaks',
    ],
    stack: ['WordPress', 'PHP', 'JavaScript'],
    image: '/projects/weartplay.png',
    link: { href: 'https://artplay.academy/', label: 'artplay.academy' },
  },
];

export const aboutBio = [
  'I’m a software engineer with 6+ years building and integrating the systems operations run on. My path started on the plant floor at Unilever, where I was the sole developer of a plant-wide MES, and moved through manufacturing IT, courier-tracking platforms, and enterprise integrations.',
  'I like getting to the root cause of a problem and then automating it away — whether that’s a script, a monitoring dashboard, or a small AI helper. Lately that’s meant Microsoft 365 automation and applied computer vision, alongside the backend and DevOps work that’s always been my base.',
];

export const education = [
  { school: 'Tecnológico de Costa Rica', degree: 'B.S. Computer Science Engineering', period: '2017 – 2022', logo: '/images/tec.svg' },
  { school: 'CTP Mercedes Norte', degree: 'Technical — Business Informatics', period: '2013 – 2015', logo: '/images/ctp_mercedes_norte.jpg' },
];

export const certifications = [
  { name: 'Intro to Machine Learning', issuer: 'Kaggle' },
  { name: 'NASA Space Apps Challenge', issuer: '2017' },
  { name: 'Hackathon 2019 — Public Finance', issuer: 'IMF' },
];

export const capabilities: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'Go', 'C# / .NET', 'Node.js', 'TypeScript', 'JavaScript', 'SQL'] },
  { group: 'Backend & APIs', items: ['FastAPI', 'Flask', 'Express', 'REST', 'SOAP', 'webhooks', 'microservices', 'PL/SQL · T-SQL'] },
  { group: 'Frontend', items: ['Next.js', 'HTML / CSS', 'Tailwind', 'Chart.js', 'D3.js'] },
  { group: 'Cloud & DevOps', items: ['Azure (AKS, DevOps, Service Bus, Cosmos DB)', 'DigitalOcean', 'Docker', 'CI/CD', 'Nginx', 'Linux / RHEL', 'Git'] },
  { group: 'Data & AI', items: ['PySpark', 'Databricks', 'Azure Data Lake', 'Power BI', 'Tableau', 'scikit-learn', 'YOLO', 'OpenCV'] },
  { group: 'Databases', items: ['SQL Server', 'Oracle', 'PostgreSQL', 'Cosmos DB', 'Redis'] },
];
