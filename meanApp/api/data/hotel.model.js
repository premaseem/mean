/**
 * Created by asee2278 on 12/13/16.
 */

var mongoose = require('mongoose')

var reviewSchema = new mongoose.schema({
    name : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        min : 0,
        max : 5,
        required : true
    },
    review : String,
    createdOn : {
        type : Date,
        "default":Date.now
    }

})

var roomSchema = new mongoose.schema({
    type : String,
    number : Number,
    description : String,
    photos : [String],
    price : Number
});


var hotelSchema =  new mongoose.schema({
    name:String,
    stars:{
        type:Number,
        min:0,
        max:5,
        "default":0
    },
    description:String,
    photos:[String],
    currency:String,
    reviews : [reviewSchema],
    rooms : [roomSchema],
    location : {
        address : String,
        coordinates : {
            type : [Number],
            index : '2dsphere'
        }
    }
})

mongoose.model('Hotel',hotelSchema,'hotels');