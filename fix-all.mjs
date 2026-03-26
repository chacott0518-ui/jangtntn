import { writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'
function w(path, content) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, content, 'utf8')
  console.log('✓', path)
}

w('src/app/about/info/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { ADDRESS, HOURS } from '@/lib/constants'
export const metadata: Metadata = { title: '진료안내 | 장튼튼항외과', description: '평일 09:00~18:00, 토요일 09:00~15:00.' }
export default function InfoPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" alt="진료안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>진료안내</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">진료안내</h1>
          <p className="text-[16px] text-[#555]">진료시간 및 예약 안내</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}><ClockIcon className="w-5 h-5 text-white" /></span>
            <h2 className="text-[20px] font-bold">진료시간</h2>
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-2 rounded-xl bg-[#f8fafb] px-5 py-3.5"><span className="text-[14px] font-semibold">평일</span><span className="text-[14px] font-black">오전 {HOURS.weekday.open} ~ 오후 {HOURS.weekday.close}</span></div>
            <div className="grid grid-cols-2 rounded-xl bg-[#f0f7ff] px-5 py-3.5"><span className="text-[14px] font-semibold">토요일</span><span className="text-[14px] font-black">오전 {HOURS.saturday.open} ~ 오후 {HOURS.saturday.close}</span></div>
            <div className="grid grid-cols-2 rounded-xl bg-[#f8fafb] px-5 py-3.5"><span className="text-[14px] font-semibold">점심시간</span><span className="text-[14px] font-black">오후 {HOURS.lunch.start} ~ 오후 {HOURS.lunch.end}</span></div>
            <p className="text-[13px] font-bold text-primary pt-2">※ 토요일은 점심시간 없이 진료합니다</p>
            <p className="text-[12px] text-[#94a3b8]">일요일 · 공휴일 휴진</p>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d9488,#0d7fc4)' }}><MapPinIcon className="w-5 h-5 text-white" /></span>
            <h2 className="text-[20px] font-bold">오시는 길</h2>
          </div>
          <div className="space-y-3 text-[14px]">
            <p className="font-semibold text-[#0d1117]">{ADDRESS}</p>
            <p>🚇 김포골드라인 구래역 1번출구</p>
            <p>🅿️ 계림 M스퀘어 지하주차장</p>
            <p>🚌 버스 031-981-7282</p>
          </div>
        </div>
      </div>
    </div>
  )
}`)

w('src/app/about/doctor/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '의료진 소개 | 장튼튼항외과', description: '장튼튼항외과 의료진 소개.' }
export default function DoctorPage() {
  const career = ['외과 전문의 자격 취득','대학병원 외과 전임의 근무','대장항문학회 정회원','소화기내시경학회 정회원','연세대학교 의과대학 졸업']
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80" alt="의료진 소개" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>의료진 소개</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">의료진 소개</h1>
          <p className="text-[16px] text-[#555]">경험과 실력을 갖춘 전문 의료진</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative" style={{ minHeight: '320px' }}>
              <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" alt="대표원장" fill className="object-cover object-top" sizes="33vw" />
            </div>
            <div className="md:col-span-2 p-8 lg:p-10">
              <p className="text-[13px] font-bold text-primary mb-2">대표원장</p>
              <h2 className="text-[28px] font-black text-[#0d1117] mb-1">대표 원장</h2>
              <div className="w-12 h-1 rounded-full bg-primary mb-6" />
              <ul className="space-y-2 text-[14px] text-[#374151]">
                {career.map((c, i) => <li key={i} className="flex gap-2"><span className="text-primary font-bold">·</span>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`)

w('src/app/about/location/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { ADDRESS } from '@/lib/constants'
export const metadata: Metadata = { title: '오시는 길 | 장튼튼항외과', description: '장튼튼항외과 오시는 길.' }
export default function LocationPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80" alt="오시는 길" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>오시는 길</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">오시는 길</h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14 space-y-6">
        <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}><MapPinIcon className="w-5 h-5 text-white" /></span>
            <h2 className="text-[20px] font-bold">주소</h2>
          </div>
          <p className="font-semibold">{ADDRESS}</p>
        </div>
        <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] space-y-3 text-[14px]">
          <p className="text-[17px] font-bold mb-4">교통편</p>
          <p>🚇 김포골드라인 구래역 1번출구 → 도보 3분</p>
          <p>🅿️ 계림 M스퀘어 지하주차장 (진료 시 무료)</p>
          <p>🚌 버스 031-981-7282</p>
        </div>
      </div>
    </div>
  )
}`)

w('src/app/about/surgery/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '수술실 안내 | 장튼튼항외과', description: '수술실 시설 안내.' }
export default function SurgeryRoomPage() {
  const items = [
    { title: '1인 수술실', desc: '독립된 공간에서 프라이버시를 철저히 보호합니다.' },
    { title: '최신 마취 장비', desc: '안전한 수술을 위한 최신 마취 모니터링 시스템.' },
    { title: '멸균 시스템', desc: '국제 기준에 맞는 의료기구 멸균 및 소독 관리.' },
    { title: '전용 회복실', desc: '수술 후 편안히 안정을 취할 수 있는 전용 회복실.' },
  ]
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80" alt="수술실 안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>수술실 안내</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">수술실 안내</h1>
          <p className="text-[16px] text-[#555]">청결하고 안전한 수술 환경</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map(item => (
          <div key={item.title} className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
            <h3 className="text-[17px] font-bold mb-2">{item.title}</h3>
            <p className="text-[14px] text-[#6b7280]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}`)

