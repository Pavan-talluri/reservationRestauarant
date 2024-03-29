import User from "../models/User.js";


export const updateUser = async(req,res,next)=>{

    try{
        const UpdatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body})
        res.status(200).json(UpdatedUser)
      }catch(err){
        next(err);
      }
}
export const deleteUser = async(req,res,next)=>{

    
    try{
        await User.findByIdAndDelete(req.params.id);
       res.status(200).json("rest del");
     }catch(err){
        next(err);
     }
}

export const getUser = async(req,res,next)=>{
  
    
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
      }catch(err){
        next(err);
      }
    
}

export const getUsers = async(req,res,next)=>{

    try{
        const Users = await User.find()
        res.status(200).json(Users)
      }catch(err){
        next(err);
      }
}