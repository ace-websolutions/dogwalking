import React, { useEffect } from "react"
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTelegram,
} from "react-icons/fa"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  useEffect(() => {
    const tlFooter = gsap.timeline({
      delay: 2,
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      defaults: { duration: 2, ease: "power2.out" },
    })

    tlFooter
      .from(".social-container li", {
        opacity: 0,
        x: -200,
        rotate: "-360deg",
      })
      .from(
        ".info-contents",
        {
          y: 50,
          opacity: 0,
        },
        ">-.5"
      )
  })

  return (
    <section id="footer">
      <ul className="social-container">
        <li>
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaPinterest />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTelegram />
          </a>
        </li>
      </ul>
      <div className="footer-info">
        <ul className="info-contents">
          <li>&copy; Ace Web Solutions. All rights reserved</li>
          <li>
            Design:{" "}
            <a
              href="http://html5up.net"
              title="HTML5 UP"
              rel="noreferrer"
              target="_blank"
            >
              HTML5 UP
            </a>
          </li>
          <li>
            SVG:{" "}
            <a
              href="https://www.flaticon.com/authors/photo3idea-studio"
              title="SVG Author"
              rel="noreferrer"
              target="_blank"
            >
              "photo3idea_studio"{" "}
            </a>
            <a
              href="https://www.flaticon.com/authors/freepik"
              title="SVG Author"
              rel="noreferrer"
              target="_blank"
            >
              and "Freepik"{" "}
            </a>
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              rel="noreferrer"
              target="_blank"
            >
              Flaticon
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
