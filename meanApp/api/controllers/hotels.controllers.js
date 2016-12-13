/**
 * Created by asee2278 on 12/9/16.
 */
var dbconn = require('../data/dbconnection.js')
var hotelData = require('../data/hotel-data.json')
var ObjectId = require('mongodb').ObjectId;


module.exports.hotelsGetAll = function(req,res) {


    console.log('get all hotels')

    console.log(req.query)
    var offset = 1;
    var count = 2;
    if (req.query && req.query.offset) {

        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count,10);
    }

    var db = dbconn.get();
    docs = db.collection('hotels').find().skip(offset).limit(count).toArray(function(err,returnDoc){
       if(err){
           cosole.log("Error in collections ");
           return
       }
        res.status(200).json(returnDoc);
    });

}

module.exports.hotelsGetOne = function(req,res){
    var id = req.params.hotelId
    console.log('get one hotel'+id)

    var db = dbconn.get();
    var collection = db.collection('hotels');
    collection.findOne({'_id' : ObjectId(id)},function(err,returnDoc){
        if(err){
            cosole.log("Error in collections ");
            return
        }
        res.status(200).json(returnDoc);
    });


}

module.exports.hotelsAddOne = function(req, res) {

    var db = dbconn.get();
    var collection = db.collection('hotels');
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