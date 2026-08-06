import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BoltIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  EyeDropperIcon,
  HeartIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { OfficialSource } from '@/components/content/MedicalImageGallery'
import {
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
  TipBanner,
  WarnSoft,
} from './_ui'

export const metadata: Metadata = {
  title: '대장항문클리닉 | 장튼튼항외과의원',
  description: '김포 구래동 대장항문클리닉. 치질(치핵)·치열·치루·변비·항문소양증 등 항문 질환을 외과전문의가 상담·진찰 후 상태에 맞춰 안내합니다.',
  keywords: '대장항문클리닉, 치질, 치핵, 치열, 치루, 김포 항문외과, 구래동 항문외과, 장튼튼항외과의원',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal' },
  openGraph: {
    title: '대장항문클리닉 | 장튼튼항외과의원',
    description: '김포 구래동 대장항문클리닉. 치질(치핵)·치열·치루·변비·항문소양증 등 항문 질환을 외과전문의가 상담·진찰 후 상태에 맞춰 안내합니다.',
    url: 'https://jtntn.co.kr/anorectal',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const diseases: { href: string; title: string; def: string; symptom: string; tone: PastelTone }[] = [
  {
    href: '/anorectal/hemorrhoid',
    title: '치질',
    def: '항문 주위 혈관·지지조직이 늘어나 출혈·돌출 등이 나타나는 질환(치핵)',
    symptom: '항문 출혈, 돌출감, 불편감, 통증',
    tone: 'blue',
  },
  {
    href: '/anorectal/fissure',
    title: '치열',
    def: '항문 입구 점막이 찢어져 배변 시 통증이 두드러질 수 있는 상태',
    symptom: '배변 시 날카로운 통증, 소량의 출혈',
    tone: 'peach',
  },
  {
    href: '/anorectal/fistula',
    title: '치루 및 항문주위농양',
    def: '항문 주위 감염이 농양·누공으로 이어질 수 있는 질환',
    symptom: '통증, 부종, 분비물, 반복 염증',
    tone: 'coral',
  },
  {
    href: '/anorectal/condyloma',
    title: '항문콘딜로마',
    def: 'HPV 감염과 관련될 수 있는 항문 주위 사마귀성 병변',
    symptom: '돌기·종기 모양 병변, 가려움, 불편감',
    tone: 'lavender',
  },
  {
    href: '/anorectal/levator',
    title: '항문거근증후군',
    def: '항문·골반 바닥 근육 긴장과 관련될 수 있는 불편',
    symptom: '둔한 통증, 압박감, 앉을 때 불편',
    tone: 'blue',
  },
  {
    href: '/anorectal/pruritus',
    title: '항문소양증',
    def: '항문 주위 피부가 지속적으로 가려운 상태',
    symptom: '가려움, 피부 자극, 분비물 동반 가능',
    tone: 'yellow',
  },
  {
    href: '/anorectal/pilonidal',
    title: '모소동',
    def: '꼬리뼈 부근 모낭 감염으로 낭종·누공이 생길 수 있는 질환',
    symptom: '엉덩이 위쪽 통증, 부종, 분비물',
    tone: 'peach',
  },
  {
    href: '/anorectal/constipation',
    title: '변비·설사',
    def: '배변 횟수·형태가 달라져 일상 불편이 이어지는 상태',
    symptom: '배변 곤란, 묽은 변, 잔변감, 복부 불편',
    tone: 'mint',
  },
]

const faqs = [
  {
    q: '대장항문센터에서는 어떤 증상을 보나요?',
    a: '항문 출혈, 통증, 가려움, 돌출감, 분비물, 배변 습관 변화처럼 항문·대장과 관련된 불편을 상담합니다. 치질(치핵), 치열, 치루, 소양증, 콘딜로마, 변비·설사 등이 대표 질환이지만 증상만으로 원인을 단정하기는 어렵습니다. 문진과 진찰 후 상태에 맞는 방향을 안내하며, 필요하면 추가 검사를 검토할 수 있습니다. 불편이 반복되면 자가진단보다 진료 상담이 안전합니다.',
  },
  {
    q: '항문 출혈이 있으면 치질인가요?',
    a: '출혈은 치핵에서 흔하지만 치열, 용종, 다른 대장·직장 원인에서도 나타날 수 있습니다. 피의 색, 양, 통증 동반 여부가 참고가 될 수는 있으나 그것만으로 원인을 확정할 수는 없습니다. 출혈이 반복되거나 빈혈·어지럼이 함께 있으면 진료를 미루지 않는 편이 좋습니다. 개인 상태와 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '치질은 꼭 수술이 필요한가요?',
    a: '초기에는 좌욕, 배변 습관 개선, 약물 등 보존적 치료로 경과를 보는 경우가 많습니다. 돌출·반복 출혈·일상 지장이 크면 시술이나 수술을 상담할 수 있지만, 수술 여부는 일률적이지 않습니다. 단계와 증상, 생활 불편도를 함께 보고 방향을 정합니다. 자세한 내용은 치질(치핵) 안내 페이지에서도 확인할 수 있습니다.',
  },
  {
    q: '치열과 치루는 어떻게 다른가요?',
    a: '치열은 항문 점막이 찢어져 배변 시 통증이 두드러지는 경우가 많습니다. 치루는 감염 통로(누공)가 생겨 분비물이나 반복 농양이 나타날 수 있습니다. 치료 접근이 달라 진찰과 필요 시 검사가 중요합니다. 증상만으로 구분이 어려울 수 있어, 비슷한 불편이 이어지면 상담을 권합니다.',
  },
  {
    q: '변비만 있어도 대장항문 진료가 필요한가요?',
    a: '만성 변비나 설사가 일상 생활에 지장을 주면 대장항문 상담을 받을 수 있습니다. 생활습관, 복용약, 동반 항문 질환 여부를 함께 살피며 배변 기록이 있으면 도움이 됩니다. 혈변, 체중 감소, 심한 피로 같은 신호가 있으면 내시경 등 추가 검사가 필요할 수 있습니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
]

const related = [
  { href: '/anorectal/hemorrhoid', title: '치질', desc: '출혈·돌출·불편감이 있을 때 확인' },
  { href: '/anorectal/fissure', title: '치열', desc: '배변 시 날카로운 통증·소량 출혈' },
  { href: '/anorectal/fistula', title: '치루·항문주위농양', desc: '분비물·반복 염증이 있을 때 확인' },
  { href: '/anorectal/constipation', title: '변비·설사', desc: '배변 습관 변화의 원인과 관리' },
]

const quickNav = [
  { href: '/anorectal/hemorrhoid', label: '출혈이 있어요' },
  { href: '/anorectal/fissure', label: '항문이 아파요' },
  { href: '/anorectal/hemorrhoid', label: '무언가 튀어나와요' },
  { href: '/anorectal/pruritus', label: '가려움이 있어요' },
  { href: '/anorectal/fistula', label: '분비물이 있어요' },
  { href: '/anorectal/constipation', label: '배변이 불편해요' },
]

const compare = [
  {
    title: '치질(치핵)',
    href: '/anorectal/hemorrhoid',
    rows: [
      ['대표 증상', '출혈, 돌출, 불편감'],
      ['통증', '돌출·혈전 시 두드러질 수 있음'],
      ['출혈', '선홍색 출혈이 흔함'],
      ['분비물', '상대적으로 적음'],
      ['진료 시점', '반복 출혈·돌출이 있을 때'],
    ],
  },
  {
    title: '치열',
    href: '/anorectal/fissure',
    rows: [
      ['대표 증상', '배변 시 날카로운 통증'],
      ['통증', '배변 직후 작열감이 길 수 있음'],
      ['출혈', '소량인 경우가 많음'],
      ['분비물', '적을 수 있음'],
      ['진료 시점', '통증이 반복·지속될 때'],
    ],
  },
  {
    title: '치루·농양',
    href: '/anorectal/fistula',
    rows: [
      ['대표 증상', '통증, 부종, 분비물'],
      ['통증', '붓기와 함께 심할 수 있음'],
      ['출혈', '주 증상이 아닐 수 있음'],
      ['분비물', '반복될 수 있음'],
      ['진료 시점', '분비물·발열·부종이 있을 때'],
    ],
  },
]

export default function AnorectalPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/colorectal-center-hero.webp"
          alt="장튼튼항외과의원 대장항문클리닉 진료 안내"
          fill
          className="object-cover object-[58%_center] lg:object-[62%_center]"
          sizes="100vw"
          priority
        />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2">
            홈 / <strong>대장항문센터</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            대장항문센터
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            출혈·통증·돌출·배변 변화를 증상과 상태에 맞춰 안내합니다
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
                대장항문 질환은 출혈, 통증, 돌출, 가려움, 분비물, 배변 습관 변화처럼 증상이 겹치는 경우가 많아
                증상만으로 원인을 단정하기 어렵습니다. 같은 출혈이라도 치질(치핵), 치열, 다른 대장·직장 원인일 수
                있어 자가진단에는 한계가 있습니다.
              </p>
              <p>
                증상이 짧게 나타났다 가라앉더라도 반복되거나 점점 불편해진다면 상태를 확인해 보는 편이 안전합니다.
                질환과 진행 정도에 따라 생활관리·약물 등 보존적 치료로 경과를 볼 수도 있고, 시술·수술이 필요할 수도
                있습니다.
              </p>
              <p>
                장튼튼항외과의원 대장항문센터에서는 문진과 진찰을 바탕으로 현재 증상의 의미를 정리하고, 필요한 경우
                검사와 치료 방향을 안내합니다. 아래 질환별 안내를 먼저 살펴본 뒤 해당 상세 페이지로 이동해 보세요.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            <StatChip tone="blue" icon={EyeDropperIcon} title="출혈" desc="치핵뿐 아니라 다른 원인도 가능" />
            <StatChip tone="peach" icon={BoltIcon} title="통증" desc="치열·농양 등과 감별 필요" />
            <StatChip tone="lavender" icon={ShieldExclamationIcon} title="돌출·가려움" desc="위치와 양상을 함께 확인" />
            <StatChip tone="mint" icon={CalendarDaysIcon} title="배변 변화" desc="습관과 동반 증상 기록" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '대장항문 질환은 어떤 증상으로 나타나나요?' },
            { id: 's2', label: '항문 출혈과 통증을 확인해야 하는 이유' },
            { id: 's3', label: '치질·치열·치루의 차이' },
            { id: 's4', label: '배변 습관과 대장항문 건강' },
            { id: 's5', label: '진찰과 검사 방법' },
            { id: 's6', label: '치료 방법과 진료 시기' },
            { id: 'quick', label: '증상별 빠른 탐색' },
            { id: 'diseases', label: '질환별 안내' },
          ]}
        />

        {/* 증상별 빠른 탐색 — 목차 뒤 허브 탐색 */}
        <section id="quick" className="scroll-mt-20 space-y-3">
          <SectionTitle>증상별 빠른 탐색</SectionTitle>
          <div className="grid grid-cols-2 gap-2.5">
            {quickNav.map((q) => (
              <Link
                key={q.label}
                href={q.href}
                className="flex items-center justify-center min-h-[48px] rounded-[14px] border border-[#e8eef3] bg-white px-3 text-[13px] font-bold text-[#0d1117] text-center leading-snug hover:border-primary/35 hover:-translate-y-0.5 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {q.label}
              </Link>
            ))}
          </div>
        </section>

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>대장항문 질환은 어떤 증상으로 나타나나요?</SectionTitle>
          <Prose>
            <p>
              환자들이 흔히 느끼는 불편은 배변 시 또는 배변 후 피가 비치는 것, 항문 통증, 덩어리가 만져지거나
              돌출되는 느낌, 가려움, 젖는 듯한 분비물, 변이 딱딱하거나 반대로 잦아지는 변화입니다.
            </p>
            <p>
              증상은 하루이틀 만에 가라앉기도 하고, 몇 주 이상 들쭉날쭉 반복되기도 합니다. ‘조금 괜찮아졌다’고
              해서 원인이 사라진 것은 아닐 수 있어, 언제부터 어떤 순서로 나타났는지를 기록해 두면 상담에 도움이
              됩니다.
            </p>
            <p>
              야간에 통증이 심해지거나, 발열·심한 부종이 동반되거나, 피가 멈추지 않는 느낌이 들면 진료 시기를
              앞당기는 편이 좋습니다. 반대로 가벼운 불편이라도 반복되면 원인을 좁혀 보는 과정이 필요할 수
              있습니다.
            </p>
          </Prose>
          <TipBanner>
            증상 시작 날짜, 출혈·통증의 순서, 배변 형태 변화를 짧게 메모해 오시면 진료가 수월합니다.
          </TipBanner>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>항문 출혈과 통증을 확인해야 하는 이유</SectionTitle>
          <WarnSoft>
            항문 출혈이 모두 치질을 의미하지는 않습니다. 색과 양만으로 원인을 단정하기 어렵습니다.
          </WarnSoft>
          <Prose>
            <p>
              항문 출혈이 모두 치질을 의미하지는 않습니다. 치열처럼 점막이 찢어진 경우, 또는 대장·직장 쪽에서
              피가 나는 경우도 있어 색과 양만으로 원인을 단정하기 어렵습니다.
            </p>
            <p>
              통증도 질환마다 느낌이 다릅니다. 배변 순간 칼로 베는 듯한 통증은 치열에서 흔하고, 둔한 압박감이나
              돌출 관련 불편은 치핵에서 더 자주 이야기됩니다. 농양·치루에서는 부종과 열감이 함께 나타날 수
              있습니다.
            </p>
            <p>
              출혈과 통증이 함께 있거나, 빈혈을 의심할 만한 피로·어지럼이 동반되거나, 이전에 없던 배변 변화가
              이어진다면 상태를 확인하는 것이 안전합니다. 장튼튼항외과의원에서는 증상을 억지로 한 가지 병명으로
              단정하지 않고 진찰 소견과 함께 안내합니다.
            </p>
          </Prose>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>치질·치열·치루의 차이</SectionTitle>
          <Prose>
            <p>
              <Link href="/anorectal/hemorrhoid" className="text-primary font-semibold underline-offset-2 hover:underline">
                치질(치핵)
              </Link>
              은 항문 혈관과 지지조직이 늘어나 출혈·돌출·불편감이 나타날 수 있는 상태입니다.{' '}
              <Link href="/anorectal/fissure" className="text-primary font-semibold underline-offset-2 hover:underline">
                치열
              </Link>
              은 항문 입구 점막이 찢어져 배변 시 통증이 두드러질 수 있습니다.{' '}
              <Link href="/anorectal/fistula" className="text-primary font-semibold underline-offset-2 hover:underline">
                치루·항문주위농양
              </Link>
              은 감염과 관련된 통증·분비물·반복 염증이 핵심일 수 있습니다.
            </p>
            <p>
              세 질환은 함께 나타나기도 하고, 환자가 느끼는 표현이 비슷해 스스로 구분하기 어렵습니다. ‘피가
              난다’, ‘아프다’, ‘붓는다’만으로는 치료 방향을 정하기 어려워 진찰이 중요합니다.
            </p>
            <p>
              아래 질환 카드에서 각 질환의 정의와 대표 증상을 먼저 확인한 뒤, 해당 상세 안내로 이동해 보시면
              다음 상담이 한결 수월해집니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-3">
            {compare.map((c, i) => (
              <CompareCard
                key={c.title}
                tone={(['blue', 'peach', 'lavender'] as const)[i]}
                title={c.title}
                href={c.href}
                rows={c.rows as [string, string][]}
              />
            ))}
          </div>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>배변 습관과 대장항문 건강</SectionTitle>
          <Prose>
            <p>
              딱딱한 변과 과도한 힘주기, 반대로 잦은 묽은 변은 항문 점막과 혈관 조직에 부담을 줄 수 있습니다.
              화장실에 오래 앉아 있거나 변의를 자주 참는 습관도 불편을 키우는 요인이 될 수 있습니다.
            </p>
            <p>
              배변 습관만의 문제로 단정할 수는 없습니다. 다만 증상이 있을 때 식사·수분·활동량·수면·복용약을
              함께 돌아보면 원인 파악에 단서가 됩니다.{' '}
              <Link href="/anorectal/constipation" className="text-primary font-semibold underline-offset-2 hover:underline">
                변비·설사 안내
              </Link>
              에서 배변 변화와 관련된 기본 정보를 확인할 수 있습니다.
            </p>
            <p>
              생활 습관을 잠시 정리해 보는 것과 진료를 받는 것은 서로 배타적이지 않습니다. 습관을 바꿔도 증상이
              반복되면 진찰을 통해 다른 원인을 확인하는 과정이 필요할 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>진찰과 검사 방법</SectionTitle>
          <FlowSteps
            items={[
              { title: '증상 확인', desc: '기간·패턴·배변 습관·복용약을 정리합니다.' },
              { title: '문진과 진찰', desc: '필요한 경우 항문 진찰로 상태를 확인합니다.' },
              { title: '필요 시 검사', desc: '연령·동반 소견에 따라 추가 검사를 검토합니다.' },
              { title: '치료 방향 상담', desc: '보존·시술·수술 여부를 개인별로 안내합니다.' },
            ]}
          />
          <Prose>
            <p>
              진료에서는 증상의 기간과 패턴, 배변 습관, 복용약, 이전 항문·대장 질환 이력을 먼저 확인합니다.
              필요한 경우 항문 진찰을 시행하며, 상태에 따라 추가 검사를 검토할 수 있습니다.
            </p>
            <p>
              모든 환자에게 같은 검사가 필요한 것은 아닙니다. 연령, 출혈 양상, 체중 변화, 가족력, 기존 검사
              이력 등을 종합해 필요성을 판단합니다. 대장내시경이 검토되는 경우도 있으나 일률적으로 시행하지는
              않습니다.
            </p>
            <p>
              첫 방문 전에는 증상 시작 시점, 출혈·통증의 양상, 복용 중인 약 이름을 메모해 오시면 상담이
              수월합니다. 편한 복장이 도움이 될 수 있으며, 일정은{' '}
              <Link href="/about/info" className="text-primary font-semibold underline-offset-2 hover:underline">
                진료안내
              </Link>
              를 참고해 주세요.
            </p>
          </Prose>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>치료 방법과 진료 시기</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <IconCard
              tone="mint"
              icon={CheckCircleIcon}
              title="생활관리·보존"
              desc="배변 습관, 좌욕, 약물 등으로 경과를 볼 수 있습니다."
            />
            <IconCard
              tone="lavender"
              icon={ClipboardDocumentCheckIcon}
              title="증상별 처치"
              desc="질환·단계에 따라 연고·시술 등을 상담합니다."
            />
            <IconCard
              tone="peach"
              icon={HeartIcon}
              title="수술 검토"
              desc="모든 환자에게 필요하지는 않으며 진찰 후 판단합니다."
            />
          </div>
          <Prose>
            <p>
              조기에 상태를 확인하면 생활관리와 약물 등 보존적 치료로 경과를 볼 수 있는 경우가 있습니다. 다만
              질환과 단계, 감염 여부, 일상 지장 정도에 따라 시술·수술이 더 적합한 경우도 있습니다.
            </p>
            <p>
              특정 치료를 미리 단정하거나 효과를 보장할 수는 없습니다. 진단 없이 연고·좌약·민간요법을 장기간
              반복하기보다, 증상이 반복될 때 원인을 확인하는 편이 안전합니다.
            </p>
            <p>
              출혈이 반복되거나, 통증이 일상생활을 방해하거나, 분비물·발열·부종이 있거나, 돌출이 손으로도 잘
              들어가지 않으면 진료 상담을 권합니다. 수술 후 관리가 궁금하면{' '}
              <Link href="/about/aftercare" className="text-primary font-semibold underline-offset-2 hover:underline">
                수술후주의사항
              </Link>
              도 함께 확인해 주세요.
            </p>
          </Prose>
        </section>

        <section id="diseases" className="scroll-mt-20 space-y-3">
          <SectionTitle>질환별 안내</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
            {diseases.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group rounded-[16px] border border-[#e8eef3] bg-white p-4 active:scale-[0.99] hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="flex items-start gap-3">
                  <IconBadge tone={d.tone} icon={InformationCircleIcon} />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-semibold text-[#0d1117] mb-1 break-keep">{d.title}</h3>
                    <p className="text-[13px] text-[#4b5563] leading-[1.7] mb-2 break-keep">{d.def}</p>
                    <p className="text-[12px] text-[#64748b] leading-[1.65] break-keep">
                      <span className="font-semibold text-[#0d1117]">대표 증상</span> · {d.symptom}
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

        <OfficialSource
          sources={['보건복지부', '대한의학회']}
          note="대장항문 질환 안내는 일반적인 건강정보이며, 개인의 진단·치료 방침은 진료 결과에 따릅니다. 관련 모식도·자료가 있는 상세 페이지에서는 표기된 출처를 따릅니다."
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
            반복되는 출혈·돌출·통증을 계속 넘기지 마세요.
            <br />
            증상의 원인과 상태를 확인한 뒤 적절한 방향을 상담할 수 있습니다.
          </p>
          <Link
            href="/anorectal/hemorrhoid"
            className="inline-flex items-center justify-center mt-4 min-h-[44px] px-5 rounded-xl bg-white text-primary text-[13px] font-bold hover:bg-white/95 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            치질(치핵) 안내 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
