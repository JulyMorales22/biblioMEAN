import role from "../models/role.js";
import user from "../models/user.js";

const registerRole = async (req, res) => {
  // if (!req.body.name || !req.body.description)
  //   return res.status(400).send({ message: "Incomplete data" });

  const schema = new role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  let result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "failed to register role" });
  res.status(200).send({ result });
};

const listRoleAdmin = async (req, res) => {
  let roles = await role.find();

  return roles.length === 0
    ? res.status(400).send({ message: "No search results" })
    : res.status(200).send({ roles });
};

const listRoleFilter = async (req, res) => {
  let rolesFilter = await role.find({
    $and: [{ name: new RegExp(req.params["name"]) }, { dbStatus: "true" }],
  });

  return rolesFilter.length === 0
    ? res.status(400).send({ message: "No search results" })
    : res.status(200).send({ rolesFilter });
};

const deleteRole = async (req, res) => {
  if (!req.params["_id"])
    return res.status(400).send({ message: "Incomplete data" });

  const roles = await role.findByIdAndUpdate(req.params["_id"], {
    dbStatus: false,
  });
  return !roles
    ? res.status(400).send({ message: "Error deleting role" })
    : res.status(200).send({ message: "Successfully deleted role" });
};

const updateRole = async (req, res) =>{
  if(!req.body._id || !req.body.name || !req.body.description) return res.status(400).send({ message: "Incomplete data"})

  const editRole = await role.findByIdAndUpdate(req.body._id ,{
    name: req.body.name,
    description: req.body.description
  })
  return !editRole ? res.status(500).send({ message: "Error editing role"}): res.status(200).send({ message: "Role updated"})
};

export default { registerRole, listRoleAdmin, listRoleFilter, deleteRole, updateRole };
