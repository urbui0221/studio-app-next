import { useEffect, useState } from 'react'

export default () => {

    const isSSR = typeof window === "undefined";

    const [ scrollState,setScroll ] = useState(0);

    useEffect(_ => {
        window.addEventListener('scrolly',eve => {
            console.log(eve);
        })
    })

    return scrollState;
}