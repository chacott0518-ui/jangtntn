import fs from 'fs'
import path from 'path'

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) walk(p, a)
    else if (/\.(tsx|ts|css)$/.test(e.name)) a.push(p)
  }
  return a
}

let n = 0
for (const f of walk('src')) {
  const buf = fs.readFileSync(f)
  let t = buf.toString('utf8')
  const u = t.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  if (u !== t || buf.includes(0x0d)) {
    fs.writeFileSync(f, u)
    n++
  }
}
console.log('normalized', n)

const f = 'src/app/anorectal/pruritus/page.tsx'
const b = fs.readFileSync(f)
console.log('has CR', b.includes(0x0d))
console.log('last bytes', [...b.slice(-20)])
