'use client'

import { useEffect, useId, useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  message: string
  as?: 'button' | 'a' | 'span'
}

export default function PendingFeatureButton({
  children,
  className,
  style,
  message,
  as = 'button',
}: Props) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const triggerRef = useRef<HTMLElement | null>(null)
  const confirmRef = useRef<HTMLButtonElement | null>(null)
  const titleId = useId()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => confirmRef.current?.focus(), 30)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.clearTimeout(t)
      window.removeEventListener('keydown', onKey)
      triggerRef.current?.focus?.()
    }
  }, [open])

  const onOpen = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    triggerRef.current = e.currentTarget as HTMLElement
    setOpen(true)
  }

  const Comp: any = as === 'a' ? 'a' : as === 'span' ? 'span' : 'button'
  const shared = {
    className,
    style,
    onClick: onOpen,
    ...(as === 'button' ? { type: 'button' as const } : {}),
    ...(as === 'a' ? { href: '#', role: 'button' } : {}),
  }

  const modal =
    open && mounted
      ? createPortal(
          <div
            className="pending-modal-overlay"
            style={{ background: 'rgba(0,0,0,0.32)' }}
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="bg-white shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
              style={{
                width: 'calc(100% - 40px)',
                maxWidth: 320,
                padding: 22,
                borderRadius: 16,
                animation: 'kakao-modal-in 200ms ease-out',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 id={titleId} className="text-[17px] font-bold text-[#0d1117] mb-2">
                준비 중입니다
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] mb-5 break-keep">{message}</p>
              <button
                ref={confirmRef}
                type="button"
                onClick={() => setOpen(false)}
                className="w-full rounded-xl text-white font-bold text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                style={{
                  height: 42,
                  background: 'linear-gradient(135deg, #0d7fc4, #0d9488)',
                }}
              >
                확인
              </button>
            </div>
          </div>,
          document.body
        )
      : null

  return (
    <>
      <Comp {...shared}>{children}</Comp>
      {modal}
    </>
  )
}
