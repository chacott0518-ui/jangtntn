import { absoluteUrl } from '@/lib/site-config'

export type MagazineArticle = {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified: string
  path: string
  /** 목록 썸네일·OG 공통 (파일 해시 서로 다른 자산만) */
  image: string
  alt: string
  category: string
  readTime: string
  /** 목록 표시용 날짜 (예: 2026.08.06) */
  dateLabel: string
  indexable: boolean
}

/**
 * 건강매거진 목록·상세 메타의 단일 데이터 소스.
 * /magazine 목록은 이 배열만 사용한다 (page.tsx 하드코딩 금지).
 */
export const MAGAZINE_ARTICLES: MagazineArticle[] = [
  {
    slug: 'alternating-constipation-and-diarrhea',
    title: '변비와 설사가 번갈아 잦아진다면?',
    description:
      '변비와 설사가 번갈아 나타나거나 배변 횟수가 갑자기 달라졌다면 식습관, 약물, 과민성장증후군 등 여러 원인을 살펴봐야 합니다. 동반 증상과 진료가 필요한 신호를 알아봅니다.',
    datePublished: '2026-08-06',
    dateModified: '2026-08-06',
    path: '/magazine/alternating-constipation-and-diarrhea',
    image: '/images/pages/consultation.webp',
    alt: '배변 습관 변화에 대해 상담하는 진료 장면',
    category: '건강매거진',
    readTime: '약 8분',
    dateLabel: '2026.08.06',
    indexable: true,
  },
  {
    slug: 'pph-vs-hemorrhoid-surgery',
    title: 'PPH 수술 vs 기존 치핵 수술, 무엇이 다른가요?',
    description:
      'PPH와 기존 치핵 수술의 차이점을 비교하는 건강 정보입니다. 장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다.',
    datePublished: '2024-09-01',
    dateModified: '2024-09-01',
    path: '/magazine/pph-vs-hemorrhoid-surgery',
    image: '/images/tour/04-operating-room.webp',
    alt: '치핵 수술 방식을 비교하는 수술 환경 안내',
    category: '건강매거진',
    readTime: '4분',
    dateLabel: '2024.09',
    indexable: true,
  },
  {
    slug: 'hemorrhoid',
    title: '치질(치핵), 수술이 꼭 필요할까? 단계별 치료법 완전 정리',
    description:
      '치핵은 정도에 따라 약물 치료부터 수술까지 다양한 방법이 있습니다. 1~4도 분류와 각 단계에 맞는 치료법을 자세히 알아봅니다.',
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    path: '/magazine/hemorrhoid',
    image: '/images/colorectal-center-hero.webp',
    alt: '치핵 해부 모형으로 단계별 치료를 설명하는 장면',
    category: '건강매거진',
    readTime: '5분',
    dateLabel: '2025.01',
    indexable: true,
  },
  {
    slug: 'colon',
    title: '대장내시경 전 장 정결, 이렇게 하면 덜 힘들어요',
    description:
      '많은 분들이 두려워하는 대장내시경 준비. 장 정결제를 더 편하게 복용하는 팁과 준비사항을 단계별로 안내합니다.',
    datePublished: '2024-12-01',
    dateModified: '2024-12-01',
    path: '/magazine/colon',
    image: '/images/endoscopy-center.webp',
    alt: '대장내시경 장비와 모니터가 보이는 내시경실',
    category: '건강매거진',
    readTime: '4분',
    dateLabel: '2024.12',
    indexable: true,
  },
  {
    slug: 'constipation',
    title: '변비가 지속되면 왜 위험한가요? 만성 변비의 합병증',
    description:
      '단순히 불편한 증상으로 넘기기 쉬운 변비. 치핵, 치열, 대장 질환으로 이어질 수 있는 만성 변비의 위험성과 예방법을 알아봅니다.',
    datePublished: '2024-11-01',
    dateModified: '2024-11-01',
    path: '/magazine/constipation',
    image: '/images/tour/02-waiting-area.webp',
    alt: '만성 변비로 진료를 위해 방문하는 클리닉 대기 공간',
    category: '건강매거진',
    readTime: '4분',
    dateLabel: '2024.11',
    indexable: true,
  },
  {
    slug: 'lipoma',
    title: '등에 혹이 생겼어요 — 지방종 vs 피지낭종, 차이점과 치료법',
    description:
      '피부 아래 혹이 생겼을 때 지방종인지 피지낭종인지 구별하는 방법과 각각의 치료 방법, 그리고 방치했을 때의 위험성을 설명합니다.',
    datePublished: '2024-10-01',
    dateModified: '2024-10-01',
    path: '/magazine/lipoma',
    image: '/images/skin-tumor-center.webp',
    alt: '피부 병변을 살피는 피부종양 진료 장면',
    category: '건강매거진',
    readTime: '3분',
    dateLabel: '2024.10',
    indexable: true,
  },
]

export function indexableMagazineArticles() {
  return MAGAZINE_ARTICLES.filter((a) => a.indexable)
}

export function magazineAbsoluteUrl(article: MagazineArticle) {
  return absoluteUrl(article.path)
}

export function getMagazineArticle(slug: string) {
  return MAGAZINE_ARTICLES.find((a) => a.slug === slug)
}
