import React from "react"
import Share from "../images/share-one.svg"
import Relax from "../images/relax.svg"
import Winner from "../images/winner.svg"
import Drinks from "../images/order-drinks.svg"
import "uikit/dist/css/uikit.min.css"

const Section = () => {
  return (
    // </div>
    <div>
    <div class="columns is-desktop">
      <div class="column is-size-1-mobile has-text-weight-medium">
        <p className="section-textOne">Create event, Share with friends.</p>
      </div>
      <div class="column">
        <Share className="img-one" />
      </div>
    </div>
    <div className="columns is-desktop">
      <div class="column">
        <Relax className="img-two" />
      </div>
      <div class="column is-size-1-mobile has-text-weight-medium">
        <p className="section-textTwo">
          Get access to spot closest to you where you can relax and be taken
          care of and meet cool peeps.
        </p>
      </div>
    </div>
    <div className="columns is-desktop">
      <div class="column is-size-1-mobile has-text-weight-medium">
        <p className="section-textThree">
        Play games rank amongst your peers and view winners.
        </p>
      </div>
      <div class="column">
        <Winner className="img-three" />
      </div>
    </div>
    <div className="columns is-desktop">
      <div class="column">
        <Drinks className="img-four" />
      </div>
    <div class="column is-size-1-mobile has-text-weight-medium">
        <p className="section-textFour">
        Order drinks for your party and get it delivered in little or no time.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Section
