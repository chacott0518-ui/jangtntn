import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildPageMetadata({
  path: '/magazine',
  title: '건강매거진 | 장튼튼항외과의원',
  description: '장튼튼항외과의원 건강매거진. 항문·대장·내시경 관련 건강 정보를 안내합니다.',
})

export default function MagazineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
