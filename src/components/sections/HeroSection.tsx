'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

/** 동일 파일명 브라우저 캐시 갱신용 (파일명 자체는 변경하지 않음) */
const HERO_PC = '/images/hero.webp?v=20260803'
const HERO_MOBILE = '/images/hero-mobile.webp?v=20260803'

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 1800)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col items-center gap-4"
      >
        <Image
          src="/images/logo.png"
          width={220}
          height={66}
          alt="장튼튼항외과의원"
          className="object-contain"
          priority
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="h-0.5 rounded-full"
          style={{ background: 'linear-gradient(90deg, #0d7fc4, #0d9488)' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroSection() {
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!sessionStorage.getItem('jtt-visited')) setShowSplash(true)
  }, [])

  const splashDone = useCallback(() => {
    sessionStorage.setItem('jtt-visited', '1')
    setShowSplash(false)
  }, [])

  const delay = showSplash ? 2.2 : 0.1

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={splashDone} />}
      </AnimatePresence>

      <section
        className="relative w-full min-h-screen overflow-hidden"
        aria-label="메인 히어로 섹션"
      >
        <picture className="absolute inset-0 block">
          <source media="(max-width: 767px)" srcSet={HERO_MOBILE} type="image/webp" />
          <source media="(min-width: 768px)" srcSet={HERO_PC} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_PC}
            alt="장튼튼항외과의원 병원 내부"
            className="hero-bg-img absolute inset-0 w-full h-full"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.4 }}
              className="hero-location-badge"
            >
              📍 김포 구래역 1번출구 · 외과전문의 한호선
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.08, duration: 0.4 }}
              className="hero-eyebrow"
            >
              믿을 수 있는 병원
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.12, duration: 0.5 }}
              className="hero-title"
            >
              <span>오랜 임상경험을</span>
              <span>바탕으로</span>
              <span className="hero-title-accent">정확한 진단,</span>
              <span className="hero-title-accent">바른 진료만을</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.24, duration: 0.45 }}
              className="hero-description"
            >
              마음을 다해 진료하는 병원
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 56" fill="#f8fafb" className="w-full block">
            <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
          </svg>
        </div>
      </section>
    </>
  )
}
