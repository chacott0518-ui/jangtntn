import HeroSection from '@/components/sections/HeroSection'
import QuickMenu from '@/components/sections/QuickMenu'
import DepartmentCards from '@/components/sections/DepartmentCards'
import DoctorSection from '@/components/sections/DoctorSection'
import ClinicInfo from '@/components/sections/ClinicInfo'

export default function Home() {
  return (
    <main className="pb-24 md:pb-0">
      <HeroSection />
      <QuickMenu />
      <DepartmentCards />
      <DoctorSection />
      <ClinicInfo />
    </main>
  )
}
