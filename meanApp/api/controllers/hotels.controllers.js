/**
 * Created by asee2278 on 12/9/16.
 */
var hotelData = require('../data/hotel-data.json')

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
    var returnData = hotelData.slice(offset,offset+count)

    res.status(200).json(returnData);
}

module.exports.hotelsGetOne = function(req,res){
    var id = req.params.hotelId
    var thisHotel = hotelData[id]
    console.log(req.query)
    console.log('get one hotel'+id)
    res.status(200).json(thisHotel);

}