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
  title: '장튼튼항외과 | 김포 항문외과 대장항문 전문',
  description: '김포 구래역 1번출구 장튼튼항외과. 외과전문의 한호선 원장. 치핵 치열 치루 대장내시경 PPH수술 전문',
  keywords: '김포항문외과,김포치질병원,김포치질수술,구래동항문외과,구래동치질병원,김포대장내시경,PPH수술김포',
  openGraph: {
    title: '장튼튼항외과 | 김포 항문외과 대장항문 전문',
    description: '김포 구래역 1번출구 장튼튼항외과. 외과전문의 한호선 원장. 치핵 치열 치루 대장내시경 PPH수술 전문',
    // 2. 여기도 실제 접속 주소로 일치시킴
    url: 'https://jangtntn.vercel.app', 
    siteName: '장튼튼항외과',
    // 3. 이미지 경로가 정확한지 다시 한번 확인 (/images/og-image.png)
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }], 
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '장튼튼항외과 | 김포 항문외과 대장항문 전문',
    description: '김포 구래역 1번출구 장튼튼항외과. 외과전문의 한호선 원장. 치핵 치열 치루 대장내시경 PPH수술 전문',
    images: ['/images/og-image.png'],
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
  url: 'https://www.jangtntnhang.com',
  logo: 'https://www.jangtntnhang.com/images/logo.png',
  image: 'https://www.jangtntnhang.com/images/hero.jpg',
  description: '김포 구래역 1번출구 장튼튼항외과. 외과전문의 한호선 원장. 치핵 치열 치루 대장내시경 PPH수술 전문',
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
    { '@type': 'MedicalProcedure', name: 'PPH 수술' },
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
    alumniOf: '중앙대학교 의과대학',
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