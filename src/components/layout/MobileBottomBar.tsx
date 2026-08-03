'use client'

import { PhoneIcon } from '@heroicons/react/24/solid'
import PendingFeatureButton from '@/components/ui/PendingFeatureButton'

export default function MobileBottomBar() {
  return (
    <div
      className="mobile-bottom-bar md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mobile-bottom-bar-grid">
        <a href="tel:0319877282" className="mobile-bottom-bar-btn mobile-bottom-bar-btn--phone">
          <PhoneIcon className="mobile-bottom-bar-icon" aria-hidden />
          <span>전화상담</span>
        </a>
        <PendingFeatureButton
          message="카카오상담 기능을 준비하고 있습니다."
          className="mobile-bottom-bar-btn mobile-bottom-bar-btn--kakao"
        >
          <svg className="mobile-bottom-bar-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.67-.15.56-.96 3.58-1 3.73 0 .09.03.18.1.23a.26.26 0 00.25.02c.35-.05 4.02-2.64 4.66-3.08.43.06.87.09 1.33.09 5.52 0 10-3.58 10-7.66S17.52 3 12 3z" />
          </svg>
          <span>카카오상담</span>
        </PendingFeatureButton>
      </div>
    </div>
  )
}
