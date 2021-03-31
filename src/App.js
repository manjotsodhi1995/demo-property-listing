import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import FrontPage from "./components/FrontPage/FrontPage";
import MasterSearchContainer from "./components/MasterSearchContainer/MasterSearchContainer";
import SearchBar from "./components/MasterSearchContainer/SearchBar";
import "./assets/styles/css/bootstrap.min.css";
import "./assets/styles/css/fontawesome.min.css";
import "./assets/styles/css/hamburgers.min.css";
import "./assets/styles/sass/main.scss";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* LandingPage Routes */}
        <Route path="/" component={props => <Header {...props} />} />
        <Route
          exact
          path={["/", "/buy", "/sell", "/rent"]}
          component={props => <FrontPage {...props} />}
        />

        {/* Property Search Routes */}
        <Route
          exact
          path="/property"
          component={props => <SearchBar {...props} />}
        />
        <Route
          exact
          path="/property"
          component={props => <MasterSearchContainer {...props} />}
        />
        <Route exact path="/login" component={props => <Login {...props} />} />
      </div>
    );
  }
}

export default App;
