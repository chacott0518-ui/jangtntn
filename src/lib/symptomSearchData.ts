import { NAV_ITEMS } from '@/lib/constants'

export type SearchItem = {
  title: string
  summary: string
  keywords: string[]
  category: string
  href: string
}

/** 추천 검색어 — 실제 페이지/FAQ에 존재하는 증상·질문 표현 */
export const SUGGESTED_QUERIES = [
  '혈변이 보여요',
  '항문이 아파요',
  '대장내시경이 궁금해요',
  '지방종이 생겼어요',
] as const

function fromNav(): SearchItem[] {
  const items: SearchItem[] = []
  for (const nav of NAV_ITEMS) {
    items.push({
      title: nav.label,
      summary: `${nav.label} 안내 페이지`,
      keywords: [nav.label],
      category: nav.label,
      href: nav.href,
    })
    for (const sub of nav.subItems) {
      items.push({
        title: sub.label,
        summary: `${nav.label} · ${sub.label}`,
        keywords: [sub.label, nav.label],
        category: nav.label,
        href: sub.href,
      })
    }
  }
  return items
}

/** 매거진 페이지(src/app/magazine/page.tsx)와 동일한 실제 게시 데이터 */
const MAGAZINE_ITEMS: SearchItem[] = [
  {
    title: '변비와 설사가 번갈아 잦아진다면?',
    summary: '변비와 설사가 반복되거나 배변 습관이 달라졌을 때 살펴봐야 할 원인과 진료가 필요한 신호를 알아봅니다.',
    keywords: ['변비', '설사', '배변', '과민성장증후군', '건강매거진'],
    category: '건강매거진',
    href: '/magazine/alternating-constipation-and-diarrhea',
  },
  {
    title: '치질(치핵), 수술이 꼭 필요할까? 단계별 치료법 완전 정리',
    summary: '치핵은 정도에 따라 약물 치료부터 수술까지 다양한 방법이 있습니다.',
    keywords: ['치질', '치핵', '혈변', '항문', '수술'],
    category: '건강매거진',
    href: '/magazine/hemorrhoid',
  },
  {
    title: '대장내시경 전 장 정결, 이렇게 하면 덜 힘들어요',
    summary: '대장내시경 준비와 장 정결제 복용 팁을 안내합니다.',
    keywords: ['대장내시경', '내시경', '장정결'],
    category: '건강매거진',
    href: '/magazine/colon',
  },
  {
    title: '변비가 지속되면 왜 위험한가요? 만성 변비의 합병증',
    summary: '만성 변비의 위험성과 예방법을 알아봅니다.',
    keywords: ['변비', '설사', '항문'],
    category: '건강매거진',
    href: '/magazine/constipation',
  },
  {
    title: '등에 혹이 생겼어요 — 지방종 vs 피지낭종, 차이점과 치료법',
    summary: '지방종과 피지낭종 구별 및 치료 방법을 설명합니다.',
    keywords: ['지방종', '피지낭종', '혹', '피부'],
    category: '건강매거진',
    href: '/magazine/lipoma',
  },
  {
    title: 'PPH 수술 vs 기존 치핵 수술, 무엇이 다른가요?',
    summary: 'PPH와 기존 치핵 수술의 차이점을 비교하는 건강 정보입니다. 장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다.',
    keywords: ['PPH', '치핵', '수술', '건강매거진'],
    category: '건강매거진',
    href: '/magazine/pph-vs-hemorrhoid-surgery',
  },
]

/** FAQ 페이지(src/app/faq/page.tsx) 실제 질문 — 결과는 /faq로 이동 */
const FAQ_ITEMS: SearchItem[] = [
  {
    title: '치질(치핵)인지 어떻게 알 수 있나요? 꼭 병원에 가야 하나요?',
    summary: 'FAQ · 항문 질환',
    keywords: ['치질', '치핵', '혈변', '항문', '아파요'],
    category: 'FAQ',
    href: '/faq',
  },
  {
    title: '대장내시경 전 장 정결제가 힘든데, 먹기 쉬운 방법이 있나요?',
    summary: 'FAQ · 내시경',
    keywords: ['대장내시경', '내시경', '장정결'],
    category: 'FAQ',
    href: '/faq',
  },
  {
    title: '지방종이나 피지낭종은 수술해야 하나요? 저절로 없어지지 않나요?',
    summary: 'FAQ · 피부·외과',
    keywords: ['지방종', '피지낭종', '혹'],
    category: 'FAQ',
    href: '/faq',
  },
  {
    title: '예약 없이 바로 방문해도 진료가 가능한가요?',
    summary: 'FAQ · 진료·예약',
    keywords: ['예약', '방문', '진료'],
    category: 'FAQ',
    href: '/faq',
  },
]

/** 증상 표현 → 실제 질환/클리닉 페이지 (NAV·매거진에 있는 주제만) */
const SYMPTOM_ALIASES: SearchItem[] = [
  {
    title: '치핵(치질)',
    summary: '출혈·돌출·항문 불편감이 있을 때 확인하는 대장항문 진료',
    keywords: ['혈변', '피가', '출혈', '항문', '아파요', '치질', '치핵', '돌출'],
    category: '대장항문클리닉',
    href: '/anorectal/hemorrhoid',
  },
  {
    title: '치열',
    summary: '배변 시 찢어지는 통증·선홍색 출혈이 있을 때',
    keywords: ['항문', '아파요', '찢어', '통증', '치열'],
    category: '대장항문클리닉',
    href: '/anorectal/fissure',
  },
  {
    title: '대장내시경',
    summary: '혈변·검진·용종이 궁금할 때 내시경센터 안내',
    keywords: ['대장내시경', '내시경', '혈변', '용종', '궁금'],
    category: '내시경센터',
    href: '/endoscopy/colon',
  },
  {
    title: '지방종',
    summary: '만져지는 혹·피하지방이 신경 쓰일 때',
    keywords: ['지방종', '혹', '생겼', '피부'],
    category: '피부종양센터',
    href: '/skin/lipoma',
  },
]

function dedupe(items: SearchItem[]): SearchItem[] {
  const seen = new Set<string>()
  const out: SearchItem[] = []
  for (const item of items) {
    const key = `${item.href}::${item.title}`
    if (seen.has(key)) continue
    seen.add(key)
    out.push(item)
  }
  return out
}

export const SEARCH_INDEX: SearchItem[] = dedupe([
  ...fromNav(),
  ...MAGAZINE_ITEMS,
  ...FAQ_ITEMS,
  ...SYMPTOM_ALIASES,
])
