import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import StaticFaq, { faqJsonLd } from '@/components/content/StaticFaq'
import {
  Banner,
  ChecklistPanel,
  MagazineHeroScrim,
  ClinicToc,
  FaqShell,
  FlowSteps,
  Prose,
  RelatedCarousel,
  SectionTitle,
  SoftCard,
} from '@/app/anorectal/_ui'
import { absoluteUrl, articleId, SITE_NAME } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { breadcrumbLd } from '@/lib/seo/jsonld'

const PATH = '/magazine/colon'
const TITLE = '대장내시경 전 장 정결, 이렇게 하면 덜 힘들어요'
const SHORT_TITLE = '대장내시경 장 정결'
const DESCRIPTION =
  '많은 분들이 두려워하는 대장내시경 준비. 장 정결제를 더 편하게 복용하는 팁과 준비사항을 단계별로 안내합니다.'
const IMAGE = '/images/endoscopy-center.webp'
const DATE_DISPLAY = '2024.12'
const DATE_ISO = '2024-12-01'

export const metadata: Metadata = buildPageMetadata({
  path: PATH,
  title: `${TITLE} | 장튼튼항외과의원`,
  description: DESCRIPTION,
  type: 'article',
  ogImage: IMAGE,
  keywords: [
    '대장내시경',
    '장 정결',
    '장정결제',
    '대장내시경 준비',
    '건강매거진',
    '장튼튼항외과의원',
  ],
})

const faqs = [
  {
    q: '장 정결제를 마시다 토하면 어떻게 하나요?',
    a: '구토가 심하면 무리해서 한 번에 많이 마시지 말고, 잠시 쉬었다가 천천히 이어가는 것이 좋습니다. 복용 방법·간격은 처방 안내를 따르고, 계속 토하거나 심한 복통·어지럼이 있으면 임의로 용량을 바꾸지 말고 의료진에 연락해 주세요. 정결이 부족하면 검사 품질이 떨어지거나 일정이 조정될 수 있습니다.',
  },
  {
    q: '물이 너무 많아서 부담됩니다. 줄여도 되나요?',
    a: '장 정결은 약과 함께 마시는 물의 양·간격이 중요합니다. 임의로 물을 크게 줄이면 정결이 불충분해질 수 있습니다. 맛이 부담되면 차갑게 하거나 안내에 허용된 범위에서 맛을 조절하는 방법이 도움이 될 수 있으나, 개인별 처방 지침을 벗어나지 않는 것이 안전합니다.',
  },
  {
    q: '변이 아직 노랗거나 찌꺼기가 보이면 검사가 어렵나요?',
    a: '맑은 노란색·투명에 가까운 배변이 나오면 비교적 정결이 잘된 상태로 설명하는 경우가 많습니다. 찌꺼기·갈색 변이 계속되면 관찰이 어려워 재준비·재검사가 필요할 수 있습니다. 최종 판단은 당일 상태와 의료진 확인에 따르며, 불안하면 검사 전 문의해 주세요.',
  },
  {
    q: '혈압약·당뇨약·항혈전제는 어떻게 하나요?',
    a: '약 종류에 따라 검사 당일 소량의 물과 복용이 가능한 경우와, 미리 조정이 필요한 경우가 있습니다. 당뇨약·항혈전제·철분제 등은 특히 확인이 중요합니다. 임의로 중단하지 말고, 복용 중인 약 목록을 미리 알려 개인별 안내를 받는 것이 안전합니다.',
  },
  {
    q: '장 정결이 힘들면 검사를 미루는 편이 나을까요?',
    a: '준비가 부담스러워도, 증상·연령·가족력에 따라 검사가 필요한 경우가 있습니다. 정결이 어려운 이유는 약제 종류, 위장 상태, 안내 이해도 등 여러 가지일 수 있어 의료진과 상의하면 복용 일정·방법을 조정할 수 있는 경우가 있습니다. 혼자 판단해 중요한 검사를 계속 미루지 않는 것이 좋습니다.',
  },
]

const related = [
  { href: '/magazine/alternating-constipation-and-diarrhea', title: '변비와 설사가 번갈아 잦아진다면?', desc: '배변 습관이 반복적으로 바뀔 때' },
  { href: '/magazine/constipation', title: '만성 변비의 합병증', desc: '변비가 오래갈 때 확인해야 할 점' },
  { href: '/endoscopy/colon', title: '대장내시경 진료안내', desc: '장 정결·약물 안내와 검사 진행' },
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
  keywords: '대장내시경, 장 정결, 장정결제, 대장내시경 준비',
}

