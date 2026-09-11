// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT.
// Edit the values below to update the live site — no other file needs to
// change. Every field marked PLACEHOLDER should be replaced with your real
// information before you consider the site "done".
// ---------------------------------------------------------------------------

export const personal = {
  name: "Atul Gaurav",
  role: "Data Engineer",
  location: "Pune, India",
  email: "atulgaurav786@gmail.com", // used by the mailto Contact button
  tagline:
    "I automate data pipelines and production workflows — turning manual, error-prone processes into reliable, monitored systems.",
  bio: [
    "I'm a Data Engineer with hands-on experience across Python, SQL, Java, and Shell scripting — specializing in backend automation, API-driven workflows, and scalable data processing with Databricks and Spark. I care about query optimization, workflow reliability, and production support that catches problems before they become incidents.",
    "At Bitwise, I've automated 12+ SQL production workflows with BTEQ, sustained 99%+ uptime on a large-scale Teradata environment, and kept 20+ AutoSys-scheduled workflows running with zero SLA breaches — while building out Tableau-based monitoring and ServiceNow incident documentation along the way.",
  ],
  quickFacts: [
    { label: "Experience", value: "2+ years" },
    { label: "Focus", value: "Data Automation, ETL/ELT, Production Support" },
    { label: "Based in", value: "Pune, India" },
  ],
  resumeFileName: "AtulGaurav_DataEngineer.pdf",
};

export const socials = {
  github: "https://github.com/maybeAtull",
  linkedin: "https://linkedin.com/in/atul-gaurav-878b2520a",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  notes?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "DY Patil Institute of MCA and Management, Pune",
    period: "2023 — 2025",
    notes: "9.08 CGPA — Rank 1 (twice). Graduated top of batch in BCA with 8.93 CGPA.",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Data Engineer L2",
    company: "Bitwise",
    period: "Nov 2024 — Present",
    bullets: [
      "Automated 12+ SQL production workflows using BTEQ, eliminating ~30% of manual operational effort and reducing batch failure risk in critical pipelines.",
      "Sustained 99%+ uptime on a large-scale Teradata database environment through scripted performance tuning, access control management, and automated backup recovery.",
      "Scheduled and monitored 20+ production workflows in AutoSys, driving average incident resolution under 2 hours with zero SLA breaches.",
      "Monitored 10+ real-time KPIs (latency, job success rate, error frequency) using Tableau dashboards, enabling faster issue identification and reduced manual reporting.",
      "Standardized incident documentation in ServiceNow, reducing repeat production incidents through root-cause analysis and post-mortem templates.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "End-to-End Data Pipeline with Monitoring & Alerting",
    description:
      "Architected a production-grade ETL/ELT pipeline on Databricks using PySpark and Delta Lake, with multi-source API ingestion, MERGE (upsert) operations, and automated workflow scheduling — plus Power BI dashboards tracking data quality, SLA compliance, and pipeline health in real time. Built on Medallion (Bronze/Silver/Gold) architecture with ACID-compliant lakehouse operations.",
    tech: ["Databricks", "PySpark", "Delta Lake", "Power BI"],
    githubUrl: "https://github.com/maybeAtull/data-pipeline-medallion",
  },
  {
    title: "SmartCart — E-Commerce Grocery App",
    description:
      "A full-stack grocery e-commerce app with user authentication, Razorpay-powered online payments alongside a cash-on-delivery option, an interactive landing page, live cart management, and real-time inventory tracking.",
    tech: ["React", "Python", "Razorpay", "REST API"],
    githubUrl: "https://github.com/maybeAtull/SmartCart",
    image: "https://github.com/user-attachments/assets/dc72944d-22aa-41e8-9083-cd6af2a4e2f2",
  },
  {
    title: "CampusCompanion — College Management Portal",
    description:
      "A full-stack campus portal supporting student admissions, fee payments via Instamojo, role-based dashboards for students, teachers, and principals, notes sharing, and automated email notifications for approvals.",
    tech: ["PHP", "MySQL", "PHPMailer", "Instamojo API"],
    githubUrl: "https://github.com/maybeAtull/CampusCompanion",
  },
  {
    title: "E-Courier — Full-Stack Data Application",
    description:
      "Designed and optimized normalized MySQL schemas for a logistics platform, implementing efficient SQL query patterns for high-frequency read/write operations across customer, order, and delivery entities.",
    tech: ["Java", "Servlets", "JDBC", "MySQL", "HTML/CSS", "JS"],
    githubUrl: "https://github.com/maybeAtull/ECourier",
  },
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Data Engineering",
    skills: ["ETL/ELT Pipeline Design", "PySpark", "Delta Lake", "MERGE Operations", "Data Quality", "Batch Processing", "DBT Basics"],
  },
  {
    category: "Databases & Query",
    skills: ["Teradata", "Snowflake", "MySQL", "MongoDB", "SQL Optimization", "BTEQ"],
  },
  {
    category: "Cloud & Platform",
    skills: ["Azure", "Databricks", "Spark"],
  },
  {
    category: "Orchestration & Automation",
    skills: ["AutoSys", "Shell Scripting", "CI/CD", "Git"],
  },
  {
    category: "Monitoring & Visualization",
    skills: ["Tableau", "Power BI", "ServiceNow"],
  },
  {
    category: "Languages",
    skills: ["Python", "SQL", "Shell Scripting", "Core Java"],
  },
];
