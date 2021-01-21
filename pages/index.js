import Layout from '../components/layouts/Layout.component'
import Awards from '../components/sections/Home/Awards'
import HeaderCarousel from '../components/sections/Home/HeaderCarousel.component'
import Newsletter from '../components/sections/Home/Newsletter'
import Partners from '../components/sections/Home/Partners'
import SectionFeatures from '../components/sections/Home/SectionFeatures'
import SectionWorkWithEstablished from '../components/sections/Home/SectionWorkWithEstablished'
import OurFilms from "../components/sections/Home/OurFilms"
import MeetOurTeam from '../components/sections/Home/MeetOurTeam'

export default function Home() {
  return (
    <Layout route="Home">
      <HeaderCarousel />
      <SectionWorkWithEstablished />  
      <SectionFeatures />
      <Awards />
      <OurFilms />
      <MeetOurTeam />
      <Partners />
      <Newsletter />
    </Layout>
  )
}
 