import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '치루 | 장튼튼항외과',
  description: '치루 전문 치료. 항문 주위 농양과 누공. 외과전문의 수술. 김포 구래역.',
  keywords: '치루, 항문 농양, 항문 누공, 치루 수술',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/fistula' },
}

export default function FistulaPage() {
  const treatments = [
    {name:'누공 절개술', badge:'저위 치루', desc:'누공 경로를 완전히 열어 제거합니다. 단순 저위 치루에 가장 많이 사용하며 치유율이 높습니다.'},
    {name:'Seton법', badge:'고위 치루', desc:'괄약근을 많이 침범한 경우 실을 통과시켜 서서히 절개합니다. 변실금 위험을 최소화합니다.'},
    {name:'점막 전진 피판술', badge:'복잡 치루', desc:'누공 내공을 막고 정상 점막으로 덮는 방법. 복잡 치루·재발 치루에 사용됩니다.'},
  ]
  const symptoms = [
    '항문 주위 피부에서 고름·분비물이 지속적으로 나옴',
    '항문 주위 통증, 불쾌감, 부종이 반복됨',
    '누공 입구 부위 피부 함몰 또는 구멍이 보임',
    '발열·오한이 동반되기도 함',
    '분비물로 인한 항문 소양증 및 피부 짓무름',
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&q=85" alt="치루 전문 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">치루</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Anal Fistula</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">치루</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 주위 농양에서 발전하는 만성 누공 질환</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 치루란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>치루는 항문샘에 세균이 침입하여 항문 주위 농양이 형성되고, 이 농양이 터지면서 항문 내부와 항문 주위 피부를 연결하는 <strong className="text-[#0d7fc4]">비정상적인 터널(누공)</strong>이 생긴 상태입니다.</p>
              <p>치루는 저절로 낫지 않으며 반드시 수술로 제거해야 합니다. 방치하면 누공이 더 복잡하게 진행됩니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="치루 수술" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🔍</span> 주요 증상</h2>
          <ul className="space-y-2">
            {symptoms.map((s, i) => (
              <li key={i} className="flex gap-3 p-3 rounded-xl bg-[#f8fafb] text-[13px] text-[#374151] leading-[1.85]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 mt-0.5" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                {s}
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>⚕️</span> 수술 방법</h2>
          <div className="space-y-3">
            {treatments.map((t) => (
              <div key={t.name} className="p-5 rounded-xl bg-[#f8fafb]">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[14px] font-bold text-[#0d1117]">{t.name}</h3>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t.badge}</span>
                </div>
                <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치루는 수술로만 완치됩니다</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">항문 주위에서 분비물이 나온다면 즉시 내원하세요.<br />조기 수술일수록 범위가 작고 회복이 빠릅니다.</p>
        </div>
      </div>
    </div>
  )
}
