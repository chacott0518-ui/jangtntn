import Image from 'next/image'
import Link from 'next/link'
import type { ComponentType, ReactNode, SVGProps } from 'react'
import {
  BookOpenIcon,
  ChevronRightIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

/** 진료·매거진 공용 UI 토큰 및 Hero/FAQ/관련카드 */

/* ------------------------------------------------------------------ */
/* 파스텔 컬러 토큰 — 의미별로 고정 배정해 하드코딩 색상을 한 곳에서 관리 */
/* ------------------------------------------------------------------ */
export const pastel = {
  blue: { bg: '#eaf3fd', border: '#cfe3f6', text: '#1e4a76', icon: '#2f7fc9' },
  mint: { bg: '#e9f8f3', border: '#c8ecdd', text: '#175d4a', icon: '#1f9c78' },
  yellow: { bg: '#fdf8e7', border: '#f1e3a6', text: '#7a5a08', icon: '#c99a1e' },
  peach: { bg: '#fdf1e9', border: '#f4d6bc', text: '#8a4423', icon: '#d9824a' },
  coral: { bg: '#fdeeee', border: '#f4d2d2', text: '#8a3a3a', icon: '#d97a7a' },
  lavender: { bg: '#f3f0fb', border: '#ddd2f0', text: '#4d3a7a', icon: '#8266c9' },
} as const

export type PastelTone = keyof typeof pastel

export type IconType = ComponentType<SVGProps<SVGSVGElement> & { title?: string; titleId?: string }>

export function ClinicHeroScrim() {
  /* 좌측 텍스트 가독성용 — 하단까지 닿는 어두운 scrim 금지 */
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-[72%] bg-gradient-to-r from-white/72 via-white/38 to-transparent"
    />
  )
}

/**
 * 건강매거진 상세 Hero — 좌측 텍스트는 충분히 밝게, 우측 피사체는 살아 있게
 * (클리닉 Hero와 분리해 매거진만 조정)
 */
export function MagazineHeroScrim() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.93] from-0% via-white/58 via-[36%] to-transparent to-[70%]"
    />
  )
}

/** 센터 대표 Hero 이미지 — 메인·하위페이지 공통 */
export const CENTER_HERO = {
  anorectal: {
    src: '/images/colorectal-center-hero.webp',
    objectClass: 'object-[58%_center] lg:object-[62%_center]',
  },
  endoscopy: {
    src: '/images/endoscopy-center.webp',
    objectClass: 'object-[68%_42%] lg:object-[72%_40%]',
  },
  skin: {
    src: '/images/skin-tumor-center.webp',
    objectClass: 'object-[52%_45%] lg:object-[48%_42%]',
  },
  surgery: {
    src: '/images/general-surgery-center.webp',
    objectClass: 'object-[54%_38%] lg:object-[50%_36%]',
  },
} as const

export type CenterHeroKey = keyof typeof CENTER_HERO

export function ClinicPageHero({
  center,
  alt,
  children,
  maxWidthClass = 'max-w-4xl',
  objectClass,
  heightClass = 'h-[240px] md:h-[320px] lg:h-[400px]',
}: {
  center: CenterHeroKey
  alt: string
  children: ReactNode
  maxWidthClass?: string
  objectClass?: string
  heightClass?: string
}) {
  const cfg = CENTER_HERO[center]
  return (
    <div className={`relative ${heightClass}`}>
      <Image
        src={cfg.src}
        alt={alt}
        fill
        className={`object-cover ${objectClass ?? cfg.objectClass}`}
        sizes="100vw"
        priority
      />
      <ClinicHeroScrim />
      <div
        className={`relative z-10 ${maxWidthClass} mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8`}
      >
        {children}
      </div>
    </div>
  )
}

