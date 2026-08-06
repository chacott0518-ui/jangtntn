'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/constants'

function Logo() {
  return (
    <Link href="/" className="shrink-0">
      <Image src="/images/logo.png" width={140} height={42} alt="장튼튼항외과의원 로고" className="object-contain h-9 w-auto" priority />
    </Link>
  )
}

function DesktopNav() {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <nav className="hidden lg:flex items-center">
      {NAV_ITEMS.map((item, i) => (
        <div key={item.href} className="relative" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
          <Link
            href={item.href}
            className="nav-link-pc px-2.5 py-1.5 text-[13px] font-bold transition-all whitespace-nowrap"
          >
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
    </nav>
  )
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  // iOS Safari overflow 잠금 + 하단 퀵바 가림
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      document.body.classList.add('mobile-menu-open')
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.body.classList.remove('mobile-menu-open')
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isOpen])

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
              {NAV_ITEMS.map((item, i) => {
                const submenuId = `mobile-submenu-${item.href.replace(/\//g, '-')}`
                return (
                <div key={item.href} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {item.subItems.length > 0 ? (
                    <>
                      <div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>
                        <Link
                          href={item.href}
                          onClick={() => {
                            onClose()
                            setExpanded(null)
                          }}
                          style={{
                            flex: 1,
                            minHeight: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '11px 0 11px 20px',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '13px',
                            textDecoration: 'none',
                            textAlign: 'left',
                          }}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setExpanded(expanded === i ? null : i)
                          }}
                          aria-expanded={expanded === i}
                          aria-controls={submenuId}
                          aria-label={`${item.label} 하위 메뉴 ${expanded === i ? '닫기' : '열기'}`}
                          style={{
                            minWidth: '48px',
                            minHeight: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '11px 20px 11px 12px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          <motion.span
                            animate={{ rotate: expanded === i ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '10px' }}
                          >
                            ▼
                          </motion.span>
                        </button>
                      </div>
                      <AnimatePresence>
                        {expanded === i && (
                          <motion.div
                            id={submenuId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            style={{ overflow: 'hidden', background: 'rgba(0,0,0,0.15)' }}
                          >
                            <div style={{ padding: '6px 16px 6px 20px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => {
                                    onClose()
                                    setExpanded(null)
                                  }}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    minHeight: '46px',
                                    padding: '8px 12px',
                                    borderRadius: '10px',
                                    color: 'rgba(255,255,255,0.9)',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    textAlign: 'left',
                                    width: '100%',
                                  }}
                                >
                                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)', flexShrink: 0 }} />
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => {
                        onClose()
                        setExpanded(null)
                      }}
                      style={{
                        width: '100%',
                        minHeight: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '11px 20px',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '13px',
                        textDecoration: 'none',
                        textAlign: 'left',
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )})}
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

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  // MENU 텍스트: 짙은 네이비, 열림(✕) 시 헤더가 청록색이라 흰색 유지
  const burgerColor = mobileOpen ? 'white' : '#063B5C'

  return (
    <header
  style={{ zIndex: 9998 }}
  className={`fixed top-0 left-0 right-0 h-16 transition-all duration-500 ${
    mobileOpen
      ? 'bg-[#0d7fc4]'
      : scrolled 
      ? 'bg-white/60 backdrop-blur-lg shadow-sm'
      : 'bg-transparent'
  }`}
>
      <div className="max-w-7xl mx-auto h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        <Logo />
        <DesktopNav />
        
        {/* 모바일 메뉴 버튼: 'menu' 글자와 '✕' 아이콘 처리 */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-[10002] flex items-center justify-center p-2"
          aria-label="메뉴"
        >
          <span
            className="mobile-menu-label text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
            style={{
              color: burgerColor,
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 700,
              opacity: 1,
              textShadow: mobileOpen ? 'none' : '0 0 8px rgba(255,255,255,0.85), 0 1px 2px rgba(255,255,255,0.7)',
            }}
          >
            {mobileOpen ? (
              <span className="text-[20px] leading-none font-bold">✕</span>
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
