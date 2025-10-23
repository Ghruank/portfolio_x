"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import PageHeader from "@/components/page-header"
import { useMobileSidebar } from "@/components/mobile-sidebar-provider"
import { getAllBlogPosts } from "@/lib/blog-data"
import Link from "next/link"

export default function BlogPage() {
  const { toggle } = useMobileSidebar()
  const posts = getAllBlogPosts()

  return (
    <div>
      <PageHeader title="Blog" onMenuClick={toggle} />
      <div className="p-4">
        <div className="grid gap-4">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="p-4 hover:bg-accent/50 cursor-pointer transition-colors">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}