'use client'

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
    <nav className="hidden lg:flex items-center">
      {VISIBLE_NAV.map((item, i) => (
        <div key={item.href} className="relative" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
          <Link href={item.href} className={`px-2.5 py-1.5 text-[13px] font-bold transition-all whitespace-nowrap ${scrolled ? 'text-[#1a1a2e] hover:text-primary' : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]'}`}>
            {item.label}
          </Link>
          <AnimatePresence>
            {hovered === i && item.subItems.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                <div className="rounded-2xl shadow-[0_8px_32px_rgba(13,127,196,0.2)] py-2 min-w-[170px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d7fc4 0%, #0d9488 100%)' }}>
                  {item.subItems.map((sub) => (
                    <Link key={sub.href} href={sub.href} className="block px-5 py-2.5 text-[13px] font-semibold text-white/90 hover:text-white hover:bg-white/15 transition-all">{sub.label}</Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      {HIDDEN_NAV.length > 0 && (
        <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
          <button className={`px-2.5 py-1.5 text-[13px] font-bold ${scrolled ? 'text-[#1a1a2e]' : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]'}`}>• • •</button>
          <AnimatePresence>
            {moreOpen && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="absolute top-full right-0 pt-2 z-50">
                <div className="rounded-2xl shadow-[0_8px_32px_rgba(13,127,196,0.2)] py-2 min-w-[150px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d7fc4 0%, #0d9488 100%)' }}>
                  {HIDDEN_NAV.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-5 py-2.5 text-[13px] font-semibold text-white/90 hover:text-white hover:bg-white/15 transition-all">{item.label}</Link>
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

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter()
  const [expanded, setExpanded] = useState<number | null>(null)

  // iOS Safari overflow 잠금
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLink = (href: string) => {
    onClose()
    setExpanded(null)
    setTimeout(() => router.push(href), 50)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 전체화면 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.7)',
              zIndex: 10000,
            }}
          />
          {/* 메뉴 드로어 */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ x: '100%', transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] } }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '75%',
              maxWidth: '320px',
              height: '100vh',
              zIndex: 10001,
              display: 'flex',
              flexDirection: 'column',
              background: 'linear-gradient(160deg, #0d7fc4 0%, #0a6ba8 40%, #0d9488 100%)',
            }}
          >
            {/* 드로어 헤더 */}
            <div style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', borderBottom: '1px solid rgba(255,255,255,0.2)', flexShrink: 0 }}>
              <span style={{ color: 'white', fontWeight: 900, fontSize: '15px' }}>메뉴</span>
            </div>

            {/* 메뉴 리스트 */}
            <div style={{ flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
              {NAV_ITEMS.map((item, i) => (
                <div key={item.href} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {item.subItems.length > 0 ? (
                    <>
                      <button
                        onClick={() => setExpanded(expanded === i ? null : i)}
                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', color: 'white', fontWeight: 700, fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: expanded === i ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}
                        >
                          ▼
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {expanded === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            style={{ overflow: 'hidden', background: 'rgba(0,0,0,0.15)' }}
                          >
                            <div style={{ padding: '8px 16px 8px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              {item.subItems.map((sub) => (
                                <button
                                  key={sub.href}
                                  onClick={() => handleLink(sub.href)}
                                  style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                                >
                                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)', flexShrink: 0 }} />
                                  {sub.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      onClick={() => handleLink(item.href)}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', padding: '14px 20px', color: 'white', fontWeight: 700, fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* 하단 예약 버튼 */}
            <div style={{ padding: '16px', flexShrink: 0, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <button
                onClick={() => handleLink('/consultation')}
                style={{ width: '100%', padding: '14px', borderRadius: '16px', background: 'rgba(255,255,255,0.25)', color: 'white', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer' }}
              >
                📅 온라인 예약
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ... 상단 생략

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const onScroll = useCallback(() => { setScrolled(window.scrollY > 10) }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  // 스크롤 시에는 청록색(#0d7fc4), 평소나 메뉴 열림 시에는 흰색
  const burgerColor = mobileOpen ? 'white' : (scrolled ? '#0d7fc4' : 'white');

  return (
    <header
  style={{ zIndex: 9998 }}
  className={`fixed top-0 left-0 right-0 h-16 transition-all duration-500 ${
    mobileOpen
      ? 'bg-[#0d7fc4]'
      : scrolled 
      ? 'bg-white/60 backdrop-blur-lg shadow-sm' // 'border-b border-white/20'를 삭제했습니다.
      : 'bg-transparent'
  }`}
>
      <div className="max-w-7xl mx-auto h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        <Logo />
        <DesktopNav scrolled={scrolled} />
        
        {/* 모바일 메뉴 버튼: 'menu' 글자와 '✕' 아이콘 처리 */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-[10002] flex items-center justify-center p-2"
          aria-label="메뉴"
        >
          <span 
            className="text-[11px] font-light uppercase tracking-[0.2em] transition-all duration-300" 
            style={{ 
              color: burgerColor,
              fontFamily: 'Pretendard, sans-serif'
            }}
          >
            {/* 메뉴가 열리면 '✕', 닫혀있으면 'menu' 표시 */}
            {mobileOpen ? (
              <span className="text-[20px] leading-none font-normal">✕</span>
            ) : (
              'menu'
            )}
          </span>
        </button>
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}