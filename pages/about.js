import React from 'react'
import Layout from '../components/layouts/Layout.component'
import WeAreTheBest from '../components/sections/About/WeAreTheBest'
import Cover from '../components/sections/Cover'
import absoluteUrl from 'next-absolute-url'

const About = ({resp}) => {
    
    return (
      <Layout route="About">
           <Cover background="/images/background/bg_12.jpg" big_style={true} title={'About Us'} route={'About 02'} />
           <WeAreTheBest team={resp}/>
      </Layout>
    )
}

export default About

export async function getServerSideProps({ req, res }){
  const { origin } = absoluteUrl(req, "localhost:5000");
  const resp = await (await fetch(`${origin}/api/team`)).json();
  return {
      props : { resp }
  }
}
