import fs from 'fs'

const path = 'src/components/layout/Header.tsx'
let h = fs.readFileSync(path, 'utf8')

h = h.replace(
  `import KakaoConsultButton from '@/components/ui/KakaoConsultButton'`,
  `import PendingFeatureButton from '@/components/ui/PendingFeatureButton'`
)

// Desktop dropdown panels → teal gradient + white links
h = h.replaceAll(
  `className="rounded-2xl shadow-[0_8px_32px_rgba(11,120,158,0.18)] py-2 min-w-[170px] overflow-hidden bg-white"`,
  `className="rounded-2xl shadow-[0_8px_32px_rgba(13,127,196,0.2)] py-2 min-w-[170px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d7fc4 0%, #0d9488 100%)' }}`
)
h = h.replaceAll(
  `className="rounded-2xl shadow-[0_8px_32px_rgba(11,120,158,0.18)] py-2 min-w-[150px] overflow-hidden bg-white"`,
  `className="rounded-2xl shadow-[0_8px_32px_rgba(13,127,196,0.2)] py-2 min-w-[150px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d7fc4 0%, #0d9488 100%)' }}`
)
h = h.replaceAll(
  `className="block px-5 py-2.5 text-[13px] font-semibold text-[#0B789E] hover:text-[#075F7E] hover:bg-[#0B789E]/5 transition-all"`,
  `className="block px-5 py-2.5 text-[13px] font-semibold text-white/90 hover:text-white hover:bg-white/15 transition-all"`
)

// Mobile drawer → teal + white text
h = h.replace(`background: '#ffffff',`, `background: 'linear-gradient(160deg, #0d7fc4 0%, #0a6ba8 40%, #0d9488 100%)',`)
h = h.replace(
  `borderBottom: '1px solid rgba(11,120,158,0.15)', flexShrink: 0 }}>\n              <span style={{ color: '#0B789E', fontWeight: 900, fontSize: '15px' }}>메뉴</span>`,
  `borderBottom: '1px solid rgba(255,255,255,0.2)', flexShrink: 0 }}>\n              <span style={{ color: 'white', fontWeight: 900, fontSize: '15px' }}>메뉴</span>`
)
h = h.replaceAll(`borderBottom: '1px solid rgba(11,120,158,0.08)'`, `borderBottom: '1px solid rgba(255,255,255,0.1)'`)
h = h.replaceAll(
  `padding: '14px 20px', color: '#0B789E', fontWeight: 700, fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer'`,
  `padding: '14px 20px', color: 'white', fontWeight: 700, fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer'`
)
h = h.replace(`style={{ color: '#075F7E', fontSize: '11px' }}`, `style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}`)
h = h.replace(
  `style={{ overflow: 'hidden', background: 'rgba(11,120,158,0.04)' }}`,
  `style={{ overflow: 'hidden', background: 'rgba(0,0,0,0.15)' }}`
)
h = h.replaceAll(
  `padding: '10px 12px', borderRadius: '10px', color: '#0B789E', fontSize: '13px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%'`,
  `padding: '10px 12px', borderRadius: '10px', color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%'`
)
h = h.replaceAll(
  `background: '#0B789E', flexShrink: 0`,
  `background: 'rgba(255,255,255,0.5)', flexShrink: 0`
)
h = h.replace(
  `borderTop: '1px solid rgba(11,120,158,0.12)'`,
  `borderTop: '1px solid rgba(255,255,255,0.2)'`
)

// Drawer CTA → 온라인예약
h = h.replace(
  `{/* 하단 카톡상담 버튼 */}
            <div style={{ padding: '16px', flexShrink: 0, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <KakaoConsultButton
                className="w-full"
                style={{ width: '100%', padding: '14px', borderRadius: '16px', background: 'linear-gradient(135deg, #0d7fc4, #0d9488)', color: 'white', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer' }}
              >
                카톡상담
              </KakaoConsultButton>
            </div>`,
  `{/* 하단 온라인예약 버튼 */}
            <div style={{ padding: '16px', flexShrink: 0, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <PendingFeatureButton
                message="온라인예약 기능을 준비하고 있습니다."
                className="w-full"
                style={{ width: '100%', padding: '14px', borderRadius: '16px', background: 'rgba(255,255,255,0.25)', color: 'white', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer' }}
              >
                온라인예약
              </PendingFeatureButton>
            </div>`
)

h = h.replace(`alt="장튼튼항외과 로고"`, `alt="장튼튼항외과의원 로고"`)

fs.writeFileSync(path, h)
console.log('Header updated')
