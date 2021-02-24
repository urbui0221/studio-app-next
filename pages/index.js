import Layout from '../components/layouts/Layout.component'
import Awards from '../components/sections/Home/Awards'
import Newsletter from '../components/sections/Blog/Newsletter'
import Partners from '../components/sections/Home/Partners'
import SectionFeatures from '../components/sections/Home/SectionFeatures'
import SectionWorkWithEstablished from '../components/sections/Home/SectionWorkWithEstablished'
import OurFilms from "../components/sections/Home/OurFilms"
import MeetOurTeam from '../components/sections/Home/MeetOurTeam'
import absoluteUrl from 'next-absolute-url'
import CarouselHead from '../components/sections/Home/CarouselHead'
import { useState } from 'react';

export default function Home({ resp }) {
  return (
    <Layout route="Home">
      <CarouselHead />
      <SectionWorkWithEstablished />  
      <SectionFeatures />
      <Awards />
      <OurFilms />
      <MeetOurTeam team={resp}/>
      <Partners />
      <Newsletter />
    </Layout>
  )
}

export async function getServerSideProps({ req, res }){
  const { origin } = absoluteUrl(req, "localhost:5000");
  const resp = await (await fetch(`${origin}/api/team`)).json();
  return {
      props : { resp }
  }
}
