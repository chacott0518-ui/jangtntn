'use client'

import { useMemo, useState, type FormEvent, type KeyboardEvent } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { SEARCH_INDEX, SUGGESTED_QUERIES, type SearchItem } from '@/lib/symptomSearchData'

function normalize(s: string) {
  return s.toLowerCase().replace(/\s+/g, '')
}

function scoreItem(item: SearchItem, q: string) {
  const nq = normalize(q)
  if (!nq) return 0
  const hay = normalize([item.title, item.summary, ...item.keywords].join(' '))
  if (hay.includes(nq)) return 3
  const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean)
  let hit = 0
  for (const t of tokens) {
    if (hay.includes(normalize(t))) hit += 1
  }
  return hit
}

export default function SymptomSearch() {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState('')

  const results = useMemo(() => {
    const q = submitted.trim()
    if (!q) return [] as SearchItem[]
    return SEARCH_INDEX
      .map((item) => ({ item, score: scoreItem(item, q) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'ko'))
      .map((r) => r.item)
  }, [submitted])

  const runSearch = (value: string) => {
    setQuery(value)
    setSubmitted(value.trim())
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    runSearch(query)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      runSearch(query)
    }
  }

  return (
    <section className="bg-[#f8fafb] section-space home-section-tight" aria-labelledby="symptom-search-heading">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#e8f1f8] shadow-[0_8px_28px_rgba(13,127,196,0.08)] p-6 md:p-10">
          <h2 id="symptom-search-heading" className="text-[22px] md:text-[28px] font-black text-[#0d1117] break-keep">
            어디가 어떻게 불편하신가요?
          </h2>
          <p className="mt-2 text-[14px] md:text-[15px] text-[#64748b] leading-relaxed break-keep">
            증상이나 질환명을 검색하면 관련 진료정보를 확인하실 수 있습니다.
          </p>

          <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
            <label htmlFor="symptom-search-input" className="sr-only">
              증상·질환 검색
            </label>
            <div className="relative flex-1 min-w-0">
              <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
              <input
                id="symptom-search-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="예: 혈변이 보여요, 항문이 아파요, 대장내시경이 궁금해요"
                className="w-full min-w-0 h-12 md:h-14 pl-12 pr-4 rounded-2xl border border-[#dbe7f0] bg-[#f8fafb] text-[14px] md:text-[15px] text-[#0d1117] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 h-12 md:h-14 px-8 rounded-2xl text-[15px] font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}
            >
              검색
            </button>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            {SUGGESTED_QUERIES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => runSearch(s)}
                className="px-3 py-1.5 rounded-full text-[12px] md:text-[13px] font-semibold text-primary bg-primary/10 hover:bg-primary/15 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          {submitted ? (
            <div className="mt-6 border-t border-[#eef2f6] pt-5">
              {results.length === 0 ? (
                <p className="text-[14px] text-[#64748b]">검색 결과가 없습니다.</p>
              ) : (
                <ul className="space-y-3">
                  {results.map((item) => (
                    <li key={`${item.href}-${item.title}`}>
                      <Link
                        href={item.href}
                        className="block rounded-2xl border border-[#eef2f6] bg-[#f8fafb] px-4 py-3 hover:border-primary/30 hover:bg-[#f0f7ff] transition-colors"
                      >
                        <span className="text-[11px] font-bold text-primary">{item.category}</span>
                        <p className="mt-1 text-[15px] font-bold text-[#0d1117] break-keep">{item.title}</p>
                        <p className="mt-1 text-[13px] text-[#64748b] line-clamp-2 break-keep">{item.summary}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
