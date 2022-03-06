
import book from "../models/book.js";
import role from "../models/role.js";

const registerBook = async (req, res) => {
  if (
    // !req.body.name ||
    // !req.body.author ||
    !req.body.description ||
    !req.body.category ||
    !req.body.location ||
    !req.body.quantity
  )
    return res.status(400).send({ message: "Incomplete Data" });

  const bookSchema = new book({
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    category: req.body.category,
    location: req.body.location,
    quantity: req.body.quantity,
    dbStatus:true
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
  let booksfilter = await book.find({ $and:[{author: new RegExp(req.params["author"])}, {dbStatus:true }]});

  return booksfilter.length ===0? res.status(400).send({ message: "no search result"}): res.status(200).send({ booksfilter})
}

const deleteBook = async (req, res) =>{
  if(!req.params["_id"]) return res.status(400).send({ message: "Incomplete data"})

  const bookDelete = await book.findByIdAndUpdate(req.params["_id"], {
    dbStatus:false,
  });

  return !bookDelete? res.status(400).send({ message: "Error deleting book"}): res.status(200).send({message: "book delete successfully"})

};

const updateBook = async (req, res) =>{
  if( !req.body._id ||!req.body.name || !req.body.author || !req.body.description || !req.body.category || !req.body.location ||!req.body.quantity) return res.status(400).send({ message: "Incomplete data"})

  const editBook = await book.findOneAndUpdate(req.body._id ,{
    name : req.body.name,
    author: req.body.author,
    description: req.body.description,
    category: req.body.category,
    location: req.body.location,
    quantity: req.body.quantity
  })

  return !editBook? res.status(500).send({ message: "Error editing book"}): res.status(200).send({ message: "Book updated"})
};
export default { registerBook, listBook, listFilterBook, updateBook, deleteBook};
