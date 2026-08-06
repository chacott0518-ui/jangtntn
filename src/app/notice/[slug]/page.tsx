import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNoticeBySlug, notices } from '@/lib/notices'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return notices.filter((n) => n.slug).map((n) => ({ slug: n.slug! }))
}

export function generateMetadata({ params }: Props): Metadata {
  const notice = getNoticeBySlug(params.slug)
  if (!notice) return { title: '공지사항 | 장튼튼항외과의원' }
  return {
    title: `${notice.title} | 장튼튼항외과의원`,
    description: notice.body?.split('\n').filter(Boolean)[0] ?? notice.title,
  }
}

export default function NoticeDetailPage({ params }: Props) {
  const notice = getNoticeBySlug(params.slug)
  if (!notice || !notice.body) notFound()

  return (
    <div className="bg-white pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/pages/or-room.webp" alt="공지사항" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="subpage-breadcrumb mb-4">
            홈 / <Link href="/notice">공지사항</Link> / <strong>{notice.title}</strong>
          </nav>
          <h1 className="page-h1 text-[#0d1117] mb-2 break-keep">{notice.title}</h1>
          <p className="text-[13px] text-[#64748b] font-semibold">{notice.date}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 section-space">
        <article className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.07)] p-5 md:p-8">
          {notice.important && (
            <span className="meta-text font-bold text-white bg-primary rounded-full px-2 py-0.5 inline-block mb-4">
              중요
            </span>
          )}
          <div className="body-text text-[#374151] leading-[1.9] whitespace-pre-line break-keep">
            {notice.body}
          </div>
          <div className="mt-8 pt-6 border-t border-[#f3f4f6]">
            <Link href="/notice" className="text-[14px] font-bold text-primary hover:underline">
              ← 공지사항 목록
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
