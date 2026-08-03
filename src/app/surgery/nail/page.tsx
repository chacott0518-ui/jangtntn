import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '내성발톱 | 장튼튼항외과의원',
  description: '김포 구래역 내성발톱 진료. 외래 시술과 회복 기간은 염증·감염 정도에 따라 달라질 수 있습니다.',
  keywords: '내성발톱, 내성발톱치료, 김포 내성발톱치료',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery/nail' },
  openGraph: {
    title: '내성발톱 | 장튼튼항외과의원',
    description: '김포 구래역 내성발톱 진료. 외래 시술과 회복 기간은 염증·감염 정도에 따라 달라질 수 있습니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '내성발톱은 외래에서 치료하나요?',
    a: '많은 경우 국소마취 후 외래 시술로 진행합니다. 다만 감염·부종 정도에 따라 일정이 달라질 수 있고, 회복 속도도 개인차가 있어 일률적으로 말하기 어렵습니다. 시술 후 보행과 신발 선택도 안내드리니 일상 계획을 함께 상의하시면 좋습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '시술 후 바로 걸을 수 있나요?',
    a: '대개 조심스럽게 보행은 가능하지만, 당일·수일은 편한 신발을 권합니다. 통증과 부종은 개인마다 다르며, 회복 기간은 염증 정도와 시술 범위에 따라 달라집니다. 무리한 운동이나 꽉 끼는 신발은 피하고, 안내받은 드레싱을 유지해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '조모세포 파괴술을 하면 재발하지 않나요?',
    a: '발톱 뿌리 일부를 처리해 재발 가능성을 낮추는 방법입니다. 다만 재발이 전혀 없다고 보장하기는 어렵고, 발톱 자르기 습관과 신발도 함께 관리하는 것이 중요합니다. 개인 발톱 모양에 따라 추가 관리가 필요할 수 있어 추적 진료를 권합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '초기에도 수술이 필요한가요?',
    a: '초기에는 솜·테이프 교정 등 보존적 방법을 먼저 시도하는 경우가 있습니다. 통증·화농이 심하면 절제가 필요할 수 있으며, 상태를 보고 단계적으로 안내합니다. 조기에 진료하면 치료 범위를 줄이는 데 도움이 될 수 있지만 개인차는 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '당뇨가 있어도 치료받을 수 있나요?',
    a: '당뇨 환자는 감염·상처 치유에 주의가 필요합니다. 혈당 조절 상태와 발가락 순환을 함께 확인하며, 개인 상태에 따라 치료 계획이 달라질 수 있습니다. 발 감각이 둔하거나 상처가 잘 안 아물면 더 세심한 관리가 필요하니 미리 알려 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '발톱은 어떻게 자르는 게 좋나요?',
    a: '둥글게 자르기보다 일자로 자르는 습관이 예방에 도움이 됩니다. 너무 짧게 자르면 살이 덮이기 쉽고, 이미 파고든 상태에서 깊게 깎으면 염증이 악화될 수 있습니다. 통증이 있으면 임의로 깊게 깎지 말고 진료를 받는 것이 안전합니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  }
]

export default function Page() {
  const symptoms = ["발톱 가장자리 부위 통증과 압통","발가락 끝의 발적·부종","걷거나 신발 신을 때 심한 통증","화농(고름)이 생기는 경우","만성화 시 육아종 형성"]
  const treatments = [{"name":"보존적 교정","desc":"초기 내성발톱에 솜·테이프로 발톱을 올바른 방향으로 유도합니다."},{"name":"발톱 일부 절제","desc":"국소마취 후 파고드는 발톱 가장자리를 절제하여 통증을 줄이는 방법입니다. 외래 시술로 진행하는 경우가 많으며 회복은 개인차가 있습니다."},{"name":"조모세포 파괴술","desc":"페놀 등으로 발톱 뿌리 일부를 처리해 재발 가능성을 낮추는 방법입니다. 재발이 전혀 없다고 단정하기는 어렵습니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/05-recovery-room.webp" alt="내성발톱 진료 안내 이미지" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 기타외과질환 / 내성발톱</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Ingrown Toenail</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">내성발톱</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">발톱이 살을 파고드는 통증과 염증의 근본 치료</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '내성발톱이란', label: '내성발톱이란?' },
            { id: '증상-및-진료-대상', label: '증상 및 진료 대상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="내성발톱이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 내성발톱이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">내성발톱(내향성 발톱)은 발톱 가장자리가 주변 피부를 파고들어 통증·염증·화농이 발생하는 질환입니다. 주로 엄지발가락에 생기며 잘못된 발톱 자르기(둥글게), 꽉 끼는 신발, 외상, 유전적 발톱 모양이 원인입니다. 당뇨 환자에서는 특히 주의가 필요합니다.</p>
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
          <Link href="/surgery/wound" className="text-primary font-bold hover:underline">상처 치료</Link>,{' '}
          <Link href="/surgery" className="text-primary font-bold hover:underline">기타외과질환</Link>,{' '}
          <Link href="/about/info" className="text-primary font-bold hover:underline">진료안내</Link>
        </p>
        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[15px] mb-2">발톱을 일자로 자르는 습관이 예방의 핵심입니다. 조기 치료가 간단합니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
