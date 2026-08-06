import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BeakerIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  HandRaisedIcon,
  ShieldExclamationIcon,
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
  title: '변비·설사 | 장튼튼항외과의원',
  description:
    '만성 변비와 설사의 원인 평가·생활습관·약물 치료 안내. 배변 장애가 반복될 때 김포 구래역 장튼튼항외과의원에서 필요 시 대장내시경을 함께 검토합니다.',
  keywords: '변비, 만성변비, 설사, 만성설사, 잔변감, 김포 변비, 김포 설사',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal/constipation' },
  openGraph: {
    title: '변비·설사 | 장튼튼항외과의원',
    description:
      '만성 변비와 설사의 원인 평가·생활습관·약물 치료 안내. 배변 장애가 반복될 때 김포 구래역 장튼튼항외과의원에서 필요 시 대장내시경을 함께 검토합니다.',
    url: 'https://jtntn.co.kr/anorectal/constipation',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '변비와 설사가 번갈아 나타나도 진료가 필요한가요?',
    a: '네, 교대 배변은 과민성 장증후군이나 다른 장 질환에서도 나타날 수 있습니다. 빈도·통증·혈변 유무는 개인마다 다르며, 증상만으로 원인을 단정하기 어렵습니다. 증상 패턴을 확인하고 필요하면 추가 검사를 권하며 항문 질환 동반 여부도 함께 봅니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '만성 변비는 약만 먹으면 해결되나요?',
    a: '완하제는 증상 완화에 도움이 될 수 있으나 원인에 따라 단독 사용만으로는 부족할 수 있습니다. 식이·수분·배변 습관 교정이 함께 중요하며, 약에 대한 반응도 개인차가 있습니다. 약 종류와 용량은 개인 상태에 맞게 조절하고 필요 시 검사를 검토합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '설사가 반복되면 어떤 검사를 하나요?',
    a: '병력과 진찰을 먼저 하고, 지속 기간·체중 변화·야간 설사 여부에 따라 검사를 결정합니다. 대장내시경이나 혈액·대변 검사가 필요할 수 있습니다. 모든 환자에게 같은 검사는 아니며 개인별로 계획이 달라지므로 증상을 자세히 말씀해 주시면 도움이 됩니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '변비가 치핵·치열과 관련이 있나요?',
    a: '딱딱한 변과 과도한 힘주기는 치핵·치열을 악화시키는 흔한 요인입니다. 반대로 항문 통증 때문에 배변을 참으면 변비가 더 심해질 수 있습니다. 동반 질환 여부는 항문 진찰로 함께 확인하며 배변 습관 교정과 항문 치료를 개인별로 계획합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '설사 때 항문 자극도 치료하나요?',
    a: '잦은 배변은 항문 피부를 짓무르게 하고 통증·가려움을 유발할 수 있습니다. 원인 설사 조절과 국소 피부 관리를 함께 안내하며, 자극 정도는 사람마다 다릅니다. 원인은 개인마다 달라 맞춤 상담이 필요하고 필요 시 관련 질환도 확인합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

const related = [
  { href: '/anorectal/hemorrhoid', title: '치질', desc: '배변 습관 변화와 치핵 증상 연관' },
  { href: '/anorectal/fissure', title: '치열', desc: '딱딱한 변·힘주기와 악화 요인' },
  { href: '/endoscopy/colon', title: '대장내시경', desc: '증상이 반복될 때 검토하는 검사' },
]

const causes: { title: string; desc: string; tone: 'blue' | 'mint' | 'yellow' | 'peach' | 'coral' | 'lavender' }[] = [
  { title: '식이섬유 부족', desc: '채소·과일·통곡물 섭취가 부족하면 대변이 딱딱해질 수 있습니다.', tone: 'mint' },
  { title: '수분 부족', desc: '하루 수분 섭취가 부족하면 변비가 쉽게 생길 수 있습니다.', tone: 'blue' },
  { title: '운동 부족', desc: '신체 활동이 적으면 장 운동도 함께 느려질 수 있습니다.', tone: 'lavender' },
  { title: '배변 억제', desc: '바쁘다는 이유로 배변을 자꾸 참으면 직장 감각이 무뎌질 수 있습니다.', tone: 'peach' },
  { title: '약물 부작용', desc: '철분제·진통제·항우울제 등 일부 약물이 변비와 관련될 수 있습니다.', tone: 'coral' },
  { title: '전신 질환', desc: '갑상선 기능저하증·당뇨 등이 원인이 되는 경우도 있습니다.', tone: 'yellow' },
]

export default function ConstipationPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/colorectal-center-hero.webp"
          alt="장튼튼항외과의원 변비설사 진료 안내"
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
            <strong>변비·설사</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            변비 · 설사
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            배변 습관 변화가 반복될 때 원인을 확인하는 것이 중요합니다
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
                일주일에 배변 횟수가 3회 미만이거나, 배변 시 과도한 힘이 필요하거나, 잔변감이 자주 있는
                상태를 만성 변비라고 합니다. 단순한 불편함을 넘어 치핵·치열·대장 질환의 원인 중 하나로
                거론되며, 원인 파악이 치료의 중요한 부분이 됩니다.
              </p>
              <p>
                물처럼 무른 변이 잦거나, 하루 배변 횟수가 뚜렷하게 증가하고 급박감이 동반되는 상태는
                설사로 봅니다. 급성 설사와 수주 이상 이어지는 만성 설사는 접근이 달라질 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="mint" icon={Squares2X2Icon} title="구분" desc="만성 변비·급성/만성 설사" />
            <StatChip tone="peach" icon={ExclamationTriangleIcon} title="주의 신호" desc="혈변·체중 감소·야간 증상" />
            <StatChip tone="blue" icon={BeakerIcon} title="관리 방향" desc="식이·수분·배변 습관 교정" />
            <StatChip tone="coral" icon={CheckCircleIcon} title="치료 방향" desc="생활관리부터 정밀 검사까지" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '변비란 무엇인가요?' },
            { id: 's2', label: '설사란 무엇인가요?' },
            { id: 's3', label: '변비의 주요 원인' },
            { id: 's4', label: '변비·설사 치료 방법' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>변비란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              일주일에 배변 횟수가 3회 미만이거나, 배변 시 과도한 힘이 필요하거나, 잔변감이 자주 있는 상태를
              만성 변비라고 합니다.
            </p>
            <p>
              단순한 불편함을 넘어 치핵·치열·대장 질환의 주요 원인 중 하나로 거론됩니다. 정확한 원인 파악이
              치료의 핵심이 될 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>설사란 무엇인가요?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: '#c8ecdd' }}>
              <div className="px-3.5 py-2.5" style={{ background: '#e9f8f3' }}>
                <p className="text-[12px] font-semibold" style={{ color: '#175d4a' }}>변비</p>
                <p className="text-[14px] font-semibold text-[#0d1117] mt-0.5 break-keep">배변 횟수 감소·잔변감</p>
              </div>
              <div className="p-3.5">
                <p className="text-[12.5px] text-[#64748b] leading-[1.7]">
                  일주일에 3회 미만의 배변, 과도한 힘주기, 잔변감이 반복되는 상태를 말합니다.
                </p>
              </div>
            </div>
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: '#cfe3f6' }}>
              <div className="px-3.5 py-2.5" style={{ background: '#eaf3fd' }}>
                <p className="text-[12px] font-semibold" style={{ color: '#1e4a76' }}>설사</p>
                <p className="text-[14px] font-semibold text-[#0d1117] mt-0.5 break-keep">무른 변·배변 횟수 증가</p>
              </div>
              <div className="p-3.5">
                <p className="text-[12.5px] text-[#64748b] leading-[1.7]">
                  물처럼 무른 변이 잦거나 배변 횟수가 뚜렷하게 늘고 급박감이 동반되는 상태를 말합니다.
                </p>
              </div>
            </div>
          </div>
          <Prose>
            <p>
              급성 설사와 수주 이상 이어지는 만성 설사는 접근이 달라질 수 있습니다. 감염, 음식 불내성,
              과민성 장증후군, 염증성 장질환, 약물 부작용 등 원인이 다양합니다. 야간 설사·혈변·체중 감소가
              있으면 원인 질환 감별이 특히 중요합니다.
            </p>
            <p>
              잦은 설사는 항문 피부를 자극해 통증·가려움을 만들 수 있어, 장 증상과 항문 증상을 함께
              평가합니다. 치료 방침은 개인별 병력과 검사 결과에 따라 결정됩니다.
            </p>
          </Prose>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>변비의 주요 원인</SectionTitle>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            <IconCard tone="mint" icon={BeakerIcon} title={causes[0].title} desc={causes[0].desc} />
            <IconCard tone="blue" icon={BeakerIcon} title={causes[1].title} desc={causes[1].desc} />
            <IconCard tone="lavender" icon={HandRaisedIcon} title={causes[2].title} desc={causes[2].desc} />
            <IconCard tone="peach" icon={ClipboardDocumentCheckIcon} title={causes[3].title} desc={causes[3].desc} />
            <IconCard tone="coral" icon={ShieldExclamationIcon} title={causes[4].title} desc={causes[4].desc} />
            <IconCard tone="yellow" icon={ExclamationTriangleIcon} title={causes[5].title} desc={causes[5].desc} />
          </div>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>변비·설사 치료 방법</SectionTitle>
          <Banner tone="yellow" icon={ExclamationTriangleIcon}>
            혈변, 체중 감소, 야간 설사, 심한 피로 같은 신호가 있으면 정밀 검사가 필요할 수 있습니다.
          </Banner>
          <FlowSteps
            items={[
              { title: '생활습관 교정', desc: '식이섬유와 수분 섭취를 늘리고, 규칙적인 운동과 배변 습관 교정을 기본으로 안내합니다.' },
              { title: '약물 치료', desc: '팽창성·삼투성·자극성 완하제 등을 증상에 맞게 처방하는 방법입니다.' },
              { title: '바이오피드백', desc: '출구폐쇄형 변비에서 항문 근육 협응 훈련이 도움이 될 수 있습니다.' },
              { title: '정밀 검사', desc: '대장내시경, 대장통과시간 측정 등으로 기질적 원인을 확인하는 방법입니다.' },
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">배변 습관이 굳어지기 전에 확인해 보세요</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            만성 변비는 치핵·치열의 원인 중 하나로 거론됩니다.
            <br />
            장튼튼항외과의원에서 원인을 함께 확인해 볼 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
