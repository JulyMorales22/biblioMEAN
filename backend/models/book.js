import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name:String,
    author:String,
    description:String, // breve resumen del libro
    category:String, 
    location:String, //en que parte de la biblioteca esta localizado
    cantidad: Number,
    registerDate: {type:Date, default: Date.now}, 
    dbStatus : Boolean
})

const book = mongoose.model("books", bookSchema);
export default book;