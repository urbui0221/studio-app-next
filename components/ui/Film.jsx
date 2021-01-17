import React from "react"
import styled from "styled-components"

const Film = ({
  img,
  title,
  url,
  description,
  category,
  views,
  likes,
  comments,
  alternate,
}) => {
  return (
    <Container>
      <div className='film-list-item'>
        <div
          className={`col-md-6 ${alternate ? "col-md-push-6" : ""} col-thumb`}
        >
          <div className='thumb'>
            <a href={url}>
              <img src={img} alt='' />
            </a>
          </div>
        </div>
        <div
          className={`col-md-6 ${alternate ? "col-md-pull-6" : ""} col-info`}
        >
          <Info alternate={alternate}>
            <div className='title'>
              <a href={url}>{title}</a>
            </div>
            <div className='category'>
              {category.map((category, index) => (
                <a key={index} href={category.url}>
                  {category.name}
                </a>
              ))}
            </div>
            <div className='excerpt'>{description}</div>
            <div className='meta'>
              <span className='view'>
                {views} {views === 1 ? "view" : "views"}
              </span>
              <span className='like'>
                <a href='#' className='like-btn'>
                  {likes} {likes === 1 ? "view" : "views"}
                </a>
              </span>
              <span className='comment'>
                {comments} {comments === 1 ? "view" : "views"}
              </span>
            </div>
          </Info>
        </div>
      </div>
    </Container>
  )
}

const Info = styled.div`
  text-align: ${(props) => (props.alternate ? "right" : "left")};
  padding: 50px 30px;
  .title {
    font-size: 24px;
    font-weight: 400;
    font-family: var(--head);
    color: #333;
    display: block;
    position: relative;
    :before {
      content: "";
      width: 60px;
      height: 1px;
      display: ${(props) => (!props.alternate ? "block" : "none")};
      background-color: #da0e2b;
      position: absolute;
      top: 50%;
      left: ${(props) => (!props.alternate ? "-80px" : null)};
    }
    :after {
      content: "";
      width: 60px;
      height: 1px;
      display: ${(props) => (props.alternate ? "block" : "none")};
      background-color: #da0e2b;
      position: absolute;
      top: 50%;
      right: ${(props) => (props.alternate ? "-80px" : null)};
    }
    a {
      color: #333;

      :hover {
        color: #da0e2b;
      }
    }
  }
  .excerpt{
    font-family: var(--font3)
  }
  .meta {
    margin-top: 20px;
    font-size: 14px;
    color: #696969;
  }
  .meta > span a {
    color: #696969;
  }
  .meta > span {
    display: inline-block;
    margin-right: 20px;
  }
  .meta > span:last-child {
    margin-right: 0;
  }
  .meta > span.view:before {
    content: "\f133";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
  }
  .meta > span.like a:before {
    content: "\f387";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
    display: inline-block;
  }
  .meta > span.comment:before {
    content: "\f11a";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
  }
  .title {
    font-size: 24px;
    font-weight: 400;
    font-family: Merriweather;
    color: #333;
    display: block;
    position: relative;
  }

  .category a {
    font-size: 12px;
    font-weight: 400;
    font-family: Montserrat;
    text-transform: uppercase;
    color: #ccc;
    display: inline-block;
    margin-right: 20px;
    :last-child{
        margin-right: 0px;
    }
  }
  .category a:hover {
    color: #da0e2b;
  }
  .excerpt {
    display: block;
    margin-top: 20px;
  }
  
`

const Container = styled.div`
  .film-list-item {
    display: block;
    clear: both;
  }
  .film-list-item .col-md-6 {
    padding: 0;
  }
  .film-list-item:nth-child(odd) .col-thumb {
    padding-right: 0;
  }
  .film-list-item .col-thumb .thumb {
    width: 100%;
    overflow: hidden;
  }
  .film-list-item .col-thumb .thumb img {
    width: 100%;
    height: auto;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .film-list-item:hover .col-thumb .thumb img {
    transform: scale(1.1);
  }
`

export default Film
