import useSWR from 'swr'
import fetcher from '../utils/fetcher' 
import Layout from '../components/layouts/Layout.component'
import Cover from '../components/sections/Cover'
import Foot from '../components/sections/Services/Foot'
import List from '../components/sections/Services/List'
import Loader from '../components/ui/Loader.component'
import  Error from './_error'

export const getServerSideProps = async({query}) => {
    return {
        props : { query }
    }
}
const Services = ({query}) => {
    const { data } = useSWR('/api/services',fetcher);

    if(!data){
        return <Loader />
    }
    const routeData = data?.find(service => service.id === query.service);
    console.log(routeData)

    if(routeData === undefined){
        return <Error statusCode={404} />
    }

    return (
        <Layout route="Services">
            <Cover background={routeData.image} big_style={false} title={routeData.name} route={'Our Services 02'} />
                <List ServicesData={routeData}/>
            <Foot />Sayantan
        </Layout>
    )
}

export default Services
