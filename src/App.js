import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import Home from "./cps/Home";
import About from "./cps/About";
import ContactMe from "./cps/ContactMe";

function App() {
  return (
      <>
    <Routes>
                    
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
 
                    <Route
                        path="/about"
                        element={<About />}
                    />
 
                    <Route
                        path="/contactme"
                        element={<ContactMe />}
                    />
 
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
       
    <div className="App">
      <header className="App-header">
        <div className='parent'>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
              <h1
              >
              Richard Jeremias
              </h1>
              <h5
              >
              Software engineer and AI generalist
              </h5>
          </div>

          <div>


              <a
                className="App-link anchor-element"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
               <Link to="/about">About</Link>
              </a>
              

              <a
                className="App-link anchor-element"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link to="/education">Education</Link> 
              </a>

              <a
                className="App-link anchor-element"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
               <Link to="/projects"> Projects</Link>
              </a>

             

              <a
                className="App-link anchor-element"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link to="/habilities">Habilities</Link>
              </a>

              <a
                className="App-link anchor-element"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link to="/contactme">Contact Me</Link> 
              </a>
          
          </div>
        </div>
      </header>
    </div>
     </>
  );
}

export default App;
