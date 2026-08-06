import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBottomBar from '@/components/layout/MobileBottomBar'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0d7fc4',
}

export const metadata: Metadata = {
  // 1. 기본 주소를 현재 Vercel 주소로 변경
  metadataBase: new URL('https://jangtntn.vercel.app'), 
  title: '장튼튼항외과의원 | 김포 항문외과 대장항문 전문',
  description: '김포 구래역 1번 출구 장튼튼항외과의원. 치핵·치열·치루 등 대장항문질환과 대장·위내시경, 피부종양 및 기타 외과질환을 진료합니다.',
  keywords: '장튼튼항외과, 장튼튼항외과의원, 항문외과, 대장항문외과, 김포 항문외과, 김포 대장항문외과, 구래동 항문외과, 구래역 항문외과, 김포한강신도시 항문외과',
  openGraph: {
    title: '장튼튼항외과의원 | 김포 항문외과 대장항문 전문',
    description: '김포 구래역 1번 출구 장튼튼항외과의원. 치핵·치열·치루 등 대장항문질환과 대장·위내시경, 피부종양 및 기타 외과질환을 진료합니다.',
    url: 'https://jangtntn.vercel.app',
    siteName: '장튼튼항외과의원',
    // 3. 이미지 경로가 정확한지 다시 한번 확인 (/images/og-image.webp)
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '장튼튼항외과의원 | 김포 항문외과 대장항문 전문',
    description: '김포 구래역 1번 출구 장튼튼항외과의원. 치핵·치열·치루 등 대장항문질환과 대장·위내시경, 피부종양 및 기타 외과질환을 진료합니다.',
    images: ['/images/og-image.webp'],
  },
  alternates: {
    canonical: 'https://jangtntn.vercel.app',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: '장튼튼항외과의원',
  alternateName: '장튼튼항외과',
  url: 'https://jangtntn.vercel.app',
  logo: 'https://jangtntn.vercel.app/images/logo.png',
  image: 'https://jangtntn.vercel.app/images/og-image.webp',
  description: '김포 구래역 1번 출구 장튼튼항외과의원. 치핵·치열·치루 등 대장항문질환과 대장·위내시경, 피부종양 및 기타 외과질환을 진료합니다.',
  telephone: '031-987-7282',
  faxNumber: '031-981-7282',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '김포한강4로 507 계림M스퀘어 3층 308호',
    addressLocality: '김포시',
    addressRegion: '경기도',
    postalCode: '10086',
    addressCountry: 'KR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.6461191,
    longitude: 126.6275367,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '15:00',
    },
  ],
  medicalSpecialty: 'Surgery',
  availableService: [
    { '@type': 'MedicalProcedure', name: '치핵 수술' },
    { '@type': 'MedicalProcedure', name: '대장내시경' },
    { '@type': 'MedicalProcedure', name: '위내시경' },
    { '@type': 'MedicalProcedure', name: '치열 치료' },
    { '@type': 'MedicalProcedure', name: '치루 수술' },
  ],
  employee: {
    '@type': 'Physician',
    name: '한호선',
    jobTitle: '대표원장',
    medicalSpecialty: 'Surgery',
    description: '외과전문의. 중앙대학교 의과대학 졸업. 위·대장 내시경학회 인증의. 오랜 임상경험을 바탕으로 정확한 진단과 바른 진료를 시행합니다.',
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: '중앙대학교 의과대학' },
      { '@type': 'CollegeOrUniversity', name: '중앙대학교 의과대학원' },
    ],
  },
  hasMap: 'https://map.naver.com/p/entry/place/1152854964',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.83',
    reviewCount: '172',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
      <meta name="naver-site-verification" content="491f5bf4c9e1d5af641cce5ac3f47b9863d6f971" />
      <meta name="google-site-verification" content="iVUs-rUXvdFnYyvVaAhuHAdliuBoujmjyq3tyLV23Hc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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