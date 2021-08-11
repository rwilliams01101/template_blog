import React from 'react'

function Header(props) {
  return (
    <>
        <header className={props.classes}>{props.content}</header>
    </>
  )
}

export default Header