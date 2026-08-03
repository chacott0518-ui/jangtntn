import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '대장항문센터 | 장튼튼항외과의원',
  description: '치핵·치열·치루·변비·항문소양증 등 대장항문 질환 진료. 외과전문의 상담 후 상태에 맞는 치료 방향을 안내합니다.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal' },
}

const diseases = [
  { href: '/anorectal/hemorrhoid', title: '치핵(치질)', sub: '항문 주위 혈관이 늘어나 돌출되는 가장 흔한 항문 질환', icon: '🩸', tag: '가장 흔함' },
  { href: '/anorectal/fissure', title: '치열', sub: '항문 점막이 찢어져 배변 시 극심한 통증과 출혈이 발생', icon: '⚡', tag: '통증' },
  { href: '/anorectal/fistula', title: '치루', sub: '항문 주위 농양이 만성화되어 누공이 생기는 질환', icon: '🔴', tag: '수술 필요' },
  { href: '/anorectal/condyloma', title: '항문콘딜로마', sub: 'HPV 바이러스로 인한 항문 주위 사마귀성 병변', icon: '🦠', tag: '바이러스성' },
  { href: '/anorectal/constipation', title: '변비/설사', sub: '만성 변비·과민성 장증후군 등 배변 장애 전문 치료', icon: '💊', tag: '생활습관' },
  { href: '/anorectal/levator', title: '항문거근증후군', sub: '항문 주위 근육 긴장으로 인한 만성 골반 통증', icon: '⚕️', tag: '근육통' },
  { href: '/anorectal/pilonidal', title: '모소동', sub: '꼬리뼈 부위 모낭 감염으로 생기는 낭종 및 누공', icon: '🎯', tag: '수술' },
  { href: '/anorectal/pruritus', title: '항문소양증', sub: '항문 주위의 지속적인 가려움증 원인 진단 및 치료', icon: '🌿', tag: '가려움' },
]

const faqs = [
  {
    q: '대장항문센터에서는 어떤 증상을 보나요?',
    a: '출혈·통증·가려움·돌출감·배변 이상 등 항문·대장 관련 증상을 상담합니다. 치핵·치열·치루·소양증·콘딜로마·변비 등이 대표 질환이며, 증상만으로 원인을 단정하기는 어렵습니다. 진찰 후 치료 방향을 안내하고, 필요하면 추가 검사를 권할 수 있으니 불편이 있으면 상담해 주세요.',
  },
  {
    q: '항문 출혈이 있으면 치질인가요?',
    a: '출혈은 치핵에서 흔하지만 치열·용종·기타 원인일 수도 있어 감별이 필요합니다. 색·양·통증 동반 여부가 감별에 도움이 되지만 자가 판단만으로는 한계가 있습니다. 지속되거나 반복되면 진료를 권하며, 심한 출혈·어지럼이 있으면 응급 진료를 고려해 주세요. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '치핵은 꼭 수술이 필요한가요?',
    a: '초기 치핵은 좌욕·식이·약물로 경과를 볼 수 있는 경우가 있으며, 수술 적응은 일률적이지 않습니다. 돌출·통증·반복 출혈이 심하면 시술·수술을 상담합니다. 수술 여부는 단계와 생활 불편도에 따라 달라지며, 자세한 내용은 치핵 페이지에서 확인할 수 있습니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '치열과 치루는 어떻게 다른가요?',
    a: '치열은 항문 점막이 찢어져 배변 시 통증이 두드러지는 경우가 많습니다. 치루는 감염 통로(누공)가 생겨 분비물·반복 농양이 나타날 수 있습니다. 치료 방법이 달라 진찰과 필요 시 검사가 중요하며, 증상만으로 구분이 어려울 수 있어 진료 상담을 권합니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '변비만 있어도 대장항문 진료가 필요한가요?',
    a: '만성 변비·설사로 일상 불편이 크면 대장항문 상담을 받을 수 있습니다. 생활습관·약물·동반 항문 질환 여부를 함께 살피며, 배변 일지를 가져오시면 상담에 도움이 될 수 있습니다. 혈변·체중 감소·빈혈이 있으면 내시경 등 추가 검사가 필요할 수 있습니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '첫 방문 시 준비할 것이 있나요?',
    a: '증상 기간·복용 약·이전 수술 이력을 알려주시면 진료에 도움이 됩니다. 항문 진찰이 필요할 수 있어 편한 복장을 권합니다. 예약·당일 방문 가능 여부는 진료 일정에 따라 달라질 수 있으니, 방문 전 미리 문의해 주시면 안내가 한층 더 원활할 수 있습니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
]

export default function AnorectalPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/03-consultation-room.webp" alt="대장항문센터" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / <strong>대장항문센터</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">대장항문센터</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">외과전문의가 증상과 상태에 맞춰 진단·치료 방향을 안내합니다</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '대장항문센터-안내', label: '대장항문센터 안내' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {diseases.map((d) => (
            <Link key={d.href} href={d.href} className="group flex gap-4 p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-[22px]" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.1), rgba(13,148,136,0.1))' }}>{d.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-black text-[#0d1117]">{d.title}</h3>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">{d.tag}</span>
                </div>
                <p className="text-[12px] text-[#6b7280] leading-[1.7]">{d.sub}</p>
                <p className="text-[12px] font-bold text-primary mt-2 group-hover:translate-x-1 transition-transform">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="대장항문센터-안내">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>💡</span> 대장항문센터 안내
          </h2>
          <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
            <p>
              장튼튼항외과의원 대장항문센터는 출혈·통증·가려움·돌출감·배변 불편이 있을 때 상담하는 진료 영역입니다.
              <Link href="/anorectal/hemorrhoid" className="text-primary font-bold hover:underline">치핵</Link>·
              <Link href="/anorectal/fissure" className="text-primary font-bold hover:underline">치열</Link>·
              <Link href="/anorectal/fistula" className="text-primary font-bold hover:underline">치루</Link>·
              <Link href="/anorectal/pruritus" className="text-primary font-bold hover:underline">항문소양증</Link> 등 질환별로 증상과 경과가 달라 맞춤 평가가 필요합니다.
            </p>
            <p>
              방문이 필요한 때는 배변 시 출혈이 반복되거나, 통증이 일상생활에 지장을 주거나, 분비물·가려움이 오래갈 때입니다.
              문진과 진찰 후 필요하면 검사를 권하며, 보존 치료부터 시술·수술까지 상태에 맞춰 안내합니다.
              수술 후 관리가 궁금하면 <Link href="/about/aftercare" className="text-primary font-bold hover:underline">수술후주의사항</Link>도 함께 확인해 주세요.
            </p>
          </div>
        </section>

        <StaticFaq items={faqs} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      </div>
    </div>
  )
}
