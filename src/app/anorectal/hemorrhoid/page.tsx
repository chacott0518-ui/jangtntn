import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import MedicalImageGallery, { OfficialSource, PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = {
  title: '치핵(치질) | 장튼튼항외과의원',
  description:
    '치핵(치질)의 단계별 증상과 보존·시술·수술 치료 안내. 김포 구래역 장튼튼항외과의원에서 외과전문의가 직접 진찰합니다.',
  keywords: '치질, 치핵, 치질진료, 치질치료, 치질수술, 치핵치료, 치핵수술, 김포 치질, 김포 치핵, 김포 치질수술, 구래동 치질, 구래역 치질병원',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/hemorrhoid' },
  openGraph: {
    title: '치핵(치질) | 장튼튼항외과의원',
    description:
      '치핵(치질)의 단계별 증상과 보존·시술·수술 치료 안내. 김포 구래역 장튼튼항외과의원에서 외과전문의가 직접 진찰합니다.',
    url: 'https://www.jangtntnhang.com/anorectal/hemorrhoid',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    q: '치핵과 치질은 같은 말인가요?',
    a: '네, 일상에서 말하는 치질은 대개 치핵을 가리키는 표현입니다. 다만 항문 질환에는 치열·치루·농양 등도 있어 출혈이나 통증만으로 구분하기 어렵습니다. 증상 정도와 생활습관은 개인마다 달라 항문 진찰로 정확히 확인한 뒤 치료 방향을 상담하는 것이 안전합니다.',
  },
  {
    q: '배변 시 피가 나오면 치핵인가요?',
    a: '선홍색 출혈은 치핵에서 흔하지만 치열이나 대장·직장 질환에서도 나타날 수 있습니다. 출혈량, 통증 유무, 잔변감은 사람마다 다르게 느껴집니다. 원인을 감별하려면 항문 진찰이 필요하며 상황에 따라 대장내시경도 함께 검토할 수 있어, 증상만으로 단정하지 않는 것이 좋습니다.',
  },
  {
    q: '치핵은 무조건 수술해야 하나요?',
    a: '아닙니다. 1~2도 치핵은 좌욕·식이·약물 등 보존 치료로 호전되는 경우가 많습니다. 3~4도이거나 반복 출혈·감돈이 있으면 시술·수술을 검토합니다. 단계와 생활습관이 달라 치료 방침은 진찰 후 개인별로 결정하며, 같은 증상이라도 계획이 달라질 수 있습니다.',
  },
  {
    q: 'PPH 수술은 어떤 경우에 고려하나요?',
    a: '내치핵이 크거나 다발성인 3~4도에서 주로 검토하는 방법입니다. 자동문합기로 점막을 절제·문합하며, 적응증과 회복 양상은 개인마다 다릅니다. 적합한지 여부는 항문 진찰과 상담을 통해 안내드리며 다른 수술법과 비교해 선택할 수 있습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

export default function HemorrhoidPage() {
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/tour/03-consultation-room.webp" alt="치핵 단계별 진단과 치료 안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3 flex items-center gap-1.5">
            <span>홈</span><span>/</span><span>대장항문센터</span><span>/</span>
            <span className="text-[#0d1117] font-bold">치핵</span>
          </nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Hemorrhoid</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">치핵 <span className="text-[#6b7280] text-[20px] font-bold">(치질)</span></h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">가장 흔한 항문 질환 · 단계별 맞춤 치료</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-3">핵심요약</h2>
          <p className="text-[14px] text-[#374151] leading-[1.9] break-keep">
            치핵은 항문 혈관 조직이 늘어나거나 돌출되는 질환으로, 출혈·돌출감이 대표 증상입니다. 단계에 따라 보존 치료부터 시술·수술까지 상담하며, 치료 방침은 진찰 후 개인별로 결정됩니다.
          </p>
        </section>

        <PageToc
          items={[
            { id: 'what-is', label: '치핵이란 무엇인가요?' },
            { id: 'causes', label: '치핵의 주요 원인' },
            { id: 'stages', label: '치핵의 단계별 증상' },
            { id: 'treatment', label: '치료 방법' },
            { id: 'aftercare', label: '수술 후 관리' },
            { id: 'images', label: '관련 이미지' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section id="what-is" className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>💡</span> 치핵이란 무엇인가요?
          </h2>
          <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
            <p>치핵은 항문 안쪽의 혈관 조직(치핵 쿠션)이 비정상적으로 늘어나거나 돌출되는 질환입니다. 성인의 약 <strong className="text-[#0d7fc4]">75%</strong>가 일생에 한 번 이상 경험할 정도로 흔하며, 항문 출혈이나 돌출감이 대표 증상입니다.</p>
            <p>발생 위치에 따라 치상선 위쪽의 <strong>내치핵</strong>과 아래쪽의 <strong>외치핵</strong>으로 나뉩니다. 내치핵은 통증보다 출혈이 주요 증상이며, 외치핵은 통증과 불쾌감이 심합니다. 두 가지가 함께 나타나는 혼합치핵도 흔합니다.</p>
            <p>초기에는 생활습관 교정과 약물로 호전되지만, 3~4도로 진행되면 수술이 필요합니다. 참지 말고 조기에 치료하는 것이 중요합니다.</p>
          </div>
        </section>

        <section id="causes" className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>🔍</span> 치핵의 주요 원인
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {icon:'💺', title:'장시간 좌위', desc:'하루 8시간 이상 앉아 있는 직업은 항문 혈관에 지속적인 압력을 줍니다.'},
              {icon:'🚽', title:'변비·설사 반복', desc:'과도한 힘주기, 잦은 배변 자극이 항문 혈관 조직을 약하게 만듭니다.'},
              {icon:'🤰', title:'임신·출산', desc:'자궁이 커지면서 복압이 증가하고 항문 혈관이 팽창합니다.'},
              {icon:'🍺', title:'음주·자극적 음식', desc:'알코올과 매운 음식은 항문 혈관을 확장시켜 증상을 악화합니다.'},
              {icon:'📱', title:'화장실 장시간 사용', desc:'스마트폰을 보며 장시간 앉으면 항문에 압력이 집중됩니다.'},
              {icon:'🧬', title:'유전적 요인', desc:'가족 중 치핵 환자가 있으면 발생 가능성이 높아집니다.'},
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-[#f8fafb]">
                <span className="text-[22px] shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-[13px] font-bold text-[#0d1117] mb-1">{item.title}</h3>
                  <p className="text-[12px] text-[#6b7280] leading-[1.8]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="stages" className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>📊</span> 치핵의 단계별 증상
          </h2>
          <div className="space-y-3">
            {[
              {stage:'1도', color:'#22c55e', title:'출혈만 있는 단계', desc:'배변 시 선홍색 출혈이 있지만 돌출은 없습니다. 약물 치료와 생활습관 교정으로 호전 가능합니다.'},
              {stage:'2도', color:'#eab308', title:'배변 시 돌출 후 자연 복귀', desc:'배변 시 항문 밖으로 나오지만 저절로 들어갑니다. 약물 치료 또는 고무밴드 결찰이 가능합니다.'},
              {stage:'3도', color:'#f97316', title:'손으로 밀어 넣어야 복귀', desc:'항문 밖으로 나온 치핵이 저절로 들어가지 않아 손으로 밀어야 합니다. 수술 권장됩니다.'},
              {stage:'4도', color:'#ef4444', title:'항상 돌출 · 환납 불가', desc:'항상 치핵이 밖에 나와 있고 밀어도 들어가지 않습니다. 반드시 수술이 필요합니다.'},
            ].map((s) => (
              <div key={s.stage} className="flex gap-4 p-4 lg:p-5 rounded-xl bg-[#f8fafb]">
                <span className="text-[12px] font-black px-2.5 py-1 rounded-lg text-white shrink-0 h-fit" style={{background:s.color}}>{s.stage}</span>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0d1117] mb-1">{s.title}</h3>
                  <p className="text-[13px] text-[#6b7280] leading-[1.85]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="treatment" className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>⚕️</span> 치료 방법
          </h2>
          <div className="space-y-3">
            {[
              {title:'보존적 치료', badge:'1~2도', color:'#22c55e', desc:'좌욕(1일 3회, 미온수 5~10분), 식이섬유, 수분 2L, 연고·좌약으로 증상 완화.'},
              {title:'고무밴드 결찰', badge:'2도', color:'#eab308', desc:'치핵 기저부에 고무밴드를 묶어 혈류를 차단하는 외래 시술.'},
              {title:'PPH 수술', badge:'3~4도', color:'#0d7fc4', desc:'자동문합기로 치핵 위쪽 점막 절제·봉합. 상태에 따라 당일 퇴원을 검토할 수 있습니다.'},
              {title:'치핵 절제술', badge:'3~4도', color:'#0d9488', desc:'치핵 조직 직접 절제. 완전 제거로 재발률이 낮습니다.'},
            ].map((t) => (
              <div key={t.title} className="flex gap-3 items-start">
                <span className="text-[11px] font-bold text-white px-2 py-0.5 rounded-full shrink-0 mt-0.5" style={{background:t.color}}>{t.badge}</span>
                <div>
                  <h3 className="text-[13px] font-bold text-[#0d1117]">{t.title}</h3>
                  <p className="text-[12px] text-[#6b7280] leading-[1.8]">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="aftercare" className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>🌿</span> 수술 후 관리
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['상태에 따라 당일 또는 다음 날 퇴원을 검토할 수 있습니다','좌욕 1일 3회 이상 — 미온수, 5~10분','수분 하루 2L 이상 + 식이섬유 충분히','격렬한 운동·음주·자극적 음식 2~3주 자제','변비 예방이 재발 방지의 핵심','이상 출혈·발열 시 즉시 내원'].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-[#f0f7ff]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 mt-0.5" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                <p className="text-[13px] text-[#374151] leading-[1.8]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-[14px] text-[#374151] leading-[1.9] break-keep">
          관련 진료:{' '}
          <Link href="/pph" className="text-primary font-semibold underline-offset-2 hover:underline">PPH</Link>,{' '}
          <Link href="/anorectal/fissure" className="text-primary font-semibold underline-offset-2 hover:underline">치열</Link>,{' '}
          <Link href="/endoscopy/colon" className="text-primary font-semibold underline-offset-2 hover:underline">대장내시경</Link>,{' '}
          <Link href="/about/info" className="text-primary font-semibold underline-offset-2 hover:underline">진료안내</Link>
        </p>

        <div id="images">
          <MedicalImageGallery
            title="관련 이미지"
            items={[
              { src: '/images/medical/anorectal/hemorrhoid/hemorrhoid-diagram.webp', caption: '치핵모식도' },
              { src: '/images/medical/anorectal/hemorrhoid/hemorrhoid-before.webp', caption: '치핵수술 전', clinical: true },
              { src: '/images/medical/anorectal/hemorrhoid/hemorrhoid-after.webp', caption: '치핵수술 후', clinical: true },
              { src: '/images/medical/anorectal/hemorrhoid/hemorrhoid-excised-tissue.webp', caption: '절제된 치핵 조직', clinical: true },
            ]}
          />
        </div>

        <OfficialSource
          sources={['보건복지부', '대한의학회']}
          note="위 치핵모식도는 보건복지부·대한의학회 자료에 표기된 출처를 따릅니다."
        />

        <StaticFaq items={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />

        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치핵, 참지 마세요</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">초기에 치료할수록 간단하고 빠르게 해결됩니다.<br />장튼튼항외과의원 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>

      </div>
    </div>
  )
}
