import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { ClinicHeroScrim } from '@/app/anorectal/_ui'
import { MAGAZINE_ARTICLES } from '@/lib/magazine'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildPageMetadata({
  path: '/magazine',
  title: '건강매거진 | 장튼튼항외과의원',
  description:
    '장튼튼항외과의원 건강매거진. 대장항문·내시경·피부 건강 정보를 김포 구래동에서 알기 쉽게 안내합니다.',
})

function toDateTimeAttr(date: string) {
  const full = date.match(/^(\d{4})\.(\d{2})\.(\d{2})$/)
  if (full) return `${full[1]}-${full[2]}-${full[3]}`
  const m = date.match(/^(\d{4})\.(\d{2})$/)
  if (!m) return undefined
  return `${m[1]}-${m[2]}`
}

export default function MagazinePage() {
  const articles = MAGAZINE_ARTICLES

  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <div className="relative overflow-hidden h-[220px] md:h-[320px] lg:h-[400px]">
        <Image
          src="/images/health-magazine.webp"
          alt="장튼튼항외과의원 건강매거진"
          fill
          className="object-cover object-[72%_center] lg:object-[68%_center]"
          sizes="100vw"
          priority
        />
        <ClinicHeroScrim />
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2">홈 / <strong>건강매거진</strong></nav>
          <h1 className="text-[26px] md:text-[34px] lg:text-[40px] font-extrabold text-[#0d1117] mb-1.5 break-keep">
            건강매거진
          </h1>
          <p className="text-[14px] md:text-[15px] text-[#555] font-medium break-keep">
            대장항문·내시경·피부 건강 정보를 알기 쉽게 정리합니다
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-8 md:pb-12">
        <section id="articles" aria-label="건강 정보 목록">
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#0d1117] mb-4 break-keep">건강 정보 목록</h2>

          {/* 모바일: 동일 높이 카드 2열 */}
          <div className="grid grid-cols-2 gap-2.5 md:hidden">
            {articles.map((a) => {
              const dt = toDateTimeAttr(a.dateLabel)
              return (
                <Link
                  key={a.path}
                  href={a.path}
                  className="group flex h-[248px] flex-col rounded-[14px] border border-[#e8eef3] bg-white overflow-hidden active:scale-[0.98] transition-transform duration-150"
                >
                  <div className="relative w-full h-[96px] shrink-0 overflow-hidden aspect-video">
                    <Image src={a.image} alt={a.alt} fill className="object-cover" sizes="50vw" />
                  </div>
                  <div className="flex flex-1 flex-col min-w-0 p-2.5">
                    <div className="flex flex-wrap items-center gap-1 mb-1">
                      <span className="text-[10px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        {a.category}
                      </span>
                      {dt ? (
                        <time dateTime={dt} className="text-[10px] text-[#64748b]">
                          {a.dateLabel}
                        </time>
                      ) : (
                        <span className="text-[10px] text-[#64748b]">{a.dateLabel}</span>
                      )}
                    </div>
                    <h3 className="text-[12.5px] font-semibold text-[#0d1117] leading-[1.35] line-clamp-2 break-keep mb-1">
                      {a.title}
                    </h3>
                    <p className="text-[11px] text-[#64748b] leading-[1.45] line-clamp-3 break-keep">
                      {a.description}
                    </p>
                    <span className="mt-auto pt-1 inline-flex items-center gap-0.5 text-[11px] font-semibold text-primary">
                      읽기
                      <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* PC: 동일 행 높이 리스트 카드 */}
          <div className="hidden md:grid md:grid-cols-1 gap-3">
            {articles.map((a) => {
              const dt = toDateTimeAttr(a.dateLabel)
              return (
                <Link
                  key={`pc-${a.path}`}
                  href={a.path}
                  className="group flex min-h-[132px] gap-4 rounded-[16px] border border-[#e8eef3] bg-white p-4 hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-150"
                >
                  <div className="relative shrink-0 w-40 h-[100px] rounded-xl overflow-hidden aspect-video">
                    <Image
                      src={a.image}
                      alt={a.alt}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      sizes="160px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {a.category}
                      </span>
                      {dt ? (
                        <time dateTime={dt} className="text-[12px] text-[#64748b]">
                          {a.dateLabel}
                        </time>
                      ) : (
                        <span className="text-[12px] text-[#64748b]">{a.dateLabel}</span>
                      )}
                      <span className="text-[12px] text-[#94a3b8]">· 읽기 {a.readTime}</span>
                    </div>
                    <h3 className="text-[17px] font-semibold text-[#0d1117] leading-snug line-clamp-2 break-keep mb-1 group-hover:text-primary transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-[13.5px] text-[#64748b] leading-[1.6] line-clamp-2 break-keep">
                      {a.description}
                    </p>
                    <span className="mt-auto pt-2 inline-flex items-center gap-0.5 text-[13px] font-semibold text-primary">
                      자세히 보기
                      <ChevronRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
