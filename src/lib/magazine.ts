import { absoluteUrl } from '@/lib/site-config'

export type MagazineArticle = {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified: string
  path: string
  image: string
  indexable: boolean
}

/** 실제 /magazine/* 상세 라우트만 (클리닉 페이지로 링크된 카드는 제외) */
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
    image: '/images/pages/surgery.webp',
    indexable: true,
  },
]

export function indexableMagazineArticles() {
  return MAGAZINE_ARTICLES.filter((a) => a.indexable)
}

export function magazineAbsoluteUrl(article: MagazineArticle) {
  return absoluteUrl(article.path)
}
