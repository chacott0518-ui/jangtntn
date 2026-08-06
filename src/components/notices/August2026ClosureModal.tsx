'use client'

import Image from 'next/image'
import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { LOGO_PATH } from '@/lib/site-config'

/** localStorage: 오늘 하루 안 보기 만료 시각(ISO). X/ESC/배경은 저장하지 않음 */
const HIDE_UNTIL_KEY = 'jangtntn-august-2026-closure-hide-until'
/** 2026-08-18 00:00 KST 부터 공지 종료 */
const HIDE_FROM_KST = '2026-08-18'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'] as const
const CLOSED_DAYS = new Set([14, 15, 16, 17])

function kstYmd(d = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d)
}

/** 한국 시간 기준 다음 날 00:00 의 UTC ISO */
function nextKstMidnightIso(): string {
  const today = kstYmd()
  const todayStart = new Date(`${today}T00:00:00+09:00`)
  return new Date(todayStart.getTime() + 24 * 60 * 60 * 1000).toISOString()
}

function isHiddenUntilActive(): boolean {
  try {
    const raw = localStorage.getItem(HIDE_UNTIL_KEY)
    if (!raw) return false
    const until = Date.parse(raw)
    if (Number.isNaN(until)) {
      localStorage.removeItem(HIDE_UNTIL_KEY)
      return false
    }
    if (Date.now() >= until) {
      localStorage.removeItem(HIDE_UNTIL_KEY)
      return false
    }
    return true
  } catch {
    return false
  }
}

function shouldShowModal(): boolean {
  if (typeof window === 'undefined') return false
  if (kstYmd() >= HIDE_FROM_KST) return false
  if (isHiddenUntilActive()) return false
  return true
}

/** 2026-08: 1일은 토요일 → 그리드 앞에 빈 칸 6개(일~금) */
function buildAugust2026Cells(): (number | null)[] {
  const cells: (number | null)[] = Array(6).fill(null)
  for (let day = 1; day <= 31; day++) cells.push(day)
  return cells
}

