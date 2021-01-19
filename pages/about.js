import React from 'react'
import Layout from '../components/layouts/Layout.component'
import AboutCover from '../components/sections/About/Cover'
import WeAreTheBest from '../components/sections/About/WeAreTheBest'

const About = () => {
    
    return (
      <Layout route="About">
           <AboutCover />
           <WeAreTheBest />
      </Layout>
    )
}

export default About
