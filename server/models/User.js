import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 2,
    },
    picturePath: {
        type: String,
        default: "",
    },
    friends: {
        type: [String], // Assuming an array of user IDs or emails
        default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;
