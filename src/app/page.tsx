import HeroSection from '@/components/sections/HeroSection'
import QuickMenu from '@/components/sections/QuickMenu'
import DepartmentCards from '@/components/sections/DepartmentCards'
import DoctorSection from '@/components/sections/DoctorSection'
import ClinicInfo from '@/components/sections/ClinicInfo'
import HomeFaq from '@/components/sections/HomeFaq'

export default function Home() {
  return (
    <main className="home-main">
      <HeroSection />
      <QuickMenu />
      <DepartmentCards />
      <DoctorSection />
      <ClinicInfo />
      <HomeFaq />
    </main>
  )
}
