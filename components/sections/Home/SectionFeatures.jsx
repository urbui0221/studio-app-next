import React from "react"
import styled from "styled-components"
import IconBoxesLayout from "../../ui/IconBoxes"

const SectionFeatures = () => {

  return (
    <FeaturesContainer>
      <div className='section pb-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <hr className='mb-8'></hr>
            </div>
          </div>
          <div className='row'>
            {IconsData.map((data, index) => (
                <IconBoxesLayout key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </FeaturesContainer>
  )
}

const IconsData = [
    {
        iconClassName: 'ns-tripod',
        title: 'FILMING SERVICES',
        description: "We can film your project whether it is a commercial advertise, a short film or a document film. We have expertise in these fields.",
        backgroundImage: 'images/icon-boxes/icon_bg_1.png',
    },
    {
        iconClassName: 'ns-seats',
        title: 'WORKSHOPS &amp; PRIVATE TUITION',
        description: `Some workshops have invited us to come lecturing. We also
        offer private tuitions for absolute beginners or mid-level
        producers who need more advice.`,
        backgroundImage: 'images/icon-boxes/icon_bg_2.png',
    },
    {
        iconClassName: 'ns-video-camera',
        title: 'Equipment hire',
        description: `Sometimes we don’t use our equipment so you can hire them
        for your filming. Check our schedule and contact if it suits
        your time.`,
        backgroundImage: 'images/icon-boxes/icon_bg_1.png',
    }
]


const FeaturesContainer = styled.div`
  
`

export default SectionFeatures
