'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { ADDRESS } from '@/lib/constants'

export default function InfoPage() {
  const [tab, setTab] = useState<'hours' | 'location'>('hours')
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" alt="진료안내" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.82) 40%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,transparent 50%,rgba(255,255,255,0.6) 80%,rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 병원소개 / <strong className="text-[#0d1117]">진료안내</strong></nav>
          <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">진료안내</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">진료시간 및 오시는 길 안내</p>
        </div>
      </div>

      {/* 모바일 탭 */}
      <div className="lg:hidden flex border-b border-[#e5e7eb] sticky top-16 bg-white z-10">
        <button
          onClick={() => setTab('hours')}
          className={`flex-1 py-3.5 text-[14px] font-bold border-b-2 transition-colors ${tab === 'hours' ? 'border-primary text-primary' : 'border-transparent text-[#9ca3af]'}`}
        >
          진료시간
        </button>
        <button
          onClick={() => setTab('location')}
          className={`flex-1 py-3.5 text-[14px] font-bold border-b-2 transition-colors ${tab === 'location' ? 'border-primary text-primary' : 'border-transparent text-[#9ca3af]'}`}
        >
          오시는 길
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-8 lg:py-14">
        {/* PC: 좌우 나란히 */}
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
    <div className="p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <div className="flex items-center gap-2.5 mb-5">
        <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>
          <ClockIcon className="w-5 h-5 text-white" />
        </span>
        <h2 className="text-[18px] font-bold text-[#0d1117]">진료시간</h2>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-xl bg-[#f8fafb] px-4 py-3">
          <span className="text-[13px] font-semibold text-[#374151]">평일</span>
          <span className="text-[13px] font-black text-[#0d1117]">09:00 ~ 18:00</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-[#f0f7ff] px-4 py-3">
          <span className="text-[13px] font-semibold text-[#374151]">토요일</span>
          <span className="text-[13px] font-black text-[#0d1117]">09:00 ~ 15:00</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-[#f8fafb] px-4 py-3">
          <span className="text-[13px] font-semibold text-[#374151]">점심시간</span>
          <span className="text-[13px] font-black text-[#0d1117]">13:00 ~ 14:00</span>
        </div>
        <div className="pt-2 space-y-1">
          <p className="text-[12px] font-bold text-primary">※ 토요일은 점심시간 없이 진료합니다</p>
          <p className="text-[11px] text-[#94a3b8]">일요일 · 공휴일 휴진</p>
        </div>
      </div>
    </div>
  )
}

function LocationCard() {
  return (
    <div className="p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <div className="flex items-center gap-2.5 mb-5">
        <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d9488,#0d7fc4)' }}>
          <MapPinIcon className="w-5 h-5 text-white" />
        </span>
        <h2 className="text-[18px] font-bold text-[#0d1117]">오시는 길</h2>
      </div>
      <div className="space-y-3">
        <div className="rounded-xl bg-[#f8fafb] px-4 py-3">
          <p className="text-[11px] font-bold text-primary mb-1">주소</p>
          <p className="text-[13px] font-semibold text-[#0d1117] leading-relaxed">{ADDRESS}</p>
        </div>
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <span className="text-[18px] shrink-0">🚇</span>
            <div>
              <p className="text-[12px] font-bold text-[#0d1117]">지하철</p>
              <p className="text-[12px] text-[#6b7280]">김포골드라인 구래역 1번출구 → 도보 3분</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[18px] shrink-0">🚌</span>
            <div>
              <p className="text-[12px] font-bold text-[#0d1117]">버스</p>
              <p className="text-[12px] text-[#6b7280]">간선 60-2, 70, 700, 700-1 / 좌석 22, 800</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[18px] shrink-0">🅿️</span>
            <div>
              <p className="text-[12px] font-bold text-[#0d1117]">주차</p>
              <p className="text-[12px] text-[#6b7280]">계림 M스퀘어 지하주차장 (진료 시 무료)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
