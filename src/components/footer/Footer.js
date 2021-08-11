import React from 'react'
import '../footer/Footer.css'

function Footer(props) {
  return (
    <>
        <footer className={props.classes}>{props.content}</footer>
    </>
  )
}

export default Footer