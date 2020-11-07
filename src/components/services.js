import React, { useEffect } from "react"
import Header from "./header"
import PawSVG from "../images/paw.svg"
import CollarSVG from "../images/dog-collar.svg"
import WalkSVG from "../images/dog-walking.svg"
import { Link } from "react-scroll"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  useEffect(() => {
    const tlServices = gsap.timeline({
      scrollTrigger: {
        trigger: "#services-header",
        start: "center center",
      },
      defaults: { ease: "power2.out", duration: 1.6, stagger: 0.3 },
    })

    tlServices
      .from(
        ".services-header",
        {
          opacity: 0,
        },
        0.3
      )
      .from(
        ".service span",
        {
          opacity: 0,
          y: 200,
          ease: "bounce",
        },
        0.6
      )
      .to(
        ".service span",
        {
          rotate: "180deg",
          duration: 2,
        },
        1.4
      )
      .to(
        ".service svg",
        {
          rotate: "180deg",
          duration: 2,
        },
        1.4
      )
      .from(
        ".service svg",
        {
          scale: 0,
          transformOrigin: "center",
        },
        1.4
      )
      .from(
        ".service h3",
        {
          y: 100,
          opacity: 0,
        },
        1.8
      )
      .from(
        ".service p",
        {
          y: 100,
          opacity: 0,
        },
        1.8
      )
      .from(
        "#services footer",
        {
          y: 50,
          opacity: 0,
          ease: "bounce",
        },
        ">-.5"
      )
  })
  return (
    <>
      <Header
        title={"Here is what we show you provide to people"}
        text={
          "Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat"
        }
        lineTwo={
          "feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet."
        }
        section={"services"}
      />
      <section id="services">
        <div className="container">
          <div className="services">
            <div className="services-container">
              <div className="service">
                <section>
                  <span>
                    <PawSVG />
                  </span>
                  <header>
                    <h3>Gravida</h3>
                  </header>
                  <p>
                    Gravida dis placerat lectus ante vel nunc euismod est turpis
                    sodales. Diam tempor dui lacinia accumsan vivamus. Gravida
                    dis placerat lectus ante vel nunc euismod est turpis
                    sodales. Diam tempor dui lacinia accumsan vivamus.
                  </p>
                </section>
              </div>
              <div className="service">
                <section>
                  <span>
                    <CollarSVG />
                  </span>
                  <header>
                    <h3>Vivamus</h3>
                  </header>
                  <p>
                    Gravida dis placerat lectus ante vel nunc euismod est turpis
                    sodales. Diam tempor dui lacinia accumsan vivamus. Gravida
                    dis placerat lectus ante vel nunc euismod est turpis
                    sodales. Diam tempor dui lacinia accumsan vivamus.
                  </p>
                </section>
              </div>
              <div className="service">
                <section>
                  <span>
                    <WalkSVG />
                  </span>
                  <header>
                    <h3>Accumsan</h3>
                  </header>
                  <p>
                    Gravida dis placerat lectus ante vel nunc euismod est turpis
                    sodales. Diam tempor dui lacinia accumsan vivamus. Gravida
                    dis placerat lectus ante vel nunc euismod est turpis
                    sodales. Diam tempor dui lacinia accumsan vivamus.
                  </p>
                </section>
              </div>
            </div>
            <footer>
              <Link
                to="gallery-header"
                duration={700}
                offset={0}
                smooth={true}
                spy={false}
              >
                Next
              </Link>
            </footer>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
