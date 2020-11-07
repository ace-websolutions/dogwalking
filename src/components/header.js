import React from "react"

const Header = ({ title, text, lineTwo, section }) => {
  return (
    <div id={`#${section}-header`} className={`${section}-header container`}>
      <header>
        <div className="header-div">
          <h2 className="header-title">{title}</h2>
          <p className="header-text">
            {text}
            <br />
            {lineTwo}
          </p>
        </div>
      </header>
    </div>
  )
}

export default Header
