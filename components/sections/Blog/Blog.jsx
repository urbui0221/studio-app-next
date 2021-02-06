import Link from "next/link";
import styled from "styled-components";

const Blog = ({img, url, alt, tag, tagUrl, date, description, views, likes,link }) => {

  return (
    <Link href={link}>
      <div className='blog-item masonry-item style-2'>
        <div className='blog-item-inner'>
          <div className='blog-thumbnail'>
            <a href={url}>
              <img src={img} alt={alt} />
            </a>
            <div className='film-list-categories'>
              <a href={tagUrl}>{tag}</a>
            </div>
          </div>
          <div className='blog-info'>
            <div className='blog-info-date'>
              <span className='posted-on'>{date}</span>
            </div>
            <a href={url} className='blog-info-title'>
              {description}
            </a>
            <div className='blog-info-meta'>
              <div className='meta'>
                <span className='view'>{views} Views</span>
                <span className='like'>
                  <a href='#' className='like-btn'>
                    {likes} Likes
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Container = styled.div`

`

export default Blog
