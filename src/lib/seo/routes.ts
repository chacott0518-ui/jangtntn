import { SITE_URL } from '@/lib/site-config'
import { indexableMagazineArticles, magazineAbsoluteUrl } from '@/lib/magazine'

/** sitemap에 포함할 indexable 공개 경로 (리다이렉트 /about 제외) */
export const SITEMAP_PATHS: { path: string; changeFrequency: 'weekly' | 'monthly'; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about/doctor', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about/info', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about/location', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about/surgery', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/about/aftercare', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about/tour', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/anorectal', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/anorectal/hemorrhoid', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/anorectal/fissure', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/anorectal/fistula', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/anorectal/pruritus', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/anorectal/condyloma', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/anorectal/levator', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/anorectal/pilonidal', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/anorectal/constipation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/endoscopy', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/endoscopy/gastro', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/endoscopy/colon', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/endoscopy/polyp', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/skin', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/skin/lipoma', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/skin/cyst', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/skin/fibroma', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/surgery', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/surgery/burn', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/surgery/nail', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/surgery/wound', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/surgery/nutrition', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/magazine', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/notice', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/notice/2026-summer-vacation', changeFrequency: 'weekly', priority: 0.55 },
  { path: '/consultation', changeFrequency: 'monthly', priority: 0.85 },
]

export function allIndexableUrls(): string[] {
  const urls = SITEMAP_PATHS.map((p) => (p.path === '/' ? SITE_URL : `${SITE_URL}${p.path}`))
  for (const article of indexableMagazineArticles()) {
    const u = magazineAbsoluteUrl(article)
    if (!urls.includes(u)) urls.push(u)
  }
  return Array.from(new Set(urls))
}
