import { Link } from "gatsby"
import React from "react"
import Illos from "../images/illosOne.svg"
import "uikit/dist/css/uikit.min.css"


const Header = () => (
  // <header>
  //   <div className="uk-background-default uk-padding uk-panel container">
  //     <div className="inner-header">
  //       <div className="logo">
  //         <Link to="/">Goodtime</Link>
  //       </div>
  //       <div className="navigation">
  //         <nav>
  //           <Link to="/contact">Contact Us</Link>
  //         </nav>
  //       </div>
  //     </div>
  //     <div className="">
  //       <Illos className="uk-align-center uk-align-right@m uk-margin-remove-adjacent banner" />
  //       <p className="uk-text-left catchy">
  //         We are bringing to you a <span className="goodtime">GOODTIME</span>{" "}
  //         you can’t resist.
  //       </p>
  //     </div>
  //   </div>
  // </header>
<section className="hero is-success is-medium banner">
<div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          {/* <a class="navbar-item"> */}
            {/* <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" /> */}
          {/* </a> */}
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>u
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end navigation">
            <nav>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          </nav>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container">
    <div class="columns">
  <div class="column is-size-2-mobile has-text-weight-medium ">
   <p className="banner-text">We are bringing to you a <span className="goodtime">GOODTIME</span> you can’t resist.</p>
  </div>
  <div class="column banner-img">
    <Illos />
  </div>
</div>
    </div>
  </div>
</section>
)

export default Header
