import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildPageMetadata({
  path: '/consultation',
  title: '온라인 상담 예약 | 장튼튼항외과의원',
  description:
    '장튼튼항외과의원 온라인 상담 예약. 증상과 희망 일정을 남겨주시면 확인 후 안내드립니다.',
})

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
