import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBottomBar from '@/components/layout/MobileBottomBar'
import {
  DEFAULT_DESCRIPTION,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from '@/lib/site-config'
import { keywordsForPath } from '@/lib/seo/keywords'
import { siteGraphLd } from '@/lib/seo/jsonld'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0d7fc4',
}

const homeKeywords = keywordsForPath('/')

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | 김포 항문외과 대장항문 전문`,
  description: DEFAULT_DESCRIPTION,
  keywords: homeKeywords,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    title: `${SITE_NAME} | 김포 항문외과 대장항문 전문`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: absoluteUrl(OG_IMAGE_PATH), width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | 김포 항문외과 대장항문 전문`,
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      'application/rss+xml': absoluteUrl('/rss.xml'),
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION ||
  process.env.NAVER_SITE_VERIFICATION ||
  process.env.BING_SITE_VERIFICATION
    ? {
        verification: {
          ...(process.env.GOOGLE_SITE_VERIFICATION
            ? { google: process.env.GOOGLE_SITE_VERIFICATION }
            : {}),
          other: {
            ...(process.env.NAVER_SITE_VERIFICATION
              ? { 'naver-site-verification': process.env.NAVER_SITE_VERIFICATION }
              : {}),
            ...(process.env.BING_SITE_VERIFICATION
              ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
              : {}),
          },
        },
      }
    : {}),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const graph = siteGraphLd()

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </head>
      <body className="font-pretendard">
        <Header />
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  )
}
