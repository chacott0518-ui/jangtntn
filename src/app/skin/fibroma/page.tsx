import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BoltIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  FireIcon,
  HandRaisedIcon,
  ScissorsIcon,
  ShieldExclamationIcon,
  SparklesIcon,
  Squares2X2Icon,
  SunIcon,
  UserGroupIcon,
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
  title: '연성섬유종 | 장튼튼항외과의원',
  description: '김포 구래역 연성섬유종(쥐젖) 진료. 마찰 부위에 생기는 돌기 제거 방법을 상태에 맞게 안내합니다.',
  keywords: '쥐젖제거, 연성섬유종제거, 김포 쥐젖제거',
  alternates: { canonical: 'https://jtntn.co.kr/skin/fibroma' },
  openGraph: {
    title: '연성섬유종 | 장튼튼항외과의원',
    description: '김포 구래역 연성섬유종(쥐젖) 진료. 마찰 부위에 생기는 돌기 제거 방법을 상태에 맞게 안내합니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const symptoms = [
  { title: '작은 살 조각 모양', desc: '피부 표면에 작은 살 조각 같은 돌기', icon: HandRaisedIcon, tone: 'blue' as const },
  { title: '호발 부위', desc: '목·겨드랑이·눈꺼풀에 주로 생김', icon: SunIcon, tone: 'mint' as const },
  { title: '걸림·통증', desc: '옷·목걸이·브라끈에 걸려 통증 발생', icon: BoltIcon, tone: 'yellow' as const },
  { title: '작은 크기', desc: '크기는 보통 1~5mm, 살색~갈색', icon: Squares2X2Icon, tone: 'lavender' as const },
  { title: '여러 개 발생', desc: '여러 개가 함께 발생하는 경우 많음', icon: UserGroupIcon, tone: 'peach' as const },
]

const treatments = [
  {
    name: '전기소작술',
    desc: '미세 전류로 연성섬유종 기저부를 소작해 제거하는 방법입니다. 통증과 흉터 정도는 개인·부위에 따라 달라집니다.',
  },
  {
    name: '외과적 절제',
    desc: '국소마취 후 가위나 메스로 절제합니다. 크기가 크거나 수가 많은 경우 고려할 수 있습니다.',
  },
  {
    name: '냉동 치료',
    desc: '액체 질소로 병변을 얼려 제거하는 방법입니다. 여러 개를 한 번에 처리하는 경우가 있습니다.',
  },
]

