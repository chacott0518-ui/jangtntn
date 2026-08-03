import Image from 'next/image'

export type MedicalImageItem = {
  src: string
  caption: string
  clinical?: boolean
}

export default function MedicalImageGallery({
  items,
  title = '관련 이미지',
}: {
  items: MedicalImageItem[]
  title?: string
}) {
  if (!items.length) return null

  const openItems = items.filter((i) => !i.clinical)
  const clinicalItems = items.filter((i) => i.clinical)

  return (
    <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] space-y-5">
      <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] pb-3 border-b border-[#f0f4f8]">
        {title}
      </h2>

      {openItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {openItems.map((item) => (
            <figure key={item.src} className="rounded-xl bg-[#f8fafb] p-3">
              <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-contain"
                  sizes="(max-width:640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-2 text-[13px] text-[#64748b] text-center break-keep">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {clinicalItems.length > 0 && (
        <details className="group faq-item rounded-2xl bg-[#f8fafb] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden">
          <summary className="list-none cursor-pointer flex items-start justify-between gap-3 p-5 text-[#0d1117] font-bold break-keep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <span>임상 이미지 보기</span>
            <span
              aria-hidden
              className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center text-[16px] leading-none font-bold shadow-sm transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="px-5 pb-5 space-y-3">
            <p className="text-[13px] text-[#64748b] leading-[1.7] break-keep">
              아래에는 실제 질환 및 치료 관련 임상 이미지가 포함되어 있습니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clinicalItems.map((item) => (
                <figure key={item.src} className="rounded-xl bg-white p-3">
                  <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-contain"
                      sizes="(max-width:640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="mt-2 text-[13px] text-[#64748b] text-center break-keep">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </details>
      )}
    </section>
  )
}

export function OfficialSource({
  sources,
  note,
}: {
  sources: string[]
  note: string
}) {
  return (
    <details className="group faq-item rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] overflow-hidden">
      <summary className="list-none cursor-pointer flex items-start justify-between gap-3 p-5 text-[#0d1117] font-bold break-keep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
        <span>공식출처</span>
        <span
          aria-hidden
          className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#f8fafb] text-primary flex items-center justify-center text-[16px] leading-none font-bold shadow-sm transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-5 text-[14px] text-[#374151] leading-[1.75] break-keep space-y-2">
        <p>{note}</p>
        <ul className="list-disc pl-5 space-y-1">
          {sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </details>
  )
}

export function PageToc({
  items,
}: {
  items: { id: string; label: string }[]
}) {
  if (!items.length) return null
  return (
    <nav
      aria-label="목차"
      className="w-full border border-[#e5eaef] rounded-xl bg-white p-5 md:p-6"
    >
      <p className="meta-text font-bold text-[#64748b] uppercase tracking-wider mb-3">목차</p>
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="body-text text-primary font-semibold hover:underline break-keep"
            >
              {i + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
