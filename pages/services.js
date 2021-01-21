import React from 'react'
import Layout from '../components/layouts/Layout.component'
import Cover from '../components/sections/Cover'
import Foot from '../components/sections/Services/Foot'
import List from '../components/sections/Services/List'

const Services = () => {
    return (
        <Layout route="Services">
            <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Our Services'} route={'Our Services 02'} />
            <List />
            <Foot />
        </Layout>
    )
}

export default Services
