import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '병원둘러보기 | 장튼튼항외과의원',
  description: '장튼튼항외과의원 실제 병원 시설 안내. 접수·대기·진료실·수술실·회복실·내시경실을 소개합니다.',
  openGraph: {
    title: '병원둘러보기 | 장튼튼항외과의원',
    description: '장튼튼항외과의원 실제 병원 시설 안내. 접수·대기·진료실·수술실·회복실·내시경실을 소개합니다.',
    url: 'https://www.jangtntnhang.com/about/tour',
    siteName: '장튼튼항외과의원',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: { canonical: 'https://www.jangtntnhang.com/about/tour' },
}

const GALLERY = [
  { src: '/images/tour/01-reception.webp', alt: '장튼튼항외과의원 접수안내', label: '접수안내' },
  { src: '/images/tour/02-waiting-area.webp', alt: '장튼튼항외과의원 대기공간', label: '대기공간' },
  { src: '/images/tour/03-consultation-room.webp', alt: '장튼튼항외과의원 진료실', label: '진료실' },
  { src: '/images/tour/04-operating-room.webp', alt: '장튼튼항외과의원 수술실', label: '수술실' },
  { src: '/images/tour/05-recovery-room.webp', alt: '장튼튼항외과의원 회복실', label: '회복실' },
  { src: '/images/tour/06-endoscopy-room.webp', alt: '장튼튼항외과의원 내시경실', label: '내시경실' },
]

export default function TourPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">

      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image
          src="/images/tour/02-waiting-area.webp"
          alt="장튼튼항외과의원 병원둘러보기"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-4 flex items-center gap-1.5">
            <span>홈</span>
            <span>/</span>
            <span>병원소개</span>
            <span>/</span>
            <span className="text-[#0d1117] font-bold">병원둘러보기</span>
          </nav>
          <h1 className="subpage-hero-title text-[28px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] tracking-[-0.02em] mb-2">
            병원둘러보기
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">
            실제 병원 시설 안내
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 section-space space-y-6">
        <section id="gallery">
          <h2 className="section-h2 text-[#0d1117] mb-5">병원 시설 갤러리</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-2xl group"
              style={{ aspectRatio: '4/3', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.22), transparent)' }}
              >
                <p className="text-white text-[14px] font-bold">{img.label}</p>
              </div>
            </div>
          ))}
          </div>
        </section>
      </div>
    </div>
  )
}
