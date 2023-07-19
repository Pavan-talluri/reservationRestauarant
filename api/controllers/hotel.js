import Restaurant from "../models/Restaurant.js"

export const createRestaurant = async(req,res,next)=>{

    const newRestaurant = new Restaurant(req.body);
   try{
     const savedRestaurant = await newRestaurant.save()
     res.status(200).json(savedRestaurant)
   }catch(err){
     next(err);
   }
}

export const updateRestaurant = async(req,res,next)=>{

    try{
        const UpdatedRest = await Restaurant.findByIdAndUpdate(req.params.id, { $set: req.body})
        res.status(200).json(UpdatedRest)
      }catch(err){
        next(err);
      }
}
export const deleteRestaurant = async(req,res,next)=>{

    
    try{
        await Restaurant.findByIdAndDelete(req.params.id);
       res.status(200).json("rest del");
     }catch(err){
        next(err);
     }
}

export const getRestaurant = async(req,res,next)=>{
  
    
    try{
        const Resatuarant = await Restaurant.findById(req.params.id);
        res.status(200).json(Resatuarant)
      }catch(err){
        next(err);
      }
    
}

export const getRestaurants = async(req,res,next)=>{
   
    try{
        const Restaurants = await Restaurant.find()
        res.status(200).json(Restaurants)
      }catch(err){
        next(err);
      }
}

export const countbyCity = async(req,res,next)=>{
  const cities = req.query.cities.split(",") 
  try{
      const list = await Promise.all(cities.map(city => {
             return Restaurant.countDocuments({city:city})
      }))
      res.status(200).json(list)
    }catch(err){ 
      next(err);
    }
}

export const countbyCuisine = async(req,res,next)=>{
  try{
  const chinesecount =  await Restaurant.countDocuments({type:"Chinese"})
  const northindiancount = await Restaurant.countDocuments({type:"Northindian"})
  const southindiancount = await Restaurant.countDocuments({type:"Southindian"})

  res.status(200).json([
    {type: "Chinese" ,count: chinesecount},
    {type: "Northindian" ,count: northindiancount},
    {type: "Southindian" ,count: southindiancount},
  ]);
  }catch(err){
      next(err);
    }
}