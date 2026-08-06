import fs from 'fs'
import path from 'path'
import https from 'https'

const outDir = path.resolve('public/images')

const files = [
  // departments
  ['departments/anorectal.webp', 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80&fm=webp'],
  ['departments/pph.webp', 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80&fm=webp'],
  ['departments/endoscopy.webp', 'https://images.unsplash.com/photo-1581594693702-2fbb1a254b52?w=1200&q=80&fm=webp'],
  ['departments/skin.webp', 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80&fm=webp'],
  ['departments/surgery.webp', 'https://images.unsplash.com/photo-1631815588090-e4c3d2a5d4c5?w=1200&q=80&fm=webp'],
  ['departments/consultation.webp', 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80&fm=webp'],
  // pages heroes / content
  ['pages/clinic.webp', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80&fm=webp'],
  ['pages/endoscopy.webp', 'https://images.unsplash.com/photo-1581594693702-2fbb1a254b52?w=1600&q=80&fm=webp'],
  ['pages/surgery.webp', 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80&fm=webp'],
  ['pages/recovery.webp', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80&fm=webp'],
  ['pages/skin.webp', 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=80&fm=webp'],
  ['pages/wellness.webp', 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1600&q=80&fm=webp'],
  ['pages/space.webp', 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1600&q=80&fm=webp'],
  ['pages/consultation.webp', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&fm=webp'],
  ['pages/medical-tools.webp', 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80&fm=webp'],
  ['pages/or-room.webp', 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&q=80&fm=webp'],
]

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    const file = fs.createWriteStream(dest)
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close()
        fs.unlinkSync(dest)
        return download(res.headers.location, dest).then(resolve).catch(reject)
      }
      if (res.statusCode !== 200) {
        file.close()
        try { fs.unlinkSync(dest) } catch {}
        return reject(new Error(`${res.statusCode} ${url}`))
      }
      res.pipe(file)
      file.on('finish', () => file.close(() => resolve(dest)))
    }).on('error', (err) => {
      try { fs.unlinkSync(dest) } catch {}
      reject(err)
    })
  })
}

const failed = []
for (const [rel, url] of files) {
  const dest = path.join(outDir, rel)
  try {
    await download(url, dest)
    const size = fs.statSync(dest).size
    console.log('ok', rel, size)
    if (size < 1000) failed.push(rel + ' (too small)')
  } catch (e) {
    console.log('fail', rel, e.message)
    failed.push(rel)
  }
}
console.log('FAILED', failed.join(', ') || 'none')
