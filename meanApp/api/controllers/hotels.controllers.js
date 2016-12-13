/**
 * Created by asee2278 on 12/9/16.
 */
//var dbconn = require('../data/dbconnection.js')
//var hotelData = require('../data/hotel-data.json')
//var ObjectId = require('mongodb').ObjectId;

var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel')




module.exports.hotelsGetAll = function(req,res) {

    console.log(req.query)
    var offset = 1;
    var count = 2;
    if (req.query && req.query.offset) {

        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count,10);
    }

    Hotel.find().skip(offset).limit(count).exec(function(err,hotels){
        console.log("Found hotels", hotels.length);
        res.json(hotels)
    })


}

module.exports.hotelsGetOne = function(req,res){
    var id = req.params.hotelId
    console.log('get one hotel'+id)

    Hotel
        .findById(id)
        .exec(function(err,doc){
        res
            .status(200)
            .json(doc);
    })


}

module.exports.hotelsAddOne = function(req, res) {


    if(req.body && req.body.name && req.body.stars){
        console.log("POST new hotel and node mon ");
        console.log(req.body);
        hotel = req.body;
        hotel.stars = parseInt(req.body.stars,10);
        collection.insertOne(hotel,function(err,response){
            res
                .status(201)
                .json(response.ops);
        });


    }else {
        console.log("error in payload ")
        res
            .status(400)
            .json({"message":"Required data missing from body "})
    }

};