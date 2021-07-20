import React from "react"
import "../styles/footer.css"
import insta from "../images/insta.png"
import facebook from "../images/facebook.png"
import { TextField, Button } from "@material-ui/core"

const Footer = () => {
  return (
    <>
      <footer>
        <p>Copyright © 2021 - JazzFitness Coach. All rights reserved.</p>
        <ul className="social">
          <li>
            <a
              href="https://www.instagram.com/jazz_fitness_studio/"
              target="_blank"
            >
              <img src={insta} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jazz_fitness_studio/"
              target="_blank"
            >
              <img src={facebook} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
