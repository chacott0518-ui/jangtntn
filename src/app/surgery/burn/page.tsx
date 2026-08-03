import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '화상 치료 | 장튼튼항외과의원',
  description: '김포 구래역 화상 진료. 깊이·범위에 따른 처치 안내. 넓은 화상·깊은 화상은 응급 진료가 필요할 수 있습니다.',
  keywords: '화상치료, 김포 화상치료',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery/burn' },
  openGraph: {
    title: '화상 치료 | 장튼튼항외과의원',
    description: '김포 구래역 화상 진료. 깊이·범위에 따른 처치 안내. 넓은 화상·깊은 화상은 응급 진료가 필요할 수 있습니다.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '화상을 입으면 바로 어떻게 해야 하나요?',
    a: '흐르는 차가운 물로 15~20분 식힌 뒤 진료를 받는 것이 좋습니다. 얼음·간장·된장·치약 등 민간요법은 감염과 추가 손상을 유발할 수 있어 피해야 합니다. 물집은 임의로 터뜨리지 말고, 깨끗한 거즈로 덮은 뒤 내원해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '언제 급히 병원에 가야 하나요?',
    a: '물집이 넓거나, 얼굴·손·성기·관절을 침범하거나, 3도처럼 깊은 손상이 의심되면 빨리 진료가 필요합니다. 넓은 범위 화상은 탈수·쇼크 위험이 있어 지체하면 위험할 수 있습니다. 상태가 애매해도 확인하는 것이 안전하며, 아이·고령자는 더 주의가 필요합니다.',
  },
  {
    q: '1도·2도·3도 화상은 어떻게 다른가요?',
    a: '1도는 발적과 통증이 주되고, 2도는 물집과 심한 통증이 동반되는 경우가 많습니다. 3도는 피부 괴사와 함께 통증이 오히려 적을 수 있어 깊이를 겉만으로 단정하기 어렵습니다. 정확한 깊이는 진료에서 평가하며, 경과에 따라 등급 판단이 달라질 수 있습니다.',
  },
  {
    q: '화상 후 흉터가 남지 않나요?',
    a: '깊이·범위·감염 여부에 따라 흉터 정도가 달라집니다. 초기 처치가 회복에 도움이 될 수 있지만, 흉터가 전혀 없다고 단정하기는 어렵습니다. 개인별 회복 차이를 안내드리며, 가려움·당김이 오래가면 추가 상담이 필요할 수 있습니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '드레싱은 얼마나 자주 하나요?',
    a: '화상 깊이와 삼출량에 따라 간격이 달라집니다. 감염 징후가 있으면 더 자주 확인이 필요할 수 있고, 가정에서 임의로 연고를 바꾸기보다 안내를 따르는 것이 좋습니다. 발열·심한 냄새·고름이 보이면 예정된 방문일보다 빨리 내원해 주세요. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  },
  {
    q: '상처 치료와도 함께 볼 수 있나요?',
    a: '화상과 일반 열상은 처치 원칙이 겹치는 부분이 있습니다. 부위와 오염 정도에 따라 봉합·드레싱이 달라질 수 있으며, 복합 손상이면 함께 평가합니다. 관련 진료 페이지도 참고하시고, 구체적인 방법은 내원 후 상태에 맞게 안내드립니다. 개인 상태에 따라 안내가 달라질 수 있습니다.',
  }
]

export default function Page() {
  const symptoms = ["1도: 발적·통증만 있고 물집 없음","2도: 물집 형성, 심한 통증, 축축한 피부","3도: 피부 괴사, 통증 없음 (신경 손상)","화상 부위 부종과 열감","넓은 범위 화상 시 탈수·쇼크 위험"]
  const treatments = [{"name":"응급 처치","desc":"흐르는 차가운 물로 15~20분 냉각 후 내원. 얼음 사용 금지. 물집은 터뜨리지 마세요."},{"name":"드레싱 치료","desc":"화상 깊이와 범위에 따라 실버 드레싱, 하이드로콜로이드 등 적절한 재료를 사용합니다."},{"name":"피부 이식","desc":"3도 이상 깊은 화상은 자가 피부 이식이 필요할 수 있습니다."}]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/05-recovery-room.webp" alt="화상 치료 안내 이미지" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">홈 / 기타외과질환 / 화상 치료</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Burn Treatment</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">화상 치료</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">화상 정도에 따른 단계별 전문 치료</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <PageToc
          items={[
            { id: '화상-치료이란', label: '화상 치료이란?' },
            { id: '증상-및-진료-대상', label: '증상 및 진료 대상' },
            { id: '치료-방법', label: '치료 방법' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="화상-치료이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 화상 치료이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">화상은 열·화학물질·전기·방사선 등에 의해 피부와 조직이 손상되는 손상입니다. 화상의 심각도는 깊이(1~3도)와 범위로 판단합니다. 올바른 초기 처치와 전문 치료가 회복에 도움이 됩니다. 민간요법(간장·된장·치약 등)은 감염을 일으킬 수 있어 피해야 합니다.</p>
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
          <p className="text-white font-black text-[15px] mb-2">화상은 즉시 차가운 물로 식힌 후 병원으로 오세요.</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과의원 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
