import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '기타외과질환 | 장튼튼항외과',
  description: '화상·내성발톱·상처봉합·영양수액·예방접종. 일상의 외과 문제를 전문적으로 치료합니다.',
  alternates: { canonical: 'https://www.jangtntnhang.com/surgery' },
}

const menus = [
  { href: '/surgery/wound', title: '상처 치료', sub: '찰과상·열상·봉합이 필요한 상처부터 만성 상처까지 외과전문의가 직접 처치합니다.', icon: '🩹', tag: '응급가능' },
  { href: '/surgery/burn', title: '화상 치료', sub: '1·2·3도 화상의 단계별 전문 치료. 흉터 최소화를 위한 최신 드레싱 재료를 사용합니다.', icon: '🔥', tag: '전문치료' },
  { href: '/surgery/nail', title: '내성발톱', sub: '발톱이 살을 파고들어 생기는 통증·염증·화농. 통증 없는 교정 및 수술로 근본 치료합니다.', icon: '💅', tag: '통증없는' },
  { href: '/surgery/nutrition', title: '영양 수액', sub: '비타민·미네랄·아미노산이 포함된 맞춤형 영양 수액으로 피로 회복과 면역력 강화를 도와드립니다.', icon: '💉', tag: '당일가능' },
]

export default function SurgeryPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80" alt="기타외과질환" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">기타외과질환</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">기타외과질환</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">일상의 외과 문제, 전문의가 해결합니다</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {menus.map((m) => (
            <Link key={m.href} href={m.href} className="group flex gap-4 p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-[22px]" style={{ background: 'linear-gradient(135deg, rgba(13,127,196,0.1), rgba(13,148,136,0.1))' }}>{m.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-black text-[#0d1117]">{m.title}</h3>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.tag}</span>
                </div>
                <p className="text-[12px] text-[#6b7280] leading-[1.7] mt-1">{m.sub}</p>
                <p className="text-[12px] font-bold text-primary mt-2 group-hover:translate-x-1 transition-transform">자세히 보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
