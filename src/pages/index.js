import React from "react"
import { Link } from "gatsby"
//scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

//Import Components
import Header from "../components/header";
import Banner from "../components/banner";
import AboutBlurb from "../components/aboutBlurb"
import Video from "../components/video";

const IndexPage = () => (
  <div> 
    <Header/>
    <Banner />
    <AboutBlurb />
    <Video
        videoSrcURL="https://www.youtube.com/embed/mACx53PEg4I"
        videoTitle="Gatsby Portfolio Tutorial"
    />
  </div>
)

export default IndexPage
