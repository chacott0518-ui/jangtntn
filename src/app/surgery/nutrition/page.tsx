import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '영양 수액 | 장튼튼항외과의원',
  description: '김포 구래역 영양 수액 안내. 기본 영양 수액·고용량 비타민C·마늘 주사 등 페이지에 소개된 항목을 상담합니다.',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery/nutrition' },
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
  }
]

export default function Page() {
  const symptoms = ["만성 피로와 무기력감이 지속될 때","잦은 감기, 면역력이 저하된 경우","과로 후 빠른 컨디션 회복이 필요할 때","수술 전·후 영양 보충이 필요한 경우","비타민 결핍으로 인한 피부·모발 문제"]
  const treatments = [{"name":"기본 영양 수액","desc":"포도당·비타민B군·미네랄 포함. 피로 회복 상담 시 기본으로 안내하는 경우가 있습니다."},{"name":"고용량 비타민C 수액","desc":"항산화·면역 관리, 피부 컨디션 관리 목적으로 상담할 수 있습니다."},{"name":"마늘 주사 (아리나민)","desc":"티아민(비타민B1) 고함량 수액. 만성 피로·신경통·근육통 상담 시 고려할 수 있습니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/05-recovery-room.webp" alt="영양 수액 치료 안내 이미지" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 기타외과질환 / 영양 수액</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Nutrition IV Therapy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">영양 수액</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">피로 회복과 면역력 강화를 위한 맞춤형 영양 수액</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '영양-수액이란', label: '영양 수액이란?' },
            { id: '증상-및-진료-대상', label: '증상 및 진료 대상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="영양-수액이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 영양 수액이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">영양 수액 치료는 비타민·미네랄·아미노산 등 필수 영양소를 정맥으로 직접 공급하는 치료입니다. 경구 복용보다 흡수 측면에서 도움이 될 수 있습니다. 만성 피로, 면역력 저하, 빠른 컨디션 회복이 필요한 분들에게 상담할 수 있으며, 효과는 개인차가 있습니다.</p>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="증상-및-진료-대상">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🔍</span> 증상 및 진료 대상</h2>
          <ul className="space-y-2">
            {symptoms.map((s: string, i: number) => (
              <li key={i} className="flex gap-3 p-3 rounded-xl bg-[#f8fafb] text-[13px] text-[#374151] leading-[1.85]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 mt-0.5" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                {s}
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="치료-방법">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>⚕️</span> 치료 방법</h2>
          <div className="space-y-3">
            {treatments.map((t: {name:string;desc:string}, i: number) => (
              <div key={i} className="p-5 rounded-xl bg-[#f8fafb]">
                <h3 className="text-[14px] font-bold text-[#0d1117] mb-1.5">{t.name}</h3>
                <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <p className="text-[14px] text-[#374151] leading-[1.9]">
          관련 진료:{' '}
          <Link href="/surgery" className="text-primary font-bold hover:underline">기타외과질환</Link>,{' '}
          <Link href="/about/info" className="text-primary font-bold hover:underline">진료안내</Link>,{' '}
          <Link href="/consultation" className="text-primary font-bold hover:underline">온라인상담</Link>
        </p>
        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[15px] mb-2">30~60분 내에 편안하게 받으실 수 있습니다. 일정은 예약 시 안내드립니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