const faqs = [
  {
    q: '연성섬유종(쥐젖)은 위험한가요?',
    a: '대개 양성 피부 병변으로, 악성으로 변하지 않는 경우가 많습니다. 다만 옷이나 장신구에 걸려 통증·출혈이 생길 수 있고, 빠르게 커지거나 색이 변하면 다른 병변을 감별해야 합니다. 변화가 있으면 진료로 확인하는 것이 안전하며 필요 시 제거할 수 있습니다.',
  },
  {
    q: '제거 방법은 어떤 것이 있나요?',
    a: '전기소작, 외과적 절제, 냉동 치료 등을 상태에 따라 고려합니다. 크기와 개수, 위치에 따라 방법이 달라지며, 한 가지 방법만 모든 경우에 맞지는 않습니다. 진료 후 적합한 방식을 안내드리며, 회복과 흉터에 대한 기대도 함께 상의합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '여러 개를 한 번에 제거할 수 있나요?',
    a: '개수와 부위에 따라 한 번에 처리 가능한 경우가 있습니다. 너무 많으면 나눠 진행할 수도 있고, 피부 자극이 심한 부위는 회복을 고려해 계획을 조정합니다. 개인 피부 상태와 일상 일정을 보고 현실적인 범위를 안내드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '제거 후 흉터가 남나요?',
    a: '작은 병변은 흉터가 적은 편인 경우가 많습니다. 위치·크기·개인 회복에 따라 흔적이 남을 수 있으며, 흉터가 전혀 없다고 단정하기는 어렵습니다. 관리 방법을 안내드리니 따라 주시고, 붉거나 가려움이 오래가면 확인해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '다시 생길 수 있나요?',
    a: '제거한 병변 자체는 없어지지만, 마찰 부위에는 새로 생길 수 있습니다. 목·겨드랑이처럼 자극이 많은 곳이 특히 그러며, 재발 예방을 완전히 보장하기는 어렵습니다. 새로 돋아도 초기에 진료하면 처치 범위를 상의할 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '지방종·피지낭종과도 비슷한가요?',
    a: '연성섬유종은 피부 표면의 작은 돌기인 경우가 많고, 지방종·피지낭종은 피부 아래 혹에 가깝습니다. 겉모습만으로 혼동될 수 있어 정확한 구분은 진료가 필요합니다. 병변에 따라 치료 방법이 달라지므로 임의로 짜거나 자르지 않는 것이 좋습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
]

const related = [
  { href: '/skin/lipoma', title: '지방종', desc: '부드럽고 이동성이 있는 피부 아래 혹입니다' },
  { href: '/skin/cyst', title: '피지낭종(표피낭종)', desc: '중앙에 검은 점이 보이는 단단한 낭종' },
  { href: '/skin', title: '피부종양센터', desc: '지방종·표피낭종·연성섬유종 안내' },
]

export default function FibromaPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/skin-tumor-center.webp"
          alt="장튼튼항외과의원 연성섬유종 진료 안내"
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
            <strong>연성섬유종</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            연성섬유종 <span className="text-[#6b7280] text-[16px] md:text-[18px] font-semibold">(쥐젖)</span>
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            마찰 부위에 주로 생기는 피부의 양성 종양
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
                연성섬유종(쥐젖)은 피부 표면에 작은 살 조각이 돌출되는 양성 피부 종양입니다.
                목·겨드랑이·서혜부·눈꺼풀 등 마찰이 많은 부위에 주로 발생합니다.
              </p>
              <p>
                악성으로 변하지 않는 경우가 많지만 옷이나 장신구에 걸려 통증이 생기기도 합니다. 전기소작,
                외과적 절제, 냉동 치료 등 방법 중 크기·개수·위치에 맞춰 상담할 수 있습니다.
              </p>
              <p>
                김포·구래동에서 쥐젖 제거를 고려하신다면, 장튼튼항외과의원에서 병변 상태를 확인한 뒤 적합한
                제거 방법을 안내받을 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="blue" icon={HandRaisedIcon} title="대표 형태" desc="1~5mm 작은 살 조각 돌기" />
            <StatChip tone="mint" icon={SunIcon} title="호발 부위" desc="목·겨드랑이·눈꺼풀 등" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="제거 방법" desc="전기소작·절제·냉동치료" />
            <StatChip tone="yellow" icon={BoltIcon} title="주의" desc="옷·장신구에 걸려 통증 가능" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '연성섬유종(쥐젖)이란?' },
            { id: 's2', label: '연성섬유종이 생기는 원인' },
            { id: 's3', label: '증상 및 진료 대상' },
            { id: 's4', label: '다른 혹과의 구별' },
            { id: 's5', label: '진단과 제거 과정' },
            { id: 's6', label: '제거 후 관리' },
            { id: 's7', label: '병원 방문이 필요한 경우' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>연성섬유종(쥐젖)이란?</SectionTitle>
          <Prose>
            <p>
              연성섬유종(쥐젖)은 피부 표면에 작은 살 조각이 돌출되는 양성 피부 종양입니다.
              목·겨드랑이·서혜부·눈꺼풀 등 마찰이 많은 부위에 주로 발생합니다.
            </p>
            <p>
              악성으로 변하지 않는 경우가 많지만 옷이나 장신구에 걸려 통증이 생기기도 합니다. 여러 개가 함께
              돋아나는 경우가 흔해, 한 부위에 여러 개가 모여 있는 모습으로 발견되기도 합니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>연성섬유종이 생기는 원인</SectionTitle>
          <Prose>
            <p>
              연성섬유종은 반복적인 마찰·자극이 있는 부위에서 자주 발견됩니다. 나이가 들면서 발생 빈도가
              늘어나는 경향이 있고, 체중 변화나 체질적 요인이 함께 언급되기도 하지만 한 가지 원인으로 단정하기
              는 어렵습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <IconCard tone="blue" icon={HandRaisedIcon} title="반복적 마찰·자극" desc="목걸이·브라끈 등으로 자주 스치는 부위에서 흔히 나타납니다." />
            <IconCard tone="mint" icon={ClockIcon} title="나이에 따른 변화" desc="나이가 들수록 발생 빈도가 느는 경향이 있다고 설명됩니다." />
            <IconCard tone="lavender" icon={UserGroupIcon} title="체질적 요인" desc="체중 변화나 개인 체질이 영향을 줄 수 있다는 이야기가 있습니다." />
            <IconCard tone="peach" icon={ShieldExclamationIcon} title="특별한 원인 없이 발생" desc="뚜렷한 계기 없이 하나둘 늘어나는 경우도 흔합니다." />
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
              위와 같은 특징이 있으면 연성섬유종을 의심해 볼 수 있지만, 빠르게 커지거나 색이 변하는 등 다른
              양상이 있으면 진찰을 통해 확인하는 것이 안전합니다.
            </p>
          </Prose>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>다른 혹과의 구별</SectionTitle>
          <Prose>
            <p>
              연성섬유종은 피부 표면의 작은 돌기인 경우가 많고, 지방종·피지낭종은 피부 아래 혹에 가깝습니다.
              겉모습만으로 혼동될 수 있어 정확한 구분은 진료가 필요하며, 병변에 따라 치료 방법이 달라지므로
              임의로 짜거나 자르지 않는 것이 좋습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <CompareCard
              tone="blue"
              title="지방종"
              href="/skin/lipoma"
              rows={[
                ['위치', '피부 아래 깊은 곳'],
                ['질감', '부드럽고 이동성이 있는 편'],
                ['크기', '연성섬유종보다 큰 경우가 많음'],
              ]}
            />
            <CompareCard
              tone="peach"
              title="피지낭종(표피낭종)"
              href="/skin/cyst"
              rows={[
                ['위치', '피부 아래 낭종'],
                ['특징', '중앙에 검은 점(개구부)'],
                ['통증', '감염 시 붓고 아플 수 있음'],
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
              { title: '문진·육안 확인', desc: '크기·개수·부위와 걸림 여부를 확인합니다.' },
              { title: '제거 방법 상담', desc: '전기소작·절제·냉동 치료 중 상태에 맞게 선택합니다.' },
              { title: '국소 처치', desc: '필요 시 국소마취 후 처치를 진행합니다.' },
              { title: '관리 안내', desc: '회복과 흉터 관리 방법을 안내합니다.' },
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
              진료에서는 크기와 개수, 위치, 옷이나 장신구에 걸리는지를 확인합니다. 전기소작, 외과적 절제, 냉동
              치료 등을 상태에 따라 고려하며, 한 가지 방법만 모든 경우에 맞지는 않습니다.
            </p>
            <p>
              개수와 부위에 따라 여러 개를 한 번에 처리할 수 있는 경우도 있고, 너무 많거나 피부 자극이 심한
              부위는 회복을 고려해 나눠 진행할 수 있습니다.
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
                '처치 부위를 청결하게 유지하고 안내된 관리법 따르기',
                '자극이 심한 옷·장신구는 회복 기간 동안 피하기',
                '붉거나 가려움이 지속되면 경과를 확인하기',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="주의가 필요한 신호"
              items={[
                '처치 부위에 통증·분비물이 새로 생기는 경우',
                '같은 자리에 다시 돌기가 돋아나는 경우',
                '색이나 크기가 예상과 다르게 변하는 경우',
              ]}
            />
          </div>
          <Prose>
            <p>
              작은 병변은 흉터가 적은 편인 경우가 많지만, 위치·크기·개인 회복에 따라 흔적이 남을 수 있어
              흉터가 전혀 없다고 단정하기는 어렵습니다. 제거한 병변 자체는 없어지지만 마찰 부위에는 새로 생길
              수 있어, 목·겨드랑이처럼 자극이 많은 곳은 특히 그렇습니다.
            </p>
          </Prose>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>병원 방문이 필요한 경우</SectionTitle>
          <Banner tone="coral" icon={ScissorsIcon}>
            대개 양성 병변이지만, 아래와 같은 변화가 있으면 진찰을 받아보는 것이 안전합니다.
          </Banner>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              '빠르게 커지거나 색이 변하는 경우',
              '옷·장신구에 걸려 출혈이 반복되는 경우',
              '여러 개가 짧은 기간에 급격히 늘어나는 경우',
              '통증이나 염증이 동반되는 경우',
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
              빠르게 커지거나 색이 변하면 다른 병변을 감별해야 할 수 있어 진료로 확인하는 것이 안전합니다.
              변화가 있으면 자가 판단으로 방치하기보다 진료를 받고 필요 시 제거를 상의할 수 있습니다.
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">연성섬유종은 비교적 간단히 제거할 수 있습니다</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            불편하다면 부담 갖지 말고 상담해 보세요.
            <br />
            장튼튼항외과의원 외과전문의가 직접 진료합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
