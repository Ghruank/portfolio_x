"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Briefcase, Mail, FileText, Computer, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export default function MobileNav() {
  const pathname = usePathname()
  const [showText, setShowText] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false)
    }, 3000) 
    return () => clearTimeout(timer)
  }, [])

  const navigation = [
    { name: 'Profile', href: '/', icon: User },
    { name: 'Skills', href: '/skills', icon: Computer },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Achievements', href: '/achievements', icon: FileText },
  ]

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t md:hidden">
        <div className="flex justify-between items-center h-16 px-4">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full",
                  isActive && "text-primary"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </Link>
            )
          })}
        </div>
        <Link
          href="https://drive.google.com/file/d/1CdIV1Ef0d8o5sQLqNs-Tg6kcFLNOWXFu/view?usp=sharing"
          target="_blank"
          className={cn(
            "fixed bottom-20 right-4 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center z-50 transition-all duration-1000",
            showText ? "w-32 px-4" : "w-12"
          )}
        >
          <Leaf className="h-5 w-5" />
          {showText && <span className="ml-2">Resume</span>}
        </Link>
      </nav>
    </>
  )
}