import React, {Component} from 'react';
import { render } from '@testing-library/react';
import loadData from '../utils.js/utils'
import {FormControl, FormLabel, TextField, Button} from '@material-ui/core'
import {Redirect} from 'react-router-dom'
export default class GetPost extends Component{
    state ={
        id: '',
        name: '',
        bestsellingalbum: '',
        hometown: '',
        career: '',
        referrer: null
    }
   addArtist = async data => {
        const response = await fetch(`http://localhost:3333/artist/addartist`, {
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
    handleSubmit = async(e)=> {
        e.preventDefault();
        const data = this.state;
        await this.addArtist(data);
        this.setState({ referrer: '/'})
    }
    handlechange = async(e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    render(){
        const {id,name,bestsellingalbum,hometown, career, referrer} = this.state
        if (referrer) return <Redirect to={referrer}/>
        return(
        <FormControl onSubmit={this.handleSubmit} method="POST">
    
                <TextField id="standard-basic" label="Id" type="text" name='id' value={id} onChange={this.handlechange}/>
                <TextField id="standard-basic" label="Name" type="text"  name='name' value={name} onChange={this.handlechange}/>
                <TextField id="standard-basic" label="Best Selling Album" type="text"  name='bestsellingalbum'  value={bestsellingalbum} onChange={this.handlechange}/>
                <TextField id="standard-basic" label="Home Town" type="text"  name='hometown' value={hometown} onChange={this.handlechange}/>
                <TextField id="standard-basic" label="Career" type="text" name='career'  value={career} onChange={this.handlechange}/>
            <Button type="submit" variant='outlined' color='secondary' onClick={this.handleSubmit}>Enter</Button>
        </FormControl>
        )}
}