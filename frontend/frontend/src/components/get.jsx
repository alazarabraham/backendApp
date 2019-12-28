import React , {Component} from 'react';
import loadData from '../utils.js/utils'
import {Table, TableRow, TableCell, TableHead, TableBody} from '@material-ui/core'
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
            <Table>
               
                <TableHead>
                <TableCell>Name</TableCell>
                <TableCell>Best Selling Album</TableCell>
                <TableCell>Home Town</TableCell>
                <TableCell>Career</TableCell>
                    
                </TableHead> 
                <TableBody>
                {artist.map(artists=>(
                <TableRow key={artists.id} value={artists.id}> 
                <TableCell>{artists.name}</TableCell>
                <TableCell>{artists.bestsellingalbum}</TableCell>
                <TableCell>{artists.hometown}</TableCell>
                <TableCell>{artists.career}</TableCell>
                </TableRow>

                ))}
                </TableBody>

            </Table>
        )
    }
}


