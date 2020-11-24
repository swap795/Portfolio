import React from "react";

import GlobalStyle from './components/GlobalStyle';
import Home from "./components/Home";
import Faq from "./components/Faq";
import Nav from "./components/Nav"

import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";

import { Switch, Route } from 'react-router-dom';



function App() {
  return (
  <div>
    <GlobalStyle />
    <Nav />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <AboutMe />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/contact">
        <ContactMe />
        <Faq />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
