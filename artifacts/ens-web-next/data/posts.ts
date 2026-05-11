// Blog posts are now managed via data/posts-db.json
// Use getPosts() / getPost() from @/lib/posts.server for all data access.

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

// Kept as empty fallback — do not use directly.
export const blogPosts: BlogPost[] = [];
