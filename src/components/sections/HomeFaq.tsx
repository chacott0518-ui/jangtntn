import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'

const faqs = [
  {
    q: '장튼튼항외과의원에서는 어떤 진료를 하나요?',
    a: '장튼튼항외과의원은 대장항문·내시경·피부종양·일반외과 증상을 중심으로 진료합니다. 항문 출혈·통증·가려움, 속쓰림, 피부 혹처럼 일상에서 불편한 증상이 있을 때 상담할 수 있습니다. 진료 범위와 검사·치료 순서는 증상과 결과에 따라 달라질 수 있으며, 필요하면 경과 관찰이나 추가 검사를 안내합니다.',
  },
  {
    q: '항문에서 출혈이 있으면 바로 와야 하나요?',
    a: '배변 시 선홍색 출혈은 치핵·치열 등에서 흔히 보일 수 있지만, 출혈량·색·통증 동반 여부가 다양해 원인 확인이 필요합니다. 출혈이 반복되거나 어지럼·빈혈 의심 증상이 있으면 진료를 권합니다. 심한 출혈·실신 등 응급이 의심되면 가까운 응급실을 먼저 이용해 주세요.',
  },
  {
    q: '치질이면 꼭 수술을 해야 하나요?',
    a: '모든 치핵이 수술 대상은 아니며, 수술 적응도 일률적이지 않습니다. 초기에는 생활습관 교정과 약물 치료로 경과를 지켜볼 수 있는 경우가 있습니다. 돌출·통증·반복 출혈이 심하면 시술·수술 여부를 상담하며, 최종 방침은 진찰과 상담을 거쳐 개인 상태에 맞춰 결정됩니다.',
  },
  {
    q: '내시경 검사는 어떻게 준비하나요?',
    a: '위내시경은 금식, 대장내시경은 장정결제와 식이 안내가 필요할 수 있습니다. 복용 중인 약·기저질환·이전 수술력에 따라 준비 방법이 달라질 수 있어 사전 확인이 중요합니다. 예약 시 안내문을 확인하고, 준비 과정이 궁금하면 방문 전 전화 또는 온라인으로 상담해 주세요.',
  },
  {
    q: '예약은 어떻게 하나요?',
    a: '전화 또는 온라인 상담으로 접수할 수 있으며, 카카오 채널 문의도 가능합니다. 이름·연락처와 함께 증상, 희망 진료 시간을 남겨주시면 확인 후 안내드립니다. 당일 방문 가능 여부는 진료 일정에 따라 달라질 수 있어, 원활한 진료를 위해 가능하면 미리 문의해 주세요.',
  },
  {
    q: '김포 구래역에서 어떻게 오나요?',
    a: '김포골드라인 구래역 1번 출구 인근, 계림 M스퀘어 3층에 위치해 있습니다. 버스·자차로도 방문할 수 있으며 건물 지하주차장을 이용할 수 있습니다. 자세한 주소와 교통편·주차 안내는 홈페이지 진료 안내 및 오시는 길 메뉴에서 확인해 주세요. 처음 방문이시면 출구 안내판을 참고하시면 편리합니다.',
  },
]

export default function HomeFaq() {
  return (
    <section className="bg-[#f8fafb] section-space" aria-labelledby="home-faq-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="rounded-2xl border border-[#e8eef3] bg-white px-4 pt-4 pb-3 md:px-5 md:pt-5 md:pb-4 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
          <h2
            id="home-faq-heading"
            className="flex items-center gap-2 text-[17px] md:text-[18px] font-bold text-[#0d1117] pb-3 mb-3 border-b border-[#f0f4f8] break-keep"
          >
            <span
              aria-hidden
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[14px] font-bold"
              style={{ background: '#fde8ef', color: '#d4537e' }}
            >
              ?
            </span>
            자주 묻는 질문
          </h2>
          <StaticFaq items={faqs} id="home-faq-list" hideHeading />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
      </div>
    </section>
  )
}
