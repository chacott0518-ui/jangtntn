import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.jangtntn.vercel.app'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about/doctor`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about/info`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/location`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/surgery`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/aftercare`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/tour`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/anorectal/hemorrhoid`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/anorectal/fissure`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/anorectal/fistula`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/anorectal/pruritus`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/anorectal/condyloma`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/anorectal/levator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/anorectal/pilonidal`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/anorectal/constipation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/pph`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/endoscopy/gastro`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/endoscopy/colon`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/endoscopy/polyp`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/skin/lipoma`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/skin/cyst`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/skin/fibroma`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/surgery/burn`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/surgery/nail`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/surgery/wound`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/surgery/nutrition`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/magazine`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/notice`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/consultation`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
