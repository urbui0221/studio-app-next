import React, { useEffect, useRef } from 'react'
import styled from "styled-components"

const TopSearchContainer = ({topSearch, setTopSearch}) => {
    const searchRef = useRef(null)
    useEffect(_ => {
        // const detectClickInside = (e) => {
        //         if(searchRef.current.contains(e.target)) {
        //             console.log('in')
        //         } else {
        //             console.log('out')
        //         //    setTopSearch(false)
        //            document.body.removeEventListener('click', detectClickInside)
        //     }
        // }
        // document.body.addEventListener('click', detectClickInside)
        // return () => {
        // }
    },[])

    return (
        <TopSearchContainerStyles ref={searchRef} topSearch={topSearch}>
        <div className="top-search">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form>
                <input type="search" className="top-search-input" name="s" placeholder="What are you looking for?" />
              </form>
            </div>
          </div>
        </div>
      </div>
        </TopSearchContainerStyles>
    )
}

const TopSearchContainerStyles = styled.div`

.top-search {
    position: static;
    width: 100%;
    background-color: #da0e2b;
    color: #fff;
    /* transform: translateY(-100%); */
    transition: all 0.2s linear;
    max-height: ${props => props.topSearch ? '40px': 0};
    /* animation: ${props => props.topSearch ? translateY : translateYReverse} 0.2s linear; */
    display: ${props => props.topSearch ? 'block' : 'none'};
}
.top-search form {
    padding-left: 30px;
    position: relative;
}
.top-search form:before {
    content: '\f4a5';
    font-family: Ionicons;
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 0;
    height: 40px;
    line-height: 40px;
}
.top-search form input[type="search"] {
    border: none;
    background: none;
    color: #fff;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    padding: 0;
}
.top-search form input[type="search"]::-webkit-input-placeholder { /* Chrome/Opera/Safari */
	color: #fff;
}
.top-search form input[type="search"]::-moz-placeholder { /* Firefox 19+ */
	color: #fff;
}
.top-search form input[type="search"]:-ms-input-placeholder { /* IE 10+ */
	color: #fff;
}
.top-search form input[type="search"]:-moz-placeholder { /* Firefox 18- */
	color: #fff;
}
`

export default TopSearchContainer
