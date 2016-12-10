/**
 * Created by asee2278 on 12/9/16.
 */
var hotelData = require('../data/hotel-data.json')

module.exports.hotelsGetAll = function(req,res){
    console.log('get all hotels')
    res.status(200).json(hotelData);
}

module.exports.hotelsGetOne = function(req,res){
    var id = req.params.hotelId
    var thisHotel = hotelData[id]
    console.log('get one hotel'+id)
    res.status(200).json(thisHotel);

}