"use client"

import { Card } from "@/components/ui/card"
import { Code, Database, Globe, Palette, Computer, GitGraph, Languages, DatabaseIcon, CircuitBoard, Brain, CandlestickChart, Cpu, Container } from "lucide-react"
import PageHeader from "@/components/page-header"
import { useMobileSidebar } from "@/components/mobile-sidebar-provider"

export default function SkillsPage() {
  const { toggle } = useMobileSidebar()
  
  const skills = [
    {
      category: "Languages",
      icon: Languages,
      items: ["C", "C++", "Python", "Go", "Rust", "Java", "JavaScript", "TypeScript", "SQL", "R"]
    },
    {
      category: "Quantitative Finance",
      icon: CandlestickChart,
      items: ["Options Pricing (Black-Scholes, Heston, Binomial)", "Monte Carlo Simulation", "Exotic Options", "Volatility Modelling (GARCH, FHS)", "Backtesting", "Model Risk Management"],
    },
    {
      category: "Systems & Low Latency",
      icon: Cpu,
      items: ["Matching Engines", "Latency Benchmarking", "Async I/O (Tokio)", "Network Programming (TCP Sockets)", "Post-Quantum Cryptography (ML-KEM)", "Bare-metal ARM"],
    },
    {
      category: "Frontend Development",
      icon: Palette,
      items: ["ReactJS", "NextJS", "SvelteKit", "Tailwind CSS", "ShadCN", "Capacitor"],
    },
    {
      category: "Backend Development",
      icon: Code,
      items: ["FastAPI", "Pydantic", "SQLAlchemy", "Flask", "SpringBoot", "ExpressJS"],
    },
    {
      category: "Database Management",
      icon: DatabaseIcon,
      items: ["SQL (PostgreSQL, MySQL, SQLite, Supabase)", "TimescaleDB", "Redis", "NoSQL (MongoDB, Firebase)"],
    },
    {
      category: "Data Engineering",
      icon: Database,
      items: ["Databricks", "PySpark", "Delta Lake", "Redpanda (Kafka)", "NumPy & pandas"],
    },
    {
      category: "Competitive Programming",
      icon: Computer,
      items: ["CodeChef: 3 Star", "Codeforces: Specialist", "2x ICPC Regionalist"],
    },
    {
      category: "Machine Learning",
      icon: GitGraph,
      items: ["PyTorch", "scikit-learn", "XGBoost & LightGBM", "SHAP", "Conformal Prediction", "Time Series Forecasting"],
    },
    {
      category: "Artificial Intelligence",
      icon: Brain,
      items: ["LLM Agents & Tool Calling (MCP)", "RAG & Information Retrieval", "Hugging Face Transformers", "Fine Tuning", "Prompt Engineering"],
    },
    {
      category: "DevOps",
      icon: Container,
      items: ["Docker", "Kubernetes (K3s)", "gVisor", "GitHub Actions", "pytest"],
    },
    // {
    //   category: "Database",
    //   icon: Database,
    //   items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL"],
    // },
    {
      category: "Hardware",
      icon: CircuitBoard,
      items: ["ESP32 (ESP-IDF, FreeRTOS)", "Bluetooth Low Energy", "Raspberry Pi", "Arduino", "ROS2"],
    },
    {
      category: "Other Skills",
      icon: Globe,
      items: ["Linux (Arch, NixOS)", "Git", "Nvim", "Latex", "CMake"],
    },
  ]

  return (
    <div>
      <PageHeader title="Skills & Expertise" onMenuClick={toggle} />
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <Card key={skill.category} className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="h-6 w-6" />
                  <h2 className="text-lg font-semibold">{skill.category}</h2>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}