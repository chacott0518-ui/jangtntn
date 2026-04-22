'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ClockIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import { ADDRESS } from '@/lib/constants'

export default function InfoPage() {
  const [tab, setTab] = useState<'hours' | 'surgery' | 'location'>('hours')

  return (
    <div className="bg-white min-h-screen pb-24 md:pb-0">
      <div className="relative overflow-hidden h-[260px] md:h-[360px] lg:h-[480px]">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
          alt="진료안내 장튼튼항외과"
          fill className="object-cover" sizes="100vw" priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.82) 40%,rgba(255,255,255,0.4) 65%,transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,transparent 50%,rgba(255,255,255,0.6) 80%,rgba(255,255,255,1) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-10">
          <nav className="text-[12px] text-[#94a3b8] mb-3">
            홈 / 병원소개 / <strong className="text-[#0d1117]">진료안내</strong>
          </nav>
          <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-black text-[#0d1117] mb-2">진료안내</h1>
          <p className="text-[14px] md:text-[16px] text-[#555] font-semibold">진료시간 · 수술안내 · 오시는 길</p>
        </div>
      </div>

      {/* 탭 */}
      <div className="sticky top-16 bg-white z-10 border-b border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 flex">
          {[
            { key: 'hours', label: '🕐 진료시간' },
            { key: 'surgery', label: '⚕️ 수술안내' },
            { key: 'location', label: '📍 오시는 길' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key as typeof tab)}
              className={`flex-1 py-3.5 text-[13px] md:text-[14px] font-bold border-b-2 transition-colors ${
                tab === t.key ? 'border-primary text-primary' : 'border-transparent text-[#9ca3af]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-8 lg:py-12">

        {/* 진료시간 */}
        {tab === 'hours' && (
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>
                <ClockIcon className="w-5 h-5 text-white" />
              </span>
              <h2 className="text-[18px] font-bold text-[#0d1117]">진료시간</h2>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between rounded-xl bg-[#f8fafb] px-5 py-4">
                <span className="text-[14px] font-semibold text-[#374151]">평일</span>
                <span className="text-[14px] font-black text-[#0d1117]">09:00 ~ 18:00</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-[#f0f7ff] px-5 py-4">
                <span className="text-[14px] font-semibold text-[#374151]">토요일</span>
                <span className="text-[14px] font-black text-[#0d1117]">09:00 ~ 15:00</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-[#f8fafb] px-5 py-4">
                <span className="text-[14px] font-semibold text-[#374151]">점심시간</span>
                <span className="text-[14px] font-black text-[#0d1117]">13:00 ~ 14:00</span>
              </div>
            </div>
            <div className="space-y-1.5 pl-1">
              <p className="text-[13px] font-bold text-primary">※ 토요일은 점심시간 없이 진료합니다</p>
              <p className="text-[12px] text-[#94a3b8]">일요일 · 공휴일 휴진</p>
              <p className="text-[12px] text-[#94a3b8]">공휴일 진료 여부는 사전 문의 바랍니다</p>
            </div>
          </div>
        )}

        {/* 수술안내 */}
        {tab === 'surgery' && (
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d7fc4,#0d9488)' }}>
                <ShieldCheckIcon className="w-5 h-5 text-white" />
              </span>
              <h2 className="text-[18px] font-bold text-[#0d1117]">수술안내</h2>
            </div>

            {[
              {
                title: '수술 전 주의사항',
                icon: '💊',
                items: [
                  '혈압약을 평소에 복용 중이신 분은 금식이더라도 아침에 꼭 드시고 오십시오.',
                  '항응고제 성분이 함유된 아스피린 같은 약은 수술 7일 전부터 복용을 중단해 주십시오.',
                ],
              },
              {
                title: '마취 및 수술시간',
                icon: '🩺',
                items: [
                  '마취는 보통 미추마취로 진행됩니다.',
                  '수술시간은 약 10~30분 정도 소요됩니다.',
                  '마취를 위한 마취 전문의가 상주해 계십니다.',
                ],
              },
              {
                title: '수술 전 검사',
                icon: '🔬',
                items: [
                  '수술 전 검사는 수술을 안전하게 하기 위해 반드시 필요합니다.',
                  '간기능, 신장기능, 감염검사, 염증, 빈혈 여부 등을 검사합니다.',
                  '이상이 있을 경우 미리 충분한 조치를 취한 후 수술을 진행합니다.',
                ],
              },
              {
                title: '수술 후 통증 관리',
                icon: '💉',
                items: [
                  '통증조절펌프(PCA)로 통증을 조절합니다.',
                  '심한 통증이 있는 경우 추가로 진통제를 복용하여 조절할 수 있습니다.',
                  '배변 20~30분 전 진통제를 복용하기도 합니다.',
                ],
              },
              {
                title: '배변 관리',
                icon: '🌿',
                items: [
                  '수술 다음날부터 대변을 보시기 권장합니다.',
                  '배변 후 반드시 좌욕을 하십시오.',
                  '좌욕 후에는 수술 부위를 완전히 건조시키는 것이 중요합니다.',
                ],
              },
              {
                title: '좌욕 방법',
                icon: '🛁',
                items: [
                  '수술 부위를 따뜻한 물(약 38~40℃)에 담가줍니다.',
                  '수술 후 첫 1주일: 1~2분, 2주째부터 약 20일간: 3~5분.',
                  '하루 3~5회 좌욕을 시행합니다.',
                ],
              },
              {
                title: '식사 및 생활 주의사항',
                icon: '🥗',
                items: [
                  '수술 다음날부터 정상적인 식사가 가능합니다.',
                  '섬유소가 풍부한 식단을 권장하며 충분한 수분을 섭취하십시오.',
                  '육류 및 유제품은 수술 후 약 2~3일 정도는 드시지 않기를 권장합니다.',
                  '음주는 약 1달 반 정도 삼가야 합니다.',
                  '식이섬유는 수술 다음날부터 1일 1회 공복에 복용하고, 반드시 물 2컵 이상 드십시오.',
                ],
              },
              {
                title: '내원 일정',
                icon: '📅',
                items: [
                  '수술 다음날은 반드시 병원에 내원해 주십시오.',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="p-5 rounded-2xl bg-[#f8fafb]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[18px]">{section.icon}</span>
                  <h3 className="text-[14px] font-bold text-[#0d1117]">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-[13px] text-[#374151] leading-[1.85]">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* 오시는 길 */}
        {tab === 'location' && (
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0d9488,#0d7fc4)' }}>
                <MapPinIcon className="w-5 h-5 text-white" />
              </span>
              <h2 className="text-[18px] font-bold text-[#0d1117]">오시는 길</h2>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl bg-[#f8fafb] px-5 py-4">
                <p className="text-[11px] font-bold text-primary mb-1">주소</p>
                <p className="text-[14px] font-semibold text-[#0d1117] leading-relaxed">{ADDRESS}</p>
              </div>
              {[
                { icon: '🚇', label: '지하철', desc: '김포골드라인 구래역 1번출구 → 도보 3분' },
                {
                  icon: '🚌', label: '버스',
                  desc: '간선 60-2, 70, 700, 700-1\n좌석 22, 800 | 일반 3, 33, 60-3, 81, 81-1, 90\n직행 8000 | 급행 8600 | 광역 M6117, M6427',
                },
                { icon: '🅿️', label: '주차', desc: '계림 M스퀘어 지하주차장 (진료 시 무료)' },
                { icon: '📞', label: '전화', desc: '031-987-7282' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start p-4 rounded-xl bg-[#f8fafb]">
                  <span className="text-[20px] shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-[12px] font-bold text-primary mb-0.5">{item.label}</p>
                    <p className="text-[13px] text-[#374151] leading-[1.8] whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              ))}
              
                <a href="https://map.naver.com/p/entry/place/1152854964"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold text-white mt-2 shadow-[0_4px_16px_rgba(13,127,196,0.25)] hover:-translate-y-0.5 transition-all"
                style={{ background: 'linear-gradient(135deg, #0d7fc4, #0d9488)' }}
              >
                🗺 네이버 지도 크게 보기
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}