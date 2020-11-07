import React from "react"

import "../styles/App.scss"

import SEO from "../components/seo"
import Landing from "../components/landing"
import Header from "../components/header"
import Services from "../components/services"
import About from "../components/about"
import Gallery from "../components/gallery"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Landing />
    <Header
      title={"Tessellate is a free responsive site template"}
      text={
        "Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat"
      }
      subtext={
        "feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet."
      }
    />
    <Services />
    <Header
      title={"Euismod sed feugiat lorem tempus magna"}
      text={
        "Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat"
      }
      subtext={
        "feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet."
      }
    />

    <Gallery />
    <Header
      title={"Ornare varius lorem ipsum ante lectus"}
      text={
        "Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat"
      }
      subtext={
        " feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet."
      }
    />

    <About />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
