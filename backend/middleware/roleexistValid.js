import role from "../models/role.js";

const existingRole = async (req, res, next) => {
  if (!req.body.name)
    return res.status(400).send({ message: "incomplete data" });

  const existingNameRole = await role.findOne({ name: req.body.name });
  

  if (existingNameRole)
    return res.status(400).send({ message: "the role is already registered" });

  next();
};

export default { existingRole };
