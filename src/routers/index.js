const express = require('express');
const indexRouter = express.Router();
const city = require('../models/city');


indexRouter.get('/get/data', async(req, res)=>{
    try {
        const data = await city.find({});
        res.send(data);
    } catch (err) {
        console.log(err);
    }
})

module.exports = indexRouter;