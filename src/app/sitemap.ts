import type { MetadataRoute } from 'next';
import { posts } from '@/data/blog';

const BASE_URL = 'https://www.benavidesrealestate.com';
const locales = ['es', 'en'] as const;

// Static routes per locale
const staticRoutes = [
  '', // homepage
  '/blog',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const route of staticRoutes) {
    entries.push({
      url: `${BASE_URL}/es${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'weekly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          es: `${BASE_URL}/es${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    });
  }

  // Blog posts
  for (const post of posts) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.updatedDate ?? post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            es: `${BASE_URL}/es/blog/${post.slug}`,
            en: `${BASE_URL}/en/blog/${post.slug}`,
          },
        },
      });
    }
  }

  return entries;
}
