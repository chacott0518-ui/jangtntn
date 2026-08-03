import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: 'PPH 수술 | 장튼튼항외과의원',
  description: 'PPH 자동문합기 치핵 수술 안내. 통증·입원·퇴원 여부는 상태에 따라 달라질 수 있으며, 모든 치핵에 적용되지는 않습니다. 김포 구래역.',
  keywords: 'PPH수술, 원형자동문합기수술, 김포 PPH수술, 김포 치핵수술',
  alternates: { canonical: 'https://www.jangtntnhang.com/pph' },
}

const faqs = [
  {
    q: 'PPH 수술은 모든 치핵에 가능한가요?',
    a: '아닙니다. 주로 탈출·다발성 내치핵 등 적응증이 있을 때 고려하며, 모든 치핵 환자에게 적용되는 수술은 아닙니다. 외치핵 위주이거나 상태가 다르면 다른 방법이 더 적합할 수 있습니다. 진찰 후 가능 여부를 안내드리며, 치핵 진료 페이지도 함께 참고해 주세요. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: 'PPH는 통증이 없나요?',
    a: '치상선 위쪽에서 진행해 통증이 상대적으로 적은 경우가 많습니다. 다만 개인차·동반 시술·회복 과정에 따라 불편감이 있을 수 있습니다. 무통을 보장하는 수술은 아니며, 통증 관리는 상태에 맞춰 상담·안내해 드립니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '당일 퇴원이 가능한가요?',
    a: '상태에 따라 당일 퇴원을 고려할 수 있는 경우가 있습니다. 출혈·통증·전신 상태에 따라 관찰이 더 필요할 수 있습니다. 퇴원 가능 여부는 수술 후 경과를 보고 결정하며, 개인마다 다를 수 있어 일률적으로 단정하기 어렵습니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '기존 절제술과 무엇이 다른가요?',
    a: 'PPH는 자동문합기로 점막을 원형 절제·봉합하는 방식입니다. 수술 시간·통증·회복은 환자마다 달라 일률적으로 비교하기 어렵습니다. 적응증과 장단점을 상담한 뒤 본인에게 맞는 방법을 선택하는 것이 중요하니 충분히 물어보시기 바랍니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '수술 후 관리는 어떻게 하나요?',
    a: '좌욕·배변·식이·활동 제한 등 안내를 따르는 것이 중요합니다. 불편감·출혈 정도는 개인차가 있을 수 있어 경과를 함께 확인합니다. 자세한 주의사항은 수술후주의사항 페이지를 확인해 주시고, 이상 증상이 있으면 바로 연락해 주세요. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
]

export default function PphPage() {
  const targets = [
    '3도 이상 내치핵 (손으로 밀어 넣어야 하는 경우)',
    '4도 치핵 (항상 돌출되어 있는 경우)',
    '직장 점막 탈출증',
    '여러 개의 치핵이 동시에 있는 경우',
    '기존 치핵 수술 후 재발한 경우',
  ]
  const comparisons = [
    {item:'수술 시간', pph:'약 20~30분', old:'약 30~60분'},
    {item:'통증', pph:'상대적으로 적을 수 있음', old:'상대적으로 클 수 있음'},
    {item:'입원 기간', pph:'상태에 따라 당일 퇴원 가능', old:'1~3일 관찰 가능'},
    {item:'회복 기간', pph:'개인차 있음(수일~)', old:'개인차 있음(수주~)'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/04-operating-room.webp" alt="PPH 수술 전문" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">PPH 수술</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">PPH Surgery</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">PPH 수술</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">자동문합기를 이용한 치핵 수술 · 적응 여부는 상담 후 결정</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: 'PPH-수술이란', label: 'PPH 수술이란?' },
            { id: 'PPH-vs-기존-수술-비교', label: '⭐ PPH vs 기존 수술 비교' },
            { id: 'PPH-수술-적응증', label: '✅ PPH 수술 적응증' },
            { id: '진료-회복-안내', label: '🩺 진료·회복 안내' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="PPH-수술이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> PPH 수술이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>PPH(Procedure for Prolapse and Hemorrhoids)는 <strong className="text-[#0d7fc4]">특수 자동문합기</strong>를 이용해 탈출된 치핵 조직 위쪽 점막을 원형으로 절제·봉합하는 수술법입니다.</p>
              <p>통증이 느껴지는 치상선 아래가 아닌 위쪽에서 진행해 통증이 상대적으로 적은 경우가 많으며, 수술 시간은 약 20~30분 정도입니다. 상태에 따라 당일 퇴원을 고려할 수 있으나, 모든 환자에게 동일하게 적용되지는 않습니다.</p>
              <p>
                PPH는 모든 치핵 환자에게 적합한 방법은 아닙니다. 적응증·대안은
                <Link href="/anorectal/hemorrhoid" className="text-primary font-bold hover:underline"> 치핵 진료</Link>와
                <Link href="/about/aftercare" className="text-primary font-bold hover:underline"> 수술후주의사항</Link>을 함께 확인해 주세요.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="PPH-vs-기존-수술-비교">
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
          <p className="text-[12px] text-[#6b7280] mt-4 leading-[1.8]">※ 위 비교는 일반적인 경향을 안내한 것이며, 실제 통증·입원·회복은 개인 상태와 동반 시술에 따라 달라질 수 있습니다.</p>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="PPH-수술-적응증">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>✅</span> PPH 수술 적응증</h2>
          <div className="space-y-2">
            {targets.map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-[#f0f7ff]">
                <span className="text-primary font-black shrink-0">✓</span>
                <p className="text-[13px] text-[#374151]">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-[#6b7280] mt-4 leading-[1.8]">
            적응증에 해당해도 진찰·검사 결과에 따라 다른 치료법이 더 적합할 수 있습니다.
            <Link href="/anorectal/hemorrhoid" className="text-primary font-bold hover:underline"> 치핵(치질)</Link> 증상과 단계도 함께 확인해 보세요.
          </p>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="진료-회복-안내">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>🩺</span> 진료·회복 안내
          </h2>
          <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
            <p>
              장튼튼항외과의원에서는 치핵 단계와 동반 질환을 확인한 뒤 PPH 가능 여부를 상담합니다.
              수술 전 검사·마취·입원/퇴원 계획은 상태에 따라 달라질 수 있습니다.
            </p>
            <p>
              회복 기간에는 배변·좌욕·활동 관리가 중요합니다.
              자세한 주의사항은 <Link href="/about/aftercare" className="text-primary font-bold hover:underline">수술후주의사항</Link>을 참고해 주세요.
            </p>
          </div>
        </section>
        <StaticFaq items={faqs} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치핵 수술, 상담부터 차근히</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">상태에 맞는 치료 방법을 안내해 드립니다.<br />장튼튼항외과의원 외과전문의가 직접 상담·집도합니다.</p>
        </div>
      </div>
    </div>
  )
}
