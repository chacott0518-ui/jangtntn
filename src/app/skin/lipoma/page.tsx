import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '지방종 | 장튼튼항외과',
  description: '지방종 국소마취 당일 제거. 김포 구래역.',
  alternates: { canonical: 'https://www.jangtntnhang.com/skin/lipoma' },
}

export default function Page() {
  const symptoms = ["피부 아래 부드럽고 말랑한 혹이 만져짐","이동성이 있어 손으로 밀면 움직임","대부분 통증 없음","크기 2cm 이상이면 압박감 발생","감염 시 통증·발적·열감 동반"]
  const treatments = [{"name":"국소마취 후 절제","desc":"1~3cm 작은 절개로 지방종을 완전히 제거합니다. 당일 시술 후 봉합하고 귀가합니다."},{"name":"최소침습 절제","desc":"지방종보다 훨씬 작은 절개로 내부를 짜내는 방법. 흉터를 최소화합니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1600&q=85" alt="지방종" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 피부종양센터 / 지방종</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Lipoma</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">지방종</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">피부 아래 지방 세포가 뭉쳐 생기는 양성 종양</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 지방종이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">지방종은 피부 아래 지방 세포가 비정상적으로 증식하여 덩어리를 형성하는 양성 종양입니다. 등·목·어깨·팔·복부에 가장 흔하며, 부드럽고 이동성이 있습니다. 대부분 통증이 없으나 저절로 사라지지 않으므로 크기가 커지거나 불편감이 생기면 제거합니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="지방종" fill className="object-cover" sizes="400px" />
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
          <p className="text-white font-black text-[15px] mb-2">지방종은 감염 전에 제거하면 간단합니다. 크기가 커지기 전에 내원하세요.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
