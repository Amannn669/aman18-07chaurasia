export const profile = {
  name: "Aman Chaurasia",
  headline: "AI / Software Development Engineer",
  summary:
    "Creative developer and engineer working across full-stack development, generative AI, machine learning and AI workflow automation. Driven by curiosity and always exploring new technologies.",
  focusAreas: [
    "Full Stack Development",
    "Generative AI (LLMs, chatbots, content tooling)",
    "Machine Learning & Data Science",
    "AI workflow automation and MLOps",
  ],
  contact: "Use the contact section of the portfolio site to get in touch.",
};

export const techStack = [
  {
    category: "Languages & Libraries",
    items: ["Python", "Pandas", "Scikit-learn", "Flask", "SQL", "Bash", "HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    category: "Machine Learning",
    items: ["Supervised Learning", "Unsupervised Learning", "PyTorch", "TensorFlow", "AWS SageMaker"],
  },
  {
    category: "Generative AI & NLP",
    items: ["LangChain", "Hugging Face", "Prompt Engineering", "OpenAI"],
  },
  {
    category: "Data Science",
    items: ["EDA", "Feature Engineering", "Data Visualization", "Statistics"],
  },
  {
    category: "MLOps & Pipelines",
    items: ["MLflow", "Apache Airflow", "DVC", "CI/CD", "Docker", "Kubernetes"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "AWS", "Grafana", "Tableau", "Excel", "Dagshub", "Linux"],
  },
];

export const experience = [
  {
    company: "Darwix AI",
    location: "Gurugram, India",
    role: "Software Development Engineer",
    period: "September 2025 – August 2026",
    highlights: [
      "Built a real-time AI call intelligence pipeline (Python, FastAPI, WebSockets) with async optimizations reducing end-to-end latency by 200–500ms.",
      "Developed a hybrid Objection Detection Engine (NLP + semantic search + LLM validation) achieving 95–98% accuracy.",
      "Architected a multi-tenant RAG platform behind Nginx with Docker Compose and AWS ECS/EKS; hybrid retrieval fusing FAISS/ChromaDB dense search with BM25 (60/40 fusion) at sub-500ms P95.",
      "Enforced multi-tenant isolation via JWT company ID, per-company vector namespaces, and metadata filtering; Redis call-memory with MongoDB fallback; CI/CD with Docker, New Relic, and Grafana.",
    ],
  },
  {
    company: "Provana",
    location: "Noida, India",
    role: "Software Engineer – AI/ML",
    period: "August 2026 – Present",
    highlights: [
      "Architected and shipped a production real-time AI Nudge Generation Service on Azure Function Apps, running Gemini and Gemma on Vertex AI via Google ADK with sub-second end-to-end latency.",
      "Designed stateful multi-turn conversation handling with Google ADK session management backed by PostgreSQL.",
      "Built dual-path nudge delivery with Gemini-generated responses, guaranteed-SLA template fallbacks, and chunk-level streaming through Azure Web PubSub.",
      "Engineered a five-function post-call AI analytics suite on Azure Service Bus and Vertex AI, with Azure Blob Storage persistence and Langfuse plus OpenTelemetry observability.",
    ],
  },
  {
    company: "Krutanic",
    role: "Data Science Intern",
    period: "2025",
    highlights: [
      "Applied data analysis and machine learning techniques to solve business problems.",
    ],
  },
];