export function ClinicToc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="목차" className="rounded-[16px] border border-[#e5eaef] bg-white overflow-hidden">
      <p className="px-4 pt-3.5 pb-2 text-[12px] font-bold tracking-wider text-[#64748b]">목차</p>
      <ol className="divide-y divide-[#f1f5f9]">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center gap-3 min-h-[48px] px-4 py-3 text-[14px] font-semibold text-[#0d1117] active:bg-[#f8fafb] hover:bg-[#f8fafb] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                {i + 1}
              </span>
              <span className="flex-1 min-w-0 leading-snug break-keep">{item.label}</span>
              <ChevronRightIcon className="h-4 w-4 shrink-0 text-[#94a3b8]" aria-hidden />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function SectionTitle({
  n,
  children,
}: {
  n?: number
  children: ReactNode
}) {
  return (
    <h2 className="scroll-mt-20 flex items-center gap-2 text-[20px] md:text-[22px] font-bold text-[#0d1117] leading-[1.35] mb-3 md:mb-4">
      {typeof n === 'number' ? (
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-[12px] font-bold text-primary">
          {n}
        </span>
      ) : null}
      <span className="flex-1 min-w-0 break-keep">{children}</span>
    </h2>
  )
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-3 text-[14.5px] md:text-[15px] text-[#374151] leading-[1.8] md:leading-[1.85]">
      {children}
    </div>
  )
}

export function SoftCard({
  children,
  className = '',
  tone,
}: {
  children: ReactNode
  className?: string
  tone?: PastelTone
}) {
  const c = tone ? pastel[tone] : null
  return (
    <div
      className={`rounded-[16px] p-4 md:p-[18px] border shadow-[0_1px_8px_rgba(15,23,42,0.04)] ${className}`}
      style={{ background: c ? c.bg : '#ffffff', borderColor: c ? c.border : '#e8eef3' }}
    >
      {children}
    </div>
  )
}

/** 작은 파스텔 원형 아이콘 배지 — 카드 상단에 의미 아이콘을 표시할 때 사용 */
export function IconBadge({
  tone,
  icon: Icon,
  size = 32,
  className = '',
}: {
  tone: PastelTone
  icon: IconType
  size?: number
  className?: string
}) {
  const c = pastel[tone]
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${className}`}
      style={{ background: c.bg, width: size, height: size }}
    >
      <Icon className="h-[17px] w-[17px]" style={{ color: c.icon }} aria-hidden />
    </span>
  )
}

/** 아이콘 + 제목 + 설명으로 구성된 작은 정보 카드 (원인/치료방향 등 요약 그리드용) */
export function IconCard({
  tone,
  icon: Icon,
  title,
  desc,
  className = '',
}: {
  tone: PastelTone
  icon: IconType
  title: string
  desc: string
  className?: string
}) {
  return (
    <div className={`rounded-[14px] bg-white border border-[#e8eef3] p-3.5 ${className}`}>
      <IconBadge tone={tone} icon={Icon} />
      <p className="text-[13px] font-semibold text-[#0d1117] mt-2 mb-1 break-keep">{title}</p>
      <p className="text-[12.5px] text-[#64748b] leading-[1.7] break-keep">{desc}</p>
    </div>
  )
}

/** 핵심요약 하단 2x2 포인트 카드 */
export function StatChip({
  tone,
  icon: Icon,
  title,
  desc,
}: {
  tone: PastelTone
  icon: IconType
  title: string
  desc: string
}) {
  const c = pastel[tone]
  return (
    <div className="rounded-[14px] border px-3.5 py-3" style={{ background: c.bg, borderColor: c.border }}>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/75 mb-1.5">
        <Icon className="h-[15px] w-[15px]" style={{ color: c.icon }} aria-hidden />
      </span>
      <p className="text-[13px] font-semibold leading-snug break-keep" style={{ color: c.text }}>
        {title}
      </p>
      <p className="text-[11.5px] leading-snug mt-0.5 break-keep" style={{ color: c.text, opacity: 0.82 }}>
        {desc}
      </p>
    </div>
  )
}

/** 안내·주의 배너 — tone에 따라 파스텔 색상과 아이콘 색이 달라짐 */
export function Banner({
  tone = 'blue',
  icon: Icon,
  children,
}: {
  tone?: PastelTone
  icon?: IconType
  children: ReactNode
}) {
  const c = pastel[tone]
  return (
    <div
      className="rounded-[14px] border px-4 py-3.5 text-[13.5px] md:text-[14px] leading-[1.75] flex items-start gap-2.5"
      style={{ background: c.bg, borderColor: c.border, color: c.text }}
    >
      {Icon ? <Icon className="h-[18px] w-[18px] shrink-0 mt-0.5" style={{ color: c.icon }} aria-hidden /> : null}
      <div className="min-w-0">{children}</div>
    </div>
  )
}

export function TipBanner({ children }: { children: ReactNode }) {
  return (
    <Banner tone="blue" icon={InformationCircleIcon}>
      {children}
    </Banner>
  )
}

export function WarnSoft({ children }: { children: ReactNode }) {
  return (
    <Banner tone="yellow" icon={ExclamationTriangleIcon}>
      {children}
    </Banner>
  )
}

/** 좌우 비교 카드 — 상단 파스텔 헤더 + 흰 본문 */
export function CompareCard({
  tone,
  title,
  href,
  rows,
}: {
  tone: PastelTone
  title: string
  href: string
  rows: [string, string][]
}) {
  const c = pastel[tone]
  return (
    <div className="rounded-[16px] border bg-white overflow-hidden" style={{ borderColor: c.border }}>
      <div className="px-3.5 py-2.5" style={{ background: c.bg }}>
        <Link href={href} className="text-[14px] font-semibold hover:underline" style={{ color: c.text }}>
          {title}
        </Link>
      </div>
      <dl className="p-3.5 space-y-2">
        {rows.map(([k, v]) => (
          <div key={k} className="flex gap-2 text-[12.5px] leading-snug">
            <dt className="shrink-0 w-[4.5rem] font-semibold text-[#64748b]">{k}</dt>
            <dd className="text-[#374151]">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/** 세로 타임라인 (단계 UI) — 항목마다 파스텔 톤을 달리 지정 가능 */
export function StageTimeline({
  items,
}: {
  items: { badge: string; title: string; desc: string; tone: PastelTone }[]
}) {
  return (
    <ol className="space-y-0">
      {items.map((s, i) => {
        const c = pastel[s.tone]
        const last = i === items.length - 1
        return (
          <li key={s.badge} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                style={{ background: c.bg, color: c.text }}
              >
                {i + 1}
              </span>
              {!last ? <span className="w-px flex-1 my-1 min-h-[12px]" style={{ background: c.border }} aria-hidden /> : null}
            </div>
            <div className={`flex-1 rounded-[14px] bg-white border border-[#e8eef3] p-3.5 ${last ? '' : 'mb-2.5'}`}>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[11px] font-bold" style={{ color: c.text }}>
                  {s.badge}
                </span>
                <h3 className="text-[14px] font-semibold text-[#0d1117] break-keep">{s.title}</h3>
              </div>
              <p className="text-[13px] text-[#64748b] leading-[1.8] break-keep">{s.desc}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

/** 진료 흐름 등 단순 순서 UI — 모바일 세로 / PC 가로(선택) */
export function FlowSteps({
  items,
  cols = 1,
  tone,
}: {
  items: { title: string; desc: string }[]
  cols?: 1 | 3 | 4
  /** 지정하지 않으면 앞쪽은 파스텔 블루, 뒤쪽은 민트로 자연스럽게 변화 */
  tone?: PastelTone
}) {
  const defaultTones: PastelTone[] = ['blue', 'blue', 'mint', 'mint']
  const toneAt = (i: number) => (tone ? tone : defaultTones[i % defaultTones.length])
  const gridClass = cols === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : cols === 3 ? 'sm:grid-cols-3' : ''
  if (cols === 1) {
    return (
      <ol className="space-y-0">
        {items.map((step, i) => {
          const c = pastel[toneAt(i)]
          const last = i === items.length - 1
          return (
            <li key={step.title} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold"
                  style={{ background: c.bg, color: c.text }}
                >
                  {i + 1}
                </span>
                {!last ? <span className="w-px flex-1 my-1" style={{ background: c.border }} aria-hidden /> : null}
              </div>
              <div className={last ? 'pb-0' : 'pb-4'}>
                <p className="text-[14px] font-semibold text-[#0d1117] break-keep">{step.title}</p>
                <p className="text-[13px] text-[#64748b] leading-[1.7] mt-0.5 break-keep">{step.desc}</p>
              </div>
            </li>
          )
        })}
      </ol>
    )
  }
  return (
    <ol className={`grid grid-cols-1 gap-2.5 ${gridClass}`}>
      {items.map((step, i) => {
        const c = pastel[toneAt(i)]
        return (
          <li key={step.title} className="rounded-[14px] bg-white border border-[#e8eef3] p-3.5 list-none">
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold mb-2"
              style={{ background: c.bg, color: c.text }}
            >
              {i + 1}
            </span>
            <p className="text-[13px] font-semibold text-[#0d1117] mb-1 break-keep">{step.title}</p>
            <p className="text-[12.5px] text-[#64748b] leading-[1.7] break-keep">{step.desc}</p>
          </li>
        )
      })}
    </ol>
  )
}

/** 체크리스트 패널(생활관리 등) — tone에 따라 도움/주의 구분 */
export function ChecklistPanel({
  tone,
  title,
  items,
  icon: Icon,
}: {
  tone: PastelTone
  title: string
  items: string[]
  /** 지정하면 각 항목 앞에 작은 아이콘을, 없으면 기본 점(dot)을 표시 */
  icon?: IconType
}) {
  const c = pastel[tone]
  return (
    <SoftCard tone={tone}>
      <p className="text-[13px] font-semibold mb-2" style={{ color: c.text }}>
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((t) => (
          <li key={t} className="flex gap-2 min-h-[44px] items-start text-[13px] text-[#374151] leading-[1.7] break-keep">
            {Icon ? (
              <Icon className="h-4 w-4 mt-0.5 shrink-0" style={{ color: c.icon }} aria-hidden />
            ) : (
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: c.icon }} aria-hidden />
            )}
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </SoftCard>
  )
}

/**
 * FAQ 섹션 wrapper
 * - showHeading 기본 true: 작은 분홍 물음표 + “자주 묻는 질문” + 구분선
 * - 내부 StaticFaq는 hideHeading으로 중복 제목 방지
 * - 건강매거진·FAQ 전용·공지에는 사용하지 않음
 */
export function FaqShell({
  children,
  showHeading = true,
}: {
  children: ReactNode
  showHeading?: boolean
}) {
  /* 바깥 배경: 홈 의료진소개(DoctorSection)와 동일 token — bg-[#f8fafb] */
  return (
    <section
      id="faq"
      className="scroll-mt-20 -mx-4 px-4 py-6 md:-mx-8 md:px-8 md:py-7 bg-[#f8fafb] space-y-3"
      aria-labelledby={showHeading ? 'faq-heading' : undefined}
    >
      {showHeading ? (
        <div className="rounded-2xl border border-[#e8eef3] bg-white px-4 pt-4 pb-0 md:px-5 md:pt-5 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
          <h2
            id="faq-heading"
            className="flex items-center gap-2 text-[17px] md:text-[18px] font-bold text-[#0d1117] pb-3 border-b border-[#f0f4f8] break-keep"
          >
            <span
              aria-hidden
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[14px] font-bold"
              style={{ background: '#fde8ef', color: '#d4537e' }}
            >
              ?
            </span>
            자주 묻는 질문
          </h2>
          <div className="pt-3 pb-3 md:pb-4">{children}</div>
        </div>
      ) : (
        children
      )}
    </section>
  )
}

/**
 * 관련 콘텐츠 카드 — 모바일 고정 높이(치열 카드 기준 ≈148px), PC도 동일 행 높이 정렬
 * 아이콘 / 제목(최대 2줄) / 설명(최대 3줄) / 하단 화살표(mt-auto)
 */
export function RelatedCard({
  href,
  title,
  desc,
  tone = 'blue',
}: {
  href: string
  title: string
  desc: string
  tone?: PastelTone
}) {
  const c = pastel[tone]
  return (
    <Link
      href={href}
      className="group flex h-[148px] w-[clamp(96px,28vw,116px)] flex-none snap-start flex-col rounded-[14px] border bg-white p-2.5 active:scale-[0.97] hover:-translate-y-0.5 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-auto sm:min-h-[148px] sm:w-auto sm:rounded-[16px] sm:p-4 sm:active:scale-[0.98]"
      style={{ borderColor: c.border }}
    >
      <IconBadge tone={tone} icon={BookOpenIcon} size={24} className="sm:hidden shrink-0" />
      <IconBadge tone={tone} icon={BookOpenIcon} className="hidden sm:inline-flex shrink-0" />
      <p className="mt-1.5 mb-0.5 min-h-[32px] text-[12px] font-semibold leading-[1.35] text-[#0d1117] break-keep line-clamp-2 sm:mt-2 sm:mb-1 sm:min-h-[42px] sm:text-[15px] sm:leading-snug">
        {title}
      </p>
      <p className="min-h-[46px] text-[10.5px] leading-[1.45] text-[#64748b] break-keep line-clamp-3 sm:min-h-[60px] sm:text-[12.5px] sm:leading-[1.6]">
        {desc}
      </p>
      <span
        className="mt-auto inline-flex items-center gap-0.5 pt-1 text-[11px] font-semibold sm:text-[12px]"
        style={{ color: c.icon }}
      >
        <span className="hidden sm:inline">자세히 보기</span>
        <ChevronRightIcon className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden />
      </span>
    </Link>
  )
}

const carouselTones: PastelTone[] = ['blue', 'mint', 'peach', 'lavender', 'yellow']

/** 모바일: 한 화면에 약 3개가 보이는 소형 가로 슬라이드 / sm 이상: 기존 그리드 */
export function RelatedCarousel({
  items,
}: {
  items: { href: string; title: string; desc: string }[]
}) {
  return (
    <div
      className="flex items-stretch gap-2.5 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-1 [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible sm:pb-0"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {items.map((r, i) => (
        <RelatedCard
          key={r.href + r.title}
          href={r.href}
          title={r.title}
          desc={r.desc}
          tone={carouselTones[i % carouselTones.length]}
        />
      ))}
    </div>
  )
}
