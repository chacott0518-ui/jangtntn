import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowPathIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  FireIcon,
  HandRaisedIcon,
  ShieldExclamationIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery from '@/components/content/MedicalImageGallery'
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
  title: '지방종 | 장튼튼항외과의원',
  description: '김포 구래역 지방종 진료. 피부 아래 부드러운 혹의 진단과 국소마취 절제 안내. 크기에 따라 시술 계획이 달라질 수 있습니다.',
  keywords: '지방종, 지방종제거, 피부종양, 피부종양제거, 김포 지방종제거, 구래동 지방종제거',
  alternates: { canonical: 'https://jtntn.co.kr/skin/lipoma' },
  openGraph: {
    title: '지방종 | 장튼튼항외과의원',
    description: '김포 구래역 지방종 진료. 피부 아래 부드러운 혹의 진단과 국소마취 절제 안내. 크기에 따라 시술 계획이 달라질 수 있습니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const symptoms = [
  { title: '부드럽고 말랑한 촉감', desc: '피부 아래 부드럽고 말랑한 혹이 만져짐', icon: HandRaisedIcon, tone: 'blue' as const },
  { title: '이동성 있음', desc: '이동성이 있어 손으로 밀면 움직임', icon: ArrowPathIcon, tone: 'mint' as const },
  { title: '대부분 통증 없음', desc: '대부분 통증 없음', icon: CheckCircleIcon, tone: 'mint' as const },
  { title: '커지면 압박감', desc: '크기 2cm 이상이면 압박감 발생', icon: ExclamationTriangleIcon, tone: 'yellow' as const },
  { title: '감염 시 증상', desc: '감염 시 통증·발적·열감 동반', icon: FireIcon, tone: 'coral' as const },
]

const treatments = [
  {
    name: '국소마취 후 절제',
    desc: '작은 절개로 지방종을 제거하는 방법입니다. 상태에 따라 당일 시술 후 봉합하고 귀가하는 경우가 있습니다.',
  },
  {
    name: '최소침습 절제',
    desc: '지방종보다 작은 절개로 내부를 제거하는 방법을 고려할 수 있습니다. 흉터 정도는 개인과 부위에 따라 달라집니다.',
  },
]

