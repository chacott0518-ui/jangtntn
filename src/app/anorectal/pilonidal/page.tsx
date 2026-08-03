import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '모소동 | 장튼튼항외과의원',
  description:
    '모소동(꼬리뼈 부위 낭종·누공)의 증상과 절개·절제 치료 안내. 앉을 때 통증·분비물이 있으면 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/pilonidal' },
  openGraph: {
    title: '모소동 | 장튼튼항외과의원',
    description:
      '모소동(꼬리뼈 부위 낭종·누공)의 증상과 절개·절제 치료 안내. 앉을 때 통증·분비물이 있으면 김포 구래역 장튼튼항외과의원에서 진찰받을 수 있습니다.',
    url: 'https://www.jangtntnhang.com/anorectal/pilonidal',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '모소동은 항문 질환과 같은가요?',
    a: '꼬리뼈 위쪽 엉덩이 틈새에 생기는 질환으로, 항문 안쪽 질환과는 위치가 다릅니다. 분비물·통증이 비슷하게 느껴질 수 있어 치루와 혼동하기 쉽습니다. 정확한 위치와 범위는 진찰로 확인하며 치료 계획도 개인 상태에 맞게 세웁니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '농양이 생겼을 때 바로 수술이 필요한가요?',
    a: '급성기에는 먼저 절개 배농으로 통증을 완화하는 경우가 많습니다. 이후 낭종·누공 경로에 대한 근치 치료를 계획하며, 염증이 심한 정도에 따라 시기가 달라집니다. 진행 정도와 염증 상태는 개인마다 달라 단계적으로 상의합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '모소동은 왜 재발하나요?',
    a: '털·습기·마찰이 남는 부위의 특성상 재발 위험이 있습니다. 수술 범위와 이후 위생·제모 관리에 따라 차이가 나며, 같은 수술을 받아도 경과가 다를 수 있습니다. 개인별 위험 요인을 진료에서 확인하고 예방 방법을 안내합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '피판 수술은 언제 고려하나요?',
    a: '병변이 넓거나 단순 절제만으로 봉합이 어려운 경우 검토할 수 있습니다. 모든 모소동에 동일한 방법이 적용되지는 않으며, 재발 병변에서도 선택적으로 사용됩니다. 병변 크기와 재발 여부를 보고 방법을 결정하고 회복 과정을 설명드립니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '오래 앉아 일하는 직업과 관련이 있나요?',
    a: '장시간 좌위와 마찰은 모소동 발생·악화와 연관될 수 있습니다. 체형·체모·위생 습관도 함께 영향을 주며, 직업만으로 진단이 정해지지는 않습니다. 직업 환경에 맞는 관리법을 상담에서 안내드리며 필요 시 수술 일정도 함께 상의합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '수술 후 일상 복귀는 언제쯤인가요?',
    a: '상처 치유 속도와 수술 방법에 따라 복귀 시점이 달라집니다. 앉는 자세와 활동량을 조절해야 하는 기간이 있을 수 있으며, 직장 복귀도 개인차가 큽니다. 경과를 보며 개인별 일정을 상의하니 평균 기간만으로 계획을 세우지 않는 것이 좋습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

export default function Page() {
  const symptoms = ["꼬리뼈 위쪽 정중선의 통증·부종·발적","구멍에서 분비물·고름 배출","급성 감염 시 심한 통증과 발열","만성기에는 간헐적 분비물 지속","앉거나 움직일 때 통증 악화"]
  const treatments = [{"name":"절개 배농","desc":"급성 농양기에 즉각적으로 고름을 배출하여 통증을 완화합니다."},{"name":"근치적 절제술","desc":"낭종과 누공 경로를 완전히 절제. 재발 예방에 가장 효과적입니다."},{"name":"피판 수술","desc":"Limberg flap 등 넓은 범위를 재건하는 수술법입니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/03-consultation-room.webp" alt="모소동 꼬리뼈 부위 진료 안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 대장항문센터 / <strong>모소동</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Pilonidal Sinus</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">모소동</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">꼬리뼈 부위 모낭 감염으로 생기는 낭종 및 누공</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '모소동이란', label: '모소동이란?' },
            { id: '주요-증상', label: '주요 증상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="모소동이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 모소동이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">모소동(Pilonidal Sinus)은 꼬리뼈 부위 피부 아래에 털이 박혀 들어가거나 모낭이 감염되면서 낭종과 누공이 형성되는 질환입니다. 20~30대 남성, 특히 털이 많고 장시간 앉아 있는 분들에게 많이 발생하며, 재발이 잦으므로 완전한 수술적 제거가 중요합니다.</p>

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
          <Link href="/anorectal/fistula" className="text-primary font-semibold underline-offset-2 hover:underline">치루</Link>,{' '}
          <Link href="/about/surgery" className="text-primary font-semibold underline-offset-2 hover:underline">수술 안내</Link>,{' '}
          <Link href="/about/aftercare" className="text-primary font-semibold underline-offset-2 hover:underline">수술 후 주의사항</Link>
        </p>

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />

        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">수술 후 해당 부위 제모와 청결 유지가 재발 예방의 핵심입니다.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>
      </div>
    </div>
  )
}
