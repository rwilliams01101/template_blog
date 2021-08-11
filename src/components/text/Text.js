import React from 'react'
import './Text.css'

function Text(props) {
  return (
    <>
        <p className={props.classes}>{props.content}</p>
    </>
  )
}

export default Text