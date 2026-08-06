import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  FireIcon,
  HeartIcon,
  ScissorsIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import {
  Banner,
  ChecklistPanel,
  ClinicHeroScrim,
  ClinicToc,
  FaqShell,
  IconBadge,
  type PastelTone,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StatChip,
} from '../anorectal/_ui'

export const metadata: Metadata = {
  title: '기타외과질환 | 장튼튼항외과의원',
  description: '김포 구래동 기타외과질환. 화상·내향성발톱·상처봉합·영양수액·예방접종을 상태에 맞춰 상담·처치합니다.',
  keywords: '기타외과질환, 화상, 내향성발톱, 상처봉합, 영양수액, 김포 외과, 장튼튼항외과의원',
  alternates: { canonical: 'https://jtntn.co.kr/surgery' },
  openGraph: {
    title: '기타외과질환 | 장튼튼항외과의원',
    description: '김포 구래동 기타외과질환. 화상·내향성발톱·상처봉합·영양수액·예방접종을 상태에 맞춰 상담·처치합니다.',
    url: 'https://jtntn.co.kr/surgery',
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
  icon: typeof FireIcon
}[] = [
  {
    href: '/surgery/wound',
    title: '상처 치료',
    def: '찰과상·열상·봉합이 필요한 상처부터 만성 상처까지 외과전문의가 직접 처치합니다.',
    symptom: '출혈, 오염, 통증, 감염 의심 신호',
    tag: '응급가능',
    tone: 'blue',
    icon: ScissorsIcon,
  },
  {
    href: '/surgery/burn',
    title: '화상 치료',
    def: '1·2·3도 화상의 단계별 치료를 상담합니다. 상태에 맞는 드레싱으로 회복을 돕습니다.',
    symptom: '발적, 물집, 괴사 등 깊이별 차이',
    tag: '전문치료',
    tone: 'coral',
    icon: FireIcon,
  },
  {
    href: '/surgery/nail',
    title: '내성발톱',
    def: '발톱이 살을 파고들어 생기는 통증·염증·화농. 교정·수술 가능 여부는 상담 후 안내합니다.',
    symptom: '가장자리 통증, 발적, 화농',
    tag: '통증없는',
    tone: 'peach',
    icon: ScissorsIcon,
  },
  {
    href: '/surgery/nutrition',
    title: '영양 수액',
    def: '비타민·미네랄·아미노산이 포함된 맞춤형 영양 수액으로 피로 회복과 면역력 강화를 도와드립니다.',
    symptom: '만성 피로, 면역력 저하, 회복 지원',
    tag: '당일가능',
    tone: 'mint',
    icon: BeakerIcon,
  },
]

const quickNav = [
  { href: '/surgery/wound', label: '상처가 났어요' },
  { href: '/surgery/burn', label: '화상을 입었어요' },
  { href: '/surgery/nail', label: '발톱이 아파요' },
  { href: '/surgery/nutrition', label: '피로 회복이 필요해요' },
]

const related = [
  { href: '/surgery/wound', title: '상처 치료', desc: '찰과상·열상·봉합이 필요한 상처' },
  { href: '/surgery/burn', title: '화상 치료', desc: '화상 정도에 따른 단계별 치료' },
  { href: '/surgery/nail', title: '내성발톱', desc: '발톱이 파고들어 생기는 통증·염증' },
  { href: '/surgery/nutrition', title: '영양 수액', desc: '피로 회복·면역을 위한 수액 안내' },
]

const faqs = [
  {
    q: '기타외과질환에서는 무엇을 보나요?',
    a: '상처·화상·내성발톱·영양수액 등 일상에서 생기는 외과 문제를 상담합니다. 증상 정도와 부위가 다양해 처치 방법이 달라질 수 있으며, 방문 전 증상을 정리해 오시면 도움이 됩니다. 응급성이 높거나 중증이 의심되면 가까운 응급실 이용도 함께 안내할 수 있습니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '상처는 언제 봉합이 필요한가요?',
    a: '깊이와 벌어짐·출혈·오염 정도에 따라 봉합 여부를 판단합니다. 시간이 지난 상처는 바로 봉합이 어려울 수 있어 빠른 상담이 도움이 됩니다. 자세한 내용은 상처 치료 페이지를 참고하시고, 필요하면 방문 전 문의해 주시면 안내해 드립니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '화상은 집에서 처치해도 되나요?',
    a: '가벼운 1도 화상은 냉각·보호로 경과를 볼 수 있는 경우가 있습니다. 물집·넓은 범위·얼굴·손·감염이 의심되면 진료를 권하며, 중증도는 진찰 후 판단합니다. 처치 방법은 상태에 따라 달라질 수 있어 화상 치료 안내 페이지도 함께 확인해 주세요. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '내성발톱은 수술 없이 좋아지나요?',
    a: '초기에는 약물·드레싱·발톱 관리로 호전을 기대할 수 있는 경우가 있습니다. 반복 염증·화농이 있으면 교정술·부분 절제를 상담하며, 통증 정도는 개인차가 있습니다. 상태를 확인한 뒤 보존 치료와 시술 중 적합한 방법을 안내합니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '영양 수액은 누구나 맞을 수 있나요?',
    a: '피로·영양 보충 목적의 상담이 가능하지만 모든 분께 동일한 성분이 적용되지는 않습니다. 기저질환·알레르기·임신 여부를 확인한 뒤 진행합니다. 필요성과 종류는 진료 후 안내드리며, 당일 가능 여부는 일정에 따라 달라질 수 있습니다. 개인 경과에 따라 안내가 달라질 수 있습니다.',
  },
]

export default function SurgeryPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/general-surgery-center.webp"
          alt="장튼튼항외과의원 기타외과질환 진료 안내"
          fill
          className="object-cover object-[54%_38%] lg:object-[50%_36%]"
          sizes="100vw"
          priority
        />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2">홈 / <strong>기타외과질환</strong></nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">기타외과질환</h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">일상 외과 문제 상담·처치 안내</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-7 md:pb-10 space-y-7 md:space-y-8">
        {/* 핵심요약 */}
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                장튼튼항외과의원에서는{' '}
                <Link href="/surgery/wound" className="text-primary font-semibold underline-offset-2 hover:underline">상처</Link>·{' '}
                <Link href="/surgery/burn" className="text-primary font-semibold underline-offset-2 hover:underline">화상</Link>·{' '}
                <Link href="/surgery/nail" className="text-primary font-semibold underline-offset-2 hover:underline">내성발톱</Link>·{' '}
                <Link href="/surgery/nutrition" className="text-primary font-semibold underline-offset-2 hover:underline">영양 수액</Link>
                {' '}등 일상에서 생기는 외과 문제를 상담합니다.
              </p>
              <p>
                출혈·통증·감염이 의심될 때, 또는 상처·발톱 불편이 반복될 때 방문할 수 있습니다. 처치 후에는
                드레싱·재방문·생활 주의사항을 안내하며, 중증도에 따라 상급 병원 연계가 필요할 수 있습니다.
              </p>
              <p>
                증상 정도와 부위가 다양해 처치 방법이 달라질 수 있으므로, 아래 안내를 먼저 살펴보고 해당 상세 페이지로
                이동해 상태에 맞는 정보를 확인해 보세요.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            <StatChip tone="blue" icon={ScissorsIcon} title="상처" desc="찰과상부터 봉합까지 처치" />
            <StatChip tone="coral" icon={FireIcon} title="화상" desc="깊이·범위별 단계 치료" />
            <StatChip tone="peach" icon={ShieldExclamationIcon} title="내성발톱" desc="염증·화농 정도에 따른 시술" />
            <StatChip tone="mint" icon={HeartIcon} title="영양 수액" desc="피로 회복·면역 관리 상담" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 'quick', label: '증상별 빠른 탐색' },
            { id: 's1', label: '기타외과질환센터에서 진료하는 분야' },
            { id: 's2', label: '방문이 필요한 경우' },
            { id: 'diseases', label: '진료 안내' },
          ]}
        />

        {/* 증상별 빠른 탐색 */}
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
          <SectionTitle n={1}>기타외과질환센터에서 진료하는 분야</SectionTitle>
          <Prose>
            <p>
              기타외과질환센터에서는 찰과상부터 깊은 열상까지 이어지는 상처, 깊이와 범위에 따라 처치가 달라지는 화상,
              발톱이 파고들어 생기는 내성발톱, 피로 회복과 면역 관리를 위한 영양 수액까지 폭넓게 상담합니다.
            </p>
            <p>
              증상마다 원인과 처치 방법이 달라 스스로 판단하기 어려운 경우가 많습니다. 아래 질환별 안내에서 각 분야의
              정의와 대표 증상을 먼저 확인한 뒤, 해당 상세 페이지로 이동해 보세요.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>방문이 필요한 경우</SectionTitle>
          <Banner tone="coral" icon={ExclamationTriangleIcon}>
            출혈이 멈추지 않거나 통증·감염이 의심되면 자가 처치보다 진료를 받는 것이 안전합니다.
          </Banner>
          <Prose>
            <p>
              출혈·통증·감염이 의심될 때, 또는 상처·발톱 불편이 반복될 때 방문할 수 있습니다. 처치 후에는
              드레싱·재방문·생활 주의사항을 안내하며, 상태에 따라 상급 병원 연계가 필요할 수 있습니다.
            </p>
          </Prose>
          <ChecklistPanel
            tone="yellow"
            icon={ClipboardDocumentCheckIcon}
            title="아래와 같은 경우 진료를 권합니다"
            items={[
              '상처 출혈이 멈추지 않거나 오염·물린 상처인 경우',
              '화상 물집이 넓거나 얼굴·손·관절을 침범한 경우',
              '발톱 통증·화농이 반복되거나 걷기 힘든 경우',
              '만성 피로·면역력 저하로 컨디션 관리가 필요한 경우',
            ]}
          />
        </section>

        <section id="diseases" className="scroll-mt-20 space-y-3">
          <SectionTitle>진료 안내</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
            {diseases.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group rounded-[16px] border border-[#e8eef3] bg-white p-4 active:scale-[0.99] hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="flex items-start gap-3">
                  <IconBadge tone={d.tone} icon={d.icon} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <h3 className="text-[15px] font-semibold text-[#0d1117] break-keep">{d.title}</h3>
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{d.tag}</span>
                    </div>
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

        <FaqShell>
          <StaticFaq items={faqs} hideHeading />
        </FaqShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

        <section className="space-y-3">
          <SectionTitle>관련 콘텐츠</SectionTitle>
          <RelatedCarousel items={related} />
        </section>

        <div className="rounded-[16px] p-5 md:p-6 text-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>
          <p className="text-white font-bold text-[16px] mb-2 break-keep">일상 속 외과 문제, 참지 마세요</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            상처·화상·발톱 불편이 반복된다면 상태를 확인한 뒤 적절한 방향을 상담할 수 있습니다.
            <br />
            증상에 맞는 안내를 아래에서 먼저 확인해 보세요.
          </p>
          <Link
            href="/surgery/wound"
            className="inline-flex items-center justify-center mt-4 min-h-[44px] px-5 rounded-xl bg-white text-primary text-[13px] font-bold hover:bg-white/95 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            상처 치료 안내 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
