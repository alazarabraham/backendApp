
const express = require('express')
const router = express.Router();
const artistModel = require('../model/artistModel')

router.get('/', async(req,res,next)=>{
    const getArtist = await artistModel.getAll();
    res.json(getArtist).status(200);
})

router.post('/addartist', async(req,res)=>{
    const {id, name,bestsellingalbum,hometown,career} = req.body;
    console.log(req.body)
    const response = await artistModel.addArtist(id,name,bestsellingalbum,hometown,career);
    if(response.command === 'insert' && response.rowCounter >= 1){
        res.sendStatus(200);
    }else{
    res.send(`please add ${name}`).status(409)}
})

module.exports = router;