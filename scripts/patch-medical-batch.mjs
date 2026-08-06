import fs from 'fs'

function ensureImport(t) {
  if (t.includes('MedicalImageGallery')) return t
  return t.replace(
    `import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'`,
    `import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'\nimport MedicalImageGallery, { OfficialSource, PageToc } from '@/components/content/MedicalImageGallery'`
  )
}

function insertBeforeFaq(t, block) {
  if (t.includes(block.slice(0, 40))) return t
  return t.replace(
    `<StaticFaq items={faqs} />`,
    `${block}\n\n        <StaticFaq items={faqs} />`
  )
}

function setKeywords(t, kw) {
  if (t.includes('keywords:')) {
    return t.replace(/keywords:\s*'[^']*'/, `keywords: '${kw}'`)
  }
  return t.replace(
    /alternates:\s*\{\s*canonical:/,
    `keywords: '${kw}',\n  alternates: { canonical:`
  )
}

function trimFaqs(t, max = 5) {
  const m = t.match(/const faqs = \[([\s\S]*?)\]\n\nexport default/)
  if (!m) return t
  const items = [...m[1].matchAll(/\{\s*q:[\s\S]*?\},\s*(?=\{|\s*$)/g)].map((x) => x[0].trim().replace(/,$/, ''))
  if (items.length <= max) return t
  const kept = items.slice(0, max).join(',\n  ')
  return t.replace(m[0], `const faqs = [\n  ${kept},\n]\n\nexport default`)
}

// fistula
{
  let t = fs.readFileSync('src/app/anorectal/fistula/page.tsx', 'utf8')
  t = ensureImport(t)
  t = setKeywords(t, '치루, 항문농양, 항문주위농양, 치루치료, 치루수술, 항문농양치료, 항문농양수술, 김포 치루, 김포 항문농양')
  t = trimFaqs(t, 5)
  t = insertBeforeFaq(
    t,
    `<MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/anorectal/fistula/anal-abscess-fistula-diagram.webp', caption: '항문농양 및 치루 모식도' },
          ]}
        />
        <OfficialSource
          sources={['보건복지부', '대한의학회']}
          note="위 항문농양 및 치루 모식도는 보건복지부·대한의학회 자료에 표기된 출처를 따릅니다."
        />`
  )
  // remove body stock image blocks that duplicate heroes
  t = t.replace(/<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'220px'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[^/]*\/>\s*<\/div>/g, '')
  t = t.replace(/<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'200px'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[^/]*\/>\s*<\/div>/g, '')
  fs.writeFileSync('src/app/anorectal/fistula/page.tsx', t)
  console.log('fistula ok')
}

// gastro
{
  let t = fs.readFileSync('src/app/endoscopy/gastro/page.tsx', 'utf8')
  t = ensureImport(t)
  t = setKeywords(t, '위내시경, 수면위내시경, 내시경검사, 김포 위내시경, 김포 수면위내시경, 구래동 위내시경, 구래역 위내시경')
  t = trimFaqs(t, 5)
  t = insertBeforeFaq(
    t,
    `<MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/endoscopy/gastro/gastroscopy-01.webp', caption: '위내시경 01' },
            { src: '/images/medical/endoscopy/gastro/gastroscopy-02.webp', caption: '위내시경 02' },
            { src: '/images/medical/endoscopy/gastro/gastroscopy-03.webp', caption: '위내시경 03' },
          ]}
        />`
  )
  t = t.replace(/<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'220px'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[^/]*\/>\s*<\/div>/g, '')
  t = t.replace(/<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'200px'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[^/]*\/>\s*<\/div>/g, '')
  fs.writeFileSync('src/app/endoscopy/gastro/page.tsx', t)
  console.log('gastro ok')
}

// colon
{
  let t = fs.readFileSync('src/app/endoscopy/colon/page.tsx', 'utf8')
  t = ensureImport(t)
  t = setKeywords(t, '대장내시경, 수면대장내시경, 위대장내시경, 대장암검진, 김포 대장내시경, 김포 수면대장내시경, 구래동 대장내시경, 구래역 대장내시경')
  t = trimFaqs(t, 5)
  t = insertBeforeFaq(
    t,
    `<MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/endoscopy/colon/colonoscopy-01.webp', caption: '대장내시경 01' },
            { src: '/images/medical/endoscopy/colon/colonoscopy-02.webp', caption: '대장내시경 02' },
            { src: '/images/medical/endoscopy/colon/colonoscopy-03.webp', caption: '대장내시경 03' },
            { src: '/images/medical/endoscopy/colon/colonoscopy-04.webp', caption: '대장내시경 04' },
          ]}
        />`
  )
  t = t.replace(/<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'220px'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[^/]*\/>\s*<\/div>/g, '')
  t = t.replace(/<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'200px'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[^/]*\/>\s*<\/div>/g, '')
  fs.writeFileSync('src/app/endoscopy/colon/page.tsx', t)
  console.log('colon ok')
}

// polyp
{
  let t = fs.readFileSync('src/app/endoscopy/polyp/page.tsx', 'utf8')
  t = ensureImport(t)
  t = setKeywords(t, '대장용종, 대장용종제거, 용종절제술, 김포 대장용종제거, 구래동 대장용종제거')
  t = trimFaqs(t, 5)
  t = insertBeforeFaq(
    t,
    `<MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/endoscopy/polyp/colon-polyp-01.webp', caption: '대장용종제거술 01' },
            { src: '/images/medical/endoscopy/polyp/colon-polyp-02.webp', caption: '대장용종제거술 02' },
            { src: '/images/medical/endoscopy/polyp/colon-polyp-03.webp', caption: '대장용종제거술 03' },
            { src: '/images/medical/endoscopy/polyp/colon-polyp-04.webp', caption: '대장용종제거술 04' },
          ]}
        />`
  )
  t = t.replace(/<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'220px'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[^/]*\/>\s*<\/div>/g, '')
  t = t.replace(/<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'200px'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[^/]*\/>\s*<\/div>/g, '')
  fs.writeFileSync('src/app/endoscopy/polyp/page.tsx', t)
  console.log('polyp ok')
}

// lipoma
{
  let t = fs.readFileSync('src/app/skin/lipoma/page.tsx', 'utf8')
  t = ensureImport(t)
  t = setKeywords(t, '지방종, 지방종제거, 피부종양, 피부종양제거, 김포 지방종제거, 구래동 지방종제거')
  t = trimFaqs(t, 5)
  t = insertBeforeFaq(
    t,
    `<MedicalImageGallery
          title="관련 이미지"
          items={[
            { src: '/images/medical/skin/lipoma/lipoma-ultrasound.webp', caption: '지방종 초음파', clinical: true },
            { src: '/images/medical/skin/lipoma/lipoma-specimen.webp', caption: '지방종 조직사진', clinical: true },
          ]}
        />`
  )
  t = t.replace(/<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'220px'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[^/]*\/>\s*<\/div>/g, '')
  t = t.replace(/<div className="relative rounded-2xl overflow-hidden" style=\{\{height:'200px'\}\}>\s*<Image src="\/images\/pages\/[^"]+"[^/]*\/>\s*<\/div>/g, '')
  fs.writeFileSync('src/app/skin/lipoma/page.tsx', t)
  console.log('lipoma ok')
}

// skin hub common images
{
  let t = fs.readFileSync('src/app/skin/page.tsx', 'utf8')
  t = ensureImport(t)
  t = setKeywords(t, '피부종양, 피부종양제거, 지방종, 표피낭종, 연성섬유종, 김포 지방종제거')
  if (!t.includes('skin-clinic-image-01')) {
    t = t.replace(
      `<StaticFaq items={faqs} />`,
      `<MedicalImageGallery
          title="피부종양클리닉 안내 이미지"
          items={[
            { src: '/images/medical/skin/common/skin-clinic-image-01.webp', caption: '피부종양클리닉 이미지 01' },
            { src: '/images/medical/skin/common/skin-clinic-image-02.webp', caption: '피부종양클리닉 이미지 02' },
          ]}
        />

        <StaticFaq items={faqs} />`
    )
  }
  fs.writeFileSync('src/app/skin/page.tsx', t)
  console.log('skin hub ok')
}

// keywords only for other disease pages
const kwMap = {
  'src/app/anorectal/fissure/page.tsx': '치열, 배변통증, 배변출혈, 치열치료, 치열수술, 김포 치열, 구래동 치열',
  'src/app/anorectal/pruritus/page.tsx': '항문가려움, 항문소양증, 김포 항문가려움, 김포 항문소양증',
  'src/app/anorectal/constipation/page.tsx': '변비, 만성변비, 설사, 만성설사, 잔변감, 김포 변비, 김포 설사',
  'src/app/pph/page.tsx': 'PPH수술, 원형자동문합기수술, 김포 PPH수술, 김포 치핵수술',
  'src/app/skin/cyst/page.tsx': '표피낭종, 표피낭종제거, 피지낭종, 피지낭종제거, 김포 표피낭종제거, 김포 피지낭종제거',
  'src/app/skin/fibroma/page.tsx': '쥐젖제거, 연성섬유종제거, 김포 쥐젖제거',
  'src/app/surgery/nail/page.tsx': '내성발톱, 내성발톱치료, 김포 내성발톱치료',
  'src/app/surgery/burn/page.tsx': '화상치료, 김포 화상치료',
  'src/app/surgery/wound/page.tsx': '상처봉합, 외상처치, 외래수술, 김포 상처봉합',
  'src/app/app/page.tsx': '',
  'src/app/page.tsx': '장튼튼항외과, 장튼튼항외과의원, 항문외과, 대장항문외과, 김포 항문외과, 김포 대장항문외과, 구래동 항문외과, 구래역 항문외과, 김포한강신도시 항문외과',
  'src/app/about/location/page.tsx': '장튼튼항외과의원, 김포 구래역, 마산동, 양촌읍, 양곡, 통진읍, 마송, 대곶면, 장기동, 운양동, 사우동, 풍무동, 고촌읍, 검단신도시',
}

for (const [file, kw] of Object.entries(kwMap)) {
  if (!kw || !fs.existsSync(file)) continue
  let t = fs.readFileSync(file, 'utf8')
  t = setKeywords(t, kw)
  t = trimFaqs(t, 5)
  fs.writeFileSync(file, t)
  console.log('kw', file)
}

// Department cards: unique assets
{
  let t = fs.readFileSync('src/components/sections/DepartmentCards.tsx', 'utf8')
  t = t
    .replace(`img: '/images/departments/anorectal.webp'`, `img: '/images/departments/anorectal.webp'`)
    .replace(`img: '/images/departments/pph.webp'`, `img: '/images/departments/pph.webp'`)
    .replace(`img: '/images/departments/endoscopy.webp'`, `img: '/images/departments/endoscopy.webp'`)
    .replace(`img: '/images/departments/skin.webp'`, `img: '/images/pages/skin.webp'`)
    .replace(`img: '/images/departments/surgery.webp'`, `img: '/images/pages/medical-tools.webp'`)
    .replace(`img: '/images/departments/consultation.webp'`, `img: '/images/departments/consultation.webp'`)
  fs.writeFileSync('src/components/sections/DepartmentCards.tsx', t)
  console.log('department cards')
}

console.log('done')
