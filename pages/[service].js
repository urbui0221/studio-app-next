import useSWR from 'swr'
import fetcher from '../utils/fetcher' 
import Layout from '../components/layouts/Layout.component'
import Cover from '../components/sections/Cover'
import Foot from '../components/sections/Services/Foot'
import List from '../components/sections/Services/List'

export const getServerSideProps = async({query}) => {
    return {
        props : { query }
    }
}
const Services = ({query}) => {
    const { data } = useSWR('/api/services',fetcher);

    if(!data){
        return <div>Loading...</div>
    }
    const routeData = data?.find(service => service.id === query.service);
    console.log(routeData)

    return (
        <Layout route="Services">
            <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Our Services'} route={'Our Services 02'} />
                <List ServicesData={routeData}/>
            <Foot />
        </Layout>
    )
}

export default Services
