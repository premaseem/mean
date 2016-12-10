/**
 * Created by asee2278 on 12/9/16.
 */
var hotelData = require('../data/hotel-data.json')
module.exports.hotelsGetAll = function(req,res){

    console.log('get all hotels')
    res.status(200).json(hotelData);
}