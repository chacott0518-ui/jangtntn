import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowPathIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  EyeDropperIcon,
  FireIcon,
  HeartIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery, { OfficialSource } from '@/components/content/MedicalImageGallery'
import {
  Banner,
  ChecklistPanel,
  ClinicHeroScrim,
  ClinicToc,
  FaqShell,
  FlowSteps,
  IconCard,
  pastel,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StageTimeline,
  StatChip,
} from '../_ui'

export const metadata: Metadata = {
  title: '치핵(치질) | 장튼튼항외과의원',
  description:
    '치핵(치질)의 단계별 증상과 보존·시술·수술 치료 안내. 김포 구래역 장튼튼항외과의원에서 외과전문의가 직접 진찰합니다.',
  keywords:
    '치질, 치핵, 치질진료, 치질치료, 치질수술, 치핵치료, 치핵수술, 김포 치질, 김포 치핵, 김포 치질수술, 구래동 치질, 구래역 치질병원',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal/hemorrhoid' },
  openGraph: {
    title: '치핵(치질) | 장튼튼항외과의원',
    description:
      '치핵(치질)의 단계별 증상과 보존·시술·수술 치료 안내. 김포 구래역 장튼튼항외과의원에서 외과전문의가 직접 진찰합니다.',
    url: 'https://jtntn.co.kr/anorectal/hemorrhoid',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '치핵과 치질은 같은 말인가요?',
    a: '일상에서 말하는 치질은 대개 치핵을 가리키는 표현입니다. 다만 항문 질환에는 치열·치루·농양 등도 있어 출혈이나 통증만으로 치핵이라고 단정하기 어렵습니다. 증상 정도와 생활습관은 개인마다 달라, 항문 진찰로 상태를 확인한 뒤 치료 방향을 상담하는 것이 안전합니다. 비슷한 증상이 반복되면 자가진단보다 진료를 권합니다.',
  },
  {
    q: '항문에서 피가 나면 모두 치핵인가요?',
    a: '선홍색 출혈은 치핵에서 흔하지만 치열이나 대장·직장 질환에서도 나타날 수 있습니다. 출혈량, 통증 유무, 잔변감은 사람마다 다르게 느껴집니다. 원인을 감별하려면 항문 진찰이 필요하며, 상황에 따라 대장내시경도 함께 검토할 수 있습니다. 증상만으로 단정하지 않는 것이 좋으며, 출혈이 반복되거나 어지럼·피로가 동반되면 진료를 미루지 마세요.',
  },
  {
    q: '치핵은 자연적으로 좋아질 수 있나요?',
    a: '초기에는 배변 습관 개선, 좌욕, 약물 등 보존적 관리로 증상이 덜해지는 경우가 있습니다. 다만 조직이 이미 늘어나거나 돌출이 반복되는 상태에서는 생활관리만으로 충분하지 않을 수 있습니다. ‘조금 나아졌다’고 해서 원인이 사라진 것은 아닐 수 있어, 증상이 다시 나타나면 단계와 동반 증상을 확인하는 편이 안전합니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '치핵 수술은 언제 고려하나요?',
    a: '모든 치핵에 수술이 필요한 것은 아닙니다. 1~2도에서는 보존 치료로 경과를 보는 경우가 많고, 3~4도이거나 반복 출혈·감돈·일상 지장이 크면 시술·수술을 검토할 수 있습니다. 수술 여부는 단계, 증상, 생활 불편도, 진찰 소견을 종합해 개인별로 결정합니다. 같은 증상이라도 계획이 달라질 수 있어 일률적으로 단정하지 않습니다.',
  },
  {
    q: '치핵 치료 후에도 다시 생길 수 있나요?',
    a: '치료 후에도 변비, 과도한 힘주기, 장시간 좌위, 화장실에 오래 앉는 습관 등이 이어지면 증상이 다시 나타날 수 있습니다. 재발 가능성을 낮추려면 배변 습관과 생활관리가 중요합니다. 치료 방법과 개인 상태에 따라 경과가 다르므로, 이상 출혈·통증·돌출이 다시 있으면 경과를 확인해 주세요. 수술 후 관리 안내는 수술후주의사항 페이지도 참고할 수 있습니다.',
  },
]

