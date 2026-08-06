import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, extname } from 'node:path'

const roots = ['src']
const exts = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.md'])
const reps = [
  [/https:\/\/www\.jangtntnhang\.com/g, 'https://jtntn.co.kr'],
  [/https:\/\/jangtntnhang\.com/g, 'https://jtntn.co.kr'],
  [/https:\/\/www\.jangtntn\.vercel\.app/g, 'https://jtntn.co.kr'],
  [/https:\/\/jangtntn\.vercel\.app/g, 'https://jtntn.co.kr'],
]

function walk(dir, out = []) {
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, ent.name)
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.next') continue
      walk(p, out)
    } else if (exts.has(extname(ent.name))) {
      out.push(p)
    }
  }
  return out
}

let changed = 0
for (const root of roots) {
  for (const file of walk(root)) {
    const before = readFileSync(file, 'utf8')
    let after = before
    for (const [re, to] of reps) after = after.replace(re, to)
    if (after !== before) {
      writeFileSync(file, after)
      changed++
      console.log(file)
    }
  }
}
console.log(`updated ${changed} files`)
