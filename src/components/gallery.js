import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return (
    <section id="gallery">
      <div className="container">
        <div className="gallery">
          <div className="gallery-container">
            <section>
              <h3>Augue vivamus sed ipsum commodo lorem dolor</h3>
              <p>
                Gravida dis placerat lectus ante vel nunc euismod est turpis
                sodales. Diam tempor dui lacinia eget ornare varius gravida.
                Gravida dis placerat lectus ante vel nunc euismod est turpis
                sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia
                vivamus nisi eu eget ornare varius gravida euismod.
              </p>
              <p>
                Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui
                lacinia accumsan vivamus augue cubilia vivamus nisi eu eget
                ornare varius gravida dolore euismod lorem ipsum dolor.
              </p>
              <footer>
                <a href="#third">Accumsan nisi</a>
              </footer>
            </section>
            <div className="images-container">
              {data.image.nodes.map(img => (
                <div key={img.id}>
                  <Img
                    fluid={img.childImageSharp.fluid}
                    objectPosition="50% 50%"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
