import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '항문소양증 | 장튼튼항외과',
  description: '항문 주위의 지속적인 가려움증과 피부 자극. 장튼튼항외과 외과전문의 직접 진료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/pruritus' },
}

export default function Page() {
  const symptoms = ["항문 주위 심한 가려움증 (야간 악화)","긁은 후 피부 손상 및 2차 감염","항문 주위 발적·습진·태선화","분비물 증가로 인한 속옷 오염","수면을 방해할 정도의 가려움"]
  const treatments = [{"name":"원인 질환 교정","desc":"치핵·치루 등 항문 질환, 진균·요충 감염 등 원인을 먼저 치료합니다."},{"name":"위생 관리 교육","desc":"부드러운 화장지 사용, 세정 후 완전 건조, 자극 음식(커피·맥주·초콜릿) 제한."},{"name":"국소 스테로이드 연고","desc":"단기 사용으로 가려움과 염증을 완화합니다. 장기 사용은 피합니다."},{"name":"항히스타민제","desc":"야간 가려움이 심한 경우 복용하여 수면의 질을 개선합니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=85" alt="항문소양증 전문 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">항문소양증</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Anal Pruritus</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">항문소양증</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 주위의 지속적인 가려움증과 피부 자극</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 항문소양증이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">항문 주위 피부에 심한 가려움증이 반복되는 질환입니다. 긁으면 일시적으로 시원하지만 피부 손상 후 더욱 심해지는 악순환이 생깁니다. 성인 남성에서 더 흔하며 야간에 심해지는 경향이 있습니다. 원인이 다양하므로 정확한 진단이 중요합니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="항문소양증" fill className="object-cover" sizes="400px" />
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
          <p className="text-white font-black text-[16px] mb-2">항문소양증은 원인이 다양합니다. 자가 치료보다 전문의 진찰을 통해 원인을 파악하는 것이 중요합니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>
      </div>
    </div>
  )
}
