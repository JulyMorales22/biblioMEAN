//conexion node con mongodb

import mongoose from "mongoose";

const dbConnection = () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with mongoDB: OK");
  } catch (e) {
      console.log("Error connecting to MongoDB: \n", e);
  }
};

export default {dbConnection}; //Para poder usarla en otros modulos