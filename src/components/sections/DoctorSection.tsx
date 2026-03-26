'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

const CAREER = [
  '중앙대학교 의과대학 졸업',
  '중앙대학교 의과대학원 졸업',
  '중앙대학교병원 외과전문의',
  '대한위장내시경학회인증 대장내시경 전문의',
  '천안 창문외과 과장',
  '김앤정외과 과장',
  '중앙대학교 외과 외래교수',
]

const SOCIETIES = [
  '대한외과학회 평생회원',
  '대한 대장항문학회 평생회원',
  '대한 위장내시경학회 정회원',
  '대한 외과초음파학회 평생회원',
  '대한 화상학회 정회원',
  '대한 창상학회 정회원',
]

export default function DoctorSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-[#f8fafb]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: 'easeOut' as const }}>
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
                alt="장튼튼항외과 대표원장 한호선"
                width={400}
                height={500}
                className="object-cover w-full h-full"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' as const }} className="space-y-5">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold text-primary bg-primary/5 mb-3">외과전문의</span>
              <h2 className="text-2xl md:text-3xl text-[#0d1117]">대표원장 한호선</h2>
              <p className="mt-2 text-sm text-muted">정확한 진단, 바른 진료로 환자분들께 다가갑니다.</p>
            </div>

            <div className="space-y-2.5">
              {CAREER.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <AcademicCapIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-[13px] font-semibold text-[#374151]">{item}</span>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm text-[#0d1117] mb-2.5">학회활동</h3>
              <div className="flex flex-wrap gap-1.5">
                {SOCIETIES.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)] text-[11px] text-muted">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
