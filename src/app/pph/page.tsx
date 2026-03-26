import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'PPH 수술 | 장튼튼항외과',
  description: 'PPH 자동문합기 치핵 절제술 전문. 통증 최소화 당일 퇴원. 3~4도 치핵 근치. 김포 구래역.',
  keywords: 'PPH 수술, 치핵 수술, 자동문합기, 치질 수술, 당일 퇴원',
  alternates: { canonical: 'https://www.jangtntnhang.com/pph' },
}

export default function PphPage() {
  const targets = [
    '3도 이상 내치핵 (손으로 밀어 넣어야 하는 경우)',
    '4도 치핵 (항상 돌출되어 있는 경우)',
    '직장 점막 탈출증',
    '여러 개의 치핵이 동시에 있는 경우',
    '기존 치핵 수술 후 재발한 경우',
  ]
  const comparisons = [
    {item:'수술 시간', pph:'20~30분', old:'30~60분'},
    {item:'통증', pph:'적음', old:'심함'},
    {item:'입원 기간', pph:'당일 퇴원', old:'1~3일'},
    {item:'회복 기간', pph:'3~7일', old:'2~4주'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=85" alt="PPH 수술 전문" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">PPH 수술</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">PPH Surgery</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">PPH 수술</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">자동문합기를 이용한 최소 통증 치핵 절제술</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> PPH 수술이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>PPH(Procedure for Prolapse and Hemorrhoids)는 <strong className="text-[#0d7fc4]">특수 자동문합기</strong>를 이용해 탈출된 치핵 조직 위쪽 점막을 원형으로 절제·봉합하는 수술법입니다.</p>
              <p>통증이 느껴지는 치상선 아래가 아닌 위쪽에서 수술하므로 통증이 현저히 적고, 수술 시간은 약 20~30분입니다. 당일 퇴원이 대부분 가능합니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" alt="PPH 수술" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>⭐</span> PPH vs 기존 수술 비교</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-[#f0f7ff]">
                  <th className="p-3 text-left font-bold">구분</th>
                  <th className="p-3 text-center font-bold text-primary">PPH 수술</th>
                  <th className="p-3 text-center font-bold text-[#6b7280]">기존 절제술</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f6]">
                {comparisons.map((row) => (
                  <tr key={row.item}>
                    <td className="p-3 font-semibold text-[#374151]">{row.item}</td>
                    <td className="p-3 text-center font-bold text-primary">{row.pph}</td>
                    <td className="p-3 text-center text-[#6b7280]">{row.old}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>✅</span> PPH 수술 적응증</h2>
          <div className="space-y-2">
            {targets.map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-[#f0f7ff]">
                <span className="text-primary font-black shrink-0">✓</span>
                <p className="text-[13px] text-[#374151]">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치핵 수술, 이제 두렵지 않습니다</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">PPH 수술로 통증은 줄이고 일상 복귀는 빠르게.<br />장튼튼항외과 외과전문의가 직접 집도합니다.</p>
        </div>
      </div>
    </div>
  )
}
