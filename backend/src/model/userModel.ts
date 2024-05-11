import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "please provide your name"]
    },
    phoneNo: {
        type: String,
        required: [true, "provide the PhoneNo"],
        maxLength: [10, "please check the number"]
    },
    email: {
        type: String,
        required: [true, 'please provide the email'],
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: [true, "insert your Password"],
        minLength: 8
    },
    isVerified:{
        type: Boolean,
        default: false
   },
    verifyToken: String,
    verifyTokenExpiry: String,

})
 export default mongoose.model("user", userSchema)