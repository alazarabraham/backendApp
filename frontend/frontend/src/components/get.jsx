import React , {Component} from 'react';
import loadData from '../utils.js/utils'
import {Table, TableRow, TableCell, TableHead, TableBody} from '@material-ui/core'
export default class Get extends Component {
    state = {
        user: []
    }
    async componentDidMount(){
        const response = await loadData(`http://localhost:3333/user/user`)
        const user = response;
        this.setState({user})
    }
   
    render(){
        const { user } = this.state;
        return(
            <Table>
               
                <TableHead>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Bio</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Gender</TableCell>

                    
                </TableHead> 
                <TableBody>
                {user.map(users=>(
                <TableRow key={users.id} value={users.id}> 
                <TableCell>{users.firstname}</TableCell>
                <TableCell>{users.lastname}</TableCell>
                <TableCell>{users.username}</TableCell>
                <TableCell>{users.bio}</TableCell>
                <TableCell>{users.email}</TableCell>
                <TableCell>{users.phonenumber}</TableCell>
                <TableCell>{users.gender}</TableCell>
                </TableRow>

                ))}
                </TableBody>

            </Table>
        )
    }
}


