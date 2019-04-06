import React from "react"
import {Link} from "react-router-dom"


function HomePage() {
  return (
    <div className="homepage">

      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="titleScreen">Ahhhh jusss book it!</h1>
        </div>
      </div>
      <div className="container">
        <div className="section">



          <div className="row">
          
            <div className="icon-block">
            <div className="col s12 m4"> 
            <Link to="/bands">
                <div className="hvrbox">
               
                 <h2 className="center brown-text">
                  <img src={'https://rotocolorrhythm.com/wp-content/uploads/2014/09/a-to-b-boxed.jpg'} height="200px" className="hvrbox-layer_bottom" /></h2>
                  <div className="hvrbox-layer_top"><div className="hvrbox-text">Chipper Jones</div>
                  </div></div></Link>

              </div>
            </div>

            <div className="icon-block">
            <div className="col s12 m4">

                <div className="hvrbox">
                  <h2 className="center brown-text">
                    <img src={'https://f4.bcbits.com/img/a1487626021_16.jpg'} height="200px" className="hvrbox-layer_bottom" /></h2>
                  <div className="hvrbox-layer_top"><div className="hvrbox-text">Suspirians</div>
                  </div></div>

              </div>
            </div>

            <div className="icon-block">
            <div className="col s12 m4">

                <div className="hvrbox">
                  <h2 className="center brown-text">
                    <img src={'https://d1rgjmn2wmqeif.cloudfront.net/r/g/51882.jpg'} height="200px" className="hvrbox-layer_bottom" /></h2>
                  <div className="hvrbox-layer_top"><div className="hvrbox-text">The Young</div>
                  </div></div>
    

              </div>
            </div>

            <div className="icon-block">
            <div className="col s12 m4">

                <div className="hvrbox">
                  <h2 className="center brown-text">
                    <img src={'https://www.slugmag.com/wp/wp-content/uploads/2016/07/Spray-paint.jpg'} height="200px" className="hvrbox-layer_bottom" /></h2>
                  <div className="hvrbox-layer_top"><div className="hvrbox-text">Spray Paint</div>
                  </div></div>


              </div>
            </div>

            <div className="icon-block">
            <div className="col s12 m4">

                <div className="hvrbox">
                  <h2 className="center brown-text">
                    <img src={'https://f4.bcbits.com/img/a0271534774_16.jpg'} height="200px" className="hvrbox-layer_bottom" /></h2>
                  <div className="hvrbox-layer_top"><div className="hvrbox-text">Mirror Travel</div>
                  </div></div>

              </div>
            </div>

            <div className="icon-block">
            <div className="col s12 m4">

                <div className="hvrbox">
                  <h2 className="center brown-text">
                    <img src={'http://theblackangels.com/wp-content/uploads/2016/09/Indigo-Meadow-front.png'} height="200px" className="hvrbox-layer_bottom" /></h2>
                  <div className="hvrbox-layer_top"><div className="hvrbox-text">The Black Angels</div>
                  </div></div>
                {/* <h5 className="center">Suspirians</h5> */}

              </div>
            </div>

           
          </div>

        </div>
      </div>

      <div className="container">
        <div className="section">

        </div>
      </div>



    </div>
  )
}
export default HomePage