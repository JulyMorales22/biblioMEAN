//verificar que el usuario exista para los prestamos

import user from "../models/user.js";

const existingUsers= async (req, res, next) => {
    if (!req.body.user)
      return res.status(400).send({ message: "Incomplete data" });
  
    const existingUser = await user.findOne({ email: req.body.user});
    
  
  
    if (!existingUser)
      return res.status(400).send({ message: "The user no registered" });
  
      req.body.user = existingUser._id; //estoy reasignando user, para que guarde con el id 
  
      next();
  };
  
  export default {existingUsers};