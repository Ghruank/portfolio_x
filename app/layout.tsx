import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from '@/components/sidebar';
import RightSidebar from '@/components/right-sidebar';
import MobileNav from '@/components/mobile-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ghruank Kothare',
  description: 'Portfolio of Ghruank Kothare',
  icons: {
    icon: "/glogo2.png", // or "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="container mx-auto flex min-h-screen max-w-7xl gap-4">
            <Sidebar />
            <main className="flex-1 border-x border-border min-h-screen pb-16 md:pb-0">
              {children}
            </main>
            <RightSidebar />
          </div>
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}