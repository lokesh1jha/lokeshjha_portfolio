import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "cyphershield",
    companyName: "CypherShield",
    type: "Personal Project",
    category: ["Backend", "Web3", "AI", "Cybersecurity"],
    shortDescription:
      "Co-founded cybersecurity startup building threat shielding platforms across multiple domains using Accord AI model with SLMs.",
    websiteLink: "https://cyphershield.com",
    techStack: [
      "AI/ML",
      "Cybersecurity",
      "Node.js",
      "Typescript",
      "AWS",
      "Microservices",
      "SLMs",
      "Email Security",
      "Drone Security",
      "Healthcare Security",
      "Accord AI",
      "Team Leadership",
      "Business Development",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date(), // Present
    companyLogoImg: "/experience/cyphershield/logo.png",
    pagesInfoArr: [
      {
        title: "Email Shield Platform",
        description:
          "Built comprehensive email security platform protecting against phishing, malware, and advanced email attacks.",
        imgArr: [],
      },
      {
        title: "Drone Security Shield",
        description:
          "Developed threat detection and protection systems for drone operations and autonomous vehicles.",
        imgArr: [],
      },
      {
        title: "Healthcare Security Shield",
        description:
          "Created specialized security solutions for healthcare systems protecting patient data and medical devices.",
        imgArr: [],
      },
      {
        title: "Accord AI Model",
        description:
          "Implemented intelligent decision-making system using multiple SLMs for optimal threat detection and response.",
        imgArr: [],
      },
      {
        title: "Team Management",
        description:
          "Led a team of 3+ developers and security experts, establishing best practices across multiple domains.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "CypherShield represents my entrepreneurial journey in the cybersecurity space, where I co-founded a startup focused on building comprehensive threat shielding platforms across multiple critical domains.",
        "I led the development of specialized security solutions including Email Shield for protecting against phishing and email attacks, Drone Security Shield for autonomous vehicle protection, and Healthcare Security Shield for medical device and patient data protection.",
        "The core innovation is the Accord AI model, which makes intelligent decisions on which specialized language model (SLM) to call based on input context, processes responses, and validates results for optimal threat detection and response.",
        "I architected a microservices-based platform that integrates multiple SLMs instead of traditional LLMs, providing more focused and efficient threat detection capabilities across different security domains.",
        "I managed a team of 3+ developers and security experts, establishing best practices for secure development and creating scalable infrastructure for multi-domain security-as-a-service platform.",
        "Successfully raised initial funding and established strategic partnerships with major cybersecurity firms and domain-specific organizations, demonstrating strong business acumen alongside technical expertise.",
      ],
      bullets: [
        "Co-founded and launched CypherShield, building threat shielding platforms across multiple critical domains.",
        "Developed Email Shield platform protecting against phishing, malware, and advanced email attacks.",
        "Built Drone Security Shield for threat detection and protection in autonomous vehicle operations.",
        "Created Healthcare Security Shield for medical device and patient data protection.",
        "Implemented Accord AI model using multiple SLMs for intelligent threat detection and response decisions.",
        "Built a team of 3+ developers and security experts, establishing best practices across multiple domains.",
        "Established strategic partnerships with major cybersecurity firms and domain-specific organizations.",
        "Raised initial funding and managed investor relationships, demonstrating strong business acumen.",
        "Developed scalable microservices infrastructure for multi-domain security-as-a-service platform.",
        "Created innovative security solutions using SLMs instead of traditional LLMs for better performance.",
      ],
    },
  },
  {
    id: "secuvy",
    companyName: "Secuvy",
    type: "Professional",
    category: ["Backend", "AI"],
    shortDescription:
      "Leading backend development initiatives focused on data security and privacy, including building POCs.",
    websiteLink: "https://www.secuvy.ai/",
    techStack: [
      "Node.js",
      "Typescript",
      "AWS",
      "Lambda",
      "EKS",
      "Redis",
      "RabbitMQ",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "GitLab CI",
      "Microservices",
      "Event-Driven",
      "Clean Architecture",
    ],
    startDate: new Date("2023-09-01"),
    endDate: new Date(), // Present
    companyLogoImg: "/experience/secuvy/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Company landing page showcasing data security and privacy solutions.",
        imgArr: ["/experience/secuvy/landing_1.png"],
      },
      {
        title: "Backend Infrastructure",
        description:
          "Built and maintained core backend services using Node.js (TypeScript), AWS Lambda and n8n in a microservices architecture.",
        imgArr: [],
      },
      {
        title: "Queue Processing",
        description:
          "Integrated Redis (BullQ), and RabbitMQ for queue-based async processing and inter-service communication.",
        imgArr: [],
      },
      {
        title: "CI/CD Pipeline",
        description:
          "Set up CI/CD pipelines using GitLab, deploying services on AWS EKS (Kubernetes) with automated testing and rollback.",
        imgArr: [],
      },
      {
        title: "Monitoring & Observability",
        description:
          "Implemented monitoring using Prometheus + Grafana, and centralized logging via the ELK Stack.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "At Secuvy, I lead backend development initiatives focused on data security and privacy, including building POCs for innovative solutions.",
        "I built and maintained core backend services using Node.js (TypeScript), AWS Lambda and n8n in a microservices architecture, ensuring scalability and maintainability.",
        "I integrated Redis (BullQ), and RabbitMQ for queue-based async processing and inter-service communication, improving system reliability and performance.",
        "I set up CI/CD pipelines using GitLab, deploying services on AWS EKS (Kubernetes) with automated testing and rollback capabilities.",
        "I implemented comprehensive monitoring using Prometheus + Grafana, and centralized logging via the ELK Stack for better observability.",
        "I collaborated with the AI team to integrate privacy-preserving machine learning models, bridging the gap between traditional backend and AI systems.",
        "I mentored junior developers and participated in architecture planning, sprint cycles, and Agile ceremonies to ensure project success.",
      ],
      bullets: [
        "Led backend development initiatives focused on data security and privacy, including building POCs.",
        "Built and maintained core backend services using Node.js (TypeScript), AWS Lambda and n8n in a microservices architecture.",
        "Integrated Redis (BullQ), and RabbitMQ for queue-based async processing and inter-service communication.",
        "Set up CI/CD pipelines using GitLab, deploying services on AWS EKS (Kubernetes) with automated testing and rollback.",
        "Implemented monitoring using Prometheus + Grafana, and centralized logging via the ELK Stack.",
        "Collaborated with the AI team to integrate privacy-preserving machine learning models.",
        "Mentored junior developers and participated in architecture planning, sprint cycles, and Agile ceremonies.",
      ],
    },
  },
  {
    id: "minttix",
    companyName: "Minttix - NFT Ticketing Dapp",
    type: "Personal Project",
    category: ["Web3", "Blockchain", "Backend"],
    shortDescription:
      "NFT-based event ticketing platform on Solana blockchain with secure QR-based entry validation.",
    websiteLink: "https://minttix.in/",
    techStack: [
      "Solana",
      "Smart Contracts",
      "Node.js",
      "React.js",
      "Redis",
      "Kafka",
      "PostgreSQL",
      "QR Code",
      "NFT",
      "Blockchain",
    ],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/experience/minttix/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "NFT ticketing platform landing page showcasing the complete solution.",
        imgArr: ["/experience/minttix/logo.png"],
      },
      {
        title: "NFT Minting",
        description:
          "Implemented on-chain NFT minting for event tickets with unique metadata and ownership tracking.",
        imgArr: [],
      },
      {
        title: "QR Validation",
        description:
          "Built secure QR-based entry validation system for real-time ticket verification.",
        imgArr: [],
      },
      {
        title: "Resale Marketplace",
        description:
          "Developed NFT resale marketplace with automated royalty distribution to event organizers.",
        imgArr: [],
      },
      {
        title: "Wallet Integration",
        description:
          "Integrated Solana wallet for seamless ticket purchases and NFT management.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Minttix is a comprehensive NFT-based event ticketing platform built on the Solana blockchain, revolutionizing how events handle ticket sales and validation.",
        "I developed the complete backend infrastructure including smart contracts for NFT minting, secure QR-based entry validation, and a resale marketplace with automated royalty distribution.",
        "The platform features real-time ticket verification through QR codes, on-chain NFT minting with unique metadata, and seamless wallet integration for Solana users.",
        "I implemented Redis caching for performance optimization and Kafka for reliable event processing, ensuring the platform can handle high-volume ticket sales.",
        "The project demonstrates my expertise in blockchain development, smart contract programming, and building scalable Web3 applications.",
      ],
      bullets: [
        "Built complete NFT-based ticketing platform on Solana blockchain with smart contracts.",
        "Implemented secure QR-based entry validation for real-time ticket verification.",
        "Developed NFT resale marketplace with automated royalty distribution.",
        "Integrated Solana wallet for seamless ticket purchases and NFT management.",
        "Used Redis for caching and Kafka for reliable event processing.",
        "Created scalable architecture handling high-volume ticket sales.",
        "Demonstrated expertise in blockchain development and Web3 applications.",
      ],
    },
  },
  {
    id: "sniff-wallet",
    companyName: "Sniff - Web-based Crypto Wallet",
    type: "Personal Project",
    category: ["Web3", "Blockchain", "Frontend"],
    shortDescription:
      "Web-based crypto wallet like MetaMask, built for browser use to send and receive SOL and other tokens.",
    websiteLink: "https://sniff-wallet.vercel.app/",
    techStack: [
      "React.js",
      "Typescript",
      "Web3",
      "Solana",
      "Cryptography",
      "Browser Extension",
      "Wallet Security",
      "Blockchain",
    ],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-08-01"),
    companyLogoImg: "/experience/sniff/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "Web-based crypto wallet dashboard showcasing the complete wallet solution.",
        imgArr: ["/experience/sniff/dashboard.png"],
      },
      {
        title: "Wallet Interface",
        description:
          "Built intuitive wallet interface for managing SOL and SPL tokens with real-time balance updates.",
        imgArr: [],
      },
      {
        title: "Transaction Management",
        description:
          "Implemented secure transaction signing and broadcasting with proper error handling.",
        imgArr: [],
      },
      {
        title: "Token Support",
        description:
          "Added support for multiple SPL tokens with automatic token detection and management.",
        imgArr: [],
      },
      {
        title: "Security Features",
        description:
          "Implemented encryption for private keys and secure storage mechanisms.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Sniff is a web-based cryptocurrency wallet that provides MetaMask-like functionality for the Solana blockchain, enabling users to manage their SOL and SPL tokens directly in the browser.",
        "I developed the complete wallet interface with real-time balance updates, secure transaction signing, and support for multiple SPL tokens with automatic token detection.",
        "The wallet features robust security measures including encrypted private key storage, secure transaction broadcasting, and comprehensive error handling for failed transactions.",
        "I implemented advanced features like transaction history, token management, and integration with Solana's RPC endpoints for reliable blockchain communication.",
        "This project showcases my deep understanding of blockchain technology, cryptography, and building secure Web3 applications.",
      ],
      bullets: [
        "Built web-based crypto wallet for Solana blockchain with MetaMask-like functionality.",
        "Implemented secure transaction signing and broadcasting with proper error handling.",
        "Added support for multiple SPL tokens with automatic token detection.",
        "Developed encrypted private key storage and secure wallet management.",
        "Created real-time balance updates and transaction history tracking.",
        "Integrated with Solana RPC endpoints for reliable blockchain communication.",
        "Demonstrated expertise in blockchain development and Web3 security.",
      ],
    },
  },
  {
    id: "ai-wakil",
    companyName: "AI-Wakil - AI-Powered Legal Assistant (Work in Progress)",
    type: "Personal Project",
    category: ["AI", "Backend", "Full Stack"],
    shortDescription:
      "Legal document analysis platform with React, Fastify, and AI/ML layer featuring multi-format document parsing.",
    websiteLink: "https://github.com/lokesh1jha/ai-wakil",
    techStack: [
      "React.js",
      "Fastify",
      "OpenAI API",
      "Machine Learning",
      "Node.js",
      "Document Parsing",
      "AI/ML",
      "Legal Tech",
    ],
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-10-01"),
    companyLogoImg: "/experience/ai-wakil/logo.png",
    pagesInfoArr: [
      {
        title: "Document Analysis",
        description:
          "Built AI-powered document parsing system supporting multiple formats (PDF, DOC, TXT).",
        imgArr: [],
      },
      {
        title: "Legal Summarization",
        description:
          "Implemented OpenAI API integration for legal document summarization and case assessment.",
        imgArr: [],
      },
      {
        title: "Case Analysis",
        description:
          "Developed intelligent case analysis system with precedent identification and risk assessment.",
        imgArr: [],
      },
      {
        title: "User Interface",
        description:
          "Created intuitive React interface for document upload and analysis results display.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "AI-Wakil is an innovative legal technology platform that leverages artificial intelligence to analyze legal documents, provide case summaries, and assist legal professionals in their work.",
        "I developed a comprehensive document parsing system that supports multiple formats including PDF, DOC, and TXT files, with intelligent text extraction and formatting.",
        "The platform integrates OpenAI API for advanced natural language processing, enabling automatic legal document summarization, case assessment, and precedent identification.",
        "I built a robust backend using Fastify for high-performance API handling, with intelligent caching and rate limiting to optimize AI API usage and costs.",
        "The project demonstrates my expertise in AI/ML integration, document processing, and building practical applications that solve real-world legal industry challenges.",
      ],
      bullets: [
        "Built AI-powered legal document analysis platform with multi-format support.",
        "Integrated OpenAI API for legal document summarization and case assessment.",
        "Developed intelligent case analysis system with precedent identification.",
        "Created robust backend using Fastify with intelligent caching and rate limiting.",
        "Implemented document parsing system supporting PDF, DOC, and TXT formats.",
        "Built intuitive React interface for document upload and analysis results.",
        "Demonstrated expertise in AI/ML integration and legal technology.",
      ],
    },
  },
  {
    id: "leverage-edu",
    companyName: "Leverage Edu",
    type: "Professional",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "Designed and implemented a Referral Program, increasing student registration by 35%.",
    websiteLink: "https://leverageedu.com/",
    techStack: [
      "Node.js",
      "Javascript",
      "React.js",
      "PostgreSQL",
      "Redis",
      "SQL",
      "Bulk Processing",
    ],
    startDate: new Date("2022-11-01"),
    endDate: new Date("2023-09-01"),
    companyLogoImg: "/experience/leverage-edu/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Education platform landing page showcasing student services and programs.",
        imgArr: ["/experience/leverage-edu/landing_1.png"],
      },
      {
        title: "Referral Program",
        description:
          "Designed and implemented a Referral Program, increasing student registration by 35%.",
        imgArr: ["/experience/leverage-edu/referral_1.png"],
      },
      {
        title: "Automated Incentives",
        description:
          "Developed a system that automates incentives and invoices using Redis queues + PostgreSQL transactions.",
        imgArr: [],
      },
      {
        title: "Query Optimization",
        description:
          "Optimized SQL queries with indexing strategies, improving lead verification efficiency by 50%.",
        imgArr: [],
      },
      {
        title: "Bulk Processing",
        description:
          "Handled bulk uploads (200K+ records) daily with efficient pagination and batching.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "At Leverage Edu, I designed and implemented a Referral Program that significantly increased student registration by 35%, demonstrating the impact of well-designed backend systems on business outcomes.",
        "I developed a comprehensive system that automates incentives and invoices using Redis queues + PostgreSQL transactions, ensuring data consistency and improving operational efficiency.",
        "I optimized SQL queries with indexing strategies, improving lead verification efficiency by 50% and enhancing overall system performance.",
        "I handled bulk uploads (200K+ records) daily with efficient pagination and batching, ensuring the system could scale to meet growing demands.",
        "I built and maintained frontend components using React.js, integrating seamlessly with backend services to provide a cohesive user experience.",
        "I used Node.js, JavaScript, and PostgreSQL to develop and maintain scalable backend services that supported the company's growth.",
        "I participated in system architecture discussions and distributed system challenges, contributing scalable design patterns and best practices.",
      ],
      bullets: [
        "Designed and implemented a Referral Program, increasing student registration by 35%.",
        "Developed a system that automates incentives and invoices using Redis queues + PostgreSQL transactions.",
        "Optimized SQL queries with indexing strategies, improving lead verification efficiency by 50%.",
        "Handled bulk uploads (200K+ records) daily with efficient pagination and batching.",
        "Built and maintained frontend components using React.js, integrating seamlessly with backend services.",
        "Used Node.js, JavaScript, and PostgreSQL to develop and maintain scalable backend services.",
        "Participated in system architecture discussions and distributed system challenges, contributing scalable design patterns.",
      ],
    },
  },
  {
    id: "infosys",
    companyName: "Infosys Ltd.",
    type: "Professional",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "Developed RESTful APIs using Java and Spring Boot for enterprise communication tools.",
    websiteLink: "https://www.infosys.com/",
    techStack: [
      "Java",
      "Spring Boot",
      "Jenkins",
      "Git",
      "SQL",
      "RESTful APIs",
      "SMS Integration",
    ],
    startDate: new Date("2021-12-01"),
    endDate: new Date("2022-11-01"),
    companyLogoImg: "/experience/infosys/logo.jpg",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Enterprise services landing page showcasing Infosys solutions and capabilities.",
        imgArr: ["/experience/infosys/landing_1.png"],
      },
      {
        title: "RESTful APIs",
        description:
          "Developed RESTful APIs using Java and Spring Boot for enterprise communication tools.",
        imgArr: [],
      },
      {
        title: "SMS Alerting System",
        description:
          "Built an SMS-based alerting system reducing manual work by 80%.",
        imgArr: [],
      },
      {
        title: "CI/CD Pipeline",
        description:
          "Implemented CI/CD pipelines with Jenkins and Git, reducing manual release errors.",
        imgArr: [],
      },
      {
        title: "Query Optimization",
        description:
          "Performed extensive query optimization, speeding up data retrieval by 60% on large employee datasets.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "At Infosys Ltd., I developed RESTful APIs using Java and Spring Boot for enterprise communication tools, ensuring robust and scalable solutions for large organizations.",
        "I built an SMS-based alerting system that reduced manual work by 80%, significantly improving operational efficiency and reducing human error.",
        "I implemented CI/CD pipelines with Jenkins and Git, reducing manual release errors and ensuring consistent deployment processes.",
        "I performed extensive query optimization, speeding up data retrieval by 60% on large employee datasets, demonstrating the importance of database performance tuning.",
        "My work at Infosys provided me with valuable experience in enterprise software development and large-scale system optimization.",
      ],
      bullets: [
        "Developed RESTful APIs using Java and Spring Boot for enterprise communication tools.",
        "Built an SMS-based alerting system reducing manual work by 80%.",
        "Implemented CI/CD pipelines with Jenkins and Git, reducing manual release errors.",
        "Performed extensive query optimization, speeding up data retrieval by 60% on large employee datasets.",
      ],
    },
  },
  {
    id: "freelance",
    companyName: "Freelance",
    type: "Personal Project",
    category: ["Backend", "Full Stack", "Cloud"],
    shortDescription:
      "Built SaaS applications using Node.js + MongoDB + Redis, optimized with caching and rate limiting.",
    techStack: [
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS",
      "EC2",
      "S3",
      "Lambda",
      "Docker",
      "Terraform",
      "Prometheus",
      "SQL",
      "Multi-tenant",
    ],
    startDate: new Date("2019-07-01"),
    endDate: new Date("2021-08-01"),
    companyLogoImg: "/experience/freelance/logo.png",
    pagesInfoArr: [
      {
        title: "SaaS Applications",
        description:
          "Built SaaS applications using Node.js + MongoDB + Redis, optimized with caching and rate limiting.",
        imgArr: [],
      },
      {
        title: "Cloud Deployment",
        description:
          "Deployed containerized microservices to AWS (EC2, S3, Lambda) using Terraform and Docker.",
        imgArr: [],
      },
      {
        title: "Observability",
        description:
          "Added observability using Prometheus and alerting rules for better system monitoring.",
        imgArr: [],
      },
      {
        title: "Performance Optimization",
        description:
          "Improved performance with SQL indexing and query caching for multi-tenant workloads.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my freelance period, I built SaaS applications using Node.js + MongoDB + Redis, optimized with caching and rate limiting to ensure high performance and reliability.",
        "I deployed containerized microservices to AWS (EC2, S3, Lambda) using Terraform and Docker, demonstrating expertise in cloud infrastructure and DevOps practices.",
        "I added observability using Prometheus and alerting rules, ensuring that systems could be monitored effectively and issues could be detected early.",
        "I improved performance with SQL indexing and query caching for multi-tenant workloads, optimizing database operations for better scalability.",
        "This freelance experience allowed me to work on diverse projects and develop a strong foundation in modern backend development practices.",
      ],
      bullets: [
        "Built SaaS applications using Node.js + MongoDB + Redis, optimized with caching and rate limiting.",
        "Deployed containerized microservices to AWS (EC2, S3, Lambda) using Terraform and Docker.",
        "Added observability using Prometheus and alerting rules.",
        "Improved performance with SQL indexing and query caching for multi-tenant workloads.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
