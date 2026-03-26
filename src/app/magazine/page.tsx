import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '건강매거진 | 장튼튼항외과',
  description: '장튼튼항외과 건강 정보 매거진. 대장항문, 내시경, 피부 건강 전문 정보.',
  alternates: { canonical: 'https://www.jangtntnhang.com/magazine' },
}

const articles = [
  {
    title: '치질(치핵), 수술이 꼭 필요할까? 단계별 치료법 완전 정리',
    category: '대장항문',
    date: '2025.01',
    readTime: '5분',
    summary: '치핵은 정도에 따라 약물 치료부터 수술까지 다양한 방법이 있습니다. 1~4도 분류와 각 단계에 맞는 치료법을 자세히 알아봅니다.',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
    href: '/anorectal/hemorrhoid',
  },
  {
    title: '대장내시경 전 장 정결, 이렇게 하면 덜 힘들어요',
    category: '내시경',
    date: '2024.12',
    readTime: '4분',
    summary: '많은 분들이 두려워하는 대장내시경 준비. 장 정결제를 더 편하게 복용하는 팁과 준비사항을 단계별로 안내합니다.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    href: '/endoscopy/colon',
  },
  {
    title: '변비가 지속되면 왜 위험한가요? 만성 변비의 합병증',
    category: '대장항문',
    date: '2024.11',
    readTime: '4분',
    summary: '단순히 불편한 증상으로 넘기기 쉬운 변비. 치핵, 치열, 대장 질환으로 이어질 수 있는 만성 변비의 위험성과 예방법을 알아봅니다.',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    href: '/anorectal/constipation',
  },
  {
    title: '등에 혹이 생겼어요 — 지방종 vs 피지낭종, 차이점과 치료법',
    category: '피부종양',
    date: '2024.10',
    readTime: '3분',
    summary: '피부 아래 혹이 생겼을 때 지방종인지 피지낭종인지 구별하는 방법과 각각의 치료 방법, 그리고 방치했을 때의 위험성을 설명합니다.',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    href: '/skin/lipoma',
  },
  {
    title: 'PPH 수술 vs 기존 치핵 수술, 무엇이 다른가요?',
    category: 'PPH',
    date: '2024.09',
    readTime: '4분',
    summary: '치핵 수술 방법 중 PPH(자동문합기 이용 치핵 절제술)의 특징과 장점, 기존 절제술과의 차이점을 비교하여 설명합니다.',
    img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80',
    href: '/pph',
  },
]

export default function MagazinePage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" alt="건강매거진" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">홈 / <strong className="text-[#0d1117]">건강매거진</strong></nav>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">건강매거진</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">장튼튼 건강 전문 정보</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="space-y-5">
          {articles.map((a, i) => (
            <Link key={i} href={a.href} className="group flex flex-col sm:flex-row gap-4 p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_28px_rgba(13,127,196,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="relative shrink-0 w-full sm:w-40 h-44 sm:h-28 rounded-xl overflow-hidden">
                <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="160px" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{a.category}</span>
                  <span className="text-[11px] text-[#9ca3af]">{a.date}</span>
                  <span className="text-[11px] text-[#9ca3af]">· 읽기 {a.readTime}</span>
                </div>
                <h3 className="text-[15px] font-black text-[#0d1117] mb-2 leading-[1.5] group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="text-[12px] text-[#6b7280] leading-[1.75]">{a.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
