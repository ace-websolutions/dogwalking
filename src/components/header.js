import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "golden.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section id="header">
      <BackgroundImage
        className="header-image"
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="container">
          <div>
            <header>
              <h1>Dog Walkers</h1>
              <p>
                A sample website made for my portfolio{" "}
                <a href="http://acewebsolutions.io">here</a>
              </p>
            </header>
            <footer>
              <a href="#">Take a look around</a>
            </footer>
          </div>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default Header
