import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  EyeDropperIcon,
  FireIcon,
  ShieldExclamationIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery, { OfficialSource } from '@/components/content/MedicalImageGallery'
import {
  Banner,
  ClinicHeroScrim,
  ClinicToc,
  FaqShell,
  FlowSteps,
  IconCard,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StatChip,
} from '../_ui'

export const metadata: Metadata = {
  title: '치루 | 장튼튼항외과의원',
  description:
    '치루·항문 주위 농양의 증상과 수술 치료 안내. 분비물·반복 통증이 있을 때 김포 구래역 장튼튼항외과의원에서 외과전문의가 진찰합니다.',
  keywords: '치루, 항문농양, 항문주위농양, 치루치료, 치루수술, 항문농양치료, 항문농양수술, 김포 치루, 김포 항문농양',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal/fistula' },
  openGraph: {
    title: '치루 | 장튼튼항외과의원',
    description:
      '치루·항문 주위 농양의 증상과 수술 치료 안내. 분비물·반복 통증이 있을 때 김포 구래역 장튼튼항외과의원에서 외과전문의가 진찰합니다.',
    url: 'https://jtntn.co.kr/anorectal/fistula',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '치루는 약만으로 나을 수 있나요?',
    a: '치루는 누공 경로가 남아 있어 약물만으로 완치를 기대하기 어렵습니다. 항생제는 급성 염증 완화에 도움이 될 수 있으나 근본 치료는 보통 수술입니다. 누공의 위치·깊이는 개인마다 달라 진찰 후 수술 방법을 상의하며 방치 시 경로가 복잡해질 수 있습니다.',
  },
  {
    q: '항문 주위 농양과 치루는 같은가요?',
    a: '농양은 급성 고름집이고, 치루는 농양 이후 남는 만성 터널인 경우가 많습니다. 농양만 배농해도 누공이 남으면 분비물이 반복될 수 있습니다. 상태 진행은 사람마다 달라 추적 진찰이 중요하며 필요하면 수술 시기를 함께 결정합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '치루 수술은 어떤 방식으로 하나요?',
    a: '저위·고위·복잡 치루에 따라 절개술, Seton법, 피판술 등을 검토합니다. 괄약근 침범 정도에 따라 방법이 달라지며 한 가지가 모두에게 맞지는 않습니다. 적합한 술은 항문 진찰과 필요 시 영상 검사 결과를 보고 개인별로 결정합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '수술 후 변실금이 생길 수 있나요?',
    a: '괄약근을 많이 침범한 치루에서는 기능 보존을 고려한 방법을 선택합니다. 위험도는 누공 경로와 개인 상태에 따라 다르며 모든 수술에서 동일한 것은 아닙니다. 수술 전 예상 경과와 주의사항을 충분히 설명드리고 상담하며 개인별 위험을 함께 검토합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '분비물이 계속 나오면 바로 와야 하나요?',
    a: '항문 주위 구멍에서 고름·분비물이 반복되면 치루를 의심할 수 있습니다. 방치하면 경로가 복잡해질 수 있어 조기 진찰이 도움이 됩니다. 통증·발열 동반 여부는 개인마다 달라 증상과 함께 확인하고 필요한 처치를 안내합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

const related = [
  { href: '/anorectal/hemorrhoid', title: '치질', desc: '항문 주위 대표 질환을 함께 확인' },
  { href: '/anorectal/pilonidal', title: '모소동', desc: '꼬리뼈 부위 낭종·누공 분비물 안내' },
  { href: '/about/surgery', title: '수술 안내', desc: '수술 진행 방식과 절차 안내' },
  { href: '/about/aftercare', title: '수술후주의사항', desc: '수술 후 회복 기간 관리 안내' },
]

export default function FistulaPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/colorectal-center-hero.webp"
          alt="장튼튼항외과의원 치루 진료 안내"
          fill
          className="object-cover object-[58%_center] lg:object-[62%_center]"
          sizes="100vw"
          priority
        />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:underline">홈</Link>
            <span>/</span>
            <Link href="/anorectal" className="hover:underline">대장항문센터</Link>
            <span>/</span>
            <strong>치루</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            치루 <span className="text-[#6b7280] text-[16px] md:text-[18px] font-semibold">및 항문주위농양</span>
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            항문 주위 농양에서 이어질 수 있는 만성 누공 질환
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-7 md:pb-10 space-y-7 md:space-y-8">
        {/* 핵심요약 */}
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                치루는 항문샘에 세균이 침입해 항문 주위 농양이 형성되고, 이 농양이 터지면서 항문 내부와 항문
                주위 피부를 연결하는 비정상적인 터널(누공)이 생긴 상태를 말합니다.
              </p>
              <p>
                치루는 저절로 낫는 경우가 드물고, 대부분 수술적 치료가 필요한 것으로 설명됩니다. 방치하면
                누공 경로가 더 복잡하게 진행될 수 있어 조기 진찰이 도움이 됩니다.
              </p>
              <p>
                저위·고위·복잡 치루 등 형태에 따라 적합한 수술 방법이 달라질 수 있습니다. 분비물이나 반복되는
                통증이 있다면 김포·구래동 장튼튼항외과의원에서 상태를 확인해 볼 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="coral" icon={EyeDropperIcon} title="대표 증상" desc="분비물·통증·반복 부종" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="유형" desc="저위·고위·복잡 치루" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="치료 방향" desc="대부분 수술적 치료 필요" />
            <StatChip tone="yellow" icon={ExclamationTriangleIcon} title="주의" desc="방치 시 경로가 복잡해질 수 있음" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '치루란 무엇인가요?' },
            { id: 's2', label: '치루의 주요 증상' },
            { id: 's3', label: '치루 진찰과 검사 방법' },
            { id: 's4', label: '치루 수술 방법' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>치루란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              치루는 항문샘에 세균이 침입하여 항문 주위 농양이 형성되고, 이 농양이 터지면서 항문 내부와 항문
              주위 피부를 연결하는 비정상적인 터널(누공)이 생긴 상태입니다.
            </p>
            <p>
              치루는 저절로 낫지 않는 것으로 알려져 있으며, 근본적인 해결을 위해서는 수술로 누공을 제거하는
              방법이 일반적으로 검토됩니다. 방치하면 누공이 더 복잡하게 진행될 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>치루의 주요 증상</SectionTitle>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            <IconCard tone="coral" icon={EyeDropperIcon} title="지속되는 분비물" desc="항문 주위 피부에서 고름·분비물이 지속적으로 나올 수 있습니다." />
            <IconCard tone="peach" icon={FireIcon} title="통증·부종 반복" desc="항문 주위 통증, 불쾌감, 부종이 반복될 수 있습니다." />
            <IconCard tone="lavender" icon={Squares2X2Icon} title="누공 입구" desc="누공 입구 부위 피부 함몰 또는 구멍이 보일 수 있습니다." />
            <IconCard tone="yellow" icon={ExclamationTriangleIcon} title="발열·오한" desc="염증이 심한 시기에는 발열·오한이 동반되기도 합니다." />
            <IconCard tone="blue" icon={ShieldExclamationIcon} title="소양증·짓무름" desc="분비물로 인한 항문 소양증과 피부 짓무름이 나타날 수 있습니다." />
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>치루 진찰과 검사 방법</SectionTitle>
          <Prose>
            <p>
              진료에서는 분비물·통증·발열 등 증상의 기간과 양상을 먼저 확인합니다. 항문 진찰로 누공 입구와
              경로를 살펴보며, 상태에 따라 영상 검사를 함께 검토할 수 있습니다.
            </p>
          </Prose>
          <FlowSteps
            cols={3}
            tone="blue"
            items={[
              { title: '증상 확인', desc: '분비물·통증·발열의 기간과 양상을 확인합니다.' },
              { title: '항문 진찰', desc: '누공 입구와 경로, 괄약근 침범 정도를 살펴봅니다.' },
              { title: '수술 상담', desc: '형태에 맞는 수술 방법을 개인별로 안내합니다.' },
            ]}
          />
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>치루 수술 방법</SectionTitle>
          <Banner tone="peach">
            치루는 형태에 따라 적합한 수술 방법이 달라질 수 있어, 한 가지 방법이 모든 경우에 적용되지는
            않습니다.
          </Banner>
          <FlowSteps
            items={[
              { title: '누공 절개술 · 저위 치루', desc: '누공 경로를 완전히 열어 제거하는 방법으로, 단순 저위 치루에 가장 많이 사용하며 치유율이 높은 편입니다.' },
              { title: 'Seton법 · 고위 치루', desc: '괄약근을 많이 침범한 경우 실을 통과시켜 서서히 절개하는 방법으로, 변실금 위험을 최소화하기 위해 검토됩니다.' },
              { title: '점막 전진 피판술 · 복잡 치루', desc: '누공 내공을 막고 정상 점막으로 덮는 방법으로, 복잡 치루·재발 치루에서 검토되는 경우가 있습니다.' },
            ]}
          />
        </section>

        <div id="images" className="scroll-mt-20">
          <MedicalImageGallery
            title="관련 이미지"
            items={[{ src: '/images/medical/anorectal/fistula/anal-abscess-fistula-diagram.webp', caption: '항문농양 및 치루 모식도' }]}
          />
        </div>

        <OfficialSource
          sources={['보건복지부', '대한의학회']}
          note="위 항문농양 및 치루 모식도는 보건복지부·대한의학회 자료에 표기된 출처를 따릅니다. 이 페이지는 일반적인 건강정보이며 개인의 진단·치료를 대신하지 않습니다."
        />

        <FaqShell>
          <StaticFaq items={faqs} hideHeading />
        </FaqShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

        <section className="space-y-3">
          <SectionTitle>관련 콘텐츠</SectionTitle>
          <RelatedCarousel items={related} />
        </section>

        <div className="rounded-[16px] p-5 md:p-6 text-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>
          <p className="text-white font-bold text-[16px] mb-2 break-keep">항문 주위 분비물, 방치하지 마세요</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            치루는 대부분 수술적 치료가 필요한 것으로 설명됩니다.
            <br />
            조기에 확인할수록 수술 범위와 회복 기간에 도움이 될 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
