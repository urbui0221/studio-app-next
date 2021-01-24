import absoluteUrl from 'next-absolute-url'
import Layout from '../../components/layouts/Layout.component'
import Cover from '../../components/sections/Cover'
import Foot from '../../components/sections/Services/Foot'
import List from '../../components/sections/Services/List'

const Services = ({resp}) => {
    console.log(resp);
    return (
        <Layout route="Services">
            <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Our Services'} route={'Our Services 02'} />
            <List ServicesData={resp}/>
            <Foot />
        </Layout>
    )
}

export default Services

export async function getServerSideProps({req,_,query}){
    const { origin } = absoluteUrl(req, "localhost:3000");
    let resp = await (await fetch(`${origin}/api/services`)).json();
    resp = resp.filter(service => service.id === query.id)[0];
    return {
        props : { resp }
    }
}