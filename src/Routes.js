import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./cps/Home";
import About from "./cps/About";
import ContactMe from "./cps/ContactMe";

const Routes = () => {
   return(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>

 </Router>
   )
}

export default Routes;


