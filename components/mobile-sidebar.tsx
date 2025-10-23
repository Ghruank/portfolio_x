"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { User, Computer, Briefcase, Mail, FileText, Github, Twitter, Linkedin, Leaf, X, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import profile from '@/assets/gojohands.jpeg'

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'Profile', href: '/', icon: User },
    { name: 'Skills', href: '/skills', icon: Computer },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Achievements', href: '/achievements', icon: FileText },
  ]

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 h-full w-[275px] bg-background/70 backdrop-blur-xl border-r z-50 transform transition-transform duration-300 ease-in-out md:hidden supports-[backdrop-filter]:bg-background/60",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full p-4">
          {/* Profile Section */}
          <div className="flex items-center mb-6 pb-4 border-b">
            <div className="relative mr-3">
              <Image
                src={profile}
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">Ghruank Kothare</h2>
              <p className="text-sm text-muted-foreground">@ghruank</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="space-y-6 flex-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.name} href={item.href} onClick={handleLinkClick}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-4 text-lg font-semibold",
                      pathname === item.href && "bg-accent"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}
            
            <Button
              variant="default"
              className="w-full justify-center gap-4 text-lg font-semibold bg-blue-500 text-white rounded-full"
              asChild
              onClick={handleLinkClick}
            >
              <Link href="https://drive.google.com/file/d/1CdIV1Ef0d8o5sQLqNs-Tg6kcFLNOWXFu/view?usp=sharing" target="_blank">
                <Leaf className="h-5 w-5" />
                Resume
              </Link>
            </Button>
          </nav>

          <div className="flex gap-2 mt-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/ghruank" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com/ghruank" target="_blank">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/ghruank" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}