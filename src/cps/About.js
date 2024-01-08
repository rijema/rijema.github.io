

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import '../App.css';

export default function About() {
    return (
        <>
        <div >
        <header >
            <center>
          <div >
            <div>
                <h1
                >
                Second Page
                </h1>
                <h5
                >
               Content about me
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
          </div></center>
        </header>
      </div>
      </>
    );
}