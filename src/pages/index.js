import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Services from "../components/services"
import About from "../components/about"
import Gallery from "../components/gallery"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <Services />
    <Gallery />
    <About />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
