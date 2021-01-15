import Layout from "../components/layouts/Layout.component"
import { useRouter } from 'next/router'

const production = () => {

    const Router = useRouter();

    return (
       <Layout route="production">

       </Layout>
    )
}

export default production
