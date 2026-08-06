import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  ScissorsIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  SunIcon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { OfficialSource } from '@/components/content/MedicalImageGallery'
import {
  Banner,
  ChecklistPanel,
  ClinicHeroScrim,
  ClinicToc,
  CompareCard,
  FaqShell,
  FlowSteps,
  IconBadge,
  pastel,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StatChip,
} from '../anorectal/_ui'

export const metadata: Metadata = {
  title: '내시경센터 | 장튼튼항외과의원',
  description: '김포 구래동 내시경센터. 위내시경·대장내시경·용종절제술 안내. 수면 여부와 준비 방법은 상담 후 상태에 맞춰 진행합니다.',
  keywords: '내시경센터, 위내시경, 대장내시경, 용종절제술, 김포 내시경, 구래역 내시경, 장튼튼항외과의원',
  alternates: { canonical: 'https://jtntn.co.kr/endoscopy' },
  openGraph: {
    title: '내시경센터 | 장튼튼항외과의원',
    description: '김포 구래동 내시경센터. 위내시경·대장내시경·용종절제술 안내. 수면 여부와 준비 방법은 상담 후 상태에 맞춰 진행합니다.',
    url: 'https://jtntn.co.kr/endoscopy',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const menus = [
  {
    href: '/endoscopy/gastro',
    title: '위내시경',
    sub: '식도·위·십이지장을 정밀하게 관찰하여 위암·위궤양·역류성식도염을 조기에 발견합니다.',
    tag: '수면가능',
    icon: MagnifyingGlassIcon,
  },
  {
    href: '/endoscopy/colon',
    title: '대장내시경',
    sub: '대장과 직장 전체를 관찰하여 대장암·대장폴립·염증성 장질환을 조기에 발견하고 치료합니다.',
    tag: '암예방',
    icon: ShieldCheckIcon,
  },
  {
    href: '/endoscopy/polyp',
    title: '용종 절제술',
    sub: '내시경 중 발견된 용종을 즉시 제거하는 시술로, 대장암 예방에 매우 효과적입니다.',
    tag: '즉시시술',
    icon: ScissorsIcon,
  },
] as const

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

const related = [
  { href: '/endoscopy/gastro', title: '위내시경', desc: '식도·위·십이지장 관찰과 조기 확인 안내' },
  { href: '/endoscopy/colon', title: '대장내시경', desc: '대장·직장 관찰과 조기 확인 안내' },
  { href: '/endoscopy/polyp', title: '용종 절제술', desc: '검사 중 발견된 용종의 절제 안내' },
  { href: '/anorectal/constipation', title: '변비·설사', desc: '배변 습관 변화가 반복될 때 확인' },
]

const compare: { title: string; href: string; tone: 'blue' | 'mint' | 'peach'; rows: [string, string][] }[] = [
  {
    title: '위내시경',
    href: '/endoscopy/gastro',
    tone: 'blue',
    rows: [
      ['검사 부위', '식도·위·십이지장'],
      ['검사 전 준비', '8시간 금식'],
      ['소요 시간', '약 5~10분(개인차)'],
      ['수면 여부', '희망 시 진정 내시경 선택'],
    ],
  },
  {
    title: '대장내시경',
    href: '/endoscopy/colon',
    tone: 'mint',
    rows: [
      ['검사 부위', '대장·직장 전체'],
      ['검사 전 준비', '장정결제 복용'],
      ['소요 시간', '약 15~30분(개인차)'],
      ['수면 여부', '희망 시 진정 내시경 선택'],
    ],
  },
  {
    title: '용종 절제술',
    href: '/endoscopy/polyp',
    tone: 'peach',
    rows: [
      ['시행 시점', '대장내시경 중 발견 시'],
      ['검사 전 준비', '대장내시경과 동일'],
      ['진행 방법', '크기·위치에 따라 다름'],
      ['비고', '당일 제거가 어려운 경우도 있음'],
    ],
  },
]

export default function EndoscopyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/endoscopy-center.webp"
          alt="장튼튼항외과의원 내시경센터 검사 안내"
          fill
          className="object-cover object-[68%_42%] lg:object-[72%_40%]"
          sizes="100vw"
          priority
        />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2">
            홈 / <strong>내시경센터</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            내시경센터
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            위·대장 내시경과 용종 절제를 상담 후 상태에 맞춰 진행합니다
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-7 md:pb-10 space-y-7 md:space-y-8">
        {/* 핵심요약 */}
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                장튼튼항외과의원 내시경센터에서는{' '}
                <Link href="/endoscopy/gastro" className="text-primary font-semibold underline-offset-2 hover:underline">
                  위내시경
                </Link>
                ·{' '}
                <Link href="/endoscopy/colon" className="text-primary font-semibold underline-offset-2 hover:underline">
                  대장내시경
                </Link>
                ·{' '}
                <Link href="/endoscopy/polyp" className="text-primary font-semibold underline-offset-2 hover:underline">
                  용종 절제술
                </Link>
                을 중심으로 소화기 점막을 관찰하고 필요한 처치를 상담합니다.
              </p>
              <p>
                속쓰림·혈변·검진·가족력이 있을 때 방문할 수 있으며, 금식·장정결 등 준비 과정이 중요합니다. 수면
                여부와 검사 순서는 상담 후 결정하고, 결과에 따라 추적 관찰이나 추가 진료를 안내합니다.
              </p>
              <p>
                두 검사는 목적과 준비 방법이 다르지만 함께 계획하는 경우도 있습니다. 아래에서 검사별 특징과 준비
                사항을 먼저 확인한 뒤, 각 상세 페이지에서 검사 과정과 주의사항을 살펴보세요.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            <StatChip tone="blue" icon={MagnifyingGlassIcon} title="위내시경" desc="식도·위·십이지장 정밀 관찰" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="대장내시경" desc="대장·직장 전체 관찰" />
            <StatChip tone="peach" icon={ScissorsIcon} title="용종 절제" desc="발견 시 상태 따라 절제 검토" />
            <StatChip tone="yellow" icon={ClipboardDocumentCheckIcon} title="검사 전 준비" desc="금식·장정결 등이 중요" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '내시경센터에서는 어떤 검사를 진행하나요?' },
            { id: 's2', label: '위내시경·대장내시경·용종절제술의 차이' },
            { id: 's3', label: '검사 전 준비와 수면·비수면 선택' },
            { id: 's4', label: '검사는 어떤 흐름으로 진행되나요?' },
            { id: 's5', label: '검사 후 관리와 진료가 필요한 경우' },
            { id: 'exams', label: '검사별 상세 안내' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>내시경센터에서는 어떤 검사를 진행하나요?</SectionTitle>
          <Prose>
            <p>
              위내시경은 입을 통해 얇은 내시경을 삽입해 식도·위·십이지장 점막을 관찰하는 검사이고, 대장내시경은
              항문을 통해 대장과 직장 전체를 관찰하는 검사입니다. 두 검사 모두 필요한 경우 조직 검사나 용종
              제거 같은 처치를 함께 시행할 수 있습니다.
            </p>
            <p>
              속쓰림, 소화불량, 혈변, 배변 습관 변화, 원인 불명의 빈혈, 가족력 등 다양한 이유로 내시경을
              고려하게 됩니다. 증상이 없어도 연령대에 따라 정기 검진 목적으로 검사를 받는 경우도 흔합니다.
            </p>
            <p>
              어떤 검사가 필요한지, 위·대장 검사를 함께 진행할지 여부는 증상과 목적에 따라 달라질 수 있어
              상담을 통해 정합니다. 준비 방법과 수면 여부도 개인 상태에 맞춰 결정합니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>위내시경·대장내시경·용종절제술의 차이</SectionTitle>
          <Prose>
            <p>
              세 가지는 검사 부위와 준비 방법이 서로 다릅니다. 위내시경은 금식만으로 준비가 가능한 경우가
              많고, 대장내시경은 장정결제 복용이 필요합니다. 용종 절제술은 별도의 검사가 아니라 대장내시경
              중 용종이 발견되었을 때 상태를 보고 시행 여부를 판단하는 처치입니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-3">
            {compare.map((c) => (
              <CompareCard key={c.title} tone={c.tone} title={c.title} href={c.href} rows={c.rows} />
            ))}
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>검사 전 준비와 수면·비수면 선택</SectionTitle>
          <Prose>
            <p>
              위내시경은 검사 전 8시간 금식(물 포함)이 기본이며, 대장내시경은 장정결제 복용과 며칠 전부터의
              식이 조절이 필요할 수 있습니다. 준비가 충분하지 않으면 점막 관찰이 어려워 검사가 지연되거나
              다시 진행해야 할 수 있어, 안내받은 방법을 정확히 따르는 것이 중요합니다.
            </p>
          </Prose>
          <ChecklistPanel
            tone="yellow"
            icon={ClipboardDocumentCheckIcon}
            title="검사 전 공통 준비사항"
            items={[
              '검사 전 금식·장정결 등 안내 사항을 정확히 지키기',
              '혈압약·당뇨약·항혈전제 등 복용 약은 예약 시 미리 확인하기',
              '수면 내시경을 선택하는 경우 보호자 동반 및 당일 운전 금지',
              '편안한 복장으로 방문하고 귀중품은 가급적 소지하지 않기',
            ]}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: pastel.blue.border }}>
              <div className="px-3.5 py-2.5 flex items-center gap-2" style={{ background: pastel.blue.bg }}>
                <IconBadge tone="blue" icon={MoonIcon} size={26} />
                <p className="text-[14px] font-semibold" style={{ color: pastel.blue.text }}>수면 내시경</p>
              </div>
              <div className="p-3.5">
                <p className="text-[12.5px] text-[#64748b] leading-[1.7]">
                  진정제를 투여해 검사 중 불편감을 줄이는 방식입니다. 검사 후 어지럼·졸음이 남을 수 있어 보호자
                  동반과 당일 운전 금지가 원칙이며, 기저질환이나 복용 약에 따라 진행 가능 여부가 달라질 수
                  있습니다.
                </p>
              </div>
            </div>
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: pastel.peach.border }}>
              <div className="px-3.5 py-2.5 flex items-center gap-2" style={{ background: pastel.peach.bg }}>
                <IconBadge tone="peach" icon={SunIcon} size={26} />
                <p className="text-[14px] font-semibold" style={{ color: pastel.peach.text }}>비수면 내시경</p>
              </div>
              <div className="p-3.5">
                <p className="text-[12.5px] text-[#64748b] leading-[1.7]">
                  진정제 없이 의식이 있는 상태로 진행합니다. 검사 중 의료진과 의사소통이 가능하고 회복이 빠른
                  편일 수 있으나, 검사 중 불편감은 사람마다 다르게 느껴질 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>검사는 어떤 흐름으로 진행되나요?</SectionTitle>
          <FlowSteps
            items={[
              { title: '문진 상담', desc: '증상, 복용 약, 과거 검사 이력을 확인합니다.' },
              { title: '준비 상태 확인', desc: '금식·장정결 등 준비가 충분한지 점검합니다.' },
              { title: '검사 시행', desc: '수면 여부에 맞춰 내시경으로 점막을 관찰하고 필요 시 처치합니다.' },
              { title: '회복 및 결과 안내', desc: '회복 후 소견을 설명하고 다음 진료를 안내합니다.' },
            ]}
          />
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>검사 후 관리와 진료가 필요한 경우</SectionTitle>
          <ChecklistPanel
            tone="mint"
            icon={CheckCircleIcon}
            title="회복 중 도움이 되는 사항"
            items={[
              '진정 검사를 받은 경우 당일 운전·중요한 결정은 피하기',
              '복부 팽만감이나 미량의 출혈은 일시적으로 나타날 수 있음',
              '식사와 활동 재개 시점은 검사 종류와 처치 여부에 따라 다르게 안내',
            ]}
          />
          <Banner tone="coral" icon={ExclamationTriangleIcon}>
            심한 통증, 지속되는 출혈, 발열이 있으면 바로 연락하거나 가까운 응급실을 이용해 주세요. 개인 상태에
            따라 안내가 달라질 수 있습니다.
          </Banner>
        </section>

        <section id="exams" className="scroll-mt-20 space-y-3">
          <SectionTitle>검사별 상세 안내</SectionTitle>
          <div className="grid grid-cols-1 gap-2.5 md:gap-3">
            {menus.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="group rounded-[16px] border border-[#e8eef3] bg-white p-4 active:scale-[0.99] hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="flex items-start gap-3">
                  <IconBadge tone="blue" icon={m.icon} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-[15px] font-semibold text-[#0d1117] break-keep">{m.title}</h3>
                      <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.tag}</span>
                    </div>
                    <p className="text-[13px] text-[#4b5563] leading-[1.7] break-keep">{m.sub}</p>
                    <span className="mt-2.5 inline-block text-[12px] font-semibold text-primary group-hover:translate-x-0.5 transition-transform duration-150">
                      {m.title} 자세히 보기 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <OfficialSource
          sources={['보건복지부', '대한의학회']}
          note="내시경 검사 안내는 일반적인 건강정보이며, 개인의 진단·치료 방침은 진료 결과에 따릅니다."
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep flex items-center justify-center gap-1.5">
            <InformationCircleIcon className="h-5 w-5 shrink-0" aria-hidden />
            내시경 검사, 상담 후 상태에 맞춰 준비해 보세요
          </p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            증상, 검사 목적, 기저질환에 따라 준비 방법과 수면 여부가 달라질 수 있습니다.
            <br />
            예약과 진료 일정은 진료안내에서 확인할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
