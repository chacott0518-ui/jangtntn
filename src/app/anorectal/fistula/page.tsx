import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery, { OfficialSource, PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '치루 | 장튼튼항외과의원',
  description:
    '치루·항문 주위 농양의 증상과 수술 치료 안내. 분비물·반복 통증이 있을 때 김포 구래역 장튼튼항외과의원에서 외과전문의가 진찰합니다.',
  keywords: '치루, 항문농양, 항문주위농양, 치루치료, 치루수술, 항문농양치료, 항문농양수술, 김포 치루, 김포 항문농양',
  alternates: { canonical: 'https://jtntn.co.kr/anorectal/fistula' },
  openGraph: {
    title: '치루 | 장튼튼항외과의원',
    description:
      '치루·항문 주위 농양의 증상과 수술 치료 안내. 분비물·반복 통증이 있을 때 김포 구래역 장튼튼항외과의원에서 외과전문의가 진찰합니다.',
    url: 'https://jtntn.co.kr/anorectal/fistula',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '치루는 약만으로 나을 수 있나요?',
    a: '치루는 누공 경로가 남아 있어 약물만으로 완치를 기대하기 어렵습니다. 항생제는 급성 염증 완화에 도움이 될 수 있으나 근본 치료는 보통 수술입니다. 누공의 위치·깊이는 개인마다 달라 진찰 후 수술 방법을 상의하며 방치 시 경로가 복잡해질 수 있습니다.',
  },
  {
    q: '항문 주위 농양과 치루는 같은가요?',
    a: '농양은 급성 고름집이고, 치루는 농양 이후 남는 만성 터널인 경우가 많습니다. 농양만 배농해도 누공이 남으면 분비물이 반복될 수 있습니다. 상태 진행은 사람마다 달라 추적 진찰이 중요하며 필요하면 수술 시기를 함께 결정합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '치루 수술은 어떤 방식으로 하나요?',
    a: '저위·고위·복잡 치루에 따라 절개술, Seton법, 피판술 등을 검토합니다. 괄약근 침범 정도에 따라 방법이 달라지며 한 가지가 모두에게 맞지는 않습니다. 적합한 술은 항문 진찰과 필요 시 영상 검사 결과를 보고 개인별로 결정합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '수술 후 변실금이 생길 수 있나요?',
    a: '괄약근을 많이 침범한 치루에서는 기능 보존을 고려한 방법을 선택합니다. 위험도는 누공 경로와 개인 상태에 따라 다르며 모든 수술에서 동일한 것은 아닙니다. 수술 전 예상 경과와 주의사항을 충분히 설명드리고 상담하며 개인별 위험을 함께 검토합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '분비물이 계속 나오면 바로 와야 하나요?',
    a: '항문 주위 구멍에서 고름·분비물이 반복되면 치루를 의심할 수 있습니다. 방치하면 경로가 복잡해질 수 있어 조기 진찰이 도움이 됩니다. 통증·발열 동반 여부는 개인마다 달라 증상과 함께 확인하고 필요한 처치를 안내합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

export default function FistulaPage() {
  const treatments = [
    {name:'누공 절개술', badge:'저위 치루', desc:'누공 경로를 완전히 열어 제거합니다. 단순 저위 치루에 가장 많이 사용하며 치유율이 높습니다.'},
    {name:'Seton법', badge:'고위 치루', desc:'괄약근을 많이 침범한 경우 실을 통과시켜 서서히 절개합니다. 변실금 위험을 최소화합니다.'},
    {name:'점막 전진 피판술', badge:'복잡 치루', desc:'누공 내공을 막고 정상 점막으로 덮는 방법. 복잡 치루·재발 치루에 사용됩니다.'},
  ]
  const symptoms = [
    '항문 주위 피부에서 고름·분비물이 지속적으로 나옴',
    '항문 주위 통증, 불쾌감, 부종이 반복됨',
    '누공 입구 부위 피부 함몰 또는 구멍이 보임',
    '발열·오한이 동반되기도 함',
    '분비물로 인한 항문 소양증 및 피부 짓무름',
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/03-consultation-room.webp" alt="치루·항문주위농양 진료 안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 대장항문센터 / <strong>치루</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Anal Fistula</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">치루</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 주위 농양에서 발전하는 만성 누공 질환</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '치루란', label: '치루란?' },
            { id: '주요-증상', label: '주요 증상' },
            { id: '수술-방법', label: '수술 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="치루란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 치루란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>치루는 항문샘에 세균이 침입하여 항문 주위 농양이 형성되고, 이 농양이 터지면서 항문 내부와 항문 주위 피부를 연결하는 <strong className="text-[#0d7fc4]">비정상적인 터널(누공)</strong>이 생긴 상태입니다.</p>
              <p>치루는 저절로 낫지 않으며 반드시 수술로 제거해야 합니다. 방치하면 누공이 더 복잡하게 진행됩니다.</p>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="주요-증상">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🔍</span> 주요 증상</h2>
          <ul className="space-y-2">
            {symptoms.map((s, i) => (
              <li key={i} className="flex gap-3 p-3 rounded-xl bg-[#f8fafb] text-[13px] text-[#374151] leading-[1.85]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 mt-0.5" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                {s}
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="수술-방법">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>⚕️</span> 수술 방법</h2>
          <div className="space-y-3">
            {treatments.map((t) => (
              <div key={t.name} className="p-5 rounded-xl bg-[#f8fafb]">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[14px] font-bold text-[#0d1117]">{t.name}</h3>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t.badge}</span>
                </div>
                <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
                <p className="text-[14px] text-[#374151] leading-[1.9] break-keep">
          관련 진료:{' '}
          <Link href="/anorectal/hemorrhoid" className="text-primary font-semibold underline-offset-2 hover:underline">치핵</Link>,{' '}
          <Link href="/about/surgery" className="text-primary font-semibold underline-offset-2 hover:underline">수술 안내</Link>,{' '}
          <Link href="/about/aftercare" className="text-primary font-semibold underline-offset-2 hover:underline">수술 후 주의사항</Link>
        </p>

        <MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/anorectal/fistula/anal-abscess-fistula-diagram.webp', caption: '항문농양 및 치루 모식도' },
          ]}
        />
        <OfficialSource
          sources={['보건복지부', '대한의학회']}
          note="위 항문농양 및 치루 모식도는 보건복지부·대한의학회 자료에 표기된 출처를 따릅니다."
        />

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />

        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치루는 수술로만 완치됩니다</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">항문 주위에서 분비물이 나온다면 즉시 내원하세요.<br />조기 수술일수록 범위가 작고 회복이 빠릅니다.</p>
        </div>
      </div>
    </div>
  )
}
