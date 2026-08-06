import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery, { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '지방종 | 장튼튼항외과의원',
  description: '김포 구래역 지방종 진료. 피부 아래 부드러운 혹의 진단과 국소마취 절제 안내. 크기에 따라 시술 계획이 달라질 수 있습니다.',
  keywords: '지방종, 지방종제거, 피부종양, 피부종양제거, 김포 지방종제거, 구래동 지방종제거',
  alternates: { canonical: 'https://jtntn.co.kr/skin/lipoma' },
  openGraph: {
    title: '지방종 | 장튼튼항외과의원',
    description: '김포 구래역 지방종 진료. 피부 아래 부드러운 혹의 진단과 국소마취 절제 안내. 크기에 따라 시술 계획이 달라질 수 있습니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '지방종과 피지낭종은 어떻게 다른가요?',
    a: '지방종은 지방 세포가 뭉친 부드러운 혹이고, 피지낭종은 피지·각질이 쌓인 주머니형 병변입니다. 만져지는 감촉과 중심 개구부 유무로 구분하는 경우가 많지만, 겉모습만으로 단정하기는 어렵습니다. 정확한 구분은 진료와 검사가 필요하며 치료 계획도 달라질 수 있습니다.',
  },
  {
    q: '지방종은 꼭 제거해야 하나요?',
    a: '통증이 없고 작으면 경과 관찰이 가능한 경우도 있습니다. 크기가 커지거나 압박감·미용적 불편이 있으면 제거를 고려하며, 빠르게 커지면 다른 병변 감별이 필요할 수 있습니다. 개인 상태에 따라 치료 시기가 달라지므로 진료에서 상의하는 것이 좋습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '지방종 제거는 당일 가능한가요?',
    a: '크기·위치·감염 여부를 보고 당일 시술을 검토할 수 있습니다. 모든 경우에 당일 제거가 보장되지는 않으며, 큰 병변이나 특수 위치는 일정을 나누기도 합니다. 진료 후 방법과 회복 일정을 안내드리며, 개인 상태에 따라 계획이 달라집니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '시술 후 흉터가 남나요?',
    a: '절개 크기와 부위에 따라 흉터 정도는 달라질 수 있습니다. 작은 절개로 진행해도 개인별 회복 차이가 있고, 흉터가 전혀 없다고 단정하기는 어렵습니다. 관리 방법과 실밥 제거 시기는 시술 후 안내드리며, 궁금한 점은 진료에서 확인해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '지방종은 악성으로 변하나요?',
    a: '일반적인 지방종은 양성인 경우가 많습니다. 빠르게 커지거나 통증이 생기면 다른 병변을 감별해야 하며, 필요하면 조직 검사로 확인합니다. 자가 판단으로 방치하기보다 변화가 있으면 진료를 받는 것이 안전하고, 치료 여부도 함께 상의할 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '여러 개의 지방종도 한 번에 제거하나요?',
    a: '위치와 개수, 마취 범위에 따라 한 번에 또는 나눠 진행할 수 있습니다. 큰 병변은 별도 계획이 필요할 수 있고, 회복과 흉터를 고려해 우선순위를 정합니다. 진료에서 불편한 부위부터 상의하시면 현실적인 일정을 안내드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  }
]

export default function Page() {
  const symptoms = ["피부 아래 부드럽고 말랑한 혹이 만져짐","이동성이 있어 손으로 밀면 움직임","대부분 통증 없음","크기 2cm 이상이면 압박감 발생","감염 시 통증·발적·열감 동반"]
  const treatments = [{"name":"국소마취 후 절제","desc":"작은 절개로 지방종을 제거하는 방법입니다. 상태에 따라 당일 시술 후 봉합하고 귀가하는 경우가 있습니다."},{"name":"최소침습 절제","desc":"지방종보다 작은 절개로 내부를 제거하는 방법을 고려할 수 있습니다. 흉터 정도는 개인과 부위에 따라 달라집니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/medical/skin/common/skin-clinic-image-01.webp" alt="지방종 진료 안내 이미지" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 피부종양센터 / 지방종</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Lipoma</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">지방종</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">피부 아래 지방 세포가 뭉쳐 생기는 양성 종양</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '지방종이란', label: '지방종이란?' },
            { id: '증상-및-진료-대상', label: '증상 및 진료 대상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="지방종이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 지방종이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">지방종은 피부 아래 지방 세포가 비정상적으로 증식하여 덩어리를 형성하는 양성 종양입니다. 등·목·어깨·팔·복부에 가장 흔하며, 부드럽고 이동성이 있습니다. 대부분 통증이 없으나 저절로 사라지지 않으므로 크기가 커지거나 불편감이 생기면 제거를 고려합니다.</p>

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
          <Link href="/skin/cyst" className="text-primary font-bold hover:underline">피지낭종</Link>,{' '}
          <Link href="/skin/fibroma" className="text-primary font-bold hover:underline">연성섬유종</Link>,{' '}
          <Link href="/skin" className="text-primary font-bold hover:underline">피부종양센터</Link>
        </p>
        <MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/skin/lipoma/lipoma-ultrasound.webp', caption: '지방종 초음파', clinical: true },
            { src: '/images/medical/skin/lipoma/lipoma-specimen.webp', caption: '지방종 조직사진', clinical: true },
          ]}
        />

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[15px] mb-2">지방종은 감염 전에 제거하면 간단합니다. 크기가 커지기 전에 내원하세요.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
