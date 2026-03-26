import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '대장내시경 | 장튼튼항외과',
  description: '수면 대장내시경. 대장암·용종 조기 발견 및 즉시 제거. 김포 구래역.',
  keywords: '대장내시경, 수면 대장내시경, 대장암 검진, 대장 용종, 장 정결',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/colon' },
}

export default function ColonPage() {
  const checks = [
    '50세 이상 성인 (5~10년마다 정기 검진)',
    '배변 출혈·혈변·점액변이 있는 경우',
    '원인 불명의 빈혈 또는 체중 감소',
    '대장암·용종 가족력 (40세부터 권장)',
    '배변 습관 변화 (변비·설사 교대)',
    '복통이 2주 이상 지속되는 경우',
  ]
  const cleaningSteps = [
    {day:'검사 2일 전', desc:'씨 있는 과일·해조류·잡곡밥 제한'},
    {day:'검사 전날', desc:'저잔류 식이(흰쌀밥·두부·계란 허용) + 저녁부터 장 정결제 복용 시작'},
    {day:'검사 당일', desc:'나머지 정결제 복용 완료 후 물 포함 완전 금식'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85" alt="대장내시경 검사" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">대장내시경</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Colonoscopy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">대장내시경</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">대장암 예방을 위한 가장 확실한 방법</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 대장내시경이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>항문을 통해 내시경을 삽입하여 직장과 대장 전체를 관찰하는 검사입니다. 대장암, 용종, 염증성 장질환 등을 직접 확인하고 즉시 조직 검사 또는 용종 제거를 시행합니다.</p>
              <p>대장암의 <strong className="text-[#0d7fc4]">90% 이상</strong>이 선종성 용종에서 발생하므로 조기 발견과 제거로 대장암을 예방할 수 있습니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'180px'}}>
              <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" alt="대장내시경" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>📋</span> 검사 전 장 정결 방법</h2>
          <div className="p-4 rounded-xl bg-[#fff7ed] border border-[#fed7aa] mb-4">
            <p className="text-[13px] font-bold text-[#f97316]">⚠️ 장 정결이 가장 중요합니다 — 처방대로 정확히 따라주세요</p>
          </div>
          <div className="space-y-3">
            {cleaningSteps.map((t) => (
              <div key={t.day} className="flex gap-4 p-4 rounded-xl bg-[#f8fafb]">
                <span className="text-[12px] font-black text-primary shrink-0 w-20">{t.day}</span>
                <p className="text-[13px] text-[#374151] leading-[1.8]">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>👤</span> 검사 권장 대상</h2>
          <div className="space-y-2">
            {checks.map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-[#f0f7ff]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                <p className="text-[13px] text-[#374151]">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">대장암은 조기 발견 시 완치율 90%</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">증상이 없어도 정기 검진을 받으세요.<br />장튼튼항외과에서 편안하고 정확한 대장내시경을 제공합니다.</p>
        </div>
      </div>
    </div>
  )
}
