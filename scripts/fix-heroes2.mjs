import fs from 'fs'
import path from 'path'

const ROOT = 'src/app'

const MAP = {
  about: '/images/tour/02-waiting-area.webp',
  anorectal: '/images/tour/03-consultation-room.webp',
  pph: '/images/tour/04-operating-room.webp',
  endoscopy: '/images/tour/06-endoscopy-room.webp',
  skin: '/images/pages/skin.webp',
  surgery: '/images/tour/05-recovery-room.webp',
  magazine: '/images/pages/wellness.webp',
  faq: '/images/pages/medical-tools.webp',
  consultation: '/images/tour/01-reception.webp',
  notice: '/images/pages/or-room.webp',
}

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(full, out)
    else if (ent.name === 'page.tsx') out.push(full)
  }
  return out
}

function group(rel) {
  const top = rel.split('/')[0]
  return MAP[top] || null
}

for (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/').replace(/\/page\.tsx$/, '')
  if (!rel) continue
  const hero = group(rel)
  if (!hero) continue
  let src = fs.readFileSync(file, 'utf8')

  // First Image that is clearly a hero (fill + priority, pages/tour/departments)
  const re = /(<Image\b[\s\S]*?src=")(\/images\/(?:pages|tour|departments)\/[^"]+)("[\s\S]*?(?:priority|fill)[\s\S]*?\/>)/
  const re2 = /(<Image\b[\s\S]*?(?:fill|priority)[\s\S]*?src=")(\/images\/(?:pages|tour|departments)\/[^"]+)("[\s\S]*?\/>)/

  let next = src
  if (re.test(src)) next = src.replace(re, `$1${hero}$3`)
  else if (re2.test(src)) next = src.replace(re2, `$1${hero}$3`)
  else {
    // multiline Image with src on own line — only first occurrence before section-space
    const cut = src.indexOf('section-space')
    const head = cut === -1 ? src : src.slice(0, cut)
    const tail = cut === -1 ? '' : src.slice(cut)
    const m = head.match(/src="(\/images\/(?:pages|tour|departments)\/[^"]+)"/)
    if (m && m[1] !== hero) {
      next = head.replace(m[0], `src="${hero}"`) + tail
    }
  }

  if (next !== src) {
    fs.writeFileSync(file, next)
    console.log('fixed', rel, '->', hero)
  } else {
    const m = src.match(/src="(\/images\/[^"]+)"/)
    console.log('check', rel, m?.[1], 'want', hero, m?.[1] === hero ? 'OK' : 'DIFF')
  }
}
