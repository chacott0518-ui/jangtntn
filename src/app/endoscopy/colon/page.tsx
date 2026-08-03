import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery, { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '대장내시경 | 장튼튼항외과의원',
  description: '김포 구래역 대장내시경. 장 정결·약물 안내와 용종 확인. 수면 검사 후 당일 운전은 피해야 합니다.',
  keywords: '대장내시경, 수면대장내시경, 위대장내시경, 대장암검진, 김포 대장내시경, 김포 수면대장내시경, 구래동 대장내시경, 구래역 대장내시경',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/colon' },
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

export default function ColonPage() {
  const checks = [
    '50세 이상 성인 (5~10년마다 정기 검진)',
    '배변 출혈·혈변·점액변이 있는 경우',
    '원인 불명의 빈혈 또는 체중 감소',
    '대장암·용종 가족력 (40세부터 권장)',
    '배변 습관 변화 (변비·설사 교대)',
    '복통이 2주 이상 지속되는 경우',
  ]
  const cleaningSteps = [
    {day:'검사 2일 전', desc:'씨 있는 과일·해조류·잡곡밥 제한'},
    {day:'검사 전날', desc:'저잔류 식이(흰쌀밥·두부·계란 허용) + 저녁부터 장 정결제 복용 시작'},
    {day:'검사 당일', desc:'나머지 정결제 복용 완료 후 물 포함 완전 금식'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/06-endoscopy-room.webp" alt="대장내시경 검사 안내 이미지" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 내시경센터 / <strong>대장내시경</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Colonoscopy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">대장내시경</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">대장암 예방을 위한 가장 확실한 방법</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '대장내시경이란', label: '대장내시경이란?' },
            { id: '검사-전-장-정결-방법', label: '📋 검사 전 장 정결 방법' },
            { id: '검사-권장-대상', label: '👤 검사 권장 대상' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="대장내시경이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 대장내시경이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>항문을 통해 내시경을 삽입하여 직장과 대장 전체를 관찰하는 검사입니다. 대장암, 용종, 염증성 장질환 등을 직접 확인하고 필요 시 조직 검사 또는 용종 제거를 시행합니다.</p>
              <p>많은 대장암이 선종성 용종에서 진행되는 것으로 알려져, 조기 발견과 적절한 제거가 예방에 도움이 됩니다. 용종 상태에 따라 당일 절제 여부가 달라질 수 있습니다.</p>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="검사-전-장-정결-방법">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>📋</span> 검사 전 장 정결 방법</h2>
          <div className="p-4 rounded-xl bg-[#fff7ed] border border-[#fed7aa] mb-4">
            <p className="text-[13px] font-bold text-[#f97316]">⚠️ 장 정결이 가장 중요합니다 — 처방대로 정확히 따라주세요</p>
          </div>
          <div className="space-y-3">
            {cleaningSteps.map((t) => (
              <div key={t.day} className="flex gap-4 p-4 rounded-xl bg-[#f8fafb]">
                <span className="text-[12px] font-black text-primary shrink-0 w-20">{t.day}</span>
                <p className="text-[13px] text-[#374151] leading-[1.8]">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="검사-권장-대상">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>👤</span> 검사 권장 대상</h2>
          <div className="space-y-2">
            {checks.map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-[#f0f7ff]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                <p className="text-[13px] text-[#374151]">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <p className="text-[14px] text-[#374151] leading-[1.9]">
          관련 진료:{' '}
          <Link href="/endoscopy/polyp" className="text-primary font-bold hover:underline">용종 절제술</Link>,{' '}
          <Link href="/endoscopy/gastro" className="text-primary font-bold hover:underline">위내시경</Link>,{' '}
          <Link href="/about/info" className="text-primary font-bold hover:underline">진료안내</Link>
        </p>
        <MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/endoscopy/colon/colonoscopy-01.webp', caption: '대장내시경 01' },
            { src: '/images/medical/endoscopy/colon/colonoscopy-02.webp', caption: '대장내시경 02' },
            { src: '/images/medical/endoscopy/colon/colonoscopy-03.webp', caption: '대장내시경 03' },
            { src: '/images/medical/endoscopy/colon/colonoscopy-04.webp', caption: '대장내시경 04' },
          ]}
        />

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">대장암은 조기 발견이 중요합니다</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">증상이 없어도 정기 검진을 받으세요.<br />장튼튼항외과의원에서 대장내시경 준비와 검사 과정을 안내합니다.</p>
        </div>
      </div>
    </div>
  )
}
