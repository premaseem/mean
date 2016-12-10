/**
 * Created by asee2278 on 12/9/16.
 */

var express = require('express')
var router = express.Router();

router
    .route('/json')
.get(function(req, res){
        console.log("get the home page or Root ");
        res.status(200).json({"json":req.method})
    })
.post(function(req, res){
        console.log("get the home page or Root ");
        res.status(200).json({"json":req.method})
    });

module.exports = router