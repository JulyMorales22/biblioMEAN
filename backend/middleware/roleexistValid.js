import role from "../models/role.js";

const existingRole = async (req, res, next) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "incomplete data" });

  const existingNameRole = await role.findOne({ name: req.body.name });
  const existingDescription = await role.findOne({
    description: req.body.description
  });

  if (existingNameRole && existingDescription)
    return res.status(400).send({ message: "the role is already registered" });

  next();
};

export default { existingRole };
