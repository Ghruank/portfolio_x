"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Briefcase, Mail, FileText, Computer } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function MobileNav() {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'Profile', href: '/', icon: User },
    { name: 'Skills', href: '/skills', icon: Computer },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Blog', href: '/blog', icon: FileText },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t md:hidden">
      <div className="flex justify-around items-center h-16">
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
              <Icon className="h-6 w-6" />
              <span className="sr-only">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}