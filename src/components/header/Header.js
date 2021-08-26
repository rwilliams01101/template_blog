import React from 'react'
import '../header/Header.css'

function Header(props) {
  return (
    <>
        <header>
          <div className="header-align">
            <h1 className="blog-header">
              {props.blogHeader}
            </h1>
            <div className="header-details">
              <div>
                Posted on {props.publishDate}
              </div>
              <div>
                Written by {props.writtenBy}
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header