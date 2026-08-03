import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '내시경센터 | 장튼튼항외과의원',
  description: '위내시경·대장내시경·용종절제술 안내. 수면 여부와 준비 방법은 상담 후 상태에 맞춰 진행합니다.',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy' },
}

const menus = [
  { href: '/endoscopy/gastro', title: '위내시경', sub: '식도·위·십이지장을 정밀하게 관찰하여 위암·위궤양·역류성식도염을 조기에 발견합니다.', icon: '🔬', tag: '수면가능' },
  { href: '/endoscopy/colon', title: '대장내시경', sub: '대장과 직장 전체를 관찰하여 대장암·대장폴립·염증성 장질환을 조기에 발견하고 치료합니다.', icon: '🏥', tag: '암예방' },
  { href: '/endoscopy/polyp', title: '용종 절제술', sub: '내시경 중 발견된 용종을 즉시 제거하는 시술로, 대장암 예방에 매우 효과적입니다.', icon: '✂️', tag: '즉시시술' },
]

const faqs = [
  {
    q: '내시경은 언제 받는 것이 좋나요?',
    a: '속쓰림·소화불량·혈변·검진 목적이 있을 때 내시경 상담을 받을 수 있습니다. 가족력·연령·증상에 따라 권장 시기가 달라질 수 있으며, 증상이 급하면 일정을 앞당겨 상담할 수 있습니다. 정확한 일정은 진료 후 안내드리며, 위·대장 검사는 필요에 따라 함께 계획할 수 있습니다.',
  },
  {
    q: '수면 내시경과 비수면의 차이가 있나요?',
    a: '수면 내시경은 진정제를 사용해 불편감을 줄이는 방식입니다. 비수면은 의식 상태에서 진행하며 회복이 빠른 편일 수 있으나, 회복 시간은 개인차가 있을 수 있습니다. 기저질환·복용 약에 따라 선택이 달라질 수 있어, 상담 후 본인 상태에 맞게 결정합니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '대장내시경 전 준비는 어떻게 하나요?',
    a: '대장내시경 전에는 장정결제 복용과 식이 제한이 필요할 수 있습니다. 준비 상태는 관찰 정확도에 영향을 줄 수 있어 안내를 잘 따르는 것이 중요하며, 준비 불충분 시 검사가 어려울 수 있습니다. 약 복용·당뇨·혈압 관련 문의는 예약 시 미리 확인해 주세요. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '용종이 나오면 바로 제거하나요?',
    a: '용종 크기·위치·형태에 따라 당일 절제가 가능한 경우가 있으며, 제거 가능 여부는 시술 중 판단합니다. 모든 용종이 즉시 제거되는 것은 아니며, 조직 검사나 추가 진료가 필요할 수 있습니다. 자세한 내용은 용종 절제술 페이지에서 확인해 주세요. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '검사 후 주의할 점은 무엇인가요?',
    a: '진정 검사를 받은 경우 당일 운전·중요 결정은 피하는 것이 좋습니다. 복부 불편·미량의 출혈은 일시적으로 나타날 수 있으며, 회복 안내는 검사 후 다시 설명드립니다. 심한 통증·지속 출혈·발열이 있으면 바로 연락하거나 가까운 응급실을 이용해 주세요. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
]

export default function EndoscopyPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/06-endoscopy-room.webp" alt="내시경센터" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / <strong>내시경센터</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">내시경센터</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">위·대장 내시경과 용종 절제를 상담 후 상태에 맞춰 진행합니다</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '내시경센터-안내', label: '내시경센터 안내' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <div className="grid grid-cols-1 gap-5">
          {menus.map((m) => (
            <Link key={m.href} href={m.href} className="group flex gap-5 p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[26px]" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.1), rgba(13,148,136,0.1))' }}>{m.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[17px] font-black text-[#0d1117]">{m.title}</h3>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.tag}</span>
                </div>
                <p className="text-[13px] text-[#6b7280] leading-[1.8]">{m.sub}</p>
                <p className="text-[13px] font-bold text-primary mt-3 group-hover:translate-x-1 transition-transform">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="내시경센터-안내">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>💡</span> 내시경센터 안내
          </h2>
          <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
            <p>
              장튼튼항외과의원 내시경센터에서는
              <Link href="/endoscopy/gastro" className="text-primary font-bold hover:underline">위내시경</Link>·
              <Link href="/endoscopy/colon" className="text-primary font-bold hover:underline">대장내시경</Link>·
              <Link href="/endoscopy/polyp" className="text-primary font-bold hover:underline">용종 절제술</Link>을
              중심으로 소화기 점막을 관찰하고 필요한 처치를 상담합니다.
            </p>
            <p>
              속쓰림·혈변·검진·가족력이 있을 때 방문할 수 있으며, 금식·장정결 등 준비 과정이 중요합니다.
              수면 여부와 검사 순서는 상담 후 결정하고, 결과에 따라 추적 관찰이나 추가 진료를 안내합니다.
            </p>
          </div>
        </section>

        <StaticFaq items={faqs} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      </div>
    </div>
  )
}
