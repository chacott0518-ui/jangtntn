import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '수술안내 | 장튼튼항외과의원',
  description: '장튼튼항외과의원 수술 전후 일반 안내. 마취·금식·검사·통증 관리는 환자 상태에 따라 달라질 수 있습니다.',
  openGraph: {
    title: '수술안내 | 장튼튼항외과의원',
    description: '수술 전후 일반 안내. 준비사항과 주의사항은 진료 후 개인 상태에 맞춰 안내합니다.',
    url: 'https://www.jangtntnhang.com/about/surgery',
    siteName: '장튼튼항외과의원',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: { canonical: 'https://www.jangtntnhang.com/about/surgery' },
}

const faqs = [
  {
    q: '수술 전에 무엇을 준비해야 하나요?',
    a: '금식 시간과 복용 약 조절이 필요할 수 있으며, 준비 내용은 수술 종류와 상태에 따라 달라집니다. 혈압약·당뇨약·항혈전제 등은 임의로 중단하지 말고 의료진에게 알려야 합니다. 자세한 일정은 예약 상담과 수술 전 안내를 통해 확인합니다.',
  },
  {
    q: '보호자가 꼭 동반해야 하나요?',
    a: '마취나 진정이 포함된 경우 보호자 동반이 필요할 수 있습니다. 동반 필요 여부는 시술·수술 방법과 회복 계획에 따라 달라질 수 있습니다. 혼자 방문이 어려우면 예약 시 미리 문의해 주세요.',
  },
  {
    q: '수술 후 통증은 어떻게 관리하나요?',
    a: '통증의 정도와 지속 시간은 개인차가 큽니다. 처방약과 좌욕·휴식 등 생활 관리를 함께 안내드리며, 통증이 갑자기 심해지거나 출혈·발열이 있으면 바로 연락해야 합니다. 회복 경과에 따라 외래에서 추가 안내를 드립니다.',
  },
  {
    q: '수술 후 관리는 어디서 확인하나요?',
    a: '수술 후 생활 관리는 퇴원 시 안내와 함께 수술 후 주의사항 페이지에서도 확인할 수 있습니다. 식이·활동·좌욕 방법은 질환과 수술 범위에 따라 달라질 수 있습니다. 이상 증상이 있으면 안내된 연락 방법으로 문의해 주세요.',
  },
]

export default function SurgeryGuidePage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="/images/tour/02-waiting-area.webp" alt="수술안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>수술안내</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">수술안내</h1>
          <p className="text-[16px] text-[#555]">수술 전후 확인사항을 안내합니다</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 section-space space-y-6">

        <PageToc
          items={[
            { id: '수술-전-확인사항', label: '수술 전 확인사항' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.07)]" id="수술-전-확인사항">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-4">수술 전 확인사항</h2>
          <div className="space-y-3 text-[14px] text-[#374151] leading-[1.9] break-keep">
            <p>장튼튼항외과의원에서는 항문 질환·피부종양 등 진료 범위에 맞는 수술·시술을 상담합니다. 수술 여부와 방법은 진찰·검사 결과를 바탕으로 결정하며, 모든 환자에게 동일한 적용되지 않습니다.</p>
            <p>수술 전날 자정부터 금식이 필요할 수 있으며, 혈압약은 소량의 물과 함께 복용 가능한 경우가 있습니다. 아스피린 등 항혈전제는 출혈 위험 때문에 일정 기간 조절이 필요할 수 있어 반드시 미리 알려 주세요.</p>
            <p>자세한 회복 안내는 <Link href="/about/aftercare" className="text-primary font-bold hover:underline">수술 후 주의사항</Link>과 <Link href="/about/info" className="text-primary font-bold hover:underline">진료안내</Link>를 함께 확인해 주세요.</p>
          </div>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { title: '마취·수술 시간', desc: '마취 방법과 소요 시간은 질환·수술 범위에 따라 달라질 수 있습니다. 예상 시간은 상담 시 안내드립니다.' },
            { title: '수술 전 검사', desc: '상태에 따라 혈액검사 등 사전 검사가 필요할 수 있습니다. 필요한 항목은 진료 후 안내합니다.' },
            { title: '통증 관리', desc: '수술 후 통증은 개인차가 있으며, 처방약과 생활 관리로 조절합니다. 심한 통증·출혈이 있으면 바로 연락해 주세요.' },
            { title: '회복·외래', desc: '퇴원 후 좌욕·식이·활동 제한이 필요할 수 있습니다. 외래 일정은 수술 내용에 맞춰 안내드립니다.' },
          ].map((item) => (
            <div key={item.title} className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
              <h3 className="text-[17px] font-bold mb-2">{item.title}</h3>
              <p className="text-[14px] text-[#6b7280] leading-relaxed break-keep">{item.desc}</p>
            </div>
          ))}
        </div>
        <StaticFaq items={faqs} />
      </div>
    </div>
  )
}
