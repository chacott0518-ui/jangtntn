type FaqItem = { q: string; a: string }

export default function StaticFaq({
  title = '자주 묻는 질문',
  items,
  id = 'faq',
  showEmoji = true,
  hideHeading = false,
}: {
  title?: string
  items: FaqItem[]
  id?: string
  showEmoji?: boolean
  /** true면 내부 제목·구분선·상단 여백을 렌더하지 않음 (대상 페이지 전용) */
  hideHeading?: boolean
}) {
  return (
    <section
      id={hideHeading ? undefined : id}
      className={
        hideHeading
          ? ''
          : 'bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-5 md:p-6 lg:p-8'
      }
    >
      {!hideHeading ? (
        <h2 className="section-h2 text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2 break-keep">
          {showEmoji ? <span aria-hidden>❓</span> : null}
          {title}
        </h2>
      ) : null}
      <div className={hideHeading ? 'space-y-2.5' : 'space-y-3 mt-[var(--section-title-gap)]'}>
        {items.map((item) => (
          <details
            key={item.q}
            className="group faq-item rounded-[14px] bg-[#f8fafb] shadow-[0_1px_8px_rgba(0,0,0,0.03)] overflow-hidden border border-[#eef2f6]"
          >
            <summary
              className={`faq-question list-none cursor-pointer flex items-start justify-between gap-3 min-h-[52px] p-4 md:p-5 text-[#0d1117] break-keep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden ${
                hideHeading ? 'font-semibold' : 'font-bold'
              }`}
            >
              <span className="flex items-start gap-2 min-w-0">
                <span className="text-primary shrink-0">Q.</span>
                <span className="text-[14px] md:text-[15px] leading-snug">{item.q}</span>
              </span>
              <span
                aria-hidden
                className="faq-icon shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center text-[16px] leading-none font-bold shadow-sm transition-transform duration-200 motion-reduce:transition-none group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="faq-answer px-4 md:px-5 pb-4 md:pb-5 pl-9 md:pl-10 text-[14px] text-[#374151] leading-[1.8] break-keep">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}
