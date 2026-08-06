import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) walk(p, a)
    else a.push(p)
  }
  return a
}

const re = /["'](\/images\/[^"']+)["']/g
const usage = {}
for (const f of walk('src').filter((p) => /\.(tsx|ts)$/.test(p))) {
  const t = fs.readFileSync(f, 'utf8')
  let m
  while ((m = re.exec(t))) {
    const src = m[1]
    ;(usage[src] ||= []).push(f.replace(/\\/g, '/'))
  }
}
const allow = new Set(['/images/logo.png', '/images/doctor.jpg', '/images/og-image.webp', '/images/og-image.png'])
const multi = Object.entries(usage)
  .filter(([src, files]) => files.length > 1 && !allow.has(src))
  .sort((a, b) => b[1].length - a[1].length)
console.log('MULTI_SRC', multi.length)
for (const [src, files] of multi) {
  console.log(files.length, src)
  console.log(' ', [...new Set(files)].join('\n  '))
}

function hash(p) {
  return crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex').slice(0, 12)
}
const imgFiles = walk('public/images').filter(
  (p) => /\.(webp|jpg|png)$/i.test(p) && !p.includes('replacements')
)
const byHash = {}
for (const p of imgFiles) {
  const h = hash(p)
  ;(byHash[h] ||= []).push(p.replace(/\\/g, '/'))
}
const dups = Object.entries(byHash).filter(([, a]) => a.length > 1)
console.log('HASH_DUP_GROUPS', dups.length)
for (const [h, a] of dups) console.log(h, a.join(' | '))
