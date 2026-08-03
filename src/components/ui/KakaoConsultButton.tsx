'use client'

import PendingFeatureButton from '@/components/ui/PendingFeatureButton'
import type { ReactNode } from 'react'

/** @deprecated Prefer PendingFeatureButton with explicit message */
export default function KakaoConsultButton({
  children,
  className,
  style,
  as = 'button',
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  as?: 'button' | 'a' | 'span'
}) {
  return (
    <PendingFeatureButton
      className={className}
      style={style}
      as={as}
      message="카카오상담 기능을 준비하고 있습니다."
    >
      {children}
    </PendingFeatureButton>
  )
}
