import type { Metadata } from 'next'
import Image from 'next/image'
import PendingFeatureButton from '@/components/ui/PendingFeatureButton'
import { PageToc } from '@/components/content/MedicalImageGallery'

export const metadata: Metadata = { title: '온라인 상담 | 장튼튼항외과의원', description: '온라인 상담 신청.' }

export default function ConsultationPage() {
  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image src="/images/tour/01-reception.webp" alt="온라인 상담" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-4">홈 / <strong>온라인 상담</strong></nav>
          <h1 className="subpage-hero-title page-h1 text-[#0d1117] mb-2">온라인 상담</h1>
          <p className="section-lead text-[#555]">궁금한 사항을 남겨주시면 빠르게 답변드립니다</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 section-space space-y-6">
        <section className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
          <h2 className="section-h2 text-[#0d1117] mb-3">핵심요약</h2>
          <p className="body-text text-[#374151] break-keep">
            이름·연락처·상담 내용을 남겨주시면 확인 후 안내드립니다. 급한 상담은 전화 031-987-7282로도 문의할 수 있습니다.
          </p>
        </section>

        <PageToc items={[{ id: 'consult-form', label: '상담 신청' }]} />

        <section id="consult-form" className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] space-y-4">
          <h2 className="section-h2 text-[#0d1117] mb-2">상담 신청</h2>
          <div>
            <label className="block meta-text font-bold mb-1.5">이름</label>
            <input type="text" placeholder="이름을 입력해주세요" className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 body-text outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block meta-text font-bold mb-1.5">연락처</label>
            <input type="tel" placeholder="010-0000-0000" className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 body-text outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block meta-text font-bold mb-1.5">상담 내용</label>
            <textarea rows={5} placeholder="상담 내용을 입력해주세요" className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 body-text outline-none focus:border-primary resize-none" />
          </div>
          <PendingFeatureButton
            message="카카오상담 기능을 준비하고 있습니다."
            className="w-full py-4 rounded-xl text-white font-bold text-[15px]"
            style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}
          >
            카카오상담
          </PendingFeatureButton>
          <p className="meta-text text-[#9ca3af] text-center">개인정보는 상담 목적으로만 사용됩니다</p>
        </section>
      </div>
    </div>
  )
}
