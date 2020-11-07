import React from "react"

import "../styles/App.scss"

import SEO from "../components/seo"
import Landing from "../components/landing"
import Services from "../components/services"
import About from "../components/about"
import Gallery from "../components/gallery"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <SEO title="AWS" />
    <Landing />
    <Services />
    <Gallery />
    <About />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
