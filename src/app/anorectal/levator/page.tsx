import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '항문거근증후군 | 장튼튼항외과의원',
  description:
    '항문거근증후군의 만성 골반·직장 통증 증상과 이완 치료 안내. 앉아 있을 때 통증이 심하면 김포 구래역 장튼튼항외과의원에서 감별 진찰을 받을 수 있습니다.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/levator' },
  openGraph: {
    title: '항문거근증후군 | 장튼튼항외과의원',
    description:
      '항문거근증후군의 만성 골반·직장 통증 증상과 이완 치료 안내. 앉아 있을 때 통증이 심하면 김포 구래역 장튼튼항외과의원에서 감별 진찰을 받을 수 있습니다.',
    url: 'https://www.jangtntnhang.com/anorectal/levator',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '항문거근증후군은 어떤 통증인가요?',
    a: '항문·직장 깊숙한 압박감이나 묵직한 통증이 반복되는 경우가 많습니다. 오래 앉아 있을 때 심해지는 경향이 있으며, 배변과 무관하게 나타나기도 합니다. 통증 양상은 개인마다 달라 다른 항문 질환과 감별이 필요하므로 진찰이 중요합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '검사에서 이상이 없어도 아플 수 있나요?',
    a: '기질적 병변이 뚜렷하지 않은 기능성 통증인 경우가 있습니다. 그렇다고 모든 통증이 항문거근증후군은 아니며, 치열·치핵·골반 질환과 겹칠 수 있습니다. 유사 질환을 배제한 뒤 진단하므로 진찰과 필요 검사가 중요합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '치열·치핵과 어떻게 구분하나요?',
    a: '치열은 배변 시 찢어지는 통증이, 치핵은 출혈·돌출이 더 흔합니다. 항문거근증후군은 배변과 무관한 깊은 압박감이 두드러질 수 있습니다. 증상만으로 단정하기 어려워 직접 진찰이 필요하며 개인별 통증 패턴을 듣고 감별합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '바이오피드백 치료가 필요한가요?',
    a: '근육 과긴장이 확인되면 이완 훈련을 먼저 권하는 경우가 많습니다. 효과와 필요 횟수는 개인 반응에 따라 다르며, 모든 환자에게 동일한 일정으로 적용되지는 않습니다. 상태에 따라 약물·전기자극·보톡스 등을 함께 검토합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '스트레스와도 관련이 있나요?',
    a: '자세·긴장·스트레스가 골반저 근육 긴장과 연관될 수 있습니다. 모든 환자에게 같은 정도로 적용되지는 않으며, 직업·수면·배변 습관도 함께 영향을 줄 수 있습니다. 생활 요인과 증상 패턴을 진료에서 확인하고 관리 방법을 안내합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '수술로 치료하나요?',
    a: '항문거근증후군은 보통 수술이 1차 치료가 아닙니다. 이완 치료와 약물·보존 요법을 중심으로 접근하며, 효과가 나타나는 시점도 개인차가 있습니다. 다른 수술적 질환이 동반됐는지는 진찰로 구분한 뒤 치료 방향을 정합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

export default function Page() {
  const symptoms = ["항문·직장 깊숙한 곳의 압박감·묵직함","오래 앉아 있을 때 심해지는 통증","배변 후 통증 악화","좌측 대퇴부·허리로 방사통","20분 이상 지속되는 반복적 직장 통증"]
  const treatments = [{"name":"바이오피드백 치료","desc":"항문 근육 이완 훈련. 1차 치료법으로 효과가 가장 우수합니다."},{"name":"전기 자극 치료","desc":"항문거근에 전기 자극으로 긴장된 근육을 이완시킵니다."},{"name":"보톡스 주입","desc":"근육에 직접 보톡스를 주입하여 과긴장을 완화합니다."},{"name":"약물 치료","desc":"근이완제·항우울제로 통증과 근긴장을 조절합니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/03-consultation-room.webp" alt="항문거근증후군 골반 통증 진찰" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">항문거근증후군</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Levator Ani Syndrome</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">항문거근증후군</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 주위 근육 과긴장으로 인한 만성 골반 통증</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '항문거근증후군이란', label: '항문거근증후군이란?' },
            { id: '주요-증상', label: '주요 증상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="항문거근증후군이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 항문거근증후군이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">항문거근(levator ani)이 과도하게 긴장하거나 경련을 일으켜 항문 주위 또는 직장 안쪽에 만성 통증이 발생하는 기능성 질환입니다. 기질적 원인 없이 생기는 경우가 많으며 스트레스·자세·정신적 긴장과 밀접합니다.</p>

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
          <Link href="/anorectal/constipation" className="text-primary font-semibold underline-offset-2 hover:underline">변비·설사</Link>,{' '}
          <Link href="/anorectal/fissure" className="text-primary font-semibold underline-offset-2 hover:underline">치열</Link>,{' '}
          <Link href="/about/info" className="text-primary font-semibold underline-offset-2 hover:underline">진료안내</Link>
        </p>

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />

        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">항문거근증후군은 정확한 진단이 우선입니다. 유사 질환과의 감별이 중요합니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>
      </div>
    </div>
  )
}
