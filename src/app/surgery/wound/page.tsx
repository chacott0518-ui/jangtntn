import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '상처 치료 | 장튼튼항외과',
  description: '급·만성 상처 전문 처치와 봉합. 외과전문의 직접 진료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery/wound' },
}

export default function Page() {
  const symptoms = ["출혈이 멈추지 않거나 깊이가 깊은 상처","흙·녹 등 이물질이 포함된 오염 상처","동물·사람에게 물린 상처","통증이 심하거나 감각이 없는 상처","수일 후에도 낫지 않고 고름이 생기는 경우"]
  const treatments = [{"name":"세척 및 변연 절제","desc":"상처 내 오염 물질과 괴사 조직을 완전히 제거하여 감염을 예방합니다."},{"name":"봉합술","desc":"상처 크기와 위치에 따라 단순·피하·특수 봉합을 시행합니다."},{"name":"습윤 드레싱","desc":"최신 드레싱 재료로 최적의 치유 환경을 제공합니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=85" alt="상처 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 기타외과질환 / 상처 치료</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Wound Care</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">상처 치료</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">급·만성 상처의 전문적 처치와 봉합</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 상처 치료이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">상처 치료는 단순 찰과상부터 깊은 열상, 만성 상처까지 외과전문의가 직접 처치하는 진료입니다. 적절한 시간 내에 제대로 처치하지 않으면 감염·흉터·기능 장애로 이어질 수 있습니다. 특히 손·발·관절 주변, 오염된 상처, 깊은 열상은 반드시 전문 처치가 필요합니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="상처 치료" fill className="object-cover" sizes="400px" />
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
          <p className="text-white font-black text-[15px] mb-2">상처는 골든타임 내에 올바른 처치가 흉터를 최소화합니다. 빨리 내원하세요.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
