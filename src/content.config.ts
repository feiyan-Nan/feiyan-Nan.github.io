import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const docs = defineCollection({
	loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		category: z.string(),
		order: z.number().default(99),
	}),
});

export const collections = { docs };
