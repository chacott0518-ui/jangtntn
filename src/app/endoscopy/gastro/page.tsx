import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '위내시경 | 장튼튼항외과',
  description: '수면 위내시경 전문. 위암·위궤양·역류성식도염 조기 발견. 김포 구래역.',
  keywords: '위내시경, 수면 위내시경, 위암 검진, 헬리코박터, 역류성식도염',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/gastro' },
}

export default function GastroPage() {
  const checks = [
    '40세 이상 성인 (국가암검진: 2년마다)',
    '속쓰림·소화불량·상복부 통증이 지속되는 경우',
    '음식 삼키기 어렵거나 체중이 감소한 경우',
    '혈변·흑색변·원인 불명 빈혈',
    '위암 또는 헬리코박터 가족력',
    '헬리코박터 제균 치료 후 추적 검사',
  ]
  const preps = [
    {icon:'🚫', title:'8시간 금식', desc:'물 포함 완전 금식. 오전 검사라면 전날 자정부터 금식합니다.'},
    {icon:'💊', title:'약물 조정', desc:'혈압약은 소량의 물과 복용 가능. 당뇨약은 의사 지시에 따라 조정합니다.'},
    {icon:'🚗', title:'보호자 동반', desc:'수면 내시경 시 반드시 보호자 동반. 검사 당일 운전 금지입니다.'},
    {icon:'👔', title:'편안한 복장', desc:'목이 넉넉한 옷을 착용하시고 귀중품은 두고 오세요.'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85" alt="위내시경 검사" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">위내시경</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Gastroscopy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">위내시경</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">편안한 수면 내시경으로 정확한 검사를</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 위내시경이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>위내시경은 내시경 튜브를 입을 통해 삽입하여 식도·위·십이지장을 직접 관찰하는 검사입니다. 위암·위궤양·역류성식도염·헬리코박터 감염 등을 조기에 발견하고 즉시 조직 검사를 시행할 수 있습니다.</p>
              <p>수면 위내시경은 수면 유도제 투여 후 검사하여 불편함을 크게 줄여줍니다. 검사 시간은 약 5~10분입니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'180px'}}>
              <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="위내시경 검진" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>📋</span> 검사 전 준비사항</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {preps.map((item) => (
              <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-[#f8fafb]">
                <span className="text-[22px] shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-[13px] font-bold text-[#0d1117] mb-1">{item.title}</h3>
                  <p className="text-[12px] text-[#6b7280] leading-[1.8]">{item.desc}</p>
                </div>
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
          <p className="text-white font-black text-[16px] mb-2">위암은 조기 발견이 완치의 열쇠입니다</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">40세부터 정기 위내시경 검진을 받으세요.<br />장튼튼항외과 최신 내시경 장비로 편안하게 검사드립니다.</p>
        </div>
      </div>
    </div>
  )
}
