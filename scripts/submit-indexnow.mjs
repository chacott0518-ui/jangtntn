#!/usr/bin/env node
/**
 * IndexNow 제출 스크립트 (외부 패키지 없음)
 *
 * 사용:
 *   node scripts/submit-indexnow.mjs --url https://jtntn.co.kr/
 *   node scripts/submit-indexnow.mjs --url https://jtntn.co.kr/magazine
 *   node scripts/submit-indexnow.mjs --sitemap
 *   node scripts/submit-indexnow.mjs --urls https://jtntn.co.kr/,https://jtntn.co.kr/faq
 *
 * 배포 후 초기 1회: npm run indexnow:sitemap
 * 이후 변경 URL만: npm run indexnow -- --url <URL>
 *
 * 제출 성공이 색인을 보장하지는 않습니다.
 */

import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const HOST = 'jtntn.co.kr'
const SITE_URL = `https://${HOST}`
const KEY = '7c4e9a2b8f1d4e6a9b0c3d5e7f8a1b2c'
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`
const ENDPOINT = 'https://api.indexnow.org/indexnow'
const BATCH = 100

const STATIC_PATHS = [
  '/',
  '/about/doctor',
  '/about/info',
  '/about/location',
  '/about/surgery',
  '/about/aftercare',
  '/about/tour',
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
  '/magazine',
  '/magazine/alternating-constipation-and-diarrhea',
  '/magazine/pph-vs-hemorrhoid-surgery',
  '/faq',
  '/notice',
  '/notice/2026-summer-vacation',
  '/consultation',
]

function parseArgs(argv) {
  const out = { urls: [], sitemap: false }
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--sitemap') out.sitemap = true
    else if (a === '--url' && argv[i + 1]) out.urls.push(argv[++i])
    else if (a === '--urls' && argv[i + 1]) {
      out.urls.push(...argv[++i].split(',').map((s) => s.trim()).filter(Boolean))
    }
  }
  return out
}

function normalizeUrl(input) {
  try {
    const u = new URL(input)
    if (u.protocol !== 'https:') return null
    if (u.hostname !== HOST) return null
    u.hash = ''
    let path = u.pathname
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1)
    return `${SITE_URL}${path === '/' ? '' : path}` || SITE_URL
  } catch {
    return null
  }
}

function sitemapUrls() {
  return STATIC_PATHS.map((p) => (p === '/' ? SITE_URL : `${SITE_URL}${p}`))
}

async function submitBatch(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
  const text = await res.text().catch(() => '')
  return { status: res.status, text }
}

function explainStatus(status) {
  if (status === 200 || status === 202) return 'OK (accepted)'
  if (status === 400) return 'Bad request'
  if (status === 403) return 'Key not valid / forbidden'
  if (status === 422) return 'Unprocessable (URL/host/key mismatch)'
  if (status === 429) return 'Too many requests'
  return 'Unexpected'
}

async function main() {
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

  const args = parseArgs(process.argv)
  let urls = []
  if (args.sitemap) urls = sitemapUrls()
  urls.push(...args.urls)

  const normalized = [...new Set(urls.map(normalizeUrl).filter(Boolean))]
  if (!normalized.length) {
    console.error('No valid https://jtntn.co.kr URLs to submit.')
    console.error('Example: node scripts/submit-indexnow.mjs --url https://jtntn.co.kr/')
    process.exitCode = 1
    return
  }

  console.log(`Submitting ${normalized.length} URL(s) to IndexNow…`)
  console.log(`keyLocation: ${KEY_LOCATION}`)

  for (let i = 0; i < normalized.length; i += BATCH) {
    const chunk = normalized.slice(i, i + BATCH)
    try {
      const { status, text } = await submitBatch(chunk)
      console.log(`[${explainStatus(status)}] HTTP ${status} · batch ${i / BATCH + 1} · ${chunk.length} urls`)
      if (text) console.log(text.slice(0, 500))
      if (![200, 202].includes(status)) process.exitCode = 1
    } catch (err) {
      console.error('Request failed:', err?.message || err)
      process.exitCode = 1
    }
  }
}

main()
