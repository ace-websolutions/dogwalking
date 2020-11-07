import React from "react"

const Header = ({ title, text, subtext }) => {
  return (
    <div className="container">
      <header>
        <div>
          <h2>{title}</h2>
          <p>
            {text}
            <br />
            {subtext}
          </p>
        </div>
      </header>
    </div>
  )
}

export default Header
