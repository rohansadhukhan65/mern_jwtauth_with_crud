import express from 'express'  // we import express
const app = express() // we initialize express function into app variable

import colors from 'colors' // we import colors for coloring our console msg
import dotenv from 'dotenv' // we import dotenv pkg in main server.js for using env file
dotenv.config() ///call config method and initialize etc...

import conectDB from './config/db.js'  // we import db conection
conectDB() // we call db connection in server.js file


app.use(express.json()) // enable application to fetch value from req.body 



// Load Routs here ...
import userRouter from './routes/userRoutes.js' // we import user routes
app.use('/api', userRouter) //we use user routes

app.get('/' , (req , res)=>{
    res.send({})
})


const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log(`Server runnig on http://localhost:${PORT}`.yellow.bold.underline)
})