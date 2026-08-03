import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '치열 | 장튼튼항외과의원',
  description:
    '치열의 급성·만성 증상과 좌욕·약물·수술 치료 안내. 배변 시 통증·출혈이 있을 때 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
  keywords: '치열, 배변통증, 배변출혈, 치열치료, 치열수술, 김포 치열, 구래동 치열',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/fissure' },
  openGraph: {
    title: '치열 | 장튼튼항외과의원',
    description:
      '치열의 급성·만성 증상과 좌욕·약물·수술 치료 안내. 배변 시 통증·출혈이 있을 때 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
    url: 'https://www.jangtntnhang.com/anorectal/fissure',
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

export default function Page() {
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/03-consultation-room.webp" alt="치열 통증 진단과 치료 안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 대장항문센터 / <strong>치열</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Anal Fissure</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">치열</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 점막의 찢어짐 · 극심한 배변 통증</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="section-h2 text-[#0d1117] mb-3">핵심요약</h2>
          <p className="body-text text-[#374151] break-keep">
            치열은 항문 입구 점막이 찢어진 상태로, 배변 시 극심한 통증과 선홍색 출혈이 특징입니다. 급성·만성 여부에 따라 좌욕·약물부터 수술까지 상담합니다.
          </p>
        </section>

        <PageToc
          items={[
            { id: 'what-is', label: '치열이란?' },
            { id: 'treatment', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />


        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="what-is">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>💡</span> 치열이란?
          </h2>
          <div className="text-[14px] text-[#374151] leading-[2.0] space-y-3"><p>치열은 항문 입구의 피부와 점막이 찢어진 상태입니다. 배변 시 마치 칼로 베이는 듯한 극심한 통증과 선홍색 출혈이 특징이며, 배변 후에도 수십 분~수 시간 동안 작열감이 지속됩니다.</p>
              <p>통증 때문에 배변을 참게 되고, 이로 인해 변비가 심해지는 <strong className="text-[#0d7fc4]">악순환</strong>이 반복됩니다. 20~40대 여성에서 가장 흔하며 항문 후방 정중선에서 약 90%가 발생합니다.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="p-4 rounded-xl bg-[#f0f7ff] border border-[#bfdbfe]">
                  <h3 className="font-black text-[14px] text-[#0d7fc4] mb-2">급성 치열</h3>
                  <ul className="space-y-1.5 text-[13px] text-[#374151]">
                    <li>• 최근 발생한 표재성 열상</li>
                    <li>• 약물+좌욕으로 6~8주 내 치유</li>
                    <li>• 조기 치료가 만성화 예방</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#fff7ed] border border-[#fed7aa]">
                  <h3 className="font-black text-[14px] text-[#f97316] mb-2">만성 치열</h3>
                  <ul className="space-y-1.5 text-[13px] text-[#374151]">
                    <li>• 8주 이상 지속</li>
                    <li>• 섬유화 조직(감시 치핵) 형성</li>
                    <li>• 수술적 치료 필요</li>
                  </ul>
                </div>
              </div></div>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="treatment">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>⚕️</span> 치료 방법
          </h2>
          <div className="text-[14px] text-[#374151] leading-[2.0] space-y-3"><div className="space-y-3">
              {[
                {step:'01', title:'좌욕 치료', desc:'하루 3회 이상 미온수(38~40℃) 좌욕으로 괄약근을 이완하고 혈류를 개선합니다.'},
                {step:'02', title:'약물 도포', desc:'칼슘 통로 차단제(딜티아젬), 글리세린 삼질산염 연고를 도포하여 내괄약근 압력을 낮춥니다.'},
                {step:'03', title:'보톡스 주사', desc:'내괄약근에 직접 보톡스를 주입하여 일시적으로 이완시키는 치료법입니다.'},
                {step:'04', title:'내괄약근 측방 절개술', desc:'만성 치열에서 자주 시행하는 수술입니다. 내괄약근 일부를 절개하며, 상태에 따라 당일 퇴원을 검토할 수 있습니다.'},
              ].map((t) => (
                <div key={t.step} className="flex gap-4 p-4 lg:p-5 rounded-xl bg-[#f8fafb]">
                  <span className="text-[12px] font-black text-primary shrink-0">STEP{t.step}</span>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#0d1117] mb-1">{t.title}</h3>
                    <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div></div>
        </section>
                <p className="text-[14px] text-[#374151] leading-[1.9] break-keep">
          관련 진료:{' '}
          <Link href="/anorectal/hemorrhoid" className="text-primary font-semibold underline-offset-2 hover:underline">치핵</Link>,{' '}
          <Link href="/anorectal/constipation" className="text-primary font-semibold underline-offset-2 hover:underline">변비·설사</Link>
        </p>

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />

        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치열, 혼자 참지 마세요</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">배변이 두려울 정도의 통증이 있다면 반드시 전문의 진찰이 필요합니다.<br />초기 치열은 간단한 치료로 해결됩니다.</p>
        </div>
      </div>
    </div>
  )
}
