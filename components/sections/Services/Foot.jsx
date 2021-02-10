import React from "react"
import styled from "styled-components"
import Button from "../../ui/Button"

const Foot = () => {
  return (
    <Container>
      <div className='section pt-2 pb-13'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='text-center'>
                <h2 className='section-title fz-24 mb-2'>
                  We work with established agencies, labels and <br />
                  organizations, as well as young talents and startups.
                </h2>
                <div className='mt-4'></div>
                <Button color={'#ffffff'} backgroundColor={'#da0e2b'} padding={'0 20px'} title={'Contact Us'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
.section-title {
    font-size: 34px;
    color: var(--tertiary2);
    line-height: 1.4em;
    font-family: var(--head);
    font-weight: 400;
    font-style: normal;
    text-transform: none;
}
`

export default Foot
