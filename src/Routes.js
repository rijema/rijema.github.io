import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./cps/Home";
import About from "./cps/About";
import ContactMe from "./cps/ContactMe";
import Projects from "./cps/Projects";
import Articles from "./cps/Articles";
import Education from "./cps/Education";
import Habilities from "./cps/Habilities";

const Routes = () => {
   return(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/education" element={<Education />} />
            <Route path="/habilities" element={<Habilities />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
   )
}

export default Routes;


