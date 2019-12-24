import React, {Component} from 'react';
import { render } from '@testing-library/react';
import loadData from '../utils.js/utils'

class GetPost extends Component{
    state ={
        getpost: []
    }
    async componentDidMount(){
        const response = loadData(`http://localhost:3333/artist/addartist`)
        const getpost = response
        this.setState({getpost})
    }
    render(){
        const {getpost} = this.state
        return(
            <form>
                <label htmlFor="">id
                <input type="text"/></label>
            </form>
        )

    }
}