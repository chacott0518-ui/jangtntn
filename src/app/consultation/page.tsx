import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: '온라인 상담 | 장튼튼항외과', description: '온라인 상담 신청.' }
export default function ConsultationPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" alt="온라인 상담" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-4">홈 / <strong>온라인 상담</strong></nav>
          <h1 className="text-[44px] font-black text-[#0d1117] mb-2">온라인 상담</h1>
          <p className="text-[16px] text-[#555]">궁금한 사항을 남겨주시면 빠르게 답변드립니다</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-14">
        <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] space-y-4">
          <div><label className="block text-[13px] font-bold mb-1.5">이름</label><input type="text" placeholder="이름을 입력해주세요" className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-primary" /></div>
          <div><label className="block text-[13px] font-bold mb-1.5">연락처</label><input type="tel" placeholder="010-0000-0000" className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-primary" /></div>
          <div><label className="block text-[13px] font-bold mb-1.5">상담 내용</label><textarea rows={5} placeholder="상담 내용을 입력해주세요" className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-primary resize-none" /></div>
          <button className="w-full py-4 rounded-xl text-white font-bold text-[15px]" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>상담 신청하기</button>
          <p className="text-[12px] text-[#9ca3af] text-center">개인정보는 상담 목적으로만 사용됩니다</p>
        </div>
      </div>
    </div>
  )
}