import HeroSlider from "../components/HeroSlider"
import AboutSection from "../components/AboutSection"
import PhilosophySection from "../components/PhilosophySection"
import TechnicalService from "../components/TechnicalService"
import SolutionsUnit from "../components/SolutionsUnit"
import SoftServices from "../components/SoftServices"
import ClientLogo from "../components/ClientLogo"


function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <PhilosophySection />
      <TechnicalService />
      <SolutionsUnit />
      <SoftServices />
      <ClientLogo />
    </>
  )
}

export default Home
