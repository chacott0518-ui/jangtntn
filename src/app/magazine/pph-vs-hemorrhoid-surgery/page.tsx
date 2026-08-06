import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { PageToc } from '@/components/content/MedicalImageGallery'
import { absoluteUrl, articleId, SITE_NAME } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo/metadata'

const PATH = '/magazine/pph-vs-hemorrhoid-surgery'
const TITLE = 'PPH 수술 vs 기존 치핵 수술, 무엇이 다른가요?'
const DESCRIPTION =
  'PPH와 기존 치핵 수술의 차이점을 비교하는 건강 정보입니다. 장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다.'

export const metadata: Metadata = buildPageMetadata({
  path: PATH,
  title: `${TITLE} | 건강매거진`,
  description: DESCRIPTION,
  type: 'article',
  ogImage: '/images/pages/surgery.webp',
})

const DISCLAIMER = '장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다.'

const faqs = [
  {
    q: 'PPH 수술은 모든 치핵에 가능한가요?',
    a: '아닙니다. 주로 탈출·다발성 내치핵 등 적응증이 있을 때 일반적으로 고려되는 방법이며, 모든 치핵 환자에게 적용되는 수술은 아닙니다. 외치핵 위주이거나 상태가 다르면 다른 방법이 더 적합할 수 있습니다. 장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다.',
  },
  {
    q: 'PPH는 통증이 없나요?',
    a: '치상선 위쪽에서 진행해 통증이 상대적으로 적은 경우가 많은 것으로 알려져 있습니다. 다만 개인차·동반 시술·회복 과정에 따라 불편감이 있을 수 있으며, 무통을 보장하는 수술은 아닙니다. 장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다.',
  },
  {
    q: '당일 퇴원이 가능한가요?',
    a: '일반적으로 상태에 따라 당일 퇴원을 고려하는 경우도 있다고 알려져 있습니다. 출혈·통증·전신 상태에 따라 관찰이 더 필요할 수 있으며, 개인마다 다를 수 있어 일률적으로 단정하기 어렵습니다. 장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다.',
  },
  {
    q: '기존 절제술과 무엇이 다른가요?',
    a: 'PPH는 자동문합기로 점막을 원형 절제·봉합하는 방식입니다. 수술 시간·통증·회복은 환자마다 달라 일률적으로 비교하기 어렵습니다. 장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다.',
  },
  {
    q: '수술 후 관리는 어떻게 하나요?',
    a: '일반적으로 좌욕·배변·식이·활동 제한 등 안내를 따르는 것이 중요합니다. 불편감·출혈 정도는 개인차가 있을 수 있습니다. 자세한 일반 주의사항은 수술후주의사항 페이지를 참고하시고, 이상 증상이 있으면 의료진과 상담하세요. 장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': articleId(PATH),
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: '2024-09-01',
  dateModified: '2024-09-01',
  author: { '@type': 'Organization', name: SITE_NAME },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: absoluteUrl('/images/logo.png') },
  },
  mainEntityOfPage: absoluteUrl(PATH),
}

