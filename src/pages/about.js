import React from "react"
import Layout from "../components/layout"
import { container, main_content } from "./about.module.scss"

const about = () => {
  return (
    <Layout>
      <main>
        <div className={container}>
          <div className={main_content}>
            {/* <h1>About</h1>
            <h2>MUSE</h2> */}
            <p>/mjuːz/</p>
            <br></br>
            <p>
              In Greek and Roman mythology each of nine goddesses, the daughters
              of Zeus and Mnemosyne, who preside over the arts and sciences.
            </p>
            <img
              src="https://i.ibb.co/gVbQhHs/Nine-Muses-Samuel-Griswold-Goodrich-1832.jpg"
              alt="muse"
            />
          </div>
          <img
            src="https://i.ibb.co/44F5xFQ/the-muses-the-nine-muses-goddesses-of-greek-mythology.jpg"
            alt="muse"
          />
        </div>

        {/* <img
            src="https://i.ibb.co/gVbQhHs/Nine-Muses-Samuel-Griswold-Goodrich-1832.jpg"
            alt="muse"/> */}
      </main>
    </Layout>
  )
}

export default about