const breadcrumbJsonLd = breadcrumbLd([
  { name: '홈', path: '/' },
  { name: '건강매거진', path: '/magazine' },
  { name: TITLE, path: PATH },
])

export default function MagazineColonArticlePage() {
  return (
    <div className="bg-[#f8fafb] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="relative overflow-hidden h-[240px] md:h-[320px] lg:h-[400px]">
        <Image
          src={IMAGE}
          alt="대장내시경 장비와 모니터가 보이는 내시경실"
          fill
          className="object-cover object-[32%_center] lg:object-[28%_center]"
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
                대장내시경에서 가장 부담스러운 부분 중 하나가 장 정결입니다. 장을 충분히 비워야 점막과 용종을
                잘 관찰할 수 있고, 정결이 부족하면 검사가 어려워지거나 재검사가 필요할 수 있습니다.
              </p>
              <p>
                정결제 종류·복용 일정·물 섭취량은 병원 안내와 개인 상태에 따라 달라집니다. 이 글은 일반적인
                준비 요령을 정리한 참고 정보이며, 처방된 복용법을 임의로 바꾸지 않는 것이 안전합니다. 구토·심한
                복통·어지럼이 있으면 의료진과 상의하세요.
              </p>
              <p>
                검사 전반 안내는{' '}
                <Link href="/endoscopy/colon" className="text-primary font-bold hover:underline">
                  대장내시경 진료안내
                </Link>
                에서 확인할 수 있습니다.
              </p>
            </Prose>
          </SoftCard>
        </section>

        <ClinicToc
          items={[
            { id: 'why-clean', label: '장 정결이 왜 중요한가요?' },
            { id: 'diet', label: '검사 며칠 전 식이, 이렇게 준비하세요' },
            { id: 'prep-day', label: '정결제 복용, 덜 힘들게 이어가는 방법' },
            { id: 'medications', label: '복용 중인 약·건강기능식품' },
            { id: 'check-ready', label: '정결이 잘 됐는지 확인하는 기준' },
            { id: 'when-to-call', label: '중간에 연락이 필요한 경우' },
            { id: 'exam-day', label: '검사 당일·검사 후 주의' },
            { id: 'myths', label: '장 정결에 대한 흔한 오해' },
            { id: 'faq', label: '자주 묻는 질문' },
          ]}
        />

        <section id="why-clean" className="scroll-mt-20 space-y-3">
          <SectionTitle n={1}>장 정결이 왜 중요한가요?</SectionTitle>
          <Prose>
            <p>
              대장내시경은 항문을 통해 내시경을 넣어 직장과 대장 점막을 직접 관찰하는 검사입니다. 변 찌꺼기가
              남아 있으면 작은 용종이나 병변을 놓치기 쉽고, 시야가 좋지 않으면 검사 시간이 길어지거나 일정을
              다시 잡아야 할 수 있습니다.
            </p>
            <p>
              그래서 장 정결은 ‘불편한 통과의례’가 아니라, 검사의 정확도를 좌우하는 준비 과정입니다. 정결이
              잘되면 검사 자체도 비교적 수월해지는 경우가 많습니다. 다만 체질, 변비 정도, 이전 수술력, 약제
              반응에 따라 느끼는 부담은 개인마다 다릅니다.
            </p>
          </Prose>
          <Banner tone="blue" icon={InformationCircleIcon}>
            정결 방법과 약제 종류는 병원·개인별로 다를 수 있습니다. 이 글의 일정·식품 예시는 일반적인 안내이며,
            실제로는 예약 시 받은 안내문을 우선하세요.
          </Banner>
        </section>

        <section id="diet" className="scroll-mt-20 space-y-3">
          <SectionTitle n={2}>검사 며칠 전 식이, 이렇게 준비하세요</SectionTitle>
          <Prose>
            <p>
              많은 경우 검사 수일 전부터 잔류물이 많이 남는 식품을 줄입니다. 씨 있는 과일, 잡곡·현미, 해조류,
              채소의 질긴 섬유질 등은 장에 남아 시야를 가리기 쉽습니다. 흰쌀밥, 두부, 계란, 부드러운 살코기 등
              저잔류 식이가 안내되는 경우가 많습니다.
            </p>
          </Prose>
          <FlowSteps
            cols={3}
            tone="blue"
            items={[
              {
                title: '검사 2~3일 전',
                desc: '씨 있는 과일·잡곡·김·미역 등 잔류물이 많은 식품을 줄입니다.',
              },
              {
                title: '검사 전날',
                desc: '저잔류 식이로 가볍게 식사하고, 안내된 시각부터 정결제 복용을 시작합니다.',
              },
              {
                title: '검사 당일',
                desc: '나머지 정결제를 마친 뒤, 안내에 따라 물 포함 금식 시간을 지킵니다.',
              },
            ]}
          />
          <Prose>
            <p>
              당뇨·신장 질환·심한 변비가 있는 분은 식이·수분·약 조정이 다를 수 있어, 표준 안내만 따르기보다
              미리 알려 주시는 것이 안전합니다. 금식·수분 제한이 걱정되면 검사 전에 상담하세요.
            </p>
          </Prose>
        </section>

        <section id="prep-day" className="scroll-mt-20 space-y-3">
          <SectionTitle n={3}>정결제 복용, 덜 힘들게 이어가는 방법</SectionTitle>
          <Prose>
            <p>
              정결제의 맛·양·복용 간격은 제품과 처방에 따라 다릅니다. ‘한 번에 빨리 마시기’보다, 안내된 속도와
              물 섭취를 지키면서 꾸준히 이어가는 편이 정결에 도움이 되는 경우가 많습니다.
            </p>
          </Prose>
          <ChecklistPanel
            tone="mint"
            title="복용을 이어가기 쉬운 요령"
            icon={CheckCircleIcon}
            items={[
              '차갑게 식혀 마시거나, 안내에 허용된 방법으로 맛을 조절하기',
              '한 컵씩 나눠 마시며 중간에 짧게 숨 고르기',
              '복용 후 가벼운 걷기로 장 운동을 돕기(무리한 운동은 피하기)',
              '화장실 위치를 미리 확인하고 여유 있게 일정 잡기',
              '복용 시각·물 양을 메모해 빼먹지 않기',
            ]}
          />
          <Banner tone="yellow" icon={ExclamationTriangleIcon}>
            맛이 싫다고 물의 총량을 크게 줄이거나, 약을 몰아서 마시는 방식은 정결 부족·구역·전해질 불균형
            위험을 키울 수 있습니다. 처방 안내를 임의로 변경하지 마세요.
          </Banner>
          <Prose>
            <p>
              구역이 심하면 잠시 쉬었다가 천천히 재개하는 것이 일반적입니다. 그래도 지속되면 혼자 해결하려 하지
              말고 연락해 주세요. 개인 상태에 따라 복용 일정이나 방법이 조정될 수 있습니다.
            </p>
          </Prose>
        </section>

        <section id="medications" className="scroll-mt-20 space-y-3">
          <SectionTitle n={4}>복용 중인 약·건강기능식품</SectionTitle>
          <Prose>
            <p>
              대장내시경 전 약 조정은 안전과 직결됩니다. 혈압약은 소량의 물과 복용이 가능한 경우가 많지만,
              당뇨약·인슐린, 항혈전제(아스피린·와파린 등), 철분제, 일부 당뇨·비만 관련 약제는 미리 확인이
              필요합니다.
            </p>
            <p>
              건강기능식품·한약·다이어트 보조제도 ‘약이 아니라서’ 괜찮다고 단정하기 어렵습니다. 복용 목록을
              적어 오시면 중단·유지 여부를 개인별로 안내할 수 있습니다. 임의로 약을 끊으면 오히려 위험이 커질
              수 있습니다.
            </p>
          </Prose>
          <SoftCard tone="peach">
            <Prose>
              <p>
                <strong className="text-[#0d1117]">진료 전 알려 주시면 좋은 정보</strong> — 복용 약 이름과 용량,
                최근 시술·수술, 알레르기, 녹내장·전립선비대·심장·신장 질환, 임신 가능성, 이전 내시경 때 힘들었던
                점(심한 변비, 구토, 정결 실패 등).
              </p>
            </Prose>
          </SoftCard>
        </section>

        <section id="check-ready" className="scroll-mt-20 space-y-3">
          <SectionTitle n={5}>정결이 잘 됐는지 확인하는 기준</SectionTitle>
          <Prose>
            <p>
              일반적으로 배변이 맑은 노란색·투명에 가깝고 찌꺼기가 거의 없으면 정결이 비교적 잘된 상태로
              설명합니다. 갈색 변, 덩어리, 음식물 찌꺼기가 계속 보이면 시야가 가려질 수 있습니다.
            </p>
            <p>
              다만 색깔만으로 완벽을 보장할 수는 없습니다. 최종적으로는 당일 상태와 의료진 확인이 중요하며,
              정결이 부족하면 추가 준비나 일정 조정이 필요할 수 있습니다. ‘대충 마셨는데 괜찮겠지’보다, 안내된
              양을 끝까지 마치는 편이 재검사를 줄이는 데 도움이 됩니다.
            </p>
          </Prose>
        </section>

        <section id="when-to-call" className="scroll-mt-20 space-y-3">
          <SectionTitle n={6}>중간에 연락이 필요한 경우</SectionTitle>
          <ChecklistPanel
            tone="coral"
            title="복용 중·준비 중 연락이 필요한 증상"
            icon={ExclamationTriangleIcon}
            items={[
              '반복되는 구토로 약을 이어 마시기 어려운 경우',
              '참기 힘든 복통·복부 팽만',
              '심한 어지럼, 실신감, 두근거림',
              '혈변·검은색 변, 발열',
              '알레르기 반응(두드러기·호흡 곤란 등)이 의심되는 경우',
              '안내된 일정을 지키지 못해 정결이 크게 부족한 경우',
            ]}
          />
          <Prose>
            <p>
              위 증상이 있다고 해서 모두 같은 조치가 필요한 것은 아닙니다. 그래도 온라인 정보만으로 용량을
              바꾸거나 검사를 임의로 강행하지 말고, 의료진의 안내를 받는 것이 안전합니다.
            </p>
          </Prose>
        </section>

        <section id="exam-day" className="scroll-mt-20 space-y-3">
          <SectionTitle n={7}>검사 당일·검사 후 주의</SectionTitle>
          <Prose>
            <p>
              검사 당일에는 금식·복장·보호자 동행 등 안내를 따릅니다. 수면(진정) 내시경을 선택한 경우, 당일
              운전·기계 조작·중요한 판단이 필요한 업무는 피해야 합니다. 진정제 영향은 개인마다 다르게 남아 있을
              수 있습니다.
            </p>
            <p>
              검사 후에는 복부 가스·더부룩함이 있을 수 있고, 용종 절제 여부에 따라 식이·활동 제한이 달라질 수
              있습니다. 심한 복통, 지속 출혈, 발열, 어지럼이 있으면 바로 연락하세요. 용종 관련 안내는{' '}
              <Link href="/endoscopy/polyp" className="text-primary font-bold hover:underline">
                용종 절제술
              </Link>{' '}
              페이지를 참고할 수 있습니다.
            </p>
          </Prose>
          <Banner tone="mint" icon={CheckCircleIcon}>
            장 정결이 끝난 뒤에도 ‘조금 먹어도 되겠지’ 하고 안내에 없는 음식·음료를 드시면 시야가 다시 흐려질 수
            있습니다. 허용된 물·시간만 지키는 것이 중요합니다.
          </Banner>
        </section>

        <section id="myths" className="scroll-mt-20 space-y-3">
          <SectionTitle n={8}>장 정결에 대한 흔한 오해</SectionTitle>
          <SoftCard tone="lavender">
            <Prose>
              <p>
                <strong className="text-[#0d1117]">“전날 굶으면 약은 적게 마셔도 된다”</strong> — 금식만으로 대장
                구석의 잔변이 충분히 빠지지 않는 경우가 많습니다. 정결제와 안내된 수분 섭취가 핵심입니다.
              </p>
              <p>
                <strong className="text-[#0d1117]">“한 번 토했으니 검사를 포기해야 한다”</strong> — 구역은 흔하지만,
                쉬는 시간을 두고 이어가거나 의료진과 상의하면 검사를 진행할 수 있는 경우도 있습니다. 혼자
                결정해 일정을 취소하기 전에 문의해 보세요.
              </p>
              <p>
                <strong className="text-[#0d1117]">“정결이 조금 부족해도 의사가 다 본다”</strong> — 숙련된 의료진도
                찌꺼기 뒤의 점막은 완전히 보기 어렵습니다. 작은 병변을 놓칠 위험을 줄이려면 준비가 중요합니다.
              </p>
              <p>
                <strong className="text-[#0d1117]">“젊으면 대장내시경은 필요 없다”</strong> — 연령만으로 단정할 수
                없습니다. 혈변, 배변 습관 변화, 빈혈, 가족력 등이 있으면 이른 검사가 필요할 수 있습니다.
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
          <p className="text-white font-bold text-[16px] mb-2 break-keep">대장내시경 준비가 걱정되시나요?</p>
          <p className="text-white/90 text-[13px] leading-[1.85] break-keep">
            장 정결과 복용약 안내를 개인 상태에 맞춰 상담합니다. 검사 전 궁금한 점을 미리 확인해 보세요.
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
