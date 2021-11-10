import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';




// 1st step
const userSchema = mongoose.Schema({
    full_name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
});


// 2nd step
const UserModel = mongoose.model('user', userSchema)

export default UserModel