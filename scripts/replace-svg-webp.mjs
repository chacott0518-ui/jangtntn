import fs from 'fs'
import path from 'path'

const root = path.resolve('src')

const map = {
  '/images/replacements/clinic.svg': '/images/pages/clinic.webp',
  '/images/replacements/endoscopy.svg': '/images/pages/endoscopy.webp',
  '/images/replacements/surgery.svg': '/images/pages/surgery.webp',
  '/images/replacements/skin.svg': '/images/pages/skin.webp',
  '/images/replacements/recovery.svg': '/images/pages/recovery.webp',
  '/images/replacements/wellness.svg': '/images/pages/wellness.webp',
  '/images/replacements/space.svg': '/images/pages/space.webp',
  '/images/replacements/consultation.svg': '/images/pages/consultation.webp',
}

// DepartmentCards-specific overrides (applied after generic map via second pass on that file)
const deptMap = {
  "img: '/images/pages/clinic.webp'": "img: '/images/departments/anorectal.webp'",
  // after generic replace, surgery path for pph card:
}

function walk(dir, fn) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, fn)
    else if (/\.(tsx|ts|jsx|js|css)$/.test(e.name)) fn(full)
  }
}

walk(root, (file) => {
  let text = fs.readFileSync(file, 'utf8')
  const orig = text
  for (const [from, to] of Object.entries(map)) {
    text = text.split(from).join(to)
  }
  if (text !== orig) {
    fs.writeFileSync(file, text)
    console.log('updated', path.relative(process.cwd(), file))
  }
})

// Fine-tune DepartmentCards images
const cardsPath = path.resolve('src/components/sections/DepartmentCards.tsx')
let cards = fs.readFileSync(cardsPath, 'utf8')
cards = cards
  .replace(
    "{ href: '/anorectal'",
    "{ href: '/anorectal'"
  )
// Replace by title-specific img after generic map
cards = cards.replace(
  /href: '\/anorectal'[\s\S]*?img: '([^']+)'/,
  (m) => m.replace(/img: '[^']+'/, "img: '/images/departments/anorectal.webp'")
)
cards = cards.replace(
  /href: '\/pph'[\s\S]*?img: '([^']+)'/,
  (m) => m.replace(/img: '[^']+'/, "img: '/images/departments/pph.webp'")
)
cards = cards.replace(
  /href: '\/endoscopy'[\s\S]*?img: '([^']+)'/,
  (m) => m.replace(/img: '[^']+'/, "img: '/images/departments/endoscopy.webp'")
)
cards = cards.replace(
  /href: '\/skin'[\s\S]*?img: '([^']+)'/,
  (m) => m.replace(/img: '[^']+'/, "img: '/images/departments/skin.webp'")
)
cards = cards.replace(
  /href: '\/surgery'[\s\S]*?img: '([^']+)'/,
  (m) => m.replace(/img: '[^']+'/, "img: '/images/departments/surgery.webp'")
)
cards = cards.replace(
  /href: '\/consultation'[\s\S]*?img: '([^']+)'/,
  (m) => m.replace(/img: '[^']+'/, "img: '/images/departments/consultation.webp'")
)
fs.writeFileSync(cardsPath, cards)
console.log('department cards tuned')

// Verify no svg replacements left
let left = 0
walk(root, (file) => {
  const t = fs.readFileSync(file, 'utf8')
  if (t.includes('/images/replacements/')) {
    left++
    console.log('LEFT', file)
  }
})
console.log('remaining replacement refs', left)
