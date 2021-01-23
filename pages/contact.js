import React from 'react'
import Layout from '../components/layouts/Layout.component'
import Form from '../components/sections/Contact/Form'
import Cover from '../components/sections/Cover'
import Newsletter from '../components/sections/Home/Newsletter'

const Contact = () => {
    return (
        <Layout route="Contact Us">
        <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Contact Us'} route={'Contact'} />
        <Form />
          <Newsletter />
        </Layout>
    )
}

export default Contact
