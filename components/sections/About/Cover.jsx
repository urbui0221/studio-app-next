import React from "react"
import styled from "styled-components"

const AboutCover = () => {
  return (
    <Container>
      <div className='section page-title big-style'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='text-center-sm'>
                <h1 className='title'>About Us</h1>
                <div className='breadcrumbs'>
                  <ul>
                    <li>
                      <a href='./'>Home</a>
                    </li>
                    <li>About 02</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-image: url("/images/background/bg_12.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  .page-title.big-style {
    padding-top: 230px;
    padding-bottom: 330px;
  }
  .page-title {
    padding-top: 145px;
    padding-bottom: 125px;
    color: #333;
    text-align: left;
    display: block;
    .title {
      font-family: Merriweather, Georgia, serif;
      font-weight: 400;
      font-style: normal;
      font-size: 56px;
      line-height: 1;
      letter-spacing: 0;
      color: #333;
      display: block;
      position: relative;
      z-index: 97;
      margin-top: 0;
    }
  }
  .breadcrumbs {
    display: block;
    z-index: 98;
    padding: 0;
    margin-top: 30px;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    line-height: 1;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        display: inline-block;
        max-width: 700px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        :after {
          content: "/";
          color: #ababab;
          margin-left: 10px;
        }

        :last-child {
          color: #da0e2b;
          border-bottom: 1px solid #da0e2b;
          margin-left: 6px;

          :after {
            content: "";
            margin-left: 0;
          }
        }

        a {
          color: #ababab;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .text-center-sm {
      text-align: center;
    }
    .page-title.big-style {
      padding-top: 145px;
      padding-bottom: 125px;
      background-color: #f6f7f7;
    }
  }
`

export default AboutCover
