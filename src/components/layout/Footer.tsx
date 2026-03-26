import Link from 'next/link'
import Image from 'next/image'
import { ADDRESS, PHONE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#0d1117]" aria-label="푸터">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-12 pb-8">
        <div className="pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-xs">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                width={140}
                height={42}
                alt="장튼튼항외과"
                className="object-contain h-9 w-auto brightness-0 invert"
              />
            </Link>
            <div className="flex gap-2 flex-wrap">
              
                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#1a3a1e] text-[#4ade80] text-[12px] font-bold hover:bg-[#166534] transition-colors"
              >
                📝 공식 블로그
              </a>
              
                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#3a2000] text-[#FEE500] text-[12px] font-bold hover:bg-[#4a2c00] transition-colors"
              >
                💬 카카오 상담
              </a>
            </div>
          </div>
        </div>
        <div className="pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[11px] text-[#555]">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <span>상호명: 장튼튼항외과의원</span>
            <span>사업자등록번호: 260-92-01324</span>
            <span>대표자: 한호선</span>
            <span>전화: {PHONE}</span>
            <span>팩스: 031-981-7282</span>
            <span className="hidden md:inline">주소: {ADDRESS}</span>
          </div>
          <p className="shrink-0">© {new Date().getFullYear()} 장튼튼항외과. All rights reserved.</p>
        </div>
      </div>
      <div className="h-20 md:h-0" />
    </footer>
  )
}