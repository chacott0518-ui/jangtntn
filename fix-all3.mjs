import { writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'
function w(p, c) { mkdirSync(dirname(p), {recursive:true}); writeFileSync(p, c, 'utf8'); console.log('✓', p) }

// ── 공통 히어로 생성 함수 ──
function hero(breadcrumb, eng, title, sub, img) {
  return `
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="${img}" alt="${title}" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">${breadcrumb}</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2 uppercase">${eng}</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">${title}</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">${sub}</p>
        </div>
      </div>`
}

function closingBanner(title, msg) {
  return `
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">${title}</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">${msg}</p>
        </div>`
}

// ════════════════════════════════
// 치핵
// ════════════════════════════════
w('src/app/anorectal/hemorrhoid/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '치핵(치질) | 장튼튼항외과',
  description: '치핵(치질) 전문 치료. 1~4도 치핵 정확한 진단, 당일 수술 가능. 김포 구래역.',
  keywords: '치핵, 치질, 항문 출혈, 치핵 수술, 김포 치질, 내치핵, 외치핵, PPH',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/hemorrhoid' },
}

export default function HemorrhoidPage() {
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=85" alt="치핵 전문 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
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

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>💡</span> 치핵이란 무엇인가요?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>치핵은 항문 안쪽의 혈관 조직(치핵 쿠션)이 비정상적으로 늘어나거나 돌출되는 질환입니다. 성인의 약 <strong className="text-[#0d7fc4]">75%</strong>가 일생에 한 번 이상 경험할 정도로 흔하며, 항문 출혈이나 돌출감이 대표 증상입니다.</p>
              <p>발생 위치에 따라 치상선 위쪽의 <strong>내치핵</strong>과 아래쪽의 <strong>외치핵</strong>으로 나뉩니다. 내치핵은 통증보다 출혈이 주요 증상이며, 외치핵은 통증과 불쾌감이 심합니다. 두 가지가 함께 나타나는 혼합치핵도 흔합니다.</p>
              <p>초기에는 생활습관 교정과 약물로 호전되지만, 3~4도로 진행되면 수술이 필요합니다. 참지 말고 조기에 치료하는 것이 중요합니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'220px'}}>
              <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" alt="치핵 진료 상담" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
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

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
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

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>⚕️</span> 치료 방법
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="치핵 수술" fill className="object-cover" sizes="400px" />
            </div>
            <div className="space-y-3">
              {[
                {title:'보존적 치료', badge:'1~2도', color:'#22c55e', desc:'좌욕(1일 3회, 미온수 5~10분), 식이섬유, 수분 2L, 연고·좌약으로 증상 완화.'},
                {title:'고무밴드 결찰', badge:'2도', color:'#eab308', desc:'치핵 기저부에 고무밴드를 묶어 혈류를 차단하는 외래 시술.'},
                {title:'PPH 수술', badge:'3~4도', color:'#0d7fc4', desc:'자동문합기로 치핵 위쪽 점막 절제·봉합. 통증 적고 당일 퇴원 가능.'},
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
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>🌿</span> 수술 후 관리
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['당일 또는 다음 날 퇴원 가능','좌욕 1일 3회 이상 — 미온수, 5~10분','수분 하루 2L 이상 + 식이섬유 충분히','격렬한 운동·음주·자극적 음식 2~3주 자제','변비 예방이 재발 방지의 핵심','이상 출혈·발열 시 즉시 내원'].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-[#f0f7ff]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 mt-0.5" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                <p className="text-[13px] text-[#374151] leading-[1.8]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치핵, 참지 마세요</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">초기에 치료할수록 간단하고 빠르게 해결됩니다.<br />장튼튼항외과 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>

      </div>
    </div>
  )
}
`)

// ════════════════════════════════
// 공통 템플릿 사용 페이지들
// ════════════════════════════════
function makeSimplePage(opts) {
  const { path, metadata, heroData, sections, banner } = opts
  const sectionsCode = sections.map(s => `
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>${s.icon}</span> ${s.title}
          </h2>
          <div className="text-[14px] text-[#374151] leading-[2.0] space-y-3">${s.body}</div>
        </section>`).join('\n')

  return `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '${metadata.title}',
  description: '${metadata.desc}',
  alternates: { canonical: '${metadata.canonical}' },
}

