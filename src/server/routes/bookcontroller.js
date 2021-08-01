const express = require('express');
const router = express.Router();
const Bookdata = require('../models/book');

router.post('/driverrent',(req, res) =>{
    let bookData = req.body
    let bookdata = new Bookdata(bookData)
    bookdata.save((err,booked)=>{
        if(err){
            console.log(err)
        }else {
            res.status(200).send(booked)
        }
    })
 })

 module.exports = router ;