w('src/app/about/aftercare/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '수술 후 관리 | 장튼튼항외과', description: '수술 후 관리 안내.' }
export default function AftercarePage() {
  const items = [
    { title: '1주 이내', desc: '수술 부위 청결 유지, 좌욕 1일 3회, 격렬한 운동 금지' },
    { title: '1~2주', desc: '가벼운 일상생활 가능, 금주·금연 권장, 정기 외래 방문' },
    { title: '2~4주', desc: '식이섬유 충분히 섭취, 변비 예방, 무리한 활동 자제' },
    { title: '1개월 이후', desc: '정상 생활 복귀 가능, 이상 증상 시 즉시 내원' },
  ]
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80" alt="수술 후 관리" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>수술 후 관리</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">수술 후 관리</h1>
          <p className="text-[16px] text-[#555]">빠른 회복을 위한 단계별 안내</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <div key={i} className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
            <p className="text-[12px] font-bold text-primary mb-1">STEP {i+1}</p>
            <h3 className="text-[17px] font-bold mb-2">{item.title}</h3>
            <p className="text-[14px] text-[#6b7280]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}`)

w('src/app/about/page.tsx', `import { redirect } from 'next/navigation'
export default function AboutPage() { redirect('/about/doctor') }`)

w('src/app/consultation/layout.tsx', `export default function L({ children }: { children: React.ReactNode }) { return <>{children}</> }`)

w('src/app/consultation/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '온라인 상담 | 장튼튼항외과', description: '온라인 상담 신청.' }
export default function ConsultationPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" alt="온라인 상담" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / <strong>온라인 상담</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">온라인 상담</h1>
          <p className="text-[16px] text-[#555]">궁금한 사항을 남겨주시면 빠르게 답변드립니다</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-14">
        <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] space-y-4">
          <div><label className="block text-[13px] font-bold mb-1.5">이름</label><input type="text" placeholder="이름을 입력해주세요" className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-primary" /></div>
          <div><label className="block text-[13px] font-bold mb-1.5">연락처</label><input type="tel" placeholder="010-0000-0000" className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-primary" /></div>
          <div><label className="block text-[13px] font-bold mb-1.5">상담 내용</label><textarea rows={5} placeholder="상담 내용을 입력해주세요" className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-primary resize-none" /></div>
          <button className="w-full py-4 rounded-xl text-white font-bold text-[15px]" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>상담 신청하기</button>
          <p className="text-[12px] text-[#9ca3af] text-center">개인정보는 상담 목적으로만 사용됩니다</p>
        </div>
      </div>
    </div>
  )
}`)

w('src/app/faq/layout.tsx', `export default function L({ children }: { children: React.ReactNode }) { return <>{children}</> }`)

w('src/app/faq/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '자주 묻는 질문 | 장튼튼항외과', description: 'FAQ' }
const faqs = [
  { q: '수술 후 바로 일상생활이 가능한가요?', a: '수술 종류에 따라 다르지만 당일 퇴원 후 가벼운 일상생활은 가능합니다. 격렬한 운동·음주는 1~2주 자제를 권장합니다.' },
  { q: '치질 수술은 얼마나 걸리나요?', a: '수술 시간은 약 20~40분이며 당일 퇴원이 가능합니다.' },
  { q: '내시경 검사 전 준비사항이 있나요?', a: '위내시경은 8시간 전 금식, 대장내시경은 전날부터 장 정결제를 복용해야 합니다.' },
  { q: '주차가 가능한가요?', a: '계림 M스퀘어 지하주차장을 이용하실 수 있으며 진료 시 무료 주차를 제공합니다.' },
  { q: '예약 없이 방문해도 되나요?', a: '예약 없이 방문하셔도 진료 가능하나 대기시간 단축을 위해 사전 예약을 권장합니다.' },
]
export default function FaqPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80" alt="자주 묻는 질문" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / <strong>자주 묻는 질문</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">자주 묻는 질문</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
            <p className="font-bold text-[15px] mb-2">Q. {f.q}</p>
            <p className="text-[14px] text-[#6b7280]">A. {f.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}`)

