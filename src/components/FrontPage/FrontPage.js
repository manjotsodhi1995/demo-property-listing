import React, { Component } from "react";
import { Route } from "react-router-dom";
import HeroDisplay from "./HeroDisplay/HeroDisplay";
import HeroDisplayBuy from "./HeroDisplay/HeroDisplayBuy";
import HeroDisplayRent from "./HeroDisplay/HeroDisplayRent";
import HeroDisplaySell from "./HeroDisplay/HeroDisplaySell";

import Footer from "./Footer/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="front-page-wrapper">
        <Route exact path="/" component={props => <HeroDisplay {...props} />} />
        <Route
          exact
          path="/buy"
          component={props => <HeroDisplayBuy {...props} />}
        />
        <Route
          exact
          path="/rent"
          component={props => <HeroDisplayRent {...props} />}
        />
        <Route
          exact
          path="/sell"
          component={props => <HeroDisplaySell {...props} />}
        />

        <Footer />
      </div>
    );
  }
}
