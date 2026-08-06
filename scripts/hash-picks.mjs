import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) walk(p, a)
    else if (/\.(webp|jpg|png)$/i.test(e.name) && !p.includes('replacements')) a.push(p)
  }
  return a
}
const by = {}
for (const p of walk('public/images')) {
  const h = crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex').slice(0, 12)
  ;(by[h] ||= []).push(p.replace(/\\/g, '/'))
}
console.log('total unique hashes', Object.keys(by).length)
for (const [h, a] of Object.entries(by).filter(([, x]) => x.length > 1)) {
  console.log('DUP', h, a.join(' | '))
}
const picks = [
  'public/images/tour/01-reception.webp',
  'public/images/tour/02-waiting-area.webp',
  'public/images/tour/03-consultation-room.webp',
  'public/images/tour/04-operating-room.webp',
  'public/images/tour/05-recovery-room.webp',
  'public/images/tour/06-endoscopy-room.webp',
  'public/images/pages/skin.webp',
  'public/images/pages/wellness.webp',
  'public/images/pages/consultation.webp',
  'public/images/pages/medical-tools.webp',
]
for (const p of picks) {
  const h = crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex').slice(0, 12)
  console.log(h, p)
}
