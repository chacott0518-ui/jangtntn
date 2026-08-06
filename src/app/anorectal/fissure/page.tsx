import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BoltIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import {
  Banner,
  ClinicHeroScrim,
  ClinicToc,
  FaqShell,
  FlowSteps,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StatChip,
} from '../_ui'

export const metadata: Metadata = {
  title: '치열 | 장튼튼항외과의원',
  description:
    '치열의 급성·만성 증상과 좌욕·약물·수술 치료 안내. 배변 시 통증·출혈이 있을 때 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
  keywords: '치열, 배변통증, 배변출혈, 치열치료, 치열수술, 김포 치열, 구래동 치열',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal/fissure' },
  openGraph: {
    title: '치열 | 장튼튼항외과의원',
    description:
      '치열의 급성·만성 증상과 좌욕·약물·수술 치료 안내. 배변 시 통증·출혈이 있을 때 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
    url: 'https://jtntn.co.kr/anorectal/fissure',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '치열과 치핵은 어떻게 다른가요?',
    a: '치열은 항문 입구 점막이 찢어진 상태로 칼로 베는 듯한 통증이 특징입니다. 치핵은 혈관 조직의 돌출·출혈이 주된 증상으로, 통증 양상이 다를 수 있습니다. 둘은 함께 나타나기도 해 증상만으로 단정하기 어렵고 항문 진찰로 감별하는 것이 필요합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '급성 치열은 수술 없이 나을 수 있나요?',
    a: '많은 급성 치열은 좌욕·약물·배변 습관 교정으로 호전을 기대할 수 있습니다. 다만 치유 속도와 통증 정도는 개인마다 다르며, 변비가 계속되면 잘 낫지 않을 수 있습니다. 증상이 오래가거나 반복되면 만성화 여부를 진찰에서 확인해야 합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '배변 후 통증이 오래가면 치열인가요?',
    a: '배변 직후부터 수십 분 이상 작열감이 이어지면 치열을 의심할 수 있습니다. 비슷한 통증은 치핵 혈전이나 다른 항문 질환에서도 나타날 수 있습니다. 정확한 원인은 직접 진찰로 확인하는 것이 안전하며 필요 시 변비 관리도 함께 상의합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '만성 치열은 꼭 수술이 필요한가요?',
    a: '8주 이상 지속되거나 감시 치핵·섬유화가 동반되면 수술을 검토하는 경우가 많습니다. 보톡스·연고 등 비수술 치료도 상태에 따라 시도할 수 있습니다. 치료 선택은 병변 깊이와 개인 반응을 보고 결정하므로 일률적인 기준만으로 정하지 않습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '변비가 치열을 악화시키나요?',
    a: '딱딱한 변과 과도한 힘주기는 치열 발생·악화의 흔한 요인입니다. 반대로 치열 통증 때문에 배변을 참으면 변비가 더 심해지는 악순환이 생길 수 있습니다. 변비 관리와 항문 치료는 함께 상담하는 것이 좋으며 필요한 검사는 개인별로 달라집니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

const related = [
  { href: '/anorectal/hemorrhoid', title: '치질', desc: '출혈·돌출·불편감이 있을 때 확인' },
  { href: '/anorectal/constipation', title: '변비·설사', desc: '딱딱한 변·힘주기와 치열 악화' },
  { href: '/anorectal/levator', title: '항문거근증후군', desc: '배변과 무관한 깊은 통증 감별' },
]

export default function Page() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/colorectal-center-hero.webp"
          alt="장튼튼항외과의원 치열 진료 안내"
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
            <strong>치열</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            치열
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            항문 점막의 찢어짐으로 배변 시 극심한 통증이 나타날 수 있는 상태
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
                치열은 항문 입구의 피부와 점막이 찢어진 상태로, 배변 시 마치 칼로 베이는 듯한 극심한 통증과
                선홍색 출혈이 특징적으로 나타날 수 있습니다. 배변 후에도 수십 분에서 수 시간 동안 작열감이
                이어지는 경우가 많습니다.
              </p>
              <p>
                통증 때문에 배변을 참게 되고, 그로 인해 변비가 심해지는 악순환이 반복될 수 있습니다. 20~40대
                여성에서 비교적 흔하게 나타나며, 항문 후방 정중선에서 발생하는 경우가 약 90%로 알려져 있습니다.
              </p>
              <p>
                급성·만성 여부에 따라 좌욕·약물 등 보존적 치료부터 수술적 치료까지 상담 방향이 달라질 수
                있습니다. 배변 통증이 반복된다면 김포·구래동 장튼튼항외과의원에서 상태를 확인해 볼 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="coral" icon={BoltIcon} title="대표 증상" desc="배변 시 날카로운 통증·출혈" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="구분" desc="급성 치열·만성 치열" />
            <StatChip tone="yellow" icon={ExclamationTriangleIcon} title="악화 요인" desc="변비·과도한 힘주기" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="치료 방향" desc="좌욕·약물부터 수술까지" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '치열이란 무엇인가요?' },
            { id: 's2', label: '급성 치열과 만성 치열의 차이' },
            { id: 's3', label: '치열이 반복되는 이유' },
            { id: 's4', label: '치열 진찰 방법' },
            { id: 's5', label: '치열 치료 방법' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>치열이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              치열은 항문 입구의 피부와 점막이 찢어진 상태입니다. 배변 시 마치 칼로 베이는 듯한 극심한 통증과
              선홍색 출혈이 특징이며, 배변 후에도 수십 분에서 수 시간 동안 작열감이 지속될 수 있습니다.
            </p>
            <p>
              통증 때문에 배변을 참게 되고, 이로 인해 변비가 심해지는 악순환이 반복되는 경우가 있습니다.
              20~40대 여성에서 비교적 흔한 것으로 알려져 있으며, 항문 후방 정중선에서 발생하는 경우가 약
              90%에 이릅니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>급성 치열과 만성 치열의 차이</SectionTitle>
          <Prose>
            <p>
              치열은 지속 기간과 조직 변화에 따라 급성과 만성으로 구분해 설명합니다. 구분에 따라 치료 방향도
              달라질 수 있습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: '#cfe3f6' }}>
              <div className="px-3.5 py-2.5" style={{ background: '#eaf3fd' }}>
                <p className="text-[12px] font-semibold" style={{ color: '#1e4a76' }}>급성 치열</p>
                <p className="text-[14px] font-semibold text-[#0d1117] mt-0.5 break-keep">최근 발생한 표재성 열상</p>
              </div>
              <div className="p-3.5">
                <ul className="space-y-1.5 text-[12.5px] text-[#374151] leading-[1.7]">
                  <li>최근 발생한 표재성 열상 형태로 나타나는 경우가 많습니다.</li>
                  <li>약물과 좌욕을 함께 진행하면 6~8주 내 치유를 기대해볼 수 있습니다.</li>
                  <li>조기에 치료를 시작하는 것이 만성화 예방에 도움이 될 수 있습니다.</li>
                </ul>
              </div>
            </div>
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: '#f4d2d2' }}>
              <div className="px-3.5 py-2.5" style={{ background: '#fdeeee' }}>
                <p className="text-[12px] font-semibold" style={{ color: '#8a3a3a' }}>만성 치열</p>
                <p className="text-[14px] font-semibold text-[#0d1117] mt-0.5 break-keep">8주 이상 지속·섬유화 동반</p>
              </div>
              <div className="p-3.5">
                <ul className="space-y-1.5 text-[12.5px] text-[#374151] leading-[1.7]">
                  <li>증상이 8주 이상 이어지는 경우를 만성 치열로 설명합니다.</li>
                  <li>섬유화 조직(감시 치핵)이 함께 형성될 수 있습니다.</li>
                  <li>상태에 따라 수술적 치료를 검토하게 되는 경우가 많습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>치열이 반복되는 이유</SectionTitle>
          <Prose>
            <p>
              배변 시 통증이 심하다 보니 다음 배변을 무의식적으로 참게 되고, 그 사이 변이 더 딱딱해지면서 다시
              점막이 찢어지는 악순환이 이어질 수 있습니다. 변비 관리가 함께 이뤄지지 않으면 치유가 늦어질 수
              있습니다.
            </p>
          </Prose>
          <Banner tone="yellow" icon={ExclamationTriangleIcon}>
            배변을 참을수록 변이 굳어져 통증이 반복될 수 있습니다. 변비 관리를 함께 진행하는 것이 회복에 도움이
            될 수 있습니다.
          </Banner>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>치열 진찰 방법</SectionTitle>
          <Prose>
            <p>
              진료에서는 통증의 시작 시점, 배변 습관, 출혈 양상을 먼저 확인합니다. 필요한 경우 항문 진찰로
              열상의 위치와 급성·만성 여부를 평가하며, 다른 항문 질환과의 감별도 함께 살펴봅니다.
            </p>
          </Prose>
          <FlowSteps
            cols={3}
            tone="blue"
            items={[
              { title: '증상·배변 확인', desc: '통증 시작 시기와 배변 습관을 확인합니다.' },
              { title: '항문 진찰', desc: '열상 위치와 급성·만성 여부를 평가합니다.' },
              { title: '치료 상담', desc: '상태에 맞는 치료 방향을 안내합니다.' },
            ]}
          />
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>치열 치료 방법</SectionTitle>
          <FlowSteps
            items={[
              { title: '좌욕 치료', desc: '하루 3회 이상 미온수(38~40℃) 좌욕으로 괄약근을 이완하고 혈류를 개선하는 방법입니다.' },
              { title: '약물 도포', desc: '칼슘 통로 차단제(딜티아젬), 글리세린 삼질산염 연고를 도포해 내괄약근 압력을 낮추는 방법입니다.' },
              { title: '보톡스 주사', desc: '내괄약근에 직접 보톡스를 주입해 일시적으로 이완시키는 치료법입니다.' },
              { title: '내괄약근 측방 절개술', desc: '만성 치열에서 자주 시행하는 수술로, 내괄약근 일부를 절개하며 상태에 따라 당일 퇴원을 검토할 수 있습니다.' },
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">치열, 혼자 참지 마세요</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            배변이 두려울 정도의 통증이 있다면 진찰을 받아보는 것이 좋습니다.
            <br />
            초기 치열은 비교적 간단한 치료로 호전을 기대할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
