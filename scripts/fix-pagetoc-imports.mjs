import fs from 'fs'
import path from 'path'

function walk(d, o = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name)
    if (e.isDirectory()) walk(f, o)
    else if (e.name === 'page.tsx') o.push(f)
  }
  return o
}

for (const file of walk('src/app')) {
  let s = fs.readFileSync(file, 'utf8')
  if (!s.includes('PageToc')) continue
  let changed = false

  if (s.includes("import type { PageToc,  Metadata } from 'next'")) {
    s = s.replace(
      "import type { PageToc,  Metadata } from 'next'",
      "import type { Metadata } from 'next'"
    )
    changed = true
  }

  const hasGalleryImport = s.includes("from '@/components/content/MedicalImageGallery'")
  const galleryHasPageToc = /import[\s\S]*?PageToc[\s\S]*?from '@/components\/content\/MedicalImageGallery'/.test(s)

  if (s.includes('<PageToc') && (!hasGalleryImport || !galleryHasPageToc)) {
    if (hasGalleryImport && !galleryHasPageToc) {
      s = s.replace(
        /import\s+([^;]+?)\s+from '(@\/components\/content\/MedicalImageGallery)'/,
        (full, spec, mod) => {
          if (spec.includes('PageToc')) return full
          if (spec.includes('{')) return `import ${spec.replace('{', '{ PageToc, ')} from '${mod}'`
          return `import ${spec}, { PageToc } from '${mod}'`
        }
      )
    } else {
      const lines = s.split('\n')
      let i = 0
      while (i < lines.length && (lines[i].startsWith('import ') || lines[i].startsWith("'use client'"))) i++
      lines.splice(i, 0, "import { PageToc } from '@/components/content/MedicalImageGallery'")
      s = lines.join('\n')
    }
    changed = true
  }

  if (changed) {
    fs.writeFileSync(file, s)
    console.log('fixed', file)
  }
}
