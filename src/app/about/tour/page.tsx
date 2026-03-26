import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '병원둘러보기 | 장튼튼항외과',
  description: '장튼튼항외과 시설 안내. 쾌적한 진료 환경과 최신 의료 장비를 갖추고 있습니다.',
  openGraph: {
    title: '병원둘러보기 | 장튼튼항외과',
    description: '장튼튼항외과 시설 안내. 쾌적한 진료 환경과 최신 의료 장비.',
    url: 'https://www.jangtntnhang.com/about/tour',
    siteName: '장튼튼항외과',
    images: [{ url: 'https://www.jangtntnhang.com/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: { canonical: 'https://www.jangtntnhang.com/about/tour' },
}

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80', alt: '로비 및 접수' },
  { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80', alt: '대기실' },
  { src: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80', alt: '진료실' },
  { src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80', alt: '수술실' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80', alt: '회복실' },
  { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80', alt: '내시경실' },
]

export default function TourPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">

      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
          alt="병원둘러보기"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4 flex items-center gap-1.5">
            <span>홈</span>
            <span>/</span>
            <span>병원소개</span>
            <span>/</span>
            <span className="text-[#0d1117] font-bold">병원둘러보기</span>
          </nav>
          <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] tracking-[-0.02em] mb-2">
            병원둘러보기
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">
            쾌적한 진료 환경과 최신 의료 장비
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY.map((img) => (
            <div
              key={img.alt}
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
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)' }}
              >
                <p className="text-white text-[14px] font-bold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}