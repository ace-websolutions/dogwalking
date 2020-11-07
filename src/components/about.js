import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "puppy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <div className="image-container">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
          <div className="about-container">
            <div>
              <h3>Diam vivamus turpis lorem sodales lectus ornare</h3>
              <p>
                Gravida dis placerat lectus ante vel nunc euismod est turpis
                sodales. Diam tempor dui lacinia eget ornare varius gravida.
                Gravida dis placerat lectus ante vel nunc euismod est turpis
                sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia
                vivamus nisi eu eget ornare varius gravida euismod. Gravida dis
                lorem ipsum dolor placerat magna tempus feugiat.
              </p>
              <p>
                Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui
                lacinia accumsan vivamus augue cubilia vivamus nisi eu eget
                ornare varius gravida dolore euismod lorem ipsum dolor sit amet
                consequat. vivamus nisi eu eget ornare varius gravida dolore
                euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu
                eget ornare et magna.
              </p>
            </div>
            <div>
              <p>
                Gravida dis placerat lectus ante vel nunc euismod est turpis
                sodales. Diam tempor dui lacinia eget ornare varius gravida.
                Gravida dis placerat lectus ante vel nunc euismod est turpis
                sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia
                vivamus nisi eu eget ornare varius gravida euismod. Gravida dis
                lorem ipsum dolor placerat magna tempus feugiat.
              </p>
              <p>
                Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui
                lacinia accumsan vivamus augue cubilia vivamus nisi eu eget
                ornare varius gravida dolore euismod lorem ipsum dolor sit amet
                consequat eget ornare varius gravida euismod. Gravida dis lorem
                ipsum dolor placerat magna tempus feugiat magna tempus lorem.
              </p>
              <p>
                Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui
                lacinia accumsan vivamus augue cubilia.
              </p>
            </div>
            <div>
              <p>
                Placerat lectus ante vel nunc euismod est turpis sodales. Diam
                tempor dui lacinia eget ornare varius gravida. Gravida dis
                placerat lectus ante vel nunc euismod est turpis sodales. Diam
                tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi
                eu eget ornare varius gravida euismod. Gravida dis lorem ipsum
                dolor placerat magna tempus feugiat. Lectus ante vel nunc
                euismod est turpis sodales. Diam tempor dui lacinia dolore.
              </p>
              <p>
                Accumsan vivamus augue cubilia vivamus nisi eu eget ornare
                varius gravida dolore euismod lorem ipsum dolor sit amet
                conseismod lorem ipsum dolor sit amet consequat lorem ipsum
                consequat feugiat sed tempus euismod feugiat veroeros.
              </p>
              <footer>
                <a href="#fourth">Ipsum lorem dolor</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
