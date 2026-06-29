import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { CATEGORIES } from '../data/categories';

export const GET: APIRoute = async () => {
	const docs = await getCollection('docs');
	const index = docs.map((doc) => {
		const cat = CATEGORIES.find((c) => c.slug === doc.data.category);
		return {
			title: doc.data.title,
			category: doc.data.category,
			catName: cat?.name ?? doc.data.category,
			url: `/docs/${doc.data.category}/${doc.id.split('/').pop()}`,
		};
	});
	return new Response(JSON.stringify(index), {
		headers: { 'Content-Type': 'application/json' },
	});
};
