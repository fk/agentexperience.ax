import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    category: z.literal('articles'),
    external_link: z.string().optional(),
    category_order: z.number().optional().default(0),
    category_icon: z.string().optional(),
  }),
});

const research = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    category: z.literal('research'),
    external_link: z.string().optional(),
    category_order: z.number().optional().default(0),
    category_icon: z.string().optional(),
  }),
});

const guides = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    category: z.literal('guides'),
    external_link: z.string().optional(),
    category_order: z.number().optional().default(0),
    category_icon: z.string().optional(),
  }),
});

const concepts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    category: z.literal('concepts'),
    external_link: z.string().optional(),
    category_order: z.number().optional().default(0),
    category_icon: z.string().optional(),
  }),
});

export const collections = {
  'articles': articles,
  'research': research,
  'guides': guides,
  'concepts': concepts,
};