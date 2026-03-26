import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '영양 수액 | 장튼튼항외과',
  description: '피로 회복·면역력 강화 맞춤형 영양 수액. 당일 가능.',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery/nutrition' },
}

export default function Page() {
  const symptoms = ["만성 피로와 무기력감이 지속될 때","잦은 감기, 면역력이 저하된 경우","과로 후 빠른 컨디션 회복이 필요할 때","수술 전·후 영양 보충이 필요한 경우","비타민 결핍으로 인한 피부·모발 문제"]
  const treatments = [{"name":"기본 영양 수액","desc":"포도당·비타민B군·미네랄 포함. 빠른 피로 회복에 효과적입니다."},{"name":"고용량 비타민C 수액","desc":"항산화 효과, 면역력 강화, 피부 미백에 도움을 줍니다."},{"name":"마늘 주사 (아리나민)","desc":"티아민(비타민B1) 고함량 수액. 만성 피로·신경통·근육통에 효과적입니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1600&q=85" alt="영양 수액" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 기타외과질환 / 영양 수액</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Nutrition IV Therapy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">영양 수액</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">피로 회복과 면역력 강화를 위한 맞춤형 영양 수액</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 영양 수액이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">영양 수액 치료는 비타민·미네란·아미노산 등 필수 영양소를 정맥으로 직접 공급하는 치료입니다. 경구 복용보다 흡수율이 훨씬 높아 빠른 효과를 기대할 수 있습니다. 만성 피로, 면역력 저하, 빠른 컨디션 회복이 필요한 분들에게 효과적입니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="영양 수액" fill className="object-cover" sizes="400px" />
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
          <p className="text-white font-black text-[15px] mb-2">30~60분 내에 편안하게 받으실 수 있습니다. 당일 시술 가능합니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
