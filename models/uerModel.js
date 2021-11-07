import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';





const userSchema = mongoose.Schema({
    full_name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
});


