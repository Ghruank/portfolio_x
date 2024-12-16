"use client"

import { Card } from "@/components/ui/card"
import { Code, Database, Globe, Palette, Computer, GitGraph, Languages } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function SkillsPage() {
  const skills = [
    {
      category: "Languages",
      icon: Languages,
      items: ["C++", "Python", "JavaScript"]
    },
    {
      category: "Frontend Development",
      icon: Palette,
      items: ["ReactJS", "NextJS", "Tailwind CSS" ],
    },
    {
      category: "Backend Development",
      icon: Code,
      items: ["NodeJS", "ExpressJS", "Flask", "REST APIs"],
    },
    {
      category: "Competitive Programming",
      icon: Computer,
      items: ["CodeChef: 3 Star", "Codeforces: 1000+ Rating"],
    },
    {
      category: "Machine Learning",
      icon: GitGraph,
      items: ["LSTMs", "Transformer Architecture", "Informer Architecture" ],
    },
    // {
    //   category: "Database",
    //   icon: Database,
    //   items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL"],
    // },
    {
      category: "Other Skills",
      icon: Globe,
      items: ["Git", "VS Code", "NVim", "WSL"],
    },
  ]

  return (
    <div>
      <PageHeader title="Skills & Expertise" />
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