import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import {
  Banner,
  ChecklistPanel,
  MagazineHeroScrim,
  ClinicToc,
  FaqShell,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
  StageTimeline,
} from '@/app/anorectal/_ui'
import { absoluteUrl, articleId, SITE_NAME } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { breadcrumbLd } from '@/lib/seo/jsonld'

const PATH = '/magazine/hemorrhoid'
const TITLE = '치질(치핵), 수술이 꼭 필요할까? 단계별 치료법 완전 정리'
const SHORT_TITLE = '치질 단계별 치료'
const DESCRIPTION =
  '치핵은 정도에 따라 약물 치료부터 수술까지 다양한 방법이 있습니다. 1~4도 분류와 각 단계에 맞는 치료법을 자세히 알아봅니다.'
const IMAGE = '/images/colorectal-center-hero.webp'
const DATE_DISPLAY = '2025.01'
const DATE_ISO = '2025-01-01'

export const metadata: Metadata = buildPageMetadata({
  path: PATH,
  title: `${TITLE} | 장튼튼항외과의원`,
  description: DESCRIPTION,
  type: 'article',
  ogImage: IMAGE,
  keywords: [
    '치질',
    '치핵',
    '치질 수술',
    '치핵 단계',
    '치질 치료',
    '건강매거진',
    '장튼튼항외과의원',
  ],
})

const faqs = [
  {
    q: '치질이 있으면 무조건 수술해야 하나요?',
    a: '아닙니다. 모든 치핵에 수술이 필요한 것은 아닙니다. 출혈만 있거나 돌출이 심하지 않은 초기에는 배변 습관 개선, 좌욕, 약물 등 보존적 치료를 먼저 고려하는 경우가 많습니다. 수술·시술 여부는 단계, 증상 정도, 일상 지장, 진찰 소견을 종합해 개인별로 결정합니다.',
  },
  {
    q: '항문에서 피가 나면 치핵이라고 단정해도 되나요?',
    a: '선홍색 출혈은 치핵에서 흔하지만, 치열이나 대장·직장 질환에서도 나타날 수 있습니다. 출혈량·통증·잔변감은 사람마다 다르게 느껴지므로 증상만으로 원인을 단정하기 어렵습니다. 반복 출혈, 어지럼, 피로가 동반되면 항문 진찰과 필요 시 대장내시경 등 검사를 상담하는 것이 안전합니다.',
  },
  {
    q: '1도·2도 치핵은 어떻게 관리하나요?',
    a: '일반적으로 식이섬유·수분 섭취, 과도한 힘주기 줄이기, 화장실에 오래 앉지 않기, 좌욕, 증상 완화 약물 등 보존적 방법을 먼저 시도합니다. 개인 상태와 출혈 양상에 따라 외래 시술을 검토할 수도 있습니다. 같은 단계라도 증상이 다르면 안내가 달라질 수 있어 진찰 후 방향을 잡는 것이 좋습니다.',
  },
  {
    q: '3도·4도에서는 반드시 수술인가요?',
    a: '3도 이상에서는 돌출·불편·출혈이 커져 수술적 치료를 검토하는 경우가 많습니다. 다만 ‘반드시’라고 일률적으로 말할 수는 없습니다. 동반 질환, 증상 빈도, 생활 지장, 진찰 소견에 따라 시술·수술 종류와 시기가 달라질 수 있습니다. 감돈·심한 통증이 있으면 진료를 미루지 않는 편이 안전합니다.',
  },
  {
    q: '치료 후에도 치핵이 다시 생길 수 있나요?',
    a: '가능합니다. 변비, 과도한 힘주기, 장시간 좌위, 화장실에 오래 앉아 있는 습관이 이어지면 증상이 다시 나타날 수 있습니다. 치료 방법과 개인 상태에 따라 경과가 다르므로, 출혈·통증·돌출이 재발하면 경과를 확인해 주세요. 생활관리와 배변 습관 교정이 재발 예방에 도움이 될 수 있습니다.',
  },
]

