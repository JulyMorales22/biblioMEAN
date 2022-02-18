import book from "../models/book.js";

const existingBook = async (req, res, next) => {
  if (!req.body.name)
    return res.status(400).send({ message: "Incomplete data" });

  const existingBooks = await book.findOne({ name: req.body.name });

  if (existingBooks)
    return res.status(400).send({ message: "The book is already registered" });

    next();
};

export default {existingBook};