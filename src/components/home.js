import React from "react"
import "../styles/home.css"
import Running from "../images/running_women.png"
import Yoga from "../images/yoga.png"
import Meditation from "../images/meditation.png"
import WeightLoss from "../images/weight_loss.png"
import Enjoy from "../images/enjoy.png"
import Customizable from "../images/customizable.png"
import Zumbaclass from "../images/zumba_class.jpeg"
import Yogaclass from "../images/yoga_class.png"
import User1 from "../images/user1.png"
import User2 from "../images/user2.png"
import User3 from "../images/user3.png"
import Instructor from "../images/instructor1.png"
import { Link } from "@reach/router"

const navToGoogle = () => {
  alert("NAV to gool")
}

const Home = () => {
  return (
    <>
      <section className="hero">
        <article className="article_1">
          <img src={Running} alt="running-women.png" />
          <h1>GET IN - GET FIT</h1>
        </article>
        <article className="article_2">
          <p className="title">
            Get acess to fitness classes anywhere , anytime .
          </p>
          <sub>
            Acess the best workout classes and studios with one membership. We
            help you to create a custom workout schedule to make you fit.
          </sub>

          <div className="button_group">
            <div className="button">
              <p>Start a free trail</p>
            </div>
            <a
              href="https://g.page/bjp-s-srinivass-mudhiraj-s-home?share"
              target="_blank"
            >
              <div className="button_reach">
                <p>Studio near me</p>
              </div>
            </a>
          </div>
        </article>
      </section>

      <section className="about">
        <article>
          <p>
            the chance to live a little, dance a lot, and
            <span> change your life</span>
          </p>
          <sub>
            Zumba Center started in 2013, but the journey to become the dance
            center began in 2011, in a local Lufkin church with 10 people.
            Within 6 months time, those 10 grew to 60, and all of a sudden it
            seemed, Rudy was teaching 4-5 classes a day, 4 days a week! This is
            when he realized that he had something special. Zumba was impactful
            to so many people of all walks of life. Not only for dancers, but
            all non dancers, and anyone just looking for a change while having
            fun along the way!
          </sub>
        </article>
      </section>

      <section className="why_us">
        <article>
          <p>WHY US</p>
          <div className="underline">
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
          </div>
          <ul>
            <li>
              <div className="title">
                <p>Balance Body & Mind</p>
                <img src={Yoga} alt="Yoga" />
              </div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing eliquam
                interdum diam tortor
              </span>
            </li>

            <li>
              <div className="title spl">
                <p>Meditation Practice</p>
                <img src={Meditation} alt="Meditation" />
              </div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing eliquam
                interdum diam tortor
              </span>
            </li>
            <li>
              <div className="title">
                <p>Healthy Daily Life</p>
                <img src={Meditation} alt="Meditation" />
              </div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing eliquam
                interdum diam tortor
              </span>
            </li>
            <li>
              <div className="title spl">
                <p>Weight Loss</p>
                <img src={WeightLoss} alt="WeightLoss" />
              </div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing eliquam
                interdum diam tortor
              </span>
            </li>
            <li>
              <div className="title">
                <p>Greater Confidence</p>
                <img src={Enjoy} alt="Enjoy" />
              </div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing eliquam
                interdum diam tortor
              </span>
            </li>
            <li>
              <div className="title spl">
                <p>Customizable</p>
                <img src={Customizable} alt="Customizable" />
              </div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing eliquam
                interdum diam tortor
              </span>
            </li>
          </ul>
        </article>
      </section>

      <section className="courses">
        <article>
          <p className="main_title">Our courses</p>
          <div className="underline">
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
          </div>
          <ul>
            <li>
              <img src={Zumbaclass} alt="zumba" />
              <p>Zumba Training</p>
            </li>
            <li>
              <img src={Yogaclass} alt="zumba" />
              <p>Yoga Training</p>
            </li>
          </ul>
        </article>
      </section>

      <section className="sucess">
        <article>
          <p className="main_title">STORIES</p>
          <div className="underline">
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
          </div>
          <ul>
            <li>
              <img src={User1} width="80" height="80" alt="user-1.png" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur temporibus libero iste, repellat placeat recusandae
                excepturi doloremque impedit ex, possimus itaque modi cupiditate
                provident velit.
              </p>
            </li>
            <li>
              <img src={User2} width="80" height="80" alt="user-1.png" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur temporibus libero iste, repellat placeat recusandae
                excepturi doloremque impedit ex, possimus itaque modi cupiditate
                provident velit.
              </p>
            </li>
            <li>
              <img src={User3} width="80" height="80" alt="user-1.png" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur temporibus libero iste, repellat placeat recusandae
                excepturi doloremque impedit ex, possimus itaque modi cupiditate
                provident velit.
              </p>
            </li>
          </ul>
        </article>
      </section>

      <section className="instructor" id="#aboutus">
        <article>
          <sub>MEET OUR TEAM </sub>
          <p className="main_title">INSTRUCTOR</p>
          <div className="underline">
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
            <div className="parallelogram"></div>
          </div>
          <ul>
            <li>
              <img
                src={Instructor}
                width="150"
                height="150"
                alt="instructor1.png"
              />
              <p>Shalini Ready</p>
            </li>
            <li>
              <img
                src={Instructor}
                width="150"
                height="150"
                alt="instructor2.png"
              />
              <p>Anju Radha</p>
            </li>
          </ul>
        </article>
      </section>
    </>
  )
}

export default Home
