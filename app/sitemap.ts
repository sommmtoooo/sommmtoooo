import { getBlogPosts } from "app/blog/utils";

export const baseUrl = process.env.BASE_URL || "https://sommmtoooo.vercel.app";

export default async function sitemap() {
	let blogs = getBlogPosts().map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: post.metadata.publishedAt,
	}));

	let routes = ["", "/blog"].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...blogs];
}
