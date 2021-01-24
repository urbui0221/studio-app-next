import React from "react"
import styled from "styled-components"
import ListItem from "./ListItem"

const List = ({ServicesData}) => {
  return (
    <Container>
    <div className="section pt-5 pb-5">
      <div className="container">
          <div className="row">
              <div className="col-sm-12">
                  <div className="mt-13 hidden-sm"></div>
                  {ServicesData.data.map((service, index) => (
                      <ListItem key={index} {...service} />
                  ))}
              </div>
          </div>
      </div>
    </div>
    </Container>
  )
}


const Container = styled.div`

`

export default List
