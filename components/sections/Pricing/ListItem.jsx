import React from "react"
import styled from "styled-components"
import Link from "next/link"

const ListItem = ({
  alternate,
  iconClassName,
  iconContainerClasses,
  title,
  description,
}) => {
  return (
    <Container>
      <div
        className={`film-our-services type-icon ${
          alternate ? "right" : ""
        } mb-7`}
      >
        <Link href='/'>
          <div className='row'>
            <div className='col-md-3 col-icon'>
              <div
                className={`icon ${
                  iconContainerClasses ? iconContainerClasses : ""
                }`}
              >
                <i className={iconClassName}></i>
              </div>
            </div>
            <div className='col-md-9 col-text'>
              <div className='text'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{ __html: title }}
                ></div>
                <div
                  className='content'
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .film-our-services.type-icon .col-icon {
    z-index: 97;
  }

  .film-our-services.type-icon .col-icon .icon {
    width: 100%;
    min-height: 255px;
    background-color: var(--baseBg);
    color: var(--primary);
    font-size: 100px;
    text-align: center;
    -moz-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    margin-top: -50px;
    position: relative;
  }

  .film-our-services.type-icon .col-icon .icon i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .film-our-services.type-icon .col-text {
    z-index: 96;
  }

  .film-our-services.type-icon .col-text .text {
    background-color: #f6f7f7;
    padding: 40px 70px;
    min-height: 270px;
    position: relative;
  }

  .film-our-services.type-icon .col-text .text:before {
    content: "";
    display: block;
    width: 100px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100px;
    background-color: #f6f7f7;
  }

  .film-our-services.type-icon .col-text .text .title {
    font-family: Merriweather;
    font-weight: 400;
    font-size: 24px;
    color: #333;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .film-our-services.type-icon:hover .col-text .text .title {
    color: var(--primary);
  }

  .film-our-services.type-icon .col-text .text .content {
    font-family: Lato;
    font-size: 15px;
    color: #696969;
    line-height: 1.7;
    display: block;
    margin-top: 20px;
    width: 100%;
  }

  .film-our-services.type-icon.right .col-icon {
    float: right;
  }

  .film-our-services.type-icon.right .col-icon .icon {
    margin-top: 50px;
  }

  .film-our-services.right .col-text .text:before {
    left: auto;
    right: -100px;
  }

  .film-our-services.type-icon .col-icon .icon.primary-color {
    background-color: var(--primary);
    color: var(--baseBg);
  }

  .film-our-services.type-icon .col-icon .icon.black-color {
    background-color: #333;
    color: var(--primary);
  }

  @media screen and (max-width: 991px) {
    .film-our-services.type-icon .col-icon .icon,
    .film-our-services.type-icon.right .col-icon .icon {
      margin-top: 0;
    }
    .film-our-services.type-icon.right .col-icon {
      float: none;
    }
    .film-our-services.type-icon .col-text .text:before {
      display: none;
    }
    .film-our-services.type-icon.right .col-text .text {
      padding: 40px 70px;
    }
  }
`

export default ListItem
