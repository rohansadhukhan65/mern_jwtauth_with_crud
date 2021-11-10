import asyncHandler from 'express-async-handler'



// Registration of User
const registerController = asyncHandler(async (req , res) => {

    res.status(201).json(req.body)

})


// User Login
const loginController = asyncHandler(async (req ,res) => {

})



export {loginController , registerController}