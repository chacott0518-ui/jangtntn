import type { Metadata } from 'next'
import {
  DEFAULT_DESCRIPTION,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from '@/lib/site-config'
import { keywordsForPath } from '@/lib/seo/keywords'

type BuildMetaInput = {
  path: string
  title: string
  description?: string
  keywords?: string[] | string
  ogImage?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

/** 페이지별 self-canonical + OG/Twitter를 SITE_URL 기준으로 생성 */
export function buildPageMetadata({
  path,
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  ogImage = OG_IMAGE_PATH,
  type = 'website',
  noIndex = false,
}: BuildMetaInput): Metadata {
  const url = absoluteUrl(path)
  const kw = keywords ?? keywordsForPath(path)

  return {
    title,
    description,
    keywords: kw,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'ko_KR',
      type,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export function rootMetadataBase(): URL {
  return new URL(SITE_URL)
}
