import React from "react"
import styled from "styled-components"
import ListItem from "./ListItem"
const List = ({PricingData}) => {
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


export default List
