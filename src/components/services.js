import React from "react"
import PawSVG from "../images/paw.svg"
import CollarSVG from "../images/dog-collar.svg"
import WalkSVG from "../images/dog-walking.svg"

const Services = () => (
  <section id="services">
    <div className="container">
      <div className="services">
        <div className="services-container">
          <div>
            <section>
              <span>
                <PawSVG />
              </span>
              <header>
                <h3>Gravida</h3>
              </header>
              <p>
                Gravida dis placerat lectus ante vel nunc euismod est turpis
                sodales. Diam tempor dui lacinia accumsan vivamus. Gravida dis
                placerat lectus ante vel nunc euismod est turpis sodales. Diam
                tempor dui lacinia accumsan vivamus.
              </p>
            </section>
          </div>
          <div>
            <section>
              <span>
                <CollarSVG />
              </span>
              <header>
                <h3>Vivamus</h3>
              </header>
              <p>
                Gravida dis placerat lectus ante vel nunc euismod est turpis
                sodales. Diam tempor dui lacinia accumsan vivamus. Gravida dis
                placerat lectus ante vel nunc euismod est turpis sodales. Diam
                tempor dui lacinia accumsan vivamus.
              </p>
            </section>
          </div>
          <div>
            <section>
              <span>
                <WalkSVG />
              </span>
              <header>
                <h3>Accumsan</h3>
              </header>
              <p>
                Gravida dis placerat lectus ante vel nunc euismod est turpis
                sodales. Diam tempor dui lacinia accumsan vivamus. Gravida dis
                placerat lectus ante vel nunc euismod est turpis sodales. Diam
                tempor dui lacinia accumsan vivamus.
              </p>
            </section>
          </div>
        </div>
        <footer>
          <a href="#second">Gravida tempor lacinia</a>
        </footer>
      </div>
    </div>
  </section>
)

export default Services
