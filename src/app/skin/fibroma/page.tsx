import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '연성섬유종 | 장튼튼항외과의원',
  description: '김포 구래역 연성섬유종(쥐젖) 진료. 마찰 부위에 생기는 돌기 제거 방법을 상태에 맞게 안내합니다.',
  keywords: '쥐젖제거, 연성섬유종제거, 김포 쥐젖제거',
  alternates: { canonical: 'https://www.jangtntnhang.com/skin/fibroma' },
  openGraph: {
    title: '연성섬유종 | 장튼튼항외과의원',
    description: '김포 구래역 연성섬유종(쥐젖) 진료. 마찰 부위에 생기는 돌기 제거 방법을 상태에 맞게 안내합니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '연성섬유종(쥐젖)은 위험한가요?',
    a: '대개 양성 피부 병변으로, 악성으로 변하지 않는 경우가 많습니다. 다만 옷이나 장신구에 걸려 통증·출혈이 생길 수 있고, 빠르게 커지거나 색이 변하면 다른 병변을 감별해야 합니다. 변화가 있으면 진료로 확인하는 것이 안전하며 필요 시 제거할 수 있습니다.',
  },
  {
    q: '제거 방법은 어떤 것이 있나요?',
    a: '전기소작, 외과적 절제, 냉동 치료 등을 상태에 따라 고려합니다. 크기와 개수, 위치에 따라 방법이 달라지며, 한 가지 방법만 모든 경우에 맞지는 않습니다. 진료 후 적합한 방식을 안내드리며, 회복과 흉터에 대한 기대도 함께 상의합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '여러 개를 한 번에 제거할 수 있나요?',
    a: '개수와 부위에 따라 한 번에 처리 가능한 경우가 있습니다. 너무 많으면 나눠 진행할 수도 있고, 피부 자극이 심한 부위는 회복을 고려해 계획을 조정합니다. 개인 피부 상태와 일상 일정을 보고 현실적인 범위를 안내드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '제거 후 흉터가 남나요?',
    a: '작은 병변은 흉터가 적은 편인 경우가 많습니다. 위치·크기·개인 회복에 따라 흔적이 남을 수 있으며, 흉터가 전혀 없다고 단정하기는 어렵습니다. 관리 방법을 안내드리니 따라 주시고, 붉거나 가려움이 오래가면 확인해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '다시 생길 수 있나요?',
    a: '제거한 병변 자체는 없어지지만, 마찰 부위에는 새로 생길 수 있습니다. 목·겨드랑이처럼 자극이 많은 곳이 특히 그러며, 재발 예방을 완전히 보장하기는 어렵습니다. 새로 돋아도 초기에 진료하면 처치 범위를 상의할 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '지방종·피지낭종과도 비슷한가요?',
    a: '연성섬유종은 피부 표면의 작은 돌기인 경우가 많고, 지방종·피지낭종은 피부 아래 혹에 가깝습니다. 겉모습만으로 혼동될 수 있어 정확한 구분은 진료가 필요합니다. 병변에 따라 치료 방법이 달라지므로 임의로 짜거나 자르지 않는 것이 좋습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  }
]

export default function Page() {
  const symptoms = ["피부 표면에 작은 살 조각 같은 돌기","목·겨드랑이·눈꺼풀에 주로 생김","옷·목걸이·브라끈에 걸려 통증 발생","크기는 보통 1~5mm, 살색~갈색","여러 개가 함께 발생하는 경우 많음"]
  const treatments = [{"name":"전기소작술","desc":"미세 전류로 연성섬유종 기저부를 소작해 제거하는 방법입니다. 통증과 흉터 정도는 개인·부위에 따라 달라집니다."},{"name":"외과적 절제","desc":"국소마취 후 가위나 메스로 절제합니다. 크기가 크거나 수가 많은 경우 고려할 수 있습니다."},{"name":"냉동 치료","desc":"액체 질소로 병변을 얼려 제거하는 방법입니다. 여러 개를 한 번에 처리하는 경우가 있습니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/medical/skin/common/skin-clinic-image-01.webp" alt="연성섬유종(쥐젖) 진료 안내 이미지" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 피부종양센터 / 연성섬유종</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Soft Fibroma</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">연성섬유종 (쥐젖)</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">마찰 부위에 주로 생기는 피부의 양성 종양</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '연성섬유종-쥐젖-이란', label: '연성섬유종 (쥐젖)이란?' },
            { id: '증상-및-진료-대상', label: '증상 및 진료 대상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="연성섬유종-쥐젖-이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 연성섬유종 (쥐젖)이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">연성섬유종(쥐젖)은 피부 표면에 작은 살 조각이 돌출되는 양성 피부 종양입니다. 목·겨드랑이·서혜부·눈꺼풀 등 마찰이 많은 부위에 주로 발생합니다. 악성으로 변하지 않는 경우가 많지만 옷이나 장신구에 걸려 통증이 생기기도 합니다.</p>
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
          <Link href="/skin/lipoma" className="text-primary font-bold hover:underline">지방종</Link>,{' '}
          <Link href="/skin/cyst" className="text-primary font-bold hover:underline">피지낭종</Link>,{' '}
          <Link href="/skin" className="text-primary font-bold hover:underline">피부종양센터</Link>
        </p>
        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[15px] mb-2">연성섬유종은 간단히 제거할 수 있습니다. 부담 없이 내원하세요.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
