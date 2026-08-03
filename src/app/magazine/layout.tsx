import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '건강매거진 | 장튼튼항외과의원',
  description: '장튼튼항외과의원 건강매거진. 항문·대장·내시경 관련 건강 정보를 안내합니다.',
  openGraph: {
    title: '건강매거진 | 장튼튼항외과의원',
    description: '항문·대장·내시경 관련 건강 정보.',
    url: 'https://jangtntn.vercel.app/magazine',
    siteName: '장튼튼항외과의원',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '건강매거진 | 장튼튼항외과의원',
    description: '항문·대장·내시경 관련 건강 정보.',
    images: ['/images/og-image.webp'],
  },
  alternates: { canonical: 'https://jangtntn.vercel.app/magazine' },
}

export default function MagazineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
