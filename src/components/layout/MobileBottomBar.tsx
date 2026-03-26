'use client'

import Link from 'next/link'
import { PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 h-16">
        <a
          href="tel:0319877282"
          className="flex flex-col items-center justify-center gap-1 text-white"
          style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}
        >
          <PhoneIcon className="w-5 h-5" />
          <span className="text-[11px] font-bold">전화 상담</span>
        </a>
        <Link
          href="/consultation"
          className="flex flex-col items-center justify-center gap-1 bg-primary text-white"
        >
          <CalendarDaysIcon className="w-5 h-5" />
          <span className="text-[11px] font-bold">온라인예약</span>
        </Link>
        <a
          href="#"
          className="flex flex-col items-center justify-center gap-1 bg-[#FEE500] text-[#3C1E1E]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.67-.15.56-.96 3.58-1 3.73 0 .09.03.18.1.23a.26.26 0 00.25.02c.35-.05 4.02-2.64 4.66-3.08.43.06.87.09 1.33.09 5.52 0 10-3.58 10-7.66S17.52 3 12 3z" />
          </svg>
          <span className="text-[11px] font-bold">카카오상담</span>
        </a>
      </div>
    </div>
  )
}
