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
  keywords: '김포항문외과,김포치질,김포치질병원,김포치질수술,김포항문병원,김포외과,김포외과의원,김포대장항문외과,김포대장항문,구래동항문외과,구래동치질,구래동치질병원,구래동외과,구래동대장내시경,구래역항문외과,구래역치질,구래역외과,구래역대장내시경,구래역병원,김포대장내시경,김포위내시경,김포내시경,김포수면내시경,김포수면대장내시경,김포용종,김포대장암검진,김포위암검진,PPH수술김포,김포PPH,김포치핵수술,김포치핵,김포치열,김포치루,김포변비,김포항문소양증,김포콘딜로마,김포모소동,김포지방종,김포피지낭종,김포연성섬유종,김포내성발톱,김포화상치료,김포상처치료,김포영양수액,한호선원장,장튼튼항외과,장튼튼항외과김포,김포한강신도시항문외과,한강신도시외과,한강신도시치질,한강신도시대장내시경,김포골드라인병원,김포골드라인외과,구래역1번출구병원,계림M스퀘어병원,김포구래역병원,구래동병원,김포치핵치료,김포치핵병원,김포항문출혈,김포항문통증,김포항문가려움,김포배변통증,김포혈변,김포대장용종,김포대장암,김포위암,김포헬리코박터,김포역류성식도염,김포소화불량,김포복통,김포변혈,당일치질수술김포,당일수술김포,수면내시경김포,외과전문의김포,대장항문전문의김포,치질수술당일퇴원,PPH당일퇴원,김포항문외과추천,구래동항문외과추천,김포외과추천,김포내시경추천,김포치질잘하는곳,김포대장내시경잘하는곳,김포외과잘하는곳,치핵1도,치핵2도,치핵3도,치핵4도,내치핵,외치핵,혼합치핵,급성치열,만성치열,항문농양,항문누공,항문거근증후군,항문소양증치료,모소동수술,콘딜로마치료,용종절제술,EMR,ESD,대장내시경용종,위내시경검사,수면위내시경,헬리코박터제균,지방종제거,피지낭종제거,쥐젖제거,내성발톱수술,조모세포파괴술,영양수액치료,마늘주사,비타민C수액',
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
      <meta name="naver-site-verification" content="491f5bf4c9e1d5af641cce5ac3f47b9863d6f971" />
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