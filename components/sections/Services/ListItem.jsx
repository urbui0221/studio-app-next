import React from "react"
import styled from "styled-components"
import Link from 'next/link';
import Image from "next/image";

const ListItem = ({ alternate, title, description, src }) => {
  return (
    <Container>
      <div
        className={`film-our-services ${
          alternate ? "right" : ""
        } type-image mb-7`}
      >
        <Link href='/services'>
          <div className='row'>
            <div className='col-md-6 col-image'>
              <Image src={src} alt='' width="570" height="282" layout="responsive" />
            </div>
            <div className='col-md-6 col-text'>
              <div className='text'>
                <div
                  className='title'
                  dangerouslySetInnerHTML={{ __html: title }}
                ></div>
                <div className='content'>{description}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .film-our-services {
    display: block;
  }

  .film-our-services.right .col-text .text:before {
    left: auto;
    right: -100px;
  }
  .film-our-services.type-image {
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .film-our-services.type-image:hover {
    -moz-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
  .film-our-services.type-image .col-image {
    z-index: 96;
    padding-right: 0;
  }
  .film-our-services.type-image .col-image img {
    width: 100%;
    height: auto;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  .film-our-services.type-image:hover .col-image img {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
  .film-our-services.type-image .col-text {
    z-index: 97;
  }
  .film-our-services.type-image .col-text .text {
    background-color: var(--baseBg);
    padding: 40px;
  }
  .film-our-services.type-image .col-text .text .title {
    font-family: var(--head);
    font-weight: 400;
    font-size: 24px;
    color: var(--tertiary2);
    position: relative;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .film-our-services.type-image:hover .col-text .text .title {
    color: var(--primary);
  }
  .film-our-services.type-image .col-text .text .title:before {
    content: "";
    width: 60px;
    height: 1px;
    background-color: var(--primary);
    display: block;
    position: absolute;
    top: 50%;
    left: -85px;
  }
  .film-our-services.type-image .col-text .text .content {
    font-family: var(--font3);
    font-size: 15px;
    color: var(--dimGray);
    line-height: 1.7;
    display: block;
    margin-top: 20px;
    width: 100%;
  }
  .film-our-services.type-image.right .col-image {
    float: right;
    padding-right: 15px;
    padding-left: 0;
  }
  .film-our-services.type-image.right .col-text {
    text-align: right;
  }
  .film-our-services.type-image.right .col-text .title:before {
    left: auto;
    right: -85px;
  }
  @media (max-width: 991px) {
    .film-our-services.type-image.right .col-image {
      float: none;
    }
  }
`
export default ListItem
