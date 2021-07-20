import * as React from "react"
import { useState } from "react"
import "../styles/navbar.css"
import Menu from "../images/mobile_menu.png"
import { navigate } from "gatsby-link"
import { initial } from "lodash"
import Close from "../images/close_icon.png"

const UIActive = active => {
  const nav = document.querySelector("nav")
  if (active) {
    nav.classList.add("mobile_nav")
  } else {
    nav.classList.remove("mobile_nav")
  }
}

const nav = path => {
  switch (path) {
    case "home":
      navigate("/")
      break
    case "about":
      navigate("/aboutus")
      break
    case "classes":
      navigate("/class/")
      break
    case "photos":
      navigate("/gallery/")
      break
    case "contact":
      navigate("#contact")
      UIActive(false)
      break
    default:
      //no-opt
      break
  }
}

const Header = () => {
  const [state, showState] = useState(false)

  return (
    <header>
      <p onClick={() => nav("home")}>JAZZ FITNESS</p>
      <div onClick={() => UIActive(true)}>
        <img
          id="mobile-menu-btx"
          className="mobile-menu"
          src={Menu}
          width="30"
          height="30"
          alt="mobile-menu"
        />
      </div>

      <nav>
        <img
          onClick={() => UIActive(false)}
          className="close"
          src={Close}
          width={30}
          height={30}
        />

        <ul>
          <li onClick={() => nav("home")}>HOME</li>
          <li onClick={() => nav("classes")}>Classes</li>
          <li onClick={() => nav("contact")}>Contact</li>
          <li onClick={() => nav("about")}> ABOUT US</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
