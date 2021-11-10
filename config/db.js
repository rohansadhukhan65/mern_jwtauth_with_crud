import mongoose from 'mongoose'

const conectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB is Connected ! Host: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`MongoDB Connection Failed !`.red.underline.bold)
        console.log(`Reason : ${error}`.red.underline.bold)
    }

}


export default conectDB;