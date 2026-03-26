'use client'
import Link from 'next/link'
import Image from 'next/image'

const CARDS = [
  { href: '/anorectal', icon: '❤️', title: '대장항문센터', desc: '치핵·치열·치루·항문소양증·항문콘딜로마·항문거근증후군·모소동·변비/설사 전문 진료. 외과전문의가 직접 진단하고 치료합니다.', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80' },
  { href: '/pph', icon: '✂️', title: 'PPH 수술', desc: '자동봉합기를 이용한 최소침습 치핵 수술. 통증이 적고 입원 기간이 짧으며 일상 복귀가 빠른 검증된 치핵 치료법입니다.', img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80' },
  { href: '/endoscopy', icon: '🔬', title: '내시경센터', desc: '위내시경·대장내시경·대장용종 제거술. 수면 내시경으로 편안하게 받는 정밀 검사. 대장암 조기 발견의 핵심입니다.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  { href: '/skin', icon: '✂️', title: '피부종양센터', desc: '지방종·표피낭종·연성섬유종(쥐젖) 제거. 국소마취 후 당일 시술 가능한 안전하고 간단한 외래 수술입니다.', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80' },
  { href: '/surgery', icon: '🏥', title: '기타외과질환', desc: '화상(1·2·3도)·내성발톱 교정·상처봉합·영양수액·예방접종. 일상에서 생기는 외과적 문제를 전문적으로 치료합니다.', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80' },
  { href: '/consultation', icon: '💬', title: '온라인 상담', desc: '24시간 예약 접수. 이름·연락처·증상을 남겨주시면 빠르게 연락드립니다. 카카오 채널로도 상담 가능합니다.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
]

export default function DepartmentCards() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="mb-8 lg:mb-12">
          <p className="text-[12px] font-black text-primary tracking-widest uppercase mb-3">DEPARTMENTS</p>
          <h2 className="text-[28px] lg:text-[38px] font-black text-[#0d1117] tracking-tight mb-2">진료 센터</h2>
          <p className="text-[15px] text-[#6b7280]">각 분야 전문 진료를 만나보세요</p>
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
                  <h3 className="text-[15px] font-black text-[#0d1117] mb-1.5">{card.title}</h3>
                  <p className="text-[12px] text-[#6b7280] leading-[1.7] flex-1 line-clamp-3">{card.desc}</p>
                  <p className="text-[12px] font-bold text-primary mt-3">자세히 보기 →</p>
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
                <h3 className="text-[17px] font-black text-[#0d1117] mb-2">{card.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-[1.75] mb-4">{card.desc}</p>
                <p className="text-[13px] font-bold text-primary group-hover:gap-2 transition-all">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
