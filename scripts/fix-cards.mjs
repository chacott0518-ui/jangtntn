import fs from 'fs'

const p = 'src/components/sections/DepartmentCards.tsx'
let s = fs.readFileSync(p, 'utf8')
const map = [
  ['/images/departments/anorectal.webp', '/images/tour/03-consultation-room.webp'],
  ['/images/departments/pph.webp', '/images/tour/04-operating-room.webp'],
  ['/images/departments/endoscopy.webp', '/images/tour/06-endoscopy-room.webp'],
  ['/images/pages/medical-tools.webp', '/images/tour/05-recovery-room.webp'],
  ['/images/departments/consultation.webp', '/images/tour/01-reception.webp'],
]
for (const [a, b] of map) s = s.replaceAll(a, b)
fs.writeFileSync(p, s)
console.log(s.match(/img: '[^']+'/g))
