import React from 'react'
import styled from 'styled-components'

const Map = () => {
    return (
        <GoogleMap>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4045960654976!2d90.365772195887!3d23.768602646935154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1285441968f%3A0x2bbb7eea1b6323b0!2sMohammadpur%20Dhaka!5e0!3m2!1sen!2sin!4v1613033053741!5m2!1sen!2sin" 
            width={600} height={450} 
            frameBorder={0} 
            style={{border: '0'}} 
            allowFullScreen aria-hidden="false" tabIndex={0} />
        </GoogleMap>
    )
}

export default Map

const GoogleMap = styled.div`
max-width : 120rem;
margin: 0 auto;
margin-bottom : 10rem;
iframe{
    padding : 0 3rem;
}
`