export default function PphVsHemorrhoidArticlePage() {
  const targets = [
    '3도 이상 내치핵 (손으로 밀어 넣어야 하는 경우)',
    '4도 치핵 (항상 돌출되어 있는 경우)',
    '직장 점막 탈출증',
    '여러 개의 치핵이 동시에 있는 경우',
    '기존 치핵 수술 후 재발한 경우',
  ]
  const comparisons = [
    { item: '수술 시간', pph: '약 20~30분', old: '약 30~60분' },
    { item: '통증', pph: '상대적으로 적을 수 있음', old: '상대적으로 클 수 있음' },
    { item: '입원 기간', pph: '상태에 따라 당일 퇴원 가능', old: '1~3일 관찰 가능' },
    { item: '회복 기간', pph: '개인차 있음(수일~)', old: '개인차 있음(수주~)' },
  ]

  return (
    <div className="bg-[#f9fafb] min-h-screen pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image src="/images/pages/surgery.webp" alt="PPH 수술과 기존 치핵 수술 비교" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 subpage-hero-scrim-x" />
        <div className="absolute inset-0 subpage-hero-scrim-y" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="subpage-breadcrumb mb-3">
            홈 / <Link href="/magazine">건강매거진</Link> / <strong>PPH 수술 vs 기존 치핵 수술</strong>
          </nav>
          <span className="inline-flex w-fit text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
            건강매거진
          </span>
          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-3 break-keep">
            PPH 수술 vs 기존 치핵 수술, 무엇이 다른가요?
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold break-keep">
            PPH와 기존 치핵 수술의 차이를 비교하는 건강 정보
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 lg:px-8 section-space space-y-6">
        <div className="rounded-2xl bg-[#fff7ed] border border-[#fed7aa] p-4 md:p-5">
          <p className="text-[14px] md:text-[15px] font-bold text-[#9a3412] break-keep">{DISCLAIMER}</p>
        </div>

        <PageToc
          items={[
            { id: 'PPH-수술이란', label: 'PPH 수술이란?' },
            { id: 'PPH-vs-기존-수술-비교', label: 'PPH vs 기존 수술 비교' },
            { id: 'PPH-수술-적응증', label: '일반적인 적응증' },
            { id: '회복-안내', label: '회복에 대한 일반 안내' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="PPH-수술이란">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>💡</span> PPH 수술이란?
          </h2>
          <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0] break-keep">
            <p>
              PPH(Procedure for Prolapse and Hemorrhoids)는 <strong className="text-[#0d7fc4]">특수 자동문합기</strong>를
              이용해 탈출된 치핵 조직 위쪽 점막을 원형으로 절제·봉합하는 수술법입니다.
            </p>
            <p>
              통증이 느껴지는 치상선 아래가 아닌 위쪽에서 진행해 통증이 상대적으로 적은 경우가 많으며, 수술 시간은 약
              20~30분 정도로 알려져 있습니다. 상태에 따라 당일 퇴원을 고려하는 경우도 있으나, 모든 환자에게 동일하게
              적용되지는 않습니다.
            </p>
            <p>
              PPH는 모든 치핵 환자에게 적합한 방법은 아닙니다. 치핵의 일반적인 단계와 치료 방향은{' '}
              <Link href="/anorectal/hemorrhoid" className="text-primary font-bold hover:underline">
                치핵 안내
              </Link>
              를 함께 확인해 주세요. {DISCLAIMER}
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="PPH-vs-기존-수술-비교">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>⭐</span> PPH vs 기존 수술 비교
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-[#f0f7ff]">
                  <th className="p-3 text-left font-bold">구분</th>
                  <th className="p-3 text-center font-bold text-primary">PPH 수술</th>
                  <th className="p-3 text-center font-bold text-[#6b7280]">기존 절제술</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f6]">
                {comparisons.map((row) => (
                  <tr key={row.item}>
                    <td className="p-3 font-semibold text-[#374151]">{row.item}</td>
                    <td className="p-3 text-center font-bold text-primary">{row.pph}</td>
                    <td className="p-3 text-center text-[#6b7280]">{row.old}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-[#6b7280] mt-4 leading-[1.8] break-keep">
            ※ 위 비교는 일반적인 경향을 안내한 것이며, 실제 통증·입원·회복은 개인 상태와 동반 시술에 따라 달라질 수
            있습니다.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="PPH-수술-적응증">
          <h2 className="text-[19px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>✅</span> 일반적으로 검토되는 경우
          </h2>
          <div className="space-y-2">
            {targets.map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-[#f0f7ff]">
                <span className="text-primary font-black shrink-0">✓</span>
                <p className="text-[13px] text-[#374151]">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-[#6b7280] mt-4 leading-[1.8] break-keep">
            적응증에 해당해도 진찰·검사 결과에 따라 다른 치료법이 더 적합할 수 있습니다.{' '}
            <Link href="/anorectal/hemorrhoid" className="text-primary font-bold hover:underline">
              치핵(치질)
            </Link>{' '}
            증상과 단계도 함께 확인해 보세요. {DISCLAIMER}
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]" id="회복-안내">
          <h2 className="text-[19px] lg:text-[21px] font-black text-[#0d1117] mb-5 pb-3 border-b border-[#f0f4f8] flex items-center gap-2">
            <span>🩺</span> 회복에 대한 일반 안내
          </h2>
          <div className="space-y-4 text-[14px] text-[#374151] leading-[2.0] break-keep">
            <p>{DISCLAIMER} 아래 내용은 일반적인 수술 후 관리에 대한 참고 정보입니다.</p>
            <p>
              회복 기간에는 배변·좌욕·활동 관리가 중요합니다. 자세한 일반 주의사항은{' '}
              <Link href="/about/aftercare" className="text-primary font-bold hover:underline">
                수술후주의사항
              </Link>
              을 참고해 주세요.
            </p>
          </div>
        </section>

        <StaticFaq items={faqs} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

        <div className="pt-2">
          <Link href="/magazine" className="text-[14px] font-bold text-primary hover:underline">
            ← 건강매거진 목록
          </Link>
        </div>
      </article>
    </div>
  )
}
