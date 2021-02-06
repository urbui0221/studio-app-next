import React from "react"
import styled from "styled-components"
import Link from "next/link"

const SingalBlog = ({ BlogData }) => {
  return (
    <Container>
      <div className='section pt-12 pb-12'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='blog-detail'>
                <div className='single-post-thumbnail'>
                  <img src={BlogData.image} alt={BlogData.altImageText} />
                </div>
                <h4 className='entry-title'>{BlogData.title}</h4>

                <div className='entry-content mb-3 blog-description'>
                  <p>{BlogData.description}</p>
                </div>
                <div className='entry-footer'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='tags'>
                        <span className='tag-icon ion-ios-pricetags'></span>
                        {BlogData.tags.map((tag, index) => {
                            if(index === BlogData.tags.length - 1) {
                                return <Link key={tag.id} href={tag.url}>{tag.name}</Link>
                            } else {
                                return <a href={tag.url} key={tag.id}>{tag.name}</a> 
                            }
                        })}
                        
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='entry-share'>
                        <ul className='film-social'>
                          <li>
                            <a
                              data-toggle='tooltip'
                              data-placement='top'
                              title=''
                              data-original-title='Facebook'
                              target='_blank'
                              href='#'
                            >
                              {" "}
                              <i className='fa fa-facebook'></i>
                            </a>
                          </li>
                          <li>
                            <a
                              data-toggle='tooltip'
                              data-placement='top'
                              title=''
                              data-original-title='Twitter'
                              target='_blank'
                              href='#'
                            >
                              <i className='fa fa-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a
                              data-toggle='tooltip'
                              data-placement='top'
                              title=''
                              data-original-title='Google'
                              target='_blank'
                              href='#'
                            >
                              <i className='fa fa-google-plus'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='entry-author'>
                  <div className='row'>
                    <div className='col-md-2'>
                      <img alt='' src='/images/avatar/default.png' />
                    </div>
                    <div className='col-md-10'>
                      <div className='mt-1'></div>
                      <h3 className='name'>{BlogData.author.name}</h3>
                      <div className='desc'>{BlogData.author.description}</div>
                    </div>
                  </div>
                </div>
                <div className='entry-nav'>
                  <div className='row'>
                    <div className='col-md-5 left'>
                      <i className='fa fa-angle-double-left'></i>
                      <a href='#' className='prev'>
                        {BlogData.previous}
                      </a>
                    </div>
                    <div className='col-md-2 text-center'>
                      <i className='ion-grid'></i>
                    </div>
                    <div className='col-md-5 right'>
                      <a href='#'>{BlogData.after}</a>
                      <i className='fa fa-angle-double-right'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SingalBlog

const Container = styled.div`
  .blog-description {
    font-family: var(--font3);
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
    font-family: var(--font3);
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
  .film-social li {
    margin-right: 10px;
    position: relative;
    display: inline-block;
  }
  .film-social a {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    border: 1px solid #f4f4f4;
    border-radius: 20px;
    font-size: 14px;
    color: #696969;
  }
  .film-social li:hover > a {
    background-color: #da0e2b;
    color: #fff;
  }
  .film-social .tooltip.top .tooltip-arrow {
    border-top-color: #da0e2b;
  }
  .film-social .tooltip-inner {
    background-color: #da0e2b;
  }
`
