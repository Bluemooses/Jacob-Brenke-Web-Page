import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { useRoutes } from "hookrouter";
import "./App.scss";
import Header from "../Components/Header/Header";
import About from "../Components/About/About";

import Footer from "../Components/Footer/Footer";
import Body from "../Components/Body/Body";
import Nav from "../Components/Nav/Nav";
import Mission from "../Components/Mission/Mission";
const App = (props) => {
  return (
    <div className="app">
      <Router>
        <Switch>
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
