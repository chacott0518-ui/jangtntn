'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

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
          alt="장튼튼항외과"
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
        {/* 배경 이미지 — 오버레이 없이 원본 그대로 */}
        <Image
          src="/images/hero.jpg"
          alt="장튼튼항외과 병원 내부"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />

        {/* 텍스트 콘텐츠 */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
          <div
            className="
              w-full
              md:w-[58%]
              lg:w-[50%]
              md:ml-10
              lg:ml-0
              space-y-4
              pt-24
              md:pt-0
              pb-16
            "
          >
            {/* 뱃지 */}
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.4 }}
              className="inline-block px-3.5 py-1.5 rounded-full text-[12px] font-bold text-primary"
              style={{
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                boxShadow: '0 2px 10px rgba(13,127,196,0.12)',
              }}
            >
              📍 김포 구래역 1번출구 · 외과전문의 한호선
            </motion.span>

            {/* H1 — 배경 보이면서 텍스트 halo 효과 */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.12, duration: 0.5 }}
              className="leading-[1.1] space-y-0.5"
            >
              <span
                className="block text-[16px] md:text-[18px] lg:text-[22px] font-semibold"
                style={{
                  color: '#333',
                  textShadow:
                    '0 0 12px rgba(255,255,255,1), 0 0 24px rgba(255,255,255,0.9), 0 1px 0 rgba(255,255,255,0.8)',
                }}
              >
                믿을 수 있는 병원
              </span>
              <span
                className="block text-[36px] md:text-[46px] lg:text-[60px] font-black tracking-[-0.03em]"
                style={{
                  color: '#0d1117',
                  textShadow:
                    '0 0 16px rgba(255,255,255,1), 0 0 32px rgba(255,255,255,0.95), 0 2px 0 rgba(255,255,255,0.7)',
                  WebkitTextStroke: '0.2px rgba(0,0,0,0.04)',
                }}
              >
                준비할 때부터
              </span>
              <span
                className="block text-[36px] md:text-[46px] lg:text-[60px] font-black tracking-[-0.03em]"
                style={{
                  color: '#0d7fc4',
                  textShadow:
                    '0 0 16px rgba(255,255,255,1), 0 0 32px rgba(255,255,255,0.95), 0 0 48px rgba(13,127,196,0.2)',
                  WebkitTextStroke: '0.2px rgba(13,127,196,0.08)',
                }}
              >
                끝날 때까지
              </span>
            </motion.h1>

            {/* 임팩트 한 줄 카피 */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.24, duration: 0.45 }}
              className="text-[13px] md:text-[15px] lg:text-[16px] font-bold"
              style={{
                color: '#1a1a2e',
                textShadow:
                  '0 0 10px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.9), 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              김포에서 가장 믿을 수 있는 항문외과
            </motion.p>

            {/* CTA 버튼 — PC/태블릿만 표시 */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.34, duration: 0.45 }}
              className="hidden sm:flex flex-row gap-3 pt-1"
            >
              <Link
                href="/consultation"
                className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-bold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #0d7fc4, #0d9488)',
                  boxShadow: '0 8px 28px rgba(13,127,196,0.45)',
                }}
              >
                📅 온라인 예약
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 하단 웨이브 */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 56" fill="#f8fafb" className="w-full block">
            <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
          </svg>
        </div>
      </section>
    </>
  )
}