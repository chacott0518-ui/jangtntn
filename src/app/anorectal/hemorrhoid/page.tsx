import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '치핵(치질) | 장튼튼항외과',
  description: '치핵(치질) 전문 치료. 1~4도 치핵 정확한 진단, 당일 수술 가능. 김포 구래역.',
  keywords: '치핵, 치질, 항문 출혈, 치핵 수술, 김포 치질, 내치핵, 외치핵, PPH',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/hemorrhoid' },
}

export default function HemorrhoidPage() {
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=85" alt="치핵 전문 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3 flex items-center gap-1.5">
            <span>홈</span><span>/</span><span>대장항문센터</span><span>/</span>
            <span className="text-[#0d1117] font-bold">치핵</span>
          </nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Hemorrhoid</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">치핵 <span className="text-[#6b7280] text-[20px] font-bold">(치질)</span></h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">가장 흔한 항문 질환 · 단계별 맞춤 치료</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>💡</span> 치핵이란 무엇인가요?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>치핵은 항문 안쪽의 혈관 조직(치핵 쿠션)이 비정상적으로 늘어나거나 돌출되는 질환입니다. 성인의 약 <strong className="text-[#0d7fc4]">75%</strong>가 일생에 한 번 이상 경험할 정도로 흔하며, 항문 출혈이나 돌출감이 대표 증상입니다.</p>
              <p>발생 위치에 따라 치상선 위쪽의 <strong>내치핵</strong>과 아래쪽의 <strong>외치핵</strong>으로 나뉩니다. 내치핵은 통증보다 출혈이 주요 증상이며, 외치핵은 통증과 불쾌감이 심합니다. 두 가지가 함께 나타나는 혼합치핵도 흔합니다.</p>
              <p>초기에는 생활습관 교정과 약물로 호전되지만, 3~4도로 진행되면 수술이 필요합니다. 참지 말고 조기에 치료하는 것이 중요합니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'220px'}}>
              <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" alt="치핵 진료 상담" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>🔍</span> 치핵의 주요 원인
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {icon:'💺', title:'장시간 좌위', desc:'하루 8시간 이상 앉아 있는 직업은 항문 혈관에 지속적인 압력을 줍니다.'},
              {icon:'🚽', title:'변비·설사 반복', desc:'과도한 힘주기, 잦은 배변 자극이 항문 혈관 조직을 약하게 만듭니다.'},
              {icon:'🤰', title:'임신·출산', desc:'자궁이 커지면서 복압이 증가하고 항문 혈관이 팽창합니다.'},
              {icon:'🍺', title:'음주·자극적 음식', desc:'알코올과 매운 음식은 항문 혈관을 확장시켜 증상을 악화합니다.'},
              {icon:'📱', title:'화장실 장시간 사용', desc:'스마트폰을 보며 장시간 앉으면 항문에 압력이 집중됩니다.'},
              {icon:'🧬', title:'유전적 요인', desc:'가족 중 치핵 환자가 있으면 발생 가능성이 높아집니다.'},
            ].map((item) => (
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
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>📊</span> 치핵의 단계별 증상
          </h2>
          <div className="space-y-3">
            {[
              {stage:'1도', color:'#22c55e', title:'출혈만 있는 단계', desc:'배변 시 선홍색 출혈이 있지만 돌출은 없습니다. 약물 치료와 생활습관 교정으로 호전 가능합니다.'},
              {stage:'2도', color:'#eab308', title:'배변 시 돌출 후 자연 복귀', desc:'배변 시 항문 밖으로 나오지만 저절로 들어갑니다. 약물 치료 또는 고무밴드 결찰이 가능합니다.'},
              {stage:'3도', color:'#f97316', title:'손으로 밀어 넣어야 복귀', desc:'항문 밖으로 나온 치핵이 저절로 들어가지 않아 손으로 밀어야 합니다. 수술 권장됩니다.'},
              {stage:'4도', color:'#ef4444', title:'항상 돌출 · 환납 불가', desc:'항상 치핵이 밖에 나와 있고 밀어도 들어가지 않습니다. 반드시 수술이 필요합니다.'},
            ].map((s) => (
              <div key={s.stage} className="flex gap-4 p-4 lg:p-5 rounded-xl bg-[#f8fafb]">
                <span className="text-[12px] font-black px-2.5 py-1 rounded-lg text-white shrink-0 h-fit" style={{background:s.color}}>{s.stage}</span>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0d1117] mb-1">{s.title}</h3>
                  <p className="text-[13px] text-[#6b7280] leading-[1.85]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>⚕️</span> 치료 방법
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="치핵 수술" fill className="object-cover" sizes="400px" />
            </div>
            <div className="space-y-3">
              {[
                {title:'보존적 치료', badge:'1~2도', color:'#22c55e', desc:'좌욕(1일 3회, 미온수 5~10분), 식이섬유, 수분 2L, 연고·좌약으로 증상 완화.'},
                {title:'고무밴드 결찰', badge:'2도', color:'#eab308', desc:'치핵 기저부에 고무밴드를 묶어 혈류를 차단하는 외래 시술.'},
                {title:'PPH 수술', badge:'3~4도', color:'#0d7fc4', desc:'자동문합기로 치핵 위쪽 점막 절제·봉합. 통증 적고 당일 퇴원 가능.'},
                {title:'치핵 절제술', badge:'3~4도', color:'#0d9488', desc:'치핵 조직 직접 절제. 완전 제거로 재발률이 낮습니다.'},
              ].map((t) => (
                <div key={t.title} className="flex gap-3 items-start">
                  <span className="text-[11px] font-bold text-white px-2 py-0.5 rounded-full shrink-0 mt-0.5" style={{background:t.color}}>{t.badge}</span>
                  <div>
                    <h3 className="text-[13px] font-bold text-[#0d1117]">{t.title}</h3>
                    <p className="text-[12px] text-[#6b7280] leading-[1.8]">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>🌿</span> 수술 후 관리
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['당일 또는 다음 날 퇴원 가능','좌욕 1일 3회 이상 — 미온수, 5~10분','수분 하루 2L 이상 + 식이섬유 충분히','격렬한 운동·음주·자극적 음식 2~3주 자제','변비 예방이 재발 방지의 핵심','이상 출혈·발열 시 즉시 내원'].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-[#f0f7ff]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 mt-0.5" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                <p className="text-[13px] text-[#374151] leading-[1.8]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치핵, 참지 마세요</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">초기에 치료할수록 간단하고 빠르게 해결됩니다.<br />장튼튼항외과 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>

      </div>
    </div>
  )
}
