import fs from 'fs'
import path from 'path'

const root = path.resolve('src')

const rules = [
  [/https:\/\/images\.unsplash\.com\/photo-1612349317150-e413f6a5b16d[^"'\\\s]*/g, '/images/replacements/skin.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1559839734-2b71ea197ec2[^"'\\\s]*/g, '/images/replacements/clinic.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1576091160399-112ba8d25d1d[^"'\\\s]*/g, '/images/replacements/endoscopy.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1576091160550-2173dba999ef[^"'\\\s]*/g, '/images/replacements/endoscopy.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1551190822-a9333d879b1f[^"'\\\s]*/g, '/images/replacements/surgery.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1559757148-5c350d0d3c56[^"'\\\s]*/g, '/images/replacements/clinic.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1559757175-0eb30cd8c063[^"'\\\s]*/g, '/images/replacements/clinic.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1559757175-5700dde675bc[^"'\\\s]*/g, '/images/replacements/clinic.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1551076805-e1869033e561[^"'\\\s]*/g, '/images/replacements/space.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1579684385127-1ef15d508118[^"'\\\s]*/g, '/images/replacements/recovery.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1519494026892-80bbd2d6fd0d[^"'\\\s]*/g, '/images/replacements/space.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1586773860418-d37222d8fce3[^"'\\\s]*/g, '/images/replacements/space.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1516841273335-e39b37888115[^"'\\\s]*/g, '/images/replacements/clinic.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1504813184591-01572f98c85f[^"'\\\s]*/g, '/images/replacements/surgery.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1505751172876-fa1923c5c528[^"'\\\s]*/g, '/images/replacements/wellness.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1490645935967-10de6ba17061[^"'\\\s]*/g, '/images/replacements/wellness.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1512621776951-a57141f2eefd[^"'\\\s]*/g, '/images/replacements/wellness.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1524661135-423995f22d0b[^"'\\\s]*/g, '/images/replacements/space.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1521791136064-7986c2920216[^"'\\\s]*/g, '/images/replacements/consultation.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1497366216548-37526070297c[^"'\\\s]*/g, '/images/replacements/space.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1584820927498-cfe5211fd8bf[^"'\\\s]*/g, '/images/replacements/recovery.svg'],
  [/https:\/\/images\.unsplash\.com\/photo-1506905925346-21bda4d32df4[^"'\\\s]*/g, '/images/replacements/wellness.svg'],
  [/https:\/\/www\.jangtntnhang\.com\/images\/og-image\.jpg/g, '/images/og-image.webp'],
  [/\/images\/og-image\.png/g, '/images/og-image.webp'],
  [/\/images\/og-image\.jpg/g, '/images/og-image.webp'],
]

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (/\.(tsx|ts|jsx|js|css)$/.test(entry.name)) {
      let text = fs.readFileSync(full, 'utf8')
      const original = text
      for (const [re, rep] of rules) text = text.replace(re, rep)
      if (text !== original) {
        fs.writeFileSync(full, text)
        console.log('updated', full)
      }
    }
  }
}

walk(root)
console.log('done')
