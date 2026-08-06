import fs from 'fs'

const f = 'src/app/anorectal/pruritus/page.tsx'
const buf = fs.readFileSync(f)
console.log('bytes', buf.length)
const lines = buf.toString('utf8').split(/\n/)
lines.forEach((line, i) => {
  if (i >= 85 && i <= 110) {
    const codes = [...line].slice(-5).map((c) => c.charCodeAt(0).toString(16))
    console.log(i + 1, 'len', line.length, 'tail', JSON.stringify(line.slice(-10)), codes)
  }
})

const cleaned = lines.map((l) => l.replace(/[\t\u00a0\u200b ]+$/g, '')).join('\n')
fs.writeFileSync(f, cleaned.endsWith('\n') ? cleaned : cleaned + '\n')
console.log('rewrote')
