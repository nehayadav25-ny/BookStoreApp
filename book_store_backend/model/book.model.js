import mongoose from "mongoose";
const  bookSchema = mongoose.Schema({
  name : String,
  price : Number,
  category : String,
  image : String,
  title : String
})
const Book = mongoose.model("BOOKS", bookSchema);
export default Book