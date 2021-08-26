import BlogDetail from '../components/blogDetail/BlogDetail'
import './Blogpost.css'
import Header from '../components/header/Header'
import { Preview_Values } from '../utils/AppConstants';

function Blogpost() {

    const value = localStorage.getItem('blogPostNumber');

    return(
        <>
            <Header blogHeader={Preview_Values[value-1].altText} publishDate={Preview_Values[value-1].publishDate} writtenBy={Preview_Values[value-1].writtenBy}></Header>
            <BlogDetail></BlogDetail>
        </>
    )
  }

export default Blogpost