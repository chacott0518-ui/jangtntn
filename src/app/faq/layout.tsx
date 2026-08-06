import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildPageMetadata({
  path: '/faq',
  title: '자주 묻는 질문 FAQ | 장튼튼항외과의원',
  description:
    '장튼튼항외과의원 FAQ. 치핵·내시경·예약·수술 후 관리 등 환자분들이 자주 묻는 질문을 모았습니다.',
})

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
