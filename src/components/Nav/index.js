import React from "react"
import {Link} from "react-router-dom"

function Nav(){
    return(
        <nav className="white" role="navigation">
        {/* <div className="nav-wrapper container"> */}
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Book It</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">I'm an Artist</a></li>
                <li><a href="#">I want to book a band</a></li>
                <li><Link to={"/login"}>Login</Link></li>
              </ul>
            </div>
          </nav>
      
          <ul id="nav-mobile" className="sidenav">
            <li><a href="#">Here is another link</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          {/* </div> */}
        </nav>
    )
}
export default Nav