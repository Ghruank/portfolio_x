import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, Link as LinkIcon } from 'lucide-react';
import profile from '@/assets/gojohands.jpeg';
import background from '@/assets/marinedrive.jpg';
import PageHeader from '@/components/page-header';
import windows95 from '@/assets/windows95.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <PageHeader title="Profile" />
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
              IT Sophomore at VJTI<br/>ICPC Regionalist
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                VJTI Mumbai
              </div>
              <div className="flex items-center gap-1">
                <LinkIcon className="h-4 w-4" />
                <a href="ghruank.vercel.app" className="hover:text-primary">
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
              A fullstack developer with expertise in NextJS and Flask, a competitive programmer with immense curiosity in algorithm designing and a machine learning enthusiast.
            </p>
          </Card>
          
          <Card className="p-4">
            <h2 className="font-semibold mb-2">Achievements</h2>
            <ul className="space-y-2">
              <li className="text-sm hover:text-primary cursor-pointer">
                Qualified for the ICPC'24 Chennai Regional.
              </li>
              <li className="text-sm hover:text-primary cursor-pointer">
                Won the Best FY award at the HackXCelerate Hackathon at VJTI, 2024.
              </li>
              <li className="text-sm hover:text-primary cursor-pointer">
                Top 10 at the Technovate Hackathon, SPIT, 2024.
              </li>
              <li className="text-sm hover:text-primary cursor-pointer">
                Top 10 at the Vega Hackathon, SAKEC, 2024.
              </li>
            </ul>
          </Card>
        </div>
        <div className="mt-8 sm:hidden">
          <Card className="p-4 bg-accent text-center">
            <h2 className="font-semibold mb-2">Navigation Tips</h2>
            <p className="text-sm text-muted-foreground">
              Tap on the icons below to explore different sections of my portfolio. You're dumb if you couldnt figure that out already.
            </p>
          </Card>
        </div>

        {/* Desktop view content (Featured Project) */}
        <div className="mt-8 grid gap-4 hidden lg:grid">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-2">Featured Project</h2>
            <Image
              src={windows95}
              alt="Project"
              width={600}
              height={300}
              className="rounded-lg mb-2"
            />
            <h3 className="font-semibold">Windows 95 Clone</h3>
            <p className="text-muted-foreground">
              An interface of Windows 95 built using Python Tkinter
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}