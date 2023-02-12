import mongoose from "mongoose";
import { environmentVariables } from "./environmentVariables";

const LOCAL_URL = environmentVariables.MONGODB_URL

export const DBconnect = async() =>{
    try {
        const DB_URL = await mongoose.connect(LOCAL_URL)
        console.log(`Database is connected to ${DB_URL.connection.host}`)
    } catch (error) {
        console.log("Couldn't connect Database")
    }
}