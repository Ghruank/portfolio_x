"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, Link as LinkIcon } from 'lucide-react';
import profile from '@/assets/gojohands.jpeg';
import background from '@/assets/marinedrive.jpg';
import PageHeader from '@/components/page-header';
import windows95 from '@/assets/windows95.png';
import arch from '@/assets/arch.png';
import mappaide from '@/assets/mappaide.png';
import Link from 'next/link';
import { useMobileSidebar } from '@/components/mobile-sidebar-provider';

export default function Home() {
  const { toggle } = useMobileSidebar()
  
  return (
    <div>
      <PageHeader title="Profile" onMenuClick={toggle} />
      <div className="relative h-48 bg-accent">
        <Image
          src={background}
          alt="Cover"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="px-4 pb-4">
        <div className="relative">
          <div className="absolute -top-16 left-4">
            <Image
              src={profile}
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-background"
            />
          </div>
          <div className="pt-16">
            {/* Profile content */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">Ghruank Kothare</h1>
                <p className="text-muted-foreground">@ghruank</p>
              </div>
            </div>
            
            <p className="mt-4">
              Pre-Final Year IT Student at VJTI Mumbai<br/>ICPC Regionalist<br/>specialization in ml but i do all kinds of stuff lol
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                VJTI Mumbai
              </div>
              <div className="flex items-center gap-1">
                <LinkIcon className="h-4 w-4" />
                <a href="https://ghruank.vercel.app" className="hover:text-primary">
                  ghruank.vercel.app
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' className="hover:underline underline-offset-2">
                  <p>
                  <span className="font-semibold">1</span>{" "}
                  <span className="text-muted-foreground">Following</span>
                  </p>
                </a>
              {/* <p>
                <span className="font-semibold">0</span>{" "}
                <span className="text-muted-foreground">Followers</span>
              </p> */}
            </div>
          </div>
        </div>

        {/* Mobile view content (About Me and Achievements) */}
        <div className="mt-8 grid gap-4 lg:hidden">
          <Card className="p-4">
            <h2 className="font-semibold mb-2">About Me</h2>
            <p className="text-sm text-muted-foreground">
              A fullstack developer with expertise in NextJS and FastAPI, a competitive programmer with immense curiosity in algorithm designing and a machine learning enthusiast.
            </p>
          </Card>
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-2">Featured Project</h2>
            <Image
              src={mappaide}
              alt="Project"
              width={600}
              height={300}
              className="rounded-lg mb-2"
            />
            <h3 className="font-semibold">Mappa IDE</h3>
            <p className="text-muted-foreground">
              An online real-time collaborative IDE with custom version control system, an inbuilt terminal and AI chatbot for code suggestions.
            </p>
          </Card>
          
          <Card className="p-4">
            <h2 className="font-semibold mb-2">Interests</h2>
            <ul className="space-y-2">
              <li className="text-sm hover:text-primary cursor-pointer">
Currently working on low level stuff like embedded programming and building a wrapper for CUDA to work on non nvdia architectures.              </li>
              <li className="text-sm hover:text-primary cursor-pointer">
              Love solving problems with algorithms and figuring out efficient ways to implement them.
              </li>
              <li className="text-sm hover:text-primary cursor-pointer">
              Typing at 120+ WPM on my ZBook, trying to push that even higher.
              </li>
              <li className="text-sm hover:text-primary cursor-pointer">
                Massive Jujutsu Kaisen manga fan, always down to chat about it.
              </li>
              <li className="text-sm hover:text-primary cursor-pointer">
              Oh, and yeah… I use Arch, btw.
              </li>
            </ul>
          </Card>

          <Card className="p-4 bg-transparent border-yellow-400/60 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300">
            <div className="text-center">
              <p className="text-xs text-yellow-700/90 leading-relaxed">
                This portfolio won the First Place at the CodeFolio Best Portfolio Competition at SPIT, March 2025
              </p>
            </div>
          </Card>

          {/* Featured Project for Mobile */}

        </div>

        <div className="mt-8 sm:hidden">
          <Card className="p-4 bg-accent text-center">
            <h2 className="font-semibold mb-2">Navigation Tips</h2>
            <p className="text-sm text-muted-foreground">
              Tap on the icons below to explore different sections of my portfolio. 
            </p>
          </Card>
        </div>

        {/* Desktop view content (Featured Project) */}
        <div className="mt-8 grid gap-4 hidden lg:grid">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-2">Featured Project</h2>
            <Image
              src={mappaide}
              alt="Project"
              width={600}
              height={300}
              className="rounded-lg mb-2"
            />
            <h3 className="font-semibold">Mappa IDE</h3>
            <p className="text-muted-foreground">
              An online real-time collaborative IDE with custom version control system, an inbuilt terminal and AI chatbot for code suggestions.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}