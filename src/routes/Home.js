import React from 'react'
import Image from '../components/image/Image'
import Text from '../components/text/Text'
import { Link } from "react-router-dom";
import { Preview_Values } from '../utils/AppConstants'
import StoreLocally from '../utils/StoreLocally'
import './Home.css'

function Home(props) {

    return (
        <>
            {Preview_Values.map((value, i) => (
                <div key={Preview_Values[i].id}>
                    <Image src={Preview_Values[i].src} classes={Preview_Values[i].classes} altText={Preview_Values[i].altText}></Image>
                    <Text classes="tight-caption" content={Preview_Values[i].altText}></Text>
                    <Text classes="blog-entry" content={Preview_Values[i].blogEntry}></Text>
                    <Link className="read-more" to={"/blogpost"} value={Preview_Values[i].id} onClick={()=>StoreLocally(value.id)}>Read full post</Link>
                    <div className="hr-line"></div>
                </div>
            ))}
        </>
    )
  }

export default Home