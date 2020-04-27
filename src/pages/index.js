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

const IndexPage = () => (
  <div> 
    <Header/>
    <Banner />
    <AboutBlurb />
  </div>
)

export default IndexPage
