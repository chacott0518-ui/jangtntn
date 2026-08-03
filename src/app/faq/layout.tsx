import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '자주 묻는 질문 FAQ | 장튼튼항외과의원',
  description: '장튼튼항외과의원 FAQ. 치핵·내시경·예약·수술 후 관리 등 환자분들이 자주 묻는 질문을 모았습니다.',
  openGraph: {
    title: '자주 묻는 질문 FAQ | 장튼튼항외과의원',
    description: '치핵·내시경·예약·수술 후 관리 등 자주 묻는 질문.',
    url: 'https://jangtntn.vercel.app/faq',
    siteName: '장튼튼항외과의원',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '자주 묻는 질문 FAQ | 장튼튼항외과의원',
    description: '치핵·내시경·예약·수술 후 관리 등 자주 묻는 질문.',
    images: ['/images/og-image.webp'],
  },
  alternates: { canonical: 'https://jangtntn.vercel.app/faq' },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
