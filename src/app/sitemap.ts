import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { SITEMAP_PATHS } from '@/lib/seo/routes'
import { indexableMagazineArticles, magazineAbsoluteUrl } from '@/lib/magazine'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = SITEMAP_PATHS.map((item) => ({
    url: item.path === '/' ? SITE_URL : `${SITE_URL}${item.path}`,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))

  for (const article of indexableMagazineArticles()) {
    const url = magazineAbsoluteUrl(article)
    if (!entries.some((e) => e.url === url)) {
      entries.push({
        url,
        lastModified: new Date(article.dateModified),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  }

  return entries
}
