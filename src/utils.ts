import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './config';

export type Post = CollectionEntry<'blog'>;

// id вида "ru/vciom-oprosy" -> язык и слаг
export const langOf = (p: Post) => p.id.split('/')[0] as Lang;
export const slugOf = (p: Post) => p.id.split('/').slice(1).join('/');

export async function getPosts(lang: Lang) {
  const all = await getCollection('blog', (p) => !p.data.draft && langOf(p) === lang);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const formatDate = (d: Date) => d.toISOString().slice(0, 10);

export const readingTime = (body = '') => Math.max(1, Math.round(body.split(/\s+/).length / 200));
