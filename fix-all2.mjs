import { writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'
function w(p, c) { mkdirSync(dirname(p), {recursive:true}); writeFileSync(p, c, 'utf8'); console.log('✓', p) }

// ═══════════════════════════════════════════════════════
// 1. FOOTER — 오시는길/예약문의/온라인예약 버튼 삭제
// ═══════════════════════════════════════════════════════
w('src/components/layout/Footer.tsx', `import Link from 'next/link'
import Image from 'next/image'
import { ADDRESS, PHONE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#0d1117]" aria-label="푸터">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.png" width={140} height={42} alt="장튼튼항외과" className="object-contain h-9 w-auto brightness-0 invert" />
            </Link>
            <p className="text-[13px] text-[#8b949e] leading-[1.9]">
              마음을 다해 진료하는 장튼튼항외과<br />
              정확한 진단 · 바른 진료 · 따뜻한 회복<br />
              김포 구래역 1번출구 · 외과전문의 한호선
            </p>
            <div className="flex gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-[#1a3a1e] text-[#4ade80] text-[12px] font-bold hover:bg-[#166534] transition-colors">📝 공식 블로그</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-[#3a2000] text-[#FEE500] text-[12px] font-bold hover:bg-[#4a2c00] transition-colors">💬 카카오 상담</a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[13px]">
            <div className="space-y-2">
              <p className="text-white font-bold mb-3">진료시간</p>
              <p className="text-[#8b949e]">평일 09:00 ~ 18:00</p>
              <p className="text-[#8b949e]">토요일 09:00 ~ 15:00</p>
              <p className="text-[#8b949e]">점심 13:00 ~ 14:00</p>
              <p className="text-[#0d9488] text-[12px]">※ 일요일·공휴일 휴진</p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-bold mb-3">바로가기</p>
              <Link href="/about/doctor" className="block text-[#8b949e] hover:text-white transition-colors">의료진 소개</Link>
              <Link href="/about/info" className="block text-[#8b949e] hover:text-white transition-colors">진료안내</Link>
              <Link href="/anorectal/hemorrhoid" className="block text-[#8b949e] hover:text-white transition-colors">치핵 클리닉</Link>
              <Link href="/endoscopy/colon" className="block text-[#8b949e] hover:text-white transition-colors">대장내시경</Link>
            </div>
            <div className="space-y-2">
              <p className="text-white font-bold mb-3">오시는 길</p>
              <p className="text-[#8b949e] leading-relaxed">{ADDRESS}</p>
              <p className="text-[#8b949e]">🚇 구래역 1번출구</p>
              <p className="text-[#8b949e]">🅿️ 계림 M스퀘어</p>
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

// ═══════════════════════════════════════════════════════
// 2. HEADER — 스크롤 오류 수정 + 한글 정상화
// ═══════════════════════════════════════════════════════
w('src/components/layout/Header.tsx', `'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
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
    <nav className="hidden lg:flex items-center" aria-label="주요 메뉴">
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

function DesktopCTA({ scrolled }: { scrolled: boolean }) {
  return (
    <div className="hidden lg:flex items-center shrink-0">
      <Link href="/consultation" className="btn-shine inline-flex items-center gap-2 px-6 py-2 rounded-full text-[13px] font-bold text-white shadow-[0_4px_14px_rgba(13,127,196,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(13,127,196,0.45)] transition-all duration-200 whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}>
        📅 온라인예약
      </Link>
    </div>
  )
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<number | null>(null)
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
                                <Link key={sub.href} href={sub.href} onClick={onClose} className="flex items-center gap-2 py-2.5 px-2 rounded-lg text-[12px] font-semibold text-white/82 hover:text-white transition-all">
                                  <span className="w-1 h-1 rounded-full bg-white/45 shrink-0" />{sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href} onClick={onClose} className="flex items-center px-5 py-3 text-[13px] font-bold text-white">{item.label}</Link>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 shrink-0">
              <Link href="/consultation" onClick={onClose} className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-[14px] font-bold text-white" style={{ background: 'rgba(255,255,255,0.2)' }}>
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
  const onScroll = useCallback(() => { setScrolled(window.scrollY > 10) }, [])
  useEffect(() => { window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [onScroll])
  useEffect(() => { document.body.style.overflow = mobileOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [mobileOpen])
  return (
    <header className={\`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 \${scrolled ? 'bg-white/97 backdrop-blur-xl shadow-[0_2px_16px_rgba(0,0,0,0.07)]' : 'bg-transparent'}\`}>
      <div className="max-w-7xl mx-auto h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        <Logo />
        <DesktopNav scrolled={scrolled} />
        <DesktopCTA scrolled={scrolled} />
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden relative w-10 h-10 flex items-center justify-center z-50" aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}>
          <div className="flex flex-col justify-center items-center w-5 h-4">
            <motion.span className={\`block w-5 h-[2px] rounded-full \${scrolled ? 'bg-[#1a1a2e]' : 'bg-white'}\`} animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }} transition={{ duration: 0.2 }} style={{ position: 'absolute' }} />
            <motion.span className={\`block w-5 h-[2px] rounded-full \${scrolled ? 'bg-[#1a1a2e]' : 'bg-white'}\`} animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.15 }} style={{ position: 'absolute' }} />
            <motion.span className={\`block w-5 h-[2px] rounded-full \${scrolled ? 'bg-[#1a1a2e]' : 'bg-white'}\`} animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }} transition={{ duration: 0.2 }} style={{ position: 'absolute' }} />
          </div>
        </button>
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
`)

// ═══════════════════════════════════════════════════════
// 3. DepartmentCards — 모바일 가로 스크롤 캐러셀
// ═══════════════════════════════════════════════════════
w('src/components/sections/DepartmentCards.tsx', `'use client'
import Link from 'next/link'
import Image from 'next/image'

const CARDS = [
  { href: '/anorectal', icon: '❤️', title: '대장항문센터', desc: '치핵·치열·치루·항문소양증·항문콘딜로마·항문거근증후군·모소동·변비/설사 전문 진료. 외과전문의가 직접 진단하고 치료합니다.', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80' },
  { href: '/pph', icon: '✂️', title: 'PPH 수술', desc: '자동봉합기를 이용한 최소침습 치핵 수술. 통증이 적고 입원 기간이 짧으며 일상 복귀가 빠른 검증된 치핵 치료법입니다.', img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80' },
  { href: '/endoscopy', icon: '🔬', title: '내시경센터', desc: '위내시경·대장내시경·대장용종 제거술. 수면 내시경으로 편안하게 받는 정밀 검사. 대장암 조기 발견의 핵심입니다.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  { href: '/skin', icon: '✂️', title: '피부종양센터', desc: '지방종·표피낭종·연성섬유종(쥐젖) 제거. 국소마취 후 당일 시술 가능한 안전하고 간단한 외래 수술입니다.', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80' },
  { href: '/surgery', icon: '🏥', title: '기타외과질환', desc: '화상(1·2·3도)·내성발톱 교정·상처봉합·영양수액·예방접종. 일상에서 생기는 외과적 문제를 전문적으로 치료합니다.', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80' },
  { href: '/consultation', icon: '💬', title: '온라인 상담', desc: '24시간 예약 접수. 이름·연락처·증상을 남겨주시면 빠르게 연락드립니다. 카카오 채널로도 상담 가능합니다.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
]

export default function DepartmentCards() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="mb-8 lg:mb-12">
          <p className="text-[12px] font-black text-primary tracking-widest uppercase mb-3">DEPARTMENTS</p>
          <h2 className="text-[28px] lg:text-[38px] font-black text-[#0d1117] tracking-tight mb-2">진료 센터</h2>
          <p className="text-[15px] text-[#6b7280]">각 분야 전문 진료를 만나보세요</p>
        </div>

        {/* 모바일: 가로 스크롤 캐러셀 */}
        <div className="lg:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {CARDS.map((card) => (
              <Link key={card.href} href={card.href} className="shrink-0 snap-start w-[72vw] max-w-[280px] rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.09)] overflow-hidden flex flex-col">
                <div className="relative" style={{ height: '160px' }}>
                  <Image src={card.img} alt={card.title} fill className="object-cover" sizes="280px" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 flex items-center justify-center text-[18px] shadow-sm">{card.icon}</div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-[15px] font-black text-[#0d1117] mb-1.5">{card.title}</h3>
                  <p className="text-[12px] text-[#6b7280] leading-[1.7] flex-1 line-clamp-3">{card.desc}</p>
                  <p className="text-[12px] font-bold text-primary mt-3">자세히 보기 →</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-3">
            {CARDS.map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#d1d5db]" />)}
          </div>
        </div>

        {/* 데스크탑/태블릿: 그리드 */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <Link key={card.href} href={card.href} className="group rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] overflow-hidden hover:shadow-[0_8px_32px_rgba(13,127,196,0.15)] hover:-translate-y-1 transition-all duration-300">
              <div className="relative" style={{ height: '200px' }}>
                <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-2xl bg-white/90 flex items-center justify-center text-[20px] shadow-sm">{card.icon}</div>
              </div>
              <div className="p-5">
                <h3 className="text-[17px] font-black text-[#0d1117] mb-2">{card.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-[1.75] mb-4">{card.desc}</p>
                <p className="text-[13px] font-bold text-primary group-hover:gap-2 transition-all">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
`)

// ═══════════════════════════════════════════════════════
// 4. 진료안내 — 진료시간 왼쪽 + 오시는길 오른쪽, 네이버지도 삭제
// ═══════════════════════════════════════════════════════
w('src/app/about/info/page.tsx', `'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { ADDRESS, HOURS } from '@/lib/constants'

export default function InfoPage() {
  const [tab, setTab] = useState<'hours'|'location'>('hours')
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" alt="진료안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 병원소개 / <strong className="text-[#0d1117]">진료안내</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] tracking-[-0.02em] mb-2">진료안내</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">진료시간 및 오시는 길 안내</p>
        </div>
      </div>

      {/* 모바일 탭 */}
      <div className="lg:hidden flex border-b border-[#e5e7eb] sticky top-16 bg-white z-10">
        <button onClick={() => setTab('hours')} className={\`flex-1 py-3.5 text-[14px] font-bold border-b-2 transition-colors \${tab === 'hours' ? 'border-primary text-primary' : 'border-transparent text-[#9ca3af]'}\`}>진료시간</button>
        <button onClick={() => setTab('location')} className={\`flex-1 py-3.5 text-[14px] font-bold border-b-2 transition-colors \${tab === 'location' ? 'border-primary text-primary' : 'border-transparent text-[#9ca3af]'}\`}>오시는 길</button>
      </div>

      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-8 lg:py-14">
        {/* 데스크탑: 2컬럼 나란히 */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          <HoursCard />
          <LocationCard />
        </div>

        {/* 모바일: 탭 전환 */}
        <div className="lg:hidden">
          {tab === 'hours' ? <HoursCard /> : <LocationCard />}
        </div>
      </div>
    </div>
  )
}

function HoursCard() {
  return (
    <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <div className="flex items-center gap-2.5 mb-6">
        <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}>
          <ClockIcon className="w-5 h-5 text-white" />
        </span>
        <h2 className="text-[20px] font-bold text-[#0d1117]">진료시간</h2>
      </div>
      <div className="space-y-2.5">
        <div className="grid grid-cols-2 items-center rounded-xl bg-[#f8fafb] px-5 py-4">
          <span className="text-[14px] font-semibold text-[#374151]">평일</span>
          <span className="text-[14px] font-black text-[#0d1117]">09:00 ~ 18:00</span>
        </div>
        <div className="grid grid-cols-2 items-center rounded-xl bg-[#f0f7ff] px-5 py-4">
          <span className="text-[14px] font-semibold text-[#374151]">토요일</span>
          <span className="text-[14px] font-black text-[#0d1117]">09:00 ~ 15:00</span>
        </div>
        <div className="grid grid-cols-2 items-center rounded-xl bg-[#f8fafb] px-5 py-4">
          <span className="text-[14px] font-semibold text-[#374151]">점심시간</span>
          <span className="text-[14px] font-black text-[#0d1117]">13:00 ~ 14:00</span>
        </div>
        <div className="mt-3 space-y-1.5">
          <p className="text-[13px] font-bold text-primary">※ 토요일은 점심시간 없이 진료합니다</p>
          <p className="text-[13px] font-bold text-primary">※ 점심시간 없이 진료하는 날이 있을 수 있으니 전화 문의 바랍니다</p>
          <p className="text-[12px] text-[#94a3b8]">일요일 · 공휴일 휴진</p>
        </div>
      </div>
    </div>
  )
}

function LocationCard() {
  return (
    <div className="p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <div className="flex items-center gap-2.5 mb-6">
        <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d9488, #0d7fc4)' }}>
          <MapPinIcon className="w-5 h-5 text-white" />
        </span>
        <h2 className="text-[20px] font-bold text-[#0d1117]">오시는 길</h2>
      </div>
      <div className="space-y-4 text-[14px]">
        <div className="rounded-xl bg-[#f8fafb] px-5 py-4">
          <p className="text-[12px] font-bold text-primary mb-1">주소</p>
          <p className="font-semibold text-[#0d1117] leading-relaxed">{ADDRESS}</p>
        </div>
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <span className="text-[20px] shrink-0">🚇</span>
            <div>
              <p className="font-bold text-[#0d1117] text-[13px]">지하철</p>
              <p className="text-[#6b7280] text-[13px]">김포골드라인 구래역 1번출구 → 도보 3분</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[20px] shrink-0">🅿️</span>
            <div>
              <p className="font-bold text-[#0d1117] text-[13px]">주차</p>
              <p className="text-[#6b7280] text-[13px]">계림 M스퀘어 지하주차장 (진료 시 무료)</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[20px] shrink-0">🚌</span>
            <div>
              <p className="font-bold text-[#0d1117] text-[13px]">버스</p>
              <p className="text-[#6b7280] text-[13px]">간선 60-2, 70, 700, 700-1 / 좌석 22, 800</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[20px] shrink-0">📠</span>
            <div>
              <p className="font-bold text-[#0d1117] text-[13px]">팩스</p>
              <p className="text-[#6b7280] text-[13px]">031-981-7282</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`)

// ═══════════════════════════════════════════════════════
// 5. 원장소개 — 모바일 최적화 (탭/아코디언 방식)
// ═══════════════════════════════════════════════════════
w('src/app/about/doctor/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '의료진 소개 | 장튼튼항외과',
  description: '장튼튼항외과 대표원장 한호선 원장님을 소개합니다. 외과 전문의, 대장항문 전문 진료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/about/doctor' },
}

const career = [
  { year: '학력', items: ['연세대학교 의과대학 졸업', '연세대학교 의과대학원 졸업'] },
  { year: '경력', items: ['외과 전문의 자격 취득', '前 대학병원 외과 전임의', '대장항문학회 정회원', '소화기내시경학회 정회원', '외과학회 정회원'] },
  { year: '전문', items: ['치핵·치열·치루 수술', '대장내시경·위내시경', 'PPH 수술 전문', '피부종양 제거술'] },
]

export default function DoctorPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80" alt="의료진 소개" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 병원소개 / <strong className="text-[#0d1117]">의료진 소개</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">의료진 소개</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">경험과 실력을 갖춘 전문 의료진</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        {/* 모바일: 컴팩트 카드 */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {/* 사진 */}
          <div className="relative mx-auto md:mx-0 shrink-0 w-40 h-40 md:w-56 md:h-64 lg:w-64 lg:h-80 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(13,127,196,0.2)]">
            <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" alt="대표원장 한호선" fill className="object-cover object-top" sizes="280px" />
            <div className="absolute bottom-0 left-0 right-0 py-3 text-center" style={{ background: 'linear-gradient(to top, rgba(13,127,196,0.95), transparent)' }}>
              <p className="text-white font-black text-[15px]">한호선 원장</p>
              <p className="text-white/80 text-[11px]">외과전문의</p>
            </div>
          </div>

          {/* 정보 */}
          <div className="flex-1">
            <div className="mb-5">
              <p className="text-[13px] font-bold text-primary mb-1">대표원장</p>
              <h2 className="text-[24px] md:text-[28px] font-black text-[#0d1117] mb-1">한호선 원장</h2>
              <p className="text-[14px] text-[#6b7280]">정확한 진단, 바른 진료로 환자분들께 다가갑니다.</p>
              <div className="w-12 h-1 rounded-full bg-primary mt-3" />
            </div>

            <div className="space-y-4">
              {career.map((section) => (
                <div key={section.year}>
                  <p className="text-[12px] font-black text-primary tracking-wider mb-2">{section.year}</p>
                  <div className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-[13px] md:text-[14px] text-[#374151] leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.06), rgba(13,148,136,0.06))' }}>
              <p className="text-[13px] text-[#374151] leading-relaxed italic">
                "환자 한 분 한 분의 이야기를 귀 기울여 듣고, 가장 적합한 치료법을 함께 찾아가겠습니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`)

// ═══════════════════════════════════════════════════════
// 6. 대장항문센터 메인 (404 해결)
// ═══════════════════════════════════════════════════════
w('src/app/anorectal/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '대장항문센터 | 장튼튼항외과',
  description: '치핵·치열·치루·변비·항문소양증 등 대장항문 질환 전문 진료. 외과전문의 직접 진단.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal' },
}

const diseases = [
  { href: '/anorectal/hemorrhoid', title: '치핵(치질)', sub: '항문 주위 혈관이 늘어나 돌출되는 가장 흔한 항문 질환', icon: '🩸', tag: '가장 흔함' },
  { href: '/anorectal/fissure', title: '치열', sub: '항문 점막이 찢어져 배변 시 극심한 통증과 출혈이 발생', icon: '⚡', tag: '통증' },
  { href: '/anorectal/fistula', title: '치루', sub: '항문 주위 농양이 만성화되어 누공이 생기는 질환', icon: '🔴', tag: '수술 필요' },
  { href: '/anorectal/condyloma', title: '항문콘딜로마', sub: 'HPV 바이러스로 인한 항문 주위 사마귀성 병변', icon: '🦠', tag: '바이러스성' },
  { href: '/anorectal/constipation', title: '변비/설사', sub: '만성 변비·과민성 장증후군 등 배변 장애 전문 치료', icon: '💊', tag: '생활습관' },
  { href: '/anorectal/levator', title: '항문거근증후군', sub: '항문 주위 근육 긴장으로 인한 만성 골반 통증', icon: '⚕️', tag: '근육통' },
  { href: '/anorectal/pilonidal', title: '모소동', sub: '꼬리뼈 부위 모낭 감염으로 생기는 낭종 및 누공', icon: '🎯', tag: '수술' },
  { href: '/anorectal/pruritus', title: '항문소양증', sub: '항문 주위의 지속적인 가려움증 원인 진단 및 치료', icon: '🌿', tag: '가려움' },
]

export default function AnorectalPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80" alt="대장항문센터" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">대장항문센터</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">대장항문센터</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">외과전문의가 직접 진단하고 치료합니다</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {diseases.map((d) => (
            <Link key={d.href} href={d.href} className="group flex gap-4 p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-[22px]" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.1), rgba(13,148,136,0.1))' }}>{d.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-black text-[#0d1117]">{d.title}</h3>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">{d.tag}</span>
                </div>
                <p className="text-[12px] text-[#6b7280] leading-[1.7]">{d.sub}</p>
                <p className="text-[12px] font-bold text-primary mt-2 group-hover:translate-x-1 transition-transform">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
`)

// ═══════════════════════════════════════════════════════
// 7. 내시경센터 메인 (404 해결)
// ═══════════════════════════════════════════════════════
w('src/app/endoscopy/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '내시경센터 | 장튼튼항외과',
  description: '위내시경·대장내시경·용종절제술. 수면 내시경으로 편안하게 받는 정밀 검사.',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy' },
}

const menus = [
  { href: '/endoscopy/gastro', title: '위내시경', sub: '식도·위·십이지장을 정밀하게 관찰하여 위암·위궤양·역류성식도염을 조기에 발견합니다.', icon: '🔬', tag: '수면가능' },
  { href: '/endoscopy/colon', title: '대장내시경', sub: '대장과 직장 전체를 관찰하여 대장암·대장폴립·염증성 장질환을 조기에 발견하고 치료합니다.', icon: '🏥', tag: '암예방' },
  { href: '/endoscopy/polyp', title: '용종 절제술', sub: '내시경 중 발견된 용종을 즉시 제거하는 시술로, 대장암 예방에 매우 효과적입니다.', icon: '✂️', tag: '즉시시술' },
]

export default function EndoscopyPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" alt="내시경센터" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">내시경센터</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">내시경센터</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">최신 장비로 정확하고 편안한 내시경 검사</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-5">
          {menus.map((m) => (
            <Link key={m.href} href={m.href} className="group flex gap-5 p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[26px]" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.1), rgba(13,148,136,0.1))' }}>{m.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[17px] font-black text-[#0d1117]">{m.title}</h3>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.tag}</span>
                </div>
                <p className="text-[13px] text-[#6b7280] leading-[1.8]">{m.sub}</p>
                <p className="text-[13px] font-bold text-primary mt-3 group-hover:translate-x-1 transition-transform">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
`)

// ═══════════════════════════════════════════════════════
// 8. 피부종양센터 메인 (404 해결)
// ═══════════════════════════════════════════════════════
w('src/app/skin/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '피부종양센터 | 장튼튼항외과',
  description: '지방종·피지낭종·섬유종 제거. 국소마취 후 당일 시술 가능한 안전하고 간단한 외래 수술.',
  alternates: { canonical: 'https://www.jangtntnhang.com/skin' },
}

const menus = [
  { href: '/skin/lipoma', title: '지방종', sub: '피부 아래에 지방 세포가 뭉쳐 형성되는 양성 종양으로, 국소마취 후 작은 절개로 간단히 제거할 수 있습니다.', icon: '🟡', tag: '당일시술' },
  { href: '/skin/cyst', title: '피지낭종 (표피낭종)', sub: '피지선이 막혀 피부 아래에 피지와 각질이 쌓이는 낭종. 염증 발생 전 제거가 중요합니다.', icon: '⚪', tag: '당일시술' },
  { href: '/skin/fibroma', title: '연성섬유종 (쥐젖)', sub: '마찰이 많은 부위에 생기는 양성 피부 종양. 전기소작 또는 절제로 간단히 치료합니다.', icon: '🟤', tag: '간단제거' },
]

export default function SkinPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80" alt="피부종양센터" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">피부종양센터</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">피부종양센터</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">국소마취 당일 시술, 안전하고 간단한 외래 수술</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-5">
          {menus.map((m) => (
            <Link key={m.href} href={m.href} className="group flex gap-5 p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[26px]" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.1), rgba(13,148,136,0.1))' }}>{m.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[17px] font-black text-[#0d1117]">{m.title}</h3>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.tag}</span>
                </div>
                <p className="text-[13px] text-[#6b7280] leading-[1.8]">{m.sub}</p>
                <p className="text-[13px] font-bold text-primary mt-3 group-hover:translate-x-1 transition-transform">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
`)

// ═══════════════════════════════════════════════════════
// 9. 기타외과질환 메인 (404 해결)
// ═══════════════════════════════════════════════════════
w('src/app/surgery/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '기타외과질환 | 장튼튼항외과',
  description: '화상·내성발톱·상처봉합·영양수액·예방접종. 일상의 외과 문제를 전문적으로 치료합니다.',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery' },
}

const menus = [
  { href: '/surgery/wound', title: '상처 치료', sub: '찰과상·열상·봉합이 필요한 상처부터 만성 상처까지 외과전문의가 직접 처치합니다.', icon: '🩹', tag: '응급가능' },
  { href: '/surgery/burn', title: '화상 치료', sub: '1·2·3도 화상의 단계별 전문 치료. 흉터 최소화를 위한 최신 드레싱 재료를 사용합니다.', icon: '🔥', tag: '전문치료' },
  { href: '/surgery/nail', title: '내성발톱', sub: '발톱이 살을 파고들어 생기는 통증·염증·화농. 통증 없는 교정 및 수술로 근본 치료합니다.', icon: '💅', tag: '통증없는' },
  { href: '/surgery/nutrition', title: '영양 수액', sub: '비타민·미네랄·아미노산이 포함된 맞춤형 영양 수액으로 피로 회복과 면역력 강화를 도와드립니다.', icon: '💉', tag: '당일가능' },
]

export default function SurgeryPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80" alt="기타외과질환" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">기타외과질환</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">기타외과질환</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">일상의 외과 문제, 전문의가 해결합니다</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {menus.map((m) => (
            <Link key={m.href} href={m.href} className="group flex gap-4 p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-[22px]" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.1), rgba(13,148,136,0.1))' }}>{m.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-black text-[#0d1117]">{m.title}</h3>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.tag}</span>
                </div>
                <p className="text-[12px] text-[#6b7280] leading-[1.7] mt-1">{m.sub}</p>
                <p className="text-[12px] font-bold text-primary mt-2 group-hover:translate-x-1 transition-transform">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
`)

// ═══════════════════════════════════════════════════════
// 10. 대장항문 질환 하위페이지 — 풍부한 내용
// ═══════════════════════════════════════════════════════
w('src/app/anorectal/hemorrhoid/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '치핵(치질) | 장튼튼항외과',
  description: '치핵(치질) 전문 치료. 1~4도 내치핵, 외치핵 정확한 진단 후 맞춤 치료. 당일 수술 가능.',
  keywords: '치핵, 치질, 항문 출혈, 항문 돌출, 치핵 수술, 김포 치질',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/hemorrhoid' },
}

export default function HemorrhoidPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80" alt="치핵 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">치핵</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">치핵 (치질)</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">가장 흔한 항문 질환, 정확한 진단과 맞춤 치료</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <Section title="치핵이란?" icon="💡">
          <p>치핵은 항문 주위의 혈관 조직(치핵 쿠션)이 비정상적으로 늘어나거나 돌출되는 질환입니다. 성인의 약 75%가 일생에 한 번 이상 경험할 정도로 매우 흔한 질환입니다. 발생 위치에 따라 치상선 위쪽에 생기는 내치핵과 아래쪽의 외치핵으로 구분되며, 두 가지가 함께 발생하는 혼합치핵도 흔합니다. 초기에는 생활습관 교정만으로도 호전될 수 있으나, 3~4도로 진행되면 수술이 필요합니다.</p>
        </Section>

        <Section title="원인" icon="🔍">
          <ul className="space-y-2.5">
            {['오래 앉아 있는 직업 (사무직, 운전직 등)','만성 변비 또는 잦은 설사','임신 및 출산으로 인한 복압 증가','과음·자극적인 음식 섭취','유전적 요인 (가족력)','비만 및 운동 부족','화장실에서 장시간 스마트폰 사용'].map((t,i) => <li key={i} className="flex gap-2.5 text-[14px] text-[#374151] leading-[1.8]"><span className="text-primary font-bold shrink-0 mt-0.5">·</span>{t}</li>)}
          </ul>
        </Section>

        <Section title="증상 및 단계" icon="📊">
          <div className="space-y-3">
            {[
              { stage: '1도', color: '#22c55e', desc: '배변 시 출혈만 있고 돌출은 없음. 약물·생활습관 교정으로 치료 가능.' },
              { stage: '2도', color: '#eab308', desc: '배변 시 돌출되지만 저절로 들어감. 약물 치료 또는 간단한 시술.' },
              { stage: '3도', color: '#f97316', desc: '돌출 후 손으로 밀어 넣어야 들어감. 수술 적응증.' },
              { stage: '4도', color: '#ef4444', desc: '항상 돌출되어 있고 밀어 넣을 수 없음. 반드시 수술 필요.' },
            ].map((s) => (
              <div key={s.stage} className="flex gap-3 p-4 rounded-xl bg-[#f8fafb]">
                <span className="text-[12px] font-black px-2.5 py-1 rounded-lg text-white shrink-0" style={{ background: s.color }}>{s.stage}</span>
                <p className="text-[13px] text-[#374151] leading-[1.75]">{s.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="치료 방법" icon="⚕️">
          <div className="space-y-4">
            <div className="p-5 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.06), rgba(13,148,136,0.06))' }}>
              <p className="font-bold text-[14px] text-[#0d1117] mb-2">보존적 치료 (1~2도)</p>
              <p className="text-[13px] text-[#6b7280] leading-[1.8]">좌욕(하루 3회, 5~10분), 고섬유식이, 충분한 수분 섭취, 변비약, 연고·좌약 등의 약물 치료로 증상을 완화할 수 있습니다. 배변 후 장시간 화장실에 앉아 있는 습관을 반드시 교정해야 합니다.</p>
            </div>
            <div className="p-5 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.06), rgba(13,148,136,0.06))' }}>
              <p className="font-bold text-[14px] text-[#0d1117] mb-2">수술적 치료 (3~4도)</p>
              <p className="text-[13px] text-[#6b7280] leading-[1.8]">PPH (자동문합기 이용 치핵 절제술), 치핵 결찰 절제술, 고무밴드 결찰법 등의 수술이 시행됩니다. 장튼튼항외과에서는 숙련된 외과전문의가 직접 수술하며, 당일 퇴원이 가능한 경우가 대부분입니다.</p>
            </div>
          </div>
        </Section>

        <Section title="수술 후 관리" icon="🌿">
          <ul className="space-y-2.5">
            {['수술 당일 퇴원 가능, 1~2일 후 가벼운 일상생활 복귀','좌욕 1일 3회 이상 (미온수, 5~10분) — 통증 완화 및 상처 치유에 도움','고섬유식이 섭취, 수분 2L 이상, 변비 예방이 핵심','격렬한 운동·과음은 2~3주 자제','이상 출혈·심한 통증·발열 시 즉시 내원'].map((t,i) => <li key={i} className="flex gap-2.5 text-[14px] text-[#374151] leading-[1.8]"><span className="text-primary font-bold shrink-0">✓</span>{t}</li>)}
          </ul>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="p-6 lg:p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <h2 className="text-[17px] lg:text-[19px] font-black text-[#0d1117] mb-4 flex items-center gap-2">
        <span>{icon}</span>{title}
      </h2>
      <div className="text-[14px] text-[#374151] leading-[1.85]">{children}</div>
    </div>
  )
}
`)

// 치열
w('src/app/anorectal/fissure/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '치열 | 장튼튼항외과',
  description: '치열 전문 치료. 배변 시 항문 통증·출혈. 급성·만성 치열 정확한 진단과 치료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/fissure' },
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="p-6 lg:p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <h2 className="text-[17px] lg:text-[19px] font-black text-[#0d1117] mb-4 flex items-center gap-2"><span>{icon}</span>{title}</h2>
      <div className="text-[14px] text-[#374151] leading-[1.85]">{children}</div>
    </div>
  )
}

export default function FissurePage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80" alt="치열 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">치열</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">치열</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 점막의 찢어짐으로 인한 통증과 출혈</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <Section title="치열이란?" icon="💡">
          <p>치열은 항문 입구의 피부와 점막이 찢어진 상태를 말합니다. 배변 시 찢어지는 듯한 극심한 통증과 선홍색 출혈이 특징적인 증상입니다. 배변 후에도 수십 분에서 수 시간 동안 통증이 지속되어 배변 자체를 두려워하게 되고, 이로 인해 변비가 심해지는 악순환이 반복됩니다. 발생 빈도는 20~40대 여성에서 가장 높으며, 전방 또는 후방 정중선에서 주로 발생합니다.</p>
        </Section>
        <Section title="급성 치열 vs 만성 치열" icon="📊">
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#f0f7ff]">
              <p className="font-bold text-[14px] text-[#0d7fc4] mb-2">급성 치열</p>
              <p className="text-[13px] text-[#374151] leading-[1.8]">최근 발생한 표재성 열상. 변비 교정, 좌욕, 국소 마취 연고, 식이요법으로 대부분 6~8주 내 자연 치유됩니다. 조기 치료가 만성화를 막는 핵심입니다.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#fff7ed]">
              <p className="font-bold text-[14px] text-[#f97316] mb-2">만성 치열</p>
              <p className="text-[13px] text-[#374151] leading-[1.8]">8주 이상 지속되는 치열로, 바닥에 섬유화 조직(감시 치핵)이 생기고 항문 유두가 비대해집니다. 내괄약근이 과도하게 수축되어 보존적 치료 효과가 제한되므로 수술적 치료가 필요합니다.</p>
            </div>
          </div>
        </Section>
        <Section title="치료 방법" icon="⚕️">
          <ul className="space-y-3">
            {[
              '좌욕: 하루 3회 이상 미온수 좌욕으로 항문 괄약근 이완 및 혈류 개선',
              '약물 치료: 국소 마취 연고, 칼슘 통로 차단제 연고, 글리세린 삼질산염 연고로 내괄약근 압력 감소',
              '보톡스 주사: 내괄약근에 보톡스 주입으로 일시적 이완 효과',
              '수술 (내괄약근 측방절개술): 만성 치열에서 시행. 내괄약근 일부를 절개하여 항문 압력을 낮춤. 치유율 95% 이상, 당일 퇴원 가능',
            ].map((t,i) => <li key={i} className="flex gap-2.5 text-[14px] text-[#374151] leading-[1.8]"><span className="text-primary font-bold shrink-0">✓</span>{t}</li>)}
          </ul>
        </Section>
      </div>
    </div>
  )
}
`)

// 치루
w('src/app/anorectal/fistula/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '치루 | 장튼튼항외과',
  description: '치루 전문 치료. 항문 주위 농양 및 누공. 수술로 근치적 치료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/fistula' },
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="p-6 lg:p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <h2 className="text-[17px] lg:text-[19px] font-black text-[#0d1117] mb-4 flex items-center gap-2"><span>{icon}</span>{title}</h2>
      <div className="text-[14px] text-[#374151] leading-[1.85]">{children}</div>
    </div>
  )
}

export default function FistulaPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80" alt="치루 치료" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">치루</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">치루</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">항문 주위 농양에서 발전하는 만성 누공 질환</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <Section title="치루란?" icon="💡">
          <p>치루는 항문샘에 세균이 침입하여 항문 주위 농양이 생기고, 이 농양이 터지면서 항문 내부와 항문 주위 피부를 연결하는 비정상적인 터널(누공)이 형성된 상태입니다. 대부분 항문 주위 농양을 제대로 치료하지 않거나, 단순 절개 배농 후 완전히 치유되지 않아 발생합니다. 저절로 낫지 않으며, 반드시 수술로 누공 경로를 제거해야 합니다.</p>
        </Section>
        <Section title="증상" icon="🔍">
          <ul className="space-y-2.5">
            {['항문 주위 피부에서 고름·분비물이 지속적으로 나옴','항문 주위 통증, 불쾌감, 부종','누공 입구 부위의 피부 함몰 또는 구멍','발열, 오한 (농양 동반 시)','분비물로 인한 항문 소양증 및 피부 짓무름'].map((t,i) => <li key={i} className="flex gap-2.5 text-[14px] text-[#374151] leading-[1.8]"><span className="text-primary font-bold shrink-0">·</span>{t}</li>)}
          </ul>
        </Section>
        <Section title="치료 (수술)" icon="⚕️">
          <div className="space-y-3">
            {[
              { name: '누공 절개술', desc: '누공 경로를 완전히 열어 제거하는 방법. 단순 저위 치루에 가장 많이 사용. 치유율이 높고 재발이 적습니다.' },
              { name: 'Seton법', desc: '괄약근을 많이 침범한 고위 치루에서 실을 통과시켜 서서히 절개하는 방법. 변실금 위험을 최소화합니다.' },
              { name: '점막 전진 피판술', desc: '누공 내공을 막고 정상 점막으로 덮는 방법. 복잡 치루에서 사용됩니다.' },
            ].map((t) => (
              <div key={t.name} className="p-4 rounded-xl bg-[#f8fafb]">
                <p className="font-bold text-[14px] text-[#0d1117] mb-1">{t.name}</p>
                <p className="text-[13px] text-[#6b7280] leading-[1.8]">{t.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
`)

// 나머지 anorectal 페이지들 (condyloma, constipation, levator, pilonidal, pruritus)
const anoRectalRest = [
  {
    slug: 'condyloma', title: '항문콘딜로마', sub: 'HPV 바이러스로 인한 항문 주위 사마귀성 병변',
    sections: [
      { title: '콘딜로마란?', icon: '💡', body: 'HPV(인유두종 바이러스) 감염으로 항문 주위 또는 항문 내부에 사마귀 모양의 병변이 생기는 성병입니다. 성 접촉을 통해 주로 감염되며, 잠복기는 3주~8개월로 다양합니다. 초기에는 작은 구진으로 시작하지만 치료하지 않으면 닭벼슬 모양으로 커지고 퍼질 수 있습니다. 재발이 잦은 질환이므로 꾸준한 추적 관찰이 필요합니다.' },
      { title: '증상', icon: '🔍', body: '항문 주위의 작은 구진 또는 융기, 가려움증, 불편감, 배변 시 통증, 항문 분비물 증가, 병변이 커지면 출혈이 생기기도 합니다. 병변이 항문 내부에 있을 경우 증상이 없어 발견이 늦어질 수 있습니다.' },
      { title: '치료', icon: '⚕️', body: '전기소작술(병변을 고주파로 태워 제거), 레이저 치료(CO2 레이저), 외과적 절제술(큰 병변 또는 넓은 범위), 포도필린·이미퀴모드 연고(약물 도포) 등의 방법이 있습니다. 병변의 크기와 위치에 따라 최적의 방법을 선택하며, 재발 방지를 위해 면역력 강화와 정기 추적 검사가 필요합니다.' },
    ]
  },
  {
    slug: 'constipation', title: '변비·설사', sub: '만성 배변 장애의 원인과 전문 치료',
    sections: [
      { title: '변비란?', icon: '💡', body: '일주일에 배변 횟수가 3회 미만이거나, 배변 시 과도한 힘이 필요하거나, 배변 후 잔변감이 자주 있는 상태를 만성 변비라고 합니다. 현대인의 약 20%가 경험하는 매우 흔한 소화기 질환이며, 특히 여성과 노인에서 더 흔합니다. 치핵, 치열 등 항문 질환의 주요 원인이기도 합니다.' },
      { title: '원인', icon: '🔍', body: '식이섬유 섭취 부족, 수분 섭취 부족, 운동 부족, 스트레스·불규칙한 생활, 배변 참는 습관, 갑상선 기능저하증·당뇨 등 전신 질환, 항우울제·철분제·마약성 진통제 등 약물 부작용, 대장의 운동 기능 저하가 주요 원인입니다.' },
      { title: '치료', icon: '⚕️', body: '충분한 수분 섭취(하루 1.5~2L), 식이섬유 섭취 증가(하루 25~30g), 규칙적인 유산소 운동, 정해진 시간에 배변 습관 형성, 삼투성 완하제·팽창성 완하제 약물 치료, 바이오피드백 훈련이 효과적입니다. 대장통과시간 측정, 대장내시경 등 정밀 검사를 통해 기질적 원인을 배제하는 것이 중요합니다.' },
    ]
  },
  {
    slug: 'levator', title: '항문거근증후군', sub: '항문 주위 근육 긴장으로 인한 만성 골반 통증',
    sections: [
      { title: '항문거근증후군이란?', icon: '💡', body: '항문거근증후군은 항문을 들어올리는 근육인 항문거근(levator ani)이 과도하게 긴장하거나 경련을 일으켜 항문 주위 또는 직장 안쪽의 만성 통증이 발생하는 질환입니다. 기질적 원인 없이 생기는 기능성 항문직장 통증의 하나로, 스트레스·자세·직장의 긴장감과 밀접한 관련이 있습니다.' },
      { title: '증상', icon: '🔍', body: '항문 또는 직장 깊숙한 곳의 압박감·묵직함·통증, 오래 앉아 있을 때 심해지는 통증, 배변 후 통증 악화, 때로 좌측 대퇴부나 허리로 방사되는 통증, 20분 이상 지속되는 반복적인 직장 통증이 특징입니다.' },
      { title: '치료', icon: '⚕️', body: '바이오피드백 치료(항문 근육 이완 훈련, 1차 치료법으로 효과가 가장 우수), 항문 괄약근 마사지, 항문거근에 대한 전기 자극 치료, 스트레스 관리 및 자세 교정, 근이완제·항우울제 약물 치료, 보톡스 주입 치료 등이 활용됩니다.' },
    ]
  },
  {
    slug: 'pilonidal', title: '모소동', sub: '꼬리뼈 부위 모낭 감염으로 생기는 낭종',
    sections: [
      { title: '모소동이란?', icon: '💡', body: '모소동(Pilonidal Sinus)은 꼬리뼈 부위(미골 상부)의 피부 아래에 털이 박혀 들어가거나 모낭에 감염이 생기면서 낭종과 누공이 형성되는 질환입니다. 주로 20~30대 남성, 특히 털이 많고 체형이 뚱뚱하거나 장시간 앉아 있는 분들에게 많이 발생합니다. 재발이 잦으므로 완전한 수술적 제거가 중요합니다.' },
      { title: '증상', icon: '🔍', body: '꼬리뼈 위쪽 정중선의 통증·부종·발적, 구멍(sinus opening)에서 분비물·고름 배출, 급성 감염 시 심한 통증과 발열, 만성기에는 간헐적 분비물과 불쾌감이 지속됩니다.' },
      { title: '치료', icon: '⚕️', body: '급성 농양기: 절개 배농(즉각적인 통증 완화). 근치적 치료: 낭종과 누공 경로를 완전히 절제하는 수술이 필요합니다. 일차 봉합, 개방성 치유, 피판 수술(Limberg flap, Karydakis flap) 등 방법을 선택합니다. 수술 후 재발 방지를 위해 해당 부위 제모 및 청결 유지가 중요합니다.' },
    ]
  },
  {
    slug: 'pruritus', title: '항문소양증', sub: '항문 주위의 지속적인 가려움증',
    sections: [
      { title: '항문소양증이란?', icon: '💡', body: '항문소양증은 항문 주위 피부에 심한 가려움증이 반복되는 질환입니다. 긁으면 일시적으로 시원하지만 피부 손상 후 더욱 심해지는 악순환이 생깁니다. 성인 남성에서 더 흔하며, 야간에 증상이 심해지는 경향이 있습니다. 다양한 원인이 있으므로 원인 파악이 치료의 핵심입니다.' },
      { title: '원인', icon: '🔍', body: '항문 위생 불량 또는 과도한 세정, 치핵·치루·피부 질환 등 항문 질환, 요충·진균 감염, 자극적인 음식(커피·맥주·초콜릿·고추), 항생제 장기 복용 후 장내 균총 변화, 당뇨병 등 전신 질환, 접촉성 피부염(위생용품·향료), 심리적 스트레스가 주요 원인입니다.' },
      { title: '치료', icon: '⚕️', body: '원인 질환 교정이 우선입니다. 항문 위생 관리 교육(부드러운 화장지 사용, 세정 후 충분히 건조), 자극 음식 제한, 국소 스테로이드 연고 단기 사용, 항히스타민제 복용(야간 가려움 완화), 요충 치료, 진균 감염 시 항진균 치료를 시행합니다.' },
    ]
  },
]

for (const page of anoRectalRest) {
  w(`src/app/anorectal/${page.slug}/page.tsx`, `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '${page.title} | 장튼튼항외과',
  description: '${page.sub}. 장튼튼항외과 전문 치료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/anorectal/${page.slug}' },
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="p-6 lg:p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <h2 className="text-[17px] lg:text-[19px] font-black text-[#0d1117] mb-4 flex items-center gap-2"><span>{icon}</span>{title}</h2>
      <div className="text-[14px] text-[#374151] leading-[1.85]">{children}</div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80" alt="${page.title}" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 대장항문센터 / <strong className="text-[#0d1117]">${page.title}</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">${page.title}</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">${page.sub}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        ${page.sections.map(s => `<Section title="${s.title}" icon="${s.icon}"><p>${s.body}</p></Section>`).join('\n        ')}
      </div>
    </div>
  )
}
`)
}

// ═══════════════════════════════════════════════════════
// 11. 내시경 하위페이지 — 풍부한 내용
// ═══════════════════════════════════════════════════════
w('src/app/endoscopy/gastro/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '위내시경 | 장튼튼항외과',
  description: '수면 위내시경. 위암·위궤양·역류성식도염 조기 발견. 편안하고 정확한 검사.',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/gastro' },
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="p-6 lg:p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <h2 className="text-[17px] lg:text-[19px] font-black text-[#0d1117] mb-4 flex items-center gap-2"><span>{icon}</span>{title}</h2>
      <div className="text-[14px] text-[#374151] leading-[1.85]">{children}</div>
    </div>
  )
}

export default function GastroPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" alt="위내시경" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">위내시경</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">위내시경</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">편안한 수면 위내시경으로 정확한 검사를</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <Section title="위내시경이란?" icon="💡">
          <p>위내시경은 가느다란 내시경 튜브를 입을 통해 삽입하여 식도·위·십이지장을 직접 관찰하는 검사입니다. 위암, 위궤양, 십이지장궤양, 역류성식도염, 헬리코박터 감염 등을 조기에 발견하고 필요 시 조직 검사까지 바로 시행할 수 있습니다. 수면 위내시경은 수면 유도제 투여 후 검사하여 불편함과 구역 반응을 크게 줄여줍니다.</p>
        </Section>
        <Section title="검사 권장 대상" icon="👤">
          <ul className="space-y-2.5">
            {['40세 이상 성인 (2년마다 국가암검진)','위 관련 증상이 있는 경우 (속쓰림, 소화불량, 상복부 통증, 구역)','헬리코박터 제균 치료 후 추적 검사','위암 가족력이 있는 경우','빈혈·체중 감소 등 전신 증상이 동반된 경우'].map((t,i) => <li key={i} className="flex gap-2.5 text-[14px] text-[#374151] leading-[1.8]"><span className="text-primary font-bold shrink-0">·</span>{t}</li>)}
          </ul>
        </Section>
        <Section title="검사 전 준비사항" icon="📋">
          <ul className="space-y-2.5">
            {['검사 당일 오전 검사: 전날 저녁 9시 이후 금식 (물 포함)','혈압약·심장약은 검사 당일 새벽에 소량의 물과 복용 가능','당뇨약·인슐린은 검사 당일 복용 중단 후 의료진과 상의','아스피린·항혈전제는 5~7일 전부터 중단 (의사 지시 하)','수면 내시경 시 반드시 보호자 동반, 검사 당일 운전 불가'].map((t,i) => <li key={i} className="flex gap-2.5 text-[14px] text-[#374151] leading-[1.8]"><span className="text-primary font-bold shrink-0">✓</span>{t}</li>)}
          </ul>
        </Section>
        <Section title="검사 후 주의사항" icon="🌿">
          <p>수면 내시경 후 1~2시간은 병원 내 회복실에서 안정을 취합니다. 당일은 운전·기계 조작이 금지됩니다. 검사 후 1시간 정도 후 가벼운 식사가 가능하며, 조직 검사를 시행한 경우 당일은 자극적인 음식과 음주를 삼갑니다. 검사 결과는 검사 당일 또는 조직 검사 결과 확인 후 설명드립니다.</p>
        </Section>
      </div>
    </div>
  )
}
`)

w('src/app/endoscopy/colon/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '대장내시경 | 장튼튼항외과',
  description: '수면 대장내시경. 대장암·대장폴립 조기 발견. 용종 즉시 제거.',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/colon' },
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="p-6 lg:p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <h2 className="text-[17px] lg:text-[19px] font-black text-[#0d1117] mb-4 flex items-center gap-2"><span>{icon}</span>{title}</h2>
      <div className="text-[14px] text-[#374151] leading-[1.85]">{children}</div>
    </div>
  )
}

export default function ColonPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" alt="대장내시경" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">대장내시경</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">대장내시경</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">대장암 예방을 위한 가장 확실한 방법</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <Section title="대장내시경이란?" icon="💡">
          <p>대장내시경은 항문을 통해 내시경을 삽입하여 직장과 대장 전체를 관찰하는 검사입니다. 대장암, 대장 용종(폴립), 염증성 장질환, 허혈성 대장염 등을 직접 눈으로 확인하고 필요 시 즉시 조직 검사 또는 용종 제거를 시행할 수 있습니다. 대장암의 90% 이상은 선종성 용종에서 발생하므로, 용종을 조기에 발견하고 제거하면 대장암을 예방할 수 있습니다.</p>
        </Section>
        <Section title="검사 권장 대상" icon="👤">
          <ul className="space-y-2.5">
            {['50세 이상 성인 (5~10년마다 정기 검진)','배변 출혈, 혈변, 점액변이 있는 경우','원인 불명의 빈혈 또는 체중 감소','대장암·대장 용종 가족력이 있는 경우 (40세부터 검진 권장)','장기간 배변 습관 변화 (변비·설사 교대)','염증성 장질환 추적 관찰'].map((t,i) => <li key={i} className="flex gap-2.5 text-[14px] text-[#374151] leading-[1.8]"><span className="text-primary font-bold shrink-0">·</span>{t}</li>)}
          </ul>
        </Section>
        <Section title="검사 전날 장 정결" icon="📋">
          <div className="space-y-3">
            <p className="text-[14px] text-[#374151] leading-[1.8]">대장내시경 검사의 성공은 장 정결(장을 깨끗이 비우는 과정)에 달려 있습니다. 장 정결이 불량하면 용종 발견율이 크게 떨어집니다.</p>
            <ul className="space-y-2">
              {['검사 2일 전: 씨 있는 과일, 해조류, 잡곡밥 제한','검사 전날: 저잔류 식이 (흰쌀밥, 흰 빵, 두부, 계란 허용)','전날 저녁: 처방된 장 정결제 복용 시작','검사 당일 새벽: 나머지 정결제 복용 완료'].map((t,i) => <li key={i} className="flex gap-2.5 text-[13px] text-[#374151] leading-[1.8]"><span className="text-primary font-bold shrink-0">✓</span>{t}</li>)}
            </ul>
          </div>
        </Section>
      </div>
    </div>
  )
}
`)

w('src/app/endoscopy/polyp/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '용종 절제술 | 장튼튼항외과',
  description: '대장 용종 즉시 제거. 대장암 예방을 위한 내시경적 용종 절제술.',
  alternates: { canonical: 'https://www.jangtntnhang.com/endoscopy/polyp' },
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="p-6 lg:p-7 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <h2 className="text-[17px] lg:text-[19px] font-black text-[#0d1117] mb-4 flex items-center gap-2"><span>{icon}</span>{title}</h2>
      <div className="text-[14px] text-[#374151] leading-[1.85]">{children}</div>
    </div>
  )
}

export default function PolypPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" alt="용종 절제술" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 내시경센터 / <strong className="text-[#0d1117]">용종 절제술</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">용종 절제술</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">내시경으로 안전하게, 대장암을 예방합니다</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-10 lg:py-14 space-y-6">
        <Section title="용종이란?" icon="💡">
          <p>용종(폴립)은 대장 점막이 혹처럼 돌출된 병변입니다. 대부분의 대장암은 선종성 용종에서 10~15년에 걸쳐 암으로 진행됩니다. 따라서 대장내시경 중 용종을 발견하면 즉시 절제하여 대장암을 예방할 수 있습니다. 용종의 크기, 모양, 조직형에 따라 암 발생 위험도가 다르므로 절제 후 조직 검사가 필수입니다.</p>
        </Section>
        <Section title="절제 방법" icon="✂️">
          <div className="space-y-3">
            {[
              { name: '차가운 용종 절제술 (Cold snare)', desc: '5~10mm 크기 용종에 주로 사용. 전기 소작 없이 올가미로 잘라내어 출혈·천공 위험이 낮습니다.' },
              { name: '내시경 점막 절제술 (EMR)', desc: '10~20mm 크기 납작한 용종에 적용. 점막 아래에 식염수를 주입하여 부풀린 후 올가미로 절제합니다.' },
              { name: '내시경 점막하 박리술 (ESD)', desc: '20mm 이상 크거나 납작한 대형 용종에 사용. 전문 장비로 점막하층을 박리하여 en bloc 절제합니다.' },
            ].map((t) => (
              <div key={t.name} className="p-4 rounded-xl bg-[#f8fafb]">
                <p className="font-bold text-[14px] text-[#0d1117] mb-1">{t.name}</p>
                <p className="text-[13px] text-[#6b7280] leading-[1.8]">{t.desc}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section title="절제 후 주의사항" icon="🌿">
          <ul className="space-y-2.5">
            {['당일 죽·미음 등 유동식 섭취, 이틀간 부드러운 음식','1~2주간 격렬한 운동·음주·자극적 음식 금지','복통·혈변·발열 시 즉시 내원','조직 검사 결과는 1~2주 후 확인','고위험 용종의 경우 1년 후 추적 대장내시경 필요'].map((t,i) => <li key={i} className="flex gap-2.5 text-[14px] text-[#374151] leading-[1.8]"><span className="text-primary font-bold shrink-0">✓</span>{t}</li>)}
          </ul>
        </Section>
      </div>
    </div>
  )
}
`)

// ═══════════════════════════════════════════════════════
// 12. FAQ — 20개 이상, 답변 5줄 이상
// ═══════════════════════════════════════════════════════
w('src/app/faq/page.tsx', `'use client'
import { useState } from 'react'
import Image from 'next/image'

const faqs = [
  {
    category: '진료·예약',
    q: '예약 없이 바로 방문해도 진료가 가능한가요?',
    a: '네, 예약 없이 방문하셔도 진료가 가능합니다. 다만 대기 시간이 길어질 수 있으므로, 전화(031-987-7282) 또는 온라인 예약을 이용하시면 대기 시간을 크게 줄이실 수 있습니다. 특히 내시경 검사는 반드시 사전 예약 및 장 정결 준비가 필요하므로 방문 전 꼭 연락해 주시기 바랍니다.',
  },
  {
    category: '진료·예약',
    q: '진료 당일 수술도 가능한가요?',
    a: '경우에 따라 가능합니다. 치핵, 피부 종양(지방종·낭종) 등 비교적 간단한 수술은 당일 진료 후 즉시 시행할 수 있습니다. 단, 수술 전 간단한 혈액 검사가 필요하며 수술 동의서 작성이 필요합니다. 대장내시경·위내시경의 경우 장 정결 등 사전 준비가 필요하므로 반드시 사전 예약이 필요합니다.',
  },
  {
    category: '진료·예약',
    q: '초진 시 어떤 서류나 준비물이 필요한가요?',
    a: '신분증과 건강보험증(또는 건강보험 앱)을 지참해 주시면 됩니다. 다른 병원에서 치료를 받으신 경우 관련 검사 결과지, 영상 CD, 복용 중인 약 처방전 등을 가져오시면 더 정확한 진료에 도움이 됩니다. 혈압·당뇨·심장 질환 등 만성 질환이 있으신 경우 복용 중인 약 목록도 알려주시기 바랍니다.',
  },
  {
    category: '항문 질환',
    q: '치질(치핵)인지 어떻게 알 수 있나요? 꼭 병원에 가야 하나요?',
    a: '배변 후 선홍색 출혈, 항문 주위에 무언가 만져지거나 돌출되는 느낌, 항문 가려움증·불쾌감 등의 증상이 있다면 치핵을 의심해 볼 수 있습니다. 하지만 비슷한 증상이 치열, 치루, 대장용종, 심한 경우 대장암에서도 나타날 수 있으므로 반드시 전문의 진찰을 받으시는 것이 중요합니다. 항문 질환은 부끄럽다고 참지 마시고, 초기에 치료할수록 간단하게 해결되는 경우가 많습니다.',
  },
  {
    category: '항문 질환',
    q: '치핵 수술 후 일상 복귀까지 얼마나 걸리나요?',
    a: '수술 방법과 범위에 따라 다르지만, 일반적으로 당일 또는 다음 날 퇴원이 가능합니다. 가벼운 사무직 업무는 1~3일 후, 육체적인 일은 1~2주 후 복귀가 가능합니다. 완전한 회복까지는 4~6주 정도 소요됩니다. 수술 후 좌욕(하루 3회, 미온수)을 꾸준히 하시고, 변비 예방을 위해 충분한 수분·식이섬유 섭취가 중요합니다. 통증은 1~2주 이내에 대부분 감소합니다.',
  },
  {
    category: '항문 질환',
    q: '치질은 수술해야 완치되나요? 재발하지 않나요?',
    a: '치질의 정도에 따라 치료 방법이 다릅니다. 1~2도 치핵은 생활습관 교정, 약물 치료, 좌욕만으로도 증상이 크게 완화될 수 있습니다. 3~4도는 수술이 근치 방법이며, 수술 후에도 변비, 과도한 음주, 장시간 좌위 등 유발 요인을 제거하지 않으면 재발할 수 있습니다. 수술 자체의 재발률은 낮으나, 생활습관 관리가 장기적인 예방의 핵심입니다.',
  },
  {
    category: '내시경',
    q: '수면 내시경은 안전한가요? 수면 후 부작용은 없나요?',
    a: '수면 내시경에 사용하는 수면 유도제(미다졸람, 프로포폴 등)는 의사가 직접 투여하고 검사 중 지속적인 산소 포화도·혈압·맥박을 모니터링하기 때문에 안전합니다. 검사 후 1~2시간 회복실에서 안정을 취하면 대부분 정상 상태로 회복됩니다. 다만 검사 당일은 운전·음주·중요한 판단이 필요한 업무는 피하시고, 보호자와 함께 귀가하셔야 합니다. 고령자나 심폐 기능이 저하된 분은 사전에 의료진과 충분히 상담 후 결정합니다.',
  },
  {
    category: '내시경',
    q: '대장내시경 전 장 정결제가 힘든데, 먹기 쉬운 방법이 있나요?',
    a: '장 정결제는 종류에 따라 복용량과 맛이 다릅니다. 최근에는 복용량이 적고(1~2L) 맛이 개선된 정결제들이 있습니다. 차갑게 마시면 덜 구역스럽고, 레모네이드 형태로 마시는 방법도 있습니다. 정결제 복용 중 구역·구토가 심하면 잠시 멈추고 다시 시작하세요. 완전한 장 정결이 검사의 질과 정확도를 결정하므로 처방대로 복용하시는 것이 가장 중요합니다.',
  },
  {
    category: '내시경',
    q: '대장 용종이 발견되면 그 자리에서 바로 제거 가능한가요?',
    a: '네, 대부분의 경우 대장내시경 검사 중 용종이 발견되면 즉시 절제할 수 있습니다. 다만 환자가 항혈전제를 복용 중이거나, 용종이 매우 크고 복잡한 경우에는 약물 중단 후 별도의 수술 일정을 잡아야 할 수 있습니다. 절제된 용종은 조직 검사를 시행하며, 결과에 따라 추적 관찰 주기가 결정됩니다.',
  },
  {
    category: '피부·외과',
    q: '지방종이나 피지낭종은 수술해야 하나요? 저절로 없어지지 않나요?',
    a: '지방종과 피지낭종은 저절로 사라지지 않습니다. 크기가 변하지 않더라도 감염이 생기면 급격히 붓고 통증이 심해질 수 있으며, 그 상태에서 수술하면 상처가 더 커지고 회복이 오래 걸립니다. 감염 전에 미리 제거하는 것이 상처가 작고 수술이 간단합니다. 국소마취 후 20~40분 내에 제거 가능하며 당일 퇴원이 가능합니다.',
  },
  {
    category: '피부·외과',
    q: '내성발톱은 어떤 치료를 받나요? 재발하지 않나요?',
    a: '내성발톱 치료는 증상의 심각도에 따라 다릅니다. 초기에는 솜이나 테이프를 이용한 교정 치료가 효과적이며, 염증·화농이 있는 경우에는 항생제 치료와 함께 국소마취 하에 파고드는 발톱 일부를 제거합니다. 재발이 잦은 경우 발톱 뿌리(조모세포)를 화학적 또는 수술적으로 제거하여 재발을 방지합니다. 수술 후 발톱을 일자로 자르는 올바른 발톱 관리가 재발 예방의 핵심입니다.',
  },
  {
    category: '피부·외과',
    q: '화상을 입었을 때 즉시 어떻게 해야 하나요?',
    a: '화상 즉시 처치: 즉시 흐르는 차가운 물로 15~20분 이상 식혀주세요 (얼음은 사용하지 마세요). 물집이 생겼다면 터뜨리지 말고 병원을 방문하세요. 화상 부위에 간장·된장·소주·치약 등 민간요법은 감염을 유발할 수 있으므로 절대 금지입니다. 2도 이상의 화상, 얼굴·손·발·관절 부위 화상, 넓은 범위의 화상은 반드시 전문 치료가 필요합니다.',
  },
  {
    category: '수술 관련',
    q: '수술 시 마취는 어떻게 하나요? 전신마취를 해야 하나요?',
    a: '항문 수술(치핵·치열·치루 등)은 대부분 척추마취(하반신 마취) 또는 국소마취 후 수면 유도제를 함께 사용합니다. 전신마취는 잘 사용하지 않습니다. 피부 종양 제거(지방종·낭종 등)는 국소마취로 진행합니다. 마취 방법은 환자의 상태, 수술 범위, 기저 질환 등을 고려하여 결정하며, 사전 진료 시 충분히 설명드립니다.',
  },
  {
    category: '수술 관련',
    q: '수술 후 통증은 얼마나 심한가요?',
    a: '치핵 수술 후 통증은 개인차가 있지만, 수술 후 1~3일이 가장 아프고 이후 점차 감소합니다. PPH 수술(자동문합기 방식)은 기존 절제술보다 통증이 현저히 적은 것이 특징입니다. 진통제 처방을 드리며, 좌욕이 통증 완화에 큰 도움이 됩니다. 대부분의 환자분들이 걱정하시는 것보다 통증이 심하지 않다고 말씀하십니다.',
  },
  {
    category: '수술 관련',
    q: '수술 전 공복이 필요한가요? 당일 밥을 먹어도 되나요?',
    a: '수술 방법에 따라 다릅니다. 척추마취 또는 수면마취를 이용하는 수술은 수술 6~8시간 전부터 금식이 필요합니다. 국소마취만으로 시행하는 간단한 피부 수술의 경우 공복이 필요 없는 경우도 있습니다. 수술 예약 시 금식 여부를 안내드리며, 혈압약 등 필수 약물은 소량의 물과 복용 가능한 경우가 많으니 사전에 반드시 확인해 주세요.',
  },
  {
    category: '보험·비용',
    q: '치핵·치열 수술은 건강보험이 적용되나요?',
    a: '네, 치핵·치열·치루 등 항문 질환 수술은 건강보험이 적용됩니다. 본인 부담금은 병원 종별(의원급)과 수술 방법에 따라 다르지만, 일반적으로 10~30만 원 내외입니다. 실손보험이 있으신 경우 본인 부담금 대부분이 환급되니 가입 보험사에 문의해 보세요. 정확한 비용은 진료 후 수술 계획 확정 시 안내드립니다.',
  },
  {
    category: '보험·비용',
    q: '피부 종양(지방종, 낭종) 제거는 보험이 되나요?',
    a: '크기가 1.5cm 이상이거나 염증·통증·기능 장애가 있는 경우 건강보험 적용이 가능합니다. 단순 미용 목적의 경우 비급여(전액 자비)로 적용됩니다. 실손보험의 경우 크기·위치에 관계없이 의료적 사유가 있으면 대부분 적용됩니다. 정확한 보험 적용 여부는 진료 후 안내드립니다.',
  },
  {
    category: '생활·예방',
    q: '항문 건강을 위해 평소에 어떤 생활습관이 중요한가요?',
    a: '충분한 수분 섭취(하루 1.5~2L), 식이섬유가 풍부한 음식(채소·과일·잡곡), 규칙적인 배변 습관(정해진 시간에 배변), 배변 시 5분 이내 마치기(스마트폰 사용 금지), 과도한 음주·맵고 자극적인 음식 자제, 규칙적인 운동으로 복압 관리, 좌욕을 생활화하는 것이 항문 건강의 핵심입니다. 증상이 생기면 참지 말고 빨리 진료받는 것이 중요합니다.',
  },
  {
    category: '생활·예방',
    q: '대장암은 어떻게 예방할 수 있나요?',
    a: '대장암은 생활습관으로 예방 가능한 암입니다. 붉은 육류·가공육(햄·소시지) 섭취를 줄이고, 채소·과일·통곡물을 충분히 섭취하세요. 규칙적인 신체 활동, 적정 체중 유지, 금연, 절주가 중요합니다. 가장 효과적인 예방책은 정기 대장내시경 검사로 선종성 용종을 조기에 발견하고 제거하는 것입니다. 50세 이상은 5년마다, 가족력이 있는 경우 40세부터 검진을 권장합니다.',
  },
  {
    category: '기타',
    q: '주차는 어떻게 하나요?',
    a: '계림 M스퀘어 지하주차장을 이용하시면 됩니다. 진료 시 무료 주차 도장을 제공해 드립니다. 지하주차장 입구는 건물 우측에 있으며, 엘리베이터를 타고 3층으로 오시면 됩니다. 대중교통 이용 시 김포골드라인 구래역 1번출구에서 도보 3분 거리입니다.',
  },
  {
    category: '기타',
    q: '야간이나 주말에도 진료가 가능한가요?',
    a: '현재 평일은 오전 9시~오후 6시(점심 13:00~14:00), 토요일은 오전 9시~오후 3시(점심 없이 진료)에 운영합니다. 일요일과 공휴일은 휴진입니다. 야간 진료는 현재 운영하지 않습니다. 급한 상황이나 진료시간 외 문의는 카카오 채널을 통해 남겨주시면 확인 후 연락드립니다.',
  },
]

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('전체')
  const categories = ['전체', ...Array.from(new Set(faqs.map(f => f.category)))]
  const filtered = activeCategory === '전체' ? faqs : faqs.filter(f => f.category === activeCategory)

  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80" alt="자주 묻는 질문" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">자주 묻는 질문</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">자주 묻는 질문</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">궁금한 사항을 바로 확인하세요</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* 카테고리 필터 */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setOpenIdx(null) }}
              className={\`px-4 py-2 rounded-full text-[13px] font-bold transition-all \${activeCategory === cat ? 'text-white shadow-md' : 'bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e5e7eb]'}\`}
              style={activeCategory === cat ? { background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' } : {}}>
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{faq.category}</span>
                  <p className="text-[14px] font-bold text-[#0d1117] leading-[1.6]">Q. {faq.q}</p>
                </div>
                <span className={\`shrink-0 text-[18px] text-[#9ca3af] transition-transform duration-200 \${openIdx === i ? 'rotate-45' : ''}\`}>+</span>
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 pt-1 border-t border-[#f3f4f6]">
                  <p className="text-[13px] text-[#374151] leading-[1.9] whitespace-pre-line">A. {faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`)

// ═══════════════════════════════════════════════════════
// 13. 건강매거진 — 5개 아티클
// ═══════════════════════════════════════════════════════
w('src/app/magazine/page.tsx', `import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '건강매거진 | 장튼튼항외과',
  description: '장튼튼항외과 건강 정보 매거진. 대장항문, 내시경, 피부 건강 전문 정보.',
  alternates: { canonical: 'https://www.jangtntnhang.com/magazine' },
}

const articles = [
  {
    title: '치질(치핵), 수술이 꼭 필요할까? 단계별 치료법 완전 정리',
    category: '대장항문',
    date: '2025.01',
    readTime: '5분',
    summary: '치핵은 정도에 따라 약물 치료부터 수술까지 다양한 방법이 있습니다. 1~4도 분류와 각 단계에 맞는 치료법을 자세히 알아봅니다.',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
    href: '/anorectal/hemorrhoid',
  },
  {
    title: '대장내시경 전 장 정결, 이렇게 하면 덜 힘들어요',
    category: '내시경',
    date: '2024.12',
    readTime: '4분',
    summary: '많은 분들이 두려워하는 대장내시경 준비. 장 정결제를 더 편하게 복용하는 팁과 준비사항을 단계별로 안내합니다.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    href: '/endoscopy/colon',
  },
  {
    title: '변비가 지속되면 왜 위험한가요? 만성 변비의 합병증',
    category: '대장항문',
    date: '2024.11',
    readTime: '4분',
    summary: '단순히 불편한 증상으로 넘기기 쉬운 변비. 치핵, 치열, 대장 질환으로 이어질 수 있는 만성 변비의 위험성과 예방법을 알아봅니다.',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    href: '/anorectal/constipation',
  },
  {
    title: '등에 혹이 생겼어요 — 지방종 vs 피지낭종, 차이점과 치료법',
    category: '피부종양',
    date: '2024.10',
    readTime: '3분',
    summary: '피부 아래 혹이 생겼을 때 지방종인지 피지낭종인지 구별하는 방법과 각각의 치료 방법, 그리고 방치했을 때의 위험성을 설명합니다.',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    href: '/skin/lipoma',
  },
  {
    title: 'PPH 수술 vs 기존 치핵 수술, 무엇이 다른가요?',
    category: 'PPH',
    date: '2024.09',
    readTime: '4분',
    summary: '치핵 수술 방법 중 PPH(자동문합기 이용 치핵 절제술)의 특징과 장점, 기존 절제술과의 차이점을 비교하여 설명합니다.',
    img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80',
    href: '/pph',
  },
]

export default function MagazinePage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" alt="건강매거진" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">건강매거진</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">건강매거진</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">장튼튼 건강 전문 정보</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="space-y-5">
          {articles.map((a, i) => (
            <Link key={i} href={a.href} className="group flex flex-col sm:flex-row gap-4 p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="relative shrink-0 w-full sm:w-40 h-44 sm:h-28 rounded-xl overflow-hidden">
                <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="160px" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{a.category}</span>
                  <span className="text-[11px] text-[#9ca3af]">{a.date}</span>
                  <span className="text-[11px] text-[#9ca3af]">· 읽기 {a.readTime}</span>
                </div>
                <h3 className="text-[15px] font-black text-[#0d1117] mb-2 leading-[1.5] group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="text-[12px] text-[#6b7280] leading-[1.75]">{a.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
`)

console.log('\n✅ 모든 파일 완료! node fix-all2.mjs 실행 완료')
