import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '대장항문센터 | 장튼튼항외과',
  description: '치핵·치열·치루·변비·항문소양증 등 대장항문 질환 전문 진료. 외과전문의 직접 진단.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal' },
}

const diseases = [
  { href: '/anorectal/hemorrhoid', title: '치핵(치질)', sub: '항문 주위 혈관이 늘어나 돌출되는 가장 흔한 항문 질환', icon: '🩸', tag: '가장 흔함' },
  { href: '/anorectal/fissure', title: '치열', sub: '항문 점막이 찢어져 배변 시 극심한 통증과 출혈이 발생', icon: '⚡', tag: '통증' },
  { href: '/anorectal/fistula', title: '치루', sub: '항문 주위 농양이 만성화되어 누공이 생기는 질환', icon: '🔴', tag: '수술 필요' },
  { href: '/anorectal/condyloma', title: '항문콘딜로마', sub: 'HPV 바이러스로 인한 항문 주위 사마귀성 병변', icon: '🦠', tag: '바이러스성' },
  { href: '/anorectal/constipation', title: '변비/설사', sub: '만성 변비·과민성 장증후군 등 배변 장애 전문 치료', icon: '💊', tag: '생활습관' },
  { href: '/anorectal/levator', title: '항문거근증후군', sub: '항문 주위 근육 긴장으로 인한 만성 골반 통증', icon: '⚕️', tag: '근육통' },
  { href: '/anorectal/pilonidal', title: '모소동', sub: '꼬리뼈 부위 모낭 감염으로 생기는 낭종 및 누공', icon: '🎯', tag: '수술' },
  { href: '/anorectal/pruritus', title: '항문소양증', sub: '항문 주위의 지속적인 가려움증 원인 진단 및 치료', icon: '🌿', tag: '가려움' },
]

export default function AnorectalPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80" alt="대장항문센터" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">대장항문센터</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">대장항문센터</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">외과전문의가 직접 진단하고 치료합니다</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {diseases.map((d) => (
            <Link key={d.href} href={d.href} className="group flex gap-4 p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-[22px]" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.1), rgba(13,148,136,0.1))' }}>{d.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-black text-[#0d1117]">{d.title}</h3>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">{d.tag}</span>
                </div>
                <p className="text-[12px] text-[#6b7280] leading-[1.7]">{d.sub}</p>
                <p className="text-[12px] font-bold text-primary mt-2 group-hover:translate-x-1 transition-transform">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
