import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Officers from "../pages/officers/Officers";
import Faculty from "../pages/faculty/Faculty";
import Eligibles from "../pages/eligibles/Eligibles";
import Members from "../pages/members/Members";
import Join from "../pages/join/Join";
import Calender from "../pages/calender/Calender";
import Contact from "../pages/contact/Contact";
import Faq from "../pages/faq/Faq";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/officers" component={Officers} />
              <Route path="/faculty" component={Faculty} />
              <Route path="/eligibles" component={Eligibles} />
              <Route path="/members" component={Members} />
              <Route path="/join" component={Join} />
              <Route path="/calender" component={Calender} />
              <Route path="/contact" component={Contact} />
              <Route path="/faq" component={Faq} />
            </Switch>
          </div>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default Routes;
