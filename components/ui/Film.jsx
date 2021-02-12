import React from "react"
import styled from "styled-components"

const Film = ({
  img,
  title,
  url,
  description,
  category,
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
    color: var(--tertiary2);
    display: block;
    position: relative;
    :before {
      content: "";
      width: 60px;
      height: 1px;
      display: ${(props) => (!props.alternate ? "block" : "none")};
      background-color: var(--primary);
      position: absolute;
      top: 50%;
      left: ${(props) => (!props.alternate ? "-80px" : null)};
    }
    :after {
      content: "";
      width: 60px;
      height: 1px;
      display: ${(props) => (props.alternate ? "block" : "none")};
      background-color: var(--primary);
      position: absolute;
      top: 50%;
      right: ${(props) => (props.alternate ? "-80px" : null)};
    }
    a {
      color: var(--tertiary2);

      :hover {
        color: var(----primary);
      }
    }
  }
  .excerpt{
    font-family: var(--font3)
  }
  .title {
    font-size: 24px;
    font-weight: 400;
    font-family: var(--head);
    color: var(--tertiary2);
    display: block;
    position: relative;
  }

  .category a {
    font-size: 12px;
    font-weight: 400;
    font-family: var(--display);
    text-transform: uppercase;
    color: #ccc;
    display: inline-block;
    margin-right: 20px;
    :last-child{
        margin-right: 0px;
    }
  }
  .category a:hover {
    color: var(--primary);
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
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  .film-list-item:hover .col-thumb .thumb img {
    transform: scale(1.1);
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
`

export default Film
