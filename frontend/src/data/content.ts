
export interface Navbar {
  href: string;
  section: string;
}

export interface About {
  name: string;
  description: string;
}

export interface Experience {
  company: string;
  title: string;
  dates: string;
  location: string;
  description: string[]; // bullet points
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
}

export const navbar: Navbar[] = [
  {
    href: "#about",
    section: "About"
  },
  {
    href: "#experience",
    section: "Experience"
  },
  {
    href: "#projects",
    section: "Projects"
  },
  {
    href: "#skills",
    section: "Skills"
  },
  {
    href: "#contact",
    section: "Contact Me"
  },
]

export const about: About = {
  name: "Nikunj Gohil",
  description: `Expertise in Full-Stack Development, Generative AI and Data Engineering. Experienced in building data pipelines, microservices for developing scalable applications, using Python,
          Databricks, and Azure. Adept at working in Agile environments with strong analytical, leadership, and communication skills that drive innovation and collaboration.`,
};

export const experience: Experience[] = [
  {
    company: "Quest Global",
    title: "Software Developer Intern",
    dates: "February 2025 – January 2026",
    location: "USA",
    description: [
      `Developed a RAG based GenAI web chatbot using React, OpenAI, LangChain, llamaindex and SQL with user authentication, chat history, and real-time responses. Designed a scalable architecture, including RESTful APIs and asynchronous query handling, to support concurrent users.`,
      `Automated ETL pipeline for data extraction, wrangling, chunking, embedding, and indexing and storing using Databricks Workflow, reducing manual effort by 70%. Coded custom Python script for SVD file parsing, achieving 100% extraction accuracy.`,
      `Evaluated and tuned model performance using prompt engineering, BERTScore and ROUGE metrics; achieved an average evaluation score of 75%, with 35% response improvement.`,
      `Created detailed technical documentation for the application and API usage; participated in client meetings to demonstrate functionality and address feedback effectively during reviews.`,
    ],
  },
  {
    company: "Wynbee",
    title: "Software Developer Intern",
    dates: "January 2021 – January 2022",
    location: "USA",
    description: [
        `Collaborated cross functionally to integrate APIs improving feature delivery by 20%. Participated in agile sprints to coordinate CI/CD implementation via GitHub Actions and Jenkins, debugging and code reviews for an app with 10K+ users.`,
        `Conducted end-to-end testing using Jest and Postman, and optimized application modules, resolving 150+ defects and improving overall product reliability by 15%.`,
        `Monitored using Prometheus and Grafana for performance and alerting for potential bottlenecks. Developed analytics dashboards using Tableau to visualize activity trends, and sales performance, enabling data-driven insights.`,
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Parables App",
    description: "An app to view and share Parables",
    link: "https://github.com/nikunj-dg/Parables-App",
    tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI"],
  },
  {
    title: "RAG System - Basic",
    description: "Retrieval-Augmented Generation system using Databricks.",
      link: "https://github.com/nikunj-dg/rag_1",
    tech: ["Python", "LLMs", "Databricks"],
  },
  {
    title: "Facial Attendance System",
    description: "Facial Attendance System.",
      link: "https://github.com/nikunj-dg/Facial-Attendance-System",
    tech: ["Python", "Tkinter"],
  },
  {
    title: "BlackJack Game",
    description: "The gameplay is basic and straightforward. Follow the instructions onscreen.",
      link: "https://github.com/nikunj-dg/BlackJack-Game",
    tech: ["Python"],
  },
  {
    title: "XnO Game",
    description: "The gameplay is basic and straightforward. Follow the instructions onscreen.",
      link: "https://github.com/nikunj-dg/XnO-Game",
    tech: ["Python"],
  },
  {
    title: "Weather Project",
    description: "You've been tasked by your team to create an automated Extract, Transform, Load (ETL) process to extract daily weather forecast and observed weather data and load it into a live report to be used for further analysis by the analytics team. ",
      link: "https://github.com/nikunj-dg/Weather-Project",
    tech: ["CLI"],
  },
  {
    title: "Forage_LYFT_Backend",
    description: "Lyft Back-End Engineering Job Simulation - July 2023.",
      link: "https://github.com/nikunj-dg/Forage-LYFT-BackEnd",
    tech: ["Python"],
  },
];