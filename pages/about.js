import React from 'react'
import Layout from '../components/layouts/Layout.component'
import WeAreTheBest from '../components/sections/About/WeAreTheBest'
import Cover from '../components/sections/Cover'

const About = () => {
    
    return (
      <Layout route="About">
           <Cover background="/images/background/bg_12.jpg" big_style={true} title={'About Us'} route={'About 02'} />
           <WeAreTheBest />
      </Layout>
    )
}

export default About
