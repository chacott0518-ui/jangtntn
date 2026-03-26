import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '화상 치료 | 장튼튼항외과',
  description: '화상 정도별 전문 치료. 외과전문의 직접 진료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery/burn' },
}

export default function Page() {
  const symptoms = ["1도: 발적·통증만 있고 물집 없음","2도: 물집 형성, 심한 통증, 축축한 피부","3도: 피부 괴사, 통증 없음 (신경 손상)","화상 부위 부종과 열감","넓은 범위 화상 시 탈수·쇼크 위험"]
  const treatments = [{"name":"응급 처치","desc":"흐르는 차가운 물로 15~20분 냉각 후 내원. 얼음 사용 금지. 물집은 터뜨리지 마세요."},{"name":"드레싱 치료","desc":"화상 깊이와 범위에 따라 실버 드레싱, 하이드로콜로이드 등 최신 재료를 사용합니다."},{"name":"피부 이식","desc":"3도 이상 깊은 화상은 자가 피부 이식이 필요할 수 있습니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85" alt="화상 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 기타외과질환 / 화상 치료</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Burn Treatment</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">화상 치료</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">화상 정도에 따른 단계별 전문 치료</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 화상 치료이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">화상은 열·화학물질·전기·방사선 등에 의해 피부와 조직이 손상되는 손상입니다. 화상의 심각도는 깊이(1~3도)와 범위로 판단합니다. 올바른 초기 처치와 전문 치료가 흉터를 최소화합니다. 민간요법(간장·된장·치약 등)은 감염을 일으키므로 절대 금지입니다.</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="화상 치료" fill className="object-cover" sizes="400px" />
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
          <p className="text-white font-black text-[15px] mb-2">화상은 즉시 차가운 물로 식힌 후 병원으로 오세요.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
