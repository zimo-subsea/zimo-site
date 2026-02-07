import { defineCollection, z } from "astro:content";

const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).min(4).max(6),
    docsUrl: z.string().url(),
    requestUrl: z.string(),
    media: z.object({
      hero: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      detail: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      video: z.object({
        src: z.string(),
        poster: z.string().optional(),
        caption: z.string().optional(),
      }),
      model: z.object({
        src: z.string(),
        poster: z.string().optional(),
        alt: z.string().optional(),
      }),
    }),
    highlights: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .min(4)
      .max(6),
    radar: z
      .array(
        z.object({
          label: z.string(),
          value: z.number().min(0).max(10),
        }),
      )
      .min(4)
      .max(8),
  }),
});

export const collections = { products };
