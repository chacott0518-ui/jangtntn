import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '의료진 소개 | 장튼튼항외과 외과전문의 한호선',
  description: '장튼튼항외과 대표원장 한호선 외과전문의. 중앙대학교 의과대학 졸업, 대장내시경 인증의. 김포 구래역 1번출구.',
  keywords: '장튼튼항외과 원장, 한호선 원장, 김포 외과전문의, 김포 대장항문 전문의, 중앙대학교 외과',
  alternates: { canonical: 'https://jangtntn.vercel.app/about/doctor' },
  openGraph: {
    title: '의료진 소개 | 장튼튼항외과',
    description: '외과전문의 한호선 원장. 중앙대학교병원 외과전문의, 위·대장 내시경학회 인증의.',
    url: 'https://jangtntn.vercel.app/about/doctor',
    images: [{ url: '/images/doctor.jpg', width: 400, height: 500 }],
  },
}

const career = [
  {
    year: '외과전문의',
    items: [
      '중앙대학교 의과대학 졸업',
      '중앙대학교 의과대학원 졸업',
      '중앙대학교병원 외과전문의',
      '위·대장 내시경학회 인증의',
      '천안 창문외과 과장',
      '김앤정외과 과장',
      '중앙대학교 외과 외래교수',
    ],
  },
  {
    year: '학회활동',
    items: [
      '대한외과학회 평생회원',
      '대한 대장항문학회 평생회원',
      '대한 위장내시경학회 정회원',
      '대한 외과초음파학회 평생회원',
      '대한 화상학회 평생회원',
      '대한 창상학회 평생회원',
    ],
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: '한호선',
  jobTitle: '대표원장',
  medicalSpecialty: 'Surgery',
  description: '외과전문의. 중앙대학교 의과대학 졸업. 위·대장 내시경학회 인증의.',
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: '중앙대학교 의과대학' },
    { '@type': 'CollegeOrUniversity', name: '중앙대학교 의과대학원' },
  ],
  worksFor: {
    '@type': 'MedicalClinic',
    name: '장튼튼항외과의원',
    url: 'https://jangtntn.vercel.app',
  },
}

export default function DoctorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white min-h-screen pb-24 md:pb-0">

        {/* 히어로 */}
        <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
            alt="의료진 소개 장튼튼항외과"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
            <nav className="text-[12px] text-[#94a3b8] mb-3" aria-label="경로">
              홈 / 병원소개 / <strong className="text-[#0d1117]">의료진 소개</strong>
            </nav>
            <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">의료진 소개</h1>
            <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">경험과 실력을 갖춘 전문 의료진</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14">

          {/* 인사말 */}
          <div className="mb-10 p-6 lg:p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.05), rgba(13,148,136,0.05))', border: '1px solid rgba(13,127,196,0.12)' }}>
            <p className="text-[12px] font-black text-primary tracking-wider mb-2">원장 인사말</p>
            <p className="text-[14px] md:text-[15px] text-[#374151] leading-[2.0]">
              안녕하세요, 장튼튼항외과 원장 한호선입니다.<br />
              오랜기간 외과전문의로서 내시경·수술 경험을 통해서 최선의 진료 및 수술을 약속드립니다.<br className="hidden md:block" />
              저희 병원을 찾아주시는 한 분 한 분을 가족처럼 생각하고 모시겠습니다.<br className="hidden md:block" />
              편안한 진료 및 최고의 만족감을 위해서 항상 노력하겠습니다. 감사합니다.
            </p>
          </div>

          {/* 의료진 카드 */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10">

            {/* 사진 */}
            <div className="relative mx-auto md:mx-0 shrink-0 w-48 h-60 md:w-60 md:h-72 lg:w-72 lg:h-88 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(13,127,196,0.18)]">
              <Image
                src="/images/doctor.jpg"
                alt="장튼튼항외과 대표원장 한호선 외과전문의"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 240px, 288px"
              />
              <div
                className="absolute bottom-0 left-0 right-0 py-3 text-center"
                style={{ background: 'linear-gradient(to top, rgba(13,127,196,0.95), transparent)' }}
              >
                <p className="text-white font-black text-[15px]">한호선 원장</p>
                <p className="text-white/80 text-[11px]">외과전문의</p>
              </div>
            </div>

            {/* 경력 */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-[13px] font-bold text-primary mb-1">대표원장</p>
                <h2 className="text-[24px] md:text-[28px] font-black text-[#0d1117] mb-1">한호선 원장</h2>
                <p className="text-[14px] text-[#6b7280]">정확한 진단, 바른 진료로 환자분들께 다가갑니다.</p>
                <div className="w-12 h-1 rounded-full bg-primary mt-3" />
              </div>

              <div className="space-y-5">
                {career.map((section) => (
                  <div key={section.year}>
                    <p className="text-[13px] font-black text-primary tracking-wider mb-2">{section.year}</p>
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
    </>
  )
}