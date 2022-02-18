import user from "../models/user.js";

const existingUser = async (req, res, next) => {
  if (!req.body.email)
    return res.status(400).send({ message: "Incompletes datas" });

  const existingUser = await user.findOne({ email: req.body.email });

  if (existingUser)
    return res.status(400).send({ message: "The user is already registered" });

    next();
};

export default { existingUser};