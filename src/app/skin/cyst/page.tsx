import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '피지낭종 | 장튼튼항외과의원',
  description: '김포 구래역 피지낭종(표피낭종) 진료. 감염 여부에 따라 배농 후 절제 일정이 달라질 수 있습니다.',
  keywords: '표피낭종, 표피낭종제거, 피지낭종, 피지낭종제거, 김포 표피낭종제거, 김포 피지낭종제거',
  alternates: { canonical: 'https://www.jangtntnhang.com/skin/cyst' },
  openGraph: {
    title: '피지낭종 | 장튼튼항외과의원',
    description: '김포 구래역 피지낭종(표피낭종) 진료. 감염 여부에 따라 배농 후 절제 일정이 달라질 수 있습니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '피지낭종과 지방종은 어떻게 구별하나요?',
    a: '피지낭종은 더 단단하고 중앙에 검은 점이 보이는 경우가 많습니다. 지방종은 부드럽고 잘 움직이는 편이며, 내용물 성상도 다릅니다. 겉모습만으로 단정하기 어려워 진료로 확인하는 것이 좋고, 치료 방법과 일정도 병변에 따라 달라질 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '피지낭종을 짜도 되나요?',
    a: '집에서 짜면 감염이 생기거나 염증이 번질 수 있습니다. 주머니가 남으면 다시 커지는 경우도 있어 임시로 내용물만 빼는 것은 근본 치료가 되기 어렵습니다. 치료는 진료 후 안전하게 진행하는 것이 좋으며, 이미 빨갛게 붓고 아프면 빨리 내원해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '감염된 피지낭종도 바로 제거하나요?',
    a: '심한 감염이 있으면 먼저 배농과 염증 치료를 하는 경우가 많습니다. 염증이 가라앉은 뒤 주머니 절제를 계획하며, 상태에 따라 일정이 달라질 수 있습니다. 감염기에는 무리한 완전 절제가 어려울 수 있어 단계적 치료가 안전합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '완전히 제거하면 재발하지 않나요?',
    a: '주머니째 제거하면 재발 가능성을 낮출 수 있습니다. 다만 염증이 심했거나 주머니가 일부 남으면 다시 생길 수 있어, 재발이 없다고 단정하기는 어렵습니다. 개인 피부 상태와 부위도 영향을 주므로 추적 관찰이 필요할 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '시술 후 흉터는 어느 정도인가요?',
    a: '절개 길이와 부위, 개인 회복에 따라 흉터 정도가 달라집니다. 감염 후 절제는 흉터가 더 남을 수 있으며, 흉터가 전혀 없다고 보장하기는 어렵습니다. 관리 방법과 실밥 제거 시기는 시술 후 안내드리니 안내에 따라 관리해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '당일 제거가 가능한가요?',
    a: '감염이 없고 크기가 적당하면 당일 시술을 검토할 수 있습니다. 염증이 심하면 단계적 치료가 필요하며, 모든 경우에 당일 제거가 보장되지는 않습니다. 진료 후 가능한 일정을 안내드리며, 개인 상태에 따라 계획이 달라집니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  }
]

export default function Page() {
  const symptoms = ["피부 아래 단단하고 둥근 혹","중앙에 작은 검은 점(개구부) 보임","짜면 치즈 같은 냄새나는 내용물","감염 시 붓고 빨개지며 심한 통증","감염이 반복될수록 점점 더 크게 부음"]
  const treatments = [{"name":"낭종 절제술 (비감염기)","desc":"감염이 없는 상태에서 낭종 주머니째 제거하는 방법입니다. 재발 가능성을 낮추는 데 도움이 됩니다."},{"name":"절개 배농 후 절제","desc":"감염 농양 시 먼저 배농 후, 염증이 가라앉으면 낭종 주머니 절제를 계획합니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/medical/skin/common/skin-clinic-image-01.webp" alt="피지낭종 진료 안내 이미지" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 피부종양센터 / 피지낭종</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Epidermal Cyst</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">피지낭종</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">피지선이 막혀 피부 아래에 피지와 각질이 쌓이는 낭종</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '피지낭종이란', label: '피지낭종이란?' },
            { id: '증상-및-진료-대상', label: '증상 및 진료 대상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="피지낭종이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 피지낭종이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">피지낭종(표피낭종)은 피지선 분비관이 막혀 피지와 각질이 피부 아래에 쌓이면서 주머니처럼 형성되는 낭종입니다. 얼굴·목·등·두피에 자주 발생하며, 중앙에 검은 점이 보이는 것이 특징입니다. 재발 가능성을 낮추려면 낭종 주머니째 제거하는 것이 중요합니다.</p>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="증상-및-진료-대상">
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
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="치료-방법">
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
        <p className="text-[14px] text-[#374151] leading-[1.9]">
          관련 진료:{' '}
          <Link href="/skin/lipoma" className="text-primary font-bold hover:underline">지방종</Link>,{' '}
          <Link href="/skin/fibroma" className="text-primary font-bold hover:underline">연성섬유종</Link>,{' '}
          <Link href="/skin" className="text-primary font-bold hover:underline">피부종양센터</Link>
        </p>
        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[15px] mb-2">피지낭종은 감염 전에 제거하면 훨씬 간단합니다. 혹이 발견되면 빨리 내원하세요.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
