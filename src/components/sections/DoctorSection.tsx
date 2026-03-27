'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const items = [
  '중앙대학교 의과대학 졸업',
  '중앙대학교병원 외과전문의',
  '대한위장내시경학회인증 대장내시경 전문의',
  '천안 창문외과 과장',
  '김앤정외과 과장',
  '중앙대학교 외과 외래교수',
]

const societies = [
  '대한외과학회 평생회원',
  '대한 대장항문학회 평생회원',
  '대한 위장내시경학회 정회원',
  '대한 외과초음파학회 평생회원',
  '대한 화상학회 정회원',
  '대한 창상학회 정회원',
]

export default function DoctorSection() {
  return (
    <section className="bg-[#f8fafb] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* 사진 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative shrink-0 w-64 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(13,127,196,0.18)]"
          >
            <Image
              src="/images/doctor.jpg"
              alt="대표원장 한호선"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 256px, 320px"
            />
            <div
              className="absolute bottom-0 left-0 right-0 py-4 text-center"
              style={{ background: 'linear-gradient(to top, rgba(13,127,196,0.95), transparent)' }}
            >
              <p className="text-white font-black text-[16px]">한호선 원장</p>
              <p className="text-white/80 text-[12px]">외과전문의</p>
            </div>
          </motion.div>

          {/* 정보 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1"
          >
            <span className="inline-block text-[11px] font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">외과전문의</span>
            <h2 className="text-[28px] md:text-[34px] font-black text-[#0d1117] mb-2">대표원장 한호선</h2>
            <p className="text-[14px] text-[#6b7280] mb-6">정확한 진단, 바른 진료로 환자분들께 다가갑니다.</p>

            <div className="space-y-2 mb-6">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}>
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-[13px] md:text-[14px] text-[#374151]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <p className="text-[12px] font-bold text-[#6b7280] mb-2">학회활동</p>
              <div className="flex flex-wrap gap-2">
                {societies.map((s, i) => (
                  <span key={i} className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>

            <Link
              href="/about/doctor"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold text-white shadow-[0_4px_16px_rgba(13,127,196,0.25)] hover:-translate-y-0.5 transition-all"
              style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}
            >
              의료진 소개 자세히 보기 →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}