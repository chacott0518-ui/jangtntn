import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site-config'
import { indexableMagazineArticles, magazineAbsoluteUrl } from '@/lib/magazine'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function GET() {
  const articles = indexableMagazineArticles()
  const items = articles
    .map((article) => {
      const link = magazineAbsoluteUrl(article)
      return `  <item>
    <title>${escapeXml(article.title)}</title>
    <link>${escapeXml(link)}</link>
    <guid isPermaLink="true">${escapeXml(link)}</guid>
    <pubDate>${new Date(article.datePublished).toUTCString()}</pubDate>
    <description>${escapeXml(article.description)}</description>
    <author>${escapeXml(SITE_NAME)}</author>
  </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${SITE_NAME} 건강매거진`)}</title>
    <link>${escapeXml(absoluteUrl('/magazine'))}</link>
    <description>${escapeXml(`${SITE_NAME} 건강 정보 매거진`)}</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
