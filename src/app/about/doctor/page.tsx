import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '의료진 소개 | 장튼튼항외과',
  description: '장튼튼항외과 대표원장 한호선 원장님을 소개합니다. 외과 전문의, 대장항문 전문 진료.',
  alternates: { canonical: 'https://www.jangtntnhang.com/about/doctor' },
}

const career = [
  { year: '학력', items: ['연세대학교 의과대학 졸업', '연세대학교 의과대학원 졸업'] },
  { year: '경력', items: ['외과 전문의 자격 취득', '前 대학병원 외과 전임의', '대장항문학회 정회원', '소화기내시경학회 정회원', '외과학회 정회원'] },
  { year: '전문', items: ['치핵·치열·치루 수술', '대장내시경·위내시경', 'PPH 수술 전문', '피부종양 제거술'] },
]

export default function DoctorPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80" alt="의료진 소개" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / 병원소개 / <strong className="text-[#0d1117]">의료진 소개</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">의료진 소개</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">경험과 실력을 갖춘 전문 의료진</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        {/* 모바일: 컴팩트 카드 */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {/* 사진 */}
          <div className="relative mx-auto md:mx-0 shrink-0 w-40 h-40 md:w-56 md:h-64 lg:w-64 lg:h-80 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(13,127,196,0.2)]">
            <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" alt="대표원장 한호선" fill className="object-cover object-top" sizes="280px" />
            <div className="absolute bottom-0 left-0 right-0 py-3 text-center" style={{ background: 'linear-gradient(to top, rgba(13,127,196,0.95), transparent)' }}>
              <p className="text-white font-black text-[15px]">한호선 원장</p>
              <p className="text-white/80 text-[11px]">외과전문의</p>
            </div>
          </div>

          {/* 정보 */}
          <div className="flex-1">
            <div className="mb-5">
              <p className="text-[13px] font-bold text-primary mb-1">대표원장</p>
              <h2 className="text-[24px] md:text-[28px] font-black text-[#0d1117] mb-1">한호선 원장</h2>
              <p className="text-[14px] text-[#6b7280]">정확한 진단, 바른 진료로 환자분들께 다가갑니다.</p>
              <div className="w-12 h-1 rounded-full bg-primary mt-3" />
            </div>

            <div className="space-y-4">
              {career.map((section) => (
                <div key={section.year}>
                  <p className="text-[12px] font-black text-primary tracking-wider mb-2">{section.year}</p>
                  <div className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-[13px] md:text-[14px] text-[#374151] leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.06), rgba(13,148,136,0.06))' }}>
              <p className="text-[13px] text-[#374151] leading-relaxed italic">
                "환자 한 분 한 분의 이야기를 귀 기울여 듣고, 가장 적합한 치료법을 함께 찾아가겠습니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
