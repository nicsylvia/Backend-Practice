import { userData } from "./AllInterfaces";

import { Schema, model } from "mongoose";
import isEmail from "validator/lib/isEmail";

interface AllUsers extends Document, userData{};

const userSchema =  new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter a correct email"],
        unique: true,
        lowercase: true,
        trim: true,
        validate: [isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a strong password"],
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: [true, "please confirm ypur password"],
        minlength: 8
    },
    role: {
        type: String,
        required: true,
        enum: ["Admn", "User", "Agents"],
        default: "User",
        message: `Please enter in the reuired fields for your role as provided`,
    }
});

const UserModels = model<AllUsers>("Users", userSchema)

