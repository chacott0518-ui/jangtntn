import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery, { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '위내시경 | 장튼튼항외과의원',
  description: '김포 구래역 위내시경. 식도·위·십이지장 관찰과 조직 검사. 검사 전 금식·수면 내시경 주의사항을 안내합니다.',
  keywords: '위내시경, 수면위내시경, 내시경검사, 김포 위내시경, 김포 수면위내시경, 구래동 위내시경, 구래역 위내시경',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/gastro' },
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

export default function GastroPage() {
  const checks = [
    '40세 이상 성인 (국가암검진: 2년마다)',
    '속쓰림·소화불량·상복부 통증이 지속되는 경우',
    '음식 삼키기 어렵거나 체중이 감소한 경우',
    '혈변·흑색변·원인 불명 빈혈',
    '위암 또는 헬리코박터 가족력',
    '헬리코박터 제균 치료 후 추적 검사',
  ]
  const preps = [
    {icon:'🚫', title:'8시간 금식', desc:'물 포함 완전 금식. 오전 검사라면 전날 자정부터 금식합니다.'},
    {icon:'💊', title:'약물 조정', desc:'혈압약은 소량의 물과 복용 가능. 당뇨약은 의사 지시에 따라 조정합니다.'},
    {icon:'🚗', title:'보호자 동반', desc:'수면 내시경 시 반드시 보호자 동반. 검사 당일 운전 금지입니다.'},
    {icon:'👔', title:'편안한 복장', desc:'목이 넉넉한 옷을 착용하시고 귀중품은 두고 오세요.'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/06-endoscopy-room.webp" alt="위내시경 검사 안내 이미지" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">위내시경</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Gastroscopy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">위내시경</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">편안한 수면 내시경으로 정확한 검사를</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '위내시경이란', label: '위내시경이란?' },
            { id: '검사-전-준비사항', label: '📋 검사 전 준비사항' },
            { id: '검사-권장-대상', label: '👤 검사 권장 대상' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="위내시경이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 위내시경이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>위내시경은 내시경 튜브를 입을 통해 삽입하여 식도·위·십이지장을 직접 관찰하는 검사입니다. 위암·위궤양·역류성식도염·헬리코박터 감염 등을 조기에 발견하고 필요 시 조직 검사를 시행할 수 있습니다.</p>
              <p>수면 위내시경은 수면 유도제 투여 후 검사하여 불편함을 줄이는 데 도움이 됩니다. 검사 시간은 보통 약 5~10분 정도이며, 개인 상태에 따라 달라질 수 있습니다.</p>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="검사-전-준비사항">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>📋</span> 검사 전 준비사항</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {preps.map((item) => (
              <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-[#f8fafb]">
                <span className="text-[22px] shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-[13px] font-bold text-[#0d1117] mb-1">{item.title}</h3>
                  <p className="text-[12px] text-[#6b7280] leading-[1.8]">{item.desc}</p>
                </div>
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
          <Link href="/endoscopy/colon" className="text-primary font-bold hover:underline">대장내시경</Link>,{' '}
          <Link href="/endoscopy/polyp" className="text-primary font-bold hover:underline">용종 절제술</Link>,{' '}
          <Link href="/about/info" className="text-primary font-bold hover:underline">진료안내</Link>
        </p>
        <MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/endoscopy/gastro/gastroscopy-01.webp', caption: '위내시경 01' },
            { src: '/images/medical/endoscopy/gastro/gastroscopy-02.webp', caption: '위내시경 02' },
            { src: '/images/medical/endoscopy/gastro/gastroscopy-03.webp', caption: '위내시경 03' },
          ]}
        />

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">위암은 조기 발견이 완치의 열쇠입니다</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">40세부터 정기 위내시경 검진을 받으세요.<br />장튼튼항외과의원에서 위내시경 검사 과정을 안내해 드립니다.</p>
        </div>
      </div>
    </div>
  )
}
