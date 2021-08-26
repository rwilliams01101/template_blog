// Welcome to the static data. It's clunky but it works. 

// SWAP_ME for your images. Save your files in src/assets/images, then import them here.
import firstPostImage from '../assets/images/pakata-goh.jpg' // Image courtesy of Unsplash - Pakata Goh
import secondPostImage from '../assets/images/s-o-c-i-a-l-c-u-t.jpg' // Image courtesy of Unsplash - s-o-c-i-a-l-c-u-t
import firstImageOne from '../assets/images/james-timothy.jpg' // Image courtesy of Unsplash - James Timothy
import firstImageTwo from '../assets/images/angelo-pantazis.jpg' // Image courtesy of Unsplash - Angelo Pantazis
import secondImageOne from '../assets/images/elijah-g.jpg' // Image courtesy of Unsplash - Elijah G
import secondImageTwo from '../assets/images/tracy-adams.jpg' // Image courtesy of Unsplash - Tracy Adams

// SWAP_ME for your Blog Post Previews. They will load on the homepage.
export const Preview_Values = [
  // First Sample Post - anything entered in here will populate the homepage
    { src: `${firstPostImage}`, classes: "img img-lg-ctr", publishDate: "26.08.2021", altText: "My First Post", id: "1", blogEntry: "I did it! Now follow/hire/pay/high-five me!", writtenBy:"Alan Williams"},
  // Second Sample Post  
    { src: `${secondPostImage}`, classes: "img img-lg-ctr", publishDate: "26.08.2021", altText: "My Second Post", id: "2", blogEntry: "I got a job at an awesome place now, stand up meetings are my favorite part of the day!", writtenBy:"Alan Williams"},
];

// SWAP_ME for your Full Blog Posts. They will load when user clicks on "Read full post" link. The previewValue attribute acts like a foreign key referencing the Sample Posts above.
export const Blogpost_Values = [
  // Preview 1
  { src: `${firstImageOne}`, classes: "img img-lg-ctr", altText: "Me, feeling accomplished…", id: "1", blogEntry: "", previewValue: "1"},
  { src: `${firstImageTwo}`, classes: "img img-lg-ctr", altText: "You seeing me being accomplished!", id: "2", blogEntry: "", previewValue: "1"},

  // Preview 2
  { src: `${secondImageOne}`, classes: "img img-lg-ctr", id: "3", blogEntry: "I just wanted to say how happy I am to finally be working here. Ever since I was a little child, this has been my dream.", previewValue: "2"},
  { src: `${secondImageTwo}`, classes: "img img-lg-ctr", id: "4", blogEntry: "My new workspace is absolutely amazing. At this desk I solve problems, learn new things, and get crumbs in my keyboard pretty much the entire day.", previewValue: "2"},
]