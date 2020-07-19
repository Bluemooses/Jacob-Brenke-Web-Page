import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import "./App.scss";
import Header from "../Components/Header/Header";
import About from "../Components/About/About";

import Footer from "../Components/Footer/Footer";
import Body from "../Components/Body/Body";
import Nav from "../Components/Nav/Nav";
import Mission from "../Components/Mission/Mission";
import Slideshow from "../Components/Slideshow/Slideshow";
const App = (props) => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/gallery">
            <Header />
            <Nav />
            <Slideshow />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <Nav />
            <About />
            <Footer />
          </Route>
          <Route path="/mission">
            <Header />
            <Nav />
            <Mission />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Nav />
            <Body />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
