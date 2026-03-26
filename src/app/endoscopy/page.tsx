import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '내시경센터 | 장튼튼항외과',
  description: '위내시경·대장내시경·용종절제술. 수면 내시경으로 편안하게 받는 정밀 검사.',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy' },
}

const menus = [
  { href: '/endoscopy/gastro', title: '위내시경', sub: '식도·위·십이지장을 정밀하게 관찰하여 위암·위궤양·역류성식도염을 조기에 발견합니다.', icon: '🔬', tag: '수면가능' },
  { href: '/endoscopy/colon', title: '대장내시경', sub: '대장과 직장 전체를 관찰하여 대장암·대장폴립·염증성 장질환을 조기에 발견하고 치료합니다.', icon: '🏥', tag: '암예방' },
  { href: '/endoscopy/polyp', title: '용종 절제술', sub: '내시경 중 발견된 용종을 즉시 제거하는 시술로, 대장암 예방에 매우 효과적입니다.', icon: '✂️', tag: '즉시시술' },
]

export default function EndoscopyPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" alt="내시경센터" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">내시경센터</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">내시경센터</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">최신 장비로 정확하고 편안한 내시경 검사</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-5">
          {menus.map((m) => (
            <Link key={m.href} href={m.href} className="group flex gap-5 p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[26px]" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.1), rgba(13,148,136,0.1))' }}>{m.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[17px] font-black text-[#0d1117]">{m.title}</h3>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.tag}</span>
                </div>
                <p className="text-[13px] text-[#6b7280] leading-[1.8]">{m.sub}</p>
                <p className="text-[13px] font-bold text-primary mt-3 group-hover:translate-x-1 transition-transform">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