const related = [
  { href: '/anorectal/fissure', title: '치열', desc: '배변 시 날카로운 통증·소량 출혈' },
  { href: '/anorectal/fistula', title: '치루 및 항문주위농양', desc: '분비물·반복 염증이 있을 때 확인' },
  { href: '/anorectal/pruritus', title: '항문소양증', desc: '항문 주위 가려움이 오래갈 때 확인' },
  { href: '/anorectal/levator', title: '항문거근증후군', desc: '항문·골반 바닥의 둔한 통증·압박감' },
  { href: '/anorectal/constipation', title: '변비·설사', desc: '배변 습관 변화와 치핵 증상 연관' },
]

const galleryItems = [
  { src: '/images/medical/anorectal/hemorrhoid/hemorrhoid-diagram.webp', caption: '치핵모식도' },
  { src: '/images/medical/anorectal/hemorrhoid/hemorrhoid-before.webp', caption: '치핵수술 전', clinical: true },
  { src: '/images/medical/anorectal/hemorrhoid/hemorrhoid-after.webp', caption: '치핵수술 후', clinical: true },
  { src: '/images/medical/anorectal/hemorrhoid/hemorrhoid-excised-tissue.webp', caption: '절제된 치핵 조직', clinical: true },
]

const stages: { stage: string; title: string; desc: string; tone: 'mint' | 'yellow' | 'peach' | 'coral' }[] = [
  {
    stage: '1도',
    title: '출혈 위주, 돌출은 없음',
    desc: '배변 시 선홍색 출혈이 있을 수 있으나 항문 밖으로 돌출되지는 않는 단계로 설명합니다. 생활관리와 약물 등 보존적 치료를 먼저 고려하는 경우가 많습니다.',
    tone: 'mint',
  },
  {
    stage: '2도',
    title: '배변 시 돌출 후 자연 복귀',
    desc: '배변 때 돌출되었다가 저절로 들어가는 양상입니다. 보존 치료로 경과를 보거나, 상태에 따라 외래에서 가능한 시술을 상담할 수 있습니다.',
    tone: 'yellow',
  },
  {
    stage: '3도',
    title: '손으로 밀어 넣어야 복귀',
    desc: '돌출된 조직이 저절로 들어가지 않아 손으로 밀어야 하는 단계입니다. 불편이 크면 수술적 치료를 검토하는 경우가 있습니다.',
    tone: 'peach',
  },
  {
    stage: '4도',
    title: '항상 돌출 · 환납이 어려움',
    desc: '항상 바깥에 나와 있거나 밀어도 잘 들어가지 않는 상태입니다. 감돈·통증·위생 문제가 동반될 수 있어 수술적 치료를 신중히 상담합니다.',
    tone: 'coral',
  },
]

