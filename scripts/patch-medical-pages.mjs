import fs from 'fs'

function patchHemorrhoid() {
  let t = fs.readFileSync('src/app/anorectal/hemorrhoid/page.tsx', 'utf8')
  if (!t.includes("from '@/components/content/MedicalImageGallery'")) {
    t = t.replace(
      `import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'`,
      `import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'\nimport MedicalImageGallery, { OfficialSource, PageToc } from '@/components/content/MedicalImageGallery'`
    )
  }
  t = t.replace(
    /keywords: '[^']*'/,
    `keywords: '치질, 치핵, 치질진료, 치질치료, 치질수술, 치핵치료, 치핵수술, 김포 치질, 김포 치핵, 김포 치질수술, 구래동 치질, 구래역 치질병원'`
  )
  // trim faqs to first 5
  t = t.replace(
    /const faqs = \[[\s\S]*?\]\n\nexport default/,
    (() => {
      const m = t.match(/const faqs = (\[[\s\S]*?\])\n\nexport default/)
      if (!m) return t
      // keep manually
      return null
    })()
  )
  fs.writeFileSync('src/app/anorectal/hemorrhoid/page.tsx', t)
}

// Simpler: write key page fragments via targeted inserts
const files = {
  'src/app/anorectal/hemorrhoid/page.tsx': null,
}
console.log('use dedicated writers')
