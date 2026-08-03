type FaqItem = { q: string; a: string }

export default function StaticFaq({
  title = '자주 묻는 질문',
  items,
  id = 'faq',
}: {
  title?: string
  items: FaqItem[]
  id?: string
}) {
  return (
    <section id={id} className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
      <h2 className="section-h2 text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2 break-keep">
        <span aria-hidden>❓</span> {title}
      </h2>
      <div className="space-y-3 mt-[var(--section-title-gap)]">
        {items.map((item) => (
          <details
            key={item.q}
            className="group faq-item rounded-2xl bg-[#f8fafb] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            <summary className="faq-question list-none cursor-pointer flex items-start justify-between gap-3 p-5 text-[#0d1117] font-bold break-keep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <span className="flex items-start gap-2 min-w-0">
                <span className="text-primary shrink-0">Q.</span>
                <span>{item.q}</span>
              </span>
              <span
                aria-hidden
                className="faq-icon shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center text-[16px] leading-none font-bold shadow-sm transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="faq-answer px-5 pb-5 pl-10 text-[#374151] break-keep">
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
