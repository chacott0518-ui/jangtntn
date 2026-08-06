#!/usr/bin/env node
/**
 * IndexNow 제출 스크립트 (외부 패키지 없음, 빌드 시 자동 전송 안 함)
 *
 * 사용 (배포 후):
 *   node scripts/submit-indexnow.mjs https://jtntn.co.kr
 *
 * localhost / http 는 실제 전송하지 않습니다.
 */

import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

/** site-config.ts SITE_URL / INDEXNOW_KEY 와 동일해야 함 */
const DEFAULT_ORIGIN = 'https://jtntn.co.kr'
const KEY = '7c4e9a2b8f1d4e6a9b0c3d5e7f8a1b2c'
const ENDPOINT = 'https://api.indexnow.org/indexnow'

/**
 * 이번에 신규·수정된 URL (홈·매거진·센터/하위)
 * 전체 사이트맵이 필요하면 --sitemap 플래그 사용
 */
const CHANGED_PATHS = [
  '/',
  '/magazine',
  '/magazine/alternating-constipation-and-diarrhea',
  '/magazine/pph-vs-hemorrhoid-surgery',
  '/magazine/hemorrhoid',
  '/magazine/colon',
  '/magazine/constipation',
  '/magazine/lipoma',
  '/anorectal',
  '/anorectal/hemorrhoid',
  '/anorectal/fissure',
  '/anorectal/fistula',
  '/anorectal/pruritus',
  '/anorectal/condyloma',
  '/anorectal/levator',
  '/anorectal/pilonidal',
  '/anorectal/constipation',
  '/endoscopy',
  '/endoscopy/gastro',
  '/endoscopy/colon',
  '/endoscopy/polyp',
  '/skin',
  '/skin/lipoma',
  '/skin/cyst',
  '/skin/fibroma',
  '/surgery',
  '/surgery/burn',
  '/surgery/nail',
  '/surgery/wound',
  '/surgery/nutrition',
]

const FULL_SITEMAP_PATHS = [
  ...CHANGED_PATHS,
  '/about/doctor',
  '/about/info',
  '/about/location',
  '/about/surgery',
  '/about/aftercare',
  '/about/tour',
  '/faq',
  '/notice',
  '/notice/2026-summer-vacation',
  '/consultation',
]

function parseArgs(argv) {
  const out = { origin: null, sitemap: false }
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--sitemap') out.sitemap = true
    else if (!a.startsWith('-') && !out.origin) out.origin = a
  }
  return out
}

function normalizeOrigin(input) {
  try {
    const u = new URL(input)
    if (u.protocol !== 'https:') return null
    const host = u.hostname.toLowerCase()
    if (host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local')) return null
    return `https://${host}`
  } catch {
    return null
  }
}

function toAbs(origin, path) {
  return path === '/' ? `${origin}/` : `${origin}${path}`
}

function explainStatus(status) {
  if (status === 200) return 'submitted'
  if (status === 202) return 'accepted, key validation pending'
  if (status === 400) return 'Bad request'
  if (status === 403) return 'Key not valid / forbidden'
  if (status === 422) return 'Unprocessable (URL/host/key mismatch)'
  if (status === 429) return 'Too many requests'
  return 'Unexpected'
}

async function main() {
  const args = parseArgs(process.argv)
  if (!args.origin) {
    console.error('Usage: node scripts/submit-indexnow.mjs https://jtntn.co.kr')
    console.error('Optional: --sitemap  (전체 정적 경로)')
    process.exitCode = 1
    return
  }

  const origin = normalizeOrigin(args.origin)
  if (!origin) {
    console.error('Invalid or non-https / localhost origin. Refusing to submit.')
    console.error('Got:', args.origin)
    process.exitCode = 1
    return
  }

  if (origin !== DEFAULT_ORIGIN) {
    console.warn(`Warning: origin (${origin}) differs from site-config default (${DEFAULT_ORIGIN}).`)
    console.warn('Confirm metadataBase / sitemap / robots use the same production host before submitting.')
  }

  const host = new URL(origin).hostname
  const keyLocation = `${origin}/${KEY}.txt`
  const keyFile = resolve(ROOT, 'public', `${KEY}.txt`)

  if (!existsSync(keyFile)) {
    console.error(`Missing key file: public/${KEY}.txt`)
    process.exitCode = 1
    return
  }
  const keyContent = readFileSync(keyFile, 'utf8').trim()
  if (keyContent !== KEY) {
    console.error('Key file content does not match INDEXNOW key')
    process.exitCode = 1
    return
  }

  const paths = args.sitemap ? [...new Set(FULL_SITEMAP_PATHS)] : CHANGED_PATHS
  const urlList = paths.map((p) => toAbs(origin, p))

  const body = {
    host,
    key: KEY,
    keyLocation,
    urlList,
  }

  console.log('endpoint:', ENDPOINT)
  console.log('host:', host)
  console.log('keyLocation:', keyLocation)
  console.log('urlCount:', urlList.length)

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    })
    const text = await res.text().catch(() => '')
    console.log('HTTP status:', res.status, `(${explainStatus(res.status)})`)
    console.log('response body:', text || '(empty)')
    if (![200, 202].includes(res.status)) process.exitCode = 1
  } catch (err) {
    console.error('Request failed:', err?.message || err)
    process.exitCode = 1
  }
}

main()
