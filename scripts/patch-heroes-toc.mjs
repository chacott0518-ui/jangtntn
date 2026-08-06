/**
 * Unify subpage heroes by menu group + inject PageToc from real H2s.
 */
import fs from 'fs'
import path from 'path'

const ROOT = path.resolve('src/app')

const HERO_BY_PREFIX = [
  { test: (p) => p.startsWith('about'), src: '/images/tour/02-waiting-area.webp' },
  { test: (p) => p.startsWith('anorectal'), src: '/images/tour/03-consultation-room.webp' },
  { test: (p) => p === 'pph' || p.startsWith('pph/'), src: '/images/tour/04-operating-room.webp' },
  { test: (p) => p.startsWith('endoscopy'), src: '/images/tour/06-endoscopy-room.webp' },
  { test: (p) => p.startsWith('skin'), src: '/images/pages/skin.webp' },
  { test: (p) => p.startsWith('surgery'), src: '/images/tour/05-recovery-room.webp' },
  { test: (p) => p.startsWith('magazine'), src: '/images/pages/wellness.webp' },
  { test: (p) => p.startsWith('faq'), src: '/images/pages/medical-tools.webp' },
  { test: (p) => p.startsWith('consultation'), src: '/images/tour/01-reception.webp' },
  { test: (p) => p.startsWith('notice'), src: '/images/pages/or-room.webp' },
]

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(full, out)
    else if (ent.name === 'page.tsx') out.push(full)
  }
  return out
}

function relKey(file) {
  return path.relative(ROOT, file).replace(/\\/g, '/').replace(/\/page\.tsx$/, '') || ''
}

function heroFor(rel) {
  if (!rel) return null
  for (const rule of HERO_BY_PREFIX) {
    if (rule.test(rel)) return rule.src
  }
  return null
}

function slugify(label, used) {
  const base =
    label
      .replace(/[^\w가-힣0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 40) || 'section'
  let id = base
  let n = 2
  while (used.has(id)) id = `${base}-${n++}`
  used.add(id)
  return id
}

function stripTags(s) {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function patchHero(src, heroSrc) {
  const blockRe =
    /(relative overflow-hidden h-\[[\s\S]*?<Image[\s\S]*?src=")(\/images\/[^"]+)(")/
  if (blockRe.test(src)) return src.replace(blockRe, `$1${heroSrc}$3`)

  // about/tour style
  const tourRe =
    /(h-\[[^\]]+\][\s\S]{0,400}?src=")(\/images\/(?:pages|tour|departments)\/[^"]+)(")/
  if (tourRe.test(src)) return src.replace(tourRe, `$1${heroSrc}$3`)

  return src
}

function ensureImport(src) {
  if (src.includes('PageToc')) return src
  if (src.includes("from '@/components/content/MedicalImageGallery'")) {
    const importRe = new RegExp(
      String.raw`import\s+([^;]+?)\s+from '@/components/content/MedicalImageGallery'`
    )
    return src.replace(importRe, (full, spec) => {
      if (spec.includes('PageToc')) return full
      if (spec.includes('{')) {
        return `import ${spec.replace('{', '{ PageToc, ')} from '@/components/content/MedicalImageGallery'`
      }
      return `import ${spec}, { PageToc } from '@/components/content/MedicalImageGallery'`
    })
  }
  const lines = src.split('\n')
  let insertAt = 0
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) insertAt = i + 1
    else if (insertAt > 0 && lines[i].trim() !== '') break
  }
  lines.splice(insertAt, 0, "import { PageToc } from '@/components/content/MedicalImageGallery'")
  return lines.join('\n')
}

function patchToc(src, rel) {
  if (src.includes('<PageToc')) return { src, skipped: 'already-has-toc' }
  if (!rel) return { src, skipped: 'home' }

  const sectionRe = /<section(\s[^>]*)?>([\s\S]*?)<\/section>/g
  const sections = []
  let m
  while ((m = sectionRe.exec(src))) {
    const attrs = m[1] || ''
    const body = m[2]
    const h2m = body.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)
    if (!h2m) continue
    const label = stripTags(h2m[1])
      .replace(/^[💡🔍📊⚕️❓📸🏥📍🕐✂️🔬❤️]+\s*/u, '')
      .trim()
    if (!label || label === '목차') continue
    sections.push({
      full: m[0],
      attrs,
      label,
      isSummary: label.includes('핵심요약'),
    })
  }

  if (sections.length === 0) return { src, skipped: 'no-h2-sections' }

  const used = new Set()
  const tocItems = []
  let out = src

  for (const sec of sections) {
    if (sec.isSummary) continue
    const idMatch = sec.attrs.match(/\bid=["']([^"']+)["']/)
    let id = idMatch?.[1]
    if (!id) {
      id = slugify(sec.label, used)
      const oldOpen = `<section${sec.attrs}>`
      const replacement =
        sec.attrs.trim() === ''
          ? `<section id="${id}">`
          : `<section${sec.attrs} id="${id}">`
      out = out.replace(oldOpen, replacement)
    } else {
      used.add(id)
    }
    tocItems.push({ id, label: sec.label })
  }

  if (!tocItems.some((t) => t.id === 'faq') && out.includes('<StaticFaq')) {
    tocItems.push({ id: 'faq', label: '자주 묻는 질문' })
  }

  if (tocItems.length === 0) return { src: out, skipped: 'no-toc-items' }

  out = ensureImport(out)

  const tocJsx = `
        <PageToc
          items={[
${tocItems
  .map((t) => `            { id: '${t.id}', label: '${t.label.replace(/'/g, "\\'")}' },`)
  .join('\n')}
          ]}
        />
`

  if (out.includes('핵심요약')) {
    const sumEnd = out.indexOf('</section>', out.indexOf('핵심요약'))
    if (sumEnd !== -1) {
      const insertAt = sumEnd + '</section>'.length
      out = out.slice(0, insertAt) + '\n' + tocJsx + out.slice(insertAt)
      return { src: out, added: tocItems.length }
    }
  }

  const spaceMatch = out.match(/<div className="[^"]*section-space[^"]*"[^>]*>/)
  if (spaceMatch) {
    const start = spaceMatch.index + spaceMatch[0].length
    out = out.slice(0, start) + '\n' + tocJsx + out.slice(start)
    return { src: out, added: tocItems.length }
  }

  return { src: out, skipped: 'no-insert-point' }
}

const files = walk(ROOT)
let heroCount = 0
let tocCount = 0
const tocSkip = []

for (const file of files) {
  const rel = relKey(file)
  let src = fs.readFileSync(file, 'utf8')
  let changed = false

  const hero = heroFor(rel)
  if (hero) {
    const next = patchHero(src, hero)
    if (next !== src) {
      src = next
      changed = true
      heroCount++
      console.log('hero', rel || '(home)', '->', hero)
    } else if (src.includes('/images/')) {
      console.log('hero-miss', rel)
    }
  }

  if (rel) {
    const r = patchToc(src, rel)
    src = r.src
    if (r.added) {
      changed = true
      tocCount++
      console.log('toc', rel, r.added, 'items')
    } else if (r.skipped) {
      tocSkip.push(`${rel}: ${r.skipped}`)
    }
  }

  if (changed) fs.writeFileSync(file, src)
}

console.log('\nDone heroes:', heroCount, 'toc pages:', tocCount)
console.log('TOC skips:\n' + tocSkip.join('\n'))
