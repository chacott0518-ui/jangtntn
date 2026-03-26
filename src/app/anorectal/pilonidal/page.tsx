import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '모소동 | 장튼튼항외과',
  description: '꼬리뼈 부위 모낭 감염으로 생기는 낭종 및 누공. 장튼튼항외과 외과전문의 직접 진료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/pilonidal' },
}

export default function Page() {
  const symptoms = ["꼬리뼈 위쪽 정중선의 통증·부종·발적","구멍에서 분비물·고름 배출","급성 감염 시 심한 통증과 발열","만성기에는 간헐적 분비물 지속","앉거나 움직일 때 통증 악화"]
  const treatments = [{"name":"절개 배농","desc":"급성 농양기에 즉각적으로 고름을 배출하여 통증을 완화합니다."},{"name":"근치적 절제술","desc":"낭종과 누공 경로를 완전히 절제. 재발 예방에 가장 효과적입니다."},{"name":"피판 수술","desc":"Limberg flap 등 넓은 범위를 재건하는 수술법입니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=85" alt="모소동 전문 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">모소동</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Pilonidal Sinus</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">모소동</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">꼬리뼈 부위 모낭 감염으로 생기는 낭종 및 누공</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 모소동이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">모소동(Pilonidal Sinus)은 꼬리뼈 부위 피부 아래에 털이 박혀 들어가거나 모낭이 감염되면서 낭종과 누공이 형성되는 질환입니다. 20~30대 남성, 특히 털이 많고 장시간 앉아 있는 분들에게 많이 발생하며, 재발이 잦으므로 완전한 수술적 제거가 중요합니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="모소동" fill className="object-cover" sizes="400px" />
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
          <p className="text-white font-black text-[16px] mb-2">수술 후 해당 부위 제모와 청결 유지가 재발 예방의 핵심입니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>
      </div>
    </div>
  )
}
