'use client'
import Link from 'next/link'
import Image from 'next/image'

const CARDS = [
  { href: '/anorectal', icon: '❤️', title: '대장항문센터', desc: '출혈·통증·가려움·돌출감이 있을 때. 치핵·치열·치루·소양증·콘딜로마·변비 등 항문·배변 증상을 외과전문의가 진단·치료합니다.', img: '/images/tour/03-consultation-room.webp' },
  { href: '/endoscopy', icon: '🔬', title: '내시경센터', desc: '속쓰림·혈변·검진이 필요할 때. 위·대장내시경과 용종 제거를 시행하며, 수면 여부는 상담 후 선택할 수 있습니다.', img: '/images/tour/06-endoscopy-room.webp' },
  { href: '/skin', icon: '✂️', title: '피부종양센터', desc: '만져지는 혹·낭종·쥐젖이 신경 쓰일 때. 지방종·표피낭종·연성섬유종을 국소마취 하 외래 절제로 상담·진행합니다.', img: '/images/medical/skin/common/skin-clinic-image-01.webp' },
  { href: '/surgery', icon: '🏥', title: '기타외과질환', desc: '화상·상처·내성발톱·영양수액이 필요할 때. 일상에서 생기는 외과 문제를 정도에 맞춰 처치·경과를 관찰합니다.', img: '/images/tour/05-recovery-room.webp' },
  { href: '/magazine', icon: '📰', title: '건강매거진', desc: '대장·항문질환과 내시경 검사, 일상 건강관리에 필요한 의료 정보를 알기 쉽게 전해드립니다.', img: '/images/pages/wellness.webp' },
  { href: '/consultation', icon: '💬', title: '온라인 상담', desc: '증상·예약이 궁금할 때. 이름·연락처·증상을 남겨주시면 확인 후 안내드리며, 카카오 채널로도 문의할 수 있습니다.', img: '/images/tour/01-reception.webp' },
]

export default function DepartmentCards() {
  return (
    <section className="section-space bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="section-header">
          <p className="section-eyebrow text-primary uppercase">DEPARTMENTS</p>
          <h2 className="section-title text-[#0d1117]">진료 센터</h2>
          <p className="section-lead text-[#6b7280]">각 분야 전문 진료를 만나보세요</p>
        </div>

        {/* 모바일: 가로 스크롤 캐러셀 */}
        <div className="lg:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {CARDS.map((card) => (
              <Link key={card.href} href={card.href} className="shrink-0 snap-start w-[72vw] max-w-[280px] rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.09)] overflow-hidden flex flex-col">
                <div className="relative" style={{ height: '160px' }}>
                  <Image src={card.img} alt={card.title} fill className="object-cover" sizes="280px" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 flex items-center justify-center text-[18px] shadow-sm">{card.icon}</div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="card-title text-[#0d1117] mb-1.5">{card.title}</h3>
                  <p className="body-text text-[#6b7280] flex-1 line-clamp-3 text-[14.5px]">{card.desc}</p>
                  <p className="meta-text font-bold text-primary mt-3">자세히 보기 →</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-3">
            {CARDS.map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#d1d5db]" />)}
          </div>
        </div>

        {/* 데스크탑/태블릿: 그리드 */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <Link key={card.href} href={card.href} className="group rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] overflow-hidden hover:shadow-[0_8px_32px_rgba(13,127,196,0.15)] hover:-translate-y-1 transition-all duration-300">
              <div className="relative" style={{ height: '200px' }}>
                <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-2xl bg-white/90 flex items-center justify-center text-[20px] shadow-sm">{card.icon}</div>
              </div>
              <div className="p-5">
                <h3 className="card-title text-[#0d1117] mb-2">{card.title}</h3>
                <p className="body-text text-[#6b7280] mb-4">{card.desc}</p>
                <p className="meta-text font-bold text-primary group-hover:gap-2 transition-all">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
