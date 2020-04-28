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
import CallToAction from "../components/callToAction";

const IndexPage = () => (
  <div> 
    <Header/>
    <Banner />
    <AboutBlurb />
    <Video
        videoSrcURL="https://www.youtube.com/embed/mACx53PEg4I"
        videoTitle="Gatsby Portfolio Tutorial"
    />
    <CallToAction />
  </div>
)

export default IndexPage
