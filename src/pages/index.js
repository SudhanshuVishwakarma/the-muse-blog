import React from "react"
import Layout from "../components/layout"
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

function Index() {
  return (
    <div className="body">
      <Layout>
        <header className="hero">
          <main class="l-main">
            <section class="home" id="home">
              <div class="home__container bd-grid">
                <div class="home__img">
                  <img src="https://i.ibb.co/Y8G0y20/img-head.png" />
                </div>

                <div class="home__data">
                  <h1 class="home__title">
                    Muse
                    <br />
                    Blog 3D
                  </h1>
                  <p class="home__description">
                    Let's help discover the best Muse Blog <br />
                    of the week.
                  </p>
                  <a href="/blog" class="home__button">
                    <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                    Get Started
                  </a>
                </div>
              </div>
            </section>
          </main>
        </header>
      </Layout>
    </div>
  )
}

export default Index
