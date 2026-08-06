import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BeakerIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  FaceFrownIcon,
  MoonIcon,
  ShieldExclamationIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import {
  Banner,
  ChecklistPanel,
  ClinicHeroScrim,
  ClinicToc,
  FaqShell,
  IconCard,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StatChip,
} from '../_ui'

export const metadata: Metadata = {
  title: '항문소양증 | 장튼튼항외과의원',
  description:
    '항문소양증의 원인·증상과 위생·약물 치료 안내. 야간 가려움이 심할 때 김포 구래역 장튼튼항외과의원에서 원인 질환을 함께 확인합니다.',
  keywords: '항문가려움, 항문소양증, 김포 항문가려움, 김포 항문소양증',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal/pruritus' },
  openGraph: {
    title: '항문소양증 | 장튼튼항외과의원',
    description:
      '항문소양증의 원인·증상과 위생·약물 치료 안내. 야간 가려움이 심할 때 김포 구래역 장튼튼항외과의원에서 원인 질환을 함께 확인합니다.',
    url: 'https://jtntn.co.kr/anorectal/pruritus',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '항문 가려움만으로도 진료가 필요한가요?',
    a: '네, 반복되거나 수면을 방해할 정도라면 진찰이 도움이 됩니다. 치핵·치루·감염·피부염 등 원인이 다양하기 때문에 연고만으로 해결되지 않는 경우가 있습니다. 증상 정도와 유발 요인은 개인마다 달라 직접 확인이 필요하며 원인에 맞게 치료를 계획합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '세정을 자주 하면 더 좋아지나요?',
    a: '과도한 비누 세정이나 강한 문지름은 피부를 더 자극할 수 있습니다. 부드러운 세정 후 완전히 말리는 방식이 권장되는 경우가 많습니다. 피부 상태와 원인에 따라 관리법이 달라 상담이 필요하며 잘못된 관리는 가려움을 오래가게 만들 수 있습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '약국 연고만 발라도 되나요?',
    a: '단기 증상 완화에는 도움이 될 수 있으나, 원인을 모른 채 오래 쓰면 피부가 약해질 수 있습니다. 특히 스테로이드 연고는 사용 기간 조절이 중요합니다. 가려움의 원인 질환 여부를 진찰에서 확인하는 것이 좋으며 개인별 사용법을 안내드립니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '야간에만 가려운 것도 항문소양증인가요?',
    a: '항문소양증은 야간에 심해지는 경우가 흔하지만, 그것만으로 진단이 확정되지는 않습니다. 요충이나 다른 피부 질환도 야간 증상을 만들 수 있습니다. 연령·동반 증상은 개인마다 달라 감별 진찰이 필요하며 필요 시 원인 질환을 함께 치료합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '치핵이나 치루가 가려움의 원인일 수 있나요?',
    a: '분비물·습기·피부 자극이 있으면 소양증이 악화될 수 있습니다. 원인 질환을 함께 치료해야 가려움이 줄어드는 경우가 있어 피부 관리만으로는 부족한 때도 있습니다. 동반 병변 유무는 항문 진찰로 확인하며 개인별 치료 순서를 정합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

const related = [
  { href: '/anorectal/hemorrhoid', title: '치질', desc: '분비물·습기와 함께 나타날 수 있음' },
  { href: '/anorectal/fistula', title: '치루 및 항문주위농양', desc: '반복 분비물이 가려움 원인이 될 수 있음' },
  { href: '/anorectal/condyloma', title: '항문콘딜로마', desc: '가려움·불편감이 함께 나타날 수 있음' },
]

export default function Page() {
  const symptoms = [
    { icon: FaceFrownIcon, tone: 'coral' as const, title: '심한 가려움증', desc: '항문 주위 심한 가려움증이 야간에 악화되는 경향이 있습니다.' },
    { icon: ExclamationTriangleIcon, tone: 'yellow' as const, title: '피부 손상', desc: '긁은 후 피부 손상 및 2차 감염으로 이어질 수 있습니다.' },
    { icon: ShieldExclamationIcon, tone: 'peach' as const, title: '발적·태선화', desc: '항문 주위 발적·습진·태선화가 나타날 수 있습니다.' },
    { icon: BeakerIcon, tone: 'blue' as const, title: '분비물 증가', desc: '분비물 증가로 속옷이 오염되는 불편이 있을 수 있습니다.' },
    { icon: MoonIcon, tone: 'lavender' as const, title: '수면 방해', desc: '수면을 방해할 정도의 가려움이 반복될 수 있습니다.' },
  ]
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/colorectal-center-hero.webp"
          alt="장튼튼항외과의원 항문소양증 진료 안내"
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
            <strong>항문소양증</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            항문소양증
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            항문 주위의 지속적인 가려움증과 피부 자극
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
                항문소양증은 항문 주위 피부에 심한 가려움증이 반복되는 질환입니다. 긁으면 일시적으로
                시원하지만 피부 손상 후 더욱 심해지는 악순환이 생길 수 있습니다.
              </p>
              <p>
                성인 남성에서 더 흔하게 나타나는 경향이 있으며, 야간에 심해지는 경우가 많습니다. 원인이
                다양하므로 정확한 진단이 치료의 출발점이 될 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="coral" icon={FaceFrownIcon} title="대표 증상" desc="야간 악화되는 가려움증" />
            <StatChip tone="lavender" icon={ShieldExclamationIcon} title="주 발생층" desc="성인 남성에서 상대적으로 흔함" />
            <StatChip tone="yellow" icon={ExclamationTriangleIcon} title="악화 요인" desc="과도한 세정·자극적 식사" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="치료 방향" desc="원인 질환 확인 후 맞춤 관리" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '항문소양증이란 무엇인가요?' },
            { id: 's2', label: '항문소양증의 주요 증상' },
            { id: 's3', label: '생활에서 주의할 점' },
            { id: 's4', label: '항문소양증 치료 방법' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>항문소양증이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              항문 주위 피부에 심한 가려움증이 반복되는 질환입니다. 긁으면 일시적으로 시원하지만 피부 손상
              후 더욱 심해지는 악순환이 생깁니다. 성인 남성에서 더 흔하며 야간에 심해지는 경향이 있습니다.
              원인이 다양하므로 정확한 진단이 중요합니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>항문소양증의 주요 증상</SectionTitle>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            {symptoms.map((s) => (
              <IconCard key={s.title} tone={s.tone} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>생활에서 주의할 점</SectionTitle>
          <Prose>
            <p>
              과도한 비누 세정이나 강한 문지름은 피부를 더 자극할 수 있어, 부드러운 세정 후 완전히 말리는
              방식이 도움이 될 수 있습니다. 커피·맥주·초콜릿 같은 자극적인 음식은 증상을 키울 수 있어
              섭취량을 조절해 보는 것도 방법이 될 수 있습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              icon={SparklesIcon}
              title="도움이 될 수 있는 습관"
              items={[
                '부드러운 화장지 사용, 세정 후 완전히 건조하기',
                '속옷은 통기성이 좋은 소재로 자주 교체하기',
                '자극적인 음식(커피·맥주·초콜릿) 섭취 조절하기',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="주의·조절이 필요한 습관"
              items={[
                '비누로 과도하게 문지르며 세정하기',
                '진단 없이 시중 연고를 장기간 반복 사용하기',
                '가려움을 참지 못하고 강하게 긁기',
              ]}
            />
          </div>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>항문소양증 치료 방법</SectionTitle>
          <Banner tone="blue">
            가려움의 원인이 치핵·치루 등 다른 항문 질환인 경우, 원인 질환을 함께 치료해야 증상이 줄어드는
            경우가 있습니다.
          </Banner>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <IconCard tone="blue" icon={CheckCircleIcon} title="원인 질환 교정" desc="치핵·치루 등 항문 질환, 진균·요충 감염 등 원인을 먼저 확인하고 치료합니다." />
            <IconCard tone="mint" icon={SparklesIcon} title="위생 관리 교육" desc="부드러운 화장지 사용, 세정 후 완전 건조, 자극 음식 제한 등을 안내합니다." />
            <IconCard tone="peach" icon={ShieldExclamationIcon} title="국소 스테로이드 연고" desc="단기 사용으로 가려움과 염증 완화를 도울 수 있으며, 장기 사용은 피합니다." />
            <IconCard tone="lavender" icon={MoonIcon} title="항히스타민제" desc="야간 가려움이 심한 경우 복용해 수면의 질 개선을 도울 수 있습니다." />
          </div>
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">원인을 확인하는 것이 먼저입니다</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            항문소양증은 원인이 다양해 자가 치료보다 진찰을 통한 확인이 도움이 될 수 있습니다.
            <br />
            장튼튼항외과의원에서 상태를 함께 확인해 보세요.
          </p>
        </div>
      </div>
    </div>
  )
}
