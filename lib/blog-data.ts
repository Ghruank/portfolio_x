export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "iusearchbtw",
    title: "welcome to my blog",
    description: "finally got this thing working",
    date: "December 13, 2024",
    readTime: "1 min read",
    content: `
    if youre seeing this have a nice day. 
    `
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}