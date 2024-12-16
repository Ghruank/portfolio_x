"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Mail, FileText, Github, Twitter, Linkedin, Computer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Sidebar() {
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Profile', href: '/', icon: User },
    { name: 'Skills', href: '/skills', icon: Computer },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Blog', href: '/blog', icon: FileText },
  ];

  return (
    <div className="sticky top-0 h-screen w-[275px] hidden md:flex flex-col p-4">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Ghruank Kothare</h1>
          <ThemeToggle />
        </div>
        
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.name} href={item.href}>
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
            );
          })}
        </nav>
      </div>

      <div className="flex gap-2">
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
  );
}