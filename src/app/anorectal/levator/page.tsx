import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '항문거근증후군 | 장튼튼항외과',
  description: '항문 주위 근육 과긴장으로 인한 만성 골반 통증. 장튼튼항외과 외과전문의 직접 진료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/levator' },
}

export default function Page() {
  const symptoms = ["항문·직장 깊숙한 곳의 압박감·묵직함","오래 앉아 있을 때 심해지는 통증","배변 후 통증 악화","좌측 대퇴부·허리로 방사통","20분 이상 지속되는 반복적 직장 통증"]
  const treatments = [{"name":"바이오피드백 치료","desc":"항문 근육 이완 훈련. 1차 치료법으로 효과가 가장 우수합니다."},{"name":"전기 자극 치료","desc":"항문거근에 전기 자극으로 긴장된 근육을 이완시킵니다."},{"name":"보톡스 주입","desc":"근육에 직접 보톡스를 주입하여 과긴장을 완화합니다."},{"name":"약물 치료","desc":"근이완제·항우울제로 통증과 근긴장을 조절합니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85" alt="항문거근증후군 전문 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">항문거근증후군</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Levator Ani Syndrome</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">항문거근증후군</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 주위 근육 과긴장으로 인한 만성 골반 통증</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 항문거근증후군이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">항문거근(levator ani)이 과도하게 긴장하거나 경련을 일으켜 항문 주위 또는 직장 안쪽에 만성 통증이 발생하는 기능성 질환입니다. 기질적 원인 없이 생기는 경우가 많으며 스트레스·자세·정신적 긴장과 밀접합니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="항문거근증후군" fill className="object-cover" sizes="400px" />
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
          <p className="text-white font-black text-[16px] mb-2">항문거근증후군은 정확한 진단이 우선입니다. 유사 질환과의 감별이 중요합니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>
      </div>
    </div>
  )
}
