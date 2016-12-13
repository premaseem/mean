/**
 * Created by asee2278 on 12/13/16.
 */

var mongoose = require('mongoose')
var Hotel = mongoose.model('Hotel')

module.exports.reviewsGetAll = function(req,res){
var id = req.params.hotelId
    Hotel.findById(id).exec(function(err,doc){
        res.json(doc.reviews);
    })
};

module.exports.reviewsGetOne = function(req,res){


};