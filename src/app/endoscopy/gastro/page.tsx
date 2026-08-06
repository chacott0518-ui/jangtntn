import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BeakerIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  FireIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  NoSymbolIcon,
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
  title: '위내시경 | 장튼튼항외과의원',
  description: '김포 구래역 위내시경. 식도·위·십이지장 관찰과 조직 검사. 검사 전 금식·수면 내시경 주의사항을 안내합니다.',
  keywords: '위내시경, 수면위내시경, 내시경검사, 김포 위내시경, 김포 수면위내시경, 구래동 위내시경, 구래역 위내시경',
  alternates: { canonical: 'https://jtntn.co.kr/endoscopy/gastro' },
  openGraph: {
    title: '위내시경 | 장튼튼항외과의원',
    description: '김포 구래역 위내시경. 식도·위·십이지장 관찰과 조직 검사. 검사 전 금식·수면 내시경 주의사항을 안내합니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '위내시경 전에 얼마나 금식해야 하나요?',
    a: '일반적으로 검사 8시간 전부터 물 포함 금식이 필요합니다. 오전 검사라면 전날 자정부터 금식하는 경우가 많으며, 오후 검사는 아침 시간까지 안내가 달라질 수 있습니다. 개인 질환과 복용 약에 따라 달라지므로 예약 시 확인이 필요하고, 안내와 다르게 드신 음식이 있으면 미리 알려 주세요.',
  },
  {
    q: '혈압약·당뇨약은 검사 당일에도 먹나요?',
    a: '혈압약은 소량의 물과 복용 가능한 경우가 많습니다. 당뇨약·인슐린은 저혈당 위험이 있어 의사 지시에 따라 조정하며, 항혈전제 등 특수 약은 중단 여부를 미리 상담해야 합니다. 복용 약물 목록을 준비해 오시면 더 안전하게 안내할 수 있고, 임의로 약을 끊지 않는 것이 중요합니다.',
  },
  {
    q: '수면 위내시경은 안전한가요?',
    a: '수면 내시경은 진정제를 투여한 뒤 검사를 진행해 불편감을 줄이는 방법입니다. 시술 전 건강 상태를 확인하고, 회복 중에도 어지럼·졸음이 남을 수 있습니다. 개인별 반응 차이가 있어 보호자 동반을 권하며, 당일 운전과 중요한 결정은 피하는 것이 안전합니다.',
  },
  {
    q: '검사 후 운전해도 되나요?',
    a: '수면 내시경 당일은 운전·기계 조작을 하지 않는 것이 원칙입니다. 진정제 영향으로 판단력과 반응이 떨어질 수 있어 사고 위험이 있습니다. 귀가 시 보호자와 함께 오시고, 중요한 업무나 격한 운동도 하루 정도 미루는 것이 안전합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '위내시경으로 어떤 질환을 볼 수 있나요?',
    a: '식도·위·십이지장의 염증, 궤양, 용종, 헬리코박터 감염 등을 관찰할 수 있습니다. 필요하면 조직 검사를 함께 시행하며, 결과는 수일에서 1~2주 후 확인하는 경우가 많습니다. 정확한 진단은 소견과 조직 결과를 종합해 설명드리며, 개인 증상에 따라 추가 검사가 필요할 수 있습니다.',
  },
]

const related = [
  { href: '/endoscopy/colon', title: '대장내시경', desc: '대장·직장 관찰과 조기 확인 안내' },
  { href: '/endoscopy/polyp', title: '용종 절제술', desc: '검사 중 발견된 용종의 절제 안내' },
  { href: '/endoscopy', title: '내시경센터', desc: '위·대장 내시경과 용종 절제 안내' },
]

const checks = [
  '40세 이상 성인 (국가암검진: 2년마다)',
  '속쓰림·소화불량·상복부 통증이 지속되는 경우',
  '음식 삼키기 어렵거나 체중이 감소한 경우',
  '혈변·흑색변·원인 불명 빈혈',
  '위암 또는 헬리코박터 가족력',
  '헬리코박터 제균 치료 후 추적 검사',
]

