import type { Metadata } from 'next'
import Image from 'next/image'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = { title: '공지사항 | 장튼튼항외과의원', description: '공지사항.' }

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
        <Image src="/images/pages/or-room.webp" alt="공지사항" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-4">홈 / <strong>공지사항</strong></nav>
          <h1 className="page-h1 text-[#0d1117] mb-2">공지사항</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 section-space space-y-6">
        <section className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="section-h2 text-[#0d1117] mb-3">핵심요약</h2>
          <p className="body-text text-[#374151] break-keep">
            휴진·주차·진료시간 등 장튼튼항외과의원 운영 관련 공지를 확인하실 수 있습니다.
          </p>
        </section>

        <PageToc items={[{ id: 'notice-list', label: '공지 목록' }]} />

        <section id="notice-list" className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.07)] divide-y divide-[#f3f4f6] px-4">
          <h2 className="section-h2 text-[#0d1117] px-2 pt-6 pb-3">공지 목록</h2>
          {notices.map((n, i) => (
            <div key={i} className="py-5 flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                {n.important && <span className="meta-text font-bold text-white bg-primary rounded-full px-2 py-0.5">중요</span>}
                <span className="body-text font-semibold">{n.title}</span>
              </div>
              <span className="meta-text text-[#9ca3af] ml-4">{n.date}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
