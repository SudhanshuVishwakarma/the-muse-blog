import React from "react"
// import { footer } from "./footer.module.scss"
import "./footer.module.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="muse">
          {/* <h2>MUSE</h2> */}
          <div className="about"></div>
          <div className="company">
            <h4>@2021 Created By Twin Moneky</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
