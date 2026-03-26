import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '치열 | 장튼튼항외과',
  description: '치열 전문 치료. 배변 시 극심한 통증과 출혈. 급성·만성 치열 정확한 진단과 치료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/fissure' },
}

export default function Page() {
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1600&q=85" alt="치열" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">치열</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Anal Fissure</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">치열</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 점막의 찢어짐 · 극심한 배변 통증</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>💡</span> 치열이란?
          </h2>
          <div className="text-[14px] text-[#374151] leading-[2.0] space-y-3"><p>치열은 항문 입구의 피부와 점막이 찢어진 상태입니다. 배변 시 마치 칼로 베이는 듯한 극심한 통증과 선홍색 출혈이 특징이며, 배변 후에도 수십 분~수 시간 동안 작열감이 지속됩니다.</p>
              <p>통증 때문에 배변을 참게 되고, 이로 인해 변비가 심해지는 <strong className="text-[#0d7fc4]">악순환</strong>이 반복됩니다. 20~40대 여성에서 가장 흔하며 항문 후방 정중선에서 약 90%가 발생합니다.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="p-4 rounded-xl bg-[#f0f7ff] border border-[#bfdbfe]">
                  <h3 className="font-black text-[14px] text-[#0d7fc4] mb-2">급성 치열</h3>
                  <ul className="space-y-1.5 text-[13px] text-[#374151]">
                    <li>• 최근 발생한 표재성 열상</li>
                    <li>• 약물+좌욕으로 6~8주 내 치유</li>
                    <li>• 조기 치료가 만성화 예방</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#fff7ed] border border-[#fed7aa]">
                  <h3 className="font-black text-[14px] text-[#f97316] mb-2">만성 치열</h3>
                  <ul className="space-y-1.5 text-[13px] text-[#374151]">
                    <li>• 8주 이상 지속</li>
                    <li>• 섬유화 조직(감시 치핵) 형성</li>
                    <li>• 수술적 치료 필요</li>
                  </ul>
                </div>
              </div></div>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>⚕️</span> 치료 방법
          </h2>
          <div className="text-[14px] text-[#374151] leading-[2.0] space-y-3"><div className="space-y-3">
              {[
                {step:'01', title:'좌욕 치료', desc:'하루 3회 이상 미온수(38~40℃) 좌욕으로 괄약근을 이완하고 혈류를 개선합니다.'},
                {step:'02', title:'약물 도포', desc:'칼슘 통로 차단제(딜티아젬), 글리세린 삼질산염 연고를 도포하여 내괄약근 압력을 낮춥니다.'},
                {step:'03', title:'보톡스 주사', desc:'내괄약근에 직접 보톡스를 주입하여 일시적으로 이완시키는 치료법입니다.'},
                {step:'04', title:'내괄약근 측방 절개술', desc:'만성 치열에서 가장 효과적인 수술. 내괄약근 일부 절개, 치유율 95% 이상, 당일 퇴원.'},
              ].map((t) => (
                <div key={t.step} className="flex gap-4 p-4 lg:p-5 rounded-xl bg-[#f8fafb]">
                  <span className="text-[12px] font-black text-primary shrink-0">STEP{t.step}</span>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#0d1117] mb-1">{t.title}</h3>
                    <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div></div>
        </section>
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치열, 혼자 참지 마세요</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">배변이 두려울 정도의 통증이 있다면 반드시 전문의 진찰이 필요합니다.<br />초기 치열은 간단한 치료로 해결됩니다.</p>
        </div>
      </div>
    </div>
  )
}
