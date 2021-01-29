import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Blog from "./Blog"
import useMediaQuery from "use-media-query-hook"

const BlogContainer = () => {
  
  const isMedium = useMediaQuery("(max-width: 991px)")

  // const [col1, setCol1] = useState([])
  // const [col2, setCol2] = useState([])
  // const [col3, setCol3] = useState([])
  // const [data, setData] = useState(Data)

  //   if(data.length % 3 === 0) { // 3N
  //     for(let i = 0; i< data.length; i += 3) {
  //         setCol1(col1.concat(data[i]))
  //         setCol2(col2.concat(data[i+1]))
  //         setCol3(col3.concat(data[i+2]))
  //     }
  // } else if(data.length % 3 === 1) { // 3N+1
  //     for(let i = 0; i < data.length; i += 3) {

  //         setCol1(col1.concat(data[i]))
  //         if(!(data[i+1] === undefined)) {
  //              setCol2(col2.concat(data[i+1]))
  //         }
  //         if(!(data[i+2] === undefined)) {
  //             setCol3(col3.concat(data[i+2]))
  //         }
  //     }
  // }else if(data.length % 3 === 2) { // 3N+2
  //     for(let i = 0; i< data.length; i += 3) {
  //         setCol1(col1.concat(data[i]))
  //          setCol2(col2.concat(data[i+1]))
  //         if(!(data[i+2] === undefined)) {
  //             setCol3(col3.concat(data[i+2]))
  //         }
  //     }
  // }

  const data = Data
  const col1 = []
  const col2 = []
  const col3 = []

  const mdcol1 = []
  const mdcol2 = []

  if (data.length % 3 === 0) {
    // 3N
    for (let i = 0; i < data.length; i += 3) {
      col1.push(data[i])
      col2.push(data[i + 1])
      col3.push(data[i + 2])
    }
  } else if (data.length % 3 === 1) {
    // 3N+1
    for (let i = 0; i < data.length; i += 3) {
      col1.push(data[i])
      if (!(data[i + 1] === undefined)) {
        col2.push(data[i + 1])
      }
      if (!(data[i + 2] === undefined)) {
        col3.push(data[i + 2])
      }
    }
  } else if (data.length % 3 === 2) {
    // 3N+2
    for (let i = 0; i < data.length; i += 3) {
      col1.push(data[i])
      col2.push(data[i + 1])
      if (!(data[i + 2] === undefined)) {
        col3.push(data[i + 2])
      }
    }
  }

  if (data.length % 2 === 0) {
    for (let i = 0; i < data.length; i += 2) {
      mdcol1.push(data[i])
      mdcol2.push(data[i + 1])
    }
  } else {
    for (let i = 0; i < data.length; i += 2) {
      mdcol1.push(data[i])
      if (!(data[i + 1] === undefined)) {
        mdcol2.push(data[i + 1])
      }
    }
  }
  // console.log(mdcol1);
  // console.log(mdcol2);
  //   console.log("col1", col1);
  //   console.log("col2", col2);
  //   console.log("col3", col3);

  return (
    <Container>
      <div className='container pt-12 pb-12'>
        <div className='col-md-12'>
          {!isMedium && (
            <>
              <div className='col-md-4'>
                {col1.map((blog, index) => (
                  <Blog {...blog} key={index} />
                ))}
              </div>

              <div className='col-md-4'>
                {col2.map((blog, index) => (
                  <Blog {...blog} key={index} />
                ))}
              </div>

              <div className='col-md-4'>
                {col3.map((blog, index) => (
                  <Blog {...blog} key={index} />
                ))}
              </div>
            </>
          )}

          {isMedium && (
            <>
              <div className='col-sm-6'>
                {mdcol1.map((blog, index) => (
                  <Blog {...blog} key={index} />
                ))}
              </div>

              <div className='col-sm-6'>
                {mdcol2.map((blog, index) => (
                  <Blog {...blog} key={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  )
}

export default BlogContainer

const Data = [
  {
    img: "/images/blog/blog1sm.jpg",
    url: "/",
    alt: "Image-1",
    tag: "Featured",
    tagUrl: "/",
    date: "January 25, 2017",
    description:
      "The Story of Ferguson through the Eyes of the People Who Lived it",
    views: "151",
    likes: "2",
  },
  {
    img: "/images/blog/blog2.jpg",
    url: "/",
    alt: "Image-1",
    tag: "News",
    tagUrl: "/",
    date: "January 25, 2017",
    description:
      "“Communication Is Where a Film Lives and Dies”: Director Zoe Lister-Jones",
    views: "141",
    likes: "0",
  },
  {
    img: "/images/blog/blog3sm.jpg",
    url: "/",
    alt: "Image-1",
    tag: "Video",
    tagUrl: "/",
    date: "January 25, 2017",
    description:
      "Profound Communication Only Happens When There Is Persistence",
    views: "112",
    likes: "1",
  },
  {
    img: "/images/blog/blog4.jpg",
    url: "/",
    alt: "Image-1",
    tag: "Quote",
    tagUrl: "/",
    date: "January 25, 2017",
    description:
      "Tell Them We Are Rising: The Story of Black Colleges and Universities",
    views: "84",
    likes: "0",
  },
  {
    img: "/images/blog/blog5.jpg",
    url: "/",
    alt: "Image-1",
    tag: "Gallery",
    tagUrl: "/",
    date: "January 25, 2017",
    description: "“The Challenge Is Balancing Tone”: Director Mark Pellington",
    views: "96",
    likes: "1",
  },
  {
    img: "/images/blog/blog6.jpg",
    url: "/",
    alt: "Image-1",
    tag: "News",
    tagUrl: "/",
    date: "January 25, 2017",
    description:
      "“We Are Living through a Divisive Time”: Director Barbara Kopple",
    views: "146",
    likes: "2",
  },
  {
    img: "/images/blog/blog7.jpg",
    url: "/",
    alt: "Image-1",
    tag: "Video",
    tagUrl: "/",
    date: "January 25, 2017",
    description: "I Stopped Talking and Started Making the True Great Film",
    views: "253",
    likes: "6",
  },
  {
    img: "/images/blog/blog8.jpg",
    url: "/",
    alt: "Image-1",
    tag: "Tutorials",
    tagUrl: "/",
    date: "January 25, 2017",
    description: "“We Don’t Use Words to Tell a Story”: Directors Lily Baldwin",
    views: "81",
    likes: "1",
  },
  {
    img: "/images/blog/blog9smm.jpg",
    url: "/",
    alt: "Image-1",
    tag: "Review",
    tagUrl: "/",
    date: "January 25, 2017",
    description:
      "“Communicating with Respect and Openness”: Director José María Cabral",
    views: "65",
    likes: "2",
  },
  {
    img: "/images/blog/blog10.jpg",
    url: "/",
    alt: "Image-1",
    tag: "Uncategorized",
    tagUrl: "/",
    date: "January 25, 2017",
    description: "I Want the Viewer to Feel Totally Immersed in My World",
    views: "76",
    likes: "0",
  },
  {
    img: "/images/blog/blog10.jpg",
    url: "/",
    alt: "Image-1",
    tag: "Uncategorized",
    tagUrl: "/",
    date: "January 25, 2017",
    description: "I Want the Viewer to Feel Totally Immersed in My World",
    views: "76",
    likes: "0",
  },
  {
    img: "/images/blog/blog10.jpg",
    url: "/",
    alt: "Image-1",
    tag: "Uncategorized",
    tagUrl: "/",
    date: "January 25, 2017",
    description: "I Want the Viewer to Feel Totally Immersed in My World",
    views: "76",
    likes: "0",
  },
]

const Container = styled.div`
  .blog-item .blog-item-inner {
    padding: 30px;
    min-height: 205px;
    background-color: #fff;
    position: relative;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .blog-item .blog-item-inner .meta {
    margin-top: 40px;
    color: #696969;
  }
  .blog-item .blog-item-inner .meta > span {
    display: inline-block;
    margin-right: 20px;
  }
  .blog-item .blog-item-inner .meta > span.view:before {
    content: "\f133";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
  }
  .blog-item .blog-item-inner .meta > span a {
    color: #696969;
  }
  .blog-item
    .blog-item-inner
    .blog-info
    .blog-info-meta
    .meta
    > span.like
    a:before {
    content: "\f387";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
    display: inline-block;
  }
  .blog-item.style-1 {
    margin-bottom: 30px;
  }
  .blog-item.style-1 .blog-item-inner {
    padding: 0;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .blog-item.style-1 .blog-item-inner:hover {
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
  .blog-item.style-1 .blog-item-inner .blog-thumbnail {
    overflow: hidden;
  }
  .blog-item.style-1 .blog-item-inner .blog-thumbnail img {
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .blog-item.style-1 .blog-item-inner:hover .blog-thumbnail img {
    transform: scale(1.1);
  }
  .blog-item.style-1 .blog-item-inner .blog-info {
    padding: 30px;
    background-color: #fff;
  }
  .blog-item.style-1 .blog-item-inner .blog-info .blog-info-date,
  .blog-item.style-1 .blog-item-inner .blog-info .blog-info-title,
  .blog-item.style-1 .blog-item-inner .blog-info .blog-info-meta {
    display: block;
  }
  .blog-item.style-1 .blog-item-inner .blog-info .blog-info-date {
    font-size: 14px;
    font-family: Montserrat;
    color: #ccc;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 30px;
  }
  .blog-item.style-1 .blog-item-inner .blog-info .blog-info-title {
    font-size: 18px;
    font-family: Merriweather;
    font-weight: 400;
    color: #333;
    margin-bottom: 70px;
  }
  .blog-item.style-1 .blog-item-inner .blog-info .blog-info-title:hover {
    color: #da0e2b;
  }
  .blog-item.style-1 .blog-item-inner .blog-info .blog-info-meta .meta {
    font-size: 14px;
  }
  .blog-item.style-1 .blog-item-inner .blog-info .blog-info-meta .meta > span {
    display: inline-block;
    margin-right: 20px;
  }
  .film-home-blog .blog-wrap {
    background-color: #f6f7f7;
    overflow: hidden;
  }
  .film-home-blog .blog-wrap .col-image {
    position: relative;
  }
  .film-home-blog .blog-wrap .col-image .image {
    z-index: 96;
    overflow: hidden;
  }
  .film-home-blog .blog-wrap .col-image .image img {
    width: 100%;
    height: auto;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .film-home-blog .blog-wrap:hover .col-image .image img {
    transform: scale(1.1);
  }
  .film-home-blog .blog-wrap .col-text {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .film-home-blog .blog-wrap .time {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    color: #ccc;
    text-transform: uppercase;
  }
  .film-home-blog .blog-wrap .title {
    font-size: 18px;
    font-weight: 400;
    font-family: Merriweather;
    color: #333;
    line-height: 28px;
    margin-top: 20px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .film-home-blog .blog-wrap:hover .col-text .title {
    color: #da0e2b;
  }
  .film-home-blog .blog-wrap .meta {
    margin-top: 20px;
    color: #696969;
    font-size: 14px;
  }
  .film-home-blog .blog-wrap .meta > span {
    display: inline-block;
    margin-right: 20px;
  }
  .film-home-blog .blog-wrap .meta > span:last-child {
    margin-right: 0;
  }
  .film-home-blog .blog-wrap .meta > span.view:before {
    content: "\f133";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
  }
  .film-home-blog .blog-wrap .meta > span.comment:before {
    content: "\f11a";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
  }
  .film-home-blog .blog-wrap .col-quote {
    position: relative;
    background-image: url(../images/quote_bg_1.png);
    background-repeat: no-repeat;
    background-position: 100% 110%;
  }
  .film-home-blog .blog-wrap .col-quote img {
    z-index: 96;
    opacity: 0;
  }
  .film-home-blog .blog-wrap .col-quote .text {
    padding: 30px;
    position: absolute;
    z-index: 97;
    top: 0;
  }
  .film-home-blog .blog-wrap:hover .col-quote .text .title {
    color: #da0e2b;
  }
  .film-home-blog .blog-wrap .col-quote .text .title:before {
    content: "«";
    display: inline-block;
    margin-right: 10px;
  }
  .film-home-blog .blog-wrap .col-quote .text .title:after {
    content: "»";
    display: inline-block;
    margin-left: 10px;
  }
  .film-home-blog .blog-wrap .col-image .video-play {
    z-index: 97;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .film-home-blog .blog-wrap .col-image .video-play:before {
    content: "";
    width: 70px;
    height: 70px;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
    border-radius: 35px;
    background-color: #da0e2b;
    opacity: 0.3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 97;
  }
  .film-home-blog .blog-wrap .col-image .video-play:after {
    content: "\f215";
    font-family: Ionicons;
    color: #fff;
    font-size: 18px;
    width: 56px;
    height: 56px;
    line-height: 56px;
    -webkit-border-radius: 28px;
    -moz-border-radius: 28px;
    border-radius: 28px;
    background-color: #da0e2b;
    text-align: center;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 98;
  }
  .film-home-blog .blog-wrap.blog-1 {
    margin-bottom: 30px;
  }
  .film-home-blog .blog-wrap.blog-1 .col-image .image {
    position: relative;
  }
  .film-home-blog .blog-wrap.blog-1 .col-image .image:before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 15px solid transparent;
    border-left: 15px solid transparent;
    border-top: 15px solid #f6f7f7;
    border-right: 15px solid #f6f7f7;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 8;
  }
  .film-home-blog .blog-wrap.blog-1 .col-text {
    padding-right: 30px;
  }
  .film-home-blog .blog-wrap.blog-2 {
    height: 100%;
  }
  .film-home-blog .blog-wrap.blog-2 .col-image .image:before {
    content: "";
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-left: 15px solid transparent;
    border-bottom: 15px solid #f6f7f7;
    border-right: 15px solid #f6f7f7;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 8;
  }
  .film-home-blog .blog-wrap.blog-2 .col-text {
    padding: 30px 45px;
  }
  .film-home-blog .blog-wrap.blog-4 .col-image img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  .blog-carousel .blog-item {
    padding-left: 30px;
    padding-right: 30px;
  }
  .blog-item.style-2 {
    margin-top: 50px;
  }
  .blog-item.style-2 .blog-item-inner {
    box-shadow: 5px 5px 20px #eee;
    padding: 0;
  }
  .blog-item.style-2 .blog-thumbnail {
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .blog-item.style-2 .blog-thumbnail:after,
  .blog-item.style-2 .blog-thumbnail:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    z-index: 97;
    top: 0;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    opacity: 0;
  }
  .blog-item.style-2 .blog-thumbnail:before {
    left: -100%;
  }
  .blog-item.style-2 .blog-thumbnail:after {
    right: -100%;
  }
  .blog-item.style-2:hover .blog-thumbnail:before {
    left: 0;
    opacity: 1;
  }
  .blog-item.style-2:hover .blog-thumbnail:after {
    right: 0;
    opacity: 1;
  }
  .blog-item.style-2 .blog-thumbnail > a:before {
    z-index: 98;
    content: "\f489";
    font-family: Ionicons;
    font-size: 40px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 0;
    margin-left: -20px;
    opacity: 0;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .blog-item.style-2:hover .blog-thumbnail > a:before {
    opacity: 1;
    margin-top: -20px;
  }
  .blog-item.style-2 .blog-thumbnail img {
    width: 100%;
  }
  .blog-item.style-2 .film-list-categories {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  .blog-item.style-2 .quote .film-list-categories {
    position: static;
    text-align: right;
  }
  .blog-item.style-2 .film-list-categories a {
    font-size: 12px;
    color: #fff;
    letter-spacing: 0.1em;
    background-color: #da0e2b;
    display: inline-block;
    width: auto;
    padding: 5px 10px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
  }
  .blog-item.style-2 .blog-info {
    padding: 0 30px 25px 30px;
  }
  .blog-item.style-2 .blog-info-date {
    margin-bottom: 10px;
    display: block;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: Montserrat;
    position: relative;
  }
  .blog-item.style-2 .blog-info-date .posted-on {
    margin-right: 20px;
    color: #ccc;
  }
  .blog-item.style-2 .blog-info-title {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 0px;
    color: #333;
    position: relative;
    font-weight: 400;
  }
  .blog-item.style-2 .blog-item-inner .meta {
    margin-top: 20px;
  }
  .blog-list-item {
    margin-bottom: 50px;
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 50px;
  }
  .blog-list-item .post-thumbnail a {
    display: block;
  }
  .blog-list-item .post-thumbnail a img {
    width: 100%;
  }
  .blog-list-item .list-categories a {
    font-size: 12px;
    color: #fff;
    letter-spacing: 0.1em;
    background-color: #da0e2b;
    display: inline-block;
    width: auto;
    padding: 5px 10px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;
  }
  .blog-list-item .entry-desc {
    padding-top: 28px;
  }
  .blog-list-item .entry-meta {
    margin-bottom: 5px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .blog-list-item .entry-meta span {
    margin-right: 20px;
    color: #ccc;
  }
  .blog-list-item .entry-title {
    margin-bottom: 10px;
    color: #333;
    position: relative;
    font-weight: 400;
    font-family: Merriweather;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .blog-list-item .entry-title:hover {
    color: #da0e2b;
  }
  .blog-list-item .meta > span {
    display: inline-block;
    margin-right: 20px;
  }
  .blog-list-item .meta > span.view:before {
    content: "\f133";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
  }
  .blog-list-item .meta > span.like a:before {
    content: "\f387";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
    display: inline-block;
  }
  .blog-list-item .meta > span.comment:before {
    content: "\f11a";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
  }
  .blog-list-item .entry-content {
    font-size: 15px;
    color: #696969;
    line-height: 1.6;
  }
  .blog-list-item .entry-share {
    align-self: center;
    text-align: right;
  }
  .blog-list-item.style-1 .post-thumbnail {
    position: relative;
  }
  .blog-list-item.style-1 .post-thumbnail .list-categories {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
  }
  .blog-list-item.style-1 .entry-desc {
    padding-left: 50px;
  }
  .blog-list-item.style-1 .entry-title {
    margin-top: 15px;
  }
  .blog-list-item.style-1 .meta {
    margin-top: 90px;
  }
  .blog-list-item.style-2 .meta {
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .blog-list-item.style-2 .entry-desc {
    padding-top: 0;
  }
  .blog-list-item.style-2 .list-categories {
    margin-top: -4px;
    margin-bottom: 10px;
  }
  .blog-list-item.style-3 .post-thumbnail {
    position: relative;
  }
  .blog-list-item.style-3 .post-thumbnail .list-categories {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
  }
  .blog-list-item.style-3 .entry-content {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .blog-detail .single-post-thumbnail {
    margin-bottom: 35px;
    position: relative;
  }
  .blog-detail .single-post-thumbnail .list-categories {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
  }
  .blog-detail .single-post-thumbnail .list-categories a {
    font-size: 12px;
    color: #fff;
    letter-spacing: 0.1em;
    background-color: #da0e2b;
    display: inline-block;
    width: auto;
    padding: 5px 10px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;
  }
  .blog-detail .entry-title {
    margin-bottom: 15px;
    color: #333;
    letter-spacing: 0;
    font-weight: 400;
    font-size: 24px;
    font-family: Merriweather, Georgia, serif;
  }
  .blog-detail .meta {
    margin-bottom: 15px;
    margin-top: 20px;
  }
  .blog-detail .meta > span {
    display: inline-block;
    margin-right: 20px;
  }
  .blog-detail .meta > span.view:before {
    content: "\f133";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
  }
  .blog-detail .meta > span.like a:before {
    content: "\f387";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
    display: inline-block;
  }
  .blog-detail .meta > span.comment:before {
    content: "\f11a";
    font-family: Ionicons;
    font-size: 16px;
    color: #da0e2b;
    margin-right: 10px;
  }
  .blog-detail .entry-footer {
    margin-bottom: 20px;
  }
  .blog-detail .tags {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
  }
  .blog-detail .tags .tag-icon {
    color: #ababab;
    font-size: 16px;
    margin-right: 15px;
  }
  .blog-detail .entry-footer .tags a {
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: 14px;
    color: #ababab;
    margin-right: 5px;
    margin-bottom: 8px;
    display: inline-block;
  }
  .blog-detail .entry-footer .tags a:hover {
    color: #da0e2b;
  }
  .blog-detail .entry-footer .entry-share {
    text-align: right;
  }
  .blog-detail .entry-author {
    padding: 40px 0;
    border-top: 1px solid #f4f4f4;
  }
  .blog-detail .entry-author img {
    border-radius: 50%;
    border: 5px solid #f2f2f2;
  }
  .blog-detail .entry-author .name {
    font-size: 14px;
    color: #333;
    letter-spacing: 0.05em;
    margin-bottom: 10px;
  }
  .blog-detail .entry-author .desc {
    font-size: 15px;
    line-height: 1.6em;
    color: #696969;
  }
  .blog-detail .entry-nav {
    padding: 40px 30px;
    background: #f8f7f7;
    border: 1px solid #f4f4f4;
    font-size: 18px;
    font-weight: 700;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
  }
  .blog-detail .entry-nav .left i,
  .blog-detail .entry-nav .right i {
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    color: #ababab;
  }
  .blog-detail .entry-nav .left:hover i,
  .blog-detail .entry-nav .right:hover i {
    color: #da0e2b;
  }
  .blog-detail .entry-nav a {
    text-transform: none;
    color: #ababab;
    outline: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
    display: inline-block;
    vertical-align: middle;
  }
  .blog-detail .entry-nav .left:hover a,
  .blog-detail .entry-nav .right:hover a {
    color: #332b28;
  }
  .blog-detail .entry-nav .left a {
    padding-left: 10px;
  }
  .blog-detail .entry-nav .right a {
    padding-right: 10px;
  }
`
