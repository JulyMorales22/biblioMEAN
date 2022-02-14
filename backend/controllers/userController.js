import user from "../models/user.js";
import role from "../models/role.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send({ message: "Incomplete data" });

  const existingUser = await user.findOne({ email: req.body.email });

  if (existingUser)
    return res.status(400).send({ message: "The user is already registered" });
  const passHash = await bcrypt.hash(req.body.password, 10);

  const roleId = await role.findOne({ name: "pruebabiblioMean" });
  if (!roleId) return res.status(500).send({ message: "No role was assigned" });

  const userSchema = new user ({
    name: req.body.name,
    email: req.body.email,
    password: passHash,
    role: roleId._id,
    dbStatus:true,
  })

  const result = await userSchema.save();
  if (!result)
    return res.status(500).send({ message: "failed to register role" });
  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          role: result.role,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    return res.status(500).send({ message: "Register error" });
  }
};

export default { registerUser };
