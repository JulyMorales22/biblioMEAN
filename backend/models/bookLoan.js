import mongoose from "mongoose";


const bookLoanSchema = new mongoose.Schema({
    dateLoan: Date,
    dateReturn: Date,
    user:{type: mongoose.Schema.ObjectId, ref: "users"},
    book:{ type: mongoose.Schema.ObjectId, ref: "books"}

})