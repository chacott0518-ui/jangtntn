import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '항문소양증 | 장튼튼항외과의원',
  description:
    '항문소양증의 원인·증상과 위생·약물 치료 안내. 야간 가려움이 심할 때 김포 구래역 장튼튼항외과의원에서 원인 질환을 함께 확인합니다.',
  keywords: '항문가려움, 항문소양증, 김포 항문가려움, 김포 항문소양증',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal/pruritus' },
  openGraph: {
    title: '항문소양증 | 장튼튼항외과의원',
    description:
      '항문소양증의 원인·증상과 위생·약물 치료 안내. 야간 가려움이 심할 때 김포 구래역 장튼튼항외과의원에서 원인 질환을 함께 확인합니다.',
    url: 'https://jtntn.co.kr/anorectal/pruritus',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '항문 가려움만으로도 진료가 필요한가요?',
    a: '네, 반복되거나 수면을 방해할 정도라면 진찰이 도움이 됩니다. 치핵·치루·감염·피부염 등 원인이 다양하기 때문에 연고만으로 해결되지 않는 경우가 있습니다. 증상 정도와 유발 요인은 개인마다 달라 직접 확인이 필요하며 원인에 맞게 치료를 계획합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '세정을 자주 하면 더 좋아지나요?',
    a: '과도한 비누 세정이나 강한 문지름은 피부를 더 자극할 수 있습니다. 부드러운 세정 후 완전히 말리는 방식이 권장되는 경우가 많습니다. 피부 상태와 원인에 따라 관리법이 달라 상담이 필요하며 잘못된 관리는 가려움을 오래가게 만들 수 있습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '약국 연고만 발라도 되나요?',
    a: '단기 증상 완화에는 도움이 될 수 있으나, 원인을 모른 채 오래 쓰면 피부가 약해질 수 있습니다. 특히 스테로이드 연고는 사용 기간 조절이 중요합니다. 가려움의 원인 질환 여부를 진찰에서 확인하는 것이 좋으며 개인별 사용법을 안내드립니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '야간에만 가려운 것도 항문소양증인가요?',
    a: '항문소양증은 야간에 심해지는 경우가 흔하지만, 그것만으로 진단이 확정되지는 않습니다. 요충이나 다른 피부 질환도 야간 증상을 만들 수 있습니다. 연령·동반 증상은 개인마다 달라 감별 진찰이 필요하며 필요 시 원인 질환을 함께 치료합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '치핵이나 치루가 가려움의 원인일 수 있나요?',
    a: '분비물·습기·피부 자극이 있으면 소양증이 악화될 수 있습니다. 원인 질환을 함께 치료해야 가려움이 줄어드는 경우가 있어 피부 관리만으로는 부족한 때도 있습니다. 동반 병변 유무는 항문 진찰로 확인하며 개인별 치료 순서를 정합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

export default function Page() {
  const symptoms = ["항문 주위 심한 가려움증 (야간 악화)","긁은 후 피부 손상 및 2차 감염","항문 주위 발적·습진·태선화","분비물 증가로 인한 속옷 오염","수면을 방해할 정도의 가려움"]
  const treatments = [{"name":"원인 질환 교정","desc":"치핵·치루 등 항문 질환, 진균·요충 감염 등 원인을 먼저 치료합니다."},{"name":"위생 관리 교육","desc":"부드러운 화장지 사용, 세정 후 완전 건조, 자극 음식(커피·맥주·초콜릿) 제한."},{"name":"국소 스테로이드 연고","desc":"단기 사용으로 가려움과 염증을 완화합니다. 장기 사용은 피합니다."},{"name":"항히스타민제","desc":"야간 가려움이 심한 경우 복용하여 수면의 질을 개선합니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/03-consultation-room.webp" alt="항문소양증 원인 진찰과 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 대장항문센터 / <strong>항문소양증</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Anal Pruritus</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">항문소양증</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 주위의 지속적인 가려움증과 피부 자극</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '항문소양증이란', label: '항문소양증이란?' },
            { id: '주요-증상', label: '주요 증상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="항문소양증이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 항문소양증이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">항문 주위 피부에 심한 가려움증이 반복되는 질환입니다. 긁으면 일시적으로 시원하지만 피부 손상 후 더욱 심해지는 악순환이 생깁니다. 성인 남성에서 더 흔하며 야간에 심해지는 경향이 있습니다. 원인이 다양하므로 정확한 진단이 중요합니다.</p>

          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="주요-증상">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🔍</span> 주요 증상</h2>
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
                <p className="text-[14px] text-[#374151] leading-[1.9] break-keep">
          관련 진료:{' '}
          <Link href="/anorectal/hemorrhoid" className="text-primary font-semibold underline-offset-2 hover:underline">치핵</Link>,{' '}
          <Link href="/anorectal/fistula" className="text-primary font-semibold underline-offset-2 hover:underline">치루</Link>,{' '}
          <Link href="/anorectal/condyloma" className="text-primary font-semibold underline-offset-2 hover:underline">항문콘딜로마</Link>
        </p>

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />

        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">항문소양증은 원인이 다양합니다. 자가 치료보다 전문의 진찰을 통해 원인을 파악하는 것이 중요합니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>
      </div>
    </div>
  )
}
