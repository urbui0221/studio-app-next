import Head from 'next/head'
import React from 'react'

const Layout = ({route,children}) => (
    <>
        <Head>
            <title>Nine Studio | {route}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            {children}
        </main>
    </>
)

export default Layout
