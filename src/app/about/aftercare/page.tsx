import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '수술 후 관리 | 장튼튼항외과', description: '수술 후 관리 안내.' }
export default function AftercarePage() {
  const items = [
    { title: '1주 이내', desc: '수술 부위 청결 유지, 좌욕 1일 3회, 격렬한 운동 금지' },
    { title: '1~2주', desc: '가벼운 일상생활 가능, 금주·금연 권장, 정기 외래 방문' },
    { title: '2~4주', desc: '식이섬유 충분히 섭취, 변비 예방, 무리한 활동 자제' },
    { title: '1개월 이후', desc: '정상 생활 복귀 가능, 이상 증상 시 즉시 내원' },
  ]
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80" alt="수술 후 관리" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>수술 후 관리</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">수술 후 관리</h1>
          <p className="text-[16px] text-[#555]">빠른 회복을 위한 단계별 안내</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <div key={i} className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
            <p className="text-[12px] font-bold text-primary mb-1">STEP {i+1}</p>
            <h3 className="text-[17px] font-bold mb-2">{item.title}</h3>
            <p className="text-[14px] text-[#6b7280]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}