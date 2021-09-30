import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hybrid from "./pages/Hybrid";
import Virtual from "./pages/Virtual";
import Pricing from "./pages/Pricing";
// import Pricing from './pages/Pricing2';
import AboutUs from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feature from './components/features';
import Contact from './components/contact';
import Blogsmain from './components/blogsmain';
import Maincontent from './components/career/careers';
import DataAnalytics from './components/DataAnalytics'

const Routes = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hybrid-event-platform" component={Hybrid} />
        <Route exact path="/virtual-event-platform" component={Virtual} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/features" component={Feature} />
        <Route exact path='/blogs' component={Blogsmain} />
        <Route exact path='/career' component={Maincontent} />
        <Route exact path='/data-and-analytics' component={DataAnalytics} />
        
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
