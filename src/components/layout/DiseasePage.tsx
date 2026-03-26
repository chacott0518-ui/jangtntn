'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'

interface Breadcrumb { label: string; href?: string }
interface RelatedItem { href: string; label: string; desc: string }
interface SideNavItem { href: string; label: string }
interface DiseasePageProps {
  breadcrumbs: Breadcrumb[]
  title: string
  subtitle: string
  heroImage?: string
  sideNav?: SideNavItem[]
  related?: RelatedItem[]
  children: React.ReactNode
}

function StickyCTA() {
  return (
    <div className="hidden xl:block w-[200px] shrink-0">
      <div className="sticky top-24 space-y-3">
        <Link
          href="/consultation"
          className="btn-shine flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[14px] font-bold text-white shadow-[0_6px_20px_rgba(13,127,196,0.3)] hover:-translate-y-0.5 transition-all"
          style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}
        >
          <CalendarDaysIcon className="w-4 h-4" />
          온라인예약
        </Link>
        <div className="p-4 rounded-2xl bg-[#f0f7ff]">
          <p className="text-[12px] font-bold text-primary mb-2">진료시간</p>
          <div className="space-y-1">
            <div className="flex justify-between text-[12px]">
              <span className="text-[#64748b]">평일</span>
              <span className="text-[#0d1117] font-semibold">09:00 ~ 18:00</span>
            </div>
            <div className="flex justify-between text-[12px]">
              <span className="text-[#64748b]">토요일</span>
              <span className="text-[#0d1117] font-semibold">09:00 ~ 15:00</span>
            </div>
            <p className="text-[11px] text-[#94a3b8] pt-1">※ 토요일 점심없이 진료</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DiseasePage({
  breadcrumbs, title, subtitle, heroImage, sideNav, related, children,
}: DiseasePageProps) {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #e8f5e9 100%)' }} />
        {heroImage && (
          <Image src={heroImage} alt={title} fill className="object-cover" sizes="100vw" priority />
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 md:pb-10">
          <nav className="flex items-center gap-1.5 text-[12px] text-[#94a3b8] mb-3 flex-wrap">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-[#cbd5e1]">/</span>}
                {b.href ? (
                  <Link href={b.href} className="hover:text-primary transition-colors font-medium">{b.label}</Link>
                ) : (
                  <span className="text-[#0d1117] font-bold">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] tracking-[-0.02em] mb-2 leading-tight">
            {title}
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">{subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="flex gap-10">
          {sideNav && sideNav.length > 0 && (
            <aside className="hidden lg:block w-[190px] shrink-0">
              <div className="sticky top-24 space-y-1">
                <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest px-3 mb-3">관련 질환</p>
                {sideNav.map((n) => (
                  <Link key={n.href} href={n.href} className="block px-3 py-2.5 rounded-xl text-[13px] font-semibold text-[#374151] hover:text-primary hover:bg-[#f0f7ff] transition-all">
                    {n.label}
                  </Link>
                ))}
              </div>
            </aside>
          )}
          <article className="flex-1 min-w-0">
            <div className="space-y-10">{children}</div>
          </article>
          <StickyCTA />
        </div>
      </div>

      {related && related.length > 0 && (
        <div className="bg-[#f8fafb]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
            <h3 className="text-[18px] font-bold text-[#0d1117] mb-6">관련 질환</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="group p-5 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(13,127,196,0.12)] hover:-translate-y-0.5 transition-all">
                  <p className="font-bold text-[#0d1117] mb-1.5 group-hover:text-primary transition-colors">{r.label}</p>
                  <p className="text-[13px] text-[#64748b]">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[20px] font-bold text-[#0d1117] mb-5 pb-3" style={{ borderBottom: '2px solid rgba(13,127,196,0.15)' }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

export function InfoCard({ title, children, accent }: { title: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <div className="p-5 rounded-2xl" style={{ background: accent ? '#eff6ff' : '#f8fafb', boxShadow: accent ? '0 2px 12px rgba(13,127,196,0.1)' : '0 2px 12px rgba(0,0,0,0.04)' }}>
      <h3 className="text-[15px] font-bold mb-3" style={{ color: accent ? '#0d7fc4' : '#0d1117' }}>{title}</h3>
      <div className="text-[14px] text-[#374151] leading-[1.8]">{children}</div>
    </div>
  )
}

export function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="p-5 rounded-2xl bg-[#f8fafb] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <p className="font-bold text-[#0d1117] text-[15px] mb-3 flex items-start gap-2">
        <span className="text-primary shrink-0">Q.</span>{q}
      </p>
      <p className="text-[14px] text-[#374151] leading-[1.8] pl-5">{a}</p>
    </div>
  )
}

export function SymptomTable({ rows }: { rows: { name: string; desc: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: '#f0f7ff' }}>
            <th className="text-left py-3.5 px-5 text-primary font-bold w-28 text-[13px]">증상</th>
            <th className="text-left py-3.5 px-5 text-[#374151] font-bold text-[13px]">설명</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((r, i) => (
            <tr key={r.name} style={{ background: i % 2 === 0 ? 'white' : '#f8fafb' }}>
              <td className="py-3.5 px-5 text-[#0d1117] font-bold whitespace-nowrap text-[13px]">{r.name}</td>
              <td className="py-3.5 px-5 text-[#374151] text-[13px] leading-relaxed">{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}