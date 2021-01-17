import Layout from '../components/layouts/Layout.component'
import Awards from '../components/sections/Awards'
import HeaderCarousel from '../components/sections/HeaderCarousel.component'
import Newsletter from '../components/sections/Newsletter'
import Partners from '../components/sections/Partners'
import SectionFeatures from '../components/sections/SectionFeatures'
import SectionWorkWithEstablished from '../components/sections/SectionWorkWithEstablished'

export default function Home() {
  return (
    <Layout route="Home">
      <HeaderCarousel />
      <SectionWorkWithEstablished />  
      <SectionFeatures />
      <Awards />
      <Partners />
      <Newsletter />
    </Layout>
  )
}
 