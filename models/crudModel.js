import mongoose from 'mongoose'

// mongoose.Schema is a function by which we create our model we have to pass a scema object into function's parameter

const crudSchema = mongoose.Schema(
    {
        name : { type: String, required : true },
        email : { type: String, required : true, lowercase: true },
        image : { type: String, required : true },
        createdBy : { type: String, required : true },
        date : { type: Date, default : Date.now },
    }
)