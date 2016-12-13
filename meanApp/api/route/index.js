/**
 * Created by asee2278 on 12/9/16.
 */

var express = require('express')
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers')
var ctrlReviews = require('../controllers/reviews.controllers')

router
    .route('/hotels')
.get(ctrlHotels.hotelsGetAll);

router.route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);

router.route('/hotels/new')
    .post(ctrlHotels.hotelsAddOne);

router.route('/hotels/:hotelId/reviews')
    .get(ctrlReviews.reviewsGetAll);

router.route('/hotels/:hotelId/reviews/:reviewId')
    .get(ctrlReviews.reviewsGetOne);

module.exports = router