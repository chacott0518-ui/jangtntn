import { writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'
function w(p, c) { mkdirSync(dirname(p), {recursive:true}); writeFileSync(p, c, 'utf8'); console.log('✓', p) }

// ════════════════════════════════
// 1. Footer — 진료시간/오시는길/바로가기 삭제
// ════════════════════════════════
w('src/components/layout/Footer.tsx', `import Link from 'next/link'
import Image from 'next/image'
import { ADDRESS, PHONE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#0d1117]" aria-label="푸터">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-xs">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.png" width={140} height={42} alt="장튼튼항외과" className="object-contain h-9 w-auto brightness-0 invert" />
            </Link>
            <p className="text-[13px] text-[#8b949e] leading-[1.9]">
              마음을 다해 진료하는 장튼튼항외과<br />
              정확한 진단 · 바른 진료 · 따뜻한 회복<br />
              김포 구래역 1번출구 · 외과전문의 한호선
            </p>
            <div className="flex gap-2 flex-wrap">
              <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-[#1a3a1e] text-[#4ade80] text-[12px] font-bold hover:bg-[#166534] transition-colors">📝 공식 블로그</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-[#3a2000] text-[#FEE500] text-[12px] font-bold hover:bg-[#4a2c00] transition-colors">💬 카카오 상담</a>
            </div>
          </div>
        </div>
        <div className="pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[11px] text-[#555]">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <span>상호명: 장튼튼항외과의원</span>
            <span>사업자등록번호: 260-92-01324</span>
            <span>대표자: 한호선</span>
            <span>전화: {PHONE}</span>
            <span>팩스: 031-981-7282</span>
            <span className="hidden md:inline">주소: {ADDRESS}</span>
          </div>
          <p className="shrink-0">© {new Date().getFullYear()} 장튼튼항외과. All rights reserved.</p>
        </div>
      </div>
      <div className="h-20 md:h-0" />
    </footer>
  )
}
`)

// ════════════════════════════════
// 2. Header — 스크롤 오류 수정 + 햄버거 버튼 항상 보이게
// ════════════════════════════════
w('src/components/layout/Header.tsx', `'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/constants'

const VISIBLE_NAV = NAV_ITEMS.slice(0, 7)
const HIDDEN_NAV = NAV_ITEMS.slice(7)

function Logo() {
  return (
    <Link href="/" className="shrink-0">
      <Image src="/images/logo.png" width={140} height={42} alt="장튼튼항외과 로고" className="object-contain h-9 w-auto" priority />
    </Link>
  )
}

function DesktopNav({ scrolled }: { scrolled: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [moreOpen, setMoreOpen] = useState(false)
  return (
    <nav className="hidden lg:flex items-center">
      {VISIBLE_NAV.map((item, i) => (
        <div key={item.href} className="relative" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
          <Link href={item.href} className={\`px-2.5 py-1.5 text-[13px] font-bold transition-all whitespace-nowrap \${scrolled ? 'text-[#1a1a2e] hover:text-primary' : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] hover:text-white/80'}\`}>
            {item.label}
          </Link>
          <AnimatePresence>
            {hovered === i && item.subItems.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                <div className="rounded-2xl shadow-[0_8px_32px_rgba(13,127,196,0.2)] py-2 min-w-[170px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d7fc4 0%, #0d9488 100%)' }}>
                  {item.subItems.map((sub) => (
                    <Link key={sub.href} href={sub.href} className="block px-5 py-2.5 text-[13px] font-semibold text-white/90 hover:text-white hover:bg-white/15 transition-all">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      {HIDDEN_NAV.length > 0 && (
        <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
          <button className={\`px-2.5 py-1.5 text-[13px] font-bold transition-all whitespace-nowrap \${scrolled ? 'text-[#1a1a2e] hover:text-primary' : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] hover:text-white/80'}\`}>• • •</button>
          <AnimatePresence>
            {moreOpen && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="absolute top-full right-0 pt-2 z-50">
                <div className="rounded-2xl shadow-[0_8px_32px_rgba(13,127,196,0.2)] py-2 min-w-[150px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d7fc4 0%, #0d9488 100%)' }}>
                  {HIDDEN_NAV.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-5 py-2.5 text-[13px] font-semibold text-white/90 hover:text-white hover:bg-white/15 transition-all">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </nav>
  )
}

function DesktopCTA() {
  return (
    <div className="hidden lg:flex items-center shrink-0">
      <Link href="/consultation" className="btn-shine inline-flex items-center gap-2 px-6 py-2 rounded-full text-[13px] font-bold text-white shadow-[0_4px_14px_rgba(13,127,196,0.3)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}>
        📅 온라인예약
      </Link>
    </div>
  )
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  const handleLinkClick = () => {
    onClose()
    setExpanded(null)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-40 lg:hidden" style={{ background: 'rgba(0,0,0,0.3)' }} onClick={onClose} />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0, transition: { duration: 0.32, ease: [0.16,1,0.3,1] } }} exit={{ x: '100%', transition: { duration: 0.22, ease: [0.4,0,0.2,1] } }} className="fixed top-0 right-0 bottom-0 z-50 lg:hidden flex flex-col" style={{ width: '75%', maxWidth: '320px', background: 'linear-gradient(160deg, #0d7fc4 0%, #0a6ba8 40%, #0d9488 100%)' }}>
            <div className="h-14 shrink-0 flex items-center justify-between px-4">
              <span className="text-white font-black text-[15px]">메뉴</span>
              <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }} aria-label="메뉴 닫기">
                <span className="text-white font-bold text-base leading-none">✕</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {NAV_ITEMS.map((item, i) => (
                <div key={item.href} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {item.subItems.length > 0 ? (
                    <>
                      <button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full flex items-center justify-between px-5 py-3 text-[13px] font-bold text-white">
                        {item.label}
                        <motion.span animate={{ rotate: expanded === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[10px] text-white/55">▼</motion.span>
                      </button>
                      <AnimatePresence>
                        {expanded === i && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }} className="overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <div className="py-1 pl-5 pr-4 flex flex-col">
                              {item.subItems.map((sub) => (
                                <Link key={sub.href} href={sub.href} onClick={handleLinkClick} className="flex items-center gap-2 py-2.5 px-2 rounded-lg text-[12px] font-semibold text-white/82 hover:text-white transition-all">
                                  <span className="w-1 h-1 rounded-full bg-white/45 shrink-0" />{sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href} onClick={handleLinkClick} className="flex items-center px-5 py-3 text-[13px] font-bold text-white">{item.label}</Link>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 shrink-0">
              <Link href="/consultation" onClick={handleLinkClick} className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-[14px] font-bold text-white" style={{ background: 'rgba(255,255,255,0.2)' }}>
                📅 온라인 예약
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className={\`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 \${scrolled ? 'bg-white/97 backdrop-blur-xl shadow-[0_2px_16px_rgba(0,0,0,0.07)]' : 'bg-transparent'}\`}>
      <div className="max-w-7xl mx-auto h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        <Logo />
        <DesktopNav scrolled={scrolled} />
        <DesktopCTA />
        {/* 햄버거 버튼 — 스크롤 여부 관계없이 항상 보임 */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center z-50"
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          <div className="flex flex-col justify-center items-center w-5 h-4">
            <motion.span
              className="block w-5 h-[2px] rounded-full"
              style={{ background: scrolled || mobileOpen ? '#1a1a2e' : 'white', position: 'absolute' }}
              animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-[2px] rounded-full"
              style={{ background: scrolled || mobileOpen ? '#1a1a2e' : 'white', position: 'absolute' }}
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-5 h-[2px] rounded-full"
              style={{ background: scrolled || mobileOpen ? '#1a1a2e' : 'white', position: 'absolute' }}
              animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
`)

// ════════════════════════════════
// 3. DiseasePage — 한글 정상화 + StickyCTA 전화상담 제거
// ════════════════════════════════
w('src/components/layout/DiseasePage.tsx', `'use client'

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

export default function DiseasePage({ breadcrumbs, title, subtitle, heroImage, sideNav, related, children }: DiseasePageProps) {
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
          <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] tracking-[-0.02em] mb-2 leading-tight">{title}</h1>
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
                  <Link key={n.href} href={n.href} className="block px-3 py-2.5 rounded-xl text-[13px] font-semibold text-[#374151] hover:text-primary hover:bg-[#f0f7ff] transition-all">{n.label}</Link>
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
`)

// ════════════════════════════════
// 4. MobileBottomBar — 한글 정상화
// ════════════════════════════════
w('src/components/layout/MobileBottomBar.tsx', `'use client'

import Link from 'next/link'
import { PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 h-16">
        <a
          href="tel:0319877282"
          className="flex flex-col items-center justify-center gap-1 text-white"
          style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}
        >
          <PhoneIcon className="w-5 h-5" />
          <span className="text-[11px] font-bold">전화 상담</span>
        </a>
        <Link
          href="/consultation"
          className="flex flex-col items-center justify-center gap-1 bg-primary text-white"
        >
          <CalendarDaysIcon className="w-5 h-5" />
          <span className="text-[11px] font-bold">온라인예약</span>
        </Link>
        <a
          href="#"
          className="flex flex-col items-center justify-center gap-1 bg-[#FEE500] text-[#3C1E1E]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.67-.15.56-.96 3.58-1 3.73 0 .09.03.18.1.23a.26.26 0 00.25.02c.35-.05 4.02-2.64 4.66-3.08.43.06.87.09 1.33.09 5.52 0 10-3.58 10-7.66S17.52 3 12 3z" />
          </svg>
          <span className="text-[11px] font-bold">카카오상담</span>
        </a>
      </div>
    </div>
  )
}
`)

console.log('\n✅ 4개 파일 완료!')
console.log('  - Footer: 진료시간/오시는길/바로가기 삭제')
console.log('  - Header: 스크롤 오류 수정, 햄버거 버튼 항상 보임')
console.log('  - DiseasePage: 한글 정상화, 전화상담 버튼 제거')
console.log('  - MobileBottomBar: 한글 정상화')