export default function Page() {
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="${heroData.img}" alt="${heroData.title}" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">${heroData.breadcrumb}</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">${heroData.eng}</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">${heroData.title}</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">${heroData.sub}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
${sectionsCode}
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">${banner.title}</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">${banner.msg}</p>
        </div>
      </div>
    </div>
  )
}
`
}

// ════════════════════════════════
// 치열
// ════════════════════════════════
w('src/app/anorectal/fissure/page.tsx', makeSimplePage({
  metadata: {
    title: '치열 | 장튼튼항외과',
    desc: '치열 전문 치료. 배변 시 극심한 통증과 출혈. 급성·만성 치열 정확한 진단과 치료.',
    canonical: 'https://www.jangtntnhang.com/anorectal/fissure',
  },
  heroData: {
    img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1600&q=85',
    breadcrumb: '홈 / 대장항문센터 / <strong className="text-[#0d1117]">치열</strong>',
    eng: 'Anal Fissure',
    title: '치열',
    sub: '항문 점막의 찢어짐 · 극심한 배변 통증',
  },
  sections: [
    {
      icon: '💡', title: '치열이란?',
      body: `<p>치열은 항문 입구의 피부와 점막이 찢어진 상태입니다. 배변 시 마치 칼로 베이는 듯한 극심한 통증과 선홍색 출혈이 특징이며, 배변 후에도 수십 분~수 시간 동안 작열감이 지속됩니다.</p>
              <p>통증 때문에 배변을 참게 되고, 이로 인해 변비가 심해지는 <strong className="text-[#0d7fc4]">악순환</strong>이 반복됩니다. 20~40대 여성에서 가장 흔하며 항문 후방 정중선에서 약 90%가 발생합니다.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="p-4 rounded-xl bg-[#f0f7ff] border border-[#bfdbfe]">
                  <h3 className="font-black text-[14px] text-[#0d7fc4] mb-2">급성 치열</h3>
                  <ul className="space-y-1.5 text-[13px] text-[#374151]">
                    <li>• 최근 발생한 표재성 열상</li>
                    <li>• 약물+좌욕으로 6~8주 내 치유</li>
                    <li>• 조기 치료가 만성화 예방</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#fff7ed] border border-[#fed7aa]">
                  <h3 className="font-black text-[14px] text-[#f97316] mb-2">만성 치열</h3>
                  <ul className="space-y-1.5 text-[13px] text-[#374151]">
                    <li>• 8주 이상 지속</li>
                    <li>• 섬유화 조직(감시 치핵) 형성</li>
                    <li>• 수술적 치료 필요</li>
                  </ul>
                </div>
              </div>`
    },
    {
      icon: '⚕️', title: '치료 방법',
      body: `<div className="space-y-3">
              {[
                {step:'01', title:'좌욕 치료', desc:'하루 3회 이상 미온수(38~40℃) 좌욕으로 괄약근을 이완하고 혈류를 개선합니다.'},
                {step:'02', title:'약물 도포', desc:'칼슘 통로 차단제(딜티아젬), 글리세린 삼질산염 연고를 도포하여 내괄약근 압력을 낮춥니다.'},
                {step:'03', title:'보톡스 주사', desc:'내괄약근에 직접 보톡스를 주입하여 일시적으로 이완시키는 치료법입니다.'},
                {step:'04', title:'내괄약근 측방 절개술', desc:'만성 치열에서 가장 효과적인 수술. 내괄약근 일부 절개, 치유율 95% 이상, 당일 퇴원.'},
              ].map((t) => (
                <div key={t.step} className="flex gap-4 p-4 lg:p-5 rounded-xl bg-[#f8fafb]">
                  <span className="text-[12px] font-black text-primary shrink-0">STEP{t.step}</span>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#0d1117] mb-1">{t.title}</h3>
                    <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>`
    },
  ],
  banner: { title: '치열, 혼자 참지 마세요', msg: '배변이 두려울 정도의 통증이 있다면 반드시 전문의 진찰이 필요합니다.<br />초기 치열은 간단한 치료로 해결됩니다.' },
}))

// ════════════════════════════════
// 치루
// ════════════════════════════════
w('src/app/anorectal/fistula/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '치루 | 장튼튼항외과',
  description: '치루 전문 치료. 항문 주위 농양과 누공. 외과전문의 수술. 김포 구래역.',
  keywords: '치루, 항문 농양, 항문 누공, 치루 수술',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/fistula' },
}

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
        <Image src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&q=85" alt="치루 전문 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">치루</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Anal Fistula</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">치루</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 주위 농양에서 발전하는 만성 누공 질환</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 치루란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>치루는 항문샘에 세균이 침입하여 항문 주위 농양이 형성되고, 이 농양이 터지면서 항문 내부와 항문 주위 피부를 연결하는 <strong className="text-[#0d7fc4]">비정상적인 터널(누공)</strong>이 생긴 상태입니다.</p>
              <p>치루는 저절로 낫지 않으며 반드시 수술로 제거해야 합니다. 방치하면 누공이 더 복잡하게 진행됩니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="치루 수술" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
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
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
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
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치루는 수술로만 완치됩니다</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">항문 주위에서 분비물이 나온다면 즉시 내원하세요.<br />조기 수술일수록 범위가 작고 회복이 빠릅니다.</p>
        </div>
      </div>
    </div>
  )
}
`)

// ════════════════════════════════
// 변비
// ════════════════════════════════
w('src/app/anorectal/constipation/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '변비·설사 | 장튼튼항외과',
  description: '만성 변비·설사 전문 치료. 원인 정확히 진단. 김포 구래역.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/constipation' },
}

export default function ConstipationPage() {
  const causes = [
    {title:'식이섬유 부족', desc:'채소·과일·통곡물 섭취 부족으로 대변이 딱딱해집니다.'},
    {title:'수분 부족', desc:'하루 수분 섭취가 1L 미만이면 변비가 쉽게 생깁니다.'},
    {title:'운동 부족', desc:'신체 활동이 적으면 장 운동도 함께 느려집니다.'},
    {title:'배변 억제', desc:'바쁘다는 이유로 배변을 자꾸 참으면 직장 감각이 무뎌집니다.'},
    {title:'약물 부작용', desc:'철분제·진통제·항우울제 등이 변비를 유발합니다.'},
    {title:'전신 질환', desc:'갑상선 기능저하증·당뇨 등이 원인이 되기도 합니다.'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=85" alt="변비 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">변비·설사</strong></nav>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">변비 · 설사</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">만성 배변 장애 · 정확한 원인 진단</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 변비란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>일주일에 배변 횟수가 <strong className="text-[#0d7fc4]">3회 미만</strong>이거나, 배변 시 과도한 힘이 필요하거나, 잔변감이 자주 있는 상태를 만성 변비라고 합니다.</p>
              <p>단순한 불편함을 넘어 치핵·치열·대장 질환의 주요 원인이 됩니다. 정확한 원인 파악이 치료의 핵심입니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'180px'}}>
              <Image src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80" alt="변비 진료" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🔍</span> 주요 원인</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {causes.map((c) => (
              <div key={c.title} className="p-4 rounded-xl bg-[#f8fafb]">
                <h3 className="text-[13px] font-bold text-[#0d1117] mb-1">{c.title}</h3>
                <p className="text-[12px] text-[#6b7280] leading-[1.8]">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>⚕️</span> 치료 방법</h2>
          <div className="space-y-3">
            {[
              {num:'01', title:'생활습관 교정', desc:'식이섬유 25~30g/일, 수분 2L 이상, 규칙적 운동, 배변 습관 교정이 기본 치료입니다.'},
              {num:'02', title:'약물 치료', desc:'팽창성·삼투성·자극성 완하제를 증상에 맞게 처방합니다.'},
              {num:'03', title:'바이오피드백', desc:'출구폐쇄형 변비에서 항문 근육 협응 훈련이 효과적입니다.'},
              {num:'04', title:'정밀 검사', desc:'대장내시경, 대장통과시간 측정 등으로 기질적 원인을 배제합니다.'},
            ].map((t) => (
              <div key={t.num} className="flex gap-4 p-4 rounded-xl bg-[#f8fafb]">
                <span className="text-[12px] font-black text-primary shrink-0">STEP{t.num}</span>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0d1117] mb-1">{t.title}</h3>
                  <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">변비, 습관이 되기 전에 치료하세요</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">만성 변비는 치핵·치열의 원인이 됩니다.<br />장튼튼항외과에서 정확한 원인을 찾아드립니다.</p>
        </div>
      </div>
    </div>
  )
}
`)

// ════════════════════════════════
// 나머지 anorectal 4개 (콘딜로마/항문거근/모소동/소양증)
// ════════════════════════════════
const anoSimple = [
  {
    slug:'condyloma', title:'항문콘딜로마', eng:'Anal Condyloma',
    sub:'HPV 바이러스 감염으로 인한 항문 주위 사마귀성 병변',
    img:'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85',
    what:'HPV(인유두종 바이러스) 감염으로 항문 주위에 사마귀 모양의 병변이 생기는 질환입니다. 성접촉을 통해 감염되며 잠복기는 3주~8개월로 다양합니다. 초기에는 작은 구진이지만 치료하지 않으면 닭벼슬 모양으로 커지고 퍼질 수 있습니다. 재발이 잦으므로 꾸준한 추적 관찰이 필요합니다.',
    symptoms:['항문 주위 작은 구진 또는 융기','가려움증·불편감·배변 시 통증','항문 분비물 증가','병변이 커지면 출혈 발생','항문 내부 병변은 증상 없이 발견 지연'],
    treatments:[
      {name:'전기소작술', desc:'고주파 전류로 병변을 태워 제거. 외래에서 시행 가능합니다.'},
      {name:'레이저 치료', desc:'CO2 레이저로 병변을 정밀 제거. 상처가 작고 회복이 빠릅니다.'},
      {name:'외과적 절제', desc:'큰 병변 또는 넓은 범위에 적용. 근치적 제거가 가능합니다.'},
      {name:'약물 도포', desc:'이미퀴모드 크림 도포로 면역 반응을 유도합니다.'},
    ],
    closing:'콘딜로마는 재발이 잦습니다. 치료 후 정기 추적 관찰이 반드시 필요합니다.',
  },
  {
    slug:'levator', title:'항문거근증후군', eng:'Levator Ani Syndrome',
    sub:'항문 주위 근육 과긴장으로 인한 만성 골반 통증',
    img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85',
    what:'항문거근(levator ani)이 과도하게 긴장하거나 경련을 일으켜 항문 주위 또는 직장 안쪽에 만성 통증이 발생하는 기능성 질환입니다. 기질적 원인 없이 생기는 경우가 많으며 스트레스·자세·정신적 긴장과 밀접합니다.',
    symptoms:['항문·직장 깊숙한 곳의 압박감·묵직함','오래 앉아 있을 때 심해지는 통증','배변 후 통증 악화','좌측 대퇴부·허리로 방사통','20분 이상 지속되는 반복적 직장 통증'],
    treatments:[
      {name:'바이오피드백 치료', desc:'항문 근육 이완 훈련. 1차 치료법으로 효과가 가장 우수합니다.'},
      {name:'전기 자극 치료', desc:'항문거근에 전기 자극으로 긴장된 근육을 이완시킵니다.'},
      {name:'보톡스 주입', desc:'근육에 직접 보톡스를 주입하여 과긴장을 완화합니다.'},
      {name:'약물 치료', desc:'근이완제·항우울제로 통증과 근긴장을 조절합니다.'},
    ],
    closing:'항문거근증후군은 정확한 진단이 우선입니다. 유사 질환과의 감별이 중요합니다.',
  },
  {
    slug:'pilonidal', title:'모소동', eng:'Pilonidal Sinus',
    sub:'꼬리뼈 부위 모낭 감염으로 생기는 낭종 및 누공',
    img:'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=85',
    what:'모소동(Pilonidal Sinus)은 꼬리뼈 부위 피부 아래에 털이 박혀 들어가거나 모낭이 감염되면서 낭종과 누공이 형성되는 질환입니다. 20~30대 남성, 특히 털이 많고 장시간 앉아 있는 분들에게 많이 발생하며, 재발이 잦으므로 완전한 수술적 제거가 중요합니다.',
    symptoms:['꼬리뼈 위쪽 정중선의 통증·부종·발적','구멍에서 분비물·고름 배출','급성 감염 시 심한 통증과 발열','만성기에는 간헐적 분비물 지속','앉거나 움직일 때 통증 악화'],
    treatments:[
      {name:'절개 배농', desc:'급성 농양기에 즉각적으로 고름을 배출하여 통증을 완화합니다.'},
      {name:'근치적 절제술', desc:'낭종과 누공 경로를 완전히 절제. 재발 예방에 가장 효과적입니다.'},
      {name:'피판 수술', desc:'Limberg flap 등 넓은 범위를 재건하는 수술법입니다.'},
    ],
    closing:'수술 후 해당 부위 제모와 청결 유지가 재발 예방의 핵심입니다.',
  },
  {
    slug:'pruritus', title:'항문소양증', eng:'Anal Pruritus',
    sub:'항문 주위의 지속적인 가려움증과 피부 자극',
    img:'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=85',
    what:'항문 주위 피부에 심한 가려움증이 반복되는 질환입니다. 긁으면 일시적으로 시원하지만 피부 손상 후 더욱 심해지는 악순환이 생깁니다. 성인 남성에서 더 흔하며 야간에 심해지는 경향이 있습니다. 원인이 다양하므로 정확한 진단이 중요합니다.',
    symptoms:['항문 주위 심한 가려움증 (야간 악화)','긁은 후 피부 손상 및 2차 감염','항문 주위 발적·습진·태선화','분비물 증가로 인한 속옷 오염','수면을 방해할 정도의 가려움'],
    treatments:[
      {name:'원인 질환 교정', desc:'치핵·치루 등 항문 질환, 진균·요충 감염 등 원인을 먼저 치료합니다.'},
      {name:'위생 관리 교육', desc:'부드러운 화장지 사용, 세정 후 완전 건조, 자극 음식(커피·맥주·초콜릿) 제한.'},
      {name:'국소 스테로이드 연고', desc:'단기 사용으로 가려움과 염증을 완화합니다. 장기 사용은 피합니다.'},
      {name:'항히스타민제', desc:'야간 가려움이 심한 경우 복용하여 수면의 질을 개선합니다.'},
    ],
    closing:'항문소양증은 원인이 다양합니다. 자가 치료보다 전문의 진찰을 통해 원인을 파악하는 것이 중요합니다.',
  },
]

for (const p of anoSimple) {
  w('src/app/anorectal/' + p.slug + '/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '${p.title} | 장튼튼항외과',
  description: '${p.sub}. 장튼튼항외과 외과전문의 직접 진료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/${p.slug}' },
}

export default function Page() {
  const symptoms = ${JSON.stringify(p.symptoms)}
  const treatments = ${JSON.stringify(p.treatments)}
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="${p.img}" alt="${p.title} 전문 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">${p.title}</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">${p.eng}</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">${p.title}</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">${p.sub}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> ${p.title}이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">${p.what}</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="${p.title}" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
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
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
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
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">${p.closing}</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진단하고 치료합니다.</p>
        </div>
      </div>
    </div>
  )
}
`)
}

// ════════════════════════════════
// 내시경 3개
// ════════════════════════════════
w('src/app/endoscopy/gastro/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '위내시경 | 장튼튼항외과',
  description: '수면 위내시경 전문. 위암·위궤양·역류성식도염 조기 발견. 김포 구래역.',
  keywords: '위내시경, 수면 위내시경, 위암 검진, 헬리코박터, 역류성식도염',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/gastro' },
}

export default function GastroPage() {
  const checks = [
    '40세 이상 성인 (국가암검진: 2년마다)',
    '속쓰림·소화불량·상복부 통증이 지속되는 경우',
    '음식 삼키기 어렵거나 체중이 감소한 경우',
    '혈변·흑색변·원인 불명 빈혈',
    '위암 또는 헬리코박터 가족력',
    '헬리코박터 제균 치료 후 추적 검사',
  ]
  const preps = [
    {icon:'🚫', title:'8시간 금식', desc:'물 포함 완전 금식. 오전 검사라면 전날 자정부터 금식합니다.'},
    {icon:'💊', title:'약물 조정', desc:'혈압약은 소량의 물과 복용 가능. 당뇨약은 의사 지시에 따라 조정합니다.'},
    {icon:'🚗', title:'보호자 동반', desc:'수면 내시경 시 반드시 보호자 동반. 검사 당일 운전 금지입니다.'},
    {icon:'👔', title:'편안한 복장', desc:'목이 넉넉한 옷을 착용하시고 귀중품은 두고 오세요.'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85" alt="위내시경 검사" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">위내시경</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Gastroscopy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">위내시경</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">편안한 수면 내시경으로 정확한 검사를</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 위내시경이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>위내시경은 내시경 튜브를 입을 통해 삽입하여 식도·위·십이지장을 직접 관찰하는 검사입니다. 위암·위궤양·역류성식도염·헬리코박터 감염 등을 조기에 발견하고 즉시 조직 검사를 시행할 수 있습니다.</p>
              <p>수면 위내시경은 수면 유도제 투여 후 검사하여 불편함을 크게 줄여줍니다. 검사 시간은 약 5~10분입니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'180px'}}>
              <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="위내시경 검진" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>📋</span> 검사 전 준비사항</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {preps.map((item) => (
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
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>👤</span> 검사 권장 대상</h2>
          <div className="space-y-2">
            {checks.map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-[#f0f7ff]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                <p className="text-[13px] text-[#374151]">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">위암은 조기 발견이 완치의 열쇠입니다</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">40세부터 정기 위내시경 검진을 받으세요.<br />장튼튼항외과 최신 내시경 장비로 편안하게 검사드립니다.</p>
        </div>
      </div>
    </div>
  )
}
`)

w('src/app/endoscopy/colon/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '대장내시경 | 장튼튼항외과',
  description: '수면 대장내시경. 대장암·용종 조기 발견 및 즉시 제거. 김포 구래역.',
  keywords: '대장내시경, 수면 대장내시경, 대장암 검진, 대장 용종, 장 정결',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/colon' },
}

export default function ColonPage() {
  const checks = [
    '50세 이상 성인 (5~10년마다 정기 검진)',
    '배변 출혈·혈변·점액변이 있는 경우',
    '원인 불명의 빈혈 또는 체중 감소',
    '대장암·용종 가족력 (40세부터 권장)',
    '배변 습관 변화 (변비·설사 교대)',
    '복통이 2주 이상 지속되는 경우',
  ]
  const cleaningSteps = [
    {day:'검사 2일 전', desc:'씨 있는 과일·해조류·잡곡밥 제한'},
    {day:'검사 전날', desc:'저잔류 식이(흰쌀밥·두부·계란 허용) + 저녁부터 장 정결제 복용 시작'},
    {day:'검사 당일', desc:'나머지 정결제 복용 완료 후 물 포함 완전 금식'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85" alt="대장내시경 검사" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">대장내시경</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Colonoscopy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">대장내시경</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">대장암 예방을 위한 가장 확실한 방법</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 대장내시경이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>항문을 통해 내시경을 삽입하여 직장과 대장 전체를 관찰하는 검사입니다. 대장암, 용종, 염증성 장질환 등을 직접 확인하고 즉시 조직 검사 또는 용종 제거를 시행합니다.</p>
              <p>대장암의 <strong className="text-[#0d7fc4]">90% 이상</strong>이 선종성 용종에서 발생하므로 조기 발견과 제거로 대장암을 예방할 수 있습니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'180px'}}>
              <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" alt="대장내시경" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>📋</span> 검사 전 장 정결 방법</h2>
          <div className="p-4 rounded-xl bg-[#fff7ed] border border-[#fed7aa] mb-4">
            <p className="text-[13px] font-bold text-[#f97316]">⚠️ 장 정결이 가장 중요합니다 — 처방대로 정확히 따라주세요</p>
          </div>
          <div className="space-y-3">
            {cleaningSteps.map((t) => (
              <div key={t.day} className="flex gap-4 p-4 rounded-xl bg-[#f8fafb]">
                <span className="text-[12px] font-black text-primary shrink-0 w-20">{t.day}</span>
                <p className="text-[13px] text-[#374151] leading-[1.8]">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>👤</span> 검사 권장 대상</h2>
          <div className="space-y-2">
            {checks.map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-[#f0f7ff]">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>{i+1}</span>
                <p className="text-[13px] text-[#374151]">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">대장암은 조기 발견 시 완치율 90%</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">증상이 없어도 정기 검진을 받으세요.<br />장튼튼항외과에서 편안하고 정확한 대장내시경을 제공합니다.</p>
        </div>
      </div>
    </div>
  )
}
`)

w('src/app/endoscopy/polyp/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '용종 절제술 | 장튼튼항외과',
  description: '대장 용종 즉시 제거. EMR·ESD·Cold snare. 대장암 예방. 김포 구래역.',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/polyp' },
}

export default function PolypPage() {
  const methods = [
    {name:'차가운 용종 절제술 (Cold snare)', size:'5~10mm', desc:'전기 소작 없이 올가미로 잘라내는 방법. 출혈·천공 위험이 낮습니다.'},
    {name:'내시경 점막 절제술 (EMR)', size:'10~20mm', desc:'점막 아래 식염수 주입 후 올가미로 절제. 납작한 중간 크기 용종에 효과적입니다.'},
    {name:'내시경 점막하 박리술 (ESD)', size:'20mm 이상', desc:'점막하층을 박리하여 일괄 절제. 크고 납작한 병변에 사용합니다.'},
  ]
  const afterCare = [
    '당일 죽·미음 등 유동식, 이틀간 부드러운 음식',
    '1~2주간 격렬한 운동·음주·자극적 음식 금지',
    '복통·혈변·발열 시 즉시 내원',
    '조직 검사 결과는 1~2주 후 확인',
    '고위험 선종의 경우 1년 후 추적 대장내시경 필요',
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85" alt="용종 절제술" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">용종 절제술</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">Polypectomy</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">용종 절제술</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">내시경으로 안전하게 · 대장암을 예방합니다</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> 용종이란?</h2>
          <p className="text-[14px] text-[#374151] leading-[2.0] mb-5">용종(폴립)은 대장 점막이 혹처럼 돌출된 병변입니다. 대부분의 대장암은 선종성 용종에서 <strong className="text-[#0d7fc4]">10~15년에 걸쳐 암으로 진행</strong>됩니다. 대장내시경 중 용종을 발견하면 즉시 절제하여 대장암을 예방할 수 있습니다.</p>
          <div className="grid grid-cols-3 gap-3">
            {[{label:'용종 발견', icon:'🔍'},{label:'즉시 절제', icon:'✂️'},{label:'대장암 예방', icon:'🛡️'}].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-[#f0f7ff]">
                <div className="text-[28px] mb-2">{s.icon}</div>
                <p className="text-[13px] font-bold text-[#0d7fc4]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>✂️</span> 절제 방법</h2>
          <div className="space-y-3">
            {methods.map((t) => (
              <div key={t.name} className="p-5 rounded-xl bg-[#f8fafb]">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[14px] font-bold text-[#0d1117]">{t.name}</h3>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{t.size}</span>
                </div>
                <p className="text-[13px] text-[#6b7280] leading-[1.85]">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>🌿</span> 절제 후 주의사항</h2>
          <div className="space-y-2">
            {afterCare.map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-[#f8fafb]">
                <span className="text-primary font-black shrink-0">✓</span>
                <p className="text-[13px] text-[#374151] leading-[1.8]">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
`)

// ════════════════════════════════
// 피부종양 3개 + 외과클리닉 4개 + PPH
// ════════════════════════════════
const allSimplePages = [
  {
    path:'src/app/skin/lipoma/page.tsx',
    meta:{title:'지방종 | 장튼튼항외과', desc:'지방종 국소마취 당일 제거. 김포 구래역.', canonical:'https://www.jangtntnhang.com/skin/lipoma'},
    hero:{img:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1600&q=85', breadcrumb:'홈 / 피부종양센터 / 지방종', eng:'Lipoma', title:'지방종', sub:'피부 아래 지방 세포가 뭉쳐 생기는 양성 종양'},
    what:'지방종은 피부 아래 지방 세포가 비정상적으로 증식하여 덩어리를 형성하는 양성 종양입니다. 등·목·어깨·팔·복부에 가장 흔하며, 부드럽고 이동성이 있습니다. 대부분 통증이 없으나 저절로 사라지지 않으므로 크기가 커지거나 불편감이 생기면 제거합니다.',
    symptoms:['피부 아래 부드럽고 말랑한 혹이 만져짐','이동성이 있어 손으로 밀면 움직임','대부분 통증 없음','크기 2cm 이상이면 압박감 발생','감염 시 통증·발적·열감 동반'],
    treatments:[
      {name:'국소마취 후 절제', desc:'1~3cm 작은 절개로 지방종을 완전히 제거합니다. 당일 시술 후 봉합하고 귀가합니다.'},
      {name:'최소침습 절제', desc:'지방종보다 훨씬 작은 절개로 내부를 짜내는 방법. 흉터를 최소화합니다.'},
    ],
    closing:'지방종은 감염 전에 제거하면 간단합니다. 크기가 커지기 전에 내원하세요.',
  },
  {
    path:'src/app/skin/cyst/page.tsx',
    meta:{title:'피지낭종 | 장튼튼항외과', desc:'피지낭종 당일 제거. 국소마취. 김포 구래역.', canonical:'https://www.jangtntnhang.com/skin/cyst'},
    hero:{img:'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=85', breadcrumb:'홈 / 피부종양센터 / 피지낭종', eng:'Epidermal Cyst', title:'피지낭종', sub:'피지선이 막혀 피부 아래에 피지와 각질이 쌓이는 낭종'},
    what:'피지낭종(표피낭종)은 피지선 분비관이 막혀 피지와 각질이 피부 아래에 쌓이면서 주머니처럼 형성되는 낭종입니다. 얼굴·목·등·두피에 자주 발생하며, 중앙에 검은 점이 보이는 것이 특징입니다. 반드시 낭종 주머니째 완전히 제거해야 재발하지 않습니다.',
    symptoms:['피부 아래 단단하고 둥근 혹','중앙에 작은 검은 점(개구부) 보임','짜면 치즈 같은 냄새나는 내용물','감염 시 붓고 빨개지며 심한 통증','감염이 반복될수록 점점 더 크게 부음'],
    treatments:[
      {name:'낭종 절제술 (비감염기)', desc:'감염이 없는 상태에서 낭종 주머니째 완전히 제거. 흉터가 적고 재발률이 낮습니다.'},
      {name:'절개 배농 후 절제', desc:'감염 농양 시 먼저 배농 후, 염증 가라앉으면 낭종 주머니를 완전 절제합니다.'},
    ],
    closing:'피지낭종은 감염 전에 제거하면 훨씬 간단합니다. 혹이 발견되면 빨리 내원하세요.',
  },
  {
    path:'src/app/skin/fibroma/page.tsx',
    meta:{title:'연성섬유종 | 장튼튼항외과', desc:'연성섬유종(쥐젖) 제거. 국소마취. 김포 구래역.', canonical:'https://www.jangtntnhang.com/skin/fibroma'},
    hero:{img:'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=85', breadcrumb:'홈 / 피부종양센터 / 연성섬유종', eng:'Soft Fibroma', title:'연성섬유종 (쥐젖)', sub:'마찰 부위에 주로 생기는 피부의 양성 종양'},
    what:'연성섬유종(쥐젖)은 피부 표면에 작은 살 조각이 돌출되는 양성 피부 종양입니다. 목·겨드랑이·서혜부·눈꺼풀 등 마찰이 많은 부위에 주로 발생합니다. 악성으로 변하지 않지만 옷이나 장신구에 걸려 통증이 생기기도 합니다.',
    symptoms:['피부 표면에 작은 살 조각 같은 돌기','목·겨드랑이·눈꺼풀에 주로 생김','옷·목걸이·브라끈에 걸려 통증 발생','크기는 보통 1~5mm, 살색~갈색','여러 개가 함께 발생하는 경우 많음'],
    treatments:[
      {name:'전기소작술', desc:'미세 전류로 연성섬유종 기저부를 태워 제거. 통증이 적고 흉터가 거의 없습니다.'},
      {name:'외과적 절제', desc:'국소마취 후 가위나 메스로 절제. 크기가 크거나 수가 많은 경우 적합합니다.'},
      {name:'냉동 치료', desc:'액체 질소로 병변을 얼려 제거. 여러 개를 한 번에 처리할 수 있습니다.'},
    ],
    closing:'연성섬유종은 간단히 제거할 수 있습니다. 부담 없이 내원하세요.',
  },
  {
    path:'src/app/surgery/wound/page.tsx',
    meta:{title:'상처 치료 | 장튼튼항외과', desc:'급·만성 상처 전문 처치와 봉합. 외과전문의 직접 진료.', canonical:'https://www.jangtntnhang.com/surgery/wound'},
    hero:{img:'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=85', breadcrumb:'홈 / 기타외과질환 / 상처 치료', eng:'Wound Care', title:'상처 치료', sub:'급·만성 상처의 전문적 처치와 봉합'},
    what:'상처 치료는 단순 찰과상부터 깊은 열상, 만성 상처까지 외과전문의가 직접 처치하는 진료입니다. 적절한 시간 내에 제대로 처치하지 않으면 감염·흉터·기능 장애로 이어질 수 있습니다. 특히 손·발·관절 주변, 오염된 상처, 깊은 열상은 반드시 전문 처치가 필요합니다.',
    symptoms:['출혈이 멈추지 않거나 깊이가 깊은 상처','흙·녹 등 이물질이 포함된 오염 상처','동물·사람에게 물린 상처','통증이 심하거나 감각이 없는 상처','수일 후에도 낫지 않고 고름이 생기는 경우'],
    treatments:[
      {name:'세척 및 변연 절제', desc:'상처 내 오염 물질과 괴사 조직을 완전히 제거하여 감염을 예방합니다.'},
      {name:'봉합술', desc:'상처 크기와 위치에 따라 단순·피하·특수 봉합을 시행합니다.'},
      {name:'습윤 드레싱', desc:'최신 드레싱 재료로 최적의 치유 환경을 제공합니다.'},
    ],
    closing:'상처는 골든타임 내에 올바른 처치가 흉터를 최소화합니다. 빨리 내원하세요.',
  },
  {
    path:'src/app/surgery/burn/page.tsx',
    meta:{title:'화상 치료 | 장튼튼항외과', desc:'화상 정도별 전문 치료. 외과전문의 직접 진료.', canonical:'https://www.jangtntnhang.com/surgery/burn'},
    hero:{img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85', breadcrumb:'홈 / 기타외과질환 / 화상 치료', eng:'Burn Treatment', title:'화상 치료', sub:'화상 정도에 따른 단계별 전문 치료'},
    what:'화상은 열·화학물질·전기·방사선 등에 의해 피부와 조직이 손상되는 손상입니다. 화상의 심각도는 깊이(1~3도)와 범위로 판단합니다. 올바른 초기 처치와 전문 치료가 흉터를 최소화합니다. 민간요법(간장·된장·치약 등)은 감염을 일으키므로 절대 금지입니다.',
    symptoms:['1도: 발적·통증만 있고 물집 없음','2도: 물집 형성, 심한 통증, 축축한 피부','3도: 피부 괴사, 통증 없음 (신경 손상)','화상 부위 부종과 열감','넓은 범위 화상 시 탈수·쇼크 위험'],
    treatments:[
      {name:'응급 처치', desc:'흐르는 차가운 물로 15~20분 냉각 후 내원. 얼음 사용 금지. 물집은 터뜨리지 마세요.'},
      {name:'드레싱 치료', desc:'화상 깊이와 범위에 따라 실버 드레싱, 하이드로콜로이드 등 최신 재료를 사용합니다.'},
      {name:'피부 이식', desc:'3도 이상 깊은 화상은 자가 피부 이식이 필요할 수 있습니다.'},
    ],
    closing:'화상은 즉시 차가운 물로 식힌 후 병원으로 오세요.',
  },
  {
    path:'src/app/surgery/nail/page.tsx',
    meta:{title:'내성발톱 | 장튼튼항외과', desc:'내성발톱 통증 없는 교정 및 수술. 재발 방지. 김포 구래역.', canonical:'https://www.jangtntnhang.com/surgery/nail'},
    hero:{img:'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85', breadcrumb:'홈 / 기타외과질환 / 내성발톱', eng:'Ingrown Toenail', title:'내성발톱', sub:'발톱이 살을 파고드는 통증과 염증의 근본 치료'},
    what:'내성발톱(내향성 발톱)은 발톱 가장자리가 주변 피부를 파고들어 통증·염증·화농이 발생하는 질환입니다. 주로 엄지발가락에 생기며 잘못된 발톱 자르기(둥글게), 꽉 끼는 신발, 외상, 유전적 발톱 모양이 원인입니다. 당뇨 환자에서는 특히 위험합니다.',
    symptoms:['발톱 가장자리 부위 통증과 압통','발가락 끝의 발적·부종','걷거나 신발 신을 때 심한 통증','화농(고름)이 생기는 경우','만성화 시 육아종 형성'],
    treatments:[
      {name:'보존적 교정', desc:'초기 내성발톱에 솜·테이프로 발톱을 올바른 방향으로 유도합니다.'},
      {name:'발톱 일부 절제', desc:'국소마취 후 파고드는 발톱 가장자리를 절제하여 통증을 즉시 해소합니다.'},
      {name:'조모세포 파괴술', desc:'페놀을 이용해 발톱 뿌리 일부를 파괴하여 재발을 방지합니다. 재발률 90% 이상 감소.'},
    ],
    closing:'발톱을 일자로 자르는 습관이 예방의 핵심입니다. 조기 치료가 간단합니다.',
  },
  {
    path:'src/app/surgery/nutrition/page.tsx',
    meta:{title:'영양 수액 | 장튼튼항외과', desc:'피로 회복·면역력 강화 맞춤형 영양 수액. 당일 가능.', canonical:'https://www.jangtntnhang.com/surgery/nutrition'},
    hero:{img:'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1600&q=85', breadcrumb:'홈 / 기타외과질환 / 영양 수액', eng:'Nutrition IV Therapy', title:'영양 수액', sub:'피로 회복과 면역력 강화를 위한 맞춤형 영양 수액'},
    what:'영양 수액 치료는 비타민·미네란·아미노산 등 필수 영양소를 정맥으로 직접 공급하는 치료입니다. 경구 복용보다 흡수율이 훨씬 높아 빠른 효과를 기대할 수 있습니다. 만성 피로, 면역력 저하, 빠른 컨디션 회복이 필요한 분들에게 효과적입니다.',
    symptoms:['만성 피로와 무기력감이 지속될 때','잦은 감기, 면역력이 저하된 경우','과로 후 빠른 컨디션 회복이 필요할 때','수술 전·후 영양 보충이 필요한 경우','비타민 결핍으로 인한 피부·모발 문제'],
    treatments:[
      {name:'기본 영양 수액', desc:'포도당·비타민B군·미네랄 포함. 빠른 피로 회복에 효과적입니다.'},
      {name:'고용량 비타민C 수액', desc:'항산화 효과, 면역력 강화, 피부 미백에 도움을 줍니다.'},
      {name:'마늘 주사 (아리나민)', desc:'티아민(비타민B1) 고함량 수액. 만성 피로·신경통·근육통에 효과적입니다.'},
    ],
    closing:'30~60분 내에 편안하게 받으실 수 있습니다. 당일 시술 가능합니다.',
  },
]

for (const p of allSimplePages) {
  w(p.path, `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '${p.meta.title}',
  description: '${p.meta.desc}',
  alternates: { canonical: '${p.meta.canonical}' },
}

export default function Page() {
  const symptoms = ${JSON.stringify(p.symptoms)}
  const treatments = ${JSON.stringify(p.treatments)}
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="${p.hero.img}" alt="${p.hero.title}" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">${p.hero.breadcrumb}</nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">${p.hero.eng}</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">${p.hero.title}</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">${p.hero.sub}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> ${p.hero.title}이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <p className="text-[14px] text-[#374151] leading-[2.0]">${p.what}</p>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" alt="${p.hero.title}" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
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
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
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
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[15px] mb-2">${p.closing}</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">장튼튼항외과 외과전문의가 직접 진료합니다.</p>
        </div>
      </div>
    </div>
  )
}
`)
}

// ════════════════════════════════
// PPH
// ════════════════════════════════
w('src/app/pph/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'PPH 수술 | 장튼튼항외과',
  description: 'PPH 자동문합기 치핵 절제술 전문. 통증 최소화 당일 퇴원. 3~4도 치핵 근치. 김포 구래역.',
  keywords: 'PPH 수술, 치핵 수술, 자동문합기, 치질 수술, 당일 퇴원',
  alternates: { canonical: 'https://www.jangtntnhang.com/pph' },
}

export default function PphPage() {
  const targets = [
    '3도 이상 내치핵 (손으로 밀어 넣어야 하는 경우)',
    '4도 치핵 (항상 돌출되어 있는 경우)',
    '직장 점막 탈출증',
    '여러 개의 치핵이 동시에 있는 경우',
    '기존 치핵 수술 후 재발한 경우',
  ]
  const comparisons = [
    {item:'수술 시간', pph:'20~30분', old:'30~60분'},
    {item:'통증', pph:'적음', old:'심함'},
    {item:'입원 기간', pph:'당일 퇴원', old:'1~3일'},
    {item:'회복 기간', pph:'3~7일', old:'2~4주'},
  ]
  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=85" alt="PPH 수술 전문" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">PPH 수술</strong></nav>
          <p className="text-[12px] font-black text-primary tracking-widest mb-2">PPH Surgery</p>
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-black text-[#0d1117] mb-3">PPH 수술</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">자동문합기를 이용한 최소 통증 치핵 절제술</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>💡</span> PPH 수술이란?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0]">
              <p>PPH(Procedure for Prolapse and Hemorrhoids)는 <strong className="text-[#0d7fc4]">특수 자동문합기</strong>를 이용해 탈출된 치핵 조직 위쪽 점막을 원형으로 절제·봉합하는 수술법입니다.</p>
              <p>통증이 느껴지는 치상선 아래가 아닌 위쪽에서 수술하므로 통증이 현저히 적고, 수술 시간은 약 20~30분입니다. 당일 퇴원이 대부분 가능합니다.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{height:'200px'}}>
              <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" alt="PPH 수술" fill className="object-cover" sizes="400px" />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>⭐</span> PPH vs 기존 수술 비교</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-[#f0f7ff]">
                  <th className="p-3 text-left font-bold">구분</th>
                  <th className="p-3 text-center font-bold text-primary">PPH 수술</th>
                  <th className="p-3 text-center font-bold text-[#6b7280]">기존 절제술</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f6]">
                {comparisons.map((row) => (
                  <tr key={row.item}>
                    <td className="p-3 font-semibold text-[#374151]">{row.item}</td>
                    <td className="p-3 text-center font-bold text-primary">{row.pph}</td>
                    <td className="p-3 text-center text-[#6b7280]">{row.old}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2"><span>✅</span> PPH 수술 적응증</h2>
          <div className="space-y-2">
            {targets.map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-[#f0f7ff]">
                <span className="text-primary font-black shrink-0">✓</span>
                <p className="text-[13px] text-[#374151]">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="rounded-2xl p-6 text-center" style={{background:'linear-gradient(135deg,#0d7fc4,#0d9488)'}}>
          <p className="text-white font-black text-[16px] mb-2">치핵 수술, 이제 두렵지 않습니다</p>
          <p className="text-white/85 text-[13px] leading-[1.9]">PPH 수술로 통증은 줄이고 일상 복귀는 빠르게.<br />장튼튼항외과 외과전문의가 직접 집도합니다.</p>
        </div>
      </div>
    </div>
  )
}
`)

console.log('\n✅ 24개 파일 모두 완료!')
