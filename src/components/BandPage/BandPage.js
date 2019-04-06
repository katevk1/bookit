import React, { Component } from 'react'
import {Link} from "react-router-dom"
import API from '../../utils/API'


class BandPage extends Component {
    state = {
        band: {
            name: "Black Angels",
            description: "Formed in May 2004, the Black Angels took their name from the Velvet Underground song The Black Angel's Death Song In 2005, the Black Angels were featured on a dual-disc compilation album of psychedelic music called Psychedelica Vol. 1 from Northern Star Records. This, along with the growing popularity of their MySpace page, gave the band a jump in popularity in the underground scene. The group's debut LP Passover was generally well received in the underground independent rock community and was noted for its dark tones and lyrical content. A review of Passover described them as Walking in the shadows cast by Spiritualized mastermind Jason Pierce, invoking dirges reminiscent of the 13th Floor Elevators. Passover included a quote in the liner notes from Edvard Munch; Illness, insanity, and death are the black angels that kept watch over my cradle and accompanied me all my life. The band was featured on the soundtrack of the 2007 Kevin Bacon movie, Death Sentence, on the second episode of FOX's Fringe, and in the ninth episode of Californication. On Friday, August 5, 2007, they played at Lollapalooza in Chicago. Among other venues, they have also played at SXSW 2006 & 2008 and All Tomorrow's Parties 2008. Touring partners have included the blues rock band The Black Keys, Black Rebel Motorcycle Club, The Warlocks, Roky Erickson, The Brian Jonestown Massacre, Queens of the Stone Age, The Raveonettes, Wolfmother, and The Horrors.",
            imgUrl: "http://i65.tinypic.com/9pw5d0.png"
        }
    }

    render() {
        return (
            <div className="bandpage-container">
                <h1>{this.state.band.name}</h1>
                <p>{this.state.band.description}</p>
                <img src={this.state.band.imgUrl} />
                <div className="bookForm">
                <form><br></br>
  <label>
    Requested Booking Date:
    <input type="date" name="name" placeholder="mm/dd/yyyy"/>
  </label>
  <label>
    Bid Price 
    <input type="number" name="name" placeholder=""/>
  </label>
  <Link to="https://github.com/katevk1/bookit"><a class="waves-effect waves-light btn"><input type="submit" value="Submit"/></a>
</Link></form>
</div>
            </div>
     
           
           
        
         
                    )
                }
            }
            
    
            export default BandPage
