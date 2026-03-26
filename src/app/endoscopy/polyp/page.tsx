import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '용종 절제술 | 장튼튼항외과',
  description: '대장 용종 즉시 제거. EMR·ESD·Cold snare. 대장암 예방. 김포 구래역.',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/polyp' },
}

export default function PolypPage() {
  const methods = [
    {name:'차가운 용종 절제술 (Cold snare)', size:'5~10mm', desc:'전기 소작 없이 올가미로 잘라내는 방법. 출혈·천공 위험이 낮습니다.'},
    {name:'내시경 점막 절제술 (EMR)', size:'10~20mm', desc:'점막 아래 식염수 주입 후 올가미로 절제. 납작한 중간 크기 용종에 효과적입니다.'},
    {name:'내시경 점막하 박리술 (ESD)', size:'20mm 이상', desc:'점막하층을 박리하여 일괄 절제. 크고 납작한 병변에 사용합니다.'},
  ]
  const afterCare = [
    '당일 죽·미음 등 유동식, 이틀간 부드러운 음식',
    '1~2주간 격렬한 운동·음주·자극적 음식 금지',
    '복통·혈변·발열 시 즉시 내원',
    '조직 검사 결과는 1~2주 후 확인',
    '고위험 선종의 경우 1년 후 추적 대장내시경 필요',
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85" alt="용종 절제술" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">용종 절제술</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Polypectomy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">용종 절제술</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">내시경으로 안전하게 · 대장암을 예방합니다</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 용종이란?</h2>
          <p className="text-[14px] text-[#374151] leading-[2.0] mb-5">용종(폴립)은 대장 점막이 혹처럼 돌출된 병변입니다. 대부분의 대장암은 선종성 용종에서 <strong className="text-[#0d7fc4]">10~15년에 걸쳐 암으로 진행</strong>됩니다. 대장내시경 중 용종을 발견하면 즉시 절제하여 대장암을 예방할 수 있습니다.</p>
          <div className="grid grid-cols-3 gap-3">
            {[{label:'용종 발견', icon:'🔍'},{label:'즉시 절제', icon:'✂️'},{label:'대장암 예방', icon:'🛡️'}].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-[#f0f7ff]">
                <div className="text-[28px] mb-2">{s.icon}</div>
                <p className="text-[13px] font-bold text-[#0d7fc4]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>✂️</span> 절제 방법</h2>
          <div className="space-y-3">
            {methods.map((t) => (
              <div key={t.name} className="p-5 rounded-xl bg-[#f8fafb]">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[14px] font-bold text-[#0d1117]">{t.name}</h3>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t.size}</span>
                </div>
                <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🌿</span> 절제 후 주의사항</h2>
          <div className="space-y-2">
            {afterCare.map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-[#f8fafb]">
                <span className="text-primary font-black shrink-0">✓</span>
                <p className="text-[13px] text-[#374151] leading-[1.8]">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
