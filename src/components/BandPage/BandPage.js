import React, { Component } from 'react'
import API from '../../utils/API'

class BandPage extends Component {
    state = {
        band: {}
    }
    componentDidMount(){
        API.getBand(this.props.match.params.id)
        .then(res => this.setState({band: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <h1>{this.state.band.name}</h1>
        )
    }
}

export default BandPage