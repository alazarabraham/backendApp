
const express = require('express')
const router = express.Router();
const userNameModel = require('../model/userNameModel')

router.get('/user', async(req,res,next)=>{
    const getUser = await userNameModel.getAll();
    res.json(getUser).status(200);
})

router.post('/adduser', async(req,res)=>{
    const {firstname,lastname, username, bio, email, phonenumber, gender} = req.body;
    console.log(req.body)
    const response = await userNameModel.addUser(firstname,lastname, username, bio, email, phonenumber, gender);
    if(response.command === 'insert' && response.rowCounter >= 1){
        res.sendStatus(200);
    }else{
    res.send(`please add ${name}`).status(409)}
})

module.exports = router;