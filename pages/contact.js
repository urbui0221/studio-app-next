import React from 'react'
import Layout from '../components/layouts/Layout.component'
import Form from '../components/sections/Contact/Form'
import Map from '../components/sections/Contact/Map'
import Cover from '../components/sections/Cover'

const Contact = () => {

    return (
        <Layout route="Contact Us">
        <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Contact Us'} route={'Contact'} />
        <Form />
        <Map />
        </Layout>
    )
}

export default Contact

