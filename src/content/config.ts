import { defineCollection, z } from 'astro:content';

// Define the entries collection schema
const entriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Basic identification (slug is auto-generated from filename)
    type: z.enum(['project', 'work']),
    
    // Core information
    title: z.string(),
    role: z.string().optional(),
    org: z.string().optional(),
    location: z.string().optional(),
    
    // Timeline
    start: z.string().regex(/^\d{4}-\d{2}$/, {
      message: "Start date must be in YYYY-MM format"
    }),
    end: z.string().regex(/^\d{4}-\d{2}$/, {
      message: "End date must be in YYYY-MM format"
    }).nullable(),
    
    // Content
    summary: z.string().max(300, {
      message: "Summary should be concise (max 300 characters)"
    }),
    tags: z.array(z.string()),
    
    // External resources
    links: z.array(z.object({
      label: z.string(),
      url: z.string().url()
    })).default([]),
    
    // Achievements and metrics
    metrics: z.array(z.string()).default([]),
    
    // Visual assets
    images: z.object({
      hero: z.string().optional(),
      gallery: z.array(z.string()).default([])
    }).default({
      gallery: []
    }),
    
    // Optional metadata
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  })
});

// Export the collections
export const collections = {
  'entries': entriesCollection,
};
