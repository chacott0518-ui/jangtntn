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
  FaceSmileIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
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
  title: '영양 수액 | 장튼튼항외과의원',
  description: '김포 구래역 영양 수액 안내. 기본 영양 수액·고용량 비타민C·마늘 주사 등 페이지에 소개된 항목을 상담합니다.',
  keywords: '영양수액, 예방접종, 김포 영양수액, 장튼튼항외과의원',
  alternates: { canonical: 'https://jtntn.co.kr/surgery/nutrition' },
  openGraph: {
    title: '영양 수액 | 장튼튼항외과의원',
    description: '김포 구래역 영양 수액 안내. 기본 영양 수액·고용량 비타민C·마늘 주사 등 페이지에 소개된 항목을 상담합니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '영양 수액은 어떤 분에게 고려하나요?',
    a: '만성 피로, 면역력 저하 느낌, 과로 후 컨디션 회복이 필요할 때 상담하는 경우가 많습니다. 수술 전후 영양 보충이 필요한지도 함께 볼 수 있으며, 효과는 개인차가 있습니다. 진료에서 적합성을 확인하고, 필요하지 않은 항목을 권하지는 않습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '기본 영양 수액에는 무엇이 들어가나요?',
    a: '포도당·비타민B군·미네랄 등을 포함하는 기본 구성으로 안내합니다. 구성은 상태에 따라 조정이 필요할 수 있고, 알레르기나 복용 약에 따라 제한이 있을 수 있습니다. 자세한 내용은 내원 상담에서 설명드리며, 원하시는 목적에 맞게 상의합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '고용량 비타민C 수액은 어떤 경우에 쓰나요?',
    a: '항산화·면역 관리 목적으로 상담하는 경우가 있습니다. 피부 컨디션 관리를 위해 문의하시는 분도 있으며, 용량과 횟수는 개인 상태에 따라 달라질 수 있습니다. 모든 분에게 동일한 효과가 있다고 단정하기는 어려워 상담 후 진행합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '마늘 주사(아리나민)는 무엇인가요?',
    a: '티아민(비타민B1) 함량이 높은 수액으로 안내되는 항목입니다. 만성 피로·신경통·근육통 상담 시 고려할 수 있으며, 효과와 적합 여부는 개인마다 다를 수 있습니다. 다른 영양 수액과 함께 또는 따로 진행할지 진료에서 상의합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '소요 시간은 얼마나 걸리나요?',
    a: '일반적으로 30~60분 내외로 받는 경우가 많습니다. 수액 종류와 속도에 따라 시간이 달라질 수 있고, 당일 가능 여부는 예약·대기 상황에 따라 안내드립니다. 시간에 맞춰 오시면 대기와 회복을 포함해 일정을 잡아 드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '누구나 바로 받을 수 있나요?',
    a: '건강 상태와 복용 약, 알레르기 여부를 확인한 뒤 진행합니다. 모든 분에게 동일한 효과가 있다고 단정하기는 어렵고, 필요한 항목만 상담 후 선택하시면 됩니다. 컨디션이 좋지 않거나 특수 질환이 있으면 미리 알려 주시면 안전하게 안내합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
]

const related = [
  { href: '/surgery', title: '기타외과질환', desc: '일상 외과 문제 상담·처치 안내' },
  { href: '/surgery/wound', title: '상처 치료', desc: '찰과상·열상 등 상처 처치·봉합' },
  { href: '/surgery/burn', title: '화상 치료', desc: '화상 정도에 따른 단계별 처치' },
]

