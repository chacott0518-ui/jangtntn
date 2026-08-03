import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery, { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '피부종양센터 | 장튼튼항외과의원',
  description: '지방종·피지낭종·섬유종 제거 상담. 국소마취 하 외래 시술 가능 여부는 크기·위치에 따라 달라질 수 있습니다.',
  keywords: '피부종양, 피부종양제거, 지방종, 표피낭종, 연성섬유종, 김포 지방종제거',
  alternates: { canonical: 'https://www.jangtntnhang.com/skin' },
}

const menus = [
  { href: '/skin/lipoma', title: '지방종', sub: '피부 아래에 지방 세포가 뭉쳐 형성되는 양성 종양으로, 국소마취 후 작은 절개로 간단히 제거할 수 있습니다.', icon: '🟡', tag: '당일시술' },
  { href: '/skin/cyst', title: '피지낭종 (표피낭종)', sub: '피지선이 막혀 피부 아래에 피지와 각질이 쌓이는 낭종. 염증 발생 전 제거가 중요합니다.', icon: '⚪', tag: '당일시술' },
  { href: '/skin/fibroma', title: '연성섬유종 (쥐젖)', sub: '마찰이 많은 부위에 생기는 양성 피부 종양. 전기소작 또는 절제로 간단히 치료합니다.', icon: '🟤', tag: '간단제거' },
]

const faqs = [
  {
    q: '피부종양센터에서는 무엇을 치료하나요?',
    a: '만져지는 혹·낭종·쥐젖 등 양성으로 보이는 피부 병변을 상담합니다. 대표적으로 지방종·표피낭종·연성섬유종이 있으며, 크기와 위치에 따라 치료 방법이 달라질 수 있습니다. 악성이 의심되면 추가 검사가 필요할 수 있어 진찰 후 치료·관찰 방향을 안내합니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '지방종은 꼭 제거해야 하나요?',
    a: '크기가 작고 불편이 없으면 경과 관찰이 가능한 경우도 있습니다. 커지거나 통증이 있거나 위치가 거슬리면 절제를 상담할 수 있으며, 치료 여부는 상태에 따라 달라질 수 있습니다. 자세한 내용과 시술 흐름은 지방종 페이지에서 확인할 수 있으니 함께 참고해 주세요.',
  },
  {
    q: '표피낭종에 염증이 있으면 바로 자르나요?',
    a: '급성 염증기에는 먼저 염증을 가라앉히는 처치가 필요할 수 있습니다. 염증이 조절된 뒤 낭종 절제를 고려하는 경우가 많으며, 개인 상태와 위치에 따라 치료 순서가 달라질 수 있습니다. 방문 시 상태를 확인한 뒤 다음 단계를 안내해 드립니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '당일 시술이 가능한가요?',
    a: '크기·위치·염증 여부·진료 일정에 따라 당일 진행이 가능한 경우가 있습니다. 모든 병변이 당일 제거되는 것은 아니며, 준비가 더 필요할 수 있습니다. 방문 전 상담·예약을 하시면 시술 준비가 더 원활할 수 있어 미리 문의를 권합니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '시술 후 흉터는 어떻게 관리하나요?',
    a: '절개 부위는 개인 체질과 위치에 따라 흉터 정도가 달라질 수 있습니다. 드레싱·샤워·운동 제한 등 안내를 따르는 것이 중요하며, 회복 속도도 개인차가 있을 수 있습니다. 붓기·통증·분비물 등 이상 증상이 있으면 경과 관찰을 위해 재방문이 필요할 수 있습니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
]

export default function SkinPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/medical/skin/common/skin-clinic-image-01.webp" alt="피부종양센터" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">피부종양센터</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">피부종양센터</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">국소마취 하 외래 시술 가능 여부는 상담 후 안내합니다</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '피부종양센터-안내', label: '피부종양센터 안내' },
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

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="피부종양센터-안내">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>💡</span> 피부종양센터 안내
          </h2>
          <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
            <p>
              장튼튼항외과의원 피부종양센터는 피부 아래 혹·낭종·쥐젖이 신경 쓰일 때 상담하는 진료입니다.
              <Link href="/skin/lipoma" className="text-primary font-bold hover:underline">지방종</Link>·
              <Link href="/skin/cyst" className="text-primary font-bold hover:underline">표피낭종</Link>·
              <Link href="/skin/fibroma" className="text-primary font-bold hover:underline">연성섬유종</Link>을
              중심으로 크기·위치·염증 여부를 확인합니다.
            </p>
            <p>
              커지거나 통증이 있거나 염증이 반복될 때 방문하시면 좋습니다.
              국소마취 하 외래 절제 가능 여부는 상태에 따라 달라지며, 시술 후 드레싱·재방문 안내를 드립니다.
            </p>
          </div>
        </section>

        <MedicalImageGallery
          title="피부종양클리닉 안내 이미지"
          items={[
            { src: '/images/medical/skin/common/skin-clinic-image-01.webp', caption: '피부종양클리닉 이미지 01' },
            { src: '/images/medical/skin/common/skin-clinic-image-02.webp', caption: '피부종양클리닉 이미지 02' },
          ]}
        />

        <StaticFaq items={faqs} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      </div>
    </div>
  )
}
