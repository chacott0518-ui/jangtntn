import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BugAntIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  EyeDropperIcon,
  FireIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
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
  title: '항문콘딜로마 | 장튼튼항외과의원',
  description:
    '항문콘딜로마(HPV)의 증상과 제거·추적 관찰 안내. 항문 주위 사마귀성 병변이 있을 때 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
  keywords: '항문콘딜로마, 콘딜로마, 김포 항문콘딜로마, 장튼튼항외과의원',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal/condyloma' },
  openGraph: {
    title: '항문콘딜로마 | 장튼튼항외과의원',
    description:
      '항문콘딜로마(HPV)의 증상과 제거·추적 관찰 안내. 항문 주위 사마귀성 병변이 있을 때 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
    url: 'https://jtntn.co.kr/anorectal/condyloma',
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

const related = [
  { href: '/anorectal/pruritus', title: '항문소양증', desc: '가려움·불편감이 함께 나타날 수 있음' },
  { href: '/about/info', title: '진료안내', desc: '방문 전 진료 시간과 절차 확인' },
  { href: '/consultation', title: '온라인상담', desc: '방문 전 궁금한 점 미리 문의' },
]

export default function Page() {
  const symptoms = [
    { icon: Squares2X2Icon, tone: 'lavender' as const, title: '작은 구진·융기', desc: '항문 주위 작은 구진 또는 융기가 나타날 수 있습니다.' },
    { icon: ExclamationTriangleIcon, tone: 'yellow' as const, title: '가려움·통증', desc: '가려움증·불편감·배변 시 통증이 동반될 수 있습니다.' },
    { icon: EyeDropperIcon, tone: 'blue' as const, title: '분비물 증가', desc: '항문 분비물이 증가하는 경우가 있습니다.' },
    { icon: FireIcon, tone: 'coral' as const, title: '출혈 가능성', desc: '병변이 커지면 출혈이 발생할 수 있습니다.' },
    { icon: BugAntIcon, tone: 'peach' as const, title: '발견 지연', desc: '항문 내부 병변은 증상 없이 발견이 늦어질 수 있습니다.' },
  ]
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/colorectal-center-hero.webp"
          alt="장튼튼항외과의원 항문콘딜로마 진료 안내"
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
            <strong>항문콘딜로마</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            항문콘딜로마
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            HPV 바이러스 감염과 관련될 수 있는 항문 주위 사마귀성 병변
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
                항문콘딜로마는 HPV(인유두종 바이러스) 감염과 관련되어 항문 주위에 사마귀 모양의 병변이
                생기는 질환입니다. 성접촉을 통해 감염될 수 있으며 잠복기는 3주에서 8개월로 다양하게
                알려져 있습니다.
              </p>
              <p>
                초기에는 작은 구진이지만 치료하지 않으면 닭벼슬 모양으로 커지고 퍼질 수 있습니다. 재발이
                잦은 편이라 꾸준한 추적 관찰이 필요합니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="lavender" icon={BugAntIcon} title="원인" desc="HPV 감염과 관련" />
            <StatChip tone="coral" icon={Squares2X2Icon} title="대표 증상" desc="사마귀 모양 돌기·병변" />
            <StatChip tone="yellow" icon={ExclamationTriangleIcon} title="특징" desc="재발이 잦은 편" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="치료 방향" desc="제거 후 정기 추적 관찰" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '항문콘딜로마란 무엇인가요?' },
            { id: 's2', label: '항문콘딜로마의 주요 증상' },
            { id: 's3', label: '항문콘딜로마 치료 방법' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>항문콘딜로마란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              HPV(인유두종 바이러스) 감염으로 항문 주위에 사마귀 모양의 병변이 생기는 질환입니다.
              성접촉을 통해 감염되며 잠복기는 3주~8개월로 다양합니다. 초기에는 작은 구진이지만 치료하지
              않으면 닭벼슬 모양으로 커지고 퍼질 수 있습니다. 재발이 잦으므로 꾸준한 추적 관찰이
              필요합니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>항문콘딜로마의 주요 증상</SectionTitle>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            {symptoms.map((s) => (
              <IconCard key={s.title} tone={s.tone} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
          <Banner tone="yellow" icon={ExclamationTriangleIcon}>
            항문 내부 병변은 겉에서 잘 보이지 않아 발견이 늦어질 수 있습니다. 만져지는 돌기나 분비물
            변화가 있다면 진찰로 확인하는 것이 좋습니다.
          </Banner>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>항문콘딜로마 치료 방법</SectionTitle>
          <Prose>
            <p>
              병변의 크기·위치·범위에 따라 적합한 제거 방법이 달라질 수 있습니다. 치료 후에는 재발 여부를
              확인하기 위한 정기 추적 관찰이 함께 안내됩니다.
            </p>
          </Prose>
          <FlowSteps
            cols={4}
            tone="blue"
            items={[
              { title: '전기소작술', desc: '고주파 전류로 병변을 태워 제거하는 방법으로 외래에서 시행할 수 있습니다.' },
              { title: '레이저 치료', desc: 'CO2 레이저로 병변을 정밀 제거하는 방법으로 상처가 작고 회복이 빠른 편입니다.' },
              { title: '외과적 절제', desc: '큰 병변 또는 넓은 범위에 적용하며 근치적 제거를 목표로 합니다.' },
              { title: '약물 도포', desc: '이미퀴모드 크림 도포로 면역 반응을 유도하는 방법입니다.' },
            ]}
          />
        </section>

        <FaqShell>
          <StaticFaq items={faqs} hideHeading />
        </FaqShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

        <section className="space-y-3">
          <SectionTitle>관련 콘텐츠</SectionTitle>
          <RelatedCarousel items={related} />
        </section>

        <div className="rounded-[16px] p-5 md:p-6 text-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>
          <p className="text-white font-bold text-[16px] mb-2 break-keep">콘딜로마는 재발이 잦은 편입니다</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            치료 후에도 정기적인 추적 관찰이 도움이 될 수 있습니다.
            <br />
            장튼튼항외과의원 외과전문의가 상태에 맞게 진단하고 안내합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
