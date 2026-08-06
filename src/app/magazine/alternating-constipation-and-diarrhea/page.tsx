import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import { OfficialSource } from '@/components/content/MedicalImageGallery'
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

const TITLE = '변비와 설사가 번갈아 잦아진다면?'
const SHORT_TITLE = '변비와 설사'
const DESCRIPTION =
  '변비와 설사가 번갈아 나타나거나 배변 횟수가 갑자기 달라졌다면 식습관, 약물, 과민성장증후군 등 여러 원인을 살펴봐야 합니다. 동반 증상과 진료가 필요한 신호를 알아봅니다.'
const PATH = '/magazine/alternating-constipation-and-diarrhea'
const IMAGE = '/images/pages/consultation.webp'
const DATE_DISPLAY = '2026.08.06'
const DATE_ISO = '2026-08-06'
const DISCLAIMER =
  '이 글은 일반적인 건강정보를 제공하기 위한 내용이며, 개인의 증상에 대한 진단이나 치료를 대신하지 않습니다. 증상이 지속되거나 경고 신호가 동반된다면 의료진의 진료를 받아 확인하시기 바랍니다.'

export const metadata: Metadata = buildPageMetadata({
  path: PATH,
  title: '변비와 설사가 번갈아 잦아진다면? 원인과 확인할 증상 | 장튼튼항외과의원',
  description: DESCRIPTION,
  type: 'article',
  ogImage: IMAGE,
  keywords: [
    '변비',
    '설사',
    '과민성장증후군',
    '배변 습관',
    '건강매거진',
    '장튼튼항외과의원',
  ],
})

const faqs = [
  {
    q: '변비와 설사가 번갈아 나타나면 과민성장증후군인가요?',
    a: '그럴 가능성은 있습니다. 다만 증상만으로 과민성장증후군이라고 확정할 수는 없습니다. 복통이나 복부 불편감, 증상 기간, 배변 형태 변화와 함께 감염·약물·다른 장 질환 가능성도 함께 살펴야 합니다. 반복되거나 동반 증상이 있으면 자가진단보다 진료를 통해 확인하는 것이 안전합니다.',
  },
  {
    q: '변비가 심한데 묽은 변이 나오는 이유는 무엇인가요?',
    a: '딱딱한 대변이 직장에 오래 정체된 상태에서, 그 주변으로 묽은 변이 지나가는 경우가 있을 수 있습니다. 그렇다고 모든 변비에서 생기는 현상은 아니며, 감염이나 다른 원인일 수도 있습니다. 묽은 변이 나왔다고 지사제를 바로 반복 복용하기보다, 복부팽만·배변 곤란·잔변감이 함께 지속되면 상태를 확인하는 것이 좋습니다.',
  },
  {
    q: '변비와 설사가 반복되면 대장내시경을 받아야 하나요?',
    a: '모든 사람에게 바로 필요한 것은 아닙니다. 연령, 증상 기간, 혈변, 빈혈, 체중 감소, 가족력, 기존 검사 이력 등을 종합해 필요성을 판단합니다. 대장내시경은 모든 배변 변화에 일률적으로 시행하는 검사가 아니라, 증상과 동반 소견을 종합해 필요성을 판단합니다.',
  },
  {
    q: '식이섬유는 변비와 설사에 모두 도움이 되나요?',
    a: '식이섬유의 종류와 섭취량에 따라 반응이 다를 수 있습니다. 갑자기 많이 늘리면 복부팽만이나 가스, 불편감이 커질 수 있어 점진적으로 조절하는 편이 낫습니다. 모든 사람에게 같은 양이 도움이 되는 것은 아니므로, 증상을 기록하며 천천히 맞춰 가는 것이 좋습니다.',
  },
  {
    q: '증상이 있을 때 변비약과 지사제를 번갈아 먹어도 되나요?',
    a: '원인을 모르는 상태에서 장기간 교차 복용하면 증상 흐름을 판단하기 어렵고, 상황에 맞지 않을 수 있습니다. 단기간의 응급 대처와 장기간 자가복용은 다릅니다. 증상이 반복되면 의료진 또는 약사와 상의하고, 처방약은 임의로 끊거나 용량을 바꾸지 않는 것이 안전합니다.',
  },
]

