import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import {
  Banner,
  ChecklistPanel,
  MagazineHeroScrim,
  ClinicToc,
  FaqShell,
  pastel,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
} from '@/app/anorectal/_ui'
import { absoluteUrl, articleId, SITE_NAME } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { breadcrumbLd } from '@/lib/seo/jsonld'

const PATH = '/magazine/lipoma'
const TITLE = '등에 혹이 생겼어요 — 지방종 vs 피지낭종, 차이점과 치료법'
const DESCRIPTION =
  '등에 만져지는 혹이 지방종인지 피지낭종(표피낭종)인지 구별하는 포인트와, 진료·제거가 필요한 경우·치료 방향을 정리한 건강 정보입니다.'
const IMAGE = '/images/skin-tumor-center.webp'
const DATE_DISPLAY = '2024.10'
const DATE_ISO = '2024-10-01'
const DISCLAIMER =
  '이 글은 일반적인 건강정보이며 개인의 진단·치료를 대신하지 않습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.'

export const metadata: Metadata = buildPageMetadata({
  path: PATH,
  title: `${TITLE} | 장튼튼항외과의원`,
  description: DESCRIPTION,
  type: 'article',
  ogImage: IMAGE,
  keywords: ['지방종', '피지낭종', '표피낭종', '등 혹', '건강매거진', '장튼튼항외과의원'],
})

