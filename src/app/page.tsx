"use client"
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ExternalLink, Mail, Linkedin, ChevronDown, Briefcase } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ContactSection from "../components/sections/ContactSection";

function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.10 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, visible] as const;
}

// Sample project data, now grouped by category
const PROJECT_CATEGORIES = [
  {
    label: "WebApp",
    color: "#2563eb",
    projects: [
      {
        title: "Portfolio Website",
        description: "A modern, minimal portfolio built with Next.js and Tailwind CSS.",
        image: "/next.svg",
        link: "#",
        details: "This project showcases my skills in React, Next.js, and UI design. It features a responsive layout, dark mode, and smooth animations.",
      },
      {
        title: "E-commerce Platform",
        description: "A scalable e-commerce solution with secure payments and admin dashboard.",
        image: "/js_logo.webp",
        link: "#",
        details: "Built with Node.js, Express, and React. Includes product management, order tracking, and user authentication.",
      },
    ],
  },
  {
    label: "Web3",
    color: "#a21caf",
    projects: [
      {
        title: "NFT Ticketing Dapp – Minttix",
        description: "NFT-based event ticketing platform on Solana blockchain.",
        image: "/minttix-landing-page.png",
        link: "https://minttix.in/",
        details: "Secure QR-based entry validation, NFT resale, on-chain minting, wallet-based payments, Redis cache, Kafka for mint processing.",
      },
      {
        title: "Sniff",
        description: "Web based crypto wallet",
        image: "/sniff-web-based-wallet.png",
        link: "https://sniff-wallet.vercel.app/",
        details: "Like we have metamask, this is a web based wallet. This is totally on your browser. You can use it to send and receive SOL and other tokens.",
      },
      {
        title: "Solmeet",
        description: "Connect with Crypto Experts",
        image: "/solmeet.png",
        link: "https://solmeet-rosy.vercel.app/",
        details: "Solmeet is a platform for connecting with crypto experts. You can find experts in the platform and connect with them.",
      },
    ],
  },
  {
    label: "AI",
    color: "#059669",
    projects: [
      {
        title: "AI-Wakil – AI-Powered Legal Assistant",
        description: "Legal document analysis platform with React, Fastify, and AI/ML layer.",
        image: "/aws_logo.webp",
        link: "https://github.com/lokesh1jha/ai-wakil",
        details: "Multi-format document parsing, OpenAI API integration for summarization and case assessment.",
      },
    ],
  },
];

function ProjectModal({ open, onClose, project }: { open: boolean; onClose: () => void; project: any }) {
  if (!open || !project) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(30,41,59,0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        animation: 'fadeIn 0.2s',
      }}
      onClick={onClose}
    >
      <div
        className="card"
        style={{ maxWidth: 400, width: '90vw', position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          aria-label="Close project preview"
          onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: 'var(--color-primary)' }}
        >
          ×
        </button>
        <img src={project.image} alt="" style={{ width: '100%', borderRadius: 12, marginBottom: 16, objectFit: 'cover', maxHeight: 180 }} />
        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '0 0 0.5rem 0' }}>{project.title}</h3>
        <p style={{ color: 'var(--color-text)', marginBottom: 8 }}>{project.details}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 500, textDecoration: 'underline' }}>View Project</a>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}

// Unique, grouped skills data
const SKILLS = [
  {
    category: "Languages",
    color: "#2563eb",
    items: ["JavaScript", "TypeScript", "Java", "Python", "Go", "Rust"],
  },
  {
    category: "Backend",
    color: "#a21caf",
    items: ["Node.js", "Express", "Spring Boot", "FastAPI", "REST", "GraphQL"],
  },
  {
    category: "Frontend",
    color: "#059669",
    items: ["React.js", "Next.js"],
  },
  {
    category: "Data",
    color: "#eab308",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    category: "Messaging / Streaming",
    color: "#f59e42",
    items: ["RabbitMQ", "Kafka"],
  },
  {
    category: "Cloud / DevOps",
    color: "#0ea5e9",
    items: ["Docker", "Kubernetes", "AWS", "Terraform"],
  },
  {
    category: "CI/CD / Monitoring",
    color: "#64748b",
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "Prometheus", "Grafana", "ELK Stack"],
  },
  {
    category: "Patterns",
    color: "#f43f5e",
    items: ["Microservices", "CQRS", "Event-Driven", "Clean Architecture"],
  },
];

