import role from "../models/role.js";

const existingRole = async (req, res, next) =>{
    if(!req.body.name) return res.status(400).send({ message: "incomplete data"})

    const existingRole  = await role.find( { name: req.body.name})

    if(existingRole)
    return res.status(400).send({ message: "the role is already registered"})

    next();
}

export default { existingRole};