import React from "react"
import {Link} from "react-router-dom"


function Footer(){
    return(
       <Link to="https://github.com/katevk1/bookit"> <footer className="footer">
          {/* <div className="container">
            <div className="row"> */}
              <div className="col l6 s12"><img src={'http://i63.tinypic.com/mu353.png'} alt="Jeff and Kate"></img>
              </div>
    
        </footer></Link>
    )
}
export default Footer