const related = [
  { href: '/magazine/pph-vs-hemorrhoid-surgery', title: 'PPH vs 기존 치핵 수술', desc: '수술 방식 차이를 비교한 건강 정보' },
  { href: '/anorectal/hemorrhoid', title: '치질(치핵) 진료안내', desc: '단계별 증상과 보존·시술·수술 안내' },
  { href: '/magazine/constipation', title: '만성 변비의 합병증', desc: '변비와 치핵이 함께 나타날 때 확인할 점' },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': articleId(PATH),
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: DATE_ISO,
  dateModified: DATE_ISO,
  author: { '@type': 'Organization', name: SITE_NAME },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: absoluteUrl('/images/logo.png') },
  },
  mainEntityOfPage: absoluteUrl(PATH),
  image: [absoluteUrl(IMAGE)],
  articleSection: '건강매거진',
  keywords: '치질, 치핵, 치질 수술, 치핵 단계, 치질 치료',
}

const breadcrumbJsonLd = breadcrumbLd([
  { name: '홈', path: '/' },
  { name: '건강매거진', path: '/magazine' },
  { name: TITLE, path: PATH },
])

export default function MagazineHemorrhoidArticlePage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="relative overflow-hidden h-[240px] md:h-[320px] lg:h-[400px]">
        <Image src={IMAGE} alt="치핵 해부 모형으로 단계별 치료를 설명하는 장면" fill className="object-cover object-[42%_center] lg:object-[38%_center]" sizes="100vw" priority />
        <MagazineHeroScrim />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-6 md:pb-8">
          <nav className="subpage-breadcrumb mb-2 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:underline">
              홈
            </Link>
            <span>/</span>
            <Link href="/magazine" className="hover:underline">
              건강매거진
            </Link>
            <span>/</span>
            <strong>{SHORT_TITLE}</strong>
          </nav>
          <span className="inline-flex w-fit text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
            건강매거진
          </span>
          <h1 className="text-[26px] md:text-[32px] lg:text-[38px] font-extrabold text-[#0d1117] mb-1.5 break-keep leading-[1.25]">
            {TITLE}
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#555] font-medium break-keep leading-snug">
            {DESCRIPTION}
          </p>
          <p className="mt-2 text-[12px] text-[#64748b]">
            <time dateTime={DATE_ISO}>{DATE_DISPLAY}</time>
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-7 md:pb-10 space-y-7 md:space-y-8">
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                일상에서 말하는 ‘치질’은 대개 치핵을 가리킵니다. 항문 혈관·점막 조직이 늘어나거나 밀려 나오면서
                출혈, 돌출, 불편감이 나타날 수 있습니다. 다만 비슷한 증상은 치열·치루·대장 질환에서도 생길 수 있어
                자가진단만으로 원인을 단정하기 어렵습니다.
              </p>
              <p>
                치핵은 보통 1~4도로 구분해 설명합니다. 초기에는 생활관리와 약물 등 보존적 치료로 증상을 조절하는
                경우가 많고, 돌출이 심하거나 반복 출혈·감돈이 있으면 시술·수술을 검토할 수 있습니다. 같은 단계라도
                개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.
              </p>
              <p>
                이 글은 일반적인 건강 정보이며, 개인의 진단·치료를 대신하지 않습니다. 증상이 지속되거나 경고
                신호가 있으면 의료진의 진찰을 받아 확인하시기 바랍니다.
              </p>
            </Prose>
          </SoftCard>
        </section>

        <ClinicToc
          items={[
            { id: 'definition', label: '치핵이란 무엇인가요?' },
            { id: 'causes', label: '치핵이 생기는 흔한 요인' },
            { id: 'stages', label: '1~4도, 단계별로 무엇이 다른가요?' },
            { id: 'distinguish', label: '치열·대장질환과 어떻게 구분하나요?' },
            { id: 'when-to-see', label: '언제 진료를 받는 것이 좋을까요?' },
            { id: 'treatment', label: '단계별 치료 방향' },
            { id: 'lifestyle', label: '일상에서 도움이 되는 관리' },
            { id: 'myths', label: '자주 생기는 오해' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section id="definition" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>치핵이란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              치핵은 항문관 안의 혈관 쿠션 조직이 커지거나 지지 구조가 느슨해지면서 출혈·돌출·불편감이 생기는
              상태를 말합니다. 위치에 따라 내치핵(치상선 위), 외치핵(치상선 아래), 혼합치핵으로 나누어 설명하는
              경우가 많습니다.
            </p>
            <p>
              내치핵은 배변 시 선홍색 출혈이나 점막 돌출이 비교적 흔하고, 외치핵은 항문 입구 쪽의 통증·부종·혈전을
              동반할 수 있습니다. 증상이 겹치거나 다른 항문 질환과 함께 나타나는 경우도 있어, 겉으로 보이는
              모양만으로 진단명을 확정하기는 어렵습니다.
            </p>
            <p>
              자세한 진료 안내와 단계별 설명은{' '}
              <Link href="/anorectal/hemorrhoid" className="text-primary font-bold hover:underline">
                치질(치핵) 진료안내
              </Link>
              페이지에서도 확인할 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="causes" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>치핵이 생기는 흔한 요인</SectionTitle>
          <Prose>
            <p>
              치핵은 한 가지 원인만으로 생기기보다, 배변 습관·생활 패턴·체질적 요인이 겹치며 증상이 드러나는
              경우가 많습니다. 아래는 진료에서 자주 확인하는 관련 요인입니다.
            </p>
          </Prose>
          <ChecklistPanel
            tone="peach"
            title="흔히 연관되는 요인"
            icon={ExclamationTriangleIcon}
            items={[
              '딱딱한 변과 과도한 힘주기',
              '화장실에 오래 앉아 스마트폰을 보는 습관',
              '장시간 앉아 있는 업무·운전',
              '만성 변비 또는 잦은 설사',
              '임신·출산으로 인한 골반·항문 압력 증가',
              '비만, 무거운 물건을 자주 드는 활동',
            ]}
          />
          <Prose>
            <p>
              요인이 있다고 해서 반드시 치핵이 진행되는 것은 아니며, 반대로 뚜렷한 생활 요인이 없어도 증상이
              나타날 수 있습니다. 개인차와 동반 질환을 함께 보는 것이 중요합니다.
            </p>
          </Prose>
        </section>

        <section id="stages" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>1~4도, 단계별로 무엇이 다른가요?</SectionTitle>
          <Prose>
            <p>
              내치핵은 돌출 정도와 환납(밀어 넣는) 여부를 기준으로 1~4도로 나누어 설명하는 경우가 많습니다.
              단계는 치료 방향을 잡는 참고 기준이며, 같은 도라도 출혈량·통증·일상 불편도는 사람마다 다릅니다.
            </p>
          </Prose>
          <StageTimeline
            items={[
              {
                badge: '1도',
                title: '출혈 위주, 돌출은 없음',
                desc: '배변 시 선홍색 출혈이 있을 수 있으나 항문 밖으로 돌출되지는 않는 단계로 설명합니다. 생활관리와 약물 등 보존적 치료를 먼저 고려하는 경우가 많습니다.',
                tone: 'mint',
              },
              {
                badge: '2도',
                title: '배변 시 돌출 후 자연 복귀',
                desc: '배변 때 돌출되었다가 저절로 들어가는 양상입니다. 보존 치료로 경과를 보거나, 상태에 따라 외래에서 가능한 시술을 상담할 수 있습니다.',
                tone: 'yellow',
              },
              {
                badge: '3도',
                title: '손으로 밀어 넣어야 복귀',
                desc: '돌출된 조직이 저절로 들어가지 않아 손으로 밀어야 하는 단계입니다. 불편이 크면 수술적 치료를 검토하는 경우가 있습니다.',
                tone: 'peach',
              },
              {
                badge: '4도',
                title: '항상 돌출 · 환납이 어려움',
                desc: '항상 바깥에 나와 있거나 밀어도 잘 들어가지 않는 상태입니다. 감돈·통증·위생 문제가 동반될 수 있어 수술적 치료를 신중히 상담합니다.',
                tone: 'coral',
              },
            ]}
          />
          <Banner tone="blue">
            단계 분류는 일반적인 설명 체계입니다. 실제 치료 선택은 진찰 소견, 증상 빈도, 동반 질환, 생활 지장을
            종합해 개인별로 달라질 수 있습니다.
          </Banner>
        </section>

        <section id="distinguish" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>치열·대장질환과 어떻게 구분하나요?</SectionTitle>
          <Prose>
            <p>
              ‘피가 난다’, ‘아프다’, ‘뭔가 만져진다’는 증상만으로는 질환을 구별하기 어렵습니다. 치열은 배변 시
              칼로 베는 듯한 통증과 소량 출혈이 특징적인 경우가 많고, 치핵은 출혈·돌출·잔변감이 두드러질 수
              있습니다. 그러나 두 질환이 함께 있는 경우도 있습니다.
            </p>
            <p>
              특히 검붉은 변, 점액변, 체중 감소, 빈혈 의심 증상, 배변 습관의 뚜렷한 변화, 가족력 등이 있으면
              항문 질환 외에도 대장·직장 질환 가능성을 함께 살펴야 합니다. 필요 시 대장내시경 등 추가 검사를
              상담할 수 있습니다.
            </p>
            <p>
              감별이 필요한 통증·출혈이 있다면{' '}
              <Link href="/anorectal/fissure" className="text-primary font-bold hover:underline">
                치열
              </Link>
              ·
              <Link href="/endoscopy/colon" className="text-primary font-bold hover:underline">
                대장내시경
              </Link>{' '}
              안내도 함께 참고해 주세요.
            </p>
          </Prose>
        </section>

        <section id="when-to-see" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>언제 진료를 받는 것이 좋을까요?</SectionTitle>
          <Prose>
            <p>
              가벼운 출혈이 한두 번 있었다고 해서 모두 응급 상황은 아닙니다. 다만 아래와 같은 경우에는 자가
              판단보다 진찰을 받는 편이 안전합니다.
            </p>
          </Prose>
          <ChecklistPanel
            tone="coral"
            title="진료를 미루지 않는 편이 나은 경우"
            icon={ExclamationTriangleIcon}
            items={[
              '출혈이 반복되거나 양이 늘어나는 경우',
              '어지럼·심한 피로 등 빈혈이 의심되는 경우',
              '돌출된 조직이 들어가지 않고 통증이 심한 경우(감돈 의심)',
              '항문 부종·발열·심한 통증으로 앉기 어려운 경우',
              '배변 습관이 이전과 다르게 지속되는 경우',
              '검붉은 변, 체중 감소, 가족력이 함께 있는 경우',
            ]}
          />
          <Prose>
            <p>
              증상 기록(시작 시기, 출혈 색깔, 돌출 여부, 통증 정도, 배변 형태)을 적어 두면 진료 시 상태 파악에
              도움이 됩니다. 최종 진단과 치료 계획은 직접 진찰 결과에 따릅니다.
            </p>
          </Prose>
        </section>

        <section id="treatment" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>단계별 치료 방향</SectionTitle>
          <Prose>
            <p>
              치료 목표는 ‘무조건 수술’이 아니라, 증상과 단계에 맞는 부담이 적은 방법부터 검토하는 것입니다.
              아래는 일반적인 방향이며, 실제 적용 여부는 진찰 후 결정됩니다.
            </p>
            <p>
              <strong className="text-[#0d1117]">보존적 치료</strong> — 식이섬유·수분 조절, 배변 습관 교정, 좌욕,
              증상 완화 약물·연고 등을 포함합니다. 1~2도에서 먼저 시도하는 경우가 많습니다.
            </p>
            <p>
              <strong className="text-[#0d1117]">외래 시술</strong> — 상태에 따라 결찰술 등 외래에서 시행하는
              방법을 상담할 수 있습니다. 모든 치핵에 동일한 시술이 적합한 것은 아니며, 외치핵·혈전·염증 상태에
              따라 선택이 달라집니다.
            </p>
            <p>
              <strong className="text-[#0d1117]">수술적 치료</strong> — 3~4도, 반복 출혈, 감돈, 일상 지장이 큰
              경우 등에서 검토합니다. 수술 방법·범위·회복 과정은 병변 위치와 개인 상태에 따라 다르며, 회복
              기간을 일률적으로 단정하기 어렵습니다.
            </p>
          </Prose>
          <Banner tone="yellow" icon={ExclamationTriangleIcon}>
            치료 효과와 회복 속도는 개인마다 다릅니다. 특정 시술·수술이 모든 환자에게 적합하다고 보장할 수
            없으며, 온라인 정보만으로 수술 여부를 결정하지 않는 것이 좋습니다.
          </Banner>
          <Prose>
            <p>
              PPH와 기존 절제술의 일반적인 차이는{' '}
              <Link href="/magazine/pph-vs-hemorrhoid-surgery" className="text-primary font-bold hover:underline">
                PPH 수술 vs 기존 치핵 수술
              </Link>{' '}
              글에서 확인할 수 있습니다. 장튼튼항외과의원에서는 PPH 수술을 시행하지 않습니다.
            </p>
          </Prose>
        </section>

        <section id="lifestyle" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>일상에서 도움이 되는 관리</SectionTitle>
          <Prose>
            <p>
              생활관리는 치료의 보조이자, 증상이 다시 커지지 않도록 돕는 기본입니다. 다만 생활관리만으로 모든
              치핵이 사라지는 것은 아니며, 이미 돌출이 심한 상태에서는 진찰이 함께 필요합니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              title="도움이 될 수 있는 습관"
              icon={CheckCircleIcon}
              items={[
                '식이섬유와 수분을 무리 없이 꾸준히 섭취',
                '변이 마려우면 오래 참지 않기',
                '배변 시 과도한 힘주기 줄이기',
                '화장실에 5~10분 이상 앉아 있지 않기',
                '미온수 좌욕으로 불편감 완화 시도',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              title="피하면 좋은 습관"
              icon={ExclamationTriangleIcon}
              items={[
                '변비가 심한데 자극적인 하제를 장기간 자가 복용',
                '장시간 앉아 있는 자세를 전혀 바꾸지 않기',
                '출혈이 있어도 원인을 확인하지 않고 방치',
                '통증·부종이 심한데 무리한 운동·음주 지속',
              ]}
            />
          </div>
        </section>

        <section id="myths" className="scroll-mt-20 space-y-3">
          <SectionTitle n={8}>자주 생기는 오해</SectionTitle>
          <SoftCard tone="lavender">
            <Prose>
              <p>
                <strong className="text-[#0d1117]">“피가 나면 무조건 대장암이다”</strong> — 선홍색 출혈은 치핵·치열
                등에서도 흔합니다. 그렇다고 대장 질환을 완전히 배제할 수 있는 것도 아니므로, 반복·동반 증상이
                있으면 진찰로 감별하는 것이 안전합니다.
              </p>
              <p>
                <strong className="text-[#0d1117]">“좌욕만 하면 다 낫는다”</strong> — 좌욕은 불편감 완화에 도움이
                될 수 있으나, 이미 늘어난 조직이나 심한 돌출을 되돌리는 근본 치료라고 보기 어렵습니다.
              </p>
              <p>
                <strong className="text-[#0d1117]">“수술은 항상 매우 아프다 / 반드시 입원한다”</strong> — 통증·입원
                여부는 수술 방법, 병변 범위, 개인 상태에 따라 다릅니다. 일률적인 수치나 기간으로 단정할 수
                없습니다.
              </p>
              <p>
                <strong className="text-[#0d1117]">“한 번 수술하면 평생 안 생긴다”</strong> — 치료 후에도 배변·생활
                습관에 따라 증상이 다시 나타날 수 있습니다. 재발 가능성을 낮추려면 원인 습관 교정이 중요합니다.
              </p>
            </Prose>
          </SoftCard>
        </section>

        <FaqShell>
          <StaticFaq items={faqs} hideHeading />
        </FaqShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

        <section className="space-y-3">
          <SectionTitle>관련 콘텐츠</SectionTitle>
          <RelatedCarousel items={related} />
        </section>

        <div
          className="rounded-[16px] p-5 md:p-6 text-center"
          style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}
        >
          <p className="text-white font-bold text-[16px] mb-2 break-keep">치핵 증상이 걱정되시나요?</p>
          <p className="text-white/90 text-[13px] leading-[1.85] break-keep">
            단계와 상태에 맞는 치료 방향을 상담으로 안내합니다. 개인별 진찰이 필요합니다.
          </p>
        </div>

        <div className="pt-1">
          <Link href="/magazine" className="text-[14px] font-bold text-primary hover:underline">
            ← 건강매거진 목록
          </Link>
        </div>
      </article>
    </div>
  )
}
