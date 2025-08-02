import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "TypeScript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Java",
    description:
      "Build robust, scalable applications with enterprise-grade programming language.",
    rating: 4,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Python",
    description:
      "Develop versatile applications with a powerful, readable programming language.",
    rating: 4,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Go",
    description:
      "Build fast, reliable, and efficient software with Google's programming language.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Rust",
    description:
      "Create memory-safe, concurrent software with modern systems programming language.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Spring Boot",
    description:
      "Create production-ready applications with Spring's opinionated framework.",
    rating: 4,
    icon: Icons.nestjs, // Using nestjs as fallback
  },
  {
    name: "FastAPI",
    description:
      "Build high-performance APIs with modern Python web framework.",
    rating: 3,
    icon: Icons.express, // Using express as fallback
  },
  {
    name: "React.js",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "PostgreSQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.mysql, // Using mysql as fallback
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Redis",
    description:
      "Build high-performance applications with in-memory data structure store.",
    rating: 4,
    icon: Icons.mongodb, // Using mongodb as fallback
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "RabbitMQ",
    description:
      "Implement reliable message queuing for distributed systems and microservices.",
    rating: 4,
    icon: Icons.socketio, // Using socketio as fallback
  },
  {
    name: "Kafka",
    description:
      "Build real-time streaming data pipelines and applications at scale.",
    rating: 3,
    icon: Icons.socketio, // Using socketio as fallback
  },
  {
    name: "Docker",
    description:
      "Containerize applications for consistent deployment across environments.",
    rating: 4,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Kubernetes",
    description:
      "Orchestrate containerized applications for scalable, resilient deployments.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 4,
    icon: Icons.amazonaws,
  },
  {
    name: "Terraform",
    description:
      "Manage infrastructure as code for consistent, reproducible deployments.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Jenkins",
    description:
      "Automate software development processes with continuous integration and delivery.",
    rating: 4,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "GitHub Actions",
    description:
      "Automate workflows and CI/CD pipelines directly in GitHub repositories.",
    rating: 4,
    icon: Icons.gitHub,
  },
  {
    name: "GitLab CI",
    description:
      "Implement continuous integration and deployment with GitLab's CI/CD platform.",
    rating: 3,
    icon: Icons.gitHub, // Using github as fallback
  },
  {
    name: "Prometheus",
    description:
      "Monitor and alert on system metrics with powerful time-series database.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Grafana",
    description:
      "Visualize and analyze metrics with powerful monitoring and observability platform.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "ELK Stack",
    description:
      "Search, analyze, and visualize log data with Elasticsearch, Logstash, and Kibana.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Solana",
    description:
      "Build high-performance blockchain applications with fast, secure platform.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Smart Contracts",
    description:
      "Develop self-executing contracts with blockchain technology for decentralized applications.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "OpenAI API",
    description:
      "Integrate advanced AI capabilities with OpenAI's powerful language models.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Machine Learning",
    description:
      "Build intelligent systems that learn and improve from data patterns.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Microservices",
    description:
      "Design scalable applications with loosely coupled, independently deployable services.",
    rating: 4,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "CQRS",
    description:
      "Implement Command Query Responsibility Segregation for scalable data architectures.",
    rating: 3,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
  {
    name: "Event-Driven",
    description:
      "Build responsive systems that react to events and state changes.",
    rating: 4,
    icon: Icons.socketio, // Using socketio as fallback
  },
  {
    name: "Clean Architecture",
    description:
      "Design maintainable software with separation of concerns and dependency rules.",
    rating: 4,
    icon: Icons.nodejs, // Using nodejs as fallback
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
