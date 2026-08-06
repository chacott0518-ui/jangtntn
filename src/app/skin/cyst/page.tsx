import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  FireIcon,
  HandRaisedIcon,
  NoSymbolIcon,
  ShieldExclamationIcon,
  Squares2X2Icon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import {
  Banner,
  ChecklistPanel,
  ClinicHeroScrim,
  ClinicToc,
  CompareCard,
  FaqShell,
  FlowSteps,
  IconCard,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StatChip,
} from '@/app/anorectal/_ui'

export const metadata: Metadata = {
  title: '피지낭종 | 장튼튼항외과의원',
  description: '김포 구래역 피지낭종(표피낭종) 진료. 감염 여부에 따라 배농 후 절제 일정이 달라질 수 있습니다.',
  keywords: '표피낭종, 표피낭종제거, 피지낭종, 피지낭종제거, 김포 표피낭종제거, 김포 피지낭종제거',
  alternates: { canonical: 'https://jtntn.co.kr/skin/cyst' },
  openGraph: {
    title: '피지낭종 | 장튼튼항외과의원',
    description: '김포 구래역 피지낭종(표피낭종) 진료. 감염 여부에 따라 배농 후 절제 일정이 달라질 수 있습니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const symptoms = [
  { title: '단단하고 둥근 혹', desc: '피부 아래 단단하고 둥근 혹', icon: HandRaisedIcon, tone: 'blue' as const },
  { title: '중앙에 검은 점', desc: '중앙에 작은 검은 점(개구부) 보임', icon: ViewfinderCircleIcon, tone: 'lavender' as const },
  { title: '특유의 내용물', desc: '짜면 치즈 같은 냄새나는 내용물', icon: NoSymbolIcon, tone: 'yellow' as const },
  { title: '감염 시 통증', desc: '감염 시 붓고 빨개지며 심한 통증', icon: FireIcon, tone: 'coral' as const },
  { title: '반복되면 더 커짐', desc: '감염이 반복될수록 점점 더 크게 부음', icon: ExclamationTriangleIcon, tone: 'coral' as const },
]

const treatments = [
  {
    name: '낭종 절제술 (비감염기)',
    desc: '감염이 없는 상태에서 낭종 주머니째 제거하는 방법입니다. 재발 가능성을 낮추는 데 도움이 됩니다.',
  },
  {
    name: '절개 배농 후 절제',
    desc: '감염 농양 시 먼저 배농 후, 염증이 가라앉으면 낭종 주머니 절제를 계획합니다.',
  },
]

const faqs = [
  {
    q: '피지낭종과 지방종은 어떻게 구별하나요?',
    a: '피지낭종은 더 단단하고 중앙에 검은 점이 보이는 경우가 많습니다. 지방종은 부드럽고 잘 움직이는 편이며, 내용물 성상도 다릅니다. 겉모습만으로 단정하기 어려워 진료로 확인하는 것이 좋고, 치료 방법과 일정도 병변에 따라 달라질 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '피지낭종을 짜도 되나요?',
    a: '집에서 짜면 감염이 생기거나 염증이 번질 수 있습니다. 주머니가 남으면 다시 커지는 경우도 있어 임시로 내용물만 빼는 것은 근본 치료가 되기 어렵습니다. 치료는 진료 후 안전하게 진행하는 것이 좋으며, 이미 빨갛게 붓고 아프면 빨리 내원해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '감염된 피지낭종도 바로 제거하나요?',
    a: '심한 감염이 있으면 먼저 배농과 염증 치료를 하는 경우가 많습니다. 염증이 가라앉은 뒤 주머니 절제를 계획하며, 상태에 따라 일정이 달라질 수 있습니다. 감염기에는 무리한 완전 절제가 어려울 수 있어 단계적 치료가 안전합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '완전히 제거하면 재발하지 않나요?',
    a: '주머니째 제거하면 재발 가능성을 낮출 수 있습니다. 다만 염증이 심했거나 주머니가 일부 남으면 다시 생길 수 있어, 재발이 없다고 단정하기는 어렵습니다. 개인 피부 상태와 부위도 영향을 주므로 추적 관찰이 필요할 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '시술 후 흉터는 어느 정도인가요?',
    a: '절개 길이와 부위, 개인 회복에 따라 흉터 정도가 달라집니다. 감염 후 절제는 흉터가 더 남을 수 있으며, 흉터가 전혀 없다고 보장하기는 어렵습니다. 관리 방법과 실밥 제거 시기는 시술 후 안내드리니 안내에 따라 관리해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '당일 제거가 가능한가요?',
    a: '감염이 없고 크기가 적당하면 당일 시술을 검토할 수 있습니다. 염증이 심하면 단계적 치료가 필요하며, 모든 경우에 당일 제거가 보장되지는 않습니다. 진료 후 가능한 일정을 안내드리며, 개인 상태에 따라 계획이 달라집니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
]

const related = [
  { href: '/skin/lipoma', title: '지방종', desc: '부드럽고 이동성이 있는 피부 아래 혹입니다' },
  { href: '/skin/fibroma', title: '연성섬유종(쥐젖)', desc: '마찰 부위에 생기는 작은 돌기' },
  { href: '/skin', title: '피부종양센터', desc: '지방종·표피낭종·연성섬유종 안내' },
]

export default function CystPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/skin-tumor-center.webp"
          alt="장튼튼항외과의원 표피낭종 진료 안내"
          fill
          className="object-cover object-[52%_45%] lg:object-[48%_42%]"
          sizes="100vw"
          priority
        />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:underline">
              홈
            </Link>
            <span>/</span>
            <Link href="/skin" className="hover:underline">
              피부종양센터
            </Link>
            <span>/</span>
            <strong>피지낭종</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            피지낭종 <span className="text-[#6b7280] text-[16px] md:text-[18px] font-semibold">(표피낭종)</span>
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            피지선이 막혀 피부 아래에 피지와 각질이 쌓이는 낭종
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
                피지낭종(표피낭종)은 피지선 분비관이 막혀 피지와 각질이 피부 아래에 쌓이면서 주머니처럼
                형성되는 낭종입니다. 얼굴·목·등·두피에 자주 발생하며, 중앙에 검은 점이 보이는 것이 특징입니다.
              </p>
              <p>
                재발 가능성을 낮추려면 낭종 주머니째 제거하는 것이 중요합니다. 다만 감염되어 붓고 아픈
                상태에서는 먼저 배농·염증 치료를 하고, 염증이 가라앉은 뒤 절제를 계획하는 경우가 많습니다.
              </p>
              <p>
                김포·구래동에서 피지낭종 진료를 고려하신다면, 장튼튼항외과의원에서 감염 여부와 크기를 확인한
                뒤 상태에 맞는 치료 순서를 상담받을 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="blue" icon={ViewfinderCircleIcon} title="대표 특징" desc="중앙 개구부, 단단한 촉감" />
            <StatChip tone="coral" icon={FireIcon} title="감염 주의" desc="붓고 빨개지면 통증이 커짐" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="치료" desc="비감염기 절제, 감염기 배농" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="재발 관리" desc="주머니째 제거가 중요" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '피지낭종이란?' },
            { id: 's2', label: '피지낭종이 생기는 원인' },
            { id: 's3', label: '증상 및 진료 대상' },
            { id: 's4', label: '다른 혹과의 구별' },
            { id: 's5', label: '진단과 제거 과정' },
            { id: 's6', label: '제거 후 관리' },
            { id: 's7', label: '병원 방문이 필요한 경우' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>피지낭종이란?</SectionTitle>
          <Prose>
            <p>
              피지낭종(표피낭종)은 피지선 분비관이 막혀 피지와 각질이 피부 아래에 쌓이면서 주머니처럼
              형성되는 낭종입니다. 얼굴·목·등·두피에 자주 발생하며, 중앙에 검은 점이 보이는 것이 특징입니다.
            </p>
            <p>
              낭종 벽(주머니)이 남아 있으면 내용물을 짜내더라도 다시 채워질 수 있어, 재발 가능성을 낮추려면
              낭종 주머니째 제거하는 것이 중요합니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>피지낭종이 생기는 원인</SectionTitle>
          <Prose>
            <p>
              피지낭종은 피지선 분비관이 각질이나 노폐물로 막히면서 내용물이 배출되지 못하고 쌓여 형성된다고
              설명됩니다. 모낭 주변 손상, 여드름 흉터, 피부 자극이 계기가 될 수 있다는 이야기도 있으나, 특별한
              원인 없이 생기는 경우도 흔합니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <IconCard tone="yellow" icon={NoSymbolIcon} title="피지선 분비관 막힘" desc="각질·피지가 배출되지 못하고 쌓이면 낭종으로 이어질 수 있습니다." />
            <IconCard tone="blue" icon={ClockIcon} title="모낭 주변 자극·손상" desc="이전 여드름이나 피부 자극이 계기가 될 수 있다고 설명됩니다." />
            <IconCard tone="lavender" icon={Squares2X2Icon} title="체질적 요인" desc="피부 타입에 따라 발생 빈도에 차이가 있을 수 있습니다." />
            <IconCard tone="peach" icon={ShieldExclamationIcon} title="특별한 원인 없이 발생" desc="뚜렷한 계기 없이 우연히 발견되는 경우도 드물지 않습니다." />
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>증상 및 진료 대상</SectionTitle>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            {symptoms.map((s) => (
              <IconCard key={s.title} tone={s.tone} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
          <Prose>
            <p>
              중앙에 작은 검은 점(개구부)이 보이는 것이 다른 혹과 구별되는 특징 중 하나로 설명됩니다. 감염이
              반복될수록 점점 더 크게 부으며 통증도 심해질 수 있어, 초기에 확인해 보는 것이 도움이 될 수
              있습니다.
            </p>
          </Prose>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>다른 혹과의 구별</SectionTitle>
          <Prose>
            <p>
              피지낭종은 지방종보다 단단하고, 중앙에 개구부가 보이는 경우가 많다는 점에서 구별됩니다. 연성섬유종은
              피부 표면의 작은 돌기 형태여서 피부 아래 낭종인 피지낭종과는 만져지는 위치와 깊이가 다릅니다.
              다만 겉모습만으로 예외 없이 구분하기는 어려워 진찰이 도움이 됩니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <CompareCard
              tone="blue"
              title="지방종"
              href="/skin/lipoma"
              rows={[
                ['질감', '부드럽고 이동성이 있는 편'],
                ['중심 개구부', '없음'],
                ['통증', '대부분 없음, 감염과 무관'],
              ]}
            />
            <CompareCard
              tone="lavender"
              title="연성섬유종(쥐젖)"
              href="/skin/fibroma"
              rows={[
                ['질감', '피부 표면의 작은 살 조각 형태'],
                ['크기', '보통 1~5mm로 작은 편'],
                ['통증', '옷·장신구에 걸리면 통증·출혈 가능'],
              ]}
            />
          </div>
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>진단과 제거 과정</SectionTitle>
          <FlowSteps
            cols={4}
            tone="blue"
            items={[
              { title: '문진·촉진', desc: '개구부 유무, 감염·통증 여부를 확인합니다.' },
              { title: '감염 여부 판단', desc: '급성 염증기인지 비감염 상태인지 확인합니다.' },
              { title: '배농 또는 절제', desc: '상태에 맞춰 배농 후 관찰하거나 바로 절제합니다.' },
              { title: '회복·재방문 안내', desc: '드레싱과 재방문 일정을 안내합니다.' },
            ]}
          />
          <div className="space-y-3">
            {treatments.map((t) => (
              <div key={t.name} className="rounded-[14px] bg-white border border-[#e8eef3] p-3.5">
                <h3 className="text-[14px] font-semibold text-[#0d1117] mb-1 break-keep">{t.name}</h3>
                <p className="text-[13px] text-[#64748b] leading-[1.7] break-keep">{t.desc}</p>
              </div>
            ))}
          </div>
          <Prose>
            <p>
              진료에서는 개구부 유무, 감염·통증 여부, 이전에 짜본 적이 있는지를 확인합니다. 감염이 없는
              상태라면 낭종 주머니째 제거하는 절제술을 계획할 수 있습니다.
            </p>
            <p>
              감염되어 농양이 생긴 경우에는 먼저 절개 배농으로 염증을 가라앉힌 뒤, 시간을 두고 낭종 주머니
              절제를 계획하는 경우가 많습니다. 감염기에 무리하게 완전 절제를 시도하면 재발 위험이 남을 수
              있어 단계적으로 접근하는 것이 안전합니다.
            </p>
          </Prose>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>제거 후 관리</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              icon={CheckCircleIcon}
              title="회복에 도움이 되는 습관"
              items={[
                '절개 부위를 청결하게 유지하고 안내된 드레싱 지키기',
                '배농 후에는 지시된 소독·재방문 일정을 지키기',
                '실밥 제거 시기와 경과 관찰 일정을 지키기',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="주의가 필요한 신호"
              items={[
                '통증·붓기·발적이 다시 심해지는 경우',
                '분비물이나 열감이 새로 나타나는 경우',
                '같은 자리에 다시 혹이 만져지는 경우',
              ]}
            />
          </div>
          <Prose>
            <p>
              절개 길이와 부위, 개인 회복에 따라 흉터 정도가 달라지며, 감염 후 절제는 흉터가 더 남을 수
              있습니다. 주머니째 제거하면 재발 가능성을 낮출 수 있지만, 염증이 심했거나 주머니가 일부 남으면
              다시 생길 수 있어 추적 관찰이 필요할 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>병원 방문이 필요한 경우</SectionTitle>
          <Banner tone="coral" icon={FireIcon}>
            이미 빨갛게 붓고 아픈 상태라면 집에서 짜지 말고 빠르게 내원해 주세요.
          </Banner>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              '주변이 붉게 붓고 열감이 느껴지는 경우',
              '통증이 심해 일상생활이 불편한 경우',
              '고름 같은 분비물이 나오는 경우',
              '이전에 짜냈던 자리가 반복해서 커지는 경우',
            ].map((t) => (
              <div
                key={t}
                className="rounded-[14px] border px-4 py-3.5 min-h-[52px] flex items-center text-[13.5px] font-semibold leading-snug break-keep"
                style={{ background: '#fdeeee', borderColor: '#f4d2d2', color: '#8a3a3a' }}
              >
                {t}
              </div>
            ))}
          </div>
          <Prose>
            <p>
              집에서 짜면 감염이 생기거나 염증이 번질 수 있고, 주머니가 남으면 다시 커지는 경우도 있어 임시로
              내용물만 빼는 것은 근본 치료가 되기 어렵습니다. 치료는 진료 후 안전하게 진행하는 것이 좋습니다.
            </p>
          </Prose>
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">피지낭종은 감염 전 제거가 비교적 간단합니다</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            혹이 만져지면 미리 상태를 확인해 보시는 것이 도움이 될 수 있습니다.
            <br />
            장튼튼항외과의원 외과전문의가 직접 진료합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
