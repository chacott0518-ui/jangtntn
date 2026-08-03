import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '상처 치료 | 장튼튼항외과의원',
  description: '김포 구래역 상처 처치·봉합 안내. 깊은 열상·오염 상처·물린 상처는 빠른 진료가 필요할 수 있습니다.',
  keywords: '상처봉합, 외상처치, 외래수술, 김포 상처봉합',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery/wound' },
  openGraph: {
    title: '상처 치료 | 장튼튼항외과의원',
    description: '김포 구래역 상처 처치·봉합 안내. 깊은 열상·오염 상처·물린 상처는 빠른 진료가 필요할 수 있습니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '어떤 상처는 바로 병원에 가야 하나요?',
    a: '출혈이 멈추지 않거나, 깊고, 이물질이 들어 있거나, 동물·사람에게 물린 상처는 빨리 진료가 필요합니다. 감각이 없거나 관절 주변이면 더 주의해야 하며, 애매해도 지체하지 말고 확인하세요. 가정 처치만으로 미루면 감염 위험이 커질 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '상처는 몇 시간 안에 봉합해야 하나요?',
    a: '일반적으로 이른 시간 내 처치가 감염 예방에 도움이 됩니다. 오염 정도와 부위에 따라 봉합 가능 시간이 달라질 수 있으며, 늦었더라도 세척·배농이 필요할 수 있습니다. 시간이 지났어도 내원해 주시면 상태에 맞는 처치를 안내드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '봉합 후 흉터가 남지 않나요?',
    a: '올바른 처치가 흉터를 줄이는 데 도움이 될 수 있습니다. 부위·깊이·감염 여부와 개인 회복에 따라 흔적이 남을 수 있으며, 흉터가 전혀 없다고 단정하기는 어렵습니다. 실밥 제거와 상처 관리 안내를 따라 주시면 회복에 도움이 됩니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '파상풍 주사가 필요한가요?',
    a: '상처 오염도와 최근 파상풍 접종력을 보고 필요 여부를 판단합니다. 녹슨 물건·흙이 묻은 상처는 특히 확인이 필요하며, 접종 기록이 불확실하면 진료에서 상의합니다. 개인 접종력에 따라 안내가 달라질 수 있어 미리 알고 계시면 도움이 됩니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '드레싱은 집에서 어떻게 관리하나요?',
    a: '안내받은 간격으로 소독·드레싱을 유지하는 것이 중요합니다. 고름·발열·심한 발적이 있으면 바로 내원해야 하며, 임의로 연고를 바꾸거나 상처를 억지로 건조시키지 마세요. 샤워 가능 여부와 활동 제한도 상처마다 다를 수 있어 안내를 확인해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '화상과 상처 치료는 다른가요?',
    a: '열상·자상과 화상은 손상 기전이 달라 처치가 다를 수 있습니다. 다만 세척·감염 예방·드레싱 원칙은 겹치며, 복합 손상이면 함께 평가합니다. 화상 관련 안내도 참고할 수 있고, 구체적인 방법은 내원 후 상태에 맞게 설명드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  }
]

export default function Page() {
  const symptoms = ["출혈이 멈추지 않거나 깊이가 깊은 상처","흙·녹 등 이물질이 포함된 오염 상처","동물·사람에게 물린 상처","통증이 심하거나 감각이 없는 상처","수일 후에도 낫지 않고 고름이 생기는 경우"]
  const treatments = [{"name":"세척 및 변연 절제","desc":"상처 내 오염 물질과 괴사 조직을 제거하여 감염 위험을 낮추는 데 도움이 됩니다."},{"name":"봉합술","desc":"상처 크기와 위치에 따라 단순·피하·특수 봉합을 시행합니다."},{"name":"습윤 드레싱","desc":"상처 상태에 맞는 드레싱 재료로 치유 환경을 만듭니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/05-recovery-room.webp" alt="상처 치료 안내 이미지" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 기타외과질환 / 상처 치료</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Wound Care</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">상처 치료</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">급·만성 상처의 전문적 처치와 봉합</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '상처-치료이란', label: '상처 치료이란?' },
            { id: '증상-및-진료-대상', label: '증상 및 진료 대상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="상처-치료이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 상처 치료이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">상처 치료는 단순 찰과상부터 깊은 열상, 만성 상처까지 외과전문의가 직접 처치하는 진료입니다. 적절한 시간 내에 제대로 처치하지 않으면 감염·흉터·기능 장애로 이어질 수 있습니다. 특히 손·발·관절 주변, 오염된 상처, 깊은 열상은 전문 처치가 필요합니다.</p>
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
          <Link href="/surgery/burn" className="text-primary font-bold hover:underline">화상 치료</Link>,{' '}
          <Link href="/surgery/nail" className="text-primary font-bold hover:underline">내성발톱</Link>,{' '}
          <Link href="/about/info" className="text-primary font-bold hover:underline">진료안내</Link>
        </p>
        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[15px] mb-2">상처는 골든타임 내에 올바른 처치가 회복에 도움이 됩니다. 빨리 내원하세요.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
