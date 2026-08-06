import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  HandRaisedIcon,
  MagnifyingGlassIcon,
  ShieldExclamationIcon,
  SparklesIcon,
  Squares2X2Icon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery from '@/components/content/MedicalImageGallery'
import {
  Banner,
  ClinicHeroScrim,
  ClinicToc,
  CompareCard,
  FaqShell,
  FlowSteps,
  IconBadge,
  IconCard,
  type PastelTone,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StatChip,
} from '@/app/anorectal/_ui'

export const metadata: Metadata = {
  title: '피부종양센터 | 장튼튼항외과의원',
  description: '지방종·피지낭종·섬유종 제거 상담. 국소마취 하 외래 시술 가능 여부는 크기·위치에 따라 달라질 수 있습니다.',
  keywords: '피부종양센터, 지방종, 표피낭종, 연성섬유종, 김포 지방종제거, 장튼튼항외과의원',
  alternates: { canonical: 'https://jtntn.co.kr/skin' },
  openGraph: {
    title: '피부종양센터 | 장튼튼항외과의원',
    description: '지방종·피지낭종·섬유종 제거 상담. 국소마취 하 외래 시술 가능 여부는 크기·위치에 따라 달라질 수 있습니다.',
    url: 'https://jtntn.co.kr/skin',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const diseases: {
  href: string
  title: string
  def: string
  symptom: string
  tag: string
  tone: PastelTone
  icon: typeof HandRaisedIcon
}[] = [
  {
    href: '/skin/lipoma',
    title: '지방종',
    def: '피부 아래에 지방 세포가 뭉쳐 형성되는 양성 종양으로, 국소마취 후 작은 절개로 간단히 제거할 수 있습니다.',
    symptom: '부드럽고 이동성 있는 혹, 대부분 통증 없음',
    tag: '당일시술',
    tone: 'blue',
    icon: HandRaisedIcon,
  },
  {
    href: '/skin/cyst',
    title: '피지낭종 (표피낭종)',
    def: '피지선이 막혀 피부 아래에 피지와 각질이 쌓이는 낭종. 염증 발생 전 제거가 중요합니다.',
    symptom: '단단한 혹, 중앙에 검은 점, 감염 시 통증',
    tag: '당일시술',
    tone: 'coral',
    icon: ViewfinderCircleIcon,
  },
  {
    href: '/skin/fibroma',
    title: '연성섬유종 (쥐젖)',
    def: '마찰이 많은 부위에 생기는 양성 피부 종양. 전기소작 또는 절제로 간단히 치료합니다.',
    symptom: '작은 살 조각 모양 돌기, 옷·장신구에 걸려 불편',
    tag: '간단제거',
    tone: 'mint',
    icon: SparklesIcon,
  },
]

const quickNav = [
  { href: '/skin/lipoma', label: '말랑하고 움직이는 혹이 만져져요' },
  { href: '/skin/cyst', label: '단단하고 가운데 점이 보여요' },
  { href: '/skin/fibroma', label: '마찰 부위에 돌기가 걸려요' },
  { href: '/skin/cyst', label: '혹 주변이 붓고 아파요' },
]

const compare = [
  {
    title: '지방종',
    href: '/skin/lipoma',
    tone: 'blue' as PastelTone,
    rows: [
      ['질감', '부드럽고 말랑하며 눌러보면 유동감이 있음'],
      ['이동성', '피부와 함께 잘 움직이는 편'],
      ['중심 개구부', '없음'],
      ['통증', '대부분 없음, 커지면 압박감 가능'],
      ['제거 방법', '국소마취 후 절제, 필요시 최소침습 절제'],
    ],
  },
  {
    title: '피지낭종(표피낭종)',
    href: '/skin/cyst',
    tone: 'peach' as PastelTone,
    rows: [
      ['질감', '단단하고 둥근 편'],
      ['중심 개구부', '중앙에 작은 검은 점이 보이는 경우 많음'],
      ['내용물', '냄새를 동반한 각질·피지'],
      ['통증', '감염 시 붓고 빨개지며 통증이 커질 수 있음'],
      ['제거 방법', '비감염기 낭종 절제, 감염 시 배농 후 절제'],
    ],
  },
  {
    title: '연성섬유종(쥐젖)',
    href: '/skin/fibroma',
    tone: 'lavender' as PastelTone,
    rows: [
      ['질감', '피부 표면의 작은 살 조각 형태'],
      ['크기', '보통 1~5mm로 작은 편'],
      ['호발 부위', '목·겨드랑이·눈꺼풀 등 마찰 부위'],
      ['통증', '옷·장신구에 걸리면 통증·출혈 가능'],
      ['제거 방법', '전기소작·외과적 절제·냉동치료 중 선택'],
    ],
  },
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
  {
    q: '지방종·표피낭종·연성섬유종을 스스로 구분할 수 있나요?',
    a: '만져지는 느낌으로 어느 정도 짐작할 수는 있지만, 겉모습만으로 정확히 구분하기는 쉽지 않습니다. 부드럽고 움직이면 지방종, 단단하고 가운데 점이 보이면 표피낭종, 작은 돌기 형태면 연성섬유종일 가능성이 참고는 되지만 예외도 있습니다. 정확한 구분과 치료 방향은 진찰을 통해 확인하는 것이 안전합니다.',
  },
]

const related = [
  { href: '/skin/lipoma', title: '지방종', desc: '피부 아래 부드러운 지방 혹 안내' },
  { href: '/skin/cyst', title: '피지낭종(표피낭종)', desc: '중앙에 검은 점이 보이는 단단한 낭종' },
  { href: '/skin/fibroma', title: '연성섬유종(쥐젖)', desc: '마찰 부위에 생기는 작은 돌기' },
]

export default function SkinPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/skin-tumor-center.webp"
          alt="장튼튼항외과의원 피부종양센터 진료 안내"
          fill
          className="object-cover object-[52%_45%] lg:object-[48%_42%]"
          sizes="100vw"
          priority
        />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2">
            홈 / <strong>피부종양센터</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            피부종양센터
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            국소마취 하 외래 시술 가능 여부는 상담 후 안내합니다
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
                장튼튼항외과의원 피부종양센터는 피부 아래 혹·낭종·쥐젖이 신경 쓰일 때 상담하는 진료입니다.{' '}
                <Link href="/skin/lipoma" className="text-primary font-semibold underline-offset-2 hover:underline">
                  지방종
                </Link>
                ·
                <Link href="/skin/cyst" className="text-primary font-semibold underline-offset-2 hover:underline">
                  표피낭종
                </Link>
                ·
                <Link href="/skin/fibroma" className="text-primary font-semibold underline-offset-2 hover:underline">
                  연성섬유종
                </Link>
                을 중심으로 크기·위치·염증 여부를 확인합니다.
              </p>
              <p>
                지방종은 부드럽고 이동성이 있는 혹, 표피낭종(피지낭종)은 중앙에 작은 개구부가 보이는 단단한
                낭종, 연성섬유종(쥐젖)은 마찰 부위에 생기는 작은 돌기로 설명되지만, 세 가지 모두 겉모습만으로
                정확히 구분하기 어려운 경우가 있어 진찰이 필요할 수 있습니다.
              </p>
              <p>
                커지거나 통증이 있거나 염증이 반복될 때 방문하시면 좋습니다. 국소마취 하 외래 절제 가능 여부는
                상태에 따라 달라지며, 시술 후 드레싱·재방문 안내를 드립니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            <StatChip tone="blue" icon={MagnifyingGlassIcon} title="정확한 진단" desc="겉모습만으로 단정하기 어려움" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="국소마취 절제" desc="상태에 따라 당일 시술 가능" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="3가지 유형" desc="지방종·표피낭종·연성섬유종" />
            <StatChip tone="coral" icon={ShieldExclamationIcon} title="염증·감염 주의" desc="커지거나 아프면 방문 권장" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 'quick', label: '증상으로 빠르게 찾기' },
            { id: 's1', label: '피부종양센터에서 다루는 질환' },
            { id: 's2', label: '지방종·표피낭종·연성섬유종은 왜 생기나요?' },
            { id: 's3', label: '다른 혹과 어떻게 구별하나요?' },
            { id: 's4', label: '진단과 제거 과정' },
            { id: 's5', label: '병원 방문이 필요한 경우' },
          ]}
        />

        <section id="quick" className="scroll-mt-20 space-y-3">
          <SectionTitle>증상으로 빠르게 찾기</SectionTitle>
          <div className="grid grid-cols-2 gap-2.5">
            {quickNav.map((q, i) => (
              <Link
                key={q.label + i}
                href={q.href}
                className="flex items-center justify-center min-h-[48px] rounded-[14px] border border-[#e8eef3] bg-white px-3 text-[13px] font-bold text-[#0d1117] text-center leading-snug hover:border-primary/35 hover:-translate-y-0.5 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {q.label}
              </Link>
            ))}
          </div>
        </section>

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>피부종양센터에서 다루는 질환</SectionTitle>
          <Prose>
            <p>
              피부 아래에서 만져지는 혹, 낭종, 작은 돌기는 대부분 지방종·표피낭종·연성섬유종처럼 흔한 양성
              병변인 경우가 많습니다. 다만 세 질환은 만져지는 느낌이나 겉모습이 비슷하게 느껴질 수 있어,
              스스로 진단하기보다 아래 안내를 참고한 뒤 진찰로 확인하는 편이 안전합니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 gap-2.5 md:gap-3">
            {diseases.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group rounded-[16px] border border-[#e8eef3] bg-white p-4 active:scale-[0.99] hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="flex items-start gap-3">
                  <IconBadge tone={d.tone} icon={d.icon} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-[15px] font-semibold text-[#0d1117] break-keep">{d.title}</h3>
                      <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {d.tag}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#4b5563] leading-[1.7] mb-2 break-keep">{d.def}</p>
                    <p className="text-[12px] text-[#64748b] leading-[1.65] break-keep">
                      <span className="font-semibold text-[#0d1117]">대표 특징</span> · {d.symptom}
                    </p>
                    <span className="mt-2.5 inline-block text-[12px] font-semibold text-primary group-hover:translate-x-0.5 transition-transform duration-150">
                      {d.title} 상세 안내 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>지방종·표피낭종·연성섬유종은 왜 생기나요?</SectionTitle>
          <Prose>
            <p>
              세 질환은 발생 원인이 조금씩 다르지만, 한 가지 이유만으로 단정하기 어려운 경우가 많습니다.
              반복적인 마찰·압력, 피지선 분비관의 막힘, 나이에 따른 조직 변화, 체질적·유전적 요인이 복합적으로
              관여한다고 설명되며, 특별한 원인 없이 생기는 경우도 흔합니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            <IconCard
              tone="blue"
              icon={HandRaisedIcon}
              title="반복적 마찰·압력"
              desc="목·겨드랑이 등 옷이나 피부가 자주 스치는 부위에서 두드러질 수 있습니다."
            />
            <IconCard
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="피지선 분비관 막힘"
              desc="피지·각질이 배출되지 못하고 쌓이면 낭종으로 이어질 수 있습니다."
            />
            <IconCard
              tone="mint"
              icon={CheckCircleIcon}
              title="나이에 따른 조직 변화"
              desc="지방·결합조직의 변화로 나이가 들면서 발생 빈도가 늘 수 있습니다."
            />
            <IconCard
              tone="lavender"
              icon={Squares2X2Icon}
              title="체질적·유전적 요인"
              desc="가족력이 있으면 비슷한 병변이 함께 나타나는 경우가 있다고 알려져 있습니다."
            />
            <IconCard
              tone="peach"
              icon={ShieldExclamationIcon}
              title="특별한 원인 없이 발생"
              desc="뚜렷한 계기 없이 우연히 발견되는 경우도 드물지 않습니다."
            />
            <IconCard
              tone="coral"
              icon={MagnifyingGlassIcon}
              title="정확한 원인은 진찰에서 확인"
              desc="원인을 스스로 단정하기보다 진찰로 상태를 확인하는 것이 안전합니다."
            />
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>다른 혹과 어떻게 구별하나요?</SectionTitle>
          <Prose>
            <p>
              세 질환은 만져지는 질감, 이동성, 중심 개구부 유무로 어느 정도 구별할 수 있다고 설명되지만, 겉모습
              만으로 예외 없이 판단하기는 어렵습니다. 아래 비교를 참고한 뒤, 해당 상세 페이지에서 더 자세한
              내용을 확인해 보세요.
            </p>
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-3">
            {compare.map((c) => (
              <CompareCard key={c.title} tone={c.tone} title={c.title} href={c.href} rows={c.rows as [string, string][]} />
            ))}
          </div>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>진단과 제거 과정</SectionTitle>
          <FlowSteps
            cols={4}
            tone="blue"
            items={[
              { title: '문진·육안 확인', desc: '발생 시기, 크기 변화, 통증·염증 여부를 확인합니다.' },
              { title: '필요 시 추가 확인', desc: '위치·깊이에 따라 초음파 등을 검토할 수 있습니다.' },
              { title: '국소마취 후 절제', desc: '상태에 맞는 절제·시술 방법을 상담합니다.' },
              { title: '조직검사·회복 안내', desc: '필요 시 조직검사를 진행하고 관리 방법을 안내합니다.' },
            ]}
          />
          <Prose>
            <p>
              방문 시에는 언제부터 만져졌는지, 크기가 변했는지, 통증이나 염증이 있었는지를 확인합니다. 위치와
              깊이에 따라 초음파 등 추가 확인이 도움이 되는 경우도 있습니다.
            </p>
            <p>
              진찰 후 병변의 종류와 상태에 맞는 절제·시술 방법을 상담하며, 국소마취 하 외래에서 진행 가능한
              경우가 많습니다. 필요한 경우 절제된 조직으로 조직검사를 진행할 수 있고, 이후 드레싱·재방문 등
              회복 안내를 드립니다.
            </p>
          </Prose>
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>병원 방문이 필요한 경우</SectionTitle>
          <Banner tone="coral" icon={ShieldExclamationIcon}>
            아래와 같은 변화가 있으면 진찰을 받아보는 것이 안전합니다. 증상만으로 상태를 단정할 수는 없습니다.
          </Banner>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              '혹이 빠르게 커지거나 단단해지는 경우',
              '주변이 붓고 빨갛게 변하며 통증이 있는 경우',
              '고름이나 분비물이 나오는 경우',
              '색이 변하거나 모양이 불규칙해지는 경우',
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
              위와 같은 변화는 감염이나 다른 병변 감별이 필요할 수 있다는 신호일 수 있습니다. 자가 처치로 짜거나
              터뜨리기보다 진찰을 받아 상태를 확인한 뒤 치료 방향을 상담하는 것이 안전합니다.
            </p>
          </Prose>
        </section>

        <MedicalImageGallery
          title="피부종양클리닉 안내 이미지"
          items={[
            { src: '/images/medical/skin/common/skin-clinic-image-01.webp', caption: '피부종양클리닉 이미지 01' },
            { src: '/images/medical/skin/common/skin-clinic-image-02.webp', caption: '피부종양클리닉 이미지 02' },
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">피부 아래 혹, 방치하지 마세요</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            크기·염증 여부를 확인한 뒤 관찰이 적절한지 제거가 필요한지 상담할 수 있습니다.
            <br />
            궁금한 질환을 먼저 살펴보고 방문을 계획해 보세요.
          </p>
          <Link
            href="/skin/lipoma"
            className="inline-flex items-center justify-center mt-4 min-h-[44px] px-5 rounded-xl bg-white text-primary text-[13px] font-bold hover:bg-white/95 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            지방종 안내 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
