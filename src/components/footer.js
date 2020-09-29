import React from "react"
import AppBanner from "../images/soon.svg"
// import {useStaticQuery, graphql} from "gatsby"
// import Img from 'gatsby-image'

// import "uikit/dist/css/uikit.min.css"

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="content has-text-centered">
          <div className="app-banner">
            <AppBanner />
          </div>
          <div className="columns">
            <div className="column">
              <div className="block footer-text">
                <span className="how">How can we help?</span> Contact us anytime
              </div>
            </div>
            <div className="column">
              <div className="tile box">
                <p class="block block-text">
                  SEND US A MESSAGE. hello@goodtime.africa
                </p>
              </div>
            </div>
          </div>
          <section class="level is-mobile">
            <div class="level-item">
              <div>
                <p class="title">Logo</p>
              </div>
            </div>
            <div class="level-item company">
              <div>
                <p class="title">Company</p>
                <p class="sub-title">About Us</p>
                <p class="sub-title">Contact Us</p>
              </div>
            </div>
            <div class="level-item info">
              <div>
                <p class="title">Further Informations</p>
                <p class="sub-title">Terms & Conditions</p>
                <p class="sub-title">Privacy Policy</p>
              </div>
            </div>
            <div class="level-item">
              <div>
                <p class="title">Follow us</p>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Footer
