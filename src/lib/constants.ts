export {
  SITE_NAME,
  PHONE,
  ADDRESS,
  HOURS,
  FAX,
  SITE_URL,
} from '@/lib/site-config'

export interface NavSubItem {
  href: string
  label: string
}

export interface NavItem {
  href: string
  label: string
  subItems: NavSubItem[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    href: '/about',
    label: '병원소개',
    subItems: [
      { href: '/about/doctor', label: '의료진소개' },
      { href: '/about/info', label: '진료안내' },
      { href: '/about/tour', label: '병원둘러보기' },
      { href: '/about/aftercare', label: '수술후주의사항' },
    ],
  },
  {
    href: '/anorectal',
    label: '대장항문클리닉',
    subItems: [
      { href: '/anorectal/hemorrhoid', label: '치질' },
      { href: '/anorectal/fissure', label: '치열' },
      { href: '/anorectal/fistula', label: '치루및항문주위농양' },
      { href: '/anorectal/pruritus', label: '항문소양증' },
      { href: '/anorectal/condyloma', label: '항문콘딜로마' },
      { href: '/anorectal/levator', label: '항문거근증후군' },
      { href: '/anorectal/pilonidal', label: '모소동' },
      { href: '/anorectal/constipation', label: '변비설사' },
    ],
  },
  {
    href: '/endoscopy',
    label: '내시경센터',
    subItems: [
      { href: '/endoscopy/gastro', label: '위내시경' },
      { href: '/endoscopy/colon', label: '대장내시경' },
      { href: '/endoscopy/polyp', label: '대장용종제거술' },
    ],
  },
  {
    href: '/skin',
    label: '피부종양센터',
    subItems: [
      { href: '/skin/lipoma', label: '지방종' },
      { href: '/skin/cyst', label: '표피낭종' },
      { href: '/skin/fibroma', label: '연성섬유종' },
    ],
  },
  {
    href: '/surgery',
    label: '기타외과질환',
    subItems: [
      { href: '/surgery/burn', label: '화상' },
      { href: '/surgery/nail', label: '내향성발톱교정술' },
      { href: '/surgery/wound', label: '상처봉합술' },
      { href: '/surgery/nutrition', label: '영양수액예방접종' },
    ],
  },
  {
    href: '/magazine',
    label: '건강매거진',
    subItems: [],
  },
  {
    href: '/faq',
    label: 'FAQ',
    subItems: [],
  },
  {
    href: '/notice',
    label: '공지사항',
    subItems: [],
  },
]
