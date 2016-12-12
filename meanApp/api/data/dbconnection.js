/**
 * Created by asee2278 on 12/11/16.
 */

var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanhotel'
var _connection = null

var open = function(){
MongoClient.connect(dburl,function(err,db){
if (err){
    console.log("Db connection failed ")
    return;
}
    _connection = db;
    console.log("connected successful :-) ")
});
}

var get = function () {
    return _connection;
}

module.exports = {
    open : open,
    get : get
}