const faqs = [
  {
    q: '지방종과 피지낭종은 어떻게 다른가요?',
    a: '지방종은 지방 세포가 뭉친 부드러운 혹이고, 피지낭종은 피지·각질이 쌓인 주머니형 병변입니다. 만져지는 감촉과 중심 개구부 유무로 구분하는 경우가 많지만, 겉모습만으로 단정하기는 어렵습니다. 정확한 구분은 진료와 검사가 필요하며 치료 계획도 달라질 수 있습니다.',
  },
  {
    q: '지방종은 꼭 제거해야 하나요?',
    a: '통증이 없고 작으면 경과 관찰이 가능한 경우도 있습니다. 크기가 커지거나 압박감·미용적 불편이 있으면 제거를 고려하며, 빠르게 커지면 다른 병변 감별이 필요할 수 있습니다. 개인 상태에 따라 치료 시기가 달라지므로 진료에서 상의하는 것이 좋습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '지방종 제거는 당일 가능한가요?',
    a: '크기·위치·감염 여부를 보고 당일 시술을 검토할 수 있습니다. 모든 경우에 당일 제거가 보장되지는 않으며, 큰 병변이나 특수 위치는 일정을 나누기도 합니다. 진료 후 방법과 회복 일정을 안내드리며, 개인 상태에 따라 계획이 달라집니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '시술 후 흉터가 남나요?',
    a: '절개 크기와 부위에 따라 흉터 정도는 달라질 수 있습니다. 작은 절개로 진행해도 개인별 회복 차이가 있고, 흉터가 전혀 없다고 단정하기는 어렵습니다. 관리 방법과 실밥 제거 시기는 시술 후 안내드리며, 궁금한 점은 진료에서 확인해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '지방종은 악성으로 변하나요?',
    a: '일반적인 지방종은 양성인 경우가 많습니다. 빠르게 커지거나 통증이 생기면 다른 병변을 감별해야 하며, 필요하면 조직 검사로 확인합니다. 자가 판단으로 방치하기보다 변화가 있으면 진료를 받는 것이 안전하고, 치료 여부도 함께 상의할 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '여러 개의 지방종도 한 번에 제거하나요?',
    a: '위치와 개수, 마취 범위에 따라 한 번에 또는 나눠 진행할 수 있습니다. 큰 병변은 별도 계획이 필요할 수 있고, 회복과 흉터를 고려해 우선순위를 정합니다. 진료에서 불편한 부위부터 상의하시면 현실적인 일정을 안내드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
]

const related = [
  { href: '/skin/cyst', title: '피지낭종(표피낭종)', desc: '중앙에 검은 점이 보이는 단단한 낭종' },
  { href: '/skin/fibroma', title: '연성섬유종(쥐젖)', desc: '마찰 부위에 생기는 작은 돌기' },
  { href: '/skin', title: '피부종양센터', desc: '지방종·표피낭종·연성섬유종 안내' },
]

export default function LipomaPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/skin-tumor-center.webp"
          alt="장튼튼항외과의원 지방종 진료 안내"
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
            <strong>지방종</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            지방종
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            피부 아래 지방 세포가 뭉쳐 생기는 양성 종양
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
                지방종은 피부 아래 지방 세포가 비정상적으로 증식하여 덩어리를 형성하는 양성 종양입니다.
                등·목·어깨·팔·복부에 가장 흔하며, 부드럽고 이동성이 있습니다.
              </p>
              <p>
                대부분 통증이 없으나 저절로 사라지지 않으므로 크기가 커지거나 불편감이 생기면 제거를 고려합니다.
                국소마취 후 작은 절개로 절제하는 경우가 많고, 크기·위치에 따라 시술 계획이 달라질 수 있습니다.
              </p>
              <p>
                김포·구래동에서 지방종 진료를 고려하신다면, 장튼튼항외과의원에서 크기와 상태를 확인한 뒤 관찰이
                적절한지 제거가 필요한지 상담받을 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="blue" icon={HandRaisedIcon} title="대표 증상" desc="부드럽고 이동성 있는 혹" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="통증" desc="대부분 없음, 커지면 압박감" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="치료" desc="국소마취 후 절제, 당일 가능" />
            <StatChip tone="coral" icon={FireIcon} title="주의" desc="감염 시 통증·발적·열감" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '지방종이란?' },
            { id: 's2', label: '지방종이 생기는 원인' },
            { id: 's3', label: '증상 및 진료 대상' },
            { id: 's4', label: '다른 혹과의 구별' },
            { id: 's5', label: '진단과 제거 과정' },
            { id: 's6', label: '제거 후 관리' },
            { id: 's7', label: '병원 방문이 필요한 경우' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>지방종이란?</SectionTitle>
          <Prose>
            <p>
              지방종은 피부 아래 지방 세포가 비정상적으로 증식하여 덩어리를 형성하는 양성 종양입니다.
              등·목·어깨·팔·복부에 가장 흔하며, 부드럽고 이동성이 있습니다. 대부분 통증이 없으나 저절로
              사라지지 않으므로 크기가 커지거나 불편감이 생기면 제거를 고려합니다.
            </p>
            <p>
              하나만 생기는 경우도 있고, 여러 개가 동시에 만져지는 경우도 있습니다. 크기는 수 밀리미터에서 몇
              센티미터까지 다양하며, 오랜 기간 천천히 커지는 경과를 보이는 경우가 많습니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>지방종이 생기는 원인</SectionTitle>
          <Prose>
            <p>
              지방종은 한 가지 원인으로 단정하기 어렵고, 특별한 계기 없이 발생하는 경우가 많습니다. 나이가
              들면서 지방·결합조직의 변화가 영향을 줄 수 있고, 가족 중 비슷한 병변이 있으면 체질적 소인이
              관여한다는 이야기도 있습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <IconCard tone="mint" icon={ClockIcon} title="나이에 따른 변화" desc="지방·결합조직의 변화로 발생 빈도가 늘 수 있습니다." />
            <IconCard tone="lavender" icon={UserGroupIcon} title="체질적·유전적 요인" desc="가족력이 있으면 비슷한 병변이 나타나는 경우가 있습니다." />
            <IconCard tone="blue" icon={ShieldExclamationIcon} title="특별한 원인 없이 발생" desc="뚜렷한 계기 없이 우연히 발견되는 경우도 흔합니다." />
            <IconCard tone="peach" icon={ExclamationTriangleIcon} title="대사·체질적 요인" desc="일부에서는 대사와 관련될 수 있다고 설명되지만 단정하기는 어렵습니다." />
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
              위 증상이 모두 나타나야 지방종인 것은 아니며, 일부만 해당해도 진료 대상이 될 수 있습니다. 특히
              크기가 빠르게 변하거나 통증이 새로 생기면 다른 병변과의 감별이 필요할 수 있어 상태를 확인해
              보는 것이 좋습니다.
            </p>
          </Prose>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>다른 혹과의 구별</SectionTitle>
          <Prose>
            <p>
              지방종은 부드럽고 이동성이 있어 단단하고 중심에 개구부가 보이는 표피낭종, 피부 표면에 작게
              돌출되는 연성섬유종과는 만져지는 느낌이 다른 경우가 많습니다. 다만 겉모습만으로 예외 없이
              구분하기는 어려워 진찰이 도움이 됩니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <CompareCard
              tone="peach"
              title="피지낭종(표피낭종)"
              href="/skin/cyst"
              rows={[
                ['질감', '단단하고 둥근 편'],
                ['중심 개구부', '중앙에 검은 점이 보이는 경우 많음'],
                ['통증', '감염 시 붓고 빨개지며 통증이 커질 수 있음'],
              ]}
            />
            <CompareCard
              tone="lavender"
              title="연성섬유종(쥐젖)"
              href="/skin/fibroma"
              rows={[
                ['질감', '피부 표면의 작은 살 조각 형태'],
                ['크기', '보통 1~5mm로 지방종보다 작은 편'],
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
              { title: '문진·촉진', desc: '크기·위치·발생 시기·압박감 여부를 확인합니다.' },
              { title: '필요 시 초음파', desc: '깊이나 경계가 불분명하면 검사를 검토합니다.' },
              { title: '국소마취 후 절제', desc: '작은 절개로 지방종을 제거합니다.' },
              { title: '조직검사·봉합', desc: '필요 시 조직검사를 진행하고 봉합·드레싱합니다.' },
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
              진료에서는 크기·위치·발생 시기와 압박감 여부를 확인합니다. 깊이나 경계가 불분명한 경우에는
              초음파 등 추가 확인이 도움이 될 수 있습니다.
            </p>
            <p>
              절제는 국소마취 후 작은 절개로 진행하는 경우가 많으며, 위치와 크기에 따라 지방종보다 작은
              절개로 내부를 제거하는 최소침습 절제를 고려할 수 있습니다. 제거된 조직은 필요한 경우 조직검사로
              성상을 확인합니다.
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
                '절개 부위를 청결하게 유지하고 안내된 드레싱을 지키기',
                '무리한 운동·과도한 마찰은 안내 기간 동안 피하기',
                '실밥 제거 시기와 재방문 일정을 지키기',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="주의가 필요한 신호"
              items={[
                '통증·붓기·발적이 오히려 심해지는 경우',
                '분비물이나 열감이 새로 나타나는 경우',
                '흉터 부위가 예상과 다르게 변하는 경우',
              ]}
            />
          </div>
          <Prose>
            <p>
              절개 크기와 부위에 따라 흉터 정도는 달라질 수 있으며, 작은 절개로 진행해도 개인별 회복 차이가
              있어 흉터가 전혀 없다고 단정하기는 어렵습니다. 관리 방법과 실밥 제거 시기는 시술 후 안내드립니다.
            </p>
          </Prose>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>병원 방문이 필요한 경우</SectionTitle>
          <Banner tone="coral" icon={FireIcon}>
            일반적인 지방종은 양성인 경우가 많지만, 아래와 같은 변화가 있으면 진찰을 받아보는 것이 안전합니다.
          </Banner>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              '크기가 빠르게 커지거나 단단해지는 경우',
              '통증이 새로 생기거나 심해지는 경우',
              '감염으로 통증·발적·열감이 동반되는 경우',
              '여러 개가 한꺼번에 늘어나는 경우',
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
              빠르게 커지거나 통증이 생기면 다른 병변을 감별해야 하며, 필요하면 조직 검사로 확인합니다. 자가
              판단으로 방치하기보다 변화가 있으면 진료를 받는 것이 안전하고, 치료 여부도 함께 상의할 수
              있습니다.
            </p>
          </Prose>
        </section>

        <MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/skin/lipoma/lipoma-ultrasound.webp', caption: '지방종 초음파', clinical: true },
            { src: '/images/medical/skin/lipoma/lipoma-specimen.webp', caption: '지방종 조직사진', clinical: true },
          ]}
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">지방종, 상태에 맞게 관리해 보세요</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            크기가 커지거나 불편감이 있다면 미리 상담해 보는 것이 도움이 될 수 있습니다.
            <br />
            장튼튼항외과의원 외과전문의가 직접 진료합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
