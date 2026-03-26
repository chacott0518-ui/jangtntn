import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '변비·설사 | 장튼튼항외과',
  description: '만성 변비·설사 전문 치료. 원인 정확히 진단. 김포 구래역.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/constipation' },
}

export default function ConstipationPage() {
  const causes = [
    {title:'식이섬유 부족', desc:'채소·과일·통곡물 섭취 부족으로 대변이 딱딱해집니다.'},
    {title:'수분 부족', desc:'하루 수분 섭취가 1L 미만이면 변비가 쉽게 생깁니다.'},
    {title:'운동 부족', desc:'신체 활동이 적으면 장 운동도 함께 느려집니다.'},
    {title:'배변 억제', desc:'바쁘다는 이유로 배변을 자꾸 참으면 직장 감각이 무뎌집니다.'},
    {title:'약물 부작용', desc:'철분제·진통제·항우울제 등이 변비를 유발합니다.'},
    {title:'전신 질환', desc:'갑상선 기능저하증·당뇨 등이 원인이 되기도 합니다.'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=85" alt="변비 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">변비·설사</strong></nav>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">변비 · 설사</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">만성 배변 장애 · 정확한 원인 진단</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 변비란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>일주일에 배변 횟수가 <strong className="text-[#0d7fc4]">3회 미만</strong>이거나, 배변 시 과도한 힘이 필요하거나, 잔변감이 자주 있는 상태를 만성 변비라고 합니다.</p>
              <p>단순한 불편함을 넘어 치핵·치열·대장 질환의 주요 원인이 됩니다. 정확한 원인 파악이 치료의 핵심입니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'180px'}}>
              <Image src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80" alt="변비 진료" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🔍</span> 주요 원인</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {causes.map((c) => (
              <div key={c.title} className="p-4 rounded-xl bg-[#f8fafb]">
                <h3 className="text-[13px] font-bold text-[#0d1117] mb-1">{c.title}</h3>
                <p className="text-[12px] text-[#6b7280] leading-[1.8]">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>⚕️</span> 치료 방법</h2>
          <div className="space-y-3">
            {[
              {num:'01', title:'생활습관 교정', desc:'식이섬유 25~30g/일, 수분 2L 이상, 규칙적 운동, 배변 습관 교정이 기본 치료입니다.'},
              {num:'02', title:'약물 치료', desc:'팽창성·삼투성·자극성 완하제를 증상에 맞게 처방합니다.'},
              {num:'03', title:'바이오피드백', desc:'출구폐쇄형 변비에서 항문 근육 협응 훈련이 효과적입니다.'},
              {num:'04', title:'정밀 검사', desc:'대장내시경, 대장통과시간 측정 등으로 기질적 원인을 배제합니다.'},
            ].map((t) => (
              <div key={t.num} className="flex gap-4 p-4 rounded-xl bg-[#f8fafb]">
                <span className="text-[12px] font-black text-primary shrink-0">STEP{t.num}</span>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0d1117] mb-1">{t.title}</h3>
                  <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">변비, 습관이 되기 전에 치료하세요</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">만성 변비는 치핵·치열의 원인이 됩니다.<br />장튼튼항외과에서 정확한 원인을 찾아드립니다.</p>
        </div>
      </div>
    </div>
  )
}
