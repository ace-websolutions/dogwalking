import React from "react"
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTelegram,
} from "react-icons/fa"

const Footer = () => (
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

export default Footer