// Work experience data from resume, now with landingPage
const EXPERIENCE = [
  {
    company: "Secuvy",
    role: "Senior Software Developer",
    location: "Hyderabad",
    period: "Sep 2023 – Present",
    landingPage: "https://www.secuvy.ai/", // Example public link
    highlights: [
      "Leading backend development initiatives focused on data security and privacy, including building POCs.",
      "Built and maintained core backend services using Node.js (Typescript), AWS Lambda and n8n in a microservices architecture.",
      "Integrated Redis (BullQ), and RabbitMQ for queue-based async processing and inter-service communication.",
      "Set up CI/CD pipelines using GitLab, deploying services on AWS EKS (Kubernetes) with automated testing and rollback.",
      "Implemented monitoring using Prometheus + Grafana, and centralized logging via the ELK Stack.",
      "Collaborated with the AI team to integrate privacy-preserving machine learning models.",
      "Mentored junior developers and participated in architecture planning, sprint cycles, and Agile ceremonies.",
    ],
  },
  {
    company: "Leverage Edu",
    role: "Software Developer",
    location: "Noida",
    period: "Nov 2022 – Sep 2023",
    landingPage: "https://leverageedu.com/", // Example public link
    highlights: [
      "Designed and implemented a Referral Program, increasing student registration by 35%.",
      "Developed a system that automates incentives and invoices using Redis queues + PostgreSQL transactions.",
      "Optimized SQL queries with indexing strategies, improving lead verification efficiency by 50%.",
      "Handled bulk uploads (200K+ records) daily with efficient pagination and batching.",
      "Built and maintained frontend components using React.js, integrating seamlessly with backend services.",
      "Used Node.js, JavaScript, and PostgreSQL to develop and maintain scalable backend services.",
      "Participated in system architecture discussions and distributed system challenges, contributing scalable design patterns.",
    ],
  },
  {
    company: "Infosys Ltd.",
    role: "Backend Engineer",
    location: "Hyderabad",
    period: "Dec 2021 – Nov 2022",
    landingPage: "https://www.infosys.com/", // Example public link
    highlights: [
      "Developed RESTful APIs using Java and Spring Boot for enterprise communication tools.",
      "Built an SMS-based alerting system reducing manual work by 80%.",
      "Implemented CI/CD pipelines with Jenkins and Git, reducing manual release errors.",
      "Performed extensive query optimization, speeding up data retrieval by 60% on large employee datasets.",
    ],
  },
  {
    company: "Freelance",
    role: "Software Developer",
    location: "Remote",
    period: "Jul 2019 – Aug 2021",
    landingPage: null, // No public link
    highlights: [
      "Built SaaS applications using Node.js + MongoDB + Redis, optimized with caching and rate limiting.",
      "Deployed containerized microservices to AWS (EC2, S3, Lambda) using Terraform and Docker.",
      "Added observability using Prometheus and alerting rules.",
      "Improved performance with SQL indexing and query caching for multi-tenant workloads.",
    ],
  },
];

// Social/contact links with better icons and colors
const CONTACTS = [
  {
    label: "Email",
    url: "mailto:lokesh1jha@gmail.com",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: 26, minHeight: 26 }} aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="4" fill="#e0e7ef" />
        <path d="M22 6 12 13 2 6" stroke="#2563eb" strokeWidth="1.7" fill="none" />
      </svg>
    ),
    color: "#2563eb",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/lokesh-jha-088549136/",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#0a66c2" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#e0e7ef" />
        <path d="M6.94 8.5a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12ZM8.06 10.25H5.81V18h2.25v-7.75ZM12.5 10.25h-2.25V18h2.25v-4.25c0-1.25 1.5-1.13 1.5 0V18h2.25v-4.75c0-2.5-3-2.41-3-1.19V10.25Z" fill="#0a66c2" />
      </svg>
    ),
    color: "#0a66c2",
  },
  {
    label: "GitHub",
    url: "https://github.com/lokesh1jha",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#18181b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: 26, minHeight: 26 }} aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#e0e7ef" />
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z" fill="#18181b" />
      </svg>
    ),
    color: "#18181b",
  },
  {
    label: "X",
    url: "https://x.com/Lokesh1jha",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#e0e7ef" />
        <path d="M7 7h2.7l2.3 3.6L14.3 7H17l-3.6 5.2L17 17h-2.7l-2.3-3.7L9.7 17H7l3.6-5.3L7 7Zm2.1 1.2L12 10.5l2.9-4.3H9.1Zm5.8 8.6-2.9-4.3-2.9 4.3h5.8Z" fill="#18181b" />
      </svg>
    ),
    color: "#18181b",
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  // About Section with fade-in
  const [aboutRef, aboutVisible] = useFadeInOnScroll();
  // Projects Section with fade-in
  const [projectsRef, projectsVisible] = useFadeInOnScroll();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  // Skills Section with fade-in
  const [skillsRef, skillsVisible] = useFadeInOnScroll();
  // Work Experience Section with fade-in
  const [workRef, workVisible] = useFadeInOnScroll();
  // Contact Section with fade-in
  const [contactRef, contactVisible] = useFadeInOnScroll();

  // Animation delays for staggered fade-in
  const fadeDelays = [0, 0.15, 0.3, 0.45, 0.6];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-green-900 to-indigo-900 text-white">
      

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-indigo-900 bg-opacity-90 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-2xl hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection aboutRef={aboutRef} aboutVisible={aboutVisible} fadeDelay={fadeDelays[0]} />

      {/* Projects Section */}
      <ProjectsSection projectsRef={projectsRef} projectsVisible={projectsVisible} fadeDelay={fadeDelays[1]} ProjectModal={ProjectModal} PROJECT_CATEGORIES={PROJECT_CATEGORIES} />

      {/* Skills Section */}
      <SkillsSection skillsRef={skillsRef} skillsVisible={skillsVisible} fadeDelay={fadeDelays[2]} SKILLS={SKILLS} />

      {/* Work Experience Section */}
      <ExperienceSection workRef={workRef} workVisible={workVisible} fadeDelay={fadeDelays[3]} EXPERIENCE={EXPERIENCE} />

      {/* Contact Section */}
      <ContactSection contactRef={contactRef} contactVisible={contactVisible} fadeDelay={fadeDelays[4]} CONTACTS={CONTACTS} />

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        <p>&copy; 2025 Lokesh Kumar Jha. All rights reserved.</p>
      </footer>
    </div>
  )
}