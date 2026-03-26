import { writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'
function w(p, c) { mkdirSync(dirname(p), {recursive:true}); writeFileSync(p, c, 'utf8'); console.log('✓', p) }

w('src/components/sections/ClinicInfo.tsx', `'use client'

import { motion } from 'framer-motion'
import { HOURS, ADDRESS } from '@/lib/constants'

export default function ClinicInfo() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="clinic-info-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[3px] uppercase text-primary mb-3">
            <span className="w-5 h-[2px] bg-primary inline-block rounded-full" />
            INFORMATION
          </span>
          <h2
            id="clinic-info-heading"
            className="text-[28px] md:text-[36px] lg:text-[40px] font-black text-[#0d1117] tracking-[-0.02em]"
          >
            진료 안내
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-[#f8fafb] p-6 md:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        >
          {/* 진료시간 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white text-lg shrink-0 shadow-[0_4px_12px_rgba(13,127,196,0.25)]" style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}>
                🕐
              </div>
              <h3 className="text-[20px] font-black text-[#0d1117]">진료시간</h3>
            </div>
            <div className="space-y-2 max-w-2xl">
              <div className="grid grid-cols-2 items-center rounded-2xl bg-white px-5 py-4 shadow-sm">
                <span className="text-[14px] font-bold text-[#374151]">평일</span>
                <span className="text-[14px] font-black text-[#0d1117]">{HOURS.weekday.open} ~ {HOURS.weekday.close}</span>
              </div>
              <div className="grid grid-cols-2 items-center rounded-2xl bg-[#f0f7ff] px-5 py-4 shadow-sm">
                <span className="text-[14px] font-bold text-[#374151]">토요일</span>
                <span className="text-[14px] font-black text-[#0d1117]">{HOURS.saturday.open} ~ {HOURS.saturday.close}</span>
              </div>
              <div className="grid grid-cols-2 items-center rounded-2xl bg-white px-5 py-4 shadow-sm">
                <span className="text-[14px] font-bold text-[#374151]">점심시간</span>
                <span className="text-[14px] font-black text-[#0d1117]">{HOURS.lunch.start} ~ {HOURS.lunch.end}</span>
              </div>
            </div>
            <div className="mt-4 space-y-1 pl-1">
              <p className="text-[13px] font-bold text-primary">※ 토요일은 점심시간 없이 진료합니다</p>
              <p className="text-[13px] text-[#94a3b8]">일요일 · 공휴일 휴진</p>
            </div>
          </div>

          <div className="w-full h-px bg-[#e5eaef] mb-10" />

          {/* 오시는 길 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white text-lg shrink-0 shadow-[0_4px_12px_rgba(13,148,136,0.25)]" style={{ background: 'linear-gradient(135deg, #0d9488, #0d7fc4)' }}>
                📍
              </div>
              <h3 className="text-[20px] font-black text-[#0d1117]">오시는 길</h3>
            </div>
            <div className="space-y-3 max-w-2xl">
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white shadow-sm">
                <span className="text-[12px] font-black text-primary min-w-[40px] pt-0.5">주소</span>
                <p className="text-[13px] md:text-[14px] text-[#374151] leading-relaxed font-medium">{ADDRESS}</p>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white shadow-sm">
                <span className="text-[12px] font-black text-primary min-w-[40px] pt-0.5">지하철</span>
                <p className="text-[13px] md:text-[14px] text-[#374151] font-medium">김포골드라인 <strong className="text-[#0d1117]">구래역 1번출구</strong></p>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white shadow-sm">
                <span className="text-[12px] font-black text-primary min-w-[40px] pt-0.5">버스</span>
                <div className="text-[12px] md:text-[13px] text-[#64748b] space-y-1">
                  <p><span className="text-[#374151] font-bold">간선</span> 60-2, 70, 700, 700-1</p>
                  <p><span className="text-[#374151] font-bold">좌석</span> 22, 800 &nbsp;|&nbsp; <span className="text-[#374151] font-bold">일반</span> 3, 33, 60-3, 81, 81-1, 90</p>
                  <p><span className="text-[#374151] font-bold">직행</span> 8000 &nbsp;|&nbsp; <span className="text-[#374151] font-bold">급행</span> 8600 &nbsp;|&nbsp; <span className="text-[#374151] font-bold">광역</span> M6117, M6427</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white shadow-sm">
                <span className="text-[12px] font-black text-primary min-w-[40px] pt-0.5">주차</span>
                <p className="text-[13px] md:text-[14px] text-[#374151] font-medium">계림 M스퀘어 지하주차장</p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
`)

console.log('✅ 완료!')
