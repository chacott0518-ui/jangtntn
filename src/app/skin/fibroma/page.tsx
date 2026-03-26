import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '연성섬유종 | 장튼튼항외과',
  description: '연성섬유종(쥐젖) 제거. 국소마취. 김포 구래역.',
  alternates: { canonical: 'https://www.jangtntnhang.com/skin/fibroma' },
}

export default function Page() {
  const symptoms = ["피부 표면에 작은 살 조각 같은 돌기","목·겨드랑이·눈꺼풀에 주로 생김","옷·목걸이·브라끈에 걸려 통증 발생","크기는 보통 1~5mm, 살색~갈색","여러 개가 함께 발생하는 경우 많음"]
  const treatments = [{"name":"전기소작술","desc":"미세 전류로 연성섬유종 기저부를 태워 제거. 통증이 적고 흉터가 거의 없습니다."},{"name":"외과적 절제","desc":"국소마취 후 가위나 메스로 절제. 크기가 크거나 수가 많은 경우 적합합니다."},{"name":"냉동 치료","desc":"액체 질소로 병변을 얼려 제거. 여러 개를 한 번에 처리할 수 있습니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=85" alt="연성섬유종 (쥐젖)" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 피부종양센터 / 연성섬유종</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Soft Fibroma</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">연성섬유종 (쥐젖)</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">마찰 부위에 주로 생기는 피부의 양성 종양</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 연성섬유종 (쥐젖)이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">연성섬유종(쥐젖)은 피부 표면에 작은 살 조각이 돌출되는 양성 피부 종양입니다. 목·겨드랑이·서혜부·눈꺼풀 등 마찰이 많은 부위에 주로 발생합니다. 악성으로 변하지 않지만 옷이나 장신구에 걸려 통증이 생기기도 합니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="연성섬유종 (쥐젖)" fill className="object-cover" sizes="400px" />
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
          <p className="text-white font-black text-[15px] mb-2">연성섬유종은 간단히 제거할 수 있습니다. 부담 없이 내원하세요.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
