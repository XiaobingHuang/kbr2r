import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  User,
  Registration,
  Geozone
  
} from "./components";
import ScriptTag from 'react-script-tag';




ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<User />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/blog" element={<Geozone />}>
      </Route>
    </Routes>
    <Footer />
    <ScriptTag isHydrating={true} type="text/javascript" 
      src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
