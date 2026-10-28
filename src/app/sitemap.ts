import type { MetadataRoute } from 'next';
import { MAIN_NAV } from '@/constants/nav';
import { SITE_URL } from '@/constants/site';
import { postService } from '@/features/news/post.service';
import { safe } from '@/lib/safe';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await safe(() => postService.slugs(), []);
  return [
    ...MAIN_NAV.map((n) => ({ url: `${SITE_URL}${n.href === '/' ? '' : n.href}` })),
    ...slugs.map((s) => ({ url: `${SITE_URL}/news/${s}` })),
  ];
}
