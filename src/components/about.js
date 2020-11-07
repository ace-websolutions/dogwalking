import React, { useEffect } from "react"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "react-scroll"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useEffect(() => {
    const tlAbout = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
      defaults: { duration: 1.2, ease: "power2.out" },
    })

    tlAbout
      .from(
        ".about-header",
        {
          opacity: 0,
        },
        0.3
      )
      .from(
        "#about img",
        {
          y: -700,
        },
        0.6
      )
      .from(
        ".about-container div h3",
        {
          y: 50,
          opacity: 0,
        },
        0.9
      )
      .from(
        ".about-container div p",
        {
          y: 50,
          stagger: 0.2,
          opacity: 0,
        },
        1.2
      )
      .from(
        "#about footer",
        {
          y: 50,
          opacity: 0,
          ease: "bounce",
        },
        ">-.5"
      )
  })

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
    <>
      <Header
        title={"Your whole backstory goes here"}
        text={
          "Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat"
        }
        lineTwo={
          " feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet."
        }
        section={"about"}
      />

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
                  sodales. Diam tempor dui lacinia accumsan vivamus augue
                  cubilia vivamus nisi eu eget ornare varius gravida euismod.
                  Gravida dis lorem ipsum dolor placerat magna tempus feugiat.
                </p>
                <p>
                  Lectus ante vel nunc euismod est turpis sodales. Diam tempor
                  dui lacinia accumsan vivamus augue cubilia vivamus nisi eu
                  eget ornare varius gravida dolore euismod lorem ipsum dolor
                  sit amet consequat. vivamus nisi eu eget ornare varius gravida
                  dolore euismod lorem ipsum dolor sit amet consequat. vivamus
                  nisi eu eget ornare et magna.
                </p>
              </div>
              <div>
                <p>
                  Gravida dis placerat lectus ante vel nunc euismod est turpis
                  sodales. Diam tempor dui lacinia eget ornare varius gravida.
                  Gravida dis placerat lectus ante vel nunc euismod est turpis
                  sodales. Diam tempor dui lacinia accumsan vivamus augue
                  cubilia vivamus nisi eu eget ornare varius gravida euismod.
                  Gravida dis lorem ipsum dolor placerat magna tempus feugiat.
                </p>
                <p>
                  Lectus ante vel nunc euismod est turpis sodales. Diam tempor
                  dui lacinia accumsan vivamus augue cubilia vivamus nisi eu
                  eget ornare varius gravida dolore euismod lorem ipsum dolor
                  sit amet consequat eget ornare varius gravida euismod. Gravida
                  dis lorem ipsum dolor placerat magna tempus feugiat magna
                  tempus lorem.
                </p>
                <p>
                  Lectus ante vel nunc euismod est turpis sodales. Diam tempor
                  dui lacinia accumsan vivamus augue cubilia.
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
                  <Link
                    to="contact-header"
                    duration={700}
                    offset={0}
                    smooth={true}
                    spy={false}
                  >
                    Just a little more
                  </Link>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
