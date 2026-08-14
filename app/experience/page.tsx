"use client"

import { Card } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import PageHeader from "@/components/page-header"
import { useMobileSidebar } from "@/components/mobile-sidebar-provider"

export default function ExperiencePage() {
  const { toggle } = useMobileSidebar()

  const experiences = [
    {
      company: "Goldman Sachs",
      role: "Summer Analyst, Risk Division (Model Risk Management)",
      location: "Hyderabad, India",
      date: "May 2026 – July 2026",
      points: [
        "Built a two-layer agentic LLM system in Python and Spring Boot that verifies whether a documented change to a pre-trade risk control matches the underlying control code, flagging match/mismatch correctly on 96% of changes.",
        "Automated detection of code changes capable of altering trading controls via a React and FastAPI tool, gating affected merges on approval and cutting triage from 5 hours to 10 minutes.",
        "Gained exposure to controls mitigating critical and common risks in electronic trading activities, including pre-trade risk checks, order-to-trade ratio limits, and market access controls, while reviewing their implementation across trading systems.",
      ],
    },
  ]

  return (
    <div>
      <PageHeader title="Experience" onMenuClick={toggle} />
      <div className="p-4">
        <div className="grid gap-4">
          {experiences.map((experience) => (
            <Card key={experience.company} className="p-4 hover:bg-accent/50">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="text-lg font-semibold">{experience.company}</h2>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {experience.date}
                </div>
              </div>
              <p className="text-muted-foreground mt-1">{experience.role}</p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </div>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                {experience.points.map((point) => (
                  <li key={point} className="text-sm text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
