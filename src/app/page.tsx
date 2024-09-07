'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, MoonIcon, SunIcon } from "lucide-react"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const skills = [
    { name: "Rust", logo: "/rust_lang_logo.jpg?height=40&width=55", level: 50 },
    { name: "Node.js", logo: "/Nodejs_logo.png?height=40&width=55", level: 90 },
    { name: "Typescript", logo: "/ts_logo.webp?height=40&width=55", level: 90 },
    { name: "JavaScript", logo: "/js_logo.webp?height=40&width=40", level: 90 },
    { name: "React", logo: "/img_react_logo.webp?height=40&width=40", level: 80 },
    { name: "AWS", logo: "/aws_logo.webp?height=40&width=40", level: 80 },
    { name: "SQL(MySQL/PostgreSQL)", logo: "/MySQL-Logo.webp?height=40&width=55", level: 80 },

  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <div className="container mx-auto p-6 space-y-8">
        <header className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24 border-2 border-primary">
              <AvatarImage src="/my_pic.jpeg?height=96&width=96" alt="Your Name" />
              <AvatarFallback>LK</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Lokesh Kumar Jha</h1>
              <p className="text-xl text-muted-foreground">Senior Software Engineer | Blockchain Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" onClick={() => window.open('mailto:5F9jz@example.com')}>
              <MailIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <PhoneIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => window.open('https://www.linkedin.com/in/lokesh-jha-088549136/')}>
              <LinkedinIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => window.open('https://github.com/lokesh1jha')}>
              <GithubIcon className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <SunIcon className="h-4 w-4" />
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
              <MoonIcon className="h-4 w-4" />
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="col-span-1 md:col-span-2 transition-all duration-300 hover:shadow-lg hover:border-primary">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p>I am a passionate blockchain developer with deep expertise in the Solana ecosystem. With 5 years of experience in software development,
                I&lsquo;ve honed my skills in building decentralized applications, NFT platforms, and high-performance smart contracts. </p>
              <br />
              <p>
                My journey has allowed me to work on a wide range of projects, mastering technologies such as Node.js, JavaScript, TypeScript, MySQL, PostgreSQL,
                and cloud infrastructure. I am committed to pushing the boundaries of blockchain technology and delivering innovative solutions that drive real-world impact.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                      <span>{skill.name}</span>
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="w-full" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary">
            <CardHeader>
              <CardTitle>Featured Project</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Minttix - NFT Ticketing Platform</h3>
              <a href="https://minttix.in" target="_blank" rel="noopener noreferrer" className="text-primary transition-all duration-300 hover:underline">Visit: MintTix.in</a>
              <p className="mb-4">Revolutionary event ticketing using Solana blockchain, ensuring authenticity and creating a new market for collectible event tickets.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Solana", "Rust", "Anchor", "React", "Node.js"].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="space-y-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary">
              <CardHeader>
                <CardTitle>Senior Software Developer</CardTitle>
                <CardDescription>Secuvy ai | 2023 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Leading backend development initiatives with a focus on data security and privacy, including building POCs.</li>
                  <li>Proficient in TypeScript for feature implementation and POC development.</li>
                  <li>Actively involved in research endeavours to drive innovation.</li>
                  <li>Instrumental in delivering impactful features to enhance client acquisition.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary">
              <CardHeader>
                <CardTitle>Full Stack Developer</CardTitle>
                <CardDescription>Leverage Edu. | 2022 - 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Designed and implemented a Referral Program to increase new student registration.</li>
                  <li>Developed a system that generates incentives and invoices on leads produced by different partners for various fields.</li>
                  <li>Utilised advanced SQL queries and added checks to accurately track and verify referrals in a secure manner.</li>
                  <li>Created and maintained a bulk student upload API and UI for seamless import and export of large volumes of student
                    data.</li>
                  <li>Secured old queries by rewriting them to protect against SQL injection, using Knex and Sequelize.</li>
                  <li>Implemented asynchronous processing and error handling mechanisms in the API, managing up to 2 lakh leads per day.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary">
              <CardHeader>
                <CardTitle>Backend Developer</CardTitle>
                <CardDescription>Infosys Ltd. | 2020 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Developed RESTful APIs using Node.js, Express, and MySQL for an employee communication system.</li>
                  <li>Implemented APIs to send notices and letters to employees’ phones, improving communication efficiency.</li>
                  <li>Used MySQL for secure storage and retrieval of employee data and hearing details, ensuring data integrity.</li>
                  <li>Implemented version control using Git and employed Jenkins for CI/CD to automate testing and deployment processes.</li>
                  <li>Achieved a significant reduction of 80% in paper usage by enabling SMS communication.</li>
                  <li>Increased the response rate by 50% through the implementation of SMS notifications.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary">
              <CardHeader>
                <CardTitle>Solana-based DEX</CardTitle>
              </CardHeader>
              <CardContent>
                <p>High-speed decentralized exchange on Solana with AMM functionality and yield farming features.</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary">
              <CardHeader>
                <CardTitle>NFT Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Solana-based NFT marketplace using Metaplex, enabling minting, selling, and trading of unique digital assets.</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary">
              <CardHeader>
                <CardTitle>Blockchain Explorer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Custom blockchain explorer for Solana, providing detailed transaction and account information.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="italic">&quot;Lokesh Jha is an exceptional blockchain developer. Their expertise in Solana and ability to optimize smart contracts is unparalleled.&quot;</p>
                    <p className="mt-2 font-semibold">Abhijeet Singh, Blockchain Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jane Smith" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="italic">&quot;Working with Lokesh Jha on our Affilate Program was a game-changer.
                      His technical skills and creativity brought our vision to life.&quot;</p>
                    <p className="mt-2 font-semibold">Farhan, Software Dveloper at Leverage Edu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="text-center text-muted-foreground">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}