import asyncHandler from 'express-async-handler'



// Registration of User
const registerController = asyncHandler(async (req , res) => {

    res.status(201).json(req.body);

})


// User Login
const loginController = asyncHandler(async (req ,res) => {
    let {name , pwd} = req.body;
   res.status(201).json({"name":name , "pwd":pwd})
})



export {loginController , registerController}