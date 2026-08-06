export type Notice = {
  slug?: string
  title: string
  date: string
  important: boolean
  body?: string
}

export const notices: Notice[] = [
  {
    slug: '2026-summer-vacation',
    title: '2026년 여름 정기휴가 안내',
    date: '2026.08.06',
    important: true,
    body: `안녕하세요. 장튼튼항외과의원입니다.

2026년 8월 14일(금)부터 8월 17일(월)까지 여름 정기휴가로 휴진합니다.

2026년 8월 18일(화)부터 정상 진료하오니 내원 및 예약에 착오 없으시길 바랍니다.

감사합니다.`,
  },
  { title: '2025년 설 연휴 휴진 안내', date: '2025.01.20', important: true },
  { title: '주차 안내 변경 공지', date: '2024.12.10', important: false },
  { title: '진료 시간 변경 안내', date: '2024.11.01', important: true },
  { title: '추석 연휴 휴진 안내', date: '2024.09.10', important: false },
]

export function getNoticeBySlug(slug: string) {
  return notices.find((n) => n.slug === slug)
}
