import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { LANGS, SITE, T, type Lang } from '../../config';
import { getPosts, slugOf, url } from '../../utils';

export function getStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const posts = await getPosts(lang);
  return rss({
    title: `${T[lang].blogTitle} | ${SITE.author[lang]}`,
    description: T[lang].blogLead,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: url(`${lang}/${slugOf(post)}/`),
    })),
  });
}
