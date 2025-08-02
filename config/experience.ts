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
    category: ["Backend", "Web3", "AI", "Blockchain"],
    shortDescription:
      "Co-founded cybersecurity startup focused on blockchain and AI-powered security solutions.",
    websiteLink: "https://cyphershield.com",
    techStack: [
      "Blockchain",
      "AI/ML",
      "Cybersecurity",
      "Node.js",
      "Typescript",
      "AWS",
      "Microservices",
      "Smart Contracts",
      "Machine Learning",
      "Security Architecture",
      "Team Leadership",
      "Business Development",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date(), // Present
    companyLogoImg: "/experience/cyphershield/logo.png",
    pagesInfoArr: [
      {
        title: "Security Platform",
        description:
          "Developed core security products combining blockchain immutability with AI-powered threat detection.",
        imgArr: ["/experience/cyphershield/security_1.webp"],
      },
      {
        title: "AI Integration",
        description:
          "Integrated machine learning models for real-time threat detection and analysis.",
        imgArr: ["/experience/cyphershield/ai_1.webp"],
      },
      {
        title: "Blockchain Security",
        description:
          "Implemented smart contracts for secure identity management and access control.",
        imgArr: ["/experience/cyphershield/blockchain_1.webp"],
      },
      {
        title: "Team Management",
        description:
          "Led a team of 5+ developers and security experts, establishing best practices.",
        imgArr: ["/experience/cyphershield/team_1.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "CypherShield represents my entrepreneurial journey in the cybersecurity space, where I co-founded a startup focused on combining blockchain technology with AI-powered security solutions.",
        "I led the technical architecture and development of core security products that bridge the gap between traditional cybersecurity and blockchain technology, creating innovative solutions for enhanced security.",
        "The platform integrates machine learning models for real-time threat detection and analysis, while leveraging blockchain's immutability for secure identity management and access control.",
        "I managed a team of 5+ developers and security experts, establishing best practices for secure development and creating a scalable infrastructure for security-as-a-service platform.",
        "Successfully raised initial funding and established strategic partnerships with major blockchain platforms and security firms, demonstrating strong business acumen alongside technical expertise.",
      ],
      bullets: [
        "Co-founded and launched CypherShield, a cybersecurity startup focused on blockchain and AI integration.",
        "Led development of core security products combining blockchain immutability with AI-powered threat detection.",
        "Built a team of 5+ developers and security experts, establishing best practices for secure development.",
        "Established strategic partnerships with major blockchain platforms and security firms.",
        "Raised initial funding and managed investor relationships, demonstrating strong business acumen.",
        "Developed scalable infrastructure for security-as-a-service platform serving multiple clients.",
        "Created innovative security solutions bridging traditional cybersecurity and blockchain technology.",
      ],
    },
  },
  {
    id: "secuvy",
    companyName: "Secuvy",
    type: "Professional",
    category: ["Backend", "Web3", "AI"],
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
        title: "Backend Infrastructure",
        description:
          "Built and maintained core backend services using Node.js (TypeScript), AWS Lambda and n8n in a microservices architecture.",
        imgArr: ["/experience/secuvy/backend_1.webp"],
      },
      {
        title: "Queue Processing",
        description:
          "Integrated Redis (BullQ), and RabbitMQ for queue-based async processing and inter-service communication.",
        imgArr: ["/experience/secuvy/queue_1.webp"],
      },
      {
        title: "CI/CD Pipeline",
        description:
          "Set up CI/CD pipelines using GitLab, deploying services on AWS EKS (Kubernetes) with automated testing and rollback.",
        imgArr: ["/experience/secuvy/cicd_1.webp"],
      },
      {
        title: "Monitoring & Observability",
        description:
          "Implemented monitoring using Prometheus + Grafana, and centralized logging via the ELK Stack.",
        imgArr: ["/experience/secuvy/monitoring_1.webp"],
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
        title: "NFT Minting",
        description:
          "Implemented on-chain NFT minting for event tickets with unique metadata and ownership tracking.",
        imgArr: ["/experience/minttix/minting_1.webp"],
      },
      {
        title: "QR Validation",
        description:
          "Built secure QR-based entry validation system for real-time ticket verification.",
        imgArr: ["/experience/minttix/qr_1.webp"],
      },
      {
        title: "Resale Marketplace",
        description:
          "Developed NFT resale marketplace with automated royalty distribution to event organizers.",
        imgArr: ["/experience/minttix/marketplace_1.webp"],
      },
      {
        title: "Wallet Integration",
        description:
          "Integrated Solana wallet for seamless ticket purchases and NFT management.",
        imgArr: ["/experience/minttix/wallet_1.webp"],
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
        title: "Wallet Interface",
        description:
          "Built intuitive wallet interface for managing SOL and SPL tokens with real-time balance updates.",
        imgArr: ["/experience/sniff/interface_1.webp"],
      },
      {
        title: "Transaction Management",
        description:
          "Implemented secure transaction signing and broadcasting with proper error handling.",
        imgArr: ["/experience/sniff/transactions_1.webp"],
      },
      {
        title: "Token Support",
        description:
          "Added support for multiple SPL tokens with automatic token detection and management.",
        imgArr: ["/experience/sniff/tokens_1.webp"],
      },
      {
        title: "Security Features",
        description:
          "Implemented encryption for private keys and secure storage mechanisms.",
        imgArr: ["/experience/sniff/security_1.webp"],
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
    companyName: "AI-Wakil - AI-Powered Legal Assistant",
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
        imgArr: ["/experience/ai-wakil/analysis_1.webp"],
      },
      {
        title: "Legal Summarization",
        description:
          "Implemented OpenAI API integration for legal document summarization and case assessment.",
        imgArr: ["/experience/ai-wakil/summary_1.webp"],
      },
      {
        title: "Case Analysis",
        description:
          "Developed intelligent case analysis system with precedent identification and risk assessment.",
        imgArr: ["/experience/ai-wakil/case_1.webp"],
      },
      {
        title: "User Interface",
        description:
          "Created intuitive React interface for document upload and analysis results display.",
        imgArr: ["/experience/ai-wakil/ui_1.webp"],
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
        title: "Referral Program",
        description:
          "Designed and implemented a Referral Program, increasing student registration by 35%.",
        imgArr: ["/experience/leverage-edu/referral_1.webp"],
      },
      {
        title: "Automated Incentives",
        description:
          "Developed a system that automates incentives and invoices using Redis queues + PostgreSQL transactions.",
        imgArr: ["/experience/leverage-edu/incentives_1.webp"],
      },
      {
        title: "Query Optimization",
        description:
          "Optimized SQL queries with indexing strategies, improving lead verification efficiency by 50%.",
        imgArr: ["/experience/leverage-edu/optimization_1.webp"],
      },
      {
        title: "Bulk Processing",
        description:
          "Handled bulk uploads (200K+ records) daily with efficient pagination and batching.",
        imgArr: ["/experience/leverage-edu/bulk_1.webp"],
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
    companyLogoImg: "/experience/infosys/logo.png",
    pagesInfoArr: [
      {
        title: "RESTful APIs",
        description:
          "Developed RESTful APIs using Java and Spring Boot for enterprise communication tools.",
        imgArr: ["/experience/infosys/api_1.webp"],
      },
      {
        title: "SMS Alerting System",
        description:
          "Built an SMS-based alerting system reducing manual work by 80%.",
        imgArr: ["/experience/infosys/sms_1.webp"],
      },
      {
        title: "CI/CD Pipeline",
        description:
          "Implemented CI/CD pipelines with Jenkins and Git, reducing manual release errors.",
        imgArr: ["/experience/infosys/cicd_1.webp"],
      },
      {
        title: "Query Optimization",
        description:
          "Performed extensive query optimization, speeding up data retrieval by 60% on large employee datasets.",
        imgArr: ["/experience/infosys/optimization_1.webp"],
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
        imgArr: ["/experience/freelance/saas_1.webp"],
      },
      {
        title: "Cloud Deployment",
        description:
          "Deployed containerized microservices to AWS (EC2, S3, Lambda) using Terraform and Docker.",
        imgArr: ["/experience/freelance/cloud_1.webp"],
      },
      {
        title: "Observability",
        description:
          "Added observability using Prometheus and alerting rules for better system monitoring.",
        imgArr: ["/experience/freelance/monitoring_1.webp"],
      },
      {
        title: "Performance Optimization",
        description:
          "Improved performance with SQL indexing and query caching for multi-tenant workloads.",
        imgArr: ["/experience/freelance/performance_1.webp"],
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
