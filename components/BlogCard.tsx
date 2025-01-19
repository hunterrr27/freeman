/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    body: any;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const router = useRouter();

  // Get preview text from Rich Text content
  const getPreviewText = () => {
    if (!post.body?.content) return '';

    // Get all text nodes from the first paragraph
    const textNodes = post.body.content
      .find((node: { nodeType: string }) => node.nodeType === 'paragraph')
      ?.content
      .map((item: { value: string }) => item.value)
      .filter(Boolean)
      .join(' ') || '';

    // Limit to ~25 words and add ellipsis if needed
    const words = textNodes.split(' ');
    if (words.length > 25) {
      return words.slice(0, 25).join(' ') + '...';
    }
    return textNodes;
  };

  const preview = getPreviewText();

  const handleReadMore = () => {
    router.push(`/blog/${post.slug}`);
  };

  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {preview}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Additional content if needed */}
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className="w-full justify-between group"
          onClick={handleReadMore}
        >
          Read more
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}