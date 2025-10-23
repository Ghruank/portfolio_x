"use client"

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface PageHeaderProps {
  title: string
  onMenuClick?: () => void
}

export default function PageHeader({ title, onMenuClick }: PageHeaderProps) {
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
        "sticky top-0 z-10 px-4 py-3 bg-background/70 backdrop-blur-xl transition-all duration-200 supports-[backdrop-filter]:bg-background/60",
        isScrolled ? "border-b shadow-sm" : ""
      )}
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-2"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  )
}