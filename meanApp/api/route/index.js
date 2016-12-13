/**
 * Created by asee2278 on 12/9/16.
 */

var express = require('express')
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers')

router
    .route('/hotels')
.get(ctrlHotels.hotelsGetAll);

router.route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);

router.route('/hotels/new')
    .post(ctrlHotels.hotelsAddOne);

router.route('/hotels/:hotelId/reviews')
    .get(ctrlReviews.hotelsGetAll);

router.route('/hotels/:hotelId/reviews/:reviewId')
    .get(ctrlReviews.hotelsGetOne);

module.exports = router