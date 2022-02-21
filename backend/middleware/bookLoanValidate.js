//verificar que el libro a prestar este registrado

import book from "../models/book.js";

const existingBooks = async (req, res, next) => {
  if (!req.body.book)
    return res.status(400).send({ message: "Incomplete data" });

  const existingBook = await book.findOne({ name: req.body.book });




  if (!existingBook)
    return res.status(400).send({ message: "The book is  no registered" });

    req.body.book = existingBook._id;

    next();
};

export default {existingBooks};