import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Globe } from "lucide-react"
import PageHeader from "@/components/page-header"
import win95 from "@/assets/windows95.png"
import greenit from "@/assets/greenit.png"
import market from "@/assets/market.png"
import mappaterm from "@/assets/mappaterm.png"
import mappaide from "@/assets/mappaide.png"
import student from "@/assets/student.png"
import soulbuddy from "@/assets/soulbuddy.png"
export default function ProjectsPage() {
  const projects = [
    {
      title: "MappaIDE",
      description: "A real time collaborative IDE with repository system, inbuilt version control system, merge conflict resolver, and a chat system.",
      image: mappaide,
      tech: ["NextJS", "FastAPI", "LiveBlocks"],
      start: true,
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/mappa_for_ide",
    },
    {
      title: "Mappa for Terminal",
      description: "High powered voice controlled terminal assistant with inbuilt commands for git, docker, and other terminal commands.",
      image: mappaterm,
      tech: ["Python", "Llama 3.2", "Grok"],
      start: true,
      demo: "https://mappaforterminal.vercel.app",
      github: "https://github.com/Ghruank/mappa_for_terminal",
    },
    {
      title: "Windows 95 Virtual Machine",
      description: "A virtual machine (more or less a GUI clone) of the Windows 95 operating system, made entirely in Python Tkinter.",
      image: win95,
      tech: ["Python", "Tkinter"],
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/win95_vm_tkinter",
    },
    {
      title: "Soul Buddy: A Spiritual Guide",
      description: "SoulBuddy is an AI-driven platform designed to deliver personalized spiritual guidance through the ancient sciences of astrology and numerology. Our platform has kundali and horoscope generation, AI powered recommendations, spiritual content delivery and an interactive chatbot",
      image: soulbuddy,
      tech: ["NextJS", "Flask", "DataStax", "Langflow"],
      start: true,
      demo: "https://supermind-grll.vercel.app",
      github: "https://github.com/Ghruank/Soul_Buddy",
    },
    {
      title: "Eco-Tracker (GreenIt)",
      description: "An Eco-Tracker which tracks your daily activity (travel and footsteps) along with your electricity consumption with its distribution, and gives suggestions on how you can optimise yourself to be more eco friendly.",
      image: greenit,
      tech: ["NextJS", "Flask", "MongoDB", "REST API"],
      start: true,
      demo: "",
      github: "https://github.com/Ghruank/Eco-Tracker",
    },
    {
      title: "Marketing Assistant",
      description: "An AI based marketing assistant, which generates a message for marketing any product, based on the region, season and whether you want it the professional way or the \"genz\" way",
      image: market,
      tech: ["ReactJS", "Flask", "Meta AI", "Lllama 3.2"],
      demo: "",
      github: "https://github.com/Ghruank/marketing-assistant",
    },
    {
      title: "Student Registeration Portal",
      description: "A Full Fledged DBMS Project for student registeration, with SQL queries, triggers, and procedures.",
      image: student,
      tech: ["HTML", "GoLang", "MySQL"],
      start: true,
      demo: "https://ghruank.github.io/dbms/",
      github: "https://github.com/Ghruank/dbms",
    },
    {
      title: "Stock Transformers",
      description: "This project predicts stock prices using transformer models and Time2Vec encoding for time series forecasting. It compares LSTM, Transformer, and Informer models to determine the best-performing model for volatile and non-volatile stocks.",
      image: "",
      tech: ["Python", "Transformer", "Informer", "yFinance"],
      demo: "https://yashvimehta03.github.io/stock_transformers_docs/",
      github: "https://github.com/Ghruank/stocktransformers",
    },
    {
      title: "Traffic Signal Optimiser",
      description: "An AI traffic signal optimizer, which optimizes traffic signals at junctions for a smoother flow.",
      image: "",
      tech: ["Python", "PyGame", "YOLO"],
      demo: "",
      github: "https://github.com/Ghruank/AI_Traffic_Signal",
    },
    {
      title: "Legal Research Assistant",
      description: "A Legal Research Assistant which provides responses to legal queries, also helping in drafting legal documents",
      image: "",
      tech: ["NextJS", "ExpressJS" , "Flask"],
      demo: "",
      github: "https://github.com/Ghruank/Legal-Research-Assistant",
    },

  ]

  return (
    <div>
      <PageHeader title="Projects" />
      <div className="p-4">
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
                {project.image && (
                <div className="relative h-48">
                  <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover ${project.start ? 'object-top' : ''}`}
                  />
                </div>
                )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.demo && <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>}
                  <Button variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}