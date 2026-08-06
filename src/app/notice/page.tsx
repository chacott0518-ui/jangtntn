import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notices } from '@/lib/notices'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildPageMetadata({
  path: '/notice',
  title: '공지사항 | 장튼튼항외과의원',
  description: '장튼튼항외과의원 공지사항. 진료·휴진 등 안내를 확인하세요.',
})

export default function NoticePage() {
  return (
    <div className="bg-white pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/pages/or-room.webp" alt="공지사항" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="subpage-breadcrumb mb-4">홈 / <strong>공지사항</strong></nav>
          <h1 className="page-h1 text-[#0d1117] mb-2">공지사항</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 section-space space-y-6">
        <section id="notice-list" className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.07)] divide-y divide-[#f3f4f6] px-4">
          <h2 className="section-h2 text-[#0d1117] px-2 pt-6 pb-3">공지 목록</h2>
          {notices.map((n, i) => {
            const titleNode = n.slug ? (
              <Link
                href={`/notice/${n.slug}`}
                className="body-text font-semibold text-[#0d1117] break-keep hover:text-primary transition-colors"
              >
                {n.title}
              </Link>
            ) : (
              <span className="body-text font-semibold break-keep">{n.title}</span>
            )

            return (
              <div
                key={n.slug ?? `${n.title}-${i}`}
                className="py-5 px-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-2 min-w-0 flex-1">
                  {n.important && (
                    <span className="meta-text font-bold text-white bg-primary rounded-full px-2 py-0.5 shrink-0 mt-0.5">
                      중요
                    </span>
                  )}
                  <div className="min-w-0">{titleNode}</div>
                </div>
                <time className="meta-text text-[#9ca3af] shrink-0 sm:ml-4 pl-0 sm:pl-0" dateTime={n.date.replace(/\./g, '-')}>
                  {n.date}
                </time>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
