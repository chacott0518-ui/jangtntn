import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '피부종양센터 | 장튼튼항외과',
  description: '지방종·피지낭종·섬유종 제거. 국소마취 후 당일 시술 가능한 안전하고 간단한 외래 수술.',
  alternates: { canonical: 'https://www.jangtntnhang.com/skin' },
}

const menus = [
  { href: '/skin/lipoma', title: '지방종', sub: '피부 아래에 지방 세포가 뭉쳐 형성되는 양성 종양으로, 국소마취 후 작은 절개로 간단히 제거할 수 있습니다.', icon: '🟡', tag: '당일시술' },
  { href: '/skin/cyst', title: '피지낭종 (표피낭종)', sub: '피지선이 막혀 피부 아래에 피지와 각질이 쌓이는 낭종. 염증 발생 전 제거가 중요합니다.', icon: '⚪', tag: '당일시술' },
  { href: '/skin/fibroma', title: '연성섬유종 (쥐젖)', sub: '마찰이 많은 부위에 생기는 양성 피부 종양. 전기소작 또는 절제로 간단히 치료합니다.', icon: '🟤', tag: '간단제거' },
]

export default function SkinPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80" alt="피부종양센터" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">피부종양센터</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">피부종양센터</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">국소마취 당일 시술, 안전하고 간단한 외래 수술</p>
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
