# SEO · 색인 등록 핸드오프

코드 작업 완료 후 **사람이 직접** 수행해야 하는 색인·소유확인 절차입니다.  
이 문서는 인증 토큰 값을 포함하지 않습니다.

## [공통]

| 항목 | 값 |
|------|-----|
| 대표 도메인 | `https://jtntn.co.kr` |
| www 정책 | `https://www.jtntn.co.kr` → `https://jtntn.co.kr` **308** (Vercel/Cloudflare에서 설정, 코드에서 DNS 변경 없음) |
| robots | `https://jtntn.co.kr/robots.txt` |
| sitemap | `https://jtntn.co.kr/sitemap.xml` |
| RSS | `https://jtntn.co.kr/rss.xml` |
| llms.txt | `https://jtntn.co.kr/llms.txt` |
| IndexNow key | `https://jtntn.co.kr/7c4e9a2b8f1d4e6a9b0c3d5e7f8a1b2c.txt` |

### 주요 indexable URL (우선)

- `/`
- `/about/doctor`
- `/about/info`
- `/about/location`
- `/anorectal`, `/anorectal/hemorrhoid`, `/anorectal/fissure`, `/anorectal/fistula`, …
- `/endoscopy`, `/endoscopy/colon`, `/endoscopy/gastro`
- `/skin`, `/surgery`
- `/magazine`, `/magazine/alternating-constipation-and-diarrhea`
- `/faq`, `/notice`, `/consultation`

### noindex URL

- 현재 코드 기준 **의도적 noindex 페이지 없음**
- `/about` 는 `/about/doctor` 로 redirect → **sitemap 제외**

### 배포 후 HTTP 확인 예시

```bash
curl -I https://jtntn.co.kr/
curl -I https://jtntn.co.kr/robots.txt
curl -I https://jtntn.co.kr/sitemap.xml
curl -I https://jtntn.co.kr/rss.xml
curl -I https://jtntn.co.kr/llms.txt
curl -I https://www.jtntn.co.kr/
```

www는 308로 apex에 붙는지 확인합니다.

---

## [Google Search Console]

1. 도메인 속성: `jtntn.co.kr` (DNS TXT / Cloudflare)
2. sitemap 제출: `https://jtntn.co.kr/sitemap.xml`
3. URL 검사 우선순위: 홈 → 의료진 → 치핵/대장내시경 → 오시는 길 → 최신 매거진
4. canonical이 `https://jtntn.co.kr/...` 인지, vercel/www/구도메인이 아닌지 확인

---

## [네이버 서치어드바이저]

1. 등록 사이트: `https://jtntn.co.kr`
2. 소유 확인: HTML 메타 또는 기타 제공 방식
3. Vercel 환경변수 `NAVER_SITE_VERIFICATION` 설정 후 재배포 (코드는 env가 있을 때만 meta 출력)
4. robots 수집 요청 → sitemap 제출 → RSS(`https://jtntn.co.kr/rss.xml`) 제출
5. 웹페이지 수집 요청: 홈, 의료진, 핵심 진료, 오시는 길, 최신 매거진

---

## [Bing Webmaster Tools]

1. 사이트 등록 또는 GSC 가져오기
2. 소유권 확인: `BING_SITE_VERIFICATION` → `msvalidate.01`
3. sitemap 제출
4. IndexNow key URL 확인
5. 초기 제출 (배포 후 1회):

```bash
npm run indexnow:sitemap
```

6. 이후 변경 URL만:

```bash
npm run indexnow -- --url https://jtntn.co.kr/magazine/alternating-constipation-and-diarrhea
```

제출 성공 ≠ 색인 보장.

---

## [Cloudflare]

- 이번 작업에서 DNS / 프록시 / AI Crawl Control **코드로 변경하지 않음**
- 현재 DNS only 유지 권장. 프록시를 임의로 켜지 말 것
- Crawler Hints는 **오렌지 클라우드(프록시) + Vercel 호환성** 확인 후 수동 검토
- Cloudflare가 robots.txt를 덮어쓰는지 배포 후 `robots.txt` 응답 본문으로 확인
- IndexNow를 Cloudflare Crawler Hints와 동시에 쓰면 중복 제출 가능 → 초기에는 한쪽만 켜도 됨

---

## [Vercel 환경변수]

배포 전 Production에 설정 (값이 있을 때만 meta 출력):

- `GOOGLE_SITE_VERIFICATION`
- `NAVER_SITE_VERIFICATION`
- `BING_SITE_VERIFICATION`

이전 HTML에 넣었던 소유확인 문자열이 있으면 그 값을 env로 옮기면 됩니다.  
값을 문서에 적지 말고 Search Console / 서치어드바이저 / 이전 배포 HTML에서 확인하세요.

---

## [권장 다음 순서]

1. Vercel에 대표 도메인 `jtntn.co.kr` + www→apex 308 확인  
2. 환경변수(verification) 설정  
3. 코드 배포 (별도 commit/push — 이 핸드오프와 분리)  
4. `robots` / `sitemap` / `rss` / `llms.txt` / IndexNow key HTTP 200 확인  
5. GSC · 네이버 · Bing 등록 및 sitemap/RSS 제출  
6. `npm run indexnow:sitemap` 1회  
7. URL 검사로 홈·핵심 진료·최신 매거진 확인  
8. 이후 콘텐츠 변경 시에만 해당 URL IndexNow 제출
