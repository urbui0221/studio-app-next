import React from "react"
import styled from "styled-components"
import ListItem from "./ListItem"

const List = () => {
  return (
    <Container>
    <div className="section pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="mt-13 hidden-sm"></div>
                {ServicesData.map((service, index) => (
                    <ListItem key={index} {...service} />
                ))}
            </div>
        </div>
    </div>
    </div>
    </Container>
  )
}

const ServicesData = [
    {
        alternate: false,
        title: 'Filming Services',
        src: '/images/services/services_1.jpg',
        description: 'Doloremque, ad. Vero veniam dicta aliquid blanditiis ullam quibusdam, accusamus, eius quia molestias nihil temporibus nam praesentium accusantium odit repellat. Verblanditiis ullam quibusdam eius'
    },
    {
        alternate: true,
        title: 'Studio Hire',
        src: '/images/services/services_2.jpg',
        description: 'Doloremque, ad. Vero veniam dicta aliquid blanditiis ullam quibusdam, accusamus, eius quia molestias nihil temporibus nam praesentium accusantium odit repellat. Verblanditiis ullam quibusdam eius'
    },
    {
        alternate: false,
        title: 'Workshops &amp; Private Tuition',
        src: '/images/services/services_3.jpg',
        description: 'Doloremque, ad. Vero veniam dicta aliquid blanditiis ullam quibusdam, accusamus, eius quia molestias nihil temporibus nam praesentium accusantium odit repellat. Verblanditiis ullam quibusdam eius'
    },
    {
        alternate: true,
        title: 'Equipment Hire',
        src: '/images/services/services_4.jpg',
        description: 'Doloremque, ad. Vero veniam dicta aliquid blanditiis ullam quibusdam, accusamus, eius quia molestias nihil temporibus nam praesentium accusantium odit repellat. Verblanditiis ullam quibusdam eius'
    },
]

const Container = styled.div`

`

export default List
