/**
 * Created by asee2278 on 12/9/16.
 */
path = require('path')
module.exports.hotelsGetAll = function(req,res){

    console.log('get all hotels')
    res.status(200).send({"key":"hotel"});
}