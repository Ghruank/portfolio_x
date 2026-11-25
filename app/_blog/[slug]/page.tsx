import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import BlogPostClient from "./blog-post-client"

// Required for static export. With output: 'export' a dynamic route must
// generate at least one param, so fall back to a placeholder while there
// are no posts. It disappears as soon as a real post is added.
export async function generateStaticParams() {
  const posts = getAllBlogPosts()

  if (posts.length === 0) {
    return [{ slug: "coming-soon" }]
  }

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}