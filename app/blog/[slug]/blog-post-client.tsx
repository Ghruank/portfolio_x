"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import { useMobileSidebar } from "@/components/mobile-sidebar-provider"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const router = useRouter()
  const { toggle } = useMobileSidebar()

  const handleBack = () => {
    router.push('/blog')
  }

  return (
    <div>
      <PageHeader title={post.title} onMenuClick={toggle} />
      <div className="p-4">
        <div className="mb-6">
          <Button
            onClick={handleBack}
            variant="ghost"
            size="sm"
            className="gap-2 mb-4 -ml-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
          
          <div className="mb-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">{post.description}</p>
            
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
          </div>
        </div>

        <Card className="p-6">
          <div 
            className="prose prose-slate dark:prose-invert max-w-none
                       prose-headings:font-semibold prose-headings:text-foreground
                       prose-p:text-foreground prose-p:leading-7
                       prose-strong:text-foreground prose-strong:font-semibold
                       prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                       prose-pre:bg-muted prose-pre:border prose-pre:border-border
                       prose-blockquote:text-muted-foreground prose-blockquote:border-l-border
                       prose-ul:text-foreground prose-ol:text-foreground
                       prose-li:text-foreground prose-li:marker:text-muted-foreground
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="language-$1 bg-muted p-4 rounded-lg border overflow-x-auto"><code>$2</code></pre>')
                .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>')
                .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-6 mb-3">$1</h3>')
                .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mt-8 mb-4">$1</h2>')
                .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>')
                .replace(/^\* (.*$)/gim, '<li class="ml-4">$1</li>')
                .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4">$2</li>')
                .replace(/\n\n/g, '</p><p class="mb-4">')
                .replace(/^(?!<[h|l|p])/gm, '<p class="mb-4">')
                .replace(/<\/p><p class="mb-4">(<[h|l])/g, '$1')
            }}
          />
        </Card>
      </div>
    </div>
  )
}