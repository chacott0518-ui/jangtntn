import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '피지낭종 | 장튼튼항외과',
  description: '피지낭종 당일 제거. 국소마취. 김포 구래역.',
  alternates: { canonical: 'https://www.jangtntnhang.com/skin/cyst' },
}

export default function Page() {
  const symptoms = ["피부 아래 단단하고 둥근 혹","중앙에 작은 검은 점(개구부) 보임","짜면 치즈 같은 냄새나는 내용물","감염 시 붓고 빨개지며 심한 통증","감염이 반복될수록 점점 더 크게 부음"]
  const treatments = [{"name":"낭종 절제술 (비감염기)","desc":"감염이 없는 상태에서 낭종 주머니째 완전히 제거. 흉터가 적고 재발률이 낮습니다."},{"name":"절개 배농 후 절제","desc":"감염 농양 시 먼저 배농 후, 염증 가라앉으면 낭종 주머니를 완전 절제합니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=85" alt="피지낭종" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 피부종양센터 / 피지낭종</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Epidermal Cyst</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">피지낭종</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">피지선이 막혀 피부 아래에 피지와 각질이 쌓이는 낭종</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 피지낭종이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">피지낭종(표피낭종)은 피지선 분비관이 막혀 피지와 각질이 피부 아래에 쌓이면서 주머니처럼 형성되는 낭종입니다. 얼굴·목·등·두피에 자주 발생하며, 중앙에 검은 점이 보이는 것이 특징입니다. 반드시 낭종 주머니째 완전히 제거해야 재발하지 않습니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="피지낭종" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🔍</span> 증상 및 진료 대상</h2>
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
          <p className="text-white font-black text-[15px] mb-2">피지낭종은 감염 전에 제거하면 훨씬 간단합니다. 혹이 발견되면 빨리 내원하세요.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
