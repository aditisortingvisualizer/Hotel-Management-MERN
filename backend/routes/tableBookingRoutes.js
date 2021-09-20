import express from 'express'
const  router = express.Router()
import { createTBooking, getAlltableBookings, getUserTableBookings } from '../controllers/tableBookingController.js'
import { protect, admin } from '../middleware/authMiddleware.js'



router.route('/').post(createTBooking).get(protect, getAlltableBookings)
router.get('/tableReservations',protect,  getUserTableBookings)

export default router