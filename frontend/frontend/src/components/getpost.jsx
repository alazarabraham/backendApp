import React, {Component} from 'react';
import { render } from '@testing-library/react';
import loadData from '../utils.js/utils'
import {FormControl, FormLabel, TextField, Button} from '@material-ui/core'
import {Redirect} from 'react-router-dom'
export default class GetPost extends Component{
    state ={
        firstName: '',
        lastName: '',
        username: '',
        bio: '',
        email: '',
        phoneNumber: '',
        referrer: null
    }
   addUser = async data => {
        const response = await fetch(`http://localhost:3333/user/adduser`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json"
        },
    body: JSON.stringify(data)
    })
        const reply = await response
        if (reply.status=== 200){
            return reply
        }
        if (reply.status !==200){
            return reply
        }
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        const data = this.state;
        await this.addUser(data);
        this.setState({referrer: '/users'})
    }
    handlechange = async(e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    render(){
        const {firstName,lastName, username, bio, email, phoneNumber, gender, referrer} = this.state
        if (referrer) return <Redirect to={referrer}/>
        return(
        <FormControl onSubmit={this.handleSubmit} method="POST">
                <TextField id="standard-basic" label="firstName" type="text" name='firstName' value={firstName} onChange={this.handlechange}/>
                <TextField id="standard-basic" label="lastName" type="text"  name='lastName' value={lastName} onChange={this.handlechange}/>
                <TextField id="standard-basic" label="username" type="text"  name='username'  value={username} onChange={this.handlechange}/>
                <TextField id="standard-basic" label="bio" type="text"  name='bio' value={bio} onChange={this.handlechange}/>
                <TextField id="standard-basic" label="email" type="email" name='email'  value={email} onChange={this.handlechange}/>
                <TextField id="standard-basic" label="phoneNumber" type="tel" name='phoneNumber'  value={phoneNumber} onChange={this.handlechange}/>
                <TextField id="standard-basic" label="gender" type="text" name='gender'  value={gender} onChange={this.handlechange}/>

            <Button  variant='outlined' color='secondary' type='submit' onClick={this.handleSubmit}>Enter</Button>
        </FormControl>
        )}
}