'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ClipboardDocumentListIcon, BuildingOffice2Icon, CameraIcon, BellAlertIcon } from '@heroicons/react/24/outline'

const ITEMS = [
  { href: '/about/info', label: '진료안내', sub: '진료시간 · 예약안내', icon: ClipboardDocumentListIcon },
  { href: '/about/surgery', label: '입원·수술안내', sub: '수술 전후 안내', icon: BuildingOffice2Icon },
  { href: '/about/tour', label: '병원둘러보기', sub: '시설 안내', icon: CameraIcon },
  { href: '/notice', label: '공지사항', sub: '병원 소식', icon: BellAlertIcon },
]

export default function QuickMenu() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section ref={ref} className="bg-[#f8fafb] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {ITEMS.map((item, i) => (
            <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' as const }}>
              <Link
                href={item.href}
                className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-250"
              >
                <span className="w-[52px] h-[52px] rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}>
                  <item.icon className="w-[22px] h-[22px] text-white" />
                </span>
                <div>
                  <span className="block text-sm font-bold text-[#0d1117]">{item.label}</span>
                  <span className="block text-xs text-[#94a3b8] mt-1">{item.sub}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
