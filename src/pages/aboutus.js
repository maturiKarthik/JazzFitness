import React from "react"
import Layout from "../components/layout"
import "../styles/aboutus.css"
import Founder from "../images/founder.jpeg"

const Aboutus = () => {
  return (
    <Layout>
      <section>
        <article className="article1">
          <h1>ABOUT US</h1>
        </article>
        <article className="article2">
          <ul>
            <li>
              <img src={Founder} alt={"founder"} />
              <p className="title">Santoshi Sambodapoina</p>
              <sub>Founder</sub>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                tempora eaque laudantium sint neque! Cupiditate, ex, dignissimos
                similique harum provident ipsum animi officiis eum cum accusamus
                beatae temporibus voluptates consectetur.
              </p>
            </li>
            <li>
              <img src={Founder} alt={"founder"} />
              <p className="title">anu Radaha</p>
              <sub>Zumba Trainer</sub>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                tempora eaque laudantium sint neque! Cupiditate, ex, dignissimos
                similique harum provident ipsum animi officiis eum cum accusamus
                beatae temporibus voluptates consectetur.
              </p>
            </li>
            <li>
              <img src={Founder} alt={"founder"} />
              <p className="title">Kavitha ready</p>
              <sub>yoga Trainer</sub>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                tempora eaque laudantium sint neque! Cupiditate, ex, dignissimos
                similique harum provident ipsum animi officiis eum cum accusamus
                beatae temporibus voluptates consectetur.
              </p>
            </li>
          </ul>
        </article>
      </section>
    </Layout>
  )
}

export default Aboutus