w('src/app/magazine/layout.tsx', `export default function L({ children }: { children: React.ReactNode }) { return <>{children}</> }`)

w('src/app/magazine/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '건강매거진 | 장튼튼항외과', description: '건강 정보 매거진.' }
const articles = [
  { title: '치질, 수술이 꼭 필요할까?', category: '대장항문', date: '2024.12', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80' },
  { title: '대장내시경, 이렇게 준비하세요', category: '내시경', date: '2024.11', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  { title: '변비 해결을 위한 생활 습관', category: '대장항문', date: '2024.10', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80' },
  { title: '항문 통증, 원인과 치료법', category: '대장항문', date: '2024.09', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80' },
]
export default function MagazinePage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" alt="건강매거진" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / <strong>건강매거진</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">건강매거진</h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map((a, i) => (
          <div key={i} className="rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] overflow-hidden">
            <div className="relative" style={{ height: '200px' }}><Image src={a.img} alt={a.title} fill className="object-cover" sizes="50vw" /></div>
            <div className="p-5">
              <span className="text-[12px] font-bold text-primary">{a.category}</span>
              <h3 className="text-[16px] font-bold mt-1 mb-2">{a.title}</h3>
              <p className="text-[12px] text-[#9ca3af]">{a.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}`)

w('src/app/notice/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '공지사항 | 장튼튼항외과', description: '공지사항.' }
const notices = [
  { title: '2025년 설 연휴 휴진 안내', date: '2025.01.20', important: true },
  { title: '주차 안내 변경 공지', date: '2024.12.10', important: false },
  { title: '진료 시간 변경 안내', date: '2024.11.01', important: true },
  { title: '추석 연휴 휴진 안내', date: '2024.09.10', important: false },
]
export default function NoticePage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="공지사항" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / <strong>공지사항</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">공지사항</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-14 divide-y divide-[#f3f4f6]">
        {notices.map((n, i) => (
          <div key={i} className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {n.important && <span className="text-[11px] font-bold text-white bg-primary rounded-full px-2 py-0.5">중요</span>}
              <span className="text-[15px] font-semibold">{n.title}</span>
            </div>
            <span className="text-[13px] text-[#9ca3af] ml-4">{n.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`)

w('src/app/pph/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: 'PPH 수술 | 장튼튼항외과', description: 'PPH 치핵 절제술 안내.' }
export default function PphPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80" alt="PPH 수술" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / <strong>PPH 수술</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">PPH 수술</h1>
          <p className="text-[16px] text-[#555]">자동문합기를 이용한 최소 통증 치핵 절제술</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-6">
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">PPH 수술이란?</h2>
          <p className="text-[14px] text-[#6b7280] leading-relaxed">PPH(Procedure for Prolapse and Hemorrhoids)는 특수 자동문합기를 이용해 탈출된 치핵 조직을 잘라내고 봉합하는 수술법입니다. 기존 수술 대비 통증이 적고 회복이 빠릅니다.</p>
        </div>
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">PPH 수술의 장점</h2>
          <ul className="space-y-2 text-[14px] text-[#6b7280]">
            {['통증이 기존 수술 대비 현저히 적음','수술 시간 단축 (약 20~30분)','당일 퇴원 가능','빠른 일상 복귀'].map((t,i)=><li key={i} className="flex gap-2"><span className="text-primary font-bold">·</span>{t}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}`)

// 대장항문 질환 페이지
const anorectal = [
  ['hemorrhoid','치핵','가장 흔한 항문 질환으로 혈관이 늘어나 혹처럼 튀어나오는 질환입니다.'],
  ['fissure','치열','항문 점막이 찢어져 배변 시 통증과 출혈이 발생하는 질환입니다.'],
  ['fistula','치루','항문 주위 농양이 발전하여 만성적인 누공이 생기는 질환입니다.'],
  ['condyloma','콘딜로마','항문 주위에 사마귀처럼 생기는 바이러스성 질환입니다.'],
  ['constipation','변비','배변 횟수가 줄고 대변이 딱딱해지는 만성 질환입니다.'],
  ['levator','항문거근증후군','항문 주위 근육이 과도하게 긴장하여 통증이 생기는 증후군입니다.'],
  ['pilonidal','모소동','꼬리뼈 부위 모낭이 감염되어 낭종을 형성하는 질환입니다.'],
  ['pruritus','항문소양증','항문 주위에 지속적인 가려움증이 나타나는 질환입니다.'],
]
for (const [slug, title, desc] of anorectal) {
  w(`src/app/anorectal/${slug}/page.tsx`, `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '${title} | 장튼튼항외과', description: '${desc}' }
export default function Page() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80" alt="${title}" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 대장항문센터 / <strong>${title}</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">${title}</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-5">
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">${title}이란?</h2>
          <p className="text-[14px] text-[#6b7280] leading-relaxed">${desc} 장튼튼항외과에서 정확한 진단과 전문 치료를 받으세요.</p>
        </div>
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">주요 증상</h2>
          <ul className="space-y-2 text-[14px] text-[#6b7280]">
            {['항문 주위 불편감 및 통증','출혈 또는 분비물','배변 시 통증이나 불편감'].map((s,i)=><li key={i} className="flex gap-2"><span className="text-primary font-bold">·</span>{s}</li>)}
          </ul>
        </div>
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">치료 방법</h2>
          <p className="text-[14px] text-[#6b7280] leading-relaxed">증상 정도에 따라 보존적 치료 또는 수술적 치료를 진행합니다. 정확한 진단 후 최적의 치료 방향을 안내해 드립니다.</p>
        </div>
      </div>
    </div>
  )
}`)
}

// 내시경 페이지
const endoscopy = [
  ['gastro','위내시경','정확하고 편안한 위내시경 검사'],
  ['colon','대장내시경','대장암 예방을 위한 정밀 대장내시경'],
  ['polyp','용종 절제술','내시경으로 안전하게 제거하는 용종 절제'],
]
for (const [slug, title, sub] of endoscopy) {
  w(`src/app/endoscopy/${slug}/page.tsx`, `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '${title} | 장튼튼항외과', description: '${sub}' }
export default function Page() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" alt="${title}" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 내시경센터 / <strong>${title}</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">${title}</h1>
          <p className="text-[16px] text-[#555]">${sub}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-5">
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">${title}이란?</h2>
          <p className="text-[14px] text-[#6b7280] leading-relaxed">${sub} 장튼튼항외과에서는 최신 내시경 장비로 정확한 검사를 제공합니다.</p>
        </div>
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">검사 준비사항</h2>
          <ul className="space-y-2 text-[14px] text-[#6b7280]">
            {['검사 8시간 전부터 금식','복용 중인 약물 사전 고지','검사 당일 편안한 복장 착용'].map((s,i)=><li key={i} className="flex gap-2"><span className="text-primary font-bold">·</span>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}`)
}

// 피부외과 페이지
const skin = [
  ['lipoma','지방종','피부 아래 지방 덩어리가 생기는 양성 종양입니다.'],
  ['cyst','피지낭종','피지선이 막혀 피부 아래 낭종이 생기는 질환입니다.'],
  ['fibroma','섬유종','피부 섬유 조직에 생기는 양성 종양입니다.'],
]
for (const [slug, title, desc] of skin) {
  w(`src/app/skin/${slug}/page.tsx`, `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '${title} | 장튼튼항외과', description: '${desc}' }
export default function Page() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80" alt="${title}" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 피부외과 / <strong>${title}</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">${title}</h1>
          <p className="text-[16px] text-[#555]">${desc}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-5">
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">${title}이란?</h2>
          <p className="text-[14px] text-[#6b7280] leading-relaxed">${desc} 국소마취 후 간단하게 제거 가능합니다.</p>
        </div>
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">치료 과정</h2>
          <ul className="space-y-2 text-[14px] text-[#6b7280]">
            {['진단 및 크기 확인','국소마취','최소 절개 후 제거','봉합 및 드레싱'].map((s,i)=><li key={i} className="flex gap-2"><span className="text-primary font-bold">{i+1}.</span>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}`)
}

// 외과클리닉 페이지
const surgery = [
  ['wound','상처 치료','급·만성 상처의 전문적 처치'],
  ['burn','화상 치료','화상 정도에 따른 맞춤 치료'],
  ['nail','내성발톱','통증 없는 내성발톱 교정 치료'],
  ['nutrition','영양 수액','피로 회복과 면역력 강화를 위한 영양 수액'],
]
for (const [slug, title, sub] of surgery) {
  w(`src/app/surgery/${slug}/page.tsx`, `import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '${title} | 장튼튼항외과', description: '${sub}' }
export default function Page() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80" alt="${title}" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 외과클리닉 / <strong>${title}</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">${title}</h1>
          <p className="text-[16px] text-[#555]">${sub}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-5">
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">${title}이란?</h2>
          <p className="text-[14px] text-[#6b7280] leading-relaxed">${sub} 장튼튼항외과에서 전문적으로 치료합니다.</p>
        </div>
        <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="text-[18px] font-bold mb-3">치료 특징</h2>
          <ul className="space-y-2 text-[14px] text-[#6b7280]">
            {['외과 전문의 직접 진료','최신 장비와 검증된 치료법','빠른 회복을 위한 사후 관리'].map((s,i)=><li key={i} className="flex gap-2"><span className="text-primary font-bold">·</span>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}`)
}

console.log('\n✅ 모든 파일 완료!')
