import type { Metadata } from 'next'
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
}