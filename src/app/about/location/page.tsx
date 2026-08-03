import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { ADDRESS } from '@/lib/constants'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = { title: '오시는 길 | 장튼튼항외과의원', description: '장튼튼항외과의원 오시는 길.' }

export default function LocationPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="/images/tour/02-waiting-area.webp" alt="오시는 길" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>오시는 길</strong></nav>
          <h1 className="page-h1 text-[#0d1117] mb-2">오시는 길</h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 section-space space-y-6">
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="section-h2 text-[#0d1117] mb-3">핵심요약</h2>
          <p className="body-text text-[#374151] break-keep">
            장튼튼항외과의원은 김포골드라인 구래역 1번출구에서 도보로 오실 수 있으며, 계림 M스퀘어 지하주차장을 이용할 수 있습니다.
          </p>
        </section>

        <PageToc
          items={[
            { id: 'address', label: '주소' },
            { id: 'transit', label: '교통편' },
          ]}
        />

        <section id="address" className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>
              <MapPinIcon className="w-5 h-5 text-white" />
            </span>
            <h2 className="section-h2 text-[#0d1117]">주소</h2>
          </div>
          <p className="body-text font-semibold">{ADDRESS}</p>
        </section>

        <section id="transit" className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] space-y-3">
          <h2 className="section-h2 text-[#0d1117] mb-4">교통편</h2>
          <p className="body-text">🚇 김포골드라인 구래역 1번출구 → 도보 3분</p>
          <p className="body-text">🅿️ 계림 M스퀘어 지하주차장 (진료 시 무료)</p>
          <p className="body-text">🚌 버스 · 문의 031-987-7282</p>
        </section>
      </div>
    </div>
  )
}
