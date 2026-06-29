import type { APIRoute } from 'astro';
import { getCollection, render } from 'astro:content';
import { CATEGORIES } from '../data/categories';

export const GET: APIRoute = async () => {
	const docs = await getCollection('docs');
	const index = await Promise.all(
		docs.map(async (doc) => {
			const cat = CATEGORIES.find((c) => c.slug === doc.data.category);
			const { remarkPluginFrontmatter } = await render(doc);
			const body = (doc as any).body ?? '';
			// 提取纯文本：去掉 frontmatter、代码块、HTML 标签、图片、链接语法
			const text = body
				.replace(/^---[\s\S]*?---\n*/m, '')
				.replace(/```[\s\S]*?```/g, '')
				.replace(/`[^`]*`/g, '')
				.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
				.replace(/\[[^\]]*\]\([^)]*\)/g, (m: string) => m.replace(/\[([^\]]*)\]\([^)]*\)/, '$1'))
				.replace(/<[^>]+>/g, '')
				.replace(/[#*>\-|=~_]/g, ' ')
				.replace(/\s+/g, ' ')
				.trim()
				.slice(0, 500);
			return {
				title: doc.data.title,
				category: doc.data.category,
				catName: cat?.name ?? doc.data.category,
				url: `/docs/${doc.data.category}/${doc.id.split('/').pop()}`,
				text,
			};
		})
	);
	return new Response(JSON.stringify(index), {
		headers: { 'Content-Type': 'application/json' },
	});
};
