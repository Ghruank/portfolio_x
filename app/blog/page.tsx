import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function BlogPage() {
  const posts = [
    {
      title: "This page is still under construction",
      excerpt:
        "why are you here?",
      date: "December 13, 2024",
      readTime: "1 min read",
    },
    // {
    //   title: "The Power of Server Components",
    //   excerpt:
    //     "Explore the benefits of React Server Components and how they improve application performance.",
    //   date: "Feb 10, 2024",
    //   readTime: "8 min read",
    // },
    // {
    //   title: "Mastering TypeScript in 2024",
    //   excerpt:
    //     "A comprehensive guide to TypeScript features and best practices for modern web development.",
    //   date: "Feb 5, 2024",
    //   readTime: "12 min read",
    // },
  ]

  return (
    <div>
      <PageHeader title="Blog" />
      <div className="p-4">
        <div className="grid gap-4">
          {posts.map((post) => (
            <Card key={post.title} className="p-4 hover:bg-accent/50 cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <span>{post.readTime}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}