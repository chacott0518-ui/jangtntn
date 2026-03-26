import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '수술실 안내 | 장튼튼항외과', description: '수술실 시설 안내.' }
export default function SurgeryRoomPage() {
  const items = [
    { title: '1인 수술실', desc: '독립된 공간에서 프라이버시를 철저히 보호합니다.' },
    { title: '최신 마취 장비', desc: '안전한 수술을 위한 최신 마취 모니터링 시스템.' },
    { title: '멸균 시스템', desc: '국제 기준에 맞는 의료기구 멸균 및 소독 관리.' },
    { title: '전용 회복실', desc: '수술 후 편안히 안정을 취할 수 있는 전용 회복실.' },
  ]
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80" alt="수술실 안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>수술실 안내</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">수술실 안내</h1>
          <p className="text-[16px] text-[#555]">청결하고 안전한 수술 환경</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map(item => (
          <div key={item.title} className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
            <h3 className="text-[17px] font-bold mb-2">{item.title}</h3>
            <p className="text-[14px] text-[#6b7280]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}