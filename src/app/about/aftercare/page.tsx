import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '수술 후 주의사항 | 장튼튼항외과의원',
  description: '장튼튼항외과의원 항문·외과 수술 후 일반 주의사항. 좌욕·식이·활동 안내는 상태에 따라 달라질 수 있습니다.',
  openGraph: {
    title: '수술 후 주의사항 | 장튼튼항외과의원',
    description: '수술 후 좌욕·식이·활동 일반 안내. 회복 경과에 따라 개인별 안내가 달라질 수 있습니다.',
    url: 'https://www.jangtntnhang.com/about/aftercare',
    siteName: '장튼튼항외과의원',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: { canonical: 'https://www.jangtntnhang.com/about/aftercare' },
}

const items = [
  { title: '좌욕', desc: '따뜻한 물로 하루 수회, 배변 후 시행하는 경우가 많습니다. 시간과 횟수는 안내받은 방법에 따릅니다.' },
  { title: '식이', desc: '수분과 식이섬유를 충분히 섭취하고, 음주·자극적 음식은 일정 기간 피하는 것이 좋습니다. 세부 식단은 상태에 따라 안내합니다.' },
  { title: '활동', desc: '가벼운 걷기는 도움이 될 수 있으나, 무거운 물건 들기와 격한 운동은 회복 상태에 맞춰 제한합니다.' },
  { title: '약물', desc: '처방약은 지시대로 복용하고, 좌욕 후 연고 도포가 필요할 수 있습니다. 임의로 약을 중단하지 마세요.' },
  { title: '주의 증상', desc: '심한 출혈·발열·참기 어려운 통증이 있으면 바로 연락하거나 가까운 응급실을 이용해 주세요.' },
]

const faqs = [
  {
    q: '좌욕은 어떻게 하나요?',
    a: '보통 따뜻한 물에 항문이 잠기도록 앉아 시행합니다. 하루 횟수와 시간은 수술 종류와 상태에 따라 달라질 수 있어 안내문을 기준으로 합니다. 좌욕 후에는 세게 문지르지 말고 가볍게 물기를 제거합니다.',
  },
  {
    q: '수술 후 운동은 언제부터 가능한가요?',
    a: '가벼운 걷기는 비교적 이른 시기부터 가능한 경우가 있습니다. 자전거·등산·웨이트는 회복 상태를 보고 시작하는 것이 안전합니다. 재개 시점은 외래에서 확인해 주세요.',
  },
  {
    q: '변비는 어떻게 예방하나요?',
    a: '수분과 식이섬유 섭취, 변을 무리하게 참지 않는 습관이 도움이 됩니다. 변비가 심하면 수술 부위 통증이 커질 수 있어 처방된 완화제를 안내대로 사용합니다. 배변이 어렵거나 출혈이 늘면 진료를 받으세요.',
  },
  {
    q: '언제 다시 병원에 와야 하나요?',
    a: '정해진 외래 일정을 지키는 것이 기본입니다. 갑자기 출혈이 늘거나 고열·심한 통증이 있으면 예약일과 관계없이 연락해야 합니다. 치핵·치열 등 질환별 안내는 해당 진료 페이지도 함께 참고할 수 있습니다.',
  },
]

export default function AftercarePage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="/images/tour/02-waiting-area.webp" alt="수술 후 주의사항" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>수술 후 주의사항</strong></nav>
          <h1 className="page-h1 text-[#0d1117] mb-2">수술 후 주의사항</h1>
          <p className="section-lead text-[#555]">회복을 위한 일반 생활 안내</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 section-space space-y-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="section-h2 text-[#0d1117] mb-3">핵심요약</h2>
          <p className="body-text text-[#374151] break-keep">
            아래 내용은 일반적인 안내이며, 회복 속도와 주의사항은 수술 방법과 개인 상태에 따라 달라질 수 있습니다. 치핵 관련은{' '}
            <Link href="/anorectal/hemorrhoid" className="text-primary font-bold hover:underline">치핵 안내</Link>, 예약은{' '}
            <Link href="/consultation" className="text-primary font-bold hover:underline">온라인 상담</Link>을 이용해 주세요.
          </p>
        </section>

        <PageToc
          items={[
            { id: 'aftercare-guide', label: '회복 생활 안내' },
            { id: 'related', label: '관련 안내' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section id="aftercare-guide" className="space-y-5">
          <h2 className="section-h2 text-[#0d1117]">회복 생활 안내</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((item) => (
              <div key={item.title} className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
                <h3 className="card-title text-[#0d1117] mb-2">{item.title}</h3>
                <p className="body-text text-[#6b7280] break-keep">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="related" className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="section-h2 text-[#0d1117] mb-3">관련 안내</h2>
          <p className="body-text text-[#374151] break-keep">
            수술 전후 준비는 <Link href="/about/surgery" className="text-primary font-semibold hover:underline">수술안내</Link>,
            진료시간·오시는 길은 <Link href="/about/info" className="text-primary font-semibold hover:underline">진료안내</Link>에서
            확인할 수 있습니다.
          </p>
        </section>

        <StaticFaq items={faqs} />
      </div>
    </div>
  )
}
