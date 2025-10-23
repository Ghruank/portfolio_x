"use client"

import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import PageHeader from "@/components/page-header"
import { useMobileSidebar } from "@/components/mobile-sidebar-provider"

export default function AchievementsPage() {
  const { toggle } = useMobileSidebar()
  
  const achievements = [
        {
      title: "Crackathon Finalist",
      // competitionName: "CodeUncode",
      location: "KJSCE",
      date: "October 15, 2025",
    },
            {
      title: "HackBuild Finalist",
      // competitionName: "CodeUncode",
      location: "VIT Mumbai",
      date: "August 23, 2025",
    },
        {
      title: "CodeFolio Winner",
      // competitionName: "CodeUncode",
      location: "SPIT",
      date: "Mar, 2025",
    },
    {
      title: "CodeUncode Finalist",
      // competitionName: "CodeUncode",
      location: "DJSCE",
      date: "Feb 23, 2025",
    },
    {
      title: "3rd place at CodeBuster CP contest",
      // competitionName: "CodeUncode",
      location: "SPIT",
      date: "Feb 23, 2025",
    },
    {
      title: "Awarded the Best UI/UX at SPIT Hackathon, 2025",
      // competitionName: "CodeUncode",
      location: "SPIT",
      date: "Feb 8-9, 2025",
    },
    {
      title: "Winner of CodeVerse Competitions: Turing Test, Web3 CTF, Pixel (CV) and API Murder Mystery",
      // competitionName: "CodeUncode",
      location: "VJTI",
      date: "Jan, 2025",
    },
    {
      title: "3rd Place at CodeCraft CP Contest",
      // competitionName: "CodeUncode",
      location: "Atharva College of Engineering",
      date: "Jan 4, 2025",
    },
    {
      title: "ICPC 2024 Chennai Regionalist",
      // competitionName: "CodeUncode",
      location: "IIITDM Kancheepuram, Chennai",
      date: "Jan 4, 2025",
    },
    {
      title: "Finalist among top 10 teams at Technovate Hackathon",
      // competitionName: "CodeUncode",
      location: "SPIT",
      date: "Nov 11, 2024",
    },
    {
      title: "Best FY Team Award at HackXCelerate Hackathon",
      // competitionName: "CodeUncode",
      location: "VJTI",
      date: "March, 2024",
    },
    {
      title: "Finalist among top 10 teams at VEGA Hackathon",
      // competitionName: "CodeUncode",
      location: "SAKEC",
      date: "March 6-7, 2024",
    },
  ]

  return (
    <div>
      <PageHeader title="Achievements" onMenuClick={toggle} />
      <div className="p-4">
        <div className="grid gap-4">
          {achievements.map((achievement) => (
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