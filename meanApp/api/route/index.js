/**
 * Created by asee2278 on 12/9/16.
 */

var express = require('express')
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers')

router
    .route('/hotels')
.get(ctrlHotels.hotelsGetAll)
.post(function(req, res){
        console.log("get the home page or Root ");
        res.status(200).json({"json":req.method})
    });

module.exports = router