import React from "react"
import styled from "styled-components"
import ListItem from "./ListItem"
const List = () => {
  return (
    <div className='section pt-5 pb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='mt-18 hidden-sm'></div>
            {PricingData.map((listitem, index) => (
                <ListItem key={index} {...listitem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Container = styled.div``

const PricingData = [
  {
    alternate: false,
    title: "Filming Services",
    iconContainerClasses: '',
    iconClassName: 'ns-tripod',
    description: ` Nine Studio provides camera crews for location and
    studio filming, at extremely competitive rates. Our
    award-winning crews are available for commercial,
    corporate and television work, throughout the UK and
    abroad. We work with multiple shooting formats.`,
  },
  {
    alternate: true,
    title: " Workshops &amp; Private Tuition",
    iconContainerClasses: 'primary-color',
    iconClassName: 'ns-seats',
    description: `In addition to the production of films and video
      campaigns, Nine Studio also offers a variety of
      Workshops &amp; Private Tuition with content we produce,
      which makes it incredibly easy for our clients to embed
      videos anywhere on their websites.`,
  },
  {
    alternate: false,
    title: "Equipment Hire",
    iconContainerClasses: 'black-color',
    iconClassName: 'ns-video-camera',
    description: `At Nine Studio we now offer 4K Commercial Drone filming
    in-house. Our specialist drone pilot is fully qualified
    with The Basic National UAS Certificate (BNUC-S) and we
    have the latest kit in our kit store to really make sure
    your production is the best quality`,
  },
  {
    alternate: true,
    title: "Studio Hire",
    iconContainerClasses: '',
    iconClassName: 'ns-cinema-screen',
    description:
      `When filming a project in one of our 3 in-house studios,
      we also offer a set design and construction service.
      From simple presenter-led lectern set-ups and branded
      talking head backdrops, through to elaborate stages,
      platforms and installations.`,
  },
]

export default List
