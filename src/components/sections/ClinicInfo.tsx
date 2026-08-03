'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HOURS, ADDRESS } from '@/lib/constants'

type TabKey = 'hours' | 'surgery' | 'location'

const TABS: { key: TabKey; label: string; panelId: string }[] = [
  { key: 'hours', label: '🕐 진료시간', panelId: 'clinic-panel-hours' },
  { key: 'surgery', label: '⚕️ 수술안내', panelId: 'clinic-panel-surgery' },
  { key: 'location', label: '📍 오시는 길', panelId: 'clinic-panel-location' },
]

export default function ClinicInfo() {
  const [tab, setTab] = useState<TabKey>('hours')

  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.replace('#', '')
      if (h === 'hours' || h === 'surgery' || h === 'location') setTab(h)
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  const selectTab = (key: TabKey) => {
    setTab(key)
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${key}`)
      document.getElementById(`clinic-panel-${key}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  return (
    <section id="clinic-info" className="bg-white section-space home-section-tight" aria-labelledby="clinic-info-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="section-header">
          <span className="inline-flex items-center gap-2 section-eyebrow tracking-[3px] uppercase text-primary">
            <span className="w-5 h-[2px] bg-primary inline-block rounded-full" />
            INFORMATION
          </span>
          <h2 id="clinic-info-heading" className="section-title text-[#0d1117]">
            진료 안내
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="진료 안내 탭"
          className="flex mb-6 rounded-2xl overflow-hidden border border-[#e5e7eb]"
        >
          {TABS.map((t) => {
            const selected = tab === t.key
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                id={`clinic-tab-${t.key}`}
                aria-selected={selected}
                aria-controls={t.panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(t.key)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    selectTab(t.key)
                  }
                }}
                className={`flex-1 py-3.5 text-[13px] md:text-[14px] font-bold transition-colors border-b-2 ${
                  selected
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-[#111111] border-transparent hover:bg-[#f8fafb]'
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-[#f8fafb] p-6 md:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        >
          <div
            role="tabpanel"
            id="clinic-panel-hours"
            aria-labelledby="clinic-tab-hours"
            hidden={tab !== 'hours'}
            className={tab === 'hours' ? 'block' : 'hidden'}
          >
            <HoursSection />
          </div>
          <div
            role="tabpanel"
            id="clinic-panel-surgery"
            aria-labelledby="clinic-tab-surgery"
            hidden={tab !== 'surgery'}
            className={tab === 'surgery' ? 'block' : 'hidden'}
          >
            <SurgerySection />
          </div>
          <div
            role="tabpanel"
            id="clinic-panel-location"
            aria-labelledby="clinic-tab-location"
            hidden={tab !== 'location'}
            className={tab === 'location' ? 'block' : 'hidden'}
          >
            <LocationSection />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HoursSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center text-white text-lg shrink-0"
          style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}
        >
          🕐
        </div>
        <h3 className="text-[20px] font-black text-[#0d1117]">진료시간</h3>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm">
          <span className="text-[14px] font-bold text-[#374151]">평일</span>
          <span className="text-[14px] font-black text-[#0d1117]">{HOURS.weekday.open} ~ {HOURS.weekday.close}</span>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-[#f0f7ff] px-5 py-4 shadow-sm">
          <span className="text-[14px] font-bold text-[#374151]">토요일</span>
          <span className="text-[14px] font-black text-[#0d1117]">{HOURS.saturday.open} ~ {HOURS.saturday.close}</span>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm">
          <span className="text-[14px] font-bold text-[#374151]">점심시간</span>
          <span className="text-[14px] font-black text-[#0d1117]">{HOURS.lunch.start} ~ {HOURS.lunch.end}</span>
        </div>
      </div>

      <div className="mt-4 space-y-1 pl-1">
        <p className="text-[13px] font-bold text-primary">※ 토요일은 점심시간 없이 진료합니다</p>
        <p className="text-[13px] text-[#64748b]">일요일 · 공휴일 휴진</p>
      </div>

      <Link href="/about/info#hours" className="inline-block mt-6 text-[13px] font-bold text-primary hover:underline">
        진료안내 자세히 보기 →
      </Link>
    </div>
  )
}

function SurgerySection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center text-white text-lg shrink-0"
          style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}
        >
          ⚕️
        </div>
        <h3 className="text-[20px] font-black text-[#0d1117]">수술안내</h3>
      </div>

      <div className="space-y-3">
        {[
          { title: '수술 전 확인', desc: '금식·복용 약 조절·사전 검사는 수술 종류와 상태에 따라 달라질 수 있습니다.' },
          { title: '마취·수술 시간', desc: '마취 방법과 소요 시간은 질환·수술 범위에 따라 달라질 수 있으며, 상담 시 안내드립니다.' },
          { title: '통증·회복', desc: '수술 후 통증은 개인차가 있으며, 처방약과 생활 관리로 조절합니다.' },
        ].map((item) => (
          <div key={item.title} className="p-4 rounded-2xl bg-white shadow-sm">
            <p className="text-[14px] font-bold text-[#0d1117] mb-1">{item.title}</p>
            <p className="text-[13px] text-[#64748b] leading-relaxed break-keep">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/about/info#surgery" className="text-[13px] font-bold text-primary hover:underline">
          진료안내 · 수술안내 →
        </Link>
        <Link href="/about/surgery" className="text-[13px] font-bold text-primary hover:underline">
          수술안내 페이지 →
        </Link>
        <Link href="/about/aftercare" className="text-[13px] font-bold text-primary hover:underline">
          수술 후 주의사항 →
        </Link>
      </div>
    </div>
  )
}

function LocationSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center text-white text-lg shrink-0"
          style={{ background: 'linear-gradient(135deg, #0d9488, #0d7fc4)' }}
        >
          📍
        </div>
        <h3 className="text-[20px] font-black text-[#0d1117]">오시는 길</h3>
      </div>

      <div className="space-y-2.5">
        <div className="flex gap-4 items-start p-4 rounded-2xl bg-white shadow-sm">
          <span className="text-[12px] font-black text-primary min-w-[40px] pt-0.5">주소</span>
          <p className="text-[13px] text-[#374151] leading-relaxed font-medium">{ADDRESS}</p>
        </div>
        <div className="flex gap-4 items-start p-4 rounded-2xl bg-white shadow-sm">
          <span className="text-[12px] font-black text-primary min-w-[40px] pt-0.5">지하철</span>
          <p className="text-[13px] text-[#374151] font-medium">
            김포골드라인 <strong className="text-[#0d1117]">구래역 1번출구</strong>
          </p>
        </div>
        <div className="flex gap-4 items-start p-4 rounded-2xl bg-white shadow-sm">
          <span className="text-[12px] font-black text-primary min-w-[40px] pt-0.5">버스</span>
          <div className="text-[12px] text-[#64748b] space-y-1">
            <p>
              <span className="text-[#374151] font-bold">간선</span> 60-2, 70, 700, 700-1
            </p>
            <p>
              <span className="text-[#374151] font-bold">좌석</span> 22, 800 &nbsp;|&nbsp;
              <span className="text-[#374151] font-bold">일반</span> 3, 33, 60-3, 81, 81-1, 90
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 rounded-2xl bg-white shadow-sm">
          <span className="text-[12px] font-black text-primary min-w-[40px] pt-0.5">주차</span>
          <p className="text-[13px] text-[#374151] font-medium">계림 M스퀘어 지하주차장</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <a
          href="https://map.naver.com/p/entry/place/1152854964"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold text-white shadow-[0_4px_16px_rgba(13,127,196,0.25)] hover:-translate-y-0.5 transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}
        >
          🗺 네이버 지도 크게 보기
        </a>
        <Link href="/about/location" className="text-[13px] font-bold text-primary hover:underline">
          오시는 길 자세히 →
        </Link>
      </div>
    </div>
  )
}
