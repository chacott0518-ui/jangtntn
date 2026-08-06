import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BeakerIcon,
  BoltIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  FireIcon,
  HandRaisedIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  SunIcon,
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
  pastel,
} from '../../anorectal/_ui'

export const metadata: Metadata = {
  title: '화상 치료 | 장튼튼항외과의원',
  description: '김포 구래역 화상 진료. 깊이·범위에 따른 처치 안내. 넓은 화상·깊은 화상은 응급 진료가 필요할 수 있습니다.',
  keywords: '화상치료, 김포 화상치료',
  alternates: { canonical: 'https://jtntn.co.kr/surgery/burn' },
  openGraph: {
    title: '화상 치료 | 장튼튼항외과의원',
    description: '김포 구래역 화상 진료. 깊이·범위에 따른 처치 안내. 넓은 화상·깊은 화상은 응급 진료가 필요할 수 있습니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '화상을 입으면 바로 어떻게 해야 하나요?',
    a: '흐르는 차가운 물로 15~20분 식힌 뒤 진료를 받는 것이 좋습니다. 얼음·간장·된장·치약 등 민간요법은 감염과 추가 손상을 유발할 수 있어 피해야 합니다. 물집은 임의로 터뜨리지 말고, 깨끗한 거즈로 덮은 뒤 내원해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '언제 급히 병원에 가야 하나요?',
    a: '물집이 넓거나, 얼굴·손·성기·관절을 침범하거나, 3도처럼 깊은 손상이 의심되면 빨리 진료가 필요합니다. 넓은 범위 화상은 탈수·쇼크 위험이 있어 지체하면 위험할 수 있습니다. 상태가 애매해도 확인하는 것이 안전하며, 아이·고령자는 더 주의가 필요합니다.',
  },
  {
    q: '1도·2도·3도 화상은 어떻게 다른가요?',
    a: '1도는 발적과 통증이 주되고, 2도는 물집과 심한 통증이 동반되는 경우가 많습니다. 3도는 피부 괴사와 함께 통증이 오히려 적을 수 있어 깊이를 겉만으로 단정하기 어렵습니다. 정확한 깊이는 진료에서 평가하며, 경과에 따라 등급 판단이 달라질 수 있습니다.',
  },
  {
    q: '화상 후 흉터가 남지 않나요?',
    a: '깊이·범위·감염 여부에 따라 흉터 정도가 달라집니다. 초기 처치가 회복에 도움이 될 수 있지만, 흉터가 전혀 없다고 단정하기는 어렵습니다. 개인별 회복 차이를 안내드리며, 가려움·당김이 오래가면 추가 상담이 필요할 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '드레싱은 얼마나 자주 하나요?',
    a: '화상 깊이와 삼출량에 따라 간격이 달라집니다. 감염 징후가 있으면 더 자주 확인이 필요할 수 있고, 가정에서 임의로 연고를 바꾸기보다 안내를 따르는 것이 좋습니다. 발열·심한 냄새·고름이 보이면 예정된 방문일보다 빨리 내원해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '상처 치료와도 함께 볼 수 있나요?',
    a: '화상과 일반 열상은 처치 원칙이 겹치는 부분이 있습니다. 부위와 오염 정도에 따라 봉합·드레싱이 달라질 수 있으며, 복합 손상이면 함께 평가합니다. 관련 진료 페이지도 참고하시고, 구체적인 방법은 내원 후 상태에 맞게 안내드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
]

const related = [
  { href: '/surgery/wound', title: '상처 치료', desc: '열상·자상 등 손상 처치 안내' },
  { href: '/surgery/nail', title: '내성발톱', desc: '발톱이 파고들어 생기는 통증·염증' },
  { href: '/surgery', title: '기타외과질환', desc: '일상 외과 문제 상담·처치 안내' },
]

const stages: { badge: string; title: string; desc: string; tone: 'mint' | 'yellow' | 'coral' }[] = [
  {
    badge: '1도',
    title: '발적·통증만 있고 물집 없음',
    desc: '표피만 손상된 상태로 설명하며, 피부가 붉어지고 화끈거리는 통증이 있을 수 있습니다. 냉각과 보호 위주의 처치로 경과를 보는 경우가 많습니다.',
    tone: 'mint',
  },
  {
    badge: '2도',
    title: '물집 형성, 심한 통증, 축축한 피부',
    desc: '진피까지 손상이 미쳐 물집이 생기고 통증이 심해질 수 있는 단계입니다. 범위와 부위에 따라 드레싱 치료나 진료가 필요할 수 있습니다.',
    tone: 'yellow',
  },
  {
    badge: '3도',
    title: '피부 괴사, 통증 없음(신경 손상)',
    desc: '피부 전층과 신경까지 손상되어 오히려 통증이 적게 느껴질 수 있는 상태입니다. 깊이가 깊어 전문적인 치료와 경과 관찰이 필요한 경우가 많습니다.',
    tone: 'coral',
  },
]

export default function Page() {
  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image src="/images/general-surgery-center.webp" alt="장튼튼항외과의원 화상 진료 안내" fill className="object-cover object-[54%_38%] lg:object-[50%_36%]" sizes="100vw" priority />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:underline">홈</Link>
            <span>/</span>
            <Link href="/surgery" className="hover:underline">기타외과질환</Link>
            <span>/</span>
            <strong>화상 치료</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">화상 치료</h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">화상 정도에 따른 단계별 전문 치료</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-7 md:pb-10 space-y-7 md:space-y-8">
        {/* 핵심요약 */}
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                화상은 열·화학물질·전기·방사선 등에 의해 피부와 조직이 손상되는 손상입니다. 화상의 심각도는 깊이(1~3도)와
                범위로 판단하며, 겉모습만으로 단정하기는 어렵습니다.
              </p>
              <p>
                올바른 초기 처치와 전문 치료가 회복에 도움이 될 수 있습니다. 반대로 간장·된장·치약 등 민간요법은 감염을
                일으킬 수 있어 피해야 합니다.
              </p>
              <p>
                김포·구래동에서 화상 진료를 고려하신다면, 장튼튼항외과의원에서 화상의 깊이와 범위를 확인한 뒤 상태에 맞는
                드레싱·치료 방향을 상담받을 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="blue" icon={ExclamationTriangleIcon} title="대표 증상" desc="발적·물집·괴사 등 깊이별 차이" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="화상 깊이" desc="1도·2도·3도로 구분해 설명" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="치료 방향" desc="냉각·드레싱부터 피부이식까지" />
            <StatChip tone="peach" icon={CalendarDaysIcon} title="진료 시기" desc="물집·범위·부위 확인 후 결정" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '화상이란 무엇인가요?' },
            { id: 's2', label: '화상이 생기는 원인' },
            { id: 's3', label: '화상의 깊이와 중증도' },
            { id: 's4', label: '화상 초기 응급처치' },
            { id: 's5', label: '병원에서의 화상 치료' },
            { id: 's6', label: '치료 후 관리와 흉터' },
            { id: 's7', label: '병원 방문이 필요한 경우' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>화상이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              화상은 열·화학물질·전기·방사선 등에 의해 피부와 조직이 손상되는 손상입니다. 뜨거운 물체나 불꽃에 의한 화상이
              흔하지만, 강산·강알칼리 같은 화학물질이나 전기, 자외선에 의해서도 비슷한 손상이 나타날 수 있습니다.
            </p>
            <p>
              화상의 심각도는 손상 깊이(1~3도)와 침범 범위를 함께 보고 판단합니다. 같은 부위라도 노출 시간과 온도에 따라
              깊이가 달라질 수 있어, 겉으로 보이는 모습만으로 중증도를 단정하기는 어렵습니다.
            </p>
          </Prose>
          <SoftCard tone="lavender">
            <p className="text-[13px] font-semibold mb-2" style={{ color: pastel.lavender.text }}>중증도 판단 기준</p>
            <p className="text-[13px] text-[#374151] leading-[1.75]">
              <span className="font-semibold" style={{ color: pastel.lavender.icon }}>깊이</span>
              <span className="mx-1.5 text-[#94a3b8]">+</span>
              1도부터 3도까지 손상이 미친 층에 따라 구분
            </p>
            <p className="text-[13px] text-[#374151] leading-[1.75] mt-1.5">
              <span className="font-semibold" style={{ color: pastel.lavender.icon }}>범위</span>
              <span className="mx-1.5 text-[#94a3b8]">+</span>
              체표면적에서 화상이 차지하는 비율
            </p>
            <p className="text-[12px] text-[#64748b] mt-2 leading-[1.7]">
              두 가지를 함께 살펴 중증도를 판단하며, 올바른 초기 처치와 전문 치료가 회복에 도움이 될 수 있습니다.
            </p>
          </SoftCard>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>화상이 생기는 원인</SectionTitle>
          <Prose>
            <p>
              화상은 원인 물질과 에너지 종류에 따라 몇 가지로 나눠 설명할 수 있습니다. 원인에 따라 초기 대응이 조금씩
              달라질 수 있어, 어떤 상황에서 다쳤는지를 기억해 두면 진료에 도움이 됩니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            <IconCard tone="coral" icon={FireIcon} title="열(화염·뜨거운 물체)" desc="불꽃, 뜨거운 물·기름, 달궈진 물체 접촉으로 생기는 가장 흔한 화상입니다." />
            <IconCard tone="yellow" icon={BeakerIcon} title="화학물질" desc="강산·강알칼리 등 화학물질에 닿아 조직이 손상되는 경우입니다." />
            <IconCard tone="blue" icon={BoltIcon} title="전기" desc="전류가 몸을 지나며 피부와 깊은 조직까지 손상시킬 수 있습니다." />
            <IconCard tone="lavender" icon={SunIcon} title="방사선(자외선 포함)" desc="장시간 자외선 노출 등으로 나타나는 화상입니다." />
          </div>
          <Banner tone="coral" icon={ExclamationTriangleIcon}>
            민간요법(간장·된장·치약 등)은 감염과 추가 손상을 유발할 수 있어 피해야 합니다.
          </Banner>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>화상의 깊이와 중증도</SectionTitle>
          <Prose>
            <p>
              화상은 흔히 손상 깊이에 따라 1도부터 3도까지로 구분해 설명합니다. 단계는 참고 지표이며, 실제 상태는 진료를
              통해 확인이 필요합니다.
            </p>
          </Prose>
          <StageTimeline items={stages} />
          <Banner tone="coral" icon={ExclamationTriangleIcon}>
            화상 부위에 부종과 열감이 동반될 수 있으며, 넓은 범위 화상은 탈수·쇼크 위험이 있어 주의가 필요합니다.
          </Banner>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>화상 초기 응급처치</SectionTitle>
          <FlowSteps
            tone="blue"
            items={[
              { title: '흐르는 찬물로 냉각', desc: '15~20분 정도 흐르는 차가운 물로 식혀 열기를 가라앉힙니다. 얼음은 직접 대지 않습니다.' },
              { title: '물집·오염물 보호', desc: '물집은 임의로 터뜨리지 말고, 깨끗한 거즈로 가볍게 덮어 보호합니다.' },
              { title: '민간요법 피하기', desc: '간장·된장·치약 등은 감염과 추가 손상을 유발할 수 있어 사용하지 않습니다.' },
              { title: '병원 내원', desc: '깊이·범위가 애매하거나 넓으면 지체하지 말고 진료를 받습니다.' },
            ]}
          />
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>병원에서의 화상 치료</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <IconCard tone="blue" icon={ShieldCheckIcon} title="드레싱 치료" desc="화상 깊이와 범위에 따라 실버 드레싱, 하이드로콜로이드 등 적절한 재료를 사용합니다." />
            <IconCard tone="peach" icon={HandRaisedIcon} title="피부 이식" desc="3도 이상 깊은 화상은 자가 피부 이식이 필요할 수 있습니다." />
          </div>
          <Prose>
            <p>
              드레싱 간격은 화상 깊이와 삼출량에 따라 달라질 수 있습니다. 감염 징후가 있으면 더 자주 확인이 필요할 수
              있어, 가정에서 임의로 연고를 바꾸기보다 안내받은 방법을 따르는 것이 좋습니다.
            </p>
            <p>
              화상과 일반 열상은 처치 원칙이 겹치는 부분이 있어 함께 평가하는 경우도 있습니다. 관련 내용은{' '}
              <Link href="/surgery/wound" className="text-primary font-semibold underline-offset-2 hover:underline">상처 치료</Link>
              {' '}안내에서도 확인할 수 있으며, 구체적인 방법은 내원 후 상태에 맞게 안내드립니다.
            </p>
          </Prose>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>치료 후 관리와 흉터</SectionTitle>
          <Prose>
            <p>
              화상 후 흉터 정도는 깊이·범위·감염 여부에 따라 달라집니다. 초기 처치가 회복에 도움이 될 수 있지만, 흉터가
              전혀 없다고 단정하기는 어려워 개인별 회복 차이를 안내드립니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              icon={CheckCircleIcon}
              title="도움이 될 수 있는 관리"
              items={[
                '안내받은 간격으로 드레싱·소독을 유지하기',
                '회복 부위는 자외선 노출을 줄이고 보습하기',
                '무리한 마찰·압박을 피해 새살을 보호하기',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="주의가 필요한 신호"
              items={[
                '가려움이 심해도 긁지 않고 안내에 따르기',
                '발열·심한 냄새·고름이 보이면 예정보다 빨리 내원하기',
                '가려움·당김이 오래가면 추가 상담을 받아보기',
              ]}
            />
          </div>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>병원 방문이 필요한 경우</SectionTitle>
          <Banner tone="coral" icon={ExclamationTriangleIcon}>
            물집이 넓거나, 얼굴·손·성기·관절을 침범하거나, 3도처럼 깊은 손상이 의심되면 빨리 진료가 필요합니다.
          </Banner>
          <Prose>
            <p>
              넓은 범위 화상은 탈수·쇼크 위험이 있어 지체하면 위험할 수 있습니다. 상태가 애매해도 확인하는 것이 안전하며,
              아이·고령자는 더 세심한 주의가 필요합니다.
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">화상 부위는 찬물로 식힌 뒤 진료를 받아보세요</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            화상의 깊이와 범위를 확인한 뒤 상태에 맞는 처치 방향을 상담할 수 있습니다.
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
