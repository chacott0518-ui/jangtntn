import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '진료안내 | 장튼튼항외과의원',
  description: '장튼튼항외과의원 진료시간·예약·오시는 길 안내. 김포 구래역 1번출구.',
  openGraph: {
    title: '진료안내 | 장튼튼항외과의원',
    description: '진료시간·예약·오시는 길 안내. 김포 구래역 1번출구.',
    url: 'https://jangtntn.vercel.app/about/info',
    siteName: '장튼튼항외과의원',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '진료안내 | 장튼튼항외과의원',
    description: '진료시간·예약·오시는 길 안내. 김포 구래역 1번출구.',
    images: ['/images/og-image.webp'],
  },
  alternates: { canonical: 'https://jangtntn.vercel.app/about/info' },
}

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
