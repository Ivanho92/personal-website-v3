// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      isPublished: z.boolean(),
      title: z.string(),
      tags: z.array(z.string()),
      "live-url": z.string().url().optional(),
      "code-url": z.string().url().optional(),
      image: image().optional(),
      summary: z.string().optional(),
      concepts: z.array(z.string()).optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
};
