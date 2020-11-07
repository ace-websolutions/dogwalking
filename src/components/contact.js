import React, { useEffect } from "react"
import Header from "./header"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  useEffect(() => {
    const tlContact = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      defaults: { duration: 1.2, ease: "power2.out" },
    })

    tlContact
      .from(
        ".contact-header",
        {
          opacity: 0,
        },
        0.3
      )
      .from(
        "form div",
        {
          opacity: 0,
          y: 50,
          stagger: 0.3,
        },
        0.6
      )
      .from(
        ".buttons input",
        {
          y: 50,
          opacity: 0,
          ease: "bounce",
          stagger: 0.5,
        },
        ">-.5"
      )
  })

  return (
    <>
      <Header
        title={"You made it this far..."}
        text={
          "If you see something you like, please reach out! We can figure out how to get you the best product for your business"
        }
        lineTwo={
          " and get you one step closer to new business.  Fill out the below."
        }
        section={"contact"}
      />
      <section id="contact">
        <div className="container">
          <div className="contact">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <div>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="textarea">
                <textarea name="message" placeholder="Message"></textarea>
              </div>
              <div className="buttons">
                <input type="submit" value="Send Message" />
                <input type="reset" value="Clear Form" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
