import React from "react"
import {Link} from "react-router-dom"
import API from "../../utils/API"


class HomePage extends React.Component{
  state = {
    bands: []
  }
  initBands(){
    API.saveBands({
      name: "Chipper Jones",
      description: "placeholder for description",
      imageUrl: 'https://rotocolorrhythm.com/wp-content/uploads/2014/09/a-to-b-boxed.jpg'
    })
    API.saveBands({
      name: "Suspirians",
      description: "placeholder for description",
      imageUrl: 'https://f4.bcbits.com/img/a1487626021_16.jpg'
    })
    API.saveBands({
      name: "The Young",
      description: "placeholder for description",
      imageUrl: 'https://d1rgjmn2wmqeif.cloudfront.net/r/g/51882.jpg'
    })
    API.saveBands({
      name: "Spray Paint",
      description: "placeholder for description",
      imageUrl: 'https://www.slugmag.com/wp/wp-content/uploads/2016/07/Spray-paint.jpg'
    })
    API.saveBands({
      name: "Mirror Travel",
      description: "placeholder for description",
      imageUrl: 'https://f4.bcbits.com/img/a0271534774_16.jpg'
    })
    API.saveBands({
      name: "The Black Angels",
      description: "placeholder for description",
      imageUrl: 'http://theblackangels.com/wp-content/uploads/2016/09/Indigo-Meadow-front.png'
    }).then(res => this.loadBands())
  }
  loadBands(){
    API.getBands().
    then(res => this.setState({bands: res.data}))
  }
  componentDidMount(){
    this.initBands()
  }
  render(){  
    return(
      <div className="homepage-container">
          <div className="section no-pad-bot" id="index-banner">
            <div className="container">     
              <h1 className="header center orange-text">Ahhhh jusss book it!</h1>
            </div>
          </div>
      
      
        <div className="container">
          <div className="section">
      
            
            
            <div className="row">
              <div className="col s12 m4">
              <Link to="/login">
                <div className="icon-block">
                  <h2 className="center brown-text"><img src={'https://rotocolorrhythm.com/wp-content/uploads/2014/09/a-to-b-boxed.jpg'}  height="200px"/></h2>
                  <h5 className="center">Chipper Jones</h5>
      
                  </div>
                  </Link>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                <h2 className="center brown-text"><img src={'https://f4.bcbits.com/img/a1487626021_16.jpg'}  height="200px"/></h2>
                  <h5 className="center">Suspirians</h5>
                    
                    </div>
              </div>
                <div className="col s12 m4">
                <div className="icon-block">
                <h2 className="center brown-text"><img src={'https://d1rgjmn2wmqeif.cloudfront.net/r/g/51882.jpg'}  height="200px"/></h2>
                <h5 className="center">The Young</h5>
      
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                <h2 className="center brown-text"><img src={'https://www.slugmag.com/wp/wp-content/uploads/2016/07/Spray-paint.jpg'}  height="200px"/></h2>
                  <h5 className="center">Spray Paint</h5>
      
                  </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
              <h2 className="center brown-text"><img src={'https://f4.bcbits.com/img/a0271534774_16.jpg'}  height="200px"/></h2>
                <h5 className="center">Mirror Travel</h5>
    
      
                  </div>
              </div>
              <div className="col s12 m4">
               <Link to="/band">
                <div className="icon-block">
                <h2 className="center brown-text"><img src={'http://theblackangels.com/wp-content/uploads/2016/09/Indigo-Meadow-front.png'}  height="200px"/></h2>
                <h5 className="center">The Black Angels</h5>
      
                  </div>
                </Link>
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
}
export default HomePage