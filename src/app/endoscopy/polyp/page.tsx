import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery, { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '용종 절제술 | 장튼튼항외과의원',
  description: '김포 구래역 대장 용종 절제 안내. 크기·위치에 따라 당일 제거가 어려울 수 있으며, 절제 후 주의사항을 설명합니다.',
  keywords: '대장용종, 대장용종제거, 용종절제술, 김포 대장용종제거, 구래동 대장용종제거',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/polyp' },
  openGraph: {
    title: '용종 절제술 | 장튼튼항외과의원',
    description: '김포 구래역 대장 용종 절제 안내. 크기·위치에 따라 당일 제거가 어려울 수 있으며, 절제 후 주의사항을 설명합니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '대장내시경 중 용종을 바로 제거할 수 있나요?',
    a: '크기·위치·형태와 출혈·천공 위험을 보고 당일 절제 여부를 판단합니다. 큰 병변이나 고위험 위치, 장 정결이 부족한 경우에는 당일 제거가 어려울 수 있습니다. 필요하면 추가 검사나 일정을 안내드리며, 개인 상태에 따라 계획이 달라집니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '어떤 경우에 당일 절제가 어렵나요?',
    a: '너무 크거나 납작한 병변, 출혈 위험이 높은 경우, 장 정결이 부족한 경우 등이 해당될 수 있습니다. 항혈전제 복용 중이면 일정을 조정하기도 하며, 안전이 우선입니다. 소견을 보고 결정하고, 필요 시 추적 검사 일정을 함께 안내드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '용종 절제 후 식사는 어떻게 하나요?',
    a: '당일은 죽·미음 등 부드러운 유동식부터 시작하는 경우가 많습니다. 이후 며칠간 자극적 음식과 음주를 피하도록 안내하며, 절제 범위에 따라 식이 제한 기간이 달라질 수 있습니다. 복통·혈변이 있으면 식사보다 먼저 연락해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '절제 후 운동은 언제부터 가능한가요?',
    a: '보통 1~2주간 격렬한 운동은 피하는 것이 좋습니다. 출혈 위험을 줄이기 위한 안내이며, 가벼운 일상 활동은 상태에 따라 가능할 수 있습니다. 개인 회복 속도와 절제 범위에 따라 시기가 달라지므로 진료 안내를 따라 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '조직 검사 결과는 언제 나오나요?',
    a: '일반적으로 1~2주 후 결과를 확인합니다. 결과에 따라 추적 대장내시경 시기를 안내드리며, 고위험 선종이면 더 짧은 간격의 검사가 필요할 수 있습니다. 결과 확인 일정이 궁금하시면 내원 시 함께 안내해 드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '용종 절제 후 어떤 증상이 있으면 바로 와야 하나요?',
    a: '심한 복통, 지속되는 혈변, 발열 등이 있으면 즉시 내원해야 합니다. 드물지만 출혈이나 천공 관련 합병증이 있을 수 있어 빠른 확인이 중요합니다. 이상 증상이 있으면 지체하지 말고 연락해 주시고, 복용 약 변경도 임의로 하지 마세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  }
]

export default function PolypPage() {
  const methods = [
    {name:'차가운 용종 절제술 (Cold snare)', size:'5~10mm', desc:'전기 소작 없이 올가미로 잘라내는 방법. 출혈·천공 위험이 상대적으로 낮은 편입니다.'},
    {name:'내시경 점막 절제술 (EMR)', size:'10~20mm', desc:'점막 아래 식염수 주입 후 올가미로 절제. 납작한 중간 크기 용종에 고려할 수 있습니다.'},
    {name:'내시경 점막하 박리술 (ESD)', size:'20mm 이상', desc:'점막하층을 박리하여 일괄 절제. 크고 납작한 병변에 사용하는 경우가 있습니다.'},
  ]
  const afterCare = [
    '당일 죽·미음 등 유동식, 이틀간 부드러운 음식',
    '1~2주간 격렬한 운동·음주·자극적 음식 금지',
    '복통·혈변·발열 시 즉시 내원',
    '조직 검사 결과는 1~2주 후 확인',
    '고위험 선종의 경우 1년 후 추적 대장내시경이 필요할 수 있음',
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/06-endoscopy-room.webp" alt="대장 용종 절제술 안내 이미지" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">용종 절제술</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Polypectomy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">용종 절제술</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">내시경으로 안전하게 · 대장암을 예방합니다</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '용종이란', label: '용종이란?' },
            { id: '절제-방법', label: '절제 방법' },
            { id: '절제-후-주의사항', label: '🌿 절제 후 주의사항' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="용종이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 용종이란?</h2>
          <p className="text-[14px] text-[#374151] leading-[2.0] mb-5">용종(폴립)은 대장 점막이 혹처럼 돌출된 병변입니다. 일부 선종성 용종은 수년에 걸쳐 암으로 진행될 수 있어, 대장내시경 중 발견되면 상태에 따라 절제를 고려합니다. 모든 용종이 당일 제거되는 것은 아니며, 크기·위치·출혈 위험에 따라 일정이 달라질 수 있습니다.</p>
          <div className="grid grid-cols-3 gap-3">
            {[{label:'용종 발견', icon:'🔍'},{label:'상태 평가 후 절제', icon:'✂️'},{label:'대장암 예방', icon:'🛡️'}].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-[#f0f7ff]">
                <div className="text-[28px] mb-2">{s.icon}</div>
                <p className="text-[13px] font-bold text-[#0d7fc4]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="절제-방법">
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
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="절제-후-주의사항">
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
        <p className="text-[14px] text-[#374151] leading-[1.9]">
          관련 진료:{' '}
          <Link href="/endoscopy/colon" className="text-primary font-bold hover:underline">대장내시경</Link>,{' '}
          <Link href="/endoscopy/gastro" className="text-primary font-bold hover:underline">위내시경</Link>,{' '}
          <Link href="/about/info" className="text-primary font-bold hover:underline">진료안내</Link>
        </p>
        <MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/endoscopy/polyp/colon-polyp-01.webp', caption: '대장용종제거술 01' },
            { src: '/images/medical/endoscopy/polyp/colon-polyp-02.webp', caption: '대장용종제거술 02' },
            { src: '/images/medical/endoscopy/polyp/colon-polyp-03.webp', caption: '대장용종제거술 03' },
            { src: '/images/medical/endoscopy/polyp/colon-polyp-04.webp', caption: '대장용종제거술 04' },
          ]}
        />

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
      </div>
    </div>
  )
}