const related = [
  { href: '/magazine/constipation', title: '변비가 지속되면 왜 위험한가요?', desc: '만성 변비의 합병증과 예방' },
  { href: '/magazine/colon', title: '대장내시경 전 장 정결', desc: '검사 전 장 정결을 덜 힘들게 하는 방법' },
  { href: '/anorectal/constipation', title: '변비·설사 진료', desc: '배변 장애 원인 평가와 치료 방향' },
]

const checklist = [
  '증상이 시작된 날짜',
  '하루 배변 횟수',
  '딱딱한 변과 묽은 변이 나타난 순서',
  '변의 형태(단단함·묽기)',
  '혈액이나 점액이 보였는지',
  '복통이 배변 전후에 어떻게 달라지는지',
  '야간에 잠을 깨울 정도의 증상이 있는지',
  '체중 변화',
  '최근 식사, 여행, 감염 여부',
  '새로 복용한 약이나 건강기능식품',
  '대장질환 가족력',
  '기존 내시경 검사 시기',
]

const warningSigns = [
  '혈변 또는 검은색 변',
  '특별한 이유 없이 이어지는 체중 감소',
  '빈혈을 의심할 만한 심한 피로감이나 어지럼',
  '발열',
  '반복되는 구토',
  '지속적이거나 점점 심해지는 복통',
  '배가 심하게 팽창하면서 가스나 변이 잘 나오지 않는 경우',
  '잠을 깨울 정도로 반복되는 설사',
  '심한 갈증, 어지럼, 소변량 감소처럼 탈수를 의심할 수 있는 증상',
  '이전과 다른 배변 습관 변화가 계속되는 경우',
  '대장암 또는 염증성 장질환 가족력이 있는 경우',
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
  keywords: '변비, 설사, 과민성장증후군, 배변 습관',
}

const breadcrumbJsonLd = breadcrumbLd([
  { name: '홈', path: '/' },
  { name: '건강매거진', path: '/magazine' },
  { name: TITLE, path: PATH },
])

