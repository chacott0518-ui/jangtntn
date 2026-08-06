import fs from 'fs'
import path from 'path'

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) walk(p, a)
    else if (/\.(tsx|ts)$/.test(e.name)) a.push(p)
  }
  return a
}

// 1) Hospital name: 장튼튼항외과 → 장튼튼항외과의원 (avoid double 의원)
let nameFiles = 0
for (const f of walk('src')) {
  let t = fs.readFileSync(f, 'utf8')
  const orig = t
  // Protect alternateName and intentional short brand in JSON-LD alternateName lines
  const placeholders = []
  t = t.replace(/alternateName:\s*'장튼튼항외과'/g, (m) => {
    placeholders.push(m)
    return `__ALT_NAME_${placeholders.length - 1}__`
  })
  t = t.replace(/장튼튼항외과의원/g, '__FULL_NAME__')
  t = t.replace(/장튼튼항외과/g, '장튼튼항외과의원')
  t = t.replace(/__FULL_NAME__/g, '장튼튼항외과의원')
  t = t.replace(/장튼튼항외과의원의원/g, '장튼튼항외과의원')
  placeholders.forEach((m, i) => {
    t = t.replace(`__ALT_NAME_${i}__`, m)
  })
  // SITE_NAME constant
  if (f.replace(/\\/g, '/').endsWith('src/lib/constants.ts')) {
    t = t.replace(/export const SITE_NAME = '장튼튼항외과의원'/, "export const SITE_NAME = '장튼튼항외과의원'")
  }
  if (t !== orig) {
    fs.writeFileSync(f, t)
    nameFiles++
  }
}
console.log('name files updated', nameFiles)

// 2) Subpage hero overlay weaken via class swap where exact common patterns exist
const patterns = [
  [
    `style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }}`,
    `className="absolute inset-0 subpage-hero-scrim-x"`,
  ],
  [
    `style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,1) 100%)' }}`,
    `className="absolute inset-0 subpage-hero-scrim-y"`,
  ],
  [
    `style={{background:'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.85) 35%,rgba(255,255,255,0.3) 65%,transparent 100%)'}}`,
    `className="absolute inset-0 subpage-hero-scrim-x"`,
  ],
  [
    `style={{background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.7) 80%,rgba(249,250,251,1) 100%)'}}`,
    `className="absolute inset-0 subpage-hero-scrim-y"`,
  ],
  [
    `style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.4) 65%,transparent 100%)' }}`,
    `className="absolute inset-0 subpage-hero-scrim-x"`,
  ],
]

let overlayFiles = 0
for (const f of walk('src')) {
  let t = fs.readFileSync(f, 'utf8')
  const orig = t
  for (const [from, to] of patterns) {
    // overlays sit on absolute inset-0 divs
    t = t.replaceAll(`className="absolute inset-0" ${from}`, to)
    t = t.replaceAll(`<div className="absolute inset-0" ${from} />`, `<div ${to} />`)
    t = t.replaceAll(`<div className="absolute inset-0" ${from}></div>`, `<div ${to}></div>`)
  }
  // DiseasePage style overlays
  t = t.replace(
    `style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.4) 65%, transparent 100%)' }}`,
    ''
  )
  if (t !== orig) {
    fs.writeFileSync(f, t)
    overlayFiles++
  }
}
console.log('overlay candidate files', overlayFiles)
