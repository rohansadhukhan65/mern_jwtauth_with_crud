import express from 'express'
import colors from 'colors'
const app = express()

// 
app.get('/' , (req , res)=>{
    res.send('hello')
})


const PORT = 5000
app.listen(PORT , ()=>{
    console.log(`Server runnig on localhost:${PORT}`.yellow.bold.underline)
})