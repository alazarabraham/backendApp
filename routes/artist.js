
const express = require('express')
const router = express.Router();
const userNameModel = require('../model/userNameModel')

router.get('/user', async(req,res,next)=>{
    const getUser = await userNameModel.getAll();
    res.json(getUser).status(200);
})

router.post('/addUser', async(req,res)=>{
    const {firstName,lastName, username, bio, email, phoneNumber, gender} = req.body;
    console.log(req.body)
    const response = await userNameModel.addUser(firstName,lastName, username, bio, email, phoneNumber, gender);
    if(response.command === 'insert' && response.rowCounter >= 1){
        res.sendStatus(200);
    }else{
    res.send(`please add ${name}`).status(409)}
})

module.exports = router;