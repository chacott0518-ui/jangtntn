import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BeakerIcon,
  BoltIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  EyeDropperIcon,
  FaceFrownIcon,
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
  StatChip,
} from '../../anorectal/_ui'

export const metadata: Metadata = {
  title: '상처 치료 | 장튼튼항외과의원',
  description: '김포 구래역 상처 처치·봉합 안내. 깊은 열상·오염 상처·물린 상처는 빠른 진료가 필요할 수 있습니다.',
  keywords: '상처봉합, 외상처치, 외래수술, 김포 상처봉합',
  alternates: { canonical: 'https://jtntn.co.kr/surgery/wound' },
  openGraph: {
    title: '상처 치료 | 장튼튼항외과의원',
    description: '김포 구래역 상처 처치·봉합 안내. 깊은 열상·오염 상처·물린 상처는 빠른 진료가 필요할 수 있습니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '어떤 상처는 바로 병원에 가야 하나요?',
    a: '출혈이 멈추지 않거나, 깊고, 이물질이 들어 있거나, 동물·사람에게 물린 상처는 빨리 진료가 필요합니다. 감각이 없거나 관절 주변이면 더 주의해야 하며, 애매해도 지체하지 말고 확인하세요. 가정 처치만으로 미루면 감염 위험이 커질 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '상처는 몇 시간 안에 봉합해야 하나요?',
    a: '일반적으로 이른 시간 내 처치가 감염 예방에 도움이 됩니다. 오염 정도와 부위에 따라 봉합 가능 시간이 달라질 수 있으며, 늦었더라도 세척·배농이 필요할 수 있습니다. 시간이 지났어도 내원해 주시면 상태에 맞는 처치를 안내드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '봉합 후 흉터가 남지 않나요?',
    a: '올바른 처치가 흉터를 줄이는 데 도움이 될 수 있습니다. 부위·깊이·감염 여부와 개인 회복에 따라 흔적이 남을 수 있으며, 흉터가 전혀 없다고 단정하기는 어렵습니다. 실밥 제거와 상처 관리 안내를 따라 주시면 회복에 도움이 됩니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '파상풍 주사가 필요한가요?',
    a: '상처 오염도와 최근 파상풍 접종력을 보고 필요 여부를 판단합니다. 녹슨 물건·흙이 묻은 상처는 특히 확인이 필요하며, 접종 기록이 불확실하면 진료에서 상의합니다. 개인 접종력에 따라 안내가 달라질 수 있어 미리 알고 계시면 도움이 됩니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '드레싱은 집에서 어떻게 관리하나요?',
    a: '안내받은 간격으로 소독·드레싱을 유지하는 것이 중요합니다. 고름·발열·심한 발적이 있으면 바로 내원해야 하며, 임의로 연고를 바꾸거나 상처를 억지로 건조시키지 마세요. 샤워 가능 여부와 활동 제한도 상처마다 다를 수 있어 안내를 확인해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '화상과 상처 치료는 다른가요?',
    a: '열상·자상과 화상은 손상 기전이 달라 처치가 다를 수 있습니다. 다만 세척·감염 예방·드레싱 원칙은 겹치며, 복합 손상이면 함께 평가합니다. 화상 관련 안내도 참고할 수 있고, 구체적인 방법은 내원 후 상태에 맞게 설명드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
]

const related = [
  { href: '/surgery/burn', title: '화상 치료', desc: '화상 정도에 따른 단계별 처치' },
  { href: '/surgery/nail', title: '내성발톱', desc: '발톱이 파고들어 생기는 통증·염증' },
  { href: '/surgery', title: '기타외과질환', desc: '일상 외과 문제 상담·처치 안내' },
]

export default function Page() {
  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image src="/images/general-surgery-center.webp" alt="장튼튼항외과의원 상처봉합 진료 안내" fill className="object-cover object-[54%_38%] lg:object-[50%_36%]" sizes="100vw" priority />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:underline">홈</Link>
            <span>/</span>
            <Link href="/surgery" className="hover:underline">기타외과질환</Link>
            <span>/</span>
            <strong>상처 치료</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">상처 치료</h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">급·만성 상처의 전문적 처치와 봉합</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-7 md:pb-10 space-y-7 md:space-y-8">
        {/* 핵심요약 */}
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                상처 치료는 단순 찰과상부터 깊은 열상, 만성 상처까지 외과전문의가 직접 처치하는 진료입니다. 적절한 시간
                내에 제대로 처치하지 않으면 감염·흉터·기능 장애로 이어질 수 있습니다.
              </p>
              <p>
                특히 손·발·관절 주변, 오염된 상처, 깊은 열상은 전문 처치가 필요합니다. 세척·변연 절제, 봉합술, 습윤
                드레싱 중 상처 상태에 맞는 방법을 상담을 통해 안내합니다.
              </p>
              <p>
                김포·구래동에서 상처 처치를 고려하신다면, 장튼튼항외과의원에서 상처의 깊이와 오염 정도를 확인한 뒤
                적절한 치료 방향을 상담받을 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="blue" icon={EyeDropperIcon} title="대표 증상" desc="출혈·오염·감각 이상 등" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="처치 방법" desc="세척·봉합·습윤 드레싱" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="회복 관리" desc="드레싱·실밥 제거 일정 준수" />
            <StatChip tone="peach" icon={CalendarDaysIcon} title="진료 시기" desc="이른 시간 내 처치가 유리" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '상처 치료란 무엇인가요?' },
            { id: 's2', label: '병원 진료가 필요한 상처' },
            { id: 's3', label: '상처 진찰과 처치 흐름' },
            { id: 's4', label: '봉합 시기와 파상풍 접종' },
            { id: 's5', label: '상처 치료 방법' },
            { id: 's6', label: '봉합 후 관리와 흉터' },
            { id: 's7', label: '화상과 상처 치료의 관계' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>상처 치료란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              상처 치료는 단순 찰과상부터 깊은 열상, 만성 상처까지 외과전문의가 직접 처치하는 진료입니다. 상처는
              발생 직후 어떻게 처치하느냐에 따라 이후 감염·흉터·기능 회복이 달라질 수 있습니다.
            </p>
            <p>
              특히 손·발·관절 주변처럼 움직임이 많은 부위, 흙이나 이물질에 오염된 상처, 깊은 열상은 적절한 시간 내에
              전문적인 처치가 필요합니다. 시간이 지날수록 감염 위험이 커질 수 있어 방치하지 않는 것이 안전합니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>병원 진료가 필요한 상처</SectionTitle>
          <Prose>
            <p>
              아래와 같은 상처는 가정에서 처치를 미루기보다 빠르게 진료를 받는 것이 안전합니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            <IconCard tone="coral" icon={EyeDropperIcon} title="출혈이 멈추지 않거나 깊은 상처" desc="지혈이 잘 안 되거나 상처 깊이가 깊으면 빠른 처치가 필요할 수 있습니다." />
            <IconCard tone="yellow" icon={BeakerIcon} title="이물질이 포함된 오염 상처" desc="흙·녹 등이 섞인 상처는 세척과 감염 예방 처치가 중요할 수 있습니다." />
            <IconCard tone="coral" icon={FaceFrownIcon} title="동물·사람에게 물린 상처" desc="물린 상처는 감염 위험이 높아 빠른 진료를 권합니다." />
            <IconCard tone="peach" icon={BoltIcon} title="통증이 심하거나 감각이 없는 상처" desc="신경 손상이 의심될 수 있어 확인이 필요합니다." />
            <IconCard tone="coral" icon={ExclamationTriangleIcon} title="수일 후에도 낫지 않고 고름이 생기는 경우" desc="감염이 진행 중일 수 있어 재확인이 필요합니다." />
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>상처 진찰과 처치 흐름</SectionTitle>
          <FlowSteps
            cols={4}
            tone="blue"
            items={[
              { title: '상처 확인', desc: '깊이, 오염 정도, 출혈 양상을 확인합니다.' },
              { title: '세척·변연 절제', desc: '오염 물질과 괴사 조직을 제거합니다.' },
              { title: '봉합 또는 드레싱', desc: '상처 상태에 맞는 처치 방법을 선택합니다.' },
              { title: '추가 처치 상담', desc: '파상풍 등 필요한 처치를 함께 안내합니다.' },
            ]}
          />
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>봉합 시기와 파상풍 접종</SectionTitle>
          <Banner tone="blue" icon={ClipboardDocumentCheckIcon}>
            일반적으로 이른 시간 내 처치가 감염 예방에 도움이 됩니다. 시간이 지났어도 내원해 주시면 상태에 맞는 처치를
            안내드립니다.
          </Banner>
          <Prose>
            <p>
              오염 정도와 부위에 따라 봉합 가능 시간이 달라질 수 있으며, 늦었더라도 세척·배농 등 다른 처치가 필요할 수
              있습니다. 상처 오염도와 최근 파상풍 접종력을 함께 확인해 추가 접종 필요 여부를 판단합니다.
            </p>
            <p>
              녹슨 물건이나 흙이 묻은 상처는 특히 확인이 필요하며, 접종 기록이 불확실하면 진료에서 상의해 주세요.
            </p>
          </Prose>
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>상처 치료 방법</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <IconCard tone="blue" icon={BeakerIcon} title="세척 및 변연 절제" desc="상처 내 오염 물질과 괴사 조직을 제거하여 감염 위험을 낮추는 데 도움이 됩니다." />
            <IconCard tone="lavender" icon={ScissorsIcon} title="봉합술" desc="상처 크기와 위치에 따라 단순·피하·특수 봉합을 시행합니다." />
            <IconCard tone="mint" icon={ShieldCheckIcon} title="습윤 드레싱" desc="상처 상태에 맞는 드레싱 재료로 치유 환경을 만듭니다." />
          </div>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>봉합 후 관리와 흉터</SectionTitle>
          <Prose>
            <p>
              올바른 처치가 흉터를 줄이는 데 도움이 될 수 있습니다. 다만 부위·깊이·감염 여부와 개인 회복에 따라 흔적이
              남을 수 있으며, 흉터가 전혀 없다고 단정하기는 어렵습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              icon={CheckCircleIcon}
              title="도움이 될 수 있는 관리"
              items={[
                '안내받은 간격으로 소독·드레싱을 유지하기',
                '실밥 제거와 상처 관리 일정을 지키기',
                '샤워 가능 여부·활동 제한 안내를 확인하기',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="주의가 필요한 신호"
              items={[
                '고름·발열·심한 발적이 있으면 바로 내원하기',
                '임의로 연고를 바꾸거나 상처를 억지로 건조시키지 않기',
              ]}
            />
          </div>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>화상과 상처 치료의 관계</SectionTitle>
          <Prose>
            <p>
              열상·자상과 화상은 손상 기전이 달라 처치가 다를 수 있습니다. 다만 세척·감염 예방·드레싱 원칙은 겹치며,
              복합 손상이면 함께 평가합니다. 관련 내용은{' '}
              <Link href="/surgery/burn" className="text-primary font-semibold underline-offset-2 hover:underline">화상 치료</Link>
              {' '}안내도 참고할 수 있고, 구체적인 방법은 내원 후 상태에 맞게 설명드립니다.
            </p>
            <p>
              방문 일정이 궁금하시면{' '}
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">상처는 이른 시간 내 처치가 회복에 도움이 됩니다</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            상처의 깊이와 오염 정도를 확인한 뒤 적절한 처치 방향을 상담할 수 있습니다.
            <br />
            장튼튼항외과의원 외과전문의가 직접 진료합니다.
          </p>
          <Link
            href="/surgery/burn"
            className="inline-flex items-center justify-center mt-4 min-h-[44px] px-5 rounded-xl bg-white text-primary text-[13px] font-bold hover:bg-white/95 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            화상 치료 안내 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
