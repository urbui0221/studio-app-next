import absoluteUrl from 'next-absolute-url'
import React from 'react'
import Layout from '../components/layouts/Layout.component'
import Cover from '../components/sections/Cover'
import List from '../components/sections/Pricing/List'
import Foot from '../components/sections/Services/Foot'

const Pricing = ({resp}) => {
    return (
        <Layout route="Pricing">
            <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Pricing'} route={'Pricing'} />
            <List PricingData={resp}/>
            <Foot />
        </Layout>
    )
}

export default Pricing

export async function getServerSideProps({ req, res }){
    const { origin } = absoluteUrl(req, "localhost:3000");
    const resp = await (await fetch(`${origin}/api/pricing`)).json();
    return {
        props : { resp }
    }
  }
