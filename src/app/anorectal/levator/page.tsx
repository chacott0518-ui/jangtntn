import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BoltIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  FaceFrownIcon,
  HeartIcon,
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
  title: '항문거근증후군 | 장튼튼항외과의원',
  description:
    '항문거근증후군의 만성 골반·직장 통증 증상과 이완 치료 안내. 앉아 있을 때 통증이 심하면 김포 구래역 장튼튼항외과의원에서 감별 진찰을 받을 수 있습니다.',
  keywords: '항문거근증후군, 항문 통증, 김포 항문통증, 장튼튼항외과의원',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal/levator' },
  openGraph: {
    title: '항문거근증후군 | 장튼튼항외과의원',
    description:
      '항문거근증후군의 만성 골반·직장 통증 증상과 이완 치료 안내. 앉아 있을 때 통증이 심하면 김포 구래역 장튼튼항외과의원에서 감별 진찰을 받을 수 있습니다.',
    url: 'https://jtntn.co.kr/anorectal/levator',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '항문거근증후군은 어떤 통증인가요?',
    a: '항문·직장 깊숙한 압박감이나 묵직한 통증이 반복되는 경우가 많습니다. 오래 앉아 있을 때 심해지는 경향이 있으며, 배변과 무관하게 나타나기도 합니다. 통증 양상은 개인마다 달라 다른 항문 질환과 감별이 필요하므로 진찰이 중요합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '검사에서 이상이 없어도 아플 수 있나요?',
    a: '기질적 병변이 뚜렷하지 않은 기능성 통증인 경우가 있습니다. 그렇다고 모든 통증이 항문거근증후군은 아니며, 치열·치핵·골반 질환과 겹칠 수 있습니다. 유사 질환을 배제한 뒤 진단하므로 진찰과 필요 검사가 중요합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '치열·치핵과 어떻게 구분하나요?',
    a: '치열은 배변 시 찢어지는 통증이, 치핵은 출혈·돌출이 더 흔합니다. 항문거근증후군은 배변과 무관한 깊은 압박감이 두드러질 수 있습니다. 증상만으로 단정하기 어려워 직접 진찰이 필요하며 개인별 통증 패턴을 듣고 감별합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '바이오피드백 치료가 필요한가요?',
    a: '근육 과긴장이 확인되면 이완 훈련을 먼저 권하는 경우가 많습니다. 효과와 필요 횟수는 개인 반응에 따라 다르며, 모든 환자에게 동일한 일정으로 적용되지는 않습니다. 상태에 따라 약물·전기자극·보톡스 등을 함께 검토합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '스트레스와도 관련이 있나요?',
    a: '자세·긴장·스트레스가 골반저 근육 긴장과 연관될 수 있습니다. 모든 환자에게 같은 정도로 적용되지는 않으며, 직업·수면·배변 습관도 함께 영향을 줄 수 있습니다. 생활 요인과 증상 패턴을 진료에서 확인하고 관리 방법을 안내합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '수술로 치료하나요?',
    a: '항문거근증후군은 보통 수술이 1차 치료가 아닙니다. 이완 치료와 약물·보존 요법을 중심으로 접근하며, 효과가 나타나는 시점도 개인차가 있습니다. 다른 수술적 질환이 동반됐는지는 진찰로 구분한 뒤 치료 방향을 정합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

const related = [
  { href: '/anorectal/constipation', title: '변비·설사', desc: '배변 습관과 골반저 근육 긴장' },
  { href: '/anorectal/fissure', title: '치열', desc: '배변 시 통증과 감별이 필요한 질환' },
  { href: '/about/info', title: '진료안내', desc: '방문 전 진료 시간과 절차 확인' },
]

export default function Page() {
  const symptoms = [
    { icon: FaceFrownIcon, tone: 'coral' as const, title: '깊은 압박감', desc: '항문·직장 깊숙한 곳의 압박감·묵직함이 나타날 수 있습니다.' },
    { icon: ClockIcon, tone: 'blue' as const, title: '앉을 때 악화', desc: '오래 앉아 있을 때 통증이 심해지는 경향이 있습니다.' },
    { icon: ExclamationTriangleIcon, tone: 'yellow' as const, title: '배변 후 악화', desc: '배변 후 통증이 더 뚜렷해질 수 있습니다.' },
    { icon: BoltIcon, tone: 'peach' as const, title: '방사통', desc: '좌측 대퇴부·허리 쪽으로 통증이 뻗치듯 느껴질 수 있습니다.' },
    { icon: HeartIcon, tone: 'lavender' as const, title: '반복되는 직장 통증', desc: '20분 이상 지속되는 통증이 반복적으로 나타날 수 있습니다.' },
  ]
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/colorectal-center-hero.webp"
          alt="장튼튼항외과의원 항문거근증후군 진료 안내"
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
            <strong>항문거근증후군</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            항문거근증후군
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            항문 주위 근육 과긴장과 관련될 수 있는 만성 골반 통증
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
                항문거근증후군은 항문거근(levator ani)이 과도하게 긴장하거나 경련을 일으켜 항문 주위 또는
                직장 안쪽에 만성 통증이 발생하는 기능성 질환입니다.
              </p>
              <p>
                기질적 원인 없이 생기는 경우가 많으며 스트레스·자세·정신적 긴장과 밀접하게 관련될 수
                있습니다. 다른 항문 질환과 증상이 겹칠 수 있어 감별 진찰이 중요합니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="coral" icon={FaceFrownIcon} title="대표 증상" desc="항문·직장 깊은 압박감" />
            <StatChip tone="blue" icon={ClockIcon} title="악화 요인" desc="장시간 좌위·스트레스" />
            <StatChip tone="lavender" icon={ExclamationTriangleIcon} title="특징" desc="기질적 병변이 뚜렷하지 않음" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="치료 방향" desc="이완 훈련 등 보존 치료 중심" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '항문거근증후군이란 무엇인가요?' },
            { id: 's2', label: '항문거근증후군의 주요 증상' },
            { id: 's3', label: '치열·치핵과의 차이' },
            { id: 's4', label: '항문거근증후군 치료 방법' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>항문거근증후군이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              항문거근(levator ani)이 과도하게 긴장하거나 경련을 일으켜 항문 주위 또는 직장 안쪽에 만성
              통증이 발생하는 기능성 질환입니다. 기질적 원인 없이 생기는 경우가 많으며 스트레스·자세·정신적
              긴장과 밀접합니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>항문거근증후군의 주요 증상</SectionTitle>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            {symptoms.map((s) => (
              <IconCard key={s.title} tone={s.tone} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>치열·치핵과의 차이</SectionTitle>
          <Prose>
            <p>
              치열은 배변 시 찢어지는 듯한 통증이, 치핵은 출혈·돌출이 더 흔한 증상으로 알려져 있습니다.
              항문거근증후군은 배변과 무관하게 나타나는 깊은 압박감이 특징적일 수 있습니다.
            </p>
          </Prose>
          <Banner tone="yellow" icon={ExclamationTriangleIcon}>
            증상만으로 단정하기 어려워 직접 진찰이 필요합니다. 유사 질환을 배제한 뒤 진단하는 경우가
            많습니다.
          </Banner>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>항문거근증후군 치료 방법</SectionTitle>
          <Prose>
            <p>
              항문거근증후군은 보통 수술이 1차 치료로 검토되지 않으며, 이완 치료와 약물·보존 요법을 중심으로
              접근하는 경우가 많습니다.
            </p>
          </Prose>
          <FlowSteps
            cols={4}
            tone="mint"
            items={[
              { title: '바이오피드백 치료', desc: '항문 근육 이완 훈련으로, 1차 치료법으로 검토되는 경우가 많습니다.' },
              { title: '전기 자극 치료', desc: '항문거근에 전기 자극을 주어 긴장된 근육의 이완을 돕는 방법입니다.' },
              { title: '보톡스 주입', desc: '근육에 직접 보톡스를 주입해 과긴장 완화를 시도하는 방법입니다.' },
              { title: '약물 치료', desc: '근이완제·항우울제 등으로 통증과 근긴장 조절을 돕는 방법입니다.' },
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">정확한 감별 진찰이 우선입니다</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            항문거근증후군은 유사 질환과의 감별이 중요합니다.
            <br />
            장튼튼항외과의원 외과전문의가 직접 진찰하고 안내합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
