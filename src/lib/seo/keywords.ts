/**
 * 중앙 키워드 풀 + 페이지별 매핑.
 * metadata keywords는 보조이며, 본문·title·H1이 검색 의도의 주 전달 수단이다.
 */

export const BRAND_KEYWORDS = [
  '장튼튼항외과의원',
  '장튼튼항외과',
  '장튼튼 항외과',
  '김포 항외과',
  '김포 항문외과',
  '김포 대장항문외과',
  '구래동 항외과',
  '구래동 항문외과',
  '구래역 항외과',
  '구래역 항문외과',
  '김포 구래동 항외과',
  '김포 구래동 항문외과',
  '김포 대장항문외과의원',
] as const

export const REGION_CORE = [
  '김포',
  '김포시',
  '구래동',
  '구래역',
  '김포한강신도시',
  '김포골드라인',
] as const

/** 오시는 길·접근성 문맥에서만 제한적으로 사용 */
export const REGION_EXTENDED = [
  '마산동',
  '장기동',
  '운양동',
  '사우동',
  '풍무동',
  '고촌읍',
  '양촌읍',
  '통진읍',
] as const

/** 사이트에서 실제 제공하는 진료·질환 키워드 */
export const SERVICE_KEYWORDS = {
  anorectal: ['치질', '치핵', '치열', '치루', '항문질환', '대장항문', '항문 통증', '항문 출혈', '변비', '설사'],
  endoscopy: ['대장내시경', '위내시경', '대장용종', '내시경'],
  skin: ['지방종', '표피낭종', '연성섬유종', '피부종양'],
  surgery: ['화상', '내향성발톱', '상처봉합', '영양수액', '예방접종'],
} as const

const HOME_KEYWORDS = [
  ...BRAND_KEYWORDS,
  '김포',
  '구래동',
  '구래역',
  '김포한강신도시',
  '치핵',
  '치열',
  '치루',
  '대장내시경',
  '위내시경',
  '지방종',
  '항문외과',
  '대장항문외과',
]

const PAGE_KEYWORDS: Record<string, string[]> = {
  '/': HOME_KEYWORDS,
  '/about/doctor': [
    '한호선',
    '장튼튼항외과의원 원장',
    '한호선 원장',
    '김포 외과전문의',
    '외과전문의',
    '대장항문',
    '내시경 인증의',
  ],
  '/about/info': ['진료안내', '진료시간', '장튼튼항외과의원', '김포 항문외과', '구래역'],
  '/about/location': [
    '오시는 길',
    '장튼튼항외과의원',
    '김포',
    '김포시',
    '구래동',
    '구래역',
    '김포한강신도시',
    '김포골드라인',
    '마산동',
    '장기동',
    '운양동',
  ],
  '/about/tour': ['병원둘러보기', '장튼튼항외과의원', '김포 항문외과'],
  '/about/aftercare': ['수술후주의사항', '장튼튼항외과의원', '치핵', '수술 후 관리'],
  '/about/surgery': ['수술실', '장튼튼항외과의원', '김포'],
  '/anorectal': ['대장항문클리닉', '치핵', '치열', '치루', '김포 항문외과', '구래역 항문외과'],
  '/anorectal/hemorrhoid': ['치핵', '치질', '김포 치질', '구래동 치핵', '항문 출혈', '장튼튼항외과의원'],
  '/anorectal/fissure': ['치열', '항문열상', '김포 치열', '장튼튼항외과의원'],
  '/anorectal/fistula': ['치루', '항문주위농양', '김포 치루', '장튼튼항외과의원'],
  '/anorectal/pruritus': ['항문소양증', '항문 가려움', '장튼튼항외과의원'],
  '/anorectal/condyloma': ['항문콘딜로마', '콘딜로마', '장튼튼항외과의원'],
  '/anorectal/levator': ['항문거근증후군', '항문 통증', '장튼튼항외과의원'],
  '/anorectal/pilonidal': ['모소동', '장튼튼항외과의원'],
  '/anorectal/constipation': ['변비', '설사', '김포 변비', '장튼튼항외과의원'],
  '/endoscopy': ['내시경센터', '대장내시경', '위내시경', '김포 내시경', '구래역'],
  '/endoscopy/gastro': ['위내시경', '김포 위내시경', '장튼튼항외과의원'],
  '/endoscopy/colon': ['대장내시경', '김포 대장내시경', '구래동 대장내시경', '장튼튼항외과의원'],
  '/endoscopy/polyp': ['대장용종제거술', '대장용종', '장튼튼항외과의원'],
  '/skin': ['피부종양센터', '지방종', '표피낭종', '김포 지방종'],
  '/skin/lipoma': ['지방종', '김포 지방종', '장튼튼항외과의원'],
  '/skin/cyst': ['표피낭종', '피지낭종', '장튼튼항외과의원'],
  '/skin/fibroma': ['연성섬유종', '장튼튼항외과의원'],
  '/surgery': ['기타외과질환', '화상', '내향성발톱', '장튼튼항외과의원'],
  '/surgery/burn': ['화상', '장튼튼항외과의원'],
  '/surgery/nail': ['내향성발톱교정술', '내향성발톱', '장튼튼항외과의원'],
  '/surgery/wound': ['상처봉합술', '장튼튼항외과의원'],
  '/surgery/nutrition': ['영양수액', '예방접종', '장튼튼항외과의원'],
  '/magazine': ['건강매거진', '장튼튼항외과의원', '대장항문', '건강정보'],
  '/magazine/alternating-constipation-and-diarrhea': [
    '변비',
    '설사',
    '배변 습관',
    '과민성장증후군',
    '건강매거진',
    '장튼튼항외과의원',
  ],
  '/magazine/pph-vs-hemorrhoid-surgery': ['PPH', '치핵 수술', '건강매거진', '장튼튼항외과의원'],
  '/faq': ['FAQ', '장튼튼항외과의원', '치핵', '내시경', '자주 묻는 질문'],
  '/notice': ['공지사항', '장튼튼항외과의원'],
  '/consultation': ['온라인상담', '장튼튼항외과의원', '김포 항문외과'],
}

export function keywordsForPath(path: string): string[] {
  const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path
  return PAGE_KEYWORDS[normalized] ?? [...BRAND_KEYWORDS.slice(0, 6), '김포', '구래역']
}
