"use client"

import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Globe } from "lucide-react"
import PageHeader from "@/components/page-header"
import FilterTabs from "@/components/filter-tabs"
import { useMobileSidebar } from "@/components/mobile-sidebar-provider"
import win95 from "@/assets/windows95.png"
import greenit from "@/assets/greenit.png"
import market from "@/assets/market.png"
import mappaterm from "@/assets/mappaterm.png"
import mappaide from "@/assets/mappaide.png"
import student from "@/assets/student.png"
import soulbuddy from "@/assets/soulbuddy.png"
import cognisphere from "@/assets/cognisphere.png"
import projectx from "@/assets/projectx.png"
import taskmanager from "@/assets/taskmanager.png"
import axiom from "@/assets/axiom.png"

const CATEGORIES = ["Quant Finance", "Software Development", "Systems"] as const
type Category = (typeof CATEGORIES)[number]
const TABS = ["All", ...CATEGORIES] as const
type Tab = (typeof TABS)[number]

const TAB_SHORT_LABELS: Record<Tab, string> = {
  All: "All",
  "Quant Finance": "Quant",
  "Software Development": "Software",
  Systems: "Systems",
}


type Project = {
  title: string
  category: Category
  date: string // project start date, YYYY-MM-DD, used for ordering
  description: string
  tech: string[]
  image?: StaticImageData | string
  start?: boolean
  demo?: string
  github?: string
}

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-US", { month: "short", year: "numeric" })

