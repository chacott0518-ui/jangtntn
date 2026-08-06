import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { ADDRESS, PHONE } from '@/lib/constants'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildPageMetadata({
  path: '/about/location',
  title: '오시는 길 | 장튼튼항외과의원',
  description:
    '김포 구래역 1번 출구 도보 3분, 장튼튼항외과의원 오시는 길. 김포한강신도시·구래동 일대에서 찾아오시는 방법과 주차 안내.',
})

export default function LocationPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="/images/tour/02-waiting-area.webp" alt="오시는 길" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-4">홈 / 병원소개 / <strong>오시는 길</strong></nav>
          <h1 className="page-h1 text-[#0d1117] mb-2">오시는 길</h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 section-space space-y-6">
        <section id="address" className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>
              <MapPinIcon className="w-5 h-5 text-white" />
            </span>
            <h2 className="section-h2 text-[#0d1117]">주소</h2>
          </div>
          <p className="body-text font-semibold">{ADDRESS}</p>
          <p className="body-text mt-3 text-[#4b5563] leading-[1.85] break-keep">
            장튼튼항외과의원은 김포시 구래동, 김포한강신도시 일대에 위치합니다. 김포골드라인 구래역을 이용하시면
            도보로 접근하기 쉽고, 인근 마산동·장기동·운양동 등에서도 차로 방문하시기 편리한 위치에 있습니다.
            자세한 진료 일정은{' '}
            <Link href="/about/info" className="text-primary font-bold hover:underline">
              진료안내
            </Link>
            를 참고해 주세요.
          </p>
        </section>

        <section id="transit" className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] space-y-3">
          <h2 className="section-h2 text-[#0d1117] mb-4">교통편</h2>
          <p className="body-text">🚇 김포골드라인 구래역 1번출구 → 도보 3분</p>
          <p className="body-text">🅿️ 계림 M스퀘어 지하주차장 (진료 시 무료)</p>
          <p className="body-text">🚌 버스 · 문의 {PHONE}</p>
        </section>
      </div>
    </div>
  )
}
