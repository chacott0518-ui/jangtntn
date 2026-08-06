import fs from 'fs'
import path from 'path'

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) walk(p, a)
    else if (p.endsWith('.tsx')) a.push(p)
  }
  return a
}

for (const f of walk('src')) {
  let t = fs.readFileSync(f, 'utf8')
  const orig = t
  // remove leftover body stock image blocks
  t = t.replace(
    /\n\s*<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'18\dpx'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[\s\S]*?\/>\s*<\/div>/g,
    ''
  )
  t = t.replace(
    /\n\s*<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'20\dpx'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[\s\S]*?\/>\s*<\/div>/g,
    ''
  )
  t = t.replace(
    /\n\s*<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'22\dpx'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[\s\S]*?\/>\s*<\/div>/g,
    ''
  )
  // unused OfficialSource/PageToc imports if not used
  if (t.includes("from '@/components/content/MedicalImageGallery'")) {
    const usesOS = t.includes('<OfficialSource')
    const usesToc = t.includes('<PageToc')
    const usesGal = t.includes('<MedicalImageGallery')
    if (usesGal && !usesOS && !usesToc) {
      t = t.replace(
        `import MedicalImageGallery, { OfficialSource, PageToc } from '@/components/content/MedicalImageGallery'`,
        `import MedicalImageGallery from '@/components/content/MedicalImageGallery'`
      )
    } else if (usesGal && usesOS && !usesToc) {
      t = t.replace(
        `import MedicalImageGallery, { OfficialSource, PageToc } from '@/components/content/MedicalImageGallery'`,
        `import MedicalImageGallery, { OfficialSource } from '@/components/content/MedicalImageGallery'`
      )
    } else if (!usesGal && !usesOS && !usesToc) {
      t = t.replace(/\nimport MedicalImageGallery[^\n]*/g, '')
    }
  }
  if (t !== orig) {
    fs.writeFileSync(f, t)
    console.log('cleaned', f)
  }
}

// trim gastro/colon faqs to 5 if still 6
for (const f of ['src/app/endoscopy/gastro/page.tsx', 'src/app/endoscopy/colon/page.tsx']) {
  let t = fs.readFileSync(f, 'utf8')
  const parts = [...t.matchAll(/\{\s*\n\s*q:/g)]
  console.log(f, 'faq markers', parts.length)
}
