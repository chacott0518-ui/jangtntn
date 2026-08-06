import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowsPointingInIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  FingerPrintIcon,
  HandRaisedIcon,
  ScissorsIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import {
  Banner,
  ChecklistPanel,
  ClinicHeroScrim,
  ClinicToc,
  FaqShell,
  FlowSteps,
  IconCard,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StageTimeline,
  StatChip,
} from '../../anorectal/_ui'

export const metadata: Metadata = {
  title: '내성발톱 | 장튼튼항외과의원',
  description: '김포 구래역 내성발톱 진료. 외래 시술과 회복 기간은 염증·감염 정도에 따라 달라질 수 있습니다.',
  keywords: '내성발톱, 내성발톱치료, 김포 내성발톱치료',
  alternates: { canonical: 'https://jtntn.co.kr/surgery/nail' },
  openGraph: {
    title: '내성발톱 | 장튼튼항외과의원',
    description: '김포 구래역 내성발톱 진료. 외래 시술과 회복 기간은 염증·감염 정도에 따라 달라질 수 있습니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '내성발톱은 외래에서 치료하나요?',
    a: '많은 경우 국소마취 후 외래 시술로 진행합니다. 다만 감염·부종 정도에 따라 일정이 달라질 수 있고, 회복 속도도 개인차가 있어 일률적으로 말하기 어렵습니다. 시술 후 보행과 신발 선택도 안내드리니 일상 계획을 함께 상의하시면 좋습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '시술 후 바로 걸을 수 있나요?',
    a: '대개 조심스럽게 보행은 가능하지만, 당일·수일은 편한 신발을 권합니다. 통증과 부종은 개인마다 다르며, 회복 기간은 염증 정도와 시술 범위에 따라 달라집니다. 무리한 운동이나 꽉 끼는 신발은 피하고, 안내받은 드레싱을 유지해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '조모세포 파괴술을 하면 재발하지 않나요?',
    a: '발톱 뿌리 일부를 처리해 재발 가능성을 낮추는 방법입니다. 다만 재발이 전혀 없다고 보장하기는 어렵고, 발톱 자르기 습관과 신발도 함께 관리하는 것이 중요합니다. 개인 발톱 모양에 따라 추가 관리가 필요할 수 있어 추적 진료를 권합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '초기에도 수술이 필요한가요?',
    a: '초기에는 솜·테이프 교정 등 보존적 방법을 먼저 시도하는 경우가 있습니다. 통증·화농이 심하면 절제가 필요할 수 있으며, 상태를 보고 단계적으로 안내합니다. 조기에 진료하면 치료 범위를 줄이는 데 도움이 될 수 있지만 개인차는 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '당뇨가 있어도 치료받을 수 있나요?',
    a: '당뇨 환자는 감염·상처 치유에 주의가 필요합니다. 혈당 조절 상태와 발가락 순환을 함께 확인하며, 개인 상태에 따라 치료 계획이 달라질 수 있습니다. 발 감각이 둔하거나 상처가 잘 안 아물면 더 세심한 관리가 필요하니 미리 알려 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '발톱은 어떻게 자르는 게 좋나요?',
    a: '둥글게 자르기보다 일자로 자르는 습관이 예방에 도움이 됩니다. 너무 짧게 자르면 살이 덮이기 쉽고, 이미 파고든 상태에서 깊게 깎으면 염증이 악화될 수 있습니다. 통증이 있으면 임의로 깊게 깎지 말고 진료를 받는 것이 안전합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
]

const related = [
  { href: '/surgery/wound', title: '상처 치료', desc: '찰과상·열상 등 함께 살펴야 하는 상처 처치 안내' },
  { href: '/surgery/burn', title: '화상 치료', desc: '화상 정도에 따른 단계별 처치' },
  { href: '/surgery', title: '기타외과질환', desc: '일상 외과 문제 상담·처치 안내' },
]

const progress: { badge: string; title: string; desc: string; tone: 'mint' | 'yellow' | 'peach' | 'coral' }[] = [
  {
    badge: '1',
    title: '발톱 가장자리 통증·압통',
    desc: '발톱 가장자리가 피부를 파고들기 시작하며 누르면 아픈 느낌이 먼저 나타날 수 있습니다.',
    tone: 'mint',
  },
  {
    badge: '2',
    title: '발가락 끝 발적·부종',
    desc: '피부가 붉어지고 부어오르며 신발이 스칠 때 불편감이 커질 수 있습니다.',
    tone: 'yellow',
  },
  {
    badge: '3',
    title: '걷거나 신발 신을 때 심한 통증',
    desc: '보행·신발 착용 시 통증이 두드러져 일상 생활에 지장을 줄 수 있는 단계입니다.',
    tone: 'peach',
  },
  {
    badge: '4',
    title: '화농(고름)·만성 육아종',
    desc: '염증이 진행되면 고름이 생기거나, 만성화되어 육아종이 형성될 수 있어 전문적인 처치가 필요할 수 있습니다.',
    tone: 'coral',
  },
]

export default function Page() {
  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image src="/images/general-surgery-center.webp" alt="장튼튼항외과의원 내향성발톱 진료 안내" fill className="object-cover object-[54%_38%] lg:object-[50%_36%]" sizes="100vw" priority />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:underline">홈</Link>
            <span>/</span>
            <Link href="/surgery" className="hover:underline">기타외과질환</Link>
            <span>/</span>
            <strong>내성발톱</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">내성발톱</h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">발톱이 살을 파고드는 통증과 염증의 근본 치료</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-7 md:pb-10 space-y-7 md:space-y-8">
        {/* 핵심요약 */}
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                내성발톱(내향성 발톱)은 발톱 가장자리가 주변 피부를 파고들어 통증·염증·화농이 발생하는 질환입니다. 주로
                엄지발가락에 생기며, 잘못된 발톱 자르기(둥글게), 꽉 끼는 신발, 외상, 유전적 발톱 모양이 원인으로
                이야기됩니다.
              </p>
              <p>
                초기에는 보존적 교정으로 호전을 기대할 수 있는 경우가 있지만, 염증과 화농이 진행되면 발톱 일부 절제나
                조모세포 파괴술 같은 시술을 상담하게 될 수 있습니다.
              </p>
              <p>
                당뇨 환자는 감염·상처 치유에 특히 주의가 필요합니다. 김포·구래동에서 내성발톱 진료를 고려하신다면,
                장튼튼항외과의원에서 상태를 확인한 뒤 적합한 치료 방향을 상담받을 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="blue" icon={ExclamationTriangleIcon} title="대표 증상" desc="가장자리 통증·발적·화농" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="주요 원인" desc="발톱 관리·신발·외상·유전" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="치료 방향" desc="보존적 교정부터 시술까지" />
            <StatChip tone="peach" icon={CalendarDaysIcon} title="진료 시기" desc="통증·화농이 반복될 때" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '내성발톱이란 무엇인가요?' },
            { id: 's2', label: '내성발톱이 생기는 원인' },
            { id: 's3', label: '증상은 어떻게 진행되나요?' },
            { id: 's4', label: '진찰과 검사 방법' },
            { id: 's5', label: '보존적 치료와 생활관리' },
            { id: 's6', label: '시술적 치료를 고려하는 경우' },
            { id: 's7', label: '시술 후 관리' },
            { id: 's8', label: '당뇨 환자와 병원 방문이 필요한 경우' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>내성발톱이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              내성발톱(내향성 발톱)은 발톱 가장자리가 주변 피부를 파고들어 통증·염증·화농이 발생하는 질환입니다. 주로
              엄지발가락에 생기는 경우가 많지만 다른 발가락에도 나타날 수 있습니다.
            </p>
            <p>
              가벼운 압통으로 시작해도 방치하면 염증이 진행되어 화농이나 육아종으로 이어질 수 있습니다. 통증이 있으면
              스스로 깊게 깎기보다 상태를 확인하는 편이 안전합니다.
            </p>
          </Prose>
          <Banner tone="coral" icon={ExclamationTriangleIcon}>
            당뇨 환자는 감염·상처 치유에 주의가 필요해 내성발톱도 더 세심하게 관리해야 할 수 있습니다.
          </Banner>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>내성발톱이 생기는 원인</SectionTitle>
          <Prose>
            <p>
              내성발톱은 한 가지 원인만으로 생기기보다 발톱 관리 습관과 신발, 외상, 발톱 모양이 겹쳐 나타나는 경우가
              많습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            <IconCard tone="blue" icon={ScissorsIcon} title="잘못된 발톱 자르기" desc="둥글게 자르는 습관은 가장자리가 살을 파고들기 쉽게 만들 수 있습니다." />
            <IconCard tone="yellow" icon={ArrowsPointingInIcon} title="꽉 끼는 신발" desc="신발이 발가락을 압박하면 발톱과 피부 사이 자극이 반복될 수 있습니다." />
            <IconCard tone="peach" icon={HandRaisedIcon} title="외상" desc="발가락을 부딪히거나 다치는 경우 발톱 모양과 염증에 영향을 줄 수 있습니다." />
            <IconCard tone="lavender" icon={FingerPrintIcon} title="유전적 발톱 모양" desc="발톱이 휘거나 넓은 모양은 체질적으로 파고들기 쉬울 수 있습니다." />
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>증상은 어떻게 진행되나요?</SectionTitle>
          <Prose>
            <p>
              내성발톱 증상은 가벼운 압통에서 시작해 염증이 진행되면 화농·육아종으로 이어질 수 있습니다. 아래는 흔히
              설명되는 진행 흐름이며, 실제 경과는 개인마다 다를 수 있습니다.
            </p>
          </Prose>
          <StageTimeline items={progress} />
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>진찰과 검사 방법</SectionTitle>
          <FlowSteps
            tone="blue"
            items={[
              { title: '증상 확인', desc: '통증 기간, 화농 여부, 신발·발톱 관리 습관을 확인합니다.' },
              { title: '발가락 진찰', desc: '파고든 위치와 염증 정도를 살펴봅니다.' },
              { title: '기저질환 확인', desc: '당뇨 등 감염·치유에 영향을 줄 수 있는 상태를 확인합니다.' },
              { title: '치료 방향 상담', desc: '보존적 교정과 시술 중 상태에 맞는 방법을 안내합니다.' },
            ]}
          />
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>보존적 치료와 생활관리</SectionTitle>
          <Prose>
            <p>
              초기 내성발톱에는 솜·테이프로 발톱을 올바른 방향으로 유도하는 보존적 교정을 먼저 시도하는 경우가 있습니다.
              조기에 진료하면 치료 범위를 줄이는 데 도움이 될 수 있지만 개인차는 있습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              icon={CheckCircleIcon}
              title="도움이 될 수 있는 습관"
              items={[
                '발톱은 둥글게보다 일자로 자르기',
                '너무 짧게 깎지 않고 가장자리를 남기기',
                '발가락에 여유가 있는 신발을 선택하기',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="주의가 필요한 습관"
              items={[
                '이미 파고든 상태에서 스스로 깊게 깎기',
                '꽉 끼는 신발을 장시간 신기',
                '통증을 참고 방치하며 관리하지 않기',
              ]}
            />
          </div>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>시술적 치료를 고려하는 경우</SectionTitle>
          <Banner tone="peach">통증·화농이 심하면 절제가 필요할 수 있으며, 상태를 보고 단계적으로 안내합니다.</Banner>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <IconCard tone="blue" icon={ShieldCheckIcon} title="발톱 일부 절제" desc="국소마취 후 파고드는 발톱 가장자리를 절제하여 통증을 줄이는 방법입니다. 외래 시술로 진행하는 경우가 많으며 회복은 개인차가 있습니다." />
            <IconCard tone="lavender" icon={FingerPrintIcon} title="조모세포 파괴술" desc="페놀 등으로 발톱 뿌리 일부를 처리해 재발 가능성을 낮추는 방법입니다. 재발이 전혀 없다고 단정하기는 어렵습니다." />
          </div>
          <Prose>
            <p>
              어떤 방법이 적합한지는 염증 정도, 화농 유무, 이전 치료 이력에 따라 달라집니다. 발톱 자르기 습관과 신발도
              함께 관리해야 재발 가능성을 낮추는 데 도움이 될 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>시술 후 관리</SectionTitle>
          <Prose>
            <p>
              시술 후 대개 조심스럽게 보행은 가능하지만, 당일과 수일간은 편한 신발을 권합니다. 통증과 부종은 개인마다
              다르며, 회복 기간은 염증 정도와 시술 범위에 따라 달라집니다.
            </p>
          </Prose>
          <ChecklistPanel
            tone="mint"
            icon={CheckCircleIcon}
            title="회복 기간에 도움이 될 수 있는 관리"
            items={[
              '무리한 운동과 꽉 끼는 신발을 피하기',
              '안내받은 드레싱을 유지하고 임의로 제거하지 않기',
              '통증·부종이 심해지면 예정보다 빨리 재방문하기',
            ]}
          />
        </section>

        <section id="s8" className="scroll-mt-20 space-y-3">
          <SectionTitle n={8}>당뇨 환자와 병원 방문이 필요한 경우</SectionTitle>
          <Prose>
            <p>
              당뇨 환자는 혈당 조절 상태와 발가락 순환을 함께 확인하며, 개인 상태에 따라 치료 계획이 달라질 수 있습니다.
              발 감각이 둔하거나 상처가 잘 안 아물면 더 세심한 관리가 필요하니 미리 알려 주시기 바랍니다.
            </p>
            <p>
              통증이 반복되거나 화농·발적이 심해지면 자가 관리보다 진료를 권합니다. 방문 일정은{' '}
              <Link href="/about/info" className="text-primary font-semibold underline-offset-2 hover:underline">진료안내</Link>
              를 참고해 주세요.
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">발톱은 일자로 자르는 습관이 예방에 도움이 됩니다</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            조기에 상태를 확인하면 치료 범위를 줄이는 데 도움이 될 수 있습니다.
            <br />
            장튼튼항외과의원 외과전문의가 직접 진료합니다.
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
