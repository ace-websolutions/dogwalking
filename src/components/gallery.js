import React, { useEffect } from "react"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "react-scroll"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  useEffect(() => {
    const tlGallery = gsap.timeline({
      scrollTrigger: {
        trigger: "#gallery-header",
        start: "center center",
      },
      defaults: { duration: 1.2, ease: "power2.out", opacity: 0 },
    })

    tlGallery
      .from(
        ".gallery-header",
        {
          opacity: 0,
        },
        0.3
      )
      .from(
        ".info-slide",
        {
          x: -400,
          stagger: 0.3,
        },
        0.6
      )
      .from(
        ".img-div",
        {
          scale: 1,
          x: 400,
          stagger: 0.15,
        },
        0.6
      )
      .from(
        "#gallery footer",
        {
          y: 50,
          opacity: 0,
          ease: "bounce",
        },
        ">-.5"
      )
  }, [])

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
    <>
      <Header
        title={"Lets show them some of what you do"}
        text={
          "Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat"
        }
        lineTwo={
          "feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet."
        }
        section={"gallery"}
      />

      <section id="gallery">
        <div className="container">
          <div className="gallery">
            <div className="gallery-container">
              <section>
                <h3 className="info-slide">
                  Augue vivamus sed ipsum commodo lorem dolor
                </h3>
                <p className="info-slide">
                  Gravida dis placerat lectus ante vel nunc euismod est turpis
                  sodales. Diam tempor dui lacinia eget ornare varius gravida.
                  Gravida dis placerat lectus ante vel nunc euismod est turpis
                  sodales. Diam tempor dui lacinia accumsan vivamus augue
                  cubilia vivamus nisi eu eget ornare varius gravida euismod.
                </p>
                <p className="info-slide">
                  Lectus ante vel nunc euismod est turpis sodales. Diam tempor
                  dui lacinia accumsan vivamus augue cubilia vivamus nisi eu
                  eget ornare varius gravida dolore euismod lorem ipsum dolor.
                </p>
                <footer>
                  <Link
                    to="about-header"
                    duration={700}
                    offset={0}
                    smooth={true}
                    spy={false}
                  >
                    Keep going
                  </Link>
                </footer>
              </section>
              <div className="images-container">
                {data.image.nodes.map(img => (
                  <div key={img.id} className="img-div">
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
    </>
  )
}

export default Gallery
