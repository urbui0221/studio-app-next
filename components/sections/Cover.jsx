import React from "react"
import styled from "styled-components"
import Link from "next/link"

const AboutCover = ({background, big_style, title, route}) => {
  return (
    <Container background={background}>
      <div className={`section page-title ${big_style ? 'big-style': ''}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='text-center-sm'>
                <h1 className='title'>{title}</h1>
                <div className='breadcrumbs'>
                  <ul>
                    <li>
                      <Link href='/'>Home</Link>
                    </li>
                    <li>{route}</li>
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

  background-image: url(${props => props.background});
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
    color: var(--tertiary2);
    text-align: left;
    display: block;
    .title {
      font-family: var(--head);
      font-weight: 400;
      font-style: normal;
      font-size: 56px;
      line-height: 1;
      letter-spacing: 0;
      color: var(--tertiary2);
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
    font-family: var(--display);
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
          color: var(--gray67);
          margin-left: 10px;
        }

        :last-child {
          color: var(--primary);
          border-bottom: 1px solid var(--primary);
          margin-left: 6px;

          :after {
            content: "";
            margin-left: 0;
          }
        }

        a {
          color: var(--gray67);
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
      background-color: var(--lynxWhite1);
    }
  }
`

export default AboutCover
