"use client"

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "sticky top-0 z-10 px-4 py-3 bg-background/80 backdrop-blur-md transition-all duration-200",
        isScrolled ? "border-b" : ""
      )}
    >
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  )
}