// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT.
// Edit the values below to update the live site — no other file needs to
// change. Every field marked PLACEHOLDER should be replaced with your real
// information before you consider the site "done".
// ---------------------------------------------------------------------------

export const personal = {
  name: "Your Name", // PLACEHOLDER
  role: "Data Engineer",
  location: "City, Country", // PLACEHOLDER
  email: "you@example.com", // PLACEHOLDER — used by the mailto Contact button
  tagline:
    "I build reliable data pipelines that turn raw, messy data into something a business can trust.", // PLACEHOLDER
  bio: [
    // PLACEHOLDER paragraph(s) — 1-3 short paragraphs work best.
    "I'm a Data Engineer with hands-on experience designing and maintaining ETL/ELT pipelines across enterprise data warehouses and modern lakehouse platforms. I care about data correctness, pipeline observability, and keeping things simple enough that the next engineer (often me) can maintain them.",
    "Recently I've been focused on building medallion-architecture pipelines on Databricks, migrating legacy Teradata workloads to Snowflake, and orchestrating everything reliably with AutoSys and shell scripting.",
  ],
  quickFacts: [
    { label: "Experience", value: "1.8+ years" },
    { label: "Focus", value: "ETL/ELT, Lakehouse, Data Warehousing" },
    { label: "Based in", value: "City, Country" }, // PLACEHOLDER
  ],
  resumeFileName: "Your_Name_Resume.pdf", // PLACEHOLDER — name the downloaded file gets
};

export const socials = {
  github: "https://github.com/your-username", // PLACEHOLDER
  linkedin: "https://linkedin.com/in/your-profile", // PLACEHOLDER
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
  // PLACEHOLDER — replace with your real education history
  {
    degree: "B.Tech in Computer Science",
    institution: "Your University",
    period: "2018 — 2022",
    notes: "Relevant coursework: Databases, Distributed Systems, Data Structures & Algorithms.",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  // PLACEHOLDER — replace with your real work history, most recent first
  {
    role: "Data Engineer",
    company: "Your Company",
    period: "2024 — Present",
    bullets: [
      "Built and maintained ELT pipelines moving data between Teradata, Snowflake, and Databricks.",
      "Implemented medallion-architecture (bronze/silver/gold) Delta Lake tables to standardize downstream reporting.",
      "Automated job scheduling and dependency management using AutoSys and shell scripting.",
      "Partnered with BI stakeholders to deliver trusted datasets for Tableau dashboards.",
    ],
  },
  {
    role: "Data Engineer Intern",
    company: "Previous Company",
    period: "2023 — 2024",
    bullets: [
      "Wrote PySpark jobs to clean and transform large-scale datasets on Databricks.",
      "Assisted in migrating legacy warehouse queries from Teradata to Snowflake.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  // PLACEHOLDER — replace with your real projects
  {
    title: "Medallion-Architecture ETL Pipeline",
    description:
      "End-to-end Databricks pipeline ingesting raw data into a bronze layer, cleaning/conforming it into silver, and aggregating curated gold tables for reporting.",
    tech: ["Databricks", "PySpark", "Delta Lake", "AutoSys"],
    githubUrl: "https://github.com/your-username/medallion-pipeline", // PLACEHOLDER
  },
  {
    title: "Teradata to Snowflake Migration",
    description:
      "Migrated a set of legacy Teradata ETL workloads to Snowflake, re-writing SQL for Snowflake's engine and validating output parity against production.",
    tech: ["Teradata", "Snowflake", "SQL", "Shell Scripting"],
    githubUrl: "https://github.com/your-username/teradata-snowflake-migration", // PLACEHOLDER
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Built a curated data mart feeding a Tableau dashboard used by regional sales teams to track pipeline health and conversion metrics.",
    tech: ["Snowflake", "SQL", "Tableau"],
    githubUrl: "https://github.com/your-username/sales-analytics-dashboard", // PLACEHOLDER
  },
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Data Warehousing",
    skills: ["Teradata", "Snowflake", "SQL"],
  },
  {
    category: "Big Data & Processing",
    skills: ["PySpark", "Databricks", "Delta Lake", "Medallion Architecture"],
  },
  {
    category: "Orchestration & Scripting",
    skills: ["AutoSys", "Shell Scripting"],
  },
  {
    category: "BI & Visualization",
    skills: ["Tableau"],
  },
];
