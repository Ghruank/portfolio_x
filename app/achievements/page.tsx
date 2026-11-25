"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import PageHeader from "@/components/page-header"
import FilterTabs from "@/components/filter-tabs"
import { useMobileSidebar } from "@/components/mobile-sidebar-provider"

const TABS = ["All", "CP", "Dev"] as const
type Tab = (typeof TABS)[number]
type Category = Exclude<Tab, "All">

const TAB_LABELS: Record<Tab, { label: string; shortLabel: string }> = {
  All: { label: "All", shortLabel: "All" },
  CP: { label: "Competitive Programming", shortLabel: "CP" },
  Dev: { label: "Development", shortLabel: "Dev" },
}

type Achievement = {
  title: string
  category: Category
  location: string
  date: string
}

export default function AchievementsPage() {
  const { toggle } = useMobileSidebar()
  const [activeTab, setActiveTab] = useState<Tab>("All")

  const achievements: Achievement[] = [
    {
      title: "VJTI x Cognext Hackathon Winner",
      category: "Dev",
      location: "VJTI",
      date: "Oct, 2026",
    },
    {
      title: "VJTI Codewiser Hackathon Runner Up",
      category: "Dev",
      location: "VJTI",
      date: "Apr, 2026",
    },
    {
      title: "KJSSE Datathon Winner",
      category: "Dev",
      location: "KJSSE",
      date: "Feb, 2026",
    },
    {
      title: "1st Place at TechXtreme Code Battle",
      category: "CP",
      location: "Jhunjhunwala College, Ghatkopar",
      date: "Jan, 2026",
    },
    {
      title: "3rd Place at CP++ (Summer Edition)",
      category: "CP",
      location: "SPIT",
      date: "Jan, 2026",
    },
    {
      title: "Code Uncode 2026 Finalist",
      category: "CP",
      location: "DJSCE",
      date: "2026",
    },
    {
      title: "ICPC 2025 Amritapuri Regionalist",
      category: "CP",
      location: "Amrita Vishwa Vidyapeetham, Amritapuri",
      date: "2025",
    },
    {
      title: "ICPC 2025 Kanpur Regionalist",
      category: "CP",
      location: "CSJMU Kanpur",
      date: "2025",
    },
        {
      title: "Crackathon Finalist",
      category: "Dev",
      // competitionName: "CodeUncode",
      location: "KJSCE",
      date: "October 15, 2025",
    },
            {
      title: "HackBuild Finalist",
      category: "Dev",
      // competitionName: "CodeUncode",
      location: "VIT Mumbai",
      date: "August 23, 2025",
    },
        {
      title: "CodeFolio Winner",
      category: "Dev",
      // competitionName: "CodeUncode",
      location: "SPIT",
      date: "Mar, 2025",
    },
    {
      title: "CodeUncode Finalist",
      category: "CP",
      // competitionName: "CodeUncode",
      location: "DJSCE",
      date: "Feb 23, 2025",
    },
    {
      title: "3rd place at CodeBuster CP contest",
      category: "CP",
      // competitionName: "CodeUncode",
      location: "SPIT",
      date: "Feb 23, 2025",
    },
    {
      title: "Awarded the Best UI/UX at SPIT Hackathon, 2025",
      category: "Dev",
      // competitionName: "CodeUncode",
      location: "SPIT",
      date: "Feb 8-9, 2025",
    },
    {
      title: "Winner of CodeVerse Competitions: Turing Test, Web3 CTF, Pixel (CV) and API Murder Mystery",
      category: "Dev",
      // competitionName: "CodeUncode",
      location: "VJTI",
      date: "Jan, 2025",
    },
    {
      title: "3rd Place at CodeCraft CP Contest",
      category: "CP",
      // competitionName: "CodeUncode",
      location: "Atharva College of Engineering",
      date: "Jan 4, 2025",
    },
    {
      title: "ICPC 2024 Chennai Regionalist",
      category: "CP",
      // competitionName: "CodeUncode",
      location: "IIITDM Kancheepuram, Chennai",
      date: "Jan 4, 2025",
    },
    {
      title: "Finalist among top 10 teams at Technovate Hackathon",
      category: "Dev",
      // competitionName: "CodeUncode",
      location: "SPIT",
      date: "Nov 11, 2024",
    },
    {
      title: "Best FY Team Award at HackXCelerate Hackathon",
      category: "Dev",
      // competitionName: "CodeUncode",
      location: "VJTI",
      date: "March, 2024",
    },
    {
      title: "Finalist among top 10 teams at VEGA Hackathon",
      category: "Dev",
      // competitionName: "CodeUncode",
      location: "SAKEC",
      date: "March 6-7, 2024",
    },
  ]

  return (
    <div>
      <PageHeader title="Achievements" onMenuClick={toggle}>
        <FilterTabs
          active={activeTab}
          onChange={setActiveTab}
          tabs={TABS.map((tab) => ({ value: tab, ...TAB_LABELS[tab] }))}
        />
      </PageHeader>
      <div className="p-4">
        <div className="grid gap-4">
          {achievements
            .filter((achievement) => activeTab === "All" || achievement.category === activeTab)
            .map((achievement) => (
            <Card key={achievement.title} className="p-2 hover:bg-accent/50 cursor-pointer">
              <h2 className="text-l font-semibold mb-1">{achievement.title}</h2>
              {/* <p className="text-muted-foreground mb-1">{achievement.competitionName}</p> */}
              <p className="text-muted-foreground mb-2">{achievement.location}</p>
              <div className="text-sm text-muted-foreground">
                {achievement.date}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}