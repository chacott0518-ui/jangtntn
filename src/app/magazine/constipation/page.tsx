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

const PATH = '/magazine/constipation'
const TITLE = '변비가 지속되면 왜 위험한가요? 만성 변비의 합병증'
const DESCRIPTION =
  '만성 변비가 이어질 때 생길 수 있는 치핵·치열·분변 매복 등 합병증과, 진료가 필요한 신호·생활 관리 포인트를 정리한 건강 정보입니다.'
const IMAGE = '/images/tour/02-waiting-area.webp'
const DATE_DISPLAY = '2024.11'
const DATE_ISO = '2024-11-01'
const DISCLAIMER =
  '이 글은 일반적인 건강정보이며 개인의 진단·치료를 대신하지 않습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.'

export const metadata: Metadata = buildPageMetadata({
  path: PATH,
  title: `${TITLE} | 장튼튼항외과의원`,
  description: DESCRIPTION,
  type: 'article',
  ogImage: IMAGE,
  keywords: ['만성 변비', '변비 합병증', '치핵', '치열', '건강매거진', '장튼튼항외과의원'],
})

const faqs = [
  {
    q: '며칠 동안 변을 못 보면 바로 위험한가요?',
    a: '며칠 배변이 없어도 모든 사람에게 같은 의미는 아닙니다. 평소 리듬, 복통·팽만, 구토, 혈변 동반 여부에 따라 긴급도가 달라질 수 있습니다. 갑작스러운 심한 통증이나 가스·변이 전혀 나오지 않으면 빨리 확인이 필요할 수 있습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '만성 변비는 약만 계속 먹으면 되나요?',
    a: '완하제는 증상 완화에 도움이 될 수 있지만, 원인·생활습관·동반 질환을 함께 보지 않으면 장기적으로 충분하지 않을 수 있습니다. 약 종류와 용량에 대한 반응도 개인차가 있습니다. 임의로 용량을 늘리기보다 증상 패턴을 기록해 진료에서 상의하는 편이 안전합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '변비가 치질·치열로 이어질 수 있나요?',
    a: '딱딱한 변과 과도한 힘주기는 치핵·치열을 악화시키는 흔한 요인으로 알려져 있습니다. 반대로 항문 통증 때문에 배변을 참으면 변비가 더 심해질 수도 있습니다. 관계가 있다고 해서 모든 변비 환자에게 같은 합병증이 생긴다고 단정할 수는 없습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '대장내시경은 언제 검토하나요?',
    a: '모든 변비에 바로 필요한 검사는 아닙니다. 연령, 혈변, 체중 감소, 빈혈 의심, 가족력, 증상 기간 등을 종합해 필요성을 판단합니다. 검사 범위와 시기는 개인마다 달라질 수 있어 일률적으로 말하기 어렵습니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
  {
    q: '식이섬유를 많이 먹으면 변비가 해결되나요?',
    a: '식이섬유와 수분 섭취는 많은 분에게 도움이 될 수 있지만, 갑자기 많이 늘리면 팽만·가스가 커질 수 있습니다. 원인에 따라 섬유만으로는 부족하거나, 오히려 불편이 커지는 경우도 있습니다. 점진적으로 조절하며 반응을 보는 편이 안전합니다. 같은 증상이라도 개인별 상태와 경과가 달라 진찰 후 맞춤 안내가 필요합니다.',
  },
]

const related = [
  { href: '/magazine/alternating-constipation-and-diarrhea', title: '변비와 설사가 번갈아 잦아진다면?', desc: '배변 습관이 반복적으로 바뀔 때' },
  { href: '/magazine/colon', title: '대장내시경 전 장 정결', desc: '검사 전 장 정결을 덜 힘들게 하는 방법' },
  { href: '/anorectal/constipation', title: '변비·설사 진료', desc: '배변 장애 원인 평가와 치료 방향' },
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
  keywords: '만성 변비, 변비 합병증, 치핵, 치열',
}

const breadcrumbJsonLd = breadcrumbLd([
  { name: '홈', path: '/' },
  { name: '건강매거진', path: '/magazine' },
  { name: TITLE, path: PATH },
])

export default function ChronicConstipationMagazinePage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="relative overflow-hidden h-[240px] md:h-[320px] lg:h-[400px]">
        <Image src={IMAGE} alt="만성 변비로 진료를 위해 방문하는 클리닉 대기 공간" fill className="object-cover object-[55%_center] lg:object-[50%_center]" sizes="100vw" priority />
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
            <strong>만성 변비</strong>
          </nav>
          <span className="inline-flex w-fit text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
            건강매거진
          </span>
          <h1 className="text-[26px] md:text-[34px] lg:text-[40px] font-extrabold text-[#0d1117] mb-1.5 break-keep leading-[1.25]">
            {TITLE}
          </h1>
          <p className="text-[13px] md:text-[15px] text-[#555] font-medium break-keep">
            불편한 증상으로만 넘기기 쉬운 변비, 오래갈 때 확인해야 할 점
          </p>
          <p className="mt-2 text-[12px] text-[#64748b]">
            <time dateTime={DATE_ISO}>{DATE_DISPLAY}</time>
            <span className="mx-1.5">·</span>
            읽기 약 4분
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-8 md:pb-12 space-y-7 md:space-y-8">
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                만성 변비는 배변이 드물거나, 딱딱한 변·과도한 힘주기·잔변감이 반복되는 상태를 말합니다. 단순한 불편을
                넘어 치핵·치열·분변 매복 등으로 이어질 수 있어, 원인과 동반 증상을 함께 보는 것이 중요합니다.
              </p>
              <p>
                모든 변비에 같은 치료가 맞는 것은 아니며, 생활습관·약물·전신 질환·항문 질환이 겹칠 수 있습니다. 혈변,
                체중 감소, 심한 복통 등이 있으면 자가치료만으로 미루지 않는 편이 안전합니다.
              </p>
              <p className="text-[13px] text-[#64748b]">{DISCLAIMER}</p>
            </Prose>
          </SoftCard>
        </section>

        <ClinicToc
          items={[
            { id: 's1', label: '만성 변비란 무엇인가요?' },
            { id: 's2', label: '변비가 생기는 주요 원인' },
            { id: 's3', label: '합병증과 다른 증상 구별' },
            { id: 's4', label: '진료가 필요한 경우' },
            { id: 's5', label: '진찰·검사와 치료 방향' },
            { id: 's6', label: '생활 관리 포인트' },
            { id: 's7', label: '흔한 오해' },
          ]}
        />

        <section id="s1" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>만성 변비란 무엇인가요?</SectionTitle>
          <Prose>
            <p>
              일반적으로 배변 횟수가 적거나, 변을 볼 때 과도한 힘이 필요하거나, 잔변감·딱딱한 변이 반복되는 상태를
              변비로 봅니다. ‘며칠에 한 번’이라는 숫자만으로 모두 설명되지는 않으며, 나에게 익숙했던 리듬이 얼마나
              달라졌는지도 중요합니다.
            </p>
            <p>
              증상이 수주 이상 이어지거나 반복되면 만성 변비로 평가하는 경우가 많습니다. 원인과 동반 질환에 따라
              접근이 달라질 수 있어, 증상만으로 심각도를 단정하기는 어렵습니다.
            </p>
          </Prose>
        </section>

        <section id="s2" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>변비가 생기는 주요 원인</SectionTitle>
          <Prose>
            <p>
              변비는 한 가지 이유로만 생기지 않습니다. 식이섬유·수분 부족, 활동량 감소, 배변을 자주 참는 습관, 일부
              약물, 갑상선 기능저하증·당뇨 같은 전신 질환, 직장·항문 쪽 문제 등이 겹칠 수 있습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <SoftCard tone="mint">
              <p className="text-[13px] font-semibold mb-1" style={{ color: pastel.mint.text }}>
                생활·식이 요인
              </p>
              <p className="text-[13px] text-[#374151] leading-[1.7] break-keep">
                수분·섬유 섭취, 운동량, 배변을 미루는 습관이 장 리듬에 영향을 줄 수 있습니다.
              </p>
            </SoftCard>
            <SoftCard tone="peach">
              <p className="text-[13px] font-semibold mb-1" style={{ color: pastel.peach.text }}>
                약물·전신 질환
              </p>
              <p className="text-[13px] text-[#374151] leading-[1.7] break-keep">
                철분제·진통제 등 일부 약과 갑상선·당뇨 질환이 관련될 수 있어 병력 확인이 도움이 됩니다.
              </p>
            </SoftCard>
          </div>
        </section>

        <section id="s3" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>합병증과 다른 증상 구별</SectionTitle>
          <Prose>
            <p>
              오래 지속된 변비에서는 치핵·치열처럼 항문 질환이 함께 나타나거나, 분변이 직장에 오래 머무는 분변 매복이
              의심되는 경우도 있습니다. 주변에 묽은 변이 새어 나와 ‘설사처럼’ 느껴질 때도 있어, 증상만으로 원인을
              구분하기 어려울 수 있습니다.
            </p>
            <p>
              설사와 변비가 번갈아 나타나는 패턴은 다른 원인일 수도 있습니다. 관련 내용은{' '}
              <Link
                href="/magazine/alternating-constipation-and-diarrhea"
                className="text-primary font-semibold underline-offset-2 hover:underline"
              >
                변비와 설사가 번갈아 잦아진다면?
              </Link>
              도 함께 참고해 주세요.
            </p>
          </Prose>
          <Banner tone="yellow" icon={ExclamationTriangleIcon}>
            합병증이 생길 수 있다고 해서 모든 만성 변비 환자에게 같은 결과가 나타난다고 보장하거나 단정할 수는
            없습니다. 변화의 정도와 동반 증상은 개인마다 다릅니다.
          </Banner>
        </section>

        <section id="s4" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>진료가 필요한 경우</SectionTitle>
          <Prose>
            <p>아래와 같은 신호가 있으면 가정 처치만으로 미루기보다 진료로 확인하는 편이 안전합니다.</p>
          </Prose>
          <ChecklistPanel
            tone="coral"
            icon={ExclamationTriangleIcon}
            title="빨리 확인이 필요할 수 있는 신호"
            items={[
              '혈변 또는 검은색 변',
              '특별한 이유 없이 이어지는 체중 감소',
              '심한 복통·구토, 가스·변이 잘 나오지 않음',
              '발열, 심한 피로·어지럼',
              '배변 습관이 이전과 크게 달라져 지속됨',
              '대장암·염증성 장질환 가족력이 있는 경우',
            ]}
          />
        </section>

        <section id="s5" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>진찰·검사와 치료 방향</SectionTitle>
          <Prose>
            <p>
              진료에서는 증상 기간, 변의 형태, 약물·식사, 항문 통증·출혈 여부를 먼저 확인합니다. 필요하면 항문 진찰,
              혈액·대변 검사, 대장내시경 등을 개인 상황에 맞게 검토합니다. 모든 환자에게 같은 검사를 시행하지는
              않습니다.
            </p>
            <p>
              치료는 생활습관 교정, 약물 조절, 동반된 치핵·치열 치료 등 여러 방향을 조합할 수 있습니다. 자세한 진료
              안내는{' '}
              <Link href="/anorectal/constipation" className="text-primary font-semibold underline-offset-2 hover:underline">
                변비·설사
              </Link>{' '}
              페이지를 참고해 주세요.
            </p>
          </Prose>
          <Banner tone="blue" icon={InformationCircleIcon}>
            검사·약·시술 여부나 회복 속도는 개인 상태에 따라 달라질 수 있으며, 특정 결과를 보장하지 않습니다.
          </Banner>
        </section>

        <section id="s6" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>생활 관리 포인트</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              icon={CheckCircleIcon}
              title="도움이 될 수 있는 습관"
              items={[
                '수분과 식이섬유를 갑자기 늘리지 말고 점진적으로 조절하기',
                '배변이 마려울 때 미루지 않기',
                '규칙적인 식사·활동 리듬 유지하기',
                '증상·복용 약을 간단히 기록해 두기',
              ]}
            />
            <ChecklistPanel
              tone="yellow"
              icon={ExclamationTriangleIcon}
              title="주의할 점"
              items={[
                '완하제를 임의로 장기간·고용량 복용하지 않기',
                '혈변·체중 감소가 있는데도 약만으로 버티지 않기',
                '설사약·변비약을 원인 확인 없이 교차 복용하지 않기',
              ]}
            />
          </div>
        </section>

        <section id="s7" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>흔한 오해</SectionTitle>
          <Prose>
            <p>
              ‘매일 봐야 정상’이라고 단정하기보다, 평소 패턴과 불편감·동반 증상을 함께 보는 것이 더 도움이 됩니다.
              반대로 ‘조금 불편해도 괜찮다’며 오래 방치하면 항문 질환이 겹칠 수 있어, 반복되는 불편은 점검할 가치가
              있습니다.
            </p>
            <p>
              민간요법이나 검증되지 않은 정보만으로 원인을 단정하지 마세요. 특히 경고 신호가 있으면 의료진과 상담하는
              것이 안전합니다. {DISCLAIMER}
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">변비가 반복되고 있나요?</p>
          <p className="text-white/90 text-[13px] leading-[1.85] break-keep">
            원인과 동반 증상을 확인한 뒤, 상태에 맞는 관리·치료 방향을 상담할 수 있습니다.
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
