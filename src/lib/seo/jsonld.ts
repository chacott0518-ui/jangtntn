import {
  ADDRESS_STRUCTURED,
  DOCTOR,
  ENTITY_IDS,
  FAX,
  GEO,
  HOURS,
  LOGO_PATH,
  NAVER_MAP_URL,
  OG_IMAGE_PATH,
  PHONE,
  SAME_AS,
  SITE_NAME,
  SITE_NAME_SHORT,
  SITE_URL,
  absoluteUrl,
  physicianId,
} from '@/lib/site-config'
import { DEFAULT_DESCRIPTION } from '@/lib/site-config'

export function postalAddressLd() {
  return {
    '@type': 'PostalAddress' as const,
    ...ADDRESS_STRUCTURED,
  }
}

export function medicalClinicLd() {
  return {
    '@type': 'MedicalClinic' as const,
    '@id': ENTITY_IDS.medicalClinic,
    name: SITE_NAME,
    alternateName: SITE_NAME_SHORT,
    url: SITE_URL,
    logo: absoluteUrl(LOGO_PATH),
    image: absoluteUrl(OG_IMAGE_PATH),
    description: DEFAULT_DESCRIPTION,
    telephone: PHONE,
    faxNumber: FAX,
    address: postalAddressLd(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: HOURS.weekday.open,
        closes: HOURS.weekday.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: HOURS.saturday.open,
        closes: HOURS.saturday.close,
      },
    ],
    medicalSpecialty: 'Surgery',
    availableService: [
      { '@type': 'MedicalProcedure', name: '치핵 수술' },
      { '@type': 'MedicalProcedure', name: '대장내시경' },
      { '@type': 'MedicalProcedure', name: '위내시경' },
      { '@type': 'MedicalProcedure', name: '치열 치료' },
      { '@type': 'MedicalProcedure', name: '치루 수술' },
    ],
    employee: {
      '@type': 'Physician',
      '@id': physicianId(),
      name: DOCTOR.name,
      jobTitle: DOCTOR.jobTitle,
      medicalSpecialty: 'Surgery',
      description: DOCTOR.description,
      alumniOf: DOCTOR.alumniOf.map((name) => ({
        '@type': 'CollegeOrUniversity',
        name,
      })),
      worksFor: { '@id': ENTITY_IDS.medicalClinic },
    },
    hasMap: NAVER_MAP_URL,
    sameAs: [...SAME_AS],
  }
}

export function websiteLd() {
  return {
    '@type': 'WebSite' as const,
    '@id': ENTITY_IDS.website,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': ENTITY_IDS.medicalClinic },
    inLanguage: 'ko-KR',
  }
}

export function siteGraphLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteLd(), medicalClinicLd()],
  }
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
