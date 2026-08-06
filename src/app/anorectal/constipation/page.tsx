import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

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

export default function ConstipationPage() {
  const causes = [
    {title:'식이섬유 부족', desc:'채소·과일·통곡물 섭취 부족으로 대변이 딱딱해집니다.'},
    {title:'수분 부족', desc:'하루 수분 섭취가 1L 미만이면 변비가 쉽게 생깁니다.'},
    {title:'운동 부족', desc:'신체 활동이 적으면 장 운동도 함께 느려집니다.'},
    {title:'배변 억제', desc:'바쁘다는 이유로 배변을 자꾸 참으면 직장 감각이 무뎌집니다.'},
    {title:'약물 부작용', desc:'철분제·진통제·항우울제 등이 변비를 유발합니다.'},
    {title:'전신 질환', desc:'갑상선 기능저하증·당뇨 등이 원인이 되기도 합니다.'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/03-consultation-room.webp" alt="변비·설사 배변 장애 진료 안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 대장항문센터 / <strong>변비·설사</strong></nav>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">변비 · 설사</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">만성 배변 장애 · 정확한 원인 진단</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '변비란', label: '변비란?' },
            { id: '설사란', label: '💧 설사란?' },
            { id: '주요-원인', label: '주요 원인' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="변비란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 변비란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>일주일에 배변 횟수가 <strong className="text-[#0d7fc4]">3회 미만</strong>이거나, 배변 시 과도한 힘이 필요하거나, 잔변감이 자주 있는 상태를 만성 변비라고 합니다.</p>
              <p>단순한 불편함을 넘어 치핵·치열·대장 질환의 주요 원인이 됩니다. 정확한 원인 파악이 치료의 핵심입니다.</p>
            </div>

          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="설사란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💧</span> 설사란?</h2>
          <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
            <p>물처럼 무른 변이 잦거나, 하루 배변 횟수가 뚜렷하게 증가하고 급박감이 동반되는 상태를 설사로 봅니다. 급성 설사와 수주 이상 이어지는 만성 설사는 접근이 달라질 수 있습니다.</p>
            <p>감염, 음식 불내성, 과민성 장증후군, 염증성 장질환, 약물 부작용 등 원인이 다양합니다. 야간 설사·혈변·체중 감소가 있으면 원인 질환 감별이 특히 중요합니다.</p>
            <p>잦은 설사는 항문 피부를 자극해 통증·가려움을 만들 수 있어, 장 증상과 항문 증상을 함께 평가합니다. 치료 방침은 개인별 병력과 검사 결과에 따라 결정합니다.</p>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="주요-원인">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🔍</span> 주요 원인</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {causes.map((c) => (
              <div key={c.title} className="p-4 rounded-xl bg-[#f8fafb]">
                <h3 className="text-[13px] font-bold text-[#0d1117] mb-1">{c.title}</h3>
                <p className="text-[12px] text-[#6b7280] leading-[1.8]">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="치료-방법">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>⚕️</span> 치료 방법</h2>
          <div className="space-y-3">
            {[
              {num:'01', title:'생활습관 교정', desc:'식이섬유 25~30g/일, 수분 2L 이상, 규칙적 운동, 배변 습관 교정이 기본 치료입니다.'},
              {num:'02', title:'약물 치료', desc:'팽창성·삼투성·자극성 완하제를 증상에 맞게 처방합니다.'},
              {num:'03', title:'바이오피드백', desc:'출구폐쇄형 변비에서 항문 근육 협응 훈련이 효과적입니다.'},
              {num:'04', title:'정밀 검사', desc:'대장내시경, 대장통과시간 측정 등으로 기질적 원인을 배제합니다.'},
            ].map((t) => (
              <div key={t.num} className="flex gap-4 p-4 rounded-xl bg-[#f8fafb]">
                <span className="text-[12px] font-black text-primary shrink-0">STEP{t.num}</span>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0d1117] mb-1">{t.title}</h3>
                  <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
                <p className="text-[14px] text-[#374151] leading-[1.9] break-keep">
          관련 진료:{' '}
          <Link href="/anorectal/hemorrhoid" className="text-primary font-semibold underline-offset-2 hover:underline">치핵</Link>,{' '}
          <Link href="/anorectal/fissure" className="text-primary font-semibold underline-offset-2 hover:underline">치열</Link>,{' '}
          <Link href="/endoscopy/colon" className="text-primary font-semibold underline-offset-2 hover:underline">대장내시경</Link>
        </p>

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />

        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">변비, 습관이 되기 전에 치료하세요</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">만성 변비는 치핵·치열의 원인이 됩니다.<br />장튼튼항외과의원에서 정확한 원인을 찾아드립니다.</p>
        </div>
      </div>
    </div>
  )
}
