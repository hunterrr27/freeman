// lib/contentful.ts
import { createClient, EntryFieldTypes } from 'contentful';

interface BlogPostFields {
  title: EntryFieldTypes.Text;
  body: EntryFieldTypes.RichText;
}

interface TypeBlogPost {
  contentTypeId: 'blogPage-2';
  fields: BlogPostFields;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CDA_ACCESS_TOKEN!,
});

export async function getPosts() {
  const response = await client.getEntries<TypeBlogPost>({
    content_type: 'blogPage-2',
    order: ['-sys.createdAt'],
  });

  return response.items;
}

export async function getPost(id: string) {
  try {
    const entry = await client.getEntry<TypeBlogPost>(id);
    return entry;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export type { BlogPostFields, TypeBlogPost };