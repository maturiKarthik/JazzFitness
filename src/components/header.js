import * as React from "react"
import "../styles/navbar.css"
import Menu from "../images/mobile_menu.png"
import { navigate } from "gatsby-link"

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
    case "contact":
      navigate("#contact")
      break
    default:
      //no-opt
      break
  }
}
const Header = () => {
  return (
    <header>
      <p onClick={() => nav("home")}>JAZZ FITNESS</p>
      <div>
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
        <i className="fa fa-close"></i>

        <ul>
          <li onClick={() => nav("home")}>HOME</li>
          <li onClick={() => nav("classes")}>Our Classes</li>
          <li onClick={() => nav("contact")}>Contact</li>
          <li onClick={() => nav("about")}> ABOUT US</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
