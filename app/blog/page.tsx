// app/blog/page.tsx
import { getPosts } from '@/lib/contentful';
import BlogCard from '@/components/BlogCard';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Latest Posts</h1>
        <p className="text-lg text-muted-foreground">
          Explore our latest thoughts, ideas, and insights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard 
            key={post.sys.id}
            post={{
              slug: post.sys.id,
              title: post.fields.title,
              body: post.fields.body,
            }}
          />
        ))}
      </div>
    </div>
  );
}