export default function Page() {
  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image src="/images/general-surgery-center.webp" alt="장튼튼항외과의원 영양수액 진료 안내" fill className="object-cover object-[54%_38%] lg:object-[50%_36%]" sizes="100vw" priority />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:underline">홈</Link>
            <span>/</span>
            <Link href="/surgery" className="hover:underline">기타외과질환</Link>
            <span>/</span>
            <strong>영양 수액</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">영양 수액</h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">피로 회복과 면역력 강화를 위한 맞춤형 영양 수액</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-7 md:pb-10 space-y-7 md:space-y-8">
        {/* 핵심요약 */}
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                영양 수액 치료는 비타민·미네랄·아미노산 등 필수 영양소를 정맥으로 직접 공급하는 치료입니다. 경구
                복용보다 흡수 측면에서 도움이 될 수 있습니다.
              </p>
              <p>
                만성 피로, 면역력 저하, 빠른 컨디션 회복이 필요한 분들에게 상담할 수 있으며, 효과는 개인차가 있습니다.
                건강 상태와 복용 약, 알레르기 여부를 확인한 뒤 필요한 항목만 진행합니다.
              </p>
              <p>
                김포·구래동에서 영양 수액을 고려하신다면, 장튼튼항외과의원에서 목적과 상태에 맞는 수액을 상담받을 수
                있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="blue" icon={HeartIcon} title="상담 목적" desc="피로 회복·면역·컨디션 관리" />
            <StatChip tone="lavender" icon={Squares2X2Icon} title="수액 종류" desc="기본·비타민C·마늘주사 등" />
            <StatChip tone="mint" icon={CheckCircleIcon} title="소요 시간" desc="대개 30~60분 내외" />
            <StatChip tone="peach" icon={CalendarDaysIcon} title="진행 전 확인" desc="알레르기·복용약·건강상태" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '영양 수액이란 무엇인가요?' },
            { id: 's2', label: '영양 수액을 고려하는 경우' },
            { id: 's3', label: '영양 수액의 종류' },
            { id: 's4', label: '진행 절차와 소요 시간' },
            { id: 's5', label: '진행 전 확인 사항' },
            { id: 's6', label: '진행 후 안내' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>영양 수액이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              영양 수액 치료는 비타민·미네랄·아미노산 등 필수 영양소를 정맥으로 직접 공급하는 치료입니다. 경구 복용보다
              흡수 측면에서 도움이 될 수 있다고 설명되지만, 모든 분에게 동일한 효과가 있다고 단정하기는 어렵습니다.
            </p>
            <p>
              만성 피로, 면역력 저하, 빠른 컨디션 회복이 필요한 분들이 상담하는 경우가 많으며, 필요성과 종류는 진료 후
              안내드립니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>영양 수액을 고려하는 경우</SectionTitle>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            <IconCard tone="blue" icon={FaceSmileIcon} title="만성 피로·무기력감" desc="피로가 지속될 때 컨디션 관리 목적으로 상담할 수 있습니다." />
            <IconCard tone="mint" icon={ShieldCheckIcon} title="잦은 감기·면역력 저하" desc="면역력이 떨어진 느낌이 들 때 고려할 수 있습니다." />
            <IconCard tone="peach" icon={BoltIcon} title="과로 후 컨디션 회복" desc="빠른 회복이 필요할 때 상담하는 경우가 있습니다." />
            <IconCard tone="lavender" icon={HeartIcon} title="수술 전후 영양 보충" desc="수술 전후 영양 상태를 함께 살펴볼 수 있습니다." />
            <IconCard tone="yellow" icon={SparklesIcon} title="비타민 결핍 관련 피부·모발 문제" desc="결핍이 의심될 때 보충을 상담할 수 있습니다." />
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>영양 수액의 종류</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <IconCard tone="blue" icon={BeakerIcon} title="기본 영양 수액" desc="포도당·비타민B군·미네랄 포함. 피로 회복 상담 시 기본으로 안내하는 경우가 있습니다." />
            <IconCard tone="peach" icon={SparklesIcon} title="고용량 비타민C 수액" desc="항산화·면역 관리, 피부 컨디션 관리 목적으로 상담할 수 있습니다." />
            <IconCard tone="yellow" icon={BoltIcon} title="마늘 주사(아리나민)" desc="티아민(비타민B1) 고함량 수액. 만성 피로·신경통·근육통 상담 시 고려할 수 있습니다." />
          </div>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>진행 절차와 소요 시간</SectionTitle>
          <FlowSteps
            tone="blue"
            items={[
              { title: '상담 및 확인', desc: '건강 상태, 복용 약, 알레르기 여부를 확인합니다.' },
              { title: '수액 선택', desc: '목적과 상태에 맞는 수액 종류를 상의합니다.' },
              { title: '수액 진행', desc: '일반적으로 30~60분 내외로 진행합니다.' },
              { title: '경과 확인', desc: '컨디션을 확인하고 필요한 안내를 드립니다.' },
            ]}
          />
          <Prose>
            <p>
              수액 종류와 속도에 따라 시간이 달라질 수 있고, 당일 가능 여부는 예약·대기 상황에 따라 안내드립니다.
              시간에 맞춰 오시면 대기와 회복을 포함해 일정을 잡아 드립니다.
            </p>
          </Prose>
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>진행 전 확인 사항</SectionTitle>
          <Banner tone="yellow" icon={ClipboardDocumentCheckIcon}>
            건강 상태와 복용 약, 알레르기 여부를 확인한 뒤 진행합니다. 컨디션이 좋지 않거나 특수 질환이 있으면 미리
            알려 주시면 안전하게 안내합니다.
          </Banner>
          <Prose>
            <p>
              모든 분에게 동일한 효과가 있다고 단정하기는 어렵고, 필요한 항목만 상담 후 선택하시면 됩니다. 임신 여부나
              기저질환이 있으면 진료에서 미리 말씀해 주세요.
            </p>
          </Prose>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>진행 후 안내</SectionTitle>
          <ChecklistPanel
            tone="mint"
            icon={CheckCircleIcon}
            title="도움이 될 수 있는 안내"
            items={[
              '수액 진행 후 충분한 수분 섭취와 휴식 취하기',
              '이상 반응(어지러움, 두드러기 등)이 있으면 바로 알리기',
              '다음 수액 일정은 목적과 컨디션에 맞춰 상담하기',
            ]}
          />
          <Prose>
            <p>
              구체적인 진행 방법과 성분 조정은 내원 상담에서 상태에 맞게 안내드립니다. 궁금한 점은{' '}
              <Link href="/consultation" className="text-primary font-semibold underline-offset-2 hover:underline">온라인상담</Link>
              을 통해서도 문의하실 수 있으며, 방문 일정은{' '}
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">30~60분 내외로 편안하게 받으실 수 있습니다</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            목적과 상태에 맞는 영양 수액을 상담받아 보세요.
            <br />
            장튼튼항외과의원 외과전문의가 직접 진료합니다.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center mt-4 min-h-[44px] px-5 rounded-xl bg-white text-primary text-[13px] font-bold hover:bg-white/95 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            온라인상담 하기
          </Link>
        </div>
      </div>
    </div>
  )
}
