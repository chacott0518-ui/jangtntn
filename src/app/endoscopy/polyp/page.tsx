import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircleIcon,
  ClockIcon,
  DocumentMagnifyingGlassIcon,
  ExclamationTriangleIcon,
  FireIcon,
  MagnifyingGlassIcon,
  ScissorsIcon,
  ShieldCheckIcon,
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
  StatChip,
} from '../../anorectal/_ui'

export const metadata: Metadata = {
  title: '용종 절제술 | 장튼튼항외과의원',
  description: '김포 구래역 대장 용종 절제 안내. 크기·위치에 따라 당일 제거가 어려울 수 있으며, 절제 후 주의사항을 설명합니다.',
  keywords: '대장용종, 대장용종제거, 용종절제술, 김포 대장용종제거, 구래동 대장용종제거',
  alternates: { canonical: 'https://jtntn.co.kr/endoscopy/polyp' },
  openGraph: {
    title: '용종 절제술 | 장튼튼항외과의원',
    description: '김포 구래역 대장 용종 절제 안내. 크기·위치에 따라 당일 제거가 어려울 수 있으며, 절제 후 주의사항을 설명합니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '대장내시경 중 용종을 바로 제거할 수 있나요?',
    a: '크기·위치·형태와 출혈·천공 위험을 보고 당일 절제 여부를 판단합니다. 큰 병변이나 고위험 위치, 장 정결이 부족한 경우에는 당일 제거가 어려울 수 있습니다. 필요하면 추가 검사나 일정을 안내드리며, 개인 상태에 따라 계획이 달라집니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '어떤 경우에 당일 절제가 어렵나요?',
    a: '너무 크거나 납작한 병변, 출혈 위험이 높은 경우, 장 정결이 부족한 경우 등이 해당될 수 있습니다. 항혈전제 복용 중이면 일정을 조정하기도 하며, 안전이 우선입니다. 소견을 보고 결정하고, 필요 시 추적 검사 일정을 함께 안내드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '용종 절제 후 식사는 어떻게 하나요?',
    a: '당일은 죽·미음 등 부드러운 유동식부터 시작하는 경우가 많습니다. 이후 며칠간 자극적 음식과 음주를 피하도록 안내하며, 절제 범위에 따라 식이 제한 기간이 달라질 수 있습니다. 복통·혈변이 있으면 식사보다 먼저 연락해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '절제 후 운동은 언제부터 가능한가요?',
    a: '보통 1~2주간 격렬한 운동은 피하는 것이 좋습니다. 출혈 위험을 줄이기 위한 안내이며, 가벼운 일상 활동은 상태에 따라 가능할 수 있습니다. 개인 회복 속도와 절제 범위에 따라 시기가 달라지므로 진료 안내를 따라 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '조직 검사 결과는 언제 나오나요?',
    a: '일반적으로 1~2주 후 결과를 확인합니다. 결과에 따라 추적 대장내시경 시기를 안내드리며, 고위험 선종이면 더 짧은 간격의 검사가 필요할 수 있습니다. 결과 확인 일정이 궁금하시면 내원 시 함께 안내해 드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '용종 절제 후 어떤 증상이 있으면 바로 와야 하나요?',
    a: '심한 복통, 지속되는 혈변, 발열 등이 있으면 즉시 내원해야 합니다. 드물지만 출혈이나 천공 관련 합병증이 있을 수 있어 빠른 확인이 중요합니다. 이상 증상이 있으면 지체하지 말고 연락해 주시고, 복용 약 변경도 임의로 하지 마세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
]

const related = [
  { href: '/endoscopy/colon', title: '대장내시경', desc: '대장·직장 관찰과 조기 확인 안내' },
  { href: '/endoscopy/gastro', title: '위내시경', desc: '식도·위·십이지장 관찰과 조기 확인' },
  { href: '/endoscopy', title: '내시경센터', desc: '위·대장 내시경과 용종 절제 안내' },
  { href: '/about/aftercare', title: '수술후주의사항', desc: '시술·수술 후 회복과 생활관리' },
]

const methods: { name: string; size: string; desc: string; tone: 'mint' | 'yellow' | 'coral' }[] = [
  {
    name: '차가운 용종 절제술 (Cold snare)',
    size: '5~10mm',
    desc: '전기 소작 없이 올가미로 잘라내는 방법입니다. 출혈·천공 위험이 상대적으로 낮은 편으로 설명됩니다.',
    tone: 'mint',
  },
  {
    name: '내시경 점막 절제술 (EMR)',
    size: '10~20mm',
    desc: '점막 아래 식염수를 주입한 뒤 올가미로 절제하는 방법입니다. 납작한 중간 크기 용종에 고려할 수 있습니다.',
    tone: 'yellow',
  },
  {
    name: '내시경 점막하 박리술 (ESD)',
    size: '20mm 이상',
    desc: '점막하층을 박리하여 일괄 절제하는 방법입니다. 크고 납작한 병변에 사용하는 경우가 있습니다.',
    tone: 'coral',
  },
]

const afterCare = [
  '당일 죽·미음 등 유동식, 이틀간 부드러운 음식',
  '1~2주간 격렬한 운동·음주·자극적 음식 금지',
  '복통·혈변·발열 시 즉시 내원',
  '조직 검사 결과는 1~2주 후 확인',
  '고위험 선종의 경우 1년 후 추적 대장내시경이 필요할 수 있음',
]

export default function PolypPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image src="/images/endoscopy-center.webp" alt="장튼튼항외과의원 대장용종제거술 검사 안내" fill className="object-cover object-[68%_42%] lg:object-[72%_40%]" sizes="100vw" priority />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:underline">홈</Link>
            <span>/</span>
            <Link href="/endoscopy" className="hover:underline">내시경센터</Link>
            <span>/</span>
            <strong>용종 절제술</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            용종 절제술
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            내시경으로 안전하게 · 대장암을 예방합니다
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
                용종(폴립)은 대장 점막이 혹처럼 돌출된 병변입니다. 일부 선종성 용종은 수년에 걸쳐 암으로
                진행될 수 있어, 대장내시경 중 발견되면 상태에 따라 절제를 고려합니다.
              </p>
              <p>
                모든 용종이 당일 제거되는 것은 아니며, 크기·위치·출혈 위험에 따라 일정이 달라질 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="lavender" icon={MagnifyingGlassIcon} title="용종이란" desc="대장 점막의 돌출 병변" />
            <StatChip tone="yellow" icon={ExclamationTriangleIcon} title="선종성 용종" desc="장기간 암 진행 가능성" />
            <StatChip tone="blue" icon={ScissorsIcon} title="절제 방법" desc="크기·형태에 따라 3가지" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="절제 후 관리" desc="식이·활동 제한 안내" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '용종이란 무엇인가요?' },
            { id: 's2', label: '선종성 용종과 대장암의 관계' },
            { id: 's3', label: '절제 방법' },
            { id: 's4', label: '절제 전 준비' },
            { id: 's5', label: '당일 절제가 어려운 경우' },
            { id: 's6', label: '절제 후 주의사항' },
            { id: 's7', label: '조직 검사 결과와 추적 검사' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>용종이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              용종(폴립)은 대장 점막이 혹처럼 돌출된 병변입니다. 일부 선종성 용종은 수년에 걸쳐 암으로 진행될
              수 있어, 대장내시경 중 발견되면 상태에 따라 절제를 고려합니다. 모든 용종이 당일 제거되는 것은
              아니며, 크기·위치·출혈 위험에 따라 일정이 달라질 수 있습니다.
            </p>
          </Prose>
          <FlowSteps
            cols={3}
            tone="blue"
            items={[
              { title: '용종 발견', desc: '대장내시경 중 점막 돌출 병변을 확인합니다.' },
              { title: '상태 평가 후 절제', desc: '크기·형태·출혈 위험을 보고 제거 여부를 결정합니다.' },
              { title: '대장암 예방', desc: '선종성 용종을 미리 제거하면 진행을 막는 데 도움이 될 수 있습니다.' },
            ]}
          />
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>선종성 용종과 대장암의 관계</SectionTitle>
          <Prose>
            <p>
              대장 용종은 크게 종양성(선종성)과 비종양성으로 나뉩니다. 이 중 선종성 용종의 일부가 시간이
              지나며 암으로 진행될 수 있는 것으로 알려져 있어, 발견 시점의 크기와 조직 형태를 확인하는 것이
              중요합니다.
            </p>
            <p>
              모든 용종이 암으로 진행되는 것은 아니며, 진행 여부와 속도는 용종의 종류·크기·개수에 따라 다를
              수 있습니다. 그렇더라도 발견된 용종은 조기에 확인하고 필요하면 절제하는 것이 예방에 도움이 될
              수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>절제 방법</SectionTitle>
          <Prose>
            <p>
              절제 방법은 용종의 크기와 형태에 따라 달라집니다. 아래는 대표적인 세 가지 방법과 일반적으로
              적용되는 크기 범위입니다.
            </p>
          </Prose>
          <div className="space-y-2.5">
            {methods.map((t) => (
              <div key={t.name} className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: pastel[t.tone].border }}>
                <div className="px-3.5 py-2.5 flex flex-wrap items-center gap-2" style={{ background: pastel[t.tone].bg }}>
                  <p className="text-[14px] font-semibold" style={{ color: pastel[t.tone].text }}>{t.name}</p>
                  <span
                    className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/70"
                    style={{ color: pastel[t.tone].text }}
                  >
                    {t.size}
                  </span>
                </div>
                <div className="p-3.5">
                  <p className="text-[12.5px] text-[#64748b] leading-[1.7]">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>절제 전 준비</SectionTitle>
          <Prose>
            <p>
              용종 절제술은 별도의 검사가 아니라{' '}
              <Link href="/endoscopy/colon" className="text-primary font-semibold underline-offset-2 hover:underline">
                대장내시경
              </Link>{' '}
              중 용종이 발견되었을 때 함께 시행하는 처치입니다. 따라서 검사 전 준비도 대장내시경과 동일하게
              장 정결제 복용과 식이 조절이 필요하며, 항혈전제 등 출혈 위험을 높일 수 있는 약은 미리 조정
              여부를 상담해야 합니다.
            </p>
          </Prose>
          <ChecklistPanel
            tone="yellow"
            icon={ExclamationTriangleIcon}
            title="절제 전 확인할 사항"
            items={[
              '대장내시경과 동일하게 장 정결제를 안내받은 대로 정확히 복용하기',
              '항혈전제·항응고제 복용 여부를 예약 시 미리 알리기',
              '절제가 예상되면 당일 보호자 동반과 여유 있는 일정 확보하기',
            ]}
          />
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>당일 절제가 어려운 경우</SectionTitle>
          <Prose>
            <p>
              크기·위치·형태와 출혈·천공 위험 등을 보고 당일 절제 여부를 판단합니다. 너무 크거나 납작한
              병변, 출혈 위험이 높은 경우, 장 정결이 부족한 경우 등에는 당일 제거가 어려울 수 있습니다.
            </p>
            <p>
              항혈전제를 복용 중이라면 안전을 위해 일정을 조정하기도 합니다. 당일 절제가 어려운 경우 소견을
              보고 추가 검사나 재검사 일정을 안내드리며, 개인 상태에 따라 계획이 달라질 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>절제 후 주의사항</SectionTitle>
          <ChecklistPanel
            tone="mint"
            icon={CheckCircleIcon}
            title="회복 중 지켜야 할 사항"
            items={afterCare}
          />
          <Banner tone="coral" icon={ExclamationTriangleIcon}>
            심한 복통, 지속되는 혈변, 발열 등이 있으면 즉시 내원해야 합니다. 드물지만 출혈이나 천공 관련
            합병증이 있을 수 있어 빠른 확인이 중요하며, 복용 약 변경도 임의로 하지 마세요.
          </Banner>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>조직 검사 결과와 추적 검사</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <IconCard tone="blue" icon={DocumentMagnifyingGlassIcon} title="결과 확인" desc="일반적으로 1~2주 후 조직 검사 결과를 확인합니다." />
            <IconCard tone="peach" icon={ClockIcon} title="추적 간격" desc="고위험 선종이면 더 짧은 간격의 추적 검사가 필요할 수 있습니다." />
            <IconCard tone="mint" icon={ShieldCheckIcon} title="일반 추적" desc="위험도가 낮으면 상대적으로 긴 간격으로 추적 관찰할 수 있습니다." />
            <IconCard tone="yellow" icon={FireIcon} title="생활관리" desc="결과와 무관하게 식습관·배변 습관 관리는 꾸준히 이어가는 것이 도움이 될 수 있습니다." />
          </div>
          <Prose>
            <p>
              결과에 따라 추적 대장내시경 시기를 안내드리며, 결과 확인 일정이 궁금하면 내원 시 함께 안내받을
              수 있습니다.
            </p>
          </Prose>
        </section>

        <MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/endoscopy/polyp/colon-polyp-01.webp', caption: '대장용종제거술 01' },
            { src: '/images/medical/endoscopy/polyp/colon-polyp-02.webp', caption: '대장용종제거술 02' },
            { src: '/images/medical/endoscopy/polyp/colon-polyp-03.webp', caption: '대장용종제거술 03' },
            { src: '/images/medical/endoscopy/polyp/colon-polyp-04.webp', caption: '대장용종제거술 04' },
          ]}
        />

        <OfficialSource
          sources={['보건복지부', '대한의학회']}
          note="용종 절제술 안내는 일반적인 건강정보이며, 개인의 진단·치료 방침은 진료 결과에 따릅니다."
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">용종 절제 후 관리가 궁금하신가요</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            절제 범위와 개인 상태에 따라 회복 기간과 주의사항이 달라질 수 있습니다.
            <br />
            수술후주의사항에서 회복 중 생활관리를 확인해 보세요.
          </p>
          <Link
            href="/about/aftercare"
            className="inline-flex items-center justify-center mt-4 min-h-[44px] px-5 rounded-xl bg-white text-primary text-[13px] font-bold hover:bg-white/95 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            수술후주의사항 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