export default function AlternatingConstipationDiarrheaPage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="relative overflow-hidden h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src={IMAGE}
          alt="변비와 설사가 번갈아 나타날 때 확인할 증상"
          fill
          className="object-cover object-[62%_center] lg:object-[58%_center]"
          sizes="100vw"
          priority
        />
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
            배변 습관의 변화가 반복될 때 확인해야 할 원인과 진료가 필요한 신호
          </p>
          <p className="mt-2 text-[12px] text-[#64748b]">
            <time dateTime={DATE_ISO}>{DATE_DISPLAY}</time>
            <span className="mx-1.5">·</span>
            읽기 약 8분
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 lg:px-8 pt-6 md:pt-8 pb-7 md:pb-10 space-y-7 md:space-y-8">
        <section className="space-y-3">
          <p className="text-[12px] font-bold tracking-wider text-primary">핵심요약</p>
          <SoftCard>
            <Prose>
              <p>
                며칠 동안 변을 보기 어렵다가 갑자기 묽은 변을 여러 차례 보는 경우, 배변 횟수와 변의 형태가 예전과
                달라진 경우, 스트레스나 식사 후 증상이 두드러지는 경우, 변을 보고도 개운하지 않거나 복부팽만이
                반복되는 경우—이런 변화가 이어지면 많은 분들이 걱정부터 하게 됩니다.
              </p>
              <p>
                배변은 매일 같은 리듬으로 이어지는 것이 이상적이라고 느끼기 쉽지만, 실제로는 개인마다 평소 패턴이
                다릅니다. 그래서 ‘하루에 몇 번이어야 정상인가’보다, 나에게 익숙했던 리듬이 얼마나 달라졌는지가 더
                중요한 단서가 됩니다.
              </p>
              <p>
                변비와 설사가 번갈아 나타난다고 해서 곧바로 한 가지 질환으로 결론 내릴 수는 없습니다. 이 글에서는
                배변 습관 변화가 의미하는 바, 생활·약물의 영향, 과민성장증후군(irritable bowel syndrome)과의 관계,
                진료 전에 남기면 도움이 되는 기록, 그리고 진료를 미루지 않는 편이 나은 동반 증상을 차분히
                정리합니다. 온라인 정보는 참고용이며, 개인의 상태를 대신 진단하지는 않습니다.
              </p>
              <p className="text-[13px] text-[#64748b]">{DISCLAIMER}</p>
            </Prose>
          </SoftCard>
        </section>

        <SoftCard tone="blue">
          <p className="text-[14px] font-bold text-[#0d1117] mb-3 break-keep">먼저 확인할 세 가지</p>
          <ol className="space-y-2.5 text-[14px] text-[#374151] leading-[1.8] break-keep">
            <li className="flex gap-2.5 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white text-[12px] font-bold flex items-center justify-center mt-0.5">
                1
              </span>
              <span>평소와 다른 배변 변화가 얼마나 지속되고 반복되는지</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white text-[12px] font-bold flex items-center justify-center mt-0.5">
                2
              </span>
              <span>혈변·체중 감소·발열·야간 증상 같은 동반 신호가 있는지</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-white text-[12px] font-bold flex items-center justify-center mt-0.5">
                3
              </span>
              <span>최근 식사, 감염, 여행, 스트레스, 복용약 변화가 있었는지</span>
            </li>
          </ol>
        </SoftCard>

        <ClinicToc
          items={[
            { id: 'meaning', label: '변비와 설사가 함께 나타난다는 의미' },
            { id: 'lifestyle', label: '식사·생활 변화의 영향' },
            { id: 'medications', label: '약과 건강기능식품' },
            { id: 'ibs', label: '과민성장증후군과 감별' },
            { id: 'overflow', label: '심한 변비 뒤의 묽은 변' },
            { id: 'diary', label: '진료 전 배변 기록' },
            { id: 'warning', label: '진료를 미루지 않는 신호' },
            { id: 'clinic', label: '진료에서 확인하는 내용' },
            { id: 'selfcare', label: '생활 속 조절' },
            { id: 'closing', label: '변화의 흐름을 보는 이유' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section id="meaning" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>변비와 설사가 함께 나타난다는 것은 어떤 의미일까요?</SectionTitle>
          <Prose>
            <p>
              배변을 이야기할 때는 횟수만 보지 않습니다. 변의 굳기, 배변할 때 힘을 주는 정도, 급하게 화장실을 가야
              하는 느낌(급박감), 변을 보고도 남은 듯한 느낌(잔변감)까지 함께 보는 것이 도움이 됩니다. 같은
              ‘설사’라고 말해도 묽기만 바뀐 경우와, 급박감·복통이 함께 있는 경우는 체감이 다를 수 있습니다.
            </p>
            <p>
              중요한 기준은 ‘교과서적인 정상’보다{' '}
              <strong className="text-[#0d1117]">평소 자신의 배변 패턴에서 얼마나 달라졌는지</strong>입니다. 평소보다
              딱딱해졌는지, 횟수가 줄었는지, 반대로 묽어지고 잦아졌는지, 그 순서가 어떻게 이어지는지를 기록해 두면
              상담이 훨씬 수월해집니다.
            </p>
            <p>
              변비 뒤에 묽은 변이 나왔다고 해서 변비가 완전히 해결됐다고 단정할 수는 없습니다. 일시적으로 묽은 변이
              나온 뒤 다시 배변이 막히거나, 잔변감과 복부팽만이 남는 경우도 있습니다. 며칠간의 일시적인 변화와, 수주
              이상 같은 패턴이 반복되는 경우는 다르게 살펴야 합니다.
            </p>
            <p>
              예를 들어 여행이나 회식 직후 하루이틀 배변이 달라진 뒤 원래 리듬으로 돌아가는 경우와, 매주 비슷한
              순서로 변비와 설사가 반복되는 경우는 의미가 다를 수 있습니다. 변화의 ‘한 장면’보다 ‘흐름’을 보는
              습관이 필요합니다.
            </p>
            <p>
              변의 형태를 말로만 설명하기 어렵다면, 브리스톨 대변 형태 척도처럼 ‘단단한 알갱이형’, ‘소시지형’,
              ‘부드러운 형태’, ‘묽은 형태’처럼 대략적인 표현을 써도 충분합니다. 완벽한 기록이 목적이 아니라, 상담 때
              흐름을 공유하기 위한 도구로 생각하면 됩니다.
            </p>
            <p>
              배변 장애가 오래 이어질 때 항문 증상과 함께 보는 경우도 있습니다. 병원 안내는{' '}
              <Link href="/anorectal/constipation" className="text-primary font-bold hover:underline">
                변비·설사 안내
              </Link>
              에서 확인할 수 있습니다.
            </p>
          </Prose>
          <Banner tone="blue" icon={InformationCircleIcon}>
            한두 번의 배변 변화만으로 질환을 단정할 수는 없습니다. 반복되는 순서와 기간, 동반 증상을 함께 보는 것이
            더 중요합니다.
          </Banner>
        </section>

        <section id="lifestyle" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>일시적인 식사·생활 변화도 장에 영향을 줄 수 있습니다</SectionTitle>
          <Prose>
            <p>
              장 운동과 배변 형태는 하루이틀의 생활 변화에도 영향을 받을 수 있습니다. ‘스트레스 때문’이라고
              단순화하기보다, 아래처럼 여러 요소를 함께 떠올려 보는 편이 현실적입니다. 장과 신경계는 서로 영향을
              주고받을 수 있어, 긴장·수면·식사 리듬이 겹치면 증상이 더 뚜렷해지기도 합니다.
            </p>
          </Prose>
          <ChecklistPanel
            tone="mint"
            title="함께 떠올려 볼 생활 요인"
            icon={CheckCircleIcon}
            items={[
              '갑작스러운 식사량 변화, 불규칙한 식사, 끼니를 거른 뒤의 과식',
              '기름지거나 자극적인 음식의 증가, 평소와 다른 외식·배달식 비중',
              '과도한 음주, 카페인 섭취 변화(커피·에너지음료 등)',
              '여행, 시차, 생활 리듬 변화, 화장실 환경이 달라진 상황',
              '수면 부족, 활동량 감소, 장시간 앉아서 일하는 환경',
              '긴장과 스트레스, 중요한 일정을 앞둔 시기',
              '장염 이후의 회복 과정(증상이 한동안 들쭉날쭉할 수 있음)',
              '수분 섭취 감소 또는 급격한 증가',
            ]}
          />
          <Prose>
            <p>
              이런 요인이 있다고 해서 다른 질환을 배제해도 된다는 뜻은 아닙니다. 다만 최근 변화를 정리해 두면,
              증상이 왜 시작됐는지 설명하는 데 도움이 됩니다. 생활 요인을 조정해 보는 것과 필요한 진료를 받는 것은
              서로 배타적이지 않습니다.
            </p>
            <p>
              식사 후 증상이 유난히 두드러진다면, 특정 음식만 ‘나쁜 음식’으로 단정하기보다 양·조합·섭취 속도를 함께
              관찰해 보세요. 사람마다 반응이 다르고, 같은 음식이라도 컨디션에 따라 다르게 느껴질 수 있습니다.
            </p>
            <p>
              장염을 앓은 뒤에는 장이 예민해져 배변 리듬이 한동안 흔들릴 수 있습니다. 회복 과정에서 변비와 설사가
              번갈아 느껴질 수도 있으나, 고열·혈변·심한 탈수 징후가 있으면 경과를 확인하는 편이 안전합니다. 증상이
              가라앉는 듯하다가 다시 반복되면 그 기간도 함께 기록해 두세요.
            </p>
          </Prose>
        </section>

        <section id="medications" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>복용 중인 약과 건강기능식품도 확인해야 합니다</SectionTitle>
          <Prose>
            <p>
              일부 의약품과 건강기능식품은 변을 단단하게 만들거나, 반대로 묽게 만들 수 있습니다. 예를 들면 철분제,
              일부 진통제, 제산제, 항생제, 마그네슘 성분 제품, 변비약, 지사제, 다이어트 관련 제품이나
              건강기능식품이 해당될 수 있습니다. 약이 항상 원인이라는 뜻은 아니며, 가능성을 열어 두고 비교해 보라는
              의미입니다.
            </p>
            <p>
              복용 시점과 증상 시작 시점을 비교해 보세요. ‘언제부터 먹기 시작했는지’와 ‘언제부터 배변이
              달라졌는지’를 나란히 적어 두면 문진이 수월합니다. 여러 제품을 한꺼번에 바꾼 경우라면, 무엇이
              겹쳤는지도 함께 메모해 두는 것이 좋습니다.
            </p>
            <p>
              처방약은 임의로 끊거나 용량을 조절하지 않는 것이 안전합니다. 증상이 불편하더라도 스스로 중단하기 전에
              의료진과 상의하세요. 진료 시에는 약 이름과 복용량, 복용 기간을 알려주시면 원인 파악에 도움이
              됩니다. 약국에서 산 약이나 건강기능식품도 빠뜨리지 않고 말씀해 주세요.
            </p>
          </Prose>
          <Banner tone="yellow" icon={ExclamationTriangleIcon}>
            원인을 모르는 상태에서 변비약과 지사제를 장기간 교차 복용하면 증상 흐름을 판단하기 어렵고, 상황에 맞지
            않을 수 있습니다. 단기간의 응급 대처와 장기간 자가복용은 다릅니다.
          </Banner>
        </section>

        <section id="ibs" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>과민성장증후군일 수도 있지만 증상만으로 단정할 수 없습니다</SectionTitle>
          <Prose>
            <p>
              과민성장증후군은 복통이나 복부 불편감과 함께 배변 횟수 또는 변 형태가 달라지는 양상으로 설명할 수
              있는 기능성 장질환입니다. 변비와 설사가 번갈아 나타나는 혼합형 양상, 복부팽만, 잔변감, 점액변 등이
              동반될 수 있고, 식사나 긴장 상황에서 증상이 달라지기도 합니다.
            </p>
            <p>
              다만 과민성장증후군은 증상 양상과 필요한 평가를 종합해서 판단합니다. 염증성 장질환, 감염, 흡수장애 등
              다른 원인과 증상이 겹칠 수 있어, 증상만으로 자가진단하지 않는 것이 중요합니다. ‘번갈아 나오니까
              과민성장증후군’이라는 짧은 결론은 피해야 합니다.
            </p>
            <p>
              과민성장증후군을 위험한 질환처럼 과장할 필요도, 반대로 검사 없이 ‘단순한 스트레스성 증상’으로 치부할
              필요도 없습니다. 반복되는 변화와 동반 증상에 맞춰 필요한 확인을 하는 과정이 핵심입니다. 증상이
              일상생활에 지장을 줄 정도로 이어진다면, 원인을 좁혀 가는 진료가 도움이 될 수 있습니다.
            </p>
            <p>
              감별이 필요한 이유는 치료·관리의 방향이 달라질 수 있기 때문입니다. 같은 불편감이라도 생활 조절만
              권하는 경우와, 추가 검사가 필요한 경우는 문진·진찰·동반 소견에 따라 달라집니다. 증상이 비슷해 보여도
              원인이 다르면 접근이 달라질 수 있다는 점을 기억해 두면, 불필요한 자가진단을 줄이는 데 도움이 됩니다.
            </p>
          </Prose>
          <SoftCard tone="lavender">
            <p className="text-[13px] font-semibold mb-1" style={{ color: pastel.lavender.text }}>
              기억해 두면 좋은 점
            </p>
            <p className="text-[13px] text-[#374151] leading-[1.7] break-keep">
              증상만으로 병명을 붙이기보다, 기간·패턴·동반 증상을 정리해 진료에서 확인하는 편이 안전합니다.
            </p>
          </SoftCard>
        </section>

        <section id="overflow" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>심한 변비 뒤에 묽은 변이 새어 나올 수도 있습니다</SectionTitle>
          <Prose>
            <p>
              대변이 오래 정체된 상태에서, 그 주변으로 묽은 변이 지나가는 상황이 있을 수 있습니다. 겉으로는
              설사처럼 보이지만, 실제로는 변비와 관련된 흐름일 수 있다는 뜻입니다. 이를 흔히 ‘넘쳐흐르는 듯한 묽은
              변’으로 설명하기도 합니다.
            </p>
            <p>
              이는 모든 변비 환자에게 생기는 현상처럼 단정할 수 없습니다. 감염이나 다른 원인으로 묽은 변이 나오는
              경우도 있어, 겉모습만으로 원인을 확정하기 어렵습니다. 묽은 변이 나왔다고 지사제를 바로 반복 복용하는
              것이 적절하지 않을 수 있으며, 복부팽만·배변 곤란·잔변감이 함께 지속되면 상태를 확인하는 편이
              낫습니다.
            </p>
            <p>
              자가 관장이나 약물 남용은 권하지 않습니다. 반복해서 지사제와 변비약을 교차로 쓰기보다, 증상 순서와
              동반 불편을 기록한 뒤 의료진과 상의하는 편이 안전합니다. 특히 배가 심하게 불러오거나 가스·변이 잘
              나오지 않는 느낌이 있다면 무리한 자가처치를 피하세요.
            </p>
          </Prose>
          <Banner tone="peach" icon={ExclamationTriangleIcon}>
            묽은 변이 나왔다고 해서 변비가 해결됐다고 단정하기 어렵습니다. 잔변감·복부팽만이 함께 있으면 상태를
            확인하는 편이 낫습니다.
          </Banner>
        </section>

        <section id="diary" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>진료 전에 배변 기록을 남겨 보세요</SectionTitle>
          <Prose>
            <p>
              복잡한 일지일 필요는 없습니다. 며칠만이라도 아래 항목을 메모해 두면, 문진과 검사 계획을 세우는 데
              도움이 됩니다. 스마트폰 메모나 작은 수첩에 날짜만 적어도 충분합니다.
            </p>
          </Prose>
          <ChecklistPanel
            tone="blue"
            title="진료 전에 적어 두면 도움이 되는 항목"
            icon={InformationCircleIcon}
            items={checklist}
          />
          <Prose>
            <p>
              특히 ‘딱딱한 변 → 묽은 변’처럼 순서를 적어 두면, 번갈아 나타나는 양상을 설명하기 쉽습니다. 복통이
              배변 전에 심해졌다가 배변 후 덜해지는지, 아니면 배변과 무관하게 지속되는지도 구분해 적어 보세요.
              야간에 잠을 깨울 정도의 증상이 있는지는 진료에서 자주 확인하는 항목입니다.
            </p>
          </Prose>
        </section>

        <section id="warning" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>이런 증상이 함께 있다면 진료를 미루지 마세요</SectionTitle>
          <Prose>
            <p>
              아래 신호가 있다고 해서 특정 질환으로 연결되는 것은 아닙니다. 다만 이런 동반 증상이 있을 때는 상태를
              확인하는 편이 안전합니다. 공포를 키우기 위한 목록이 아니라, 타이밍을 놓치지 않기 위한 안내입니다.
            </p>
          </Prose>
          <ChecklistPanel
            tone="coral"
            title="진료를 미루지 않는 편이 나은 신호"
            icon={ExclamationTriangleIcon}
            items={warningSigns}
          />
          <Prose>
            <p>
              경고 신호가 있다고 해서 ‘심각한 병’이라고 단정하지는 않습니다. 반대로 경고 신호가 없어도 배변 습관
              변화가 오래 반복되면 상담을 고려할 수 있습니다. 가족력이 있거나 이전 검사 이후 오랜 시간이 지났다면,
              그 사실도 함께 말씀해 주세요.
            </p>
          </Prose>
        </section>

        <section id="clinic" className="scroll-mt-20 space-y-3">
          <SectionTitle n={8}>진료에서는 무엇을 확인할까요?</SectionTitle>
          <Prose>
            <p>
              진료에서는 증상의 기간과 패턴을 묻는 문진, 복용약과 식습관 확인, 복부 및 필요한 신체 진찰이 기본이
              됩니다. 상황에 따라 혈액검사, 대변검사, 염증이나 감염 여부 평가가 추가될 수 있습니다. 어떤 검사를
              할지, 순서를 어떻게 잡을지는 개인의 상황에 맞춰 달라집니다.
            </p>
            <p>
              연령, 가족력, 혈변, 빈혈 등 소견에 따라{' '}
              <Link href="/endoscopy/colon" className="text-primary font-bold hover:underline">
                대장내시경
              </Link>{' '}
              검사가 검토될 수 있습니다. 대장내시경은 모든 배변 변화에 일률적으로 시행하는 검사가 아니라, 증상과
              동반 소견을 종합해 필요성을 판단합니다.
            </p>
            <p>
              검사 종류와 순서는 개인마다 달라질 수 있으며, 특정 검사가 진단을 보장한다고 약속할 수는 없습니다.
              기록해 온 배변 일지가 있다면 함께 가져와 주세요. 이전에 받은 내시경·혈액검사 결과가 있다면 그
              시기와 소견도 도움이 됩니다.
            </p>
          </Prose>
          <Banner tone="blue" icon={InformationCircleIcon}>
            검사·치료 여부와 순서는 개인 상태에 따라 달라질 수 있으며, 특정 결과를 보장하지 않습니다.
          </Banner>
        </section>

        <section id="selfcare" className="scroll-mt-20 space-y-3">
          <SectionTitle n={9}>생활 속에서는 이렇게 조절해 볼 수 있습니다</SectionTitle>
          <Prose>
            <p>
              아래는 무리 없이 시도해 볼 수 있는 일반적인 생활 관리입니다. 증상을 악화시키는 요인을 줄이는 데
              초점을 둡니다. 생활 조절이 모든 원인을 해결한다는 뜻은 아니며, 경고 신호가 있거나 증상이 반복되면
              진료와 병행하는 것이 좋습니다.
            </p>
          </Prose>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ChecklistPanel
              tone="mint"
              title="도움이 될 수 있는 습관"
              icon={CheckCircleIcon}
              items={[
                '규칙적인 식사, 과식과 지나치게 자극적인 음식 줄이기',
                '충분한 수분 섭취(갑작스러운 과다 섭취보다 꾸준한 섭취를 우선)',
                '식이섬유는 갑자기 많이 늘리지 않고 서서히 조절하기',
                '가벼운 신체활동 유지하기(무리한 운동보다 일상 속 걷기부터)',
                '변의를 지나치게 참지 않기, 변기에 너무 오래 앉아 있지 않기',
                '증상과 음식의 연관성을 간단히 기록하기',
                '수면 리듬 관리하기',
              ]}
            />
            <ChecklistPanel
              tone="peach"
              title="주의할 점"
              icon={ExclamationTriangleIcon}
              items={[
                '변비약과 지사제를 자의적으로 반복 교차 복용하지 않기',
                '특정 음식을 절대 금지한다고 단정하지 않기',
                '유산균·건강기능식품의 효과를 보장하지 않기',
                '저포드맵 식단은 전문가와 상의해 제한적으로만 접근하기',
                '장기간의 과도한 식이 제한으로 영양 불균형이 생기지 않도록 하기',
              ]}
            />
          </div>
          <Prose>
            <p>
              특정 음식을 절대 금지하라고 요구하지는 않습니다. 유산균이나 건강기능식품의 효과를 보장할 수도
              없습니다. 저포드맵(low FODMAP) 식단을 고려한다면, 전문가와 상의해 제한적으로 시행하는 정도로만
              접근하는 것이 안전합니다. 장기간의 과도한 제한은 영양 불균형으로 이어질 수 있어 혼자 오래
              이어가기보다 상담을 권합니다.
            </p>
            <p>
              식이섬유를 늘릴 때는 ‘많이’보다 ‘천천히’가 중요합니다. 갑자기 양을 늘리면 가스·복부팽만·불편감이 커질
              수 있으므로, 며칠 단위로 반응을 보면서 조절해 보세요.
            </p>
          </Prose>
        </section>

        <section id="closing" className="scroll-mt-20 space-y-3">
          <SectionTitle n={10}>중요한 것은 ‘설사냐 변비냐’보다 변화의 흐름입니다</SectionTitle>
          <Prose>
            <p>
              한두 번의 배변 변화만으로 질환을 판단할 수는 없습니다. 반복되는 순서와 기간, 복통, 혈변, 체중 변화
              같은 동반 증상을 함께 보는 것이 핵심입니다. ‘오늘은 설사, 내일은 변비’라는 한 장면보다, 그 장면이
              얼마나 자주·오래 이어지는지가 더 중요한 정보입니다.
            </p>
            <p>
              불안을 키울 필요는 없지만, 지속되는 변화를 방치하지 않는 것도 중요합니다. 자가진단보다 기록을
              바탕으로 진료받는 편이 다음 단계를 정하는 데 도움이 됩니다. 생활 리듬을 잠시 정리해 보고, 그래도
              패턴이 반복되거나 경고 신호가 있으면 의료진과 상의해 보세요.
            </p>
            <p>
              이 글의 목적은 스스로 병명을 붙이는 것이 아니라, 무엇을 관찰하고 언제 도움을 요청할지 정리하는 데
              있습니다. 대장항문·배변 관련 안내는{' '}
              <Link href="/anorectal" className="text-primary font-bold hover:underline">
                대장항문센터
              </Link>
              에서도 확인할 수 있습니다.
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">배변 습관이 반복적으로 바뀌나요?</p>
          <p className="text-white/90 text-[13px] leading-[1.85] break-keep">
            패턴과 동반 증상을 확인한 뒤, 상태에 맞는 관리·진료 방향을 상담할 수 있습니다.
          </p>
        </div>

        <OfficialSource
          sources={[
            '질병관리청 국가건강정보포털, 「과민성장증후군」',
            '질병관리청 국가건강정보포털, 「변비」',
            '미국 국립당뇨병·소화기·신장질환연구소(NIDDK), 변비 및 설사 증상·원인 안내',
            'NICE, 성인 과민성장증후군 진단 및 염증성 원인 감별 지침',
            'American College of Gastroenterology, Irritable Bowel Syndrome 안내',
          ]}
          note="이 글은 아래 공식·전문 자료를 참고해 일반적인 건강정보로 재구성했습니다. 개인의 진단·치료 방침은 진료 결과에 따릅니다."
        />

        <div className="rounded-2xl bg-white border border-[#e5eaef] p-5 md:p-6">
          <p className="text-[13px] md:text-[14px] text-[#64748b] leading-[1.85] break-keep">{DISCLAIMER}</p>
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
