import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { ADDRESS } from '@/lib/constants'
export const metadata: Metadata = { title: '오시는 길 | 장튼튼항외과', description: '장튼튼항외과 오시는 길.' }
export default function LocationPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80" alt="오시는 길" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / 병원소개 / <strong>오시는 길</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">오시는 길</h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14 space-y-6">
        <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}><MapPinIcon className="w-5 h-5 text-white" /></span>
            <h2 className="text-[20px] font-bold">주소</h2>
          </div>
          <p className="font-semibold">{ADDRESS}</p>
        </div>
        <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] space-y-3 text-[14px]">
          <p className="text-[17px] font-bold mb-4">교통편</p>
          <p>🚇 김포골드라인 구래역 1번출구 → 도보 3분</p>
          <p>🅿️ 계림 M스퀘어 지하주차장 (진료 시 무료)</p>
          <p>🚌 버스 031-981-7282</p>
        </div>
      </div>
    </div>
  )
}