import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildPageMetadata({
  path: '/about/info',
  title: '진료안내 | 장튼튼항외과의원',
  description: '장튼튼항외과의원 진료시간·예약·오시는 길 안내. 김포 구래역 1번출구.',
})

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