export default function GastroPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[240px] md:h-[320px] lg:h-[400px]">
        <Image src="/images/endoscopy-center.webp" alt="장튼튼항외과의원 위내시경 검사 안내" fill className="object-cover object-[68%_42%] lg:object-[72%_40%]" sizes="100vw" priority />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:underline">홈</Link>
            <span>/</span>
            <Link href="/endoscopy" className="hover:underline">내시경센터</Link>
            <span>/</span>
            <strong>위내시경</strong>
          </nav>
          <h1 className="text-[27px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1 break-keep leading-[1.25]">
            위내시경
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#374151] font-medium leading-snug">
            편안한 수면 내시경으로 정확한 검사를
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
                위내시경은 내시경 튜브를 입을 통해 삽입하여 식도·위·십이지장을 직접 관찰하는 검사입니다.
                위암·위궤양·역류성식도염·헬리코박터 감염 등을 조기에 발견하고 필요 시 조직 검사를 시행할 수
                있습니다.
              </p>
              <p>
                수면 위내시경은 수면 유도제 투여 후 검사하여 불편함을 줄이는 데 도움이 될 수 있습니다. 검사
                시간은 보통 약 5~10분 정도이며, 개인 상태에 따라 달라질 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
          <div className="grid grid-cols-2 gap-2.5">
            <StatChip tone="blue" icon={MagnifyingGlassIcon} title="검사 부위" desc="식도·위·십이지장" />
            <StatChip tone="yellow" icon={NoSymbolIcon} title="검사 전 준비" desc="8시간 금식 필요" />
            <StatChip tone="mint" icon={MoonIcon} title="수면 여부" desc="수면·비수면 선택 가능" />
            <StatChip tone="peach" icon={ClockIcon} title="검사 시간" desc="약 5~10분(개인차)" />
          </div>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '위내시경이란 무엇인가요?' },
            { id: 's2', label: '위내시경으로 확인할 수 있는 질환' },
            { id: 's3', label: '검사 전 준비사항' },
            { id: 's4', label: '검사는 어떻게 진행되나요?' },
            { id: 's5', label: '수면 위내시경과 비수면 위내시경' },
            { id: 's6', label: '검사 후 주의사항' },
            { id: 's7', label: '검사 권장 대상' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>위내시경이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              위내시경은 내시경 튜브를 입을 통해 삽입하여 식도·위·십이지장을 직접 관찰하는 검사입니다.
              위암·위궤양·역류성식도염·헬리코박터 감염 등을 조기에 발견하고 필요 시 조직 검사를 시행할 수
              있습니다.
            </p>
            <p>
              수면 위내시경은 수면 유도제 투여 후 검사하여 불편함을 줄이는 데 도움이 될 수 있습니다. 검사
              시간은 보통 약 5~10분 정도이며, 개인 상태에 따라 달라질 수 있습니다.
            </p>
            <p>
              속쓰림, 소화불량, 상복부 통증처럼 흔한 증상은 원인이 다양해 증상만으로 단정하기 어렵습니다.
              내시경으로 점막을 직접 확인하면 원인을 좁히고 필요한 치료 방향을 상담하는 데 도움이 됩니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>위내시경으로 확인할 수 있는 질환</SectionTitle>
          <Prose>
            <p>
              위내시경으로는 식도·위·십이지장의 염증, 궤양, 용종, 헬리코박터 감염 등을 관찰할 수 있습니다.
              의심되는 병변이 있으면 조직 검사를 함께 시행할 수 있으며, 결과는 수일에서 1~2주 후 확인하는
              경우가 많습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
            <IconCard tone="blue" icon={MagnifyingGlassIcon} title="위암" desc="조기에 발견할수록 치료 방향 선택 폭이 넓어질 수 있습니다." />
            <IconCard tone="peach" icon={ExclamationTriangleIcon} title="위궤양" desc="점막 손상 정도를 확인하고 필요 시 조직 검사를 시행합니다." />
            <IconCard tone="yellow" icon={FireIcon} title="역류성식도염" desc="식도 점막의 자극·염증 여부를 관찰합니다." />
            <IconCard tone="lavender" icon={BeakerIcon} title="헬리코박터 감염" desc="감염 여부 확인 후 제균 치료와 추적 검사를 상담합니다." />
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>검사 전 준비사항</SectionTitle>
          <ChecklistPanel
            tone="yellow"
            icon={NoSymbolIcon}
            title="검사 전 확인할 사항"
            items={[
              '8시간 금식 — 물 포함 완전 금식이며, 오전 검사라면 전날 자정부터 금식합니다.',
              '약물 조정 — 혈압약은 소량의 물과 복용 가능하지만, 당뇨약은 의사 지시에 따라 조정합니다.',
              '보호자 동반 — 수면 내시경을 선택하는 경우 보호자 동반이 필요하며 검사 당일 운전은 피해야 합니다.',
              '편안한 복장 — 목이 넉넉한 옷을 착용하고 귀중품은 가급적 소지하지 않습니다.',
            ]}
          />
          <Prose>
            <p>
              항혈전제, 인슐린 등 특수 약을 복용 중이라면 중단 여부를 미리 상담해야 하며, 복용 약물 목록을
              준비해 오시면 더 안전하게 안내받을 수 있습니다. 임의로 약 복용을 중단하지 않는 것이 중요합니다.
            </p>
          </Prose>
          <Banner tone="yellow" icon={ExclamationTriangleIcon}>
            금식이 충분하지 않으면 위 안에 남은 음식물로 관찰이 제한되어 검사가 지연되거나 다시 진행해야 할 수
            있습니다. 안내받은 금식 시간을 정확히 지켜 주세요.
          </Banner>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>검사는 어떻게 진행되나요?</SectionTitle>
          <FlowSteps
            cols={4}
            tone="blue"
            items={[
              { title: '문진 상담', desc: '증상, 복용 약, 과거 검사 이력을 확인합니다.' },
              { title: '진정제 투여(수면 선택 시)', desc: '왼쪽으로 누운 자세에서 진정제를 투여하고 안정을 확인합니다.' },
              { title: '내시경 삽입·관찰', desc: '입으로 내시경을 삽입해 점막을 관찰하고 필요 시 조직을 채취합니다.' },
              { title: '회복 및 결과 설명', desc: '회복실에서 안정을 취한 뒤 상태에 따라 소견을 설명합니다.' },
            ]}
          />
          <Prose>
            <p>
              검사는 보통 5~10분 내외로 진행되지만, 관찰 범위나 조직 검사 시행 여부에 따라 시간이 달라질 수
              있습니다. 검사 중 불편감이 있으면 언제든 의료진에게 알려 주세요.
            </p>
          </Prose>
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>수면 위내시경과 비수면 위내시경</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: pastel.blue.border }}>
              <div className="px-3.5 py-2.5 flex items-center gap-2" style={{ background: pastel.blue.bg }}>
                <IconBadge tone="blue" icon={MoonIcon} size={26} />
                <p className="text-[14px] font-semibold" style={{ color: pastel.blue.text }}>수면 위내시경</p>
              </div>
              <div className="p-3.5">
                <dl className="space-y-1.5 text-[12.5px]">
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">방식</dt><dd>진정제 투여 후 검사</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">장점</dt><dd>불편감·구역감이 상대적으로 적음</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">주의</dt><dd>보호자 동반, 당일 운전 금지</dd></div>
                </dl>
                <p className="text-[12.5px] text-[#64748b] leading-[1.7] mt-3">
                  진정제 영향으로 회복 중 어지럼·졸음이 남을 수 있어, 검사 후에는 충분히 안정을 취한 뒤 귀가하는
                  것이 안전합니다.
                </p>
              </div>
            </div>
            <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: pastel.peach.border }}>
              <div className="px-3.5 py-2.5 flex items-center gap-2" style={{ background: pastel.peach.bg }}>
                <IconBadge tone="peach" icon={SunIcon} size={26} />
                <p className="text-[14px] font-semibold" style={{ color: pastel.peach.text }}>비수면 위내시경</p>
              </div>
              <div className="p-3.5">
                <dl className="space-y-1.5 text-[12.5px]">
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">방식</dt><dd>진정제 없이 의식 상태로 검사</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">장점</dt><dd>회복이 빠른 편일 수 있음</dd></div>
                  <div className="flex gap-2"><dt className="w-16 shrink-0 font-semibold text-[#64748b]">주의</dt><dd>목넘김 시 불편감이 느껴질 수 있음</dd></div>
                </dl>
                <p className="text-[12.5px] text-[#64748b] leading-[1.7] mt-3">
                  검사 직후 바로 일상으로 복귀하기 편한 경우가 많지만, 개인에 따라 느끼는 불편감의 정도는 다를
                  수 있습니다.
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
              '수면 내시경을 받은 경우 당일 운전·기계 조작·중요한 업무 결정은 피하기',
              '목이 따끔거리거나 더부룩한 느낌은 시간이 지나며 나아지는 경우가 많음',
              '조직 검사를 받은 경우 당일 자극적인 음식·음주는 피하는 것이 도움이 될 수 있음',
            ]}
          />
          <Banner tone="coral" icon={ExclamationTriangleIcon}>
            검사 후 심한 복통, 지속되는 출혈, 발열, 삼킴 곤란이 이어지면 바로 연락하거나 가까운 응급실을
            이용해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.
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
              위 항목에 해당하지 않더라도 증상이 반복되거나 걱정되는 부분이 있으면 상담을 통해 검사 필요성을
              확인해 볼 수 있습니다.
            </p>
          </Prose>
        </section>

        <MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/endoscopy/gastro/gastroscopy-01.webp', caption: '위내시경 01' },
            { src: '/images/medical/endoscopy/gastro/gastroscopy-02.webp', caption: '위내시경 02' },
            { src: '/images/medical/endoscopy/gastro/gastroscopy-03.webp', caption: '위내시경 03' },
          ]}
        />

        <OfficialSource
          sources={['보건복지부', '대한의학회']}
          note="위내시경 안내는 일반적인 건강정보이며, 개인의 진단·치료 방침은 진료 결과에 따릅니다."
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">위 건강, 정기적인 내시경 검사로 확인해 보세요</p>
          <p className="text-white/90 text-[13px] leading-[1.85]">
            40세 이상이라면 국가암검진 주기에 맞춰 위내시경을 고려해 볼 수 있습니다.
            <br />
            장튼튼항외과의원에서 위내시경 검사 과정을 안내해 드립니다.
          </p>
        </div>
      </div>
    </div>
  )
}
