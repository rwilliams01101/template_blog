import Image from '../components/image/Image'
import underConstruction from '../assets/images/under_construction.png'
import './About.css'

function About() {
    return (
        <>
            <h2>About</h2>
            <Image src={underConstruction} classes="img img-lg-ctr" altText="Under Construction, coming Christmas 2002."></Image>
            
            <div style={{margin: 1 + "em"}}>Put whatever you want here, write about you, about your brand, or use this route for something else entirely.</div>
        </>
    ) 
  }

export default About