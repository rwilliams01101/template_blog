import React from 'react'
import { Link } from "react-router-dom";
import Image from '../image/Image'
import Text from '../text/Text'
import { Preview_Values } from '../../utils/AppConstants'
import StoreLocally from '../../utils/StoreLocally'
import './BlogPreview.css'

function BlogPreview(props) {

    return (
        <>
            {Preview_Values.map((value, i) => (
                <div className="preview-wrapper" key={Preview_Values[i].id}>
                    <Image src={Preview_Values[i].src} classes={Preview_Values[i].classes} altText={Preview_Values[i].altText}></Image>
                    <Text classes="tight-caption" content={Preview_Values[i].altText}></Text>
                    <Text classes="blog-entry" content={Preview_Values[i].blogEntry}></Text>
                    <Link className="read-more" to={"/blogpost"} value={Preview_Values[i].id} onClick={()=>StoreLocally(value.id)}>Read full post</Link>
                </div>
            ))}
        </>
    )
  }

export default BlogPreview