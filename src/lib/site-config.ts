/**
 * 사이트 엔티티·연락처·URL 단일 원본.
 * 화면·metadata·JSON-LD·llms.txt·RSS·sitemap은 이 값을 기준으로 맞춘다.
 */
export const SITE_URL = 'https://jtntn.co.kr' as const

export const SITE_NAME = '장튼튼항외과의원' as const
export const SITE_NAME_SHORT = '장튼튼항외과' as const
export const SITE_NAME_EN = 'Jangtntn Anorectal Surgery Clinic' as const

export const PHONE = '031-987-7282' as const
export const PHONE_TEL = '0319877282' as const
export const FAX = '031-981-7282' as const

/** 화면에 표시하는 주소 한 줄 */
export const ADDRESS = '경기 김포시 김포한강4로 507 계림M스퀘어 3층 308호' as const

export const ADDRESS_STRUCTURED = {
  streetAddress: '김포한강4로 507 계림M스퀘어 3층 308호',
  addressLocality: '김포시',
  addressRegion: '경기도',
  postalCode: '10086',
  addressCountry: 'KR' as const,
}

/** 기존 코드에 검증되어 있던 좌표 */
export const GEO = {
  latitude: 37.6461191,
  longitude: 126.6275367,
} as const

export const BUSINESS_REG_NO = '260-92-01324' as const

export const HOURS = {
  weekday: { open: '09:00', close: '18:00', label: '평일 09:00~18:00' },
  saturday: { open: '09:00', close: '15:00', label: '토요일 09:00~15:00' },
  lunch: { start: '13:00', end: '14:00', label: '점심 13:00~14:00 (토요일 점심없음)' },
  sunday: { label: '일요일·공휴일 휴진' },
} as const

export const DOCTOR = {
  name: '한호선',
  jobTitle: '대표원장',
  specialtyLabel: '외과전문의',
  description:
    '외과전문의. 중앙대학교 의과대학 졸업. 위·대장 내시경학회 인증의. 오랜 임상경험을 바탕으로 진료합니다.',
  alumniOf: ['중앙대학교 의과대학', '중앙대학교 의과대학원'] as const,
} as const

export const LOGO_PATH = '/images/logo.png' as const
export const OG_IMAGE_PATH = '/images/og-image.webp' as const
export const DEFAULT_DESCRIPTION =
  '김포 구래역 1번 출구 장튼튼항외과의원. 치핵·치열·치루 등 대장항문질환과 대장·위내시경, 피부종양 및 기타 외과질환을 진료합니다.' as const

/** 화면에 링크가 있는 공식 채널만 */
export const SAME_AS = ['https://blog.naver.com/jangtntn0127'] as const

/** 기존 지도 링크(화면·푸터 계열에서 사용하던 Place) */
export const NAVER_MAP_URL = 'https://map.naver.com/p/entry/place/1152854964' as const

export const ENTITY_IDS = {
  website: `${SITE_URL}/#website`,
  medicalClinic: `${SITE_URL}/#medicalclinic`,
} as const

export const INDEXNOW_KEY = '7c4e9a2b8f1d4e6a9b0c3d5e7f8a1b2c' as const

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return SITE_URL
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

export function webpageId(path: string): string {
  return `${absoluteUrl(path)}#webpage`
}

export function serviceId(path: string): string {
  return `${absoluteUrl(path)}#service`
}

export function articleId(path: string): string {
  return `${absoluteUrl(path)}#article`
}

export function physicianId(path = '/about/doctor'): string {
  return `${absoluteUrl(path)}#physician`
}