export default function ProjectsPage() {
  const { toggle } = useMobileSidebar()
  const [activeTab, setActiveTab] = useState<Tab>("All")

  const projects: Project[] = [
    {
      title: "KARMA",
      category: "Software Development",
      date: "2026-10-30",
      description: "A risk-bounded autonomous AI teammate for Paytm merchant support, built for the Paytm Build for India AI Hackathon finals. An LLM plans typed tool calls for money-moving problems like settlement retries, refunds and bank-detail changes, and a calibrated Blast-Radius Gate (a learned verifier over 21 signals with conformal risk control and an expected rupee loss rule) decides whether to act alone, ask for one tap, or hand off to a human. On a 750 case benchmark it cut wrong autonomous actions from 11.5% to 4.8% and harm from ₹64 to ₹1 per case, while still acting alone on 71% of cases. Also ships a multilingual prompt-injection guard, a hash-chained action ledger and a Hindi voice agent.",
      tech: ["Python", "FastAPI", "FastMCP", "scikit-learn", "ONNX Runtime", "Groq", "Gemini", "ElevenLabs", "React"],
    },
    {
      title: "ALPHA: Smart Knowledge Base",
      category: "Software Development",
      date: "2026-10-23",
      description: "A cited retrieval and answering engine for agents, built over large collections of versioned financial and regulatory PDFs like capital rules, accounting standards and annual reports. Won 1st place at CognitionNext '26. A version-aware document graph tells FY2024 from FY2025 and proposals from final rules, and a no-LLM coherence classifier re-judges LLM relevance verdicts in about 10 ms, reaching 3.7x the F1 of a hybrid RAG baseline at 0.955 recall.",
      tech: ["Python", "FastAPI", "PyMuPDF", "BM25", "Model2Vec", "LightGBM", "SQLite FTS5", "Groq", "Langfuse"],
      github: "https://github.com/Ghruank/smart_knowledge_base",
    },
    {
      title: "Option Selling Strategy Optimiser",
      category: "Quant Finance",
      date: "2026-08-09",
      description: "Picks the put-writing and covered-call strikes least likely to be exercised by comparing market-implied exercise probabilities against real-world ones from GARCH and filtered historical simulation. Across ~100k one-month options, 10-delta puts implied an 11.4% chance of exercise against 2.5% realised. Backtested over 2020 to 2025 on US, European, UK and Indian indices, the optimised strategy had the best Sharpe in all four markets with roughly half the exercise rate, with stress tests, Greeks attribution and a live strike scanner.",
      tech: ["Python", "NumPy", "pandas", "SciPy", "arch (GARCH)", "scikit-learn", "Streamlit", "Plotly"],
      github: "https://github.com/Ghruank/option-selling-strike-optimiser",
    },
    {
      title: "MAHA-GR-ALIGN",
      category: "Software Development",
      date: "2026-07-28",
      description: "AI-assisted drafting, alignment and conflict detection for Government of Maharashtra resolutions, built for the VJTI AI Hackathon. It parses Marathi GR text into a 17,283 node legal dependency graph with every edge backed by its verbatim evidence sentence, found 24 live GRs that depend on cancelled orders, and shows the blast radius before a GR is superseded. Runs fully on-prem with IndicTrans2 and Qwen via Ollama, plus template linting, bilingual terminology checks and a graph explorer.",
      tech: ["Python", "FastAPI", "PyTorch", "IndicTrans2", "Ollama", "React", "TypeScript", "Cytoscape.js"],
    },
    {
      title: "ZOR Text Editor",
      category: "Systems",
      date: "2025-10-25",
      description: "A terminal text editor written from scratch in C, in the style of kilo. Puts the terminal into raw mode with termios, disabling echo, canonical input, signals and output processing, and reads keypresses directly. Work in progress.",
      tech: ["C", "termios", "Make"],
      github: "https://github.com/Ghruank/zor-text-editor",
    },
    {
      title: "ESP32 BLE GATT Server",
      category: "Systems",
      date: "2025-10-06",
      description: "Firmware for the ESP32 that runs a BLE GATT server on FreeRTOS, handling GAP advertising, service and characteristic registration and client notification subscriptions, to push messages to a phone or browser over Bluetooth Low Energy. A companion web app receives them via Web Bluetooth.",
      tech: ["C", "ESP-IDF", "FreeRTOS", "Bluedroid"],
      github: "https://github.com/Ghruank/esp_ble",
    },
    {
      title: "ARM Bare-metal Kernel",
      category: "Systems",
      date: "2025-04-08",
      description: "A minimal bare-metal kernel for the Raspberry Pi 2/3. ARM assembly boot code parks secondary cores, sets up the stack and zeroes BSS before handing off to C, which drives the PL011 UART over memory-mapped I/O. Built with a custom linker script.",
      tech: ["C", "ARM Assembly", "Raspberry Pi", "Linker Scripts", "Make"],
      github: "https://github.com/Ghruank/arm_kernel",
    },
        {
      title: "Trading Bench",
      category: "Quant Finance",
      date: "2026-06-14",
      description: "A distributed platform for benchmarking trading matching engines under adversarial load. Contestants submit Go, Rust or C++ source, which is compiled and run inside a gVisor sandbox, then driven by a fleet of open-loop load bots across steady, stepup and spike profiles. Every fill is replayed against a reference FIFO matching engine for correctness, and a composite of latency, throughput and correctness streams to a live leaderboard. The measurement path is itself GC free end to end, with coordinated-omission correction and mergeable HdrHistograms, so the harness never becomes the bottleneck it is measuring.",
      // image: mappaide,
      tech: ["Go", "Rust (Tokio)", "SvelteKit", "gVisor", "Redpanda", "TimescaleDB", "Redis", "K3s"],
      start: true,
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/trading-bench",
    },
        {
      title: "Quantum IRC Chat",
      category: "Systems",
      date: "2026-04-17",
      description: "A terminal based IRC style messenger with end to end post-quantum encryption. Every session runs a fresh ML-KEM-768 (FIPS 203) key exchange, derives a session key via HKDF-SHA256 and encrypts messages with AES-256-GCM, leaving the server as a blind relay that only ever forwards opaque ciphertext. Private keys are generated and kept client side, so plaintext and session keys never touch the wire.",
      // image: mappaide,
      tech: ["C++20", "ML-KEM-768", "AES-256-GCM", "OpenSSL", "TCP Sockets", "CMake"],
      start: true,
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/irc-encrypted",
    },
        {
      title: "Axiom",
      category: "Software Development",
      date: "2026-04-03",
      image: axiom,
      description: "A cognitive-aware task scheduler that treats attention, not time, as the scarce resource. A deterministic engine scores tasks by cognitive load, deadline pressure and morning/afternoon/evening budgets, chunks long tasks across days, and exposes a reasoning chain explaining why each task was placed, deferred or dropped. Section weights are tuned over time from completion efficiency, and RAG based syllabus ingestion turns PDFs into schedulable study tasks.",
      // image: mappaide,
      tech: ["NextJS", "TypeScript", "Postgres", "Transformers.js", "Tesseract.js"],
      start: true,
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/Axiom",
    },
        {
      title: "KungFuTyper",
      category: "Software Development",
      date: "2026-02-16",
      description: "A 2.5D browser based typing game where you defend your keyboard's stability against bugs. You move the avatar by hitting keys, wiping out every bug along the path between them, and the run ends the moment stability drops to 0%.",
      // image: mappaide,
      tech: ["NextJS", "TypeScript", "Supabase", "LiveBlocks", "Tailwind CSS"],
      start: true,
      demo: "https://kungfutyper.vercel.app",
      github: "https://github.com/Ghruank/kungfutyper",
    },
        {
      title: "TrendFall",
      category: "Software Development",
      date: "2026-02-07",
      description: "A viral trend intelligence platform that ingests content from Instagram, Twitter, Reddit and YouTube, tags it with an LLM, and predicts whether a trend is exploding or fading using XGBoost and change point detection. Custom engagement and popularity formulas normalise metrics across platforms, and SHAP explains why a trend is moving, all surfaced on a dashboard of interactive timeseries reports.",
      // image: mappaide,
      tech: ["NextJS", "FastAPI", "XGBoost", "Ruptures", "Groq (Llama 3)", "Supabase"],
      start: true,
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/TrendFall",
    },
        {
      title: "StudySphere",
      category: "Software Development",
      date: "2025-08-20",
      description: "An offline-first native mobile app for iOS and Android that unifies a student's academic and career journey. Lessons, notes, quizzes and timetables work without internet and sync when back online, alongside personal dashboards, resume and mock interview tools, real time mentorship chat, LMS integrations, OCR timetable scanning and full screen reader support.",
      // image: mappaide,
      tech: ["NextJS", "Capacitor", "Supabase", "LiveBlocks"],
      start: true,
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/StudySphere",
    },
        {
      title: "CogniSphere",
      category: "Software Development",
      date: "2025-08-18",
      description: "An AI powered personal learning ecosystem that unifies roadmaps, lessons, assessments and tutoring into one adaptive platform. Learners upload notes, PDFs or PPTs and get AI generated courses, slides with speaker notes, flashcards and dynamic quizzes, along with a 3D Socratic tutor for doubt solving and roadmaps that adapt in real time to performance.",
      image: cognisphere,
      tech: ["NextJS", "React Native", "FastAPI", "Supabase", "ChromaDB", "Gemini 2.0 Flash"],
      start: true,
      demo: "https://launchpad-mappa-git-main-amal-vermas-projects.vercel.app/",
      github: "https://github.com/Ghruank/launchpad-Mappa",
    },
        {
      title: "Exotic Option Pricing Model",
      category: "Quant Finance",
      date: "2025-07-15",
      description: "A pricing model for exotic options such as Knock-In, Knock-Out, Barrier, Asian, Binary (Digital), LookBack and Chooser Options. Models such as Monte Carlo, Heston, Black-Scholes and Binomial.",
      // image: mappaide,
      tech: ["Python", "PyGame"],
      start: true,
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/exotic-option-pricing-model",
    },
        {
      title: "RAG Based Voice Assistant",
      category: "Software Development",
      date: "2025-06-13",
      description: "Conversational Audio-to-Text Neural Assistant which is essentially an emotionally intelligent voice assistant.",
      // image: mappaide,
      tech: ["Python", "ElevenLabs", "AWS"],
      start: true,
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/LenDenClub-VoiceBot",
    },
        {
      title: "Project X VJTI Website",
      category: "Software Development",
      date: "2025-05-28",
      description: "Website for Project X.",
      image: projectx,
      tech: ["NextJS", "FastAPI"],
      start: true,
      demo: "https://projectx2025.vercel.app/",
      github: "https://github.com/Ghruank/projectx",
    },
            {
      title: "EEG Data Analyser and Simulator",
      category: "Software Development",
      date: "2025-04-11",
      description: "A next-gen neural modeling platform that creates personalized Digital Brain Twins from EEG data, enabling clinicians to analyze, simulate, and predict neurological outcomes with AI-powered insights.",
      // image: mappaide,
      tech: ["NextJS", "FastAPI"],
      start: true,
      // demo: "https://projectx2025.vercel.app/",
      github: "https://github.com/Ghruank/EEG_Analyser_Simulator",
    },
                {
      title: "Task Manager",
      category: "Software Development",
      date: "2025-03-28",
      description: "A task management app built with React, Redux, and Webpack, allowing users to filter, categorize, prioritize, search, and reorder tasks via drag-and-drop. It supports due dates with notifications and ensures data persistence via a backend. Designed for a seamless and responsive user experience",
      image: taskmanager,
      tech: ["NextJS", "FastAPI"],
      start: true,
      demo: "https://jde-taskmanager.vercel.app/",
      github: "https://github.com/Ghruank/jde_taskmanager",
    },
    {
      title: "MappaIDE",
      category: "Software Development",
      date: "2025-02-08",
      description: "A real time collaborative IDE with repository system, inbuilt version control system, merge conflict resolver, and a chat system.",
      image: mappaide,
      tech: ["NextJS", "FastAPI", "LiveBlocks"],
      start: true,
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/mappa_for_ide",
    },
    {
      title: "Mappa for Terminal",
      category: "Software Development",
      date: "2025-02-02",
      description: "High powered voice controlled terminal assistant with inbuilt commands for git, docker, and other terminal commands.",
      image: mappaterm,
      tech: ["Python", "Llama 3.2", "Grok"],
      start: true,
      demo: "https://mappaforterminal.vercel.app",
      github: "https://github.com/Ghruank/mappa_for_terminal",
    },
    {
      title: "Windows 95 Virtual Machine",
      category: "Software Development",
      date: "2024-11-25",
      description: "A virtual machine (more or less a GUI clone) of the Windows 95 operating system, made entirely in Python Tkinter.",
      image: win95,
      tech: ["Python", "Tkinter"],
      // demo: "https://demo.com",
      github: "https://github.com/Ghruank/win95_vm_tkinter",
    },
    {
      title: "Soul Buddy: A Spiritual Guide",
      category: "Software Development",
      date: "2025-01-18",
      description: "SoulBuddy is an AI-driven platform designed to deliver personalized spiritual guidance through the ancient sciences of astrology and numerology. Our platform has kundali and horoscope generation, AI powered recommendations, spiritual content delivery and an interactive chatbot",
      image: soulbuddy,
      tech: ["NextJS", "Flask", "DataStax", "Langflow"],
      start: true,
      demo: "https://supermind-grll.vercel.app",
      github: "https://github.com/Ghruank/Soul_Buddy",
    },
    {
      title: "Eco-Tracker (GreenIt)",
      category: "Software Development",
      date: "2024-11-09",
      description: "An Eco-Tracker which tracks your daily activity (travel and footsteps) along with your electricity consumption with its distribution, and gives suggestions on how you can optimise yourself to be more eco friendly.",
      image: greenit,
      tech: ["NextJS", "Flask", "MongoDB", "REST API"],
      start: true,
      demo: "",
      github: "https://github.com/Ghruank/Eco-Tracker",
    },
    {
      title: "Marketing Assistant",
      category: "Software Development",
      date: "2024-10-25",
      description: "An AI based marketing assistant, which generates a message for marketing any product, based on the region, season and whether you want it the professional way or the \"genz\" way",
      image: market,
      tech: ["ReactJS", "Flask", "Meta AI", "Lllama 3.2"],
      demo: "",
      github: "https://github.com/Ghruank/marketing-assistant",
    },
    {
      title: "Student Registeration Portal",
      category: "Software Development",
      date: "2025-01-13",
      description: "A Full Fledged DBMS Project for student registeration, with SQL queries, triggers, and procedures.",
      image: student,
      tech: ["HTML", "GoLang", "MySQL"],
      start: true,
      demo: "https://ghruank.github.io/dbms/",
      github: "https://github.com/Ghruank/dbms",
    },
    {
      title: "Stock Transformers",
      category: "Quant Finance",
      date: "2024-07-17",
      description: "This project predicts stock prices using transformer models and Time2Vec encoding for time series forecasting. It compares LSTM, Transformer, and Informer models to determine the best-performing model for volatile and non-volatile stocks.",
      image: "",
      tech: ["Python", "Transformer", "Informer", "yFinance"],
      demo: "https://yashvimehta03.github.io/stock_transformers_docs/",
      github: "https://github.com/Ghruank/stocktransformers",
    },
    {
      title: "Traffic Signal Optimiser",
      category: "Software Development",
      date: "2024-08-26",
      description: "An AI traffic signal optimizer, which optimizes traffic signals at junctions for a smoother flow.",
      image: "",
      tech: ["Python", "PyGame", "YOLO"],
      demo: "",
      github: "https://github.com/Ghruank/AI_Traffic_Signal",
    },
    {
      title: "Legal Research Assistant",
      category: "Software Development",
      date: "2024-03-22",
      description: "A Legal Research Assistant which provides responses to legal queries, also helping in drafting legal documents",
      image: "",
      tech: ["NextJS", "ExpressJS" , "Flask"],
      demo: "",
      github: "https://github.com/Ghruank/Legal-Research-Assistant",
    },

  ]

  const visibleProjects = projects
    .filter((project) => activeTab === "All" || project.category === activeTab)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div>
      <PageHeader title="Projects" onMenuClick={toggle}>
        <FilterTabs
          active={activeTab}
          onChange={setActiveTab}
          tabs={TABS.map((tab) => ({ value: tab, label: tab, shortLabel: TAB_SHORT_LABELS[tab] }))}
        />
      </PageHeader>
      <div className="p-4">
        <div className="grid gap-6">
          {visibleProjects.map((project) => (
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
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-sm text-muted-foreground mb-2">
                  {project.category} · {formatDate(project.date)}
                </p>
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
                  {project.github && <Button variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}