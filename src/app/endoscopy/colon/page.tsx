import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  ScissorsIcon,
  ShieldExclamationIcon,
  SunIcon,
  UserGroupIcon,
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
  IconBadge,
  IconCard,
  pastel,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StatChip,
} from '../../anorectal/_ui'

export const metadata: Metadata = {
  title: '대장내시경 | 장튼튼항외과의원',
  description: '김포 구래역 대장내시경. 장 정결·약물 안내와 용종 확인. 수면 검사 후 당일 운전은 피해야 합니다.',
  keywords: '대장내시경, 수면대장내시경, 위대장내시경, 대장암검진, 김포 대장내시경, 김포 수면대장내시경, 구래동 대장내시경, 구래역 대장내시경',
  alternates: { canonical: 'https://jtntn.co.kr/endoscopy/colon' },
  openGraph: {
    title: '대장내시경 | 장튼튼항외과의원',
    description: '김포 구래역 대장내시경. 장 정결·약물 안내와 용종 확인. 수면 검사 후 당일 운전은 피해야 합니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '대장내시경 전 장 정결은 어떻게 하나요?',
    a: '검사 수일 전부터 씨 있는 과일·잡곡을 줄이고, 전날부터 처방된 장 정결제를 복용합니다. 정결이 충분하지 않으면 검사가 어렵거나 재검사가 필요할 수 있습니다. 복용 방법과 물 섭취량은 개인별 처방 안내를 따라야 하며, 구토·심한 복통이 있으면 바로 연락해 주세요.',
  },
  {
    q: '복용 중인 약은 어떻게 조정하나요?',
    a: '혈압약은 소량의 물과 복용 가능한 경우가 많습니다. 당뇨약·항혈전제·철분제 등은 중단 또는 조정이 필요할 수 있어 미리 확인이 중요합니다. 복용 약물 목록을 알려주시면 안전하게 안내하며, 임의로 약을 중단하지 않는 것이 좋습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '수면 대장내시경 후 운전이 가능한가요?',
    a: '수면 내시경 당일은 운전·기계 조작을 하지 않아야 합니다. 진정제 영향이 남아 판단력과 반응이 떨어질 수 있어 사고 위험이 있습니다. 보호자와 함께 내원·귀가하시고, 중요한 업무나 격한 활동도 하루 정도 미루는 것이 안전합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '검사 중 용종이 나오면 바로 제거하나요?',
    a: '크기·위치·형태와 출혈 위험 등을 보고 당일 절제 여부를 판단합니다. 모든 용종이 즉시 제거되는 것은 아니며, 큰 병변이나 고위험 위치는 일정을 다시 잡기도 합니다. 필요하면 추가 검사 계획을 안내드리며, 개인 상태에 따라 결정이 달라집니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '대장내시경은 몇 살부터 받나요?',
    a: '일반적으로 50세 전후부터 정기 검진을 권하는 경우가 많습니다. 가족력이나 혈변·배변 습관 변화가 있으면 더 이른 검사가 필요할 수 있습니다. 증상과 병력을 보고 시기를 상담하며, 이전 용종 결과에 따라 추적 간격도 달라질 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
]

const related = [
  { href: '/endoscopy/polyp', title: '용종 절제술', desc: '검사 중 발견된 용종의 절제 안내' },
  { href: '/endoscopy/gastro', title: '위내시경', desc: '식도·위·십이지장 관찰과 조기 확인' },
  { href: '/endoscopy', title: '내시경센터', desc: '위·대장 내시경과 용종 절제 안내' },
  { href: '/anorectal/constipation', title: '변비·설사', desc: '배변 습관 변화가 반복될 때 확인' },
]

const checks = [
  '50세 이상 성인 (5~10년마다 정기 검진)',
  '배변 출혈·혈변·점액변이 있는 경우',
  '원인 불명의 빈혈 또는 체중 감소',
  '대장암·용종 가족력 (40세부터 권장)',
  '배변 습관 변화 (변비·설사 교대)',
  '복통이 2주 이상 지속되는 경우',
]

const cleaningSteps = [
  { day: '검사 2일 전', desc: '씨 있는 과일·해조류·잡곡밥 제한' },
  { day: '검사 전날', desc: '저잔류 식이(흰쌀밥·두부·계란 허용) + 저녁부터 장 정결제 복용 시작' },
  { day: '검사 당일', desc: '나머지 정결제 복용 완료 후 물 포함 완전 금식' },
]

export default function ColonPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image src="/images/endoscopy-center.webp" alt="장튼튼항외과의원 대장내시경 검사 안내" fill className="object-cover object-[68%_42%] lg:object-[72%_40%]" sizes="100vw" priority />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:underline">홈</Link>
            <span>/</span>
            <Link href="/endoscopy" className="hover:underline">내시경센터</Link>
            <span>/</span>
            <strong>대장내시경</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            대장내시경
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            대장암 예방을 위한 가장 확실한 방법
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
                항문을 통해 내시경을 삽입하여 직장과 대장 전체를 관찰하는 검사입니다. 대장암, 용종, 염증성
                장질환 등을 직접 확인하고 필요 시 조직 검사 또는 용종 제거를 시행합니다.
              </p>
              <p>
                많은 대장암이 선종성 용종에서 진행되는 것으로 알려져, 조기 발견과 적절한 제거가 예방에 도움이
                됩니다. 용종 상태에 따라 당일 절제 여부가 달라질 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="blue" icon={MagnifyingGlassIcon} title="검사 부위" desc="대장·직장 전체" />
            <StatChip tone="yellow" icon={ClipboardDocumentCheckIcon} title="검사 전 준비" desc="장정결제 복용 필요" />
            <StatChip tone="mint" icon={MoonIcon} title="수면 여부" desc="수면·비수면 선택 가능" />
            <StatChip tone="peach" icon={ScissorsIcon} title="용종 발견 시" desc="상태 따라 당일 절제 검토" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '대장내시경이란 무엇인가요?' },
            { id: 's2', label: '대장내시경으로 확인할 수 있는 질환' },
            { id: 's3', label: '검사 전 장 정결과 복용약 준비' },
            { id: 's4', label: '검사는 어떻게 진행되나요?' },
            { id: 's5', label: '수면 대장내시경과 비수면 대장내시경' },
            { id: 's6', label: '검사 후 주의사항' },
            { id: 's7', label: '검사 권장 대상' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>대장내시경이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              항문을 통해 내시경을 삽입하여 직장과 대장 전체를 관찰하는 검사입니다. 대장암, 용종, 염증성
              장질환 등을 직접 확인하고 필요 시 조직 검사 또는 용종 제거를 시행합니다.
            </p>
            <p>
              많은 대장암이 선종성 용종에서 진행되는 것으로 알려져, 조기 발견과 적절한 제거가 예방에 도움이
              됩니다. 용종 상태에 따라 당일 절제 여부가 달라질 수 있습니다.
            </p>
            <p>
              배변 출혈, 배변 습관 변화, 원인 불명의 빈혈 같은 증상이 있을 때뿐 아니라, 증상이 없어도 연령대와
              가족력에 따라 정기 검진 목적으로 검사를 받는 경우가 흔합니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>대장내시경으로 확인할 수 있는 질환</SectionTitle>
          <Prose>
            <p>
              대장내시경으로는 대장·직장의 용종, 대장암, 궤양성 대장염이나 크론병 같은 염증성 장질환, 게실
              등을 관찰할 수 있습니다. 필요한 경우 조직 검사를 함께 시행해 정확한 소견을 확인합니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            <IconCard tone="lavender" icon={ScissorsIcon} title="대장 용종" desc="선종성 용종은 시간이 지나며 암으로 진행될 가능성이 있어 절제를 검토합니다." />
            <IconCard tone="coral" icon={ShieldExclamationIcon} title="대장암" desc="점막 병변을 직접 관찰하고 필요 시 조직 검사로 확인합니다." />
            <IconCard tone="yellow" icon={ExclamationTriangleIcon} title="염증성 장질환" desc="궤양성 대장염·크론병 등 점막 염증 상태를 확인합니다." />
            <IconCard tone="blue" icon={MagnifyingGlassIcon} title="게실 등 기타 소견" desc="대장 벽의 게실, 출혈 부위 등을 함께 살펴볼 수 있습니다." />
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>검사 전 장 정결과 복용약 준비</SectionTitle>
          <Banner tone="yellow" icon={ExclamationTriangleIcon}>
            장 정결이 가장 중요합니다 — 처방대로 정확히 따라주세요. 정결이 충분하지 않으면 검사가 어렵거나
            재검사가 필요할 수 있습니다.
          </Banner>
          <FlowSteps
            items={cleaningSteps.map((t) => ({ title: t.day, desc: t.desc }))}
          />
          <Prose>
            <p>
              혈압약은 소량의 물과 복용 가능한 경우가 많지만, 당뇨약·항혈전제·철분제 등은 중단 또는 조정이
              필요할 수 있어 미리 확인이 중요합니다. 복용 약물 목록을 알려주시면 안전하게 안내하며, 임의로
              약을 중단하지 않는 것이 좋습니다.
            </p>
            <p>
              장 정결제 복용 방법과 물 섭취량은 개인별 처방 안내를 따라야 하며, 구토·심한 복통이 있으면 바로
              연락해 주세요.
            </p>
          </Prose>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>검사는 어떻게 진행되나요?</SectionTitle>
          <FlowSteps
            cols={4}
            tone="blue"
            items={[
              { title: '문진 상담', desc: '증상, 복용 약, 정결 상태를 확인합니다.' },
              { title: '진정제 투여(수면 선택 시)', desc: '옆으로 누운 자세에서 진정제를 투여합니다.' },
              { title: '내시경 삽입·관찰', desc: '항문으로 내시경을 삽입해 대장 전체를 관찰하며 필요 시 처치합니다.' },
              { title: '회복 및 결과 설명', desc: '회복실에서 안정을 취한 뒤 소견과 다음 계획을 설명합니다.' },
            ]}
          />
          <Prose>
            <p>
              검사 시간은 보통 15~30분 내외이지만, 장 정결 상태와 용종 제거 등 처치 여부에 따라 달라질 수
              있습니다.
            </p>
          </Prose>
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>수면 대장내시경과 비수면 대장내시경</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: pastel.blue.border }}>
              <div className="px-3.5 py-2.5 flex items-center gap-2" style={{ background: pastel.blue.bg }}>
                <IconBadge tone="blue" icon={MoonIcon} size={26} />
                <p className="text-[14px] font-semibold" style={{ color: pastel.blue.text }}>수면 대장내시경</p>
              </div>
              <div className="p-3.5">
                <dl className="space-y-1.5 text-[12.5px]">
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">방식</dt><dd>진정제 투여 후 검사</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">장점</dt><dd>불편감·복부 압박감이 상대적으로 적음</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">주의</dt><dd>보호자 동반, 당일 운전 금지</dd></div>
                </dl>
                <p className="text-[12.5px] text-[#64748b] leading-[1.7] mt-3">
                  진정제 영향이 남아 판단력과 반응이 떨어질 수 있어, 보호자와 함께 내원·귀가하는 것이
                  안전합니다.
                </p>
              </div>
            </div>
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: pastel.peach.border }}>
              <div className="px-3.5 py-2.5 flex items-center gap-2" style={{ background: pastel.peach.bg }}>
                <IconBadge tone="peach" icon={SunIcon} size={26} />
                <p className="text-[14px] font-semibold" style={{ color: pastel.peach.text }}>비수면 대장내시경</p>
              </div>
              <div className="p-3.5">
                <dl className="space-y-1.5 text-[12.5px]">
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">방식</dt><dd>진정제 없이 의식 상태로 검사</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">장점</dt><dd>회복이 빠른 편일 수 있음</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">주의</dt><dd>검사 중 복부 팽만감이 느껴질 수 있음</dd></div>
                </dl>
                <p className="text-[12.5px] text-[#64748b] leading-[1.7] mt-3">
                  검사 직후 바로 일상으로 복귀하기 편한 경우가 많지만, 느끼는 불편감의 정도는 사람마다 다를 수
                  있습니다.
                </p>
              </div>
            </div>
          </div>
          <Prose>
            <p>
              어떤 방법이 더 적합한지는 기저질환, 복용 약, 과거 검사 경험에 따라 달라질 수 있어 상담 후
              선택하는 것이 안전합니다.
            </p>
          </Prose>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>검사 후 주의사항</SectionTitle>
          <ChecklistPanel
            tone="mint"
            icon={CheckCircleIcon}
            title="회복 중 도움이 되는 사항"
            items={[
              '수면 대장내시경을 받은 경우 당일 운전·기계 조작·중요한 업무 결정은 피하기',
              '용종 절제 등 처치를 받았다면 안내받은 식이·활동 제한을 지키기',
              '복부 팽만감·가벼운 복통은 가스가 빠지며 점차 나아지는 경우가 많음',
            ]}
          />
          <Banner tone="coral" icon={ExclamationTriangleIcon}>
            검사 후 심한 복통, 지속되는 혈변, 발열이 있으면 바로 연락하거나 가까운 응급실을 이용해 주세요.
            개인 상태에 따라 안내가 달라질 수 있습니다.
          </Banner>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>검사 권장 대상</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {checks.map((item) => (
              <div key={item} className="flex gap-2.5 items-start rounded-[14px] bg-white border border-[#e8eef3] p-3.5">
                <UserGroupIcon className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden />
                <p className="text-[13px] text-[#374151] leading-[1.7] break-keep">{item}</p>
              </div>
            ))}
          </div>
          <Prose>
            <p>
              위 항목에 해당하지 않더라도 배변 관련 불편이 반복되거나 걱정되는 부분이 있으면 상담을 통해
              검사 필요성을 확인해 볼 수 있습니다.
            </p>
          </Prose>
        </section>

        <MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/endoscopy/colon/colonoscopy-01.webp', caption: '대장내시경 01' },
            { src: '/images/medical/endoscopy/colon/colonoscopy-02.webp', caption: '대장내시경 02' },
            { src: '/images/medical/endoscopy/colon/colonoscopy-03.webp', caption: '대장내시경 03' },
            { src: '/images/medical/endoscopy/colon/colonoscopy-04.webp', caption: '대장내시경 04' },
          ]}
        />

        <OfficialSource
          sources={['보건복지부', '대한의학회']}
          note="대장내시경 안내는 일반적인 건강정보이며, 개인의 진단·치료 방침은 진료 결과에 따릅니다."
        />

        <FaqShell>
          <StaticFaq items={faqs} hideHeading />
        </FaqShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

        <section className="space-y-3">
          <SectionTitle>관련 콘텐츠</SectionTitle>
          <RelatedCarousel items={related} />
        </section>

        <p className="text-[13px] text-[#64748b] leading-[1.8]">
          예약과 진료 일정은{' '}
          <Link href="/about/info" className="text-primary font-semibold underline-offset-2 hover:underline">
            진료안내
          </Link>
          에서 확인하실 수 있습니다.
        </p>

        <div className="rounded-[16px] p-5 md:p-6 text-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>
          <p className="text-white font-bold text-[16px] mb-2 break-keep">대장암은 증상이 없어도 정기 검진으로 확인해 볼 수 있습니다</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            장튼튼항외과의원에서 대장내시경 준비와 검사 과정을 안내합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
