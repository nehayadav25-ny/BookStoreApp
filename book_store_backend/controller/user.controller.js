import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup =async (req,res)=>{
  try{
const {fullname, email, password}= req.body;
const user = await User.findOne({email})
if(user){
 return  res.status(200).json({message:"user already exsit "})
}
const hashPassword = await bcryptjs.hash(password,8) // password secure 
const createdUser = new User({
  fullname:fullname,
  email:email,
  password: hashPassword
})
await createdUser.save()
res.status(201).json({message:"user created succesfully",user:{
  _id : createdUser._id,
  fullname : createdUser.fullname,
  email : createdUser.email,

}})
  }catch(error){
console.log("eror",error)
res.status(500).json({message:"internal server error"})
  }
}


//login 

export const login =async (req,res)=>{
  try{
const {email, password}= req.body;
const user = await User.findOne({email})
const isMatch= await bcryptjs.compare(password,user.password)
if(!user || !isMatch){
  return res.status(400).json({message:"invalid username or password"})
}else{
    return res.status(200).json({message:"login successfully", user:{
      _id : user._id,
fullname : user.fullname,
email:user.email
    }})

}

  }catch(error){
console.log("eror",error)
res.status(500).json({message:"internal server error"})

  }
}