import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    readTime: z.number().int().min(1),
    tags: z.array(z.string()).default([]),
    difficulty: z.number().int().min(1).max(5).default(3),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };
