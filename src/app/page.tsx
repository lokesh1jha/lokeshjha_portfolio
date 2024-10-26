"use client"
import { useState, useEffect } from 'react'
import { Menu, X, ExternalLink, Mail, Linkedin, ChevronDown, Briefcase } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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

  const projects = [
    {
      title: "Minttix - NFT ticketing platform",
      description: "A decentralized NFT ticketing platform for events. Oraganise and sell tickets on Solana blockchain. Resale tickets for events.",
      tags: ["Solana", "Node.js", "React", "Next.js", "Rust"],
      demoLink: "https://minttix.in/",
      githubLink: "https://github.com/abhijeetsingh-22/nft-ticketing"
    },
    {
      title: "Sniff - Web based wallet",
      description: "A simple web based wallet where someone can come and create a pneumonic, add multiple wallets and see the public key associated with each wallet.",
      tags: ["Solana", "TypeScript", "React", "Next.js", "Rust", "Anchor"],
      demoLink: "https://sniff-wallet.vercel.app/",
      githubLink: "https://github.com/lokesh1jha/web-based-wallet"
    },
    {
      title: "DevPool - Job Portal",
      description: "Devpool is a dynamic job portal designed to connect job seekers with employers, enabling seamless job postings and applications. Built using modern web technologies, it offers a user-friendly interface for both recruiters and candidates, facilitating efficient job matching and profile management.",
      tags: ["Node.js", "Express", "PostgreSQL", "Next.js", "Supabase"],
      demoLink: "https://devpool-bay.vercel.app/",
      githubLink: "https://github.com/lokesh1jha/devpool"
    },
    {
      title: "Dukaan - E-commerce",
      description: "E-commerce platform with authentication, cart, checkout, payment integration, and admin dashboard.",
      tags: ["Node.js", "Express", "PostgreSQL", "Next.js"],
      demoLink: "https://dukaan.vercel.app/",
      githubLink: "https://github.com/lokesh1jha/Dukaan"
    }
  ]

  const skills = [
    "Solana", "Rust", "Node.js", "JavaScript", "TypeScript", "React",
    "Smart Contracts", "Web3.js", "Anchor", "MySQL", "PostgreSQL",
    "AWS", "Docker", "Git", "Express", "RESTful APIs", "CI/CD"
  ]

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Secuvy ai",
      period: "2023 - Present",
      responsibilities: [
        "Leading backend development initiatives with a focus on data security and privacy, including building POCs.",
        "Proficient in TypeScript for feature implementation and POC development.",
        "Actively involved in research endeavours to drive innovation.",
        "Instrumental in delivering impactful features to enhance client acquisition."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Leverage Edu",
      period: "2022 - 2023",
      responsibilities: [
        "Designed and implemented a Referral Program to increase new student registration.",
        "Developed a system that generates incentives and invoices on leads produced by different partners for various fields.",
        "Utilised advanced SQL queries and added checks to accurately track and verify referrals in a secure manner.",
        "Created and maintained a bulk student upload API and UI for seamless import and export of large volumes of student data.",
        "Secured old queries by rewriting them to protect against SQL injection, using Knex and Sequelize.",
        "Implemented asynchronous processing and error handling mechanisms in the API, managing up to 2 lakh leads per day."
      ]
    },
    {
      title: "Backend Developer",
      company: "Infosys Ltd",
      period: "2020 - 2022",
      responsibilities: [
        "Developed RESTful APIs using Node.js, Express, and MySQL for an employee communication system.",
        "Implemented APIs to send notices and letters to employees' phones, improving communication efficiency.",
        "Used MySQL for secure storage and retrieval of employee data and hearing details, ensuring data integrity.",
        "Implemented version control using Git and employed Jenkins for CI/CD to automate testing and deployment processes.",
        "Achieved a significant reduction of 80% in paper usage by enabling SMS communication.",
        "Increased the response rate by 50% through the implementation of SMS notifications."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-900 bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-purple-400">LKJ.dev</a>
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`hover:text-purple-400 transition-colors duration-300 ${activeSection === item ? 'text-purple-400' : ''
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

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
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">Lokesh Kumar Jha</h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-400 animate-fade-in-up animation-delay-300">Senior Software Engineer | Blockchain Developer</p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 animate-fade-in-up animation-delay-600">
            Specializing in Backend Development and decentralized applications
          </p>
          <Button size="lg" className="animate-fade-in-up animation-delay-900">
            <a href="#projects">View My Work</a>
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg mb-6 text-justify">
            I am a passionate Backend developer with deep expertise in Node.js. With over 4 years of experience in software development, I have honed my skills in building scalable back-end systems and high-performance decentralized applications.
          </p>
          <p className="text-lg mb-6 leading-relaxed text-justify">
            Currently, I am expanding my skill set in blockchain development, specifically focusing on Solana and Rust. My work has involved creating NFT platforms and smart contracts, alongside mastering technologies like Node.js, JavaScript, TypeScript, MySQL, PostgreSQL, and cloud infrastructure.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            I thrive on solving complex challenges and am committed to pushing the boundaries of blockchain technology. My goal is to build decentralized systems that are both user-friendly and impactful, contributing to the real-world evolution of this innovative field.
          </p>
        </div>

      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-indigo-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-purple-500 transform -translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`mb-12 relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                {/* Dot on the timeline */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 bg-purple-500 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <Briefcase size={16} />
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className={`bg-gradient-to-br from-indigo-700 to-purple-700 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                    <h3 className="text-2xl font-semibold mb-2 text-purple-300">{exp.title}</h3>
                    <p className="text-purple-400 mb-4">{exp.company} | {exp.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-left">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-300 text-justify">{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-indigo-800 to-purple-800 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-purple-300">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-indigo-600 text-purple-100 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-indigo-900">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-indigo-900">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      {/* <GitHub className="w-4 h-4 mr-2" /> */}
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-indigo-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:scale-110">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <p className="text-center mb-12 text-lg">Interested in collaborating on a blockchain project or have questions about Solana development? Let&apos;s connect!</p>
          <p className="text-center mb-12 text-lg">Email: lokesh1jha@gmail.com</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button variant="outline" size="lg" asChild className="w-full md:w-auto bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-indigo-900">
              <a href="mailto:lokesh1jha@gmail.com" className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full md:w-auto bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-indigo-900">
              <a href="https://github.com/lokesh1jha" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                {/* <GitHub className="w-5 h-5 mr-2" /> */}
                GitHub Profile
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full md:w-auto bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-indigo-900">
              <a href="https://www.linkedin.com/in/lokesh-jha-088549136/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        <p>&copy; 2023 Lokesh Kumar Jha. All rights reserved.</p>
      </footer>
    </div>
  )
}