export default function August2026ClosureModal() {
  const titleId = useId()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    setOpen(shouldShowModal())
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  /** X · 배경 · ESC — storage 저장 없음 */
  const softClose = useCallback(() => {
    setOpen(false)
  }, [])

  /** 오늘 하루 안 보기 — 다음 KST 자정까지 localStorage */
  const hideForToday = useCallback(() => {
    try {
      localStorage.setItem(HIDE_UNTIL_KEY, nextKstMidnightIso())
    } catch {
      /* private mode 등 */
    }
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') softClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, softClose])

  if (!mounted || !open) return null

  const cells = buildAugust2026Cells()

  return createPortal(
    <div
      className="fixed inset-0 z-[13000] flex items-center justify-center bg-black/40 px-3 py-5 sm:px-6 sm:py-6"
      style={{ minHeight: '100dvh' }}
      onClick={softClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex w-full max-w-[350px] flex-col overflow-hidden rounded-2xl bg-[#f7fafc] shadow-[0_16px_48px_rgba(15,40,70,0.22)] sm:max-w-[500px]"
        style={reduceMotion ? undefined : { animation: 'kakao-modal-in 180ms ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={softClose}
          aria-label="휴진 안내 닫기"
          className="absolute right-1 top-1 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-[#475569] hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:right-1.5 sm:top-1.5 sm:h-11 sm:w-11"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-sm ring-1 ring-[#e2e8f0] sm:h-8 sm:w-8">
            <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
        </button>

        <div className="px-3.5 pb-2 pt-3.5 sm:px-4 sm:pb-2.5 sm:pt-3.5">
          <div className="mb-1.5 flex flex-col items-center text-center sm:mb-1.5">
            <Image
              src={LOGO_PATH}
              alt=""
              width={120}
              height={36}
              className="mb-1 h-[20px] w-auto object-contain sm:mb-1 sm:h-[24px]"
              priority
            />
            <h2
              id={titleId}
              className="text-[22px] font-extrabold leading-tight text-[#0d1117] sm:text-[25px]"
            >
              8월 진료 안내
            </h2>
          </div>

          <p className="text-center text-[14px] font-semibold leading-[1.45] text-[#0d1117] break-keep sm:text-[15.5px] sm:leading-[1.45]">
            2026년 8월 14일(금)부터
            <br />
            8월 17일(월)까지 휴진합니다.
          </p>

          <div className="mt-2 flex min-h-[42px] items-center justify-center rounded-lg border border-[#99e0d4]/70 bg-[#e8f8f5] px-2.5 py-1.5 text-center sm:mt-2 sm:min-h-[42px] sm:rounded-xl sm:px-3 sm:py-1.5">
            <p className="text-[13px] font-bold leading-snug text-[#0f766e] break-keep sm:text-[14px]">
              8월 18일(화)부터 정상 진료합니다.
            </p>
          </div>

          <div className="mt-2 rounded-xl border border-[#e8eef3] bg-white px-2.5 py-2 sm:mt-2.5 sm:px-3 sm:py-2.5">
            <p className="mb-1.5 text-center text-[12px] font-bold text-[#0d1117] sm:mb-1.5 sm:text-[13px]">
              2026년 8월
            </p>
            <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] font-semibold sm:gap-0.5 sm:text-[12px]">
              {WEEKDAYS.map((d, i) => (
                <div
                  key={d}
                  className={
                    i === 0 ? 'text-[#dc2626]' : i === 6 ? 'text-[#2563eb]' : 'text-[#64748b]'
                  }
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="mt-0.5 grid grid-cols-7 gap-0.5 sm:mt-0.5 sm:gap-0.5">
              {cells.map((day, idx) => {
                if (day === null) {
                  return <div key={`e-${idx}`} className="h-[36px] sm:h-[40px]" />
                }
                const dow = idx % 7
                const closed = CLOSED_DAYS.has(day)
                const sun = dow === 0
                const sat = dow === 6
                return (
                  <div
                    key={day}
                    className={[
                      'flex h-[36px] items-center justify-center rounded-md text-[11px] sm:h-[40px] sm:rounded-lg sm:text-[12.5px]',
                      closed
                        ? 'bg-[#0d9488] font-bold text-white shadow-sm'
                        : sun
                          ? 'font-medium text-[#dc2626]'
                          : sat
                            ? 'font-medium text-[#2563eb]'
                            : 'font-medium text-[#334155]',
                    ].join(' ')}
                    aria-label={
                      closed
                        ? `8월 ${day}일 휴진`
                        : day === 18
                          ? `8월 ${day}일부터 정상 진료`
                          : `8월 ${day}일`
                    }
                  >
                    {day}
                  </div>
                )
              })}
            </div>
            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[9.5px] text-[#64748b] sm:mt-2 sm:text-[10.5px]">
              <span className="inline-flex items-center gap-1">
                <span className="inline-block h-2.5 w-2.5 rounded bg-[#0d9488] sm:h-3 sm:w-3" aria-hidden />
                휴진 (14–17일)
              </span>
              <span className="inline-flex items-center gap-1">
                <span
                  className="inline-block h-2.5 w-2.5 rounded border border-[#99e0d4] bg-[#e8f8f5] sm:h-3 sm:w-3"
                  aria-hidden
                />
                18일부터 정상 진료
              </span>
            </div>
          </div>

          <div className="mt-1.5 border-t border-[#e2e8f0] pt-0.5 sm:mt-2 sm:pt-1">
            <button
              type="button"
              onClick={hideForToday}
              aria-label="오늘 하루 동안 휴진 안내 보지 않기"
              className="mx-auto flex min-h-[40px] w-full max-w-[240px] items-center justify-center gap-1.5 rounded-lg text-[12px] font-semibold text-[#0f766e] hover:bg-[#0d9488]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-[13px]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className="shrink-0"
              >
                <rect x="1.5" y="1.5" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M4.5 8.2L6.8 10.5L11.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              오늘 하루 안 보기
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