const faqs = [
  {
    q: '등에 혹이 있으면 무조건 지방종인가요?',
    a: '아닙니다. 지방종 외에도 피지낭종(표피낭종), 림프절, 다른 피부·연부조직 병변일 수 있습니다. 감촉·위치·중심 개구부 유무로 추정하는 경우는 많지만 겉모습만으로 단정하기는 어렵습니다. 변화가 있거나 불안하면 진료로 확인하는 편이 안전합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '지방종과 피지낭종은 치료법이 같나요?',
    a: '둘 다 제거를 고려할 수 있지만, 주머니(낭) 벽까지 제거해야 하는지 등 수술적 포인트가 다를 수 있습니다. 감염·염증이 있는 피지낭종은 시기를 나눠 접근하기도 합니다. 병변 종류에 따라 계획이 달라지므로 구분 후 상담하는 것이 좋습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '작으면 그냥 두어도 되나요?',
    a: '통증이 없고 크기가 안정적이면 경과 관찰이 가능한 경우도 있습니다. 다만 빠르게 커지거나, 통증·발적·열감이 생기거나, 눌려서 불편하면 진료가 필요할 수 있습니다. ‘작다’는 이유만으로 모든 병변을 무시하기는 어렵습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '집에서 짜거나 바늘로 뚫어도 되나요?',
    a: '권하지 않습니다. 특히 피지낭종은 내용물이 나와도 낭벽이 남으면 재발할 수 있고, 감염·흉터가 커질 위험이 있습니다. 소독·연고만으로 원인을 없앤다고 단정할 수도 없습니다. 변화가 있으면 의료진과 상의하세요. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '제거하면 흉터가 전혀 없나요?',
    a: '작은 절개로 진행해도 부위·크기·개인 회복에 따라 흔적이 남을 수 있습니다. 흉터가 전혀 없다고 보장하기는 어렵습니다. 실밥 제거와 상처 관리 안내에 따라 회복에 도움이 될 수 있으며, 궁금한 점은 진료에서 확인해 주세요. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

const related = [
  { href: '/skin/lipoma', title: '지방종', desc: '부드러운 피하 혹의 진단·절제 안내' },
  { href: '/skin/cyst', title: '피지낭종(표피낭종)', desc: '주머니형 병변과 감염 시 주의점' },
  { href: '/skin/fibroma', title: '연성섬유종(쥐젖)', desc: '마찰 부위의 작은 돌기' },
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
  keywords: '지방종, 피지낭종, 표피낭종, 등 혹',
}

const breadcrumbJsonLd = breadcrumbLd([
  { name: '홈', path: '/' },
  { name: '건강매거진', path: '/magazine' },
  { name: TITLE, path: PATH },
])

export default function LipomaVsCystMagazinePage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="relative overflow-hidden h-[240px] md:h-[320px] lg:h-[400px]">
        <Image src={IMAGE} alt="피부 아래 혹·지방종과 피지낭종 감별 안내" fill className="object-cover object-[52%_45%] lg:object-[48%_42%]" sizes="100vw" priority />
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
            <strong>지방종 vs 피지낭종</strong>
          </nav>
          <span className="inline-flex w-fit text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
            건강매거진
          </span>
          <h1 className="text-[26px] md:text-[34px] lg:text-[40px] font-extrabold text-[#0d1117] mb-1.5 break-keep leading-[1.25]">
            {TITLE}
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#555] font-medium break-keep">
            피하 혹의 종류를 구분하고, 치료 방향을 이해하는 건강 정보
          </p>
          <p className="mt-2 text-[12px] text-[#64748b]">
            <time dateTime={DATE_ISO}>{DATE_DISPLAY}</time>
            <span className="mx-1.5">·</span>
            읽기 약 3분
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-8 md:pb-12 space-y-7 md:space-y-8">
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                등에 만져지는 혹은 지방종일 수도 있고, 피지낭종(표피낭종)일 수도 있습니다. 둘은 만져지는 감촉과
                중심부 특징, 감염 양상이 다른 경우가 많지만, 겉으로만 보면 구분이 애매할 수 있습니다.
              </p>
              <p>
                지방종은 지방 세포가 뭉친 부드러운 양성 종양으로 보는 경우가 많고, 피지낭종은 피지·각질이 쌓인
                주머니형 병변입니다. 치료 시기와 절제 방식도 달라질 수 있어, 구분 후{' '}
                <Link href="/skin/lipoma" className="text-primary font-semibold underline-offset-2 hover:underline">
                  지방종
                </Link>
                ·
                <Link href="/skin/cyst" className="text-primary font-semibold underline-offset-2 hover:underline">
                  피지낭종
                </Link>{' '}
                안내를 함께 확인하는 것이 도움이 됩니다.
              </p>
              <p className="text-[13px] text-[#64748b]">{DISCLAIMER}</p>
            </Prose>
          </SoftCard>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '피하 혹이란?' },
            { id: 's2', label: '왜 생기는가요?' },
            { id: 's3', label: '지방종과 피지낭종 구별' },
            { id: 's4', label: '진료가 필요한 경우' },
            { id: 's5', label: '진찰·치료 방향' },
            { id: 's6', label: '생활·관리 포인트' },
            { id: 's7', label: '흔한 오해' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>피하 혹이란?</SectionTitle>
          <Prose>
            <p>
              피부 아래에서 만져지는 덩어리를 흔히 ‘혹’이라고 부릅니다. 등·어깨·목·팔처럼 지방층이 있는 부위에서
              발견되는 경우가 많고, 통증 없이 우연히 손으로 만져져 발견되기도 합니다.
            </p>
            <p>
              피하 혹은 한 종류가 아닙니다. 지방종, 피지낭종, 그 밖의 양성·드물게는 다른 성격의 병변까지 포함될 수
              있어, 위치와 변화 양상을 함께 보는 것이 중요합니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>왜 생기는가요?</SectionTitle>
          <Prose>
            <p>
              지방종은 지방 조직이 국소적으로 늘어난 형태로 설명되는 경우가 많고, 피지낭종은 모낭·피지선 쪽 통로가
              막히며 주머니가 생기는 과정과 관련되는 경우가 있습니다. 마찰, 피부 손상, 체질적 요인 등이 겹칠 수
              있지만, 한 가지 원인으로 모두 설명되지는 않습니다.
            </p>
            <p>
              여러 개가 생기는 경우도 있어, 개수·위치·성장 속도에 따라 관찰과 치료 우선순위가 달라질 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>지방종과 피지낭종 구별</SectionTitle>
          <Prose>
            <p>
              아래는 일반적인 경향을 정리한 것이며, 실제 병변은 겹쳐 보이거나 예외가 있을 수 있습니다. 자가진단으로
              확정하지 마세요.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <SoftCard tone="blue">
              <p className="text-[13px] font-semibold mb-2" style={{ color: pastel.blue.text }}>
                지방종으로 의심되는 경우
              </p>
              <ul className="space-y-1.5 text-[13px] text-[#374151] leading-[1.7] break-keep">
                <li>· 부드럽고 말랑한 감촉</li>
                <li>· 손으로 밀면 잘 움직이는 편</li>
                <li>· 대부분 통증 없음</li>
                <li>· 커지면 압박감·불편이 생길 수 있음</li>
              </ul>
              <p className="mt-3 text-[12.5px]">
                <Link href="/skin/lipoma" className="text-primary font-semibold underline-offset-2 hover:underline">
                  지방종 진료 안내 →
                </Link>
              </p>
            </SoftCard>
            <SoftCard tone="peach">
              <p className="text-[13px] font-semibold mb-2" style={{ color: pastel.peach.text }}>
                피지낭종으로 의심되는 경우
              </p>
              <ul className="space-y-1.5 text-[13px] text-[#374151] leading-[1.7] break-keep">
                <li>· 비교적 단단한 주머니형 병변</li>
                <li>· 중앙에 작은 점·개구부가 보이기도 함</li>
                <li>· 내용물이 나오거나 냄새가 날 수 있음</li>
                <li>· 감염되면 통증·발적·열감이 생길 수 있음</li>
              </ul>
              <p className="mt-3 text-[12.5px]">
                <Link href="/skin/cyst" className="text-primary font-semibold underline-offset-2 hover:underline">
                  피지낭종 진료 안내 →
                </Link>
              </p>
            </SoftCard>
          </div>
          <Banner tone="lavender" icon={InformationCircleIcon}>
            지방종과 피지낭종은 치료 포인트가 다를 수 있습니다. 겉모습만으로 구분이 어렵다면 진찰·검사가 필요할 수
            있습니다.
          </Banner>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>진료가 필요한 경우</SectionTitle>
          <ChecklistPanel
            tone="coral"
            icon={ExclamationTriangleIcon}
            title="확인이 권장되는 상황"
            items={[
              '크기가 빠르게 커지는 경우',
              '통증·발적·열감·고름이 생기는 경우',
              '눌리거나 옷에 걸려 일상 불편이 큰 경우',
              '모양이 이전과 달라지거나 딱딱해진 경우',
              '여러 개가 생기며 불안이 큰 경우',
            ]}
          />
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>진찰·치료 방향</SectionTitle>
          <Prose>
            <p>
              진료에서는 위치·크기·감촉·피부 변화·감염 여부를 확인합니다. 필요하면 초음파 등 검사로 깊이와 성상을
              보는 경우도 있으며, 모든 환자에게 같은 검사를 하지는 않습니다.
            </p>
            <p>
              지방종은 국소마취 후 절제하는 방법을 주로 검토하고, 피지낭종은 낭벽을 함께 제거하는 것이 재발 예방에
              중요할 수 있습니다. 감염이 심한 시기에는 배농·염증 조절 후 제거 시기를 나누기도 합니다. 당일 가능
              여부와 흉터 정도는 개인·부위·크기에 따라 달라질 수 있습니다.
            </p>
            <p>
              자세한 내용은{' '}
              <Link href="/skin/lipoma" className="text-primary font-semibold underline-offset-2 hover:underline">
                지방종
              </Link>
              과{' '}
              <Link href="/skin/cyst" className="text-primary font-semibold underline-offset-2 hover:underline">
                피지낭종(표피낭종)
              </Link>{' '}
              페이지에서 확인할 수 있습니다.
            </p>
          </Prose>
          <Banner tone="blue" icon={InformationCircleIcon}>
            시술 결과·회복·흉터에 대해 특정 수치나 완치를 보장하지 않습니다. 개인 상태에 따라 계획이 달라질 수
            있습니다.
          </Banner>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>생활·관리 포인트</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              icon={CheckCircleIcon}
              title="도움이 될 수 있는 습관"
              items={[
                '크기·통증·피부색 변화를 간단히 기록하기',
                '마찰이 심한 부위는 옷·가방 압박을 줄여 보기',
                '감염 징후가 있으면 빨리 진료 예약하기',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="하지 않는 편이 좋은 것"
              items={[
                '집에서 짜거나 바늘로 뚫기',
                '검증되지 않은 연고·민간요법만으로 치료하려 하기',
                '빠르게 커지는데도 오래 지켜보기만 하기',
              ]}
            />
          </div>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>흔한 오해</SectionTitle>
          <Prose>
            <p>
              ‘만지면 커진다’, ‘무조건 암이다’처럼 단정하는 말은 근거가 부족한 경우가 많습니다. 반대로 ‘양성일
              테니 괜찮다’며 변화가 뚜렷한데도 방치하는 것도 바람직하지 않습니다.
            </p>
            <p>
              일반적인 지방종은 양성인 경우가 많지만, 빠르게 커지거나 통증이 생기면 다른 병변을 감별해야 할 수
              있습니다. 필요하면 조직 검사로 확인합니다. {DISCLAIMER}
            </p>
          </Prose>
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">등에 혹이 만져지나요?</p>
          <p className="text-white/90 text-[13px] leading-[1.85] break-keep">
            지방종과 피지낭종을 구분해 상태에 맞는 치료 방향을 상담할 수 있습니다.
            <br />
            피지낭종이 의심되면{' '}
            <Link href="/skin/cyst" className="underline font-semibold text-white">
              피지낭종 안내
            </Link>
            도 함께 확인해 보세요.
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
