 import mongoose from "mongoose";


const RestaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    photos:{
        type: [String]
    },
    address:{
        type: String,
        required: true
    },
    distance:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min:0,
        max:8
    },
    dishes:{
        type: [String],
        required: true
    },
    featured:{
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("Restaurant",RestaurantSchema)