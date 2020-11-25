import React from "react";

import GlobalStyle from './components/GlobalStyle';
import Home from "./components/Home";
import Faq from "./components/Faq";
import Nav from "./components/Nav"

import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";

import { Switch, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();       // this gives us the current page's key 

  return (
  <div>
    <GlobalStyle />
    <Nav />
    <AnimatePresence exitBeforeEnter>
      <Switch location={ location } key={ location.pathname }>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
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
    </AnimatePresence>
  </div>
  );
};

export default App;
