import express from'express'
import dotenv from'dotenv'
import mongoose from 'mongoose'
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 4000  // if env bala port n chle to 4000 bala chl jae
const URI = process.env.MongoDBURI;
//connect to mongodb
try{
mongoose.connect(URI,{
  useNewUrlParser : true,
  useUnifiedTopology : true,
});
console.log("connected to mongoDB")
}catch(error){
  console.log("error",error)

}
// defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)





app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
