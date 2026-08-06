import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircleIcon,
  ClockIcon,
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
  title: '모소동 | 장튼튼항외과의원',
  description:
    '모소동(꼬리뼈 부위 낭종·누공)의 증상과 절개·절제 치료 안내. 앉을 때 통증·분비물이 있으면 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
  keywords: '모소동, 김포 모소동, 장튼튼항외과의원',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal/pilonidal' },
  openGraph: {
    title: '모소동 | 장튼튼항외과의원',
    description:
      '모소동(꼬리뼈 부위 낭종·누공)의 증상과 절개·절제 치료 안내. 앉을 때 통증·분비물이 있으면 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
    url: 'https://jtntn.co.kr/anorectal/pilonidal',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '모소동은 항문 질환과 같은가요?',
    a: '꼬리뼈 위쪽 엉덩이 틈새에 생기는 질환으로, 항문 안쪽 질환과는 위치가 다릅니다. 분비물·통증이 비슷하게 느껴질 수 있어 치루와 혼동하기 쉽습니다. 정확한 위치와 범위는 진찰로 확인하며 치료 계획도 개인 상태에 맞게 세웁니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '농양이 생겼을 때 바로 수술이 필요한가요?',
    a: '급성기에는 먼저 절개 배농으로 통증을 완화하는 경우가 많습니다. 이후 낭종·누공 경로에 대한 근치 치료를 계획하며, 염증이 심한 정도에 따라 시기가 달라집니다. 진행 정도와 염증 상태는 개인마다 달라 단계적으로 상의합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '모소동은 왜 재발하나요?',
    a: '털·습기·마찰이 남는 부위의 특성상 재발 위험이 있습니다. 수술 범위와 이후 위생·제모 관리에 따라 차이가 나며, 같은 수술을 받아도 경과가 다를 수 있습니다. 개인별 위험 요인을 진료에서 확인하고 예방 방법을 안내합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '피판 수술은 언제 고려하나요?',
    a: '병변이 넓거나 단순 절제만으로 봉합이 어려운 경우 검토할 수 있습니다. 모든 모소동에 동일한 방법이 적용되지는 않으며, 재발 병변에서도 선택적으로 사용됩니다. 병변 크기와 재발 여부를 보고 방법을 결정하고 회복 과정을 설명드립니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '오래 앉아 일하는 직업과 관련이 있나요?',
    a: '장시간 좌위와 마찰은 모소동 발생·악화와 연관될 수 있습니다. 체형·체모·위생 습관도 함께 영향을 주며, 직업만으로 진단이 정해지지는 않습니다. 직업 환경에 맞는 관리법을 상담에서 안내드리며 필요 시 수술 일정도 함께 상의합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '수술 후 일상 복귀는 언제쯤인가요?',
    a: '상처 치유 속도와 수술 방법에 따라 복귀 시점이 달라집니다. 앉는 자세와 활동량을 조절해야 하는 기간이 있을 수 있으며, 직장 복귀도 개인차가 큽니다. 경과를 보며 개인별 일정을 상의하니 평균 기간만으로 계획을 세우지 않는 것이 좋습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

const related = [
  { href: '/anorectal/fistula', title: '치루 및 항문주위농양', desc: '분비물·반복 염증 양상이 비슷할 수 있음' },
  { href: '/about/surgery', title: '수술 안내', desc: '수술 진행 방식과 절차 안내' },
  { href: '/about/aftercare', title: '수술후주의사항', desc: '수술 후 회복 기간 관리 안내' },
]

export default function Page() {
  const symptoms = [
    { icon: FireIcon, tone: 'coral' as const, title: '정중선 통증·부종', desc: '꼬리뼈 위쪽 정중선의 통증·부종·발적이 나타날 수 있습니다.' },
    { icon: EyeDropperIcon, tone: 'blue' as const, title: '분비물·고름 배출', desc: '구멍에서 분비물·고름이 배출될 수 있습니다.' },
    { icon: ExclamationTriangleIcon, tone: 'yellow' as const, title: '급성 감염 시 발열', desc: '급성 감염 시 심한 통증과 발열이 동반될 수 있습니다.' },
    { icon: ClockIcon, tone: 'lavender' as const, title: '만성기 간헐적 분비물', desc: '만성기에는 간헐적으로 분비물이 지속될 수 있습니다.' },
    { icon: Squares2X2Icon, tone: 'peach' as const, title: '움직일 때 악화', desc: '앉거나 움직일 때 통증이 심해질 수 있습니다.' },
  ]
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/colorectal-center-hero.webp"
          alt="장튼튼항외과의원 모소동 진료 안내"
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
            <strong>모소동</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            모소동
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            꼬리뼈 부위 모낭 감염으로 낭종·누공이 생길 수 있는 질환
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
                모소동(Pilonidal Sinus)은 꼬리뼈 부위 피부 아래에 털이 박혀 들어가거나 모낭이 감염되면서
                낭종과 누공이 형성되는 질환입니다.
              </p>
              <p>
                20~30대 남성, 특히 털이 많고 장시간 앉아 있는 분들에게 많이 발생하는 것으로 알려져 있으며,
                재발이 잦은 편이라 완전한 수술적 제거가 중요하게 다뤄집니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="coral" icon={FireIcon} title="대표 증상" desc="정중선 통증·분비물" />
            <StatChip tone="lavender" icon={ClockIcon} title="호발군" desc="20~30대, 장시간 좌위" />
            <StatChip tone="yellow" icon={ExclamationTriangleIcon} title="특징" desc="재발이 잦은 편" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="치료 방향" desc="근치적 절제가 중요" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '모소동이란 무엇인가요?' },
            { id: 's2', label: '모소동의 주요 증상' },
            { id: 's3', label: '모소동 치료 방법' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>모소동이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              모소동(Pilonidal Sinus)은 꼬리뼈 부위 피부 아래에 털이 박혀 들어가거나 모낭이 감염되면서
              낭종과 누공이 형성되는 질환입니다. 20~30대 남성, 특히 털이 많고 장시간 앉아 있는 분들에게
              많이 발생하며, 재발이 잦으므로 완전한 수술적 제거가 중요합니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>모소동의 주요 증상</SectionTitle>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            {symptoms.map((s) => (
              <IconCard key={s.title} tone={s.tone} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>모소동 치료 방법</SectionTitle>
          <Banner tone="peach">
            급성 염증 시기와 만성 시기에 따라 접근 방법이 달라질 수 있어, 진행 단계에 맞춰 치료 순서를
            상의합니다.
          </Banner>
          <FlowSteps
            items={[
              { title: '절개 배농', desc: '급성 농양기에 즉각적으로 고름을 배출해 통증을 완화하는 방법입니다.' },
              { title: '근치적 절제술', desc: '낭종과 누공 경로를 완전히 절제하는 방법으로, 재발 예방에 효과적인 것으로 설명됩니다.' },
              { title: '피판 수술', desc: 'Limberg flap 등 넓은 범위를 재건하는 수술법으로, 병변이 넓을 때 검토할 수 있습니다.' },
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">수술 후 관리가 재발 예방의 핵심입니다</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            수술 후 해당 부위의 제모와 청결 유지가 도움이 될 수 있습니다.
            <br />
            장튼튼항외과의원 외과전문의가 상태에 맞게 진단하고 안내합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
