import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '기타외과질환 | 장튼튼항외과의원',
  description: '화상·내성발톱·상처봉합·영양수액·예방접종 상담. 일상 외과 문제를 정도에 맞춰 처치·경과를 관찰합니다.',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery' },
}

const menus = [
  { href: '/surgery/wound', title: '상처 치료', sub: '찰과상·열상·봉합이 필요한 상처부터 만성 상처까지 외과전문의가 직접 처치합니다.', icon: '🩹', tag: '응급가능' },
  { href: '/surgery/burn', title: '화상 치료', sub: '1·2·3도 화상의 단계별 치료를 상담합니다. 상태에 맞는 드레싱으로 회복을 돕습니다.', icon: '🔥', tag: '전문치료' },
  { href: '/surgery/nail', title: '내성발톱', sub: '발톱이 살을 파고들어 생기는 통증·염증·화농. 교정·수술 가능 여부는 상담 후 안내합니다.', icon: '💅', tag: '통증없는' },
  { href: '/surgery/nutrition', title: '영양 수액', sub: '비타민·미네랄·아미노산이 포함된 맞춤형 영양 수액으로 피로 회복과 면역력 강화를 도와드립니다.', icon: '💉', tag: '당일가능' },
]

const faqs = [
  {
    q: '기타외과질환에서는 무엇을 보나요?',
    a: '상처·화상·내성발톱·영양수액 등 일상에서 생기는 외과 문제를 상담합니다. 증상 정도와 부위가 다양해 처치 방법이 달라질 수 있으며, 방문 전 증상을 정리해 오시면 도움이 됩니다. 응급성이 높거나 중증이 의심되면 가까운 응급실 이용도 함께 안내할 수 있습니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '상처는 언제 봉합이 필요한가요?',
    a: '깊이와 벌어짐·출혈·오염 정도에 따라 봉합 여부를 판단합니다. 시간이 지난 상처는 바로 봉합이 어려울 수 있어 빠른 상담이 도움이 됩니다. 자세한 내용은 상처 치료 페이지를 참고하시고, 필요하면 방문 전 문의해 주시면 안내해 드립니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '화상은 집에서 처치해도 되나요?',
    a: '가벼운 1도 화상은 냉각·보호로 경과를 볼 수 있는 경우가 있습니다. 물집·넓은 범위·얼굴·손·감염이 의심되면 진료를 권하며, 중증도는 진찰 후 판단합니다. 처치 방법은 상태에 따라 달라질 수 있어 화상 치료 안내 페이지도 함께 확인해 주세요. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '내성발톱은 수술 없이 좋아지나요?',
    a: '초기에는 약물·드레싱·발톱 관리로 호전을 기대할 수 있는 경우가 있습니다. 반복 염증·화농이 있으면 교정술·부분 절제를 상담하며, 통증 정도는 개인차가 있습니다. 상태를 확인한 뒤 보존 치료와 시술 중 적합한 방법을 안내합니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '영양 수액은 누구나 맞을 수 있나요?',
    a: '피로·영양 보충 목적의 상담이 가능하지만 모든 분께 동일한 성분이 적용되지는 않습니다. 기저질환·알레르기·임신 여부를 확인한 뒤 진행합니다. 필요성과 종류는 진료 후 안내드리며, 당일 가능 여부는 일정에 따라 달라질 수 있습니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
]

export default function SurgeryPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/05-recovery-room.webp" alt="기타외과질환" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">기타외과질환</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">기타외과질환</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">일상 외과 문제를 상태에 맞춰 상담·처치합니다</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '기타외과질환-안내', label: '기타외과질환 안내' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {menus.map((m) => (
            <Link key={m.href} href={m.href} className="group flex gap-4 p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-[22px]" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.1), rgba(13,148,136,0.1))' }}>{m.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-black text-[#0d1117]">{m.title}</h3>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.tag}</span>
                </div>
                <p className="text-[12px] text-[#6b7280] leading-[1.7] mt-1">{m.sub}</p>
                <p className="text-[12px] font-bold text-primary mt-2 group-hover:translate-x-1 transition-transform">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="기타외과질환-안내">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>💡</span> 기타외과질환 안내
          </h2>
          <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
            <p>
              장튼튼항외과의원에서는
              <Link href="/surgery/wound" className="text-primary font-bold hover:underline">상처</Link>·
              <Link href="/surgery/burn" className="text-primary font-bold hover:underline">화상</Link>·
              <Link href="/surgery/nail" className="text-primary font-bold hover:underline">내성발톱</Link>·
              <Link href="/surgery/nutrition" className="text-primary font-bold hover:underline">영양 수액</Link> 등
              일상에서 생기는 외과 문제를 상담합니다.
            </p>
            <p>
              출혈·통증·감염이 의심될 때, 또는 상처·발톱 불편이 반복될 때 방문할 수 있습니다.
              처치 후 드레싱·재방문·생활 주의사항을 안내하며, 중증도에 따라 상급 병원 연계가 필요할 수 있습니다.
            </p>
          </div>
        </section>

        <StaticFaq items={faqs} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      </div>
    </div>
  )
}
