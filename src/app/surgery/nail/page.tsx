import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '내성발톱 | 장튼튼항외과',
  description: '내성발톱 통증 없는 교정 및 수술. 재발 방지. 김포 구래역.',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery/nail' },
}

export default function Page() {
  const symptoms = ["발톱 가장자리 부위 통증과 압통","발가락 끝의 발적·부종","걷거나 신발 신을 때 심한 통증","화농(고름)이 생기는 경우","만성화 시 육아종 형성"]
  const treatments = [{"name":"보존적 교정","desc":"초기 내성발톱에 솜·테이프로 발톱을 올바른 방향으로 유도합니다."},{"name":"발톱 일부 절제","desc":"국소마취 후 파고드는 발톱 가장자리를 절제하여 통증을 즉시 해소합니다."},{"name":"조모세포 파괴술","desc":"페놀을 이용해 발톱 뿌리 일부를 파괴하여 재발을 방지합니다. 재발률 90% 이상 감소."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85" alt="내성발톱" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 기타외과질환 / 내성발톱</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Ingrown Toenail</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">내성발톱</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">발톱이 살을 파고드는 통증과 염증의 근본 치료</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 내성발톱이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">내성발톱(내향성 발톱)은 발톱 가장자리가 주변 피부를 파고들어 통증·염증·화농이 발생하는 질환입니다. 주로 엄지발가락에 생기며 잘못된 발톱 자르기(둥글게), 꽉 끼는 신발, 외상, 유전적 발톱 모양이 원인입니다. 당뇨 환자에서는 특히 위험합니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="내성발톱" fill className="object-cover" sizes="400px" />
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
          <p className="text-white font-black text-[15px] mb-2">발톱을 일자로 자르는 습관이 예방의 핵심입니다. 조기 치료가 간단합니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
