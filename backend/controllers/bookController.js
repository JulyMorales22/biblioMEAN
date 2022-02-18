
import book from "../models/book.js";

const registerBook = async (req, res) => {
  if (
    // !req.body.name ||
    // !req.body.author ||
    !req.body.description ||
    !req.body.category ||
    !req.body.location ||
    !req.body.cantidad
  )
    return res.status(400).send({ message: "Incomplete Data" });

  const bookSchema = new book({
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    category: req.body.category,
    location: req.body.location,
    cantidad: req.body.cantidad
  });

  let result = await bookSchema.save();
  if (!result) return res.status(500).send({ message: "failed to resgister book" });
  res.status(200).send({ result });
};
const listBook = async (req, res) =>{
  let books = await book.find();

  return books.length ===0? 
  res.status(400).send({ message: "no search result"}):
   res.status(200).send({ books})

}

const listFilterBook = async (req, res) =>{
  let booksfilter = await book.find( {author: new RegExp(req.params["author"])});

  return booksfilter.length ===0? res.status(400).send({ message: "no search result"}): res.status(200).send({ booksfilter})
}
export default { registerBook, listBook, listFilterBook };
