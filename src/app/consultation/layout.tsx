import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '온라인 상담 예약 | 장튼튼항외과의원',
  description: '장튼튼항외과의원 온라인 상담 예약. 증상과 희망 일정을 남겨주시면 확인 후 안내드립니다.',
  openGraph: {
    title: '온라인 상담 예약 | 장튼튼항외과의원',
    description: '온라인 상담 예약. 확인 후 안내드립니다.',
    url: 'https://jangtntn.vercel.app/consultation',
    siteName: '장튼튼항외과의원',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '온라인 상담 예약 | 장튼튼항외과의원',
    description: '온라인 상담 예약. 확인 후 안내드립니다.',
    images: ['/images/og-image.webp'],
  },
  alternates: { canonical: 'https://jangtntn.vercel.app/consultation' },
}

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
