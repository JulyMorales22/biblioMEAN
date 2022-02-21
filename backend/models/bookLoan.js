import mongoose from "mongoose";


const bookLoanSchema = new mongoose.Schema({
    dateLoan: String,
    dateReturn: String,
    user:{type: mongoose.Schema.ObjectId, ref: "users"},//que pongan el correo de la persona
    book:{ type: mongoose.Schema.ObjectId, ref: "books"}// que pongan el nombre y el author

});

const book = mongoose.model("bookLoan", bookLoanSchema);
export default book;