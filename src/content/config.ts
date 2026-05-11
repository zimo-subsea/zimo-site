import { defineCollection, z } from "astro:content";

const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()).min(3).max(6),
    requestUrl: z.string(),
    specs: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
    principles: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
    ),
  }),
});

export const collections = { products };
