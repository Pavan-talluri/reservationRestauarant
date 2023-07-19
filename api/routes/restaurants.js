import express from "express";
import { countbyCity, countbyCuisine, createRestaurant, deleteRestaurant, getRestaurant, getRestaurants, updateRestaurant } from "../controllers/hotel.js";
import Restaurant from "../models/Restaurant.js";
import { verifyAdmin } from "../utils/verifytoken.js";

const router = express.Router();

//Create
router.post("/",verifyAdmin,createRestaurant);
//Update
router.put("/:id",verifyAdmin,updateRestaurant);

//Delete
router.delete("/:id",verifyAdmin,deleteRestaurant);

 //Get
 router.get("/find/:id",getRestaurant);
//Getall
router.get("/",getRestaurants);
router.get("/countbyCity",countbyCity);
router.get("/countbyCuisine",countbyCuisine);

export default router;