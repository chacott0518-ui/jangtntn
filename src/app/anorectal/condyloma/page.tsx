import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '항문콘딜로마 | 장튼튼항외과의원',
  description:
    '항문콘딜로마(HPV)의 증상과 제거·추적 관찰 안내. 항문 주위 사마귀성 병변이 있을 때 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/condyloma' },
  openGraph: {
    title: '항문콘딜로마 | 장튼튼항외과의원',
    description:
      '항문콘딜로마(HPV)의 증상과 제거·추적 관찰 안내. 항문 주위 사마귀성 병변이 있을 때 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
    url: 'https://www.jangtntnhang.com/anorectal/condyloma',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '항문콘딜로마는 성병인가요?',
    a: 'HPV 감염과 관련되어 성접촉으로 전파될 수 있는 질환입니다. 잠복기가 길어 언제 감염됐는지 알기 어려운 경우도 있습니다. 개인별 병변 범위와 동반 질환 여부는 진찰로 확인하며 치료와 추적 계획은 상태에 따라 달라질 수 있습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '작은 병변도 치료해야 하나요?',
    a: '방치하면 커지거나 퍼질 수 있어 조기 평가가 도움이 됩니다. 위치·개수·내부 침범 여부에 따라 치료 방법이 달라집니다. 겉으로 작아 보여도 항문 안쪽 병변이 있을 수 있어 진찰이 필요하며 개인별 제거 방법과 추적 간격을 안내합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '치료 후 재발이 흔한가요?',
    a: 'HPV 특성상 치료 후에도 재발이 나타날 수 있습니다. 재발 간격과 병변 양상은 개인마다 다르며, 한 번의 치료로 끝나는 경우와 반복 치료가 필요한 경우가 있습니다. 정기 추적 관찰로 조기에 확인하는 것이 중요하고 일정은 진찰 후 정합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '전기소작과 레이저 중 무엇이 맞나요?',
    a: '병변 크기·위치·피부 상태에 따라 적합한 방법이 달라집니다. 한 가지가 모든 경우에 더 좋다고 단정하기 어렵고, 상처 치유 속도도 개인차가 있습니다. 진찰 후 예상 회복과 함께 방법을 상의하며 필요하면 약물 치료를 병행할 수 있습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '파트너도 함께 검사해야 하나요?',
    a: '전파 가능성을 고려해 상담이 필요한 경우가 있습니다. 필요 여부와 검사 범위는 개인 상황과 병변 상태에 따라 다릅니다. 진료 시 동반 상담이 가능한지 안내드리며 일률적으로 모든 파트너에게 같은 검사를 권하지는 않습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '통증이 없어도 콘딜로마일 수 있나요?',
    a: '초기에는 가려움이나 통증이 거의 없을 수 있습니다. 항문 내부 병변은 발견이 늦어지기도 해 증상만으로 안심하기 어렵습니다. 만져지는 돌기나 분비물 변화가 있으면 진찰로 확인하는 것이 좋으며 치료 여부는 개인별로 결정합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

export default function Page() {
  const symptoms = ["항문 주위 작은 구진 또는 융기","가려움증·불편감·배변 시 통증","항문 분비물 증가","병변이 커지면 출혈 발생","항문 내부 병변은 증상 없이 발견 지연"]
  const treatments = [{"name":"전기소작술","desc":"고주파 전류로 병변을 태워 제거. 외래에서 시행 가능합니다."},{"name":"레이저 치료","desc":"CO2 레이저로 병변을 정밀 제거. 상처가 작고 회복이 빠릅니다."},{"name":"외과적 절제","desc":"큰 병변 또는 넓은 범위에 적용. 근치적 제거가 가능합니다."},{"name":"약물 도포","desc":"이미퀴모드 크림 도포로 면역 반응을 유도합니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/03-consultation-room.webp" alt="항문콘딜로마 HPV 병변 진료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 대장항문센터 / <strong>항문콘딜로마</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Anal Condyloma</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">항문콘딜로마</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">HPV 바이러스 감염으로 인한 항문 주위 사마귀성 병변</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '항문콘딜로마이란', label: '항문콘딜로마이란?' },
            { id: '주요-증상', label: '주요 증상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="항문콘딜로마이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 항문콘딜로마이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">HPV(인유두종 바이러스) 감염으로 항문 주위에 사마귀 모양의 병변이 생기는 질환입니다. 성접촉을 통해 감염되며 잠복기는 3주~8개월로 다양합니다. 초기에는 작은 구진이지만 치료하지 않으면 닭벼슬 모양으로 커지고 퍼질 수 있습니다. 재발이 잦으므로 꾸준한 추적 관찰이 필요합니다.</p>

          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="주요-증상">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🔍</span> 주요 증상</h2>
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
                <p className="text-[14px] text-[#374151] leading-[1.9] break-keep">
          관련 진료:{' '}
          <Link href="/anorectal/pruritus" className="text-primary font-semibold underline-offset-2 hover:underline">항문소양증</Link>,{' '}
          <Link href="/about/info" className="text-primary font-semibold underline-offset-2 hover:underline">진료안내</Link>,{' '}
          <Link href="/consultation" className="text-primary font-semibold underline-offset-2 hover:underline">온라인상담</Link>
        </p>

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />

        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">콘딜로마는 재발이 잦습니다. 치료 후 정기 추적 관찰이 반드시 필요합니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>
      </div>
    </div>
  )
}
