import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '항문콘딜로마 | 장튼튼항외과',
  description: 'HPV 바이러스 감염으로 인한 항문 주위 사마귀성 병변. 장튼튼항외과 외과전문의 직접 진료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/condyloma' },
}

export default function Page() {
  const symptoms = ["항문 주위 작은 구진 또는 융기","가려움증·불편감·배변 시 통증","항문 분비물 증가","병변이 커지면 출혈 발생","항문 내부 병변은 증상 없이 발견 지연"]
  const treatments = [{"name":"전기소작술","desc":"고주파 전류로 병변을 태워 제거. 외래에서 시행 가능합니다."},{"name":"레이저 치료","desc":"CO2 레이저로 병변을 정밀 제거. 상처가 작고 회복이 빠릅니다."},{"name":"외과적 절제","desc":"큰 병변 또는 넓은 범위에 적용. 근치적 제거가 가능합니다."},{"name":"약물 도포","desc":"이미퀴모드 크림 도포로 면역 반응을 유도합니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85" alt="항문콘딜로마 전문 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">항문콘딜로마</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Anal Condyloma</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">항문콘딜로마</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">HPV 바이러스 감염으로 인한 항문 주위 사마귀성 병변</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 항문콘딜로마이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">HPV(인유두종 바이러스) 감염으로 항문 주위에 사마귀 모양의 병변이 생기는 질환입니다. 성접촉을 통해 감염되며 잠복기는 3주~8개월로 다양합니다. 초기에는 작은 구진이지만 치료하지 않으면 닭벼슬 모양으로 커지고 퍼질 수 있습니다. 재발이 잦으므로 꾸준한 추적 관찰이 필요합니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="항문콘딜로마" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🔍</span> 주요 증상</h2>
          <ul className="space-y-2">
            {symptoms.map((s: string, i: number) => (
              <li key={i} className="flex gap-3 p-3 rounded-xl bg-[#f8fafb] text-[13px] text-[#374151] leading-[1.85]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 mt-0.5" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                {s}
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>⚕️</span> 치료 방법</h2>
          <div className="space-y-3">
            {treatments.map((t: {name:string;desc:string}, i: number) => (
              <div key={i} className="p-5 rounded-xl bg-[#f8fafb]">
                <h3 className="text-[14px] font-bold text-[#0d1117] mb-1.5">{t.name}</h3>
                <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">콘딜로마는 재발이 잦습니다. 치료 후 정기 추적 관찰이 반드시 필요합니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>
      </div>
    </div>
  )
}
