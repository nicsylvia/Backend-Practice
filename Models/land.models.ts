import { Document, Schema, model } from "mongoose";

import { landData } from "./AllInterfaces";

interface AllLands extends Document, landData{};

const landSchema = new Schema({
    price: {
        type: String,
        required: [true, "Please enter the price of the land"],
    },
    location: {
        type: String,
        required: [true, "Please enter the land location"]
    },
    image: {
        type: String,
        required: [true, "Please enter an image of the land"]
    },
    view: []
});

const LandModels = model<AllLands>("LANDS", landSchema);

export default LandModels;