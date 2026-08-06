import {
  ADDRESS,
  DOCTOR,
  FAX,
  HOURS,
  PHONE,
  SITE_NAME,
  SITE_NAME_SHORT,
  SITE_URL,
  absoluteUrl,
} from '@/lib/site-config'

export function GET() {
  const body = `# ${SITE_NAME}

> 김포 구래동에 위치한 대장항문·내시경·피부종양 진료 의원입니다.
> 공식 사이트: ${SITE_URL}

## 공식 정보

- 병원명: ${SITE_NAME} (${SITE_NAME_SHORT})
- 대표 도메인: ${SITE_URL}
- 주소: ${ADDRESS}
- 전화: ${PHONE}
- 팩스: ${FAX}
- 진료시간: ${HOURS.weekday.label}, ${HOURS.saturday.label}
- 휴진: ${HOURS.sunday.label}
- 점심: ${HOURS.lunch.label}
- 의료진: ${DOCTOR.name} ${DOCTOR.jobTitle} (${DOCTOR.specialtyLabel})

## 주요 공개 페이지

- 홈: ${SITE_URL}/
- 의료진 소개: ${absoluteUrl('/about/doctor')}
- 진료안내: ${absoluteUrl('/about/info')}
- 오시는 길: ${absoluteUrl('/about/location')}
- 대장항문클리닉: ${absoluteUrl('/anorectal')}
- 내시경센터: ${absoluteUrl('/endoscopy')}
- 피부종양센터: ${absoluteUrl('/skin')}
- 기타외과질환: ${absoluteUrl('/surgery')}
- 건강매거진: ${absoluteUrl('/magazine')}
- FAQ: ${absoluteUrl('/faq')}
- 공지사항: ${absoluteUrl('/notice')}
- 온라인상담: ${absoluteUrl('/consultation')}

## 건강매거진

- ${absoluteUrl('/magazine/alternating-constipation-and-diarrhea')}
- ${absoluteUrl('/magazine/pph-vs-hemorrhoid-surgery')}

## 수집·색인 관련

- robots: ${absoluteUrl('/robots.txt')}
- sitemap: ${absoluteUrl('/sitemap.xml')}
- RSS: ${absoluteUrl('/rss.xml')}

## 의료 정보 안내

이 파일과 사이트의 건강 정보는 일반적인 안내이며, 개인의 진단이나 치료를 대신하지 않습니다.
진료·검사·치료 방침은 의료진 상담과 해당 페이지의 최신 내용을 확인하시기 바랍니다.

공식 연락처·위치·진료시간은 오시는 길·진료안내 페이지를 기준으로 확인하세요.
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
