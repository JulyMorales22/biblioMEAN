import bookLoan from "../models/bookLoan.js";

const registerBookLoan = async (req, res) => {
  console.log(req.body.book);
  console.log(req.body.user);
  console.log(req.body.dateLoan);
  console.log(req.body.dateReturn);
  if (
    !req.body.dateLoan ||
    !req.body.dateReturn ||
    !req.body.user ||
    !req.body.book
  )
    return res.status(400).send({ message: "Incomplete datass" });

  const bookLoanSchema = new bookLoan({
    dateLoan: req.body.dateLoan,
    dateReturn: req.body.dateReturn,
    user: req.body.user,
    book: req.body.book,
  });

  let result = await bookLoanSchema.save();
  if (!result)
    return res.status(500).send({ message: "failed to register book loan" });
  res.status(200).send({ result });
};

export default { registerBookLoan };