export default function HemorrhoidPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/colorectal-center-hero.webp"
          alt="장튼튼항외과의원 치질 진료 안내"
          fill
          className="object-cover object-[58%_center] lg:object-[62%_center]"
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
            <Link href="/anorectal" className="hover:underline">
              대장항문센터
            </Link>
            <span>/</span>
            <strong>치질</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            치질 <span className="text-[#6b7280] text-[16px] md:text-[18px] font-semibold">(치핵)</span>
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            출혈·돌출·통증 증상에 따른 단계별 안내
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
                일상에서 말하는 치질은 대개 치핵을 가리킵니다. 항문 안쪽 또는 바깥쪽의 혈관과 지지조직이 늘어나
                출혈, 돌출, 불편감, 통증이 나타날 수 있는 상태입니다.
              </p>
              <p>
                치핵 증상은 가볍게 시작했다가 배변할 때마다 반복되기도 하고, 돌출이 손으로 밀어야 들어갈 정도로
                진행되기도 합니다. 단계와 증상에 따라 생활관리·약물 등 보존적 치료로 경과를 볼 수도 있고,
                시술이나 수술적 치료를 검토할 수도 있습니다.
              </p>
              <p>
                증상이 반복되거나 항문 출혈이 지속되면 원인을 확인하는 진찰이 도움이 됩니다. 김포·구래동에서
                항문외과 진료를 고려하신다면, 장튼튼항외과의원에서 현재 상태를 바탕으로 치질 치료 방향을
                상담받을 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="blue" icon={EyeDropperIcon} title="대표 증상" desc="출혈·돌출·불편·통증" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="치핵 유형" desc="내치핵·외치핵·혼합" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="치료 방향" desc="보존부터 수술 검토까지" />
            <StatChip tone="peach" icon={CalendarDaysIcon} title="진료 시기" desc="반복·지속 시 확인" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '치핵과 치질은 무엇인가요?' },
            { id: 's2', label: '치핵이 생기는 주요 원인' },
            { id: 's3', label: '내치핵과 외치핵의 차이' },
            { id: 's4', label: '단계별 치핵 증상' },
            { id: 's5', label: '치핵 진찰과 검사 방법' },
            { id: 's6', label: '비수술적 치료와 생활관리' },
            { id: 's7', label: '수술적 치료를 고려하는 경우' },
            { id: 's8', label: '치료 후 관리와 재발 예방' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>치핵과 치질은 무엇인가요?</SectionTitle>
          <SoftCard tone="lavender">
            <p className="text-[13px] font-semibold mb-2" style={{ color: pastel.lavender.text }}>
              용어 관계
            </p>
            <p className="text-[13px] text-[#374151] leading-[1.75]">
              <span className="font-semibold" style={{ color: pastel.lavender.icon }}>
                치질
              </span>
              <span className="mx-1.5 text-[#94a3b8]">→</span>
              일상에서 항문 질환을 통칭할 때 쓰는 표현
            </p>
            <p className="text-[13px] text-[#374151] leading-[1.75] mt-1.5">
              <span className="font-semibold" style={{ color: pastel.lavender.icon }}>
                치핵
              </span>
              <span className="mx-1.5 text-[#94a3b8]">→</span>
              혈관·지지조직이 늘어나 증상이 나타나는 상태를 가리키는 경우가 많음
            </p>
            <p className="text-[12px] text-[#64748b] mt-2 leading-[1.7]">
              치열·치루 등 다른 질환도 ‘치질’로 부르는 경우가 있어 증상만으로 단정하지 않습니다.
            </p>
          </SoftCard>
          <Prose>
            <p>
              치핵은 항문관 안의 혈관 조직(치핵 쿠션)이 늘어나거나 지지조직이 약해지면서 출혈·돌출 같은 증상이
              나타나는 질환입니다. 환자들이 흔히 치질이라고 부르는 말이 바로 이 상태를 가리키는 경우가
              많습니다.
            </p>
            <p>
              대표 증상은 배변 시 선홍색 출혈, 항문 돌출감, 잔변감, 불편감, 통증입니다. 다만 비슷한 증상은
              치열이나 다른 항문·대장 질환에서도 나타날 수 있어, 피나 통증만으로 치핵이라고 단정할 수는
              없습니다.
            </p>
            <p>
              초기에 불편이 가벼워도 배변 습관과 생활 요인이 겹치면 증상이 반복될 수 있습니다. 참기보다 양상과
              기간을 정리해 두면, 진료 때 치핵 증상인지 다른 원인인지 설명하기 쉽습니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>치핵이 생기는 주요 원인</SectionTitle>
          <Prose>
            <p>
              치핵은 한 가지 원인만으로 생기기보다, 항문 혈관에 반복적으로 부담이 쌓이면서 나타나는 경우가
              많습니다. 장시간 앉아 있는 생활, 변비나 설사의 반복, 배변 시 과도한 힘주기, 화장실에 오래 앉아
              있는 습관이 흔히 언급됩니다.
            </p>
            <p>
              임신·출산처럼 복압이 높아지는 시기, 음주나 자극적인 식사 후 증상이 두드러지는 경우도 있습니다.
              가족 중 비슷한 증상이 있다면 조직 성향이 영향을 줄 수 있다는 이야기도 있으나, 그것만으로
              원인을 단정하지는 않습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            <IconCard tone="blue" icon={ClockIcon} title="장시간 좌위" desc="앉은 자세가 길어지면 항문 혈관에 부담이 이어질 수 있습니다." />
            <IconCard tone="mint" icon={ArrowPathIcon} title="변비·설사 반복" desc="힘주기와 잦은 자극이 조직을 약하게 만들 수 있습니다." />
            <IconCard tone="lavender" icon={ClockIcon} title="화장실 장시간 사용" desc="변기에 오래 앉아 있으면 압력이 집중될 수 있습니다." />
            <IconCard tone="peach" icon={HeartIcon} title="임신·출산" desc="복압 증가와 함께 증상이 두드러질 수 있습니다." />
            <IconCard tone="coral" icon={ExclamationTriangleIcon} title="과도한 힘주기" desc="배변 시 무리한 압력은 부담을 키울 수 있습니다." />
            <IconCard tone="yellow" icon={FireIcon} title="음주·자극적 식사" desc="이후 증상이 더 느껴지는 경우가 있습니다." />
          </div>
          <Prose>
            <p>
              원인을 스스로 하나만 집어내기보다, 증상 시작 전후의 생활 변화를 함께 보는 것이 진료에 도움이
              됩니다. 생활 요인이 있다고 해서 다른 질환을 배제해도 된다는 뜻은 아닙니다.
            </p>
          </Prose>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>내치핵과 외치핵의 차이</SectionTitle>
          <Prose>
            <p>
              치상선을 기준으로 안쪽에서 생기는 것을 내치핵, 바깥쪽에서 생기는 것을 외치핵이라고 합니다. 두
              가지가 함께 있는 혼합치핵도 흔합니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: pastel.blue.border }}>
              <div className="px-3.5 py-2.5" style={{ background: pastel.blue.bg }}>
                <p className="text-[12px] font-semibold" style={{ color: pastel.blue.text }}>내치핵</p>
                <p className="text-[14px] font-semibold text-[#0d1117] mt-0.5 break-keep">출혈·돌출이 상대적으로 흔함</p>
              </div>
              <div className="p-3.5">
                <dl className="space-y-1.5 text-[12.5px]">
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">위치</dt><dd>치상선 안쪽</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">증상</dt><dd>선홍색 출혈이 먼저 느껴지는 경우</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">통증</dt><dd>초기에는 상대적으로 적을 수 있음</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">돌출</dt><dd>진행 시 나타날 수 있음</dd></div>
                </dl>
                <p className="text-[12.5px] text-[#64748b] leading-[1.7] mt-3">
                  초기에는 통증보다 배변 시 선홍색 출혈이 먼저 느껴지는 경우가 많습니다. 진행되면 돌출감이
                  생길 수 있습니다.
                </p>
              </div>
            </div>
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: pastel.peach.border }}>
              <div className="px-3.5 py-2.5" style={{ background: pastel.peach.bg }}>
                <p className="text-[12px] font-semibold" style={{ color: pastel.peach.text }}>외치핵</p>
                <p className="text-[14px] font-semibold text-[#0d1117] mt-0.5 break-keep">통증·불편감이 두드러질 수 있음</p>
              </div>
              <div className="p-3.5">
                <dl className="space-y-1.5 text-[12.5px]">
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">위치</dt><dd>치상선 바깥쪽</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">증상</dt><dd>만져지거나 붓는 느낌</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">통증</dt><dd>혈전 시 커질 수 있음</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">돌출</dt><dd>입구 쪽에서 확인되는 경우</dd></div>
                </dl>
                <p className="text-[12.5px] text-[#64748b] leading-[1.7] mt-3">
                  항문 입구 쪽에서 만져지거나 붓는 느낌이 있을 수 있고, 혈전이 생기면 통증이 커질 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <Banner tone="lavender">혼합치핵처럼 두 유형이 함께 있을 수 있어, ‘아프다/피가 난다’만으로 구분은 어렵습니다.</Banner>
          <Prose>
            <p>
              환자가 느끼는 ‘아프다/피가 난다’만으로는 내치핵·외치핵을 구분하기 어렵습니다. 위치와 상태는
              진찰로 확인하며, 치료 방향도 그에 맞춰 달라질 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>단계별 치핵 증상</SectionTitle>
          <Prose>
            <p>
              내치핵은 흔히 1~4도로 구분해 설명합니다. 단계는 참고 지표이며, 같은 단계라도 통증·출혈·생활
              지장은 개인마다 다릅니다.
            </p>
          </Prose>
          <StageTimeline
            items={stages.map((s) => ({ badge: s.stage, title: s.title, desc: s.desc, tone: s.tone }))}
          />
          <Prose>
            <p>
              ‘몇 도라서 무조건 수술’처럼 단계만으로 치료 방법을 고정하지는 않습니다. 출혈량, 통증, 감돈,
              일상 지장, 진찰 소견을 함께 봅니다.
            </p>
          </Prose>
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>치핵 진찰과 검사 방법</SectionTitle>
          <FlowSteps
            cols={4}
            tone="blue"
            items={[
              { title: '증상·배변 확인', desc: '기간, 출혈·돌출 양상, 배변 습관을 확인합니다.' },
              { title: '항문 진찰', desc: '필요한 경우 위치와 단계를 평가합니다.' },
              { title: '필요 시 검사', desc: '항문경 등 추가 검사를 검토할 수 있습니다.' },
              { title: '치료 상담', desc: '상태에 맞는 방향을 개인별로 안내합니다.' },
            ]}
          />
          <Prose>
            <p>
              진료에서는 증상 기간, 출혈·돌출·통증의 양상, 배변 습관, 복용약을 확인합니다. 필요한 경우 항문
              진찰로 위치와 단계를 평가합니다.
            </p>
            <p>
              모든 출혈이 치핵만은 아니므로, 연령·가족력·체중 변화·빈혈 의심 증상 등을 보고 추가 검사가
              필요한지 판단합니다. 상황에 따라{' '}
              <Link href="/endoscopy/colon" className="text-primary font-semibold underline-offset-2 hover:underline">
                대장내시경
              </Link>
              을 함께 검토할 수 있으나, 모든 환자에게 일률적으로 시행하지는 않습니다.
            </p>
            <p>
              방문 전에는 증상이 시작된 날짜, 피가 나는 시점(배변 중/후), 돌출 여부, 복용 중인 약 이름을
              메모해 오시면 상담이 수월합니다. 일정은{' '}
              <Link href="/about/info" className="text-primary font-semibold underline-offset-2 hover:underline">
                진료안내
              </Link>
              를 참고해 주세요.
            </p>
          </Prose>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>비수술적 치료와 생활관리</SectionTitle>
          <Prose>
            <p>
              초기에는 배변 습관 개선, 좌욕, 수분·식이섬유의 점진적 조절, 연고·좌약 등 보존적 치료로 증상을
              완화하는 방법을 먼저 상담하는 경우가 많습니다. 모든 환자에게 같은 처방이 적용되는 것은
              아닙니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              icon={CheckCircleIcon}
              title="도움이 될 수 있는 습관"
              items={[
                '변의를 지나치게 참지 않기, 변기에 너무 오래 앉아 있지 않기',
                '과도한 힘주기 줄이기, 변비·설사가 반복되면 원인 함께 살피기',
                '미온수 좌욕을 무리 없는 범위에서 시도해 보기',
                '식이섬유는 갑자기 많이 늘리지 않고 서서히 조절하기',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="주의·조절이 필요한 습관"
              items={[
                '장시간 변기에 앉아 스마트폰 보기',
                '딱딱한 변을 무리하게 참으며 힘주기',
                '증상을 무시하고 연고만 장기간 반복하기',
                '음주·자극적 식사 후 악화 여부를 살피지 않기',
              ]}
            />
          </div>
          <Prose>
            <p>
              2도 일부에서는 상태에 따라 고무밴드 결찰 같은 외래 시술을 상담할 수 있습니다. 시술 가능 여부와
              회복 양상은 개인마다 달라 진찰 후 안내합니다. 장기간 자가치료만 이어가기보다, 증상이 반복되면
              방향을 재확인하는 것이 안전합니다.
            </p>
          </Prose>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>수술적 치료를 고려하는 경우</SectionTitle>
          <Banner tone="peach">모든 치핵이 수술이 필요한 것은 아닙니다. 보존적 치료로 경과를 보는 경우도 많습니다.</Banner>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              '출혈이나 돌출이 반복되는 경우',
              '일상생활 불편이 지속되는 경우',
              '보존적 치료로 증상 조절이 어려운 경우',
              '진찰 결과 수술적 치료가 적절하다고 판단되는 경우',
            ].map((t) => (
              <div
                key={t}
                className="rounded-[14px] border px-4 py-3.5 min-h-[52px] flex items-center text-[13.5px] font-semibold leading-snug break-keep"
                style={{ background: pastel.peach.bg, borderColor: pastel.peach.border, color: pastel.peach.text }}
              >
                {t}
              </div>
            ))}
          </div>
          <Prose>
            <p>
              돌출이 손으로 밀어야 들어가거나 항상 나와 있는 경우, 출혈이 반복되어 일상에 지장이 큰 경우,
              감돈으로 통증이 심한 경우 등에서 수술적 치료를 검토할 수 있습니다.
            </p>
            <p>
              치핵 절제술은 늘어난 조직을 직접 다루는 방법 중 하나로 설명됩니다. 어떤 방법이 적합한지는 내치핵·외치핵
              여부, 개수, 동반 질환, 이전 치료력에 따라 달라집니다. 수술로만 ‘완치’된다고 단정하거나, 모든
              환자에게 같은 수술을 권하지는 않습니다.
            </p>
            <p>
              장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다. 상태에 맞는 치료 옵션은 진찰 후 상담으로
              안내드리며, 수술 전후 주의사항은{' '}
              <Link href="/about/aftercare" className="text-primary font-semibold underline-offset-2 hover:underline">
                수술후주의사항
              </Link>
              에서도 확인할 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="s8" className="scroll-mt-20 space-y-3">
          <SectionTitle n={8}>치료 후 관리와 재발 예방</SectionTitle>
          <Prose>
            <p>
              치료 후에는 좌욕, 배변 습관, 식이·수분, 활동 제한 등 안내를 따르는 것이 회복에 도움이 됩니다.
              퇴원 시기와 일상 복귀는 상태에 따라 달라질 수 있습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              icon={CheckCircleIcon}
              title="유지하면 좋은 습관"
              items={[
                '안내받은 좌욕·배변 관리를 무리 없이 지키기',
                '변비 예방을 위해 수분과 식이섬유를 점진적으로 조절',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="피하거나 조절할 습관"
              items={[
                '격렬한 운동·음주·자극적 음식은 안내 기간 동안 자제',
                '이상 출혈·발열·심한 통증이 있으면 진료 상담',
              ]}
            />
          </div>
          <Prose>
            <p>
              재발을 완전히 막을 수는 없지만, 배변 습관과 좌위 시간을 조절하면 부담을 줄이는 데 도움이 될 수
              있습니다. 증상이 다시 나타나면 이전과 같은 병이라고 단정하지 말고 상태를 재확인하는 편이
              안전합니다.
            </p>
          </Prose>
        </section>

        <div id="images" className="scroll-mt-20">
          <MedicalImageGallery title="관련 이미지" items={galleryItems} />
        </div>

        <OfficialSource
          sources={['보건복지부', '대한의학회']}
          note="위 치핵모식도는 보건복지부·대한의학회 자료에 표기된 출처를 따릅니다. 이 페이지는 일반적인 건강정보이며 개인의 진단·치료를 대신하지 않습니다."
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">치핵 참지 마세요</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            반복되는 출혈과 돌출, 통증을 계속 참지 마세요.
            <br />
            증상의 원인과 치핵의 단계를 확인한 뒤 적절한 치료 방향을 상담할 수 있습니다.
            <br />
            장튼튼항외과의원에서 현재 상태를 확인해 보세요.
          </p>
        </div>
      </div>
    </div>
  )
}
