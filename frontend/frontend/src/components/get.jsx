import React , {Component} from 'react';
import loadData from '../utils.js/utils'
export default class Get extends Component {
    state = {
        artist: []
    }
    async componentDidMount(){
        const response = await loadData(`http://localhost:3333/artist`)
        const artist = response;
        this.setState({artist})
    }
   
    render(){
        const { artist } = this.state;
        return(
            <div>
    <h1>{artist.map(artists=>(
    artist.influence
    ))}</h1>

            </div>
        )
    }
}


