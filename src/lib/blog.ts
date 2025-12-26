import { getCollection, type CollectionEntry } from 'astro:content';

export const POSTS_PER_PAGE = 6;

export async function getSortedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export type BlogEntry = CollectionEntry<'blog'>;
