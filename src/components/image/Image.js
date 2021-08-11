import React from 'react'
import './Image.css'

function Image(props) {
  return (
    <>
        <img src={props.src} className={props.classes} alt={props.altText} id={props.id} previewvalue={props.previewValue}/>
    </>
  )
}

export default Image