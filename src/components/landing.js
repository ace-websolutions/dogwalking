import React, { useEffect } from "react"
import { Link } from "react-scroll"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { gsap } from "gsap"

const Landing = () => {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } })

    const tl = gsap.timeline({
      delay: 1,
      defaults: { ease: "bounce", duration: 1.2 },
    })

    tl.from(".shadow", {
      width: "0%",
    })
      .from(
        ".landing-header",
        {
          opacity: 0,
          y: -200,
        },
        ">-.8"
      )
      .from(
        ".landing-footer",
        {
          y: 50,
          opacity: 0,
        },
        ">-.6"
      )
  }, [])

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "golden.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section id="landing">
      <BackgroundImage
        className="landing-image"
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="shadow"></div>
        <div className="container">
          <div>
            <header className="landing-header">
              <h1>Your Business Here</h1>
              <p>
                A sample website made for my{" "}
                <a href="https://acewebsolutions.io">portfolio.</a>
              </p>
            </header>
            <footer className="landing-footer">
              <Link
                to="services-header"
                duration={700}
                offset={0}
                smooth={true}
                spy={false}
              >
                Take a look around
              </Link>
            </footer>
          </div>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default Landing
