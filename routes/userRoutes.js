import express from 'express'
const router = express.Router()


// import controller here ...
import {
    loginController,
    registerController
} from '../controllers/userController.js'




// Define Routes Here ...
router.route('/registerUser').post(registerController)
router.route('/login').post(loginController)


export default router