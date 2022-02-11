import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name:String,
    author:String,
    description:String, // breve resumen del libro
    category:String, 
    location:String, //en que parte de la biblioteca esta localizado
    rentalDate: Date, //fecha en que se  presto
    cantidad: Number,
    registerDate: {type:Date, default: Date.now}, 
    user:{type: mongoose.Schema.ObjectId, ref:"users"},
})

const book = mongoose.model("books", bookSchema